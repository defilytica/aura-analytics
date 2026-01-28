import { useState, useEffect } from 'react';
import { VoteMarketResponse, VoteMarketAnalytics, VoteMarketHistoricalRound, VoteMarketRoundMetadata } from './voteMarketTypes';
import { VOTE_MARKET_AURA_METADATA_URL, VOTE_MARKET_AURA_HISTORICAL_BASE_URL } from './constants';

// Aura voter proxy address - holds Aura's veBAL voting power
export const AURA_VOTER_PROXY = '0xaF52695E1bB01A16D33D7194C28C42b10e0Dbec2'.toLowerCase();

export interface VoteMarketIncentivesResult {
    data: VoteMarketResponse | null;
    loading: boolean;
    error: string | null;
    currentRoundId: number;
    totalRewardsUSD: number;
    totalVotes: number;
    dollarPerVote: number;
    votingEfficiency: number; // Emissions per $1 spent
}

/**
 * Hook for fetching current Votemarket data for Aura.
 *
 * Uses the vlaura endpoint directly which provides Aura-specific data:
 * - totalDepositedUSD: Aura's share of rewards
 * - globalAverageDollarPerVote: $/vlAURA
 * - globalAverageEfficiency: Emissions per $1 spent (key metric!)
 * - analytics[]: Per-gauge breakdown with Aura votes and efficiency
 *
 * Fetches the latest available round from the vlaura endpoint.
 */
export const useGetVoteMarketIncentives = (): VoteMarketIncentivesResult => {
    const [data, setData] = useState<VoteMarketResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentRoundId, setCurrentRoundId] = useState<number>(0);
    const [totalRewardsUSD, setTotalRewardsUSD] = useState<number>(0);
    const [totalVotes, setTotalVotes] = useState<number>(0);
    const [dollarPerVote, setDollarPerVote] = useState<number>(0);
    const [votingEfficiency, setVotingEfficiency] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch Aura-specific metadata to get available rounds
                const metadataResponse = await fetch(VOTE_MARKET_AURA_METADATA_URL);
                if (!metadataResponse.ok) {
                    throw new Error(`Failed to fetch Aura metadata: ${metadataResponse.status}`);
                }
                const metadata: VoteMarketRoundMetadata[] = await metadataResponse.json();

                if (metadata.length === 0) {
                    throw new Error('No rounds available in Aura metadata');
                }

                // Get the latest round (highest ID = most recent)
                const latestRound = metadata.reduce((max, r) => r.id > max.id ? r : max, metadata[0]);
                setCurrentRoundId(latestRound.id);

                console.log(`Votemarket Aura: Loading current round ${latestRound.id}`);

                // Fetch the latest round data
                const roundUrl = `${VOTE_MARKET_AURA_HISTORICAL_BASE_URL}/${latestRound.id}.json`;
                const roundResponse = await fetch(roundUrl);
                if (!roundResponse.ok) {
                    throw new Error(`Failed to fetch round ${latestRound.id}: ${roundResponse.status}`);
                }
                const roundData: VoteMarketHistoricalRound = await roundResponse.json();

                // Extract metrics directly from the Aura-specific data
                const rewards = roundData.totalDepositedUSD || 0;
                const avgDollarPerVote = roundData.globalAverageDollarPerVote || 0;
                const avgEfficiency = roundData.globalAverageEfficiency || 0;

                // Calculate total votes from analytics
                let votes = 0;
                if (roundData.analytics) {
                    roundData.analytics.forEach(ga => {
                        votes += parseFloat(ga.nonBlacklistedVotes?.toString() || '0');
                    });
                }

                setTotalRewardsUSD(rewards);
                setTotalVotes(votes);
                setDollarPerVote(avgDollarPerVote);
                setVotingEfficiency(avgEfficiency);

                // Build analytics structure for compatibility with existing components
                const analytics: VoteMarketAnalytics = {
                    totalDepositedUSD: rewards,
                    globalAverageDollarPerVote: avgDollarPerVote,
                    globalAverageEfficiency: avgEfficiency,
                    analytics: roundData.analytics || []
                };

                console.log(`\n========== Votemarket Aura Current Round ==========`);
                console.log(`Round ID: ${latestRound.id}`);
                console.log(`Total Rewards: $${rewards.toFixed(2)}`);
                console.log(`Total Votes: ${votes.toFixed(0)}`);
                console.log(`$/vlAURA: ${avgDollarPerVote.toFixed(6)}`);
                console.log(`Voting Efficiency (Emissions per $1): ${avgEfficiency.toFixed(2)}`);
                console.log(`Gauges with incentives: ${roundData.analytics?.length || 0}`);
                console.log(`===================================================\n`);

                setData({
                    success: true,
                    campaigns: [], // No campaigns from static endpoint
                    analytics
                });
                setError(null);
            } catch (err) {
                console.error('Error fetching Votemarket Aura data:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        currentRoundId,
        totalRewardsUSD,
        totalVotes,
        dollarPerVote,
        votingEfficiency
    };
};

/**
 * Helper function to get total votes from analytics.
 */
export const getTotalVotesFromAnalytics = (analytics: VoteMarketAnalytics | null): number => {
    if (!analytics || !analytics.analytics) return 0;
    return analytics.analytics.reduce(
        (sum, ga) => sum + (typeof ga.nonBlacklistedVotes === 'number' ? ga.nonBlacklistedVotes : parseFloat(ga.nonBlacklistedVotes || '0')),
        0
    );
};

/**
 * Helper function to get total incentives USD from analytics.
 * Uses totalDeposited which is Aura's share from the vlaura endpoint.
 */
export const getTotalIncentivesUSD = (analytics: VoteMarketAnalytics | null): number => {
    if (!analytics || !analytics.analytics) return 0;
    return analytics.analytics.reduce(
        (sum, ga) => sum + (ga.totalDeposited || 0),
        0
    );
};

/**
 * Helper function to get voting efficiency from analytics.
 * This is the "Emissions per $1 spent" metric.
 */
export const getVotingEfficiency = (analytics: VoteMarketAnalytics | null): number => {
    if (!analytics) return 0;
    return analytics.globalAverageEfficiency || 0;
};
