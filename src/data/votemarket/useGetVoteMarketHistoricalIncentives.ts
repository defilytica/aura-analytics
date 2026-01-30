import { useState, useEffect } from 'react';
import {
    VoteMarketRoundMetadata,
    VoteMarketHistoricalRound,
    VoteMarketHistoricalData
} from './voteMarketTypes';
import {
    VOTE_MARKET_AURA_METADATA_URL,
    VOTE_MARKET_AURA_HISTORICAL_BASE_URL,
    VOTE_MARKET_FIRST_VALID_ROUND
} from './constants';
import { unixToDate } from '../../utils/date';

const BATCH_SIZE = 5;
const BATCH_DELAY = 200;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Extract Aura metrics from historical round data.
 *
 * The vlaura endpoint provides Aura-specific data directly:
 * - totalDeposited: Aura's share of rewards
 * - dollarPerVote: Already calculated for Aura voters
 * - efficiency: Already calculated for Aura voters
 * - nonBlacklistedVotes: Actual Aura/vlAURA votes
 *
 * No share calculation needed - data is already Aura-specific.
 */
function extractAuraHistoricalMetrics(
    roundData: VoteMarketHistoricalRound
): {
    auraRewardsUSD: number;
    auraDollarPerVote: number;
    totalVotes: number;
    avgEfficiency: number;
} {
    if (!roundData.analytics || roundData.analytics.length === 0) {
        return { auraRewardsUSD: 0, auraDollarPerVote: 0, totalVotes: 0, avgEfficiency: 0 };
    }

    let totalRewards = 0;
    let totalVotes = 0;
    let weightedEfficiency = 0;

    roundData.analytics.forEach(ga => {
        // vlaura endpoint: totalDeposited is already Aura's share
        const rewards = ga.totalDeposited || 0;
        const votes = parseFloat(ga.nonBlacklistedVotes?.toString() || '0');
        const efficiency = ga.efficiency || 0;

        if (rewards > 0) {
            totalRewards += rewards;
            totalVotes += votes;
            // Weight efficiency by rewards for averaging
            weightedEfficiency += efficiency * rewards;
        }
    });

    // Use the global average from the round data if available, otherwise calculate
    const avgEfficiency = totalRewards > 0
        ? (roundData.globalAverageEfficiency || weightedEfficiency / totalRewards)
        : 0;

    // Use global dollar per vote if available, otherwise calculate
    const dollarPerVote = roundData.globalAverageDollarPerVote ||
        (totalVotes > 0 ? totalRewards / totalVotes : 0);

    return {
        auraRewardsUSD: totalRewards,
        auraDollarPerVote: dollarPerVote,
        totalVotes,
        avgEfficiency
    };
}

/**
 * Hook for fetching historical Votemarket data for Aura.
 *
 * Uses the vlaura-specific endpoint which provides Aura-specific data directly:
 * - No share calculation needed - data is already for Aura/vlAURA voters
 * - Correct voting efficiency based on actual Aura votes
 * - Proper dollar per vote for Aura voters
 */
export const useGetVoteMarketHistoricalIncentives = () => {
    const [data, setData] = useState<VoteMarketHistoricalData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch Aura-specific metadata to get round IDs
                const metadataResponse = await fetch(VOTE_MARKET_AURA_METADATA_URL);
                if (!metadataResponse.ok) {
                    throw new Error(`Failed to fetch Aura metadata: ${metadataResponse.status}`);
                }
                const metadata: VoteMarketRoundMetadata[] = await metadataResponse.json();

                // Filter to valid rounds (starting from VOTE_MARKET_FIRST_VALID_ROUND)
                const validRounds = metadata.filter(r => r.id >= VOTE_MARKET_FIRST_VALID_ROUND);

                console.log(`Votemarket Aura Historical: Found ${metadata.length} rounds, ${validRounds.length} valid (>= round ${VOTE_MARKET_FIRST_VALID_ROUND})`);

                // Fetch historical data in batches from the Aura-specific endpoint
                const historicalData: { round: VoteMarketRoundMetadata; data: VoteMarketHistoricalRound }[] = [];

                for (let i = 0; i < validRounds.length; i += BATCH_SIZE) {
                    const batch = validRounds.slice(i, i + BATCH_SIZE);

                    const batchResults = await Promise.all(
                        batch.map(async (round) => {
                            try {
                                const url = `${VOTE_MARKET_AURA_HISTORICAL_BASE_URL}/${round.id}.json`;
                                const response = await fetch(url);
                                if (!response.ok) {
                                    console.warn(`Failed to fetch Aura round ${round.id}: ${response.status}`);
                                    return null;
                                }
                                const roundData: VoteMarketHistoricalRound = await response.json();
                                return { round, data: roundData };
                            } catch (err) {
                                console.warn(`Error fetching Aura round ${round.id}:`, err);
                                return null;
                            }
                        })
                    );

                    historicalData.push(...batchResults.filter((r): r is NonNullable<typeof r> => r !== null));

                    if (i + BATCH_SIZE < validRounds.length) {
                        await delay(BATCH_DELAY);
                    }
                }

                // Sort by timestamp
                historicalData.sort((a, b) => a.round.endVoting - b.round.endVoting);

                // Transform to chart data format - data is already Aura-specific
                const dollarPerVlAssetData: { value: number; time: string }[] = [];
                const totalAmountDollarsData: { value: number; time: string }[] = [];
                const xAxisData: string[] = [];

                historicalData.forEach(({ round, data: roundData }) => {
                    const dateStr = unixToDate(round.endVoting);

                    // Extract Aura metrics directly (no share calculation needed)
                    const { auraRewardsUSD, auraDollarPerVote, totalVotes, avgEfficiency } =
                        extractAuraHistoricalMetrics(roundData);

                    dollarPerVlAssetData.push({
                        value: auraDollarPerVote,
                        time: dateStr
                    });

                    totalAmountDollarsData.push({
                        value: auraRewardsUSD,
                        time: dateStr
                    });

                    xAxisData.push(dateStr);

                    console.log(`  Round ${round.id} (${dateStr}): $${auraRewardsUSD.toFixed(2)} rewards, ${totalVotes.toFixed(0)} votes, efficiency: ${avgEfficiency.toFixed(2)}`);
                });

                console.log(`Votemarket Aura Historical Data Summary:`);
                console.log(`  Rounds loaded: ${historicalData.length}`);
                if (historicalData.length > 0) {
                    const lastRound = historicalData[historicalData.length - 1];
                    const { auraRewardsUSD, avgEfficiency } = extractAuraHistoricalMetrics(lastRound.data);
                    console.log(`  Latest round: $${auraRewardsUSD.toFixed(2)} rewards, efficiency: ${avgEfficiency.toFixed(2)}`);
                }

                setData({
                    dollarPerVlAssetData,
                    totalAmountDollarsData,
                    xAxisData
                });
                setError(null);
            } catch (err) {
                console.error('Error fetching Votemarket Aura historical data:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
