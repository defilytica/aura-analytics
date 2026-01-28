import { BalancerStakingGauges } from '../../data/balancer/balancerTypes';
import { HiddenHandIncentives } from '../../data/hidden-hand/hiddenHandTypes';
import { VoteMarketAnalytics, VoteMarketCampaign } from '../../data/votemarket/voteMarketTypes';

export function decorateGaugesWithIncentives(
    balancerGauges: BalancerStakingGauges[],
    votingIncentives: HiddenHandIncentives
): BalancerStakingGauges[] {
    const processedAddresses = new Set<string>();

    return balancerGauges.map((gauge) => {
        const gaugeAddressLower = gauge.address.toLowerCase();

        if (processedAddresses.has(gaugeAddressLower)) {
            return gauge;
        }
        const matchingIncentive = votingIncentives.data.find(
            (incentive) => incentive.proposal.toLowerCase() === gaugeAddressLower
        );
        if (matchingIncentive) {
            processedAddresses.add(gaugeAddressLower);

            return {
                ...gauge,
                voteCount: matchingIncentive.voteCount,
                valuePerVote: matchingIncentive.valuePerVote,
                totalRewards: matchingIncentive.totalValue,
            };
        } else {
            processedAddresses.add(gaugeAddressLower);
            return gauge;
        }
    });
}

// Decorate gauges with Vote Market analytics data
export function decorateGaugesWithVoteMarketIncentives(
    balancerGauges: BalancerStakingGauges[],
    analytics: VoteMarketAnalytics | null
): BalancerStakingGauges[] {
    if (!analytics || !analytics.analytics) {
        return balancerGauges;
    }

    const processedAddresses = new Set<string>();

    return balancerGauges.map((gauge) => {
        const gaugeAddressLower = gauge.address.toLowerCase();

        if (processedAddresses.has(gaugeAddressLower)) {
            return gauge;
        }

        const matchingAnalytics = analytics.analytics.find(
            (ga) => ga.gauge.toLowerCase() === gaugeAddressLower
        );

        processedAddresses.add(gaugeAddressLower);

        if (matchingAnalytics) {
            return {
                ...gauge,
                voteCount: typeof matchingAnalytics.nonBlacklistedVotes === 'number' ? matchingAnalytics.nonBlacklistedVotes : parseFloat(matchingAnalytics.nonBlacklistedVotes || '0'),
                valuePerVote: matchingAnalytics.dollarPerVote || 0,
                // Use totalDeposited for vlaura endpoint (Aura's share), fallback to incentiveDirectedUSD for Balancer endpoint
                totalRewards: matchingAnalytics.totalDeposited || matchingAnalytics.incentiveDirectedUSD || 0,
            };
        }

        return gauge;
    });
}

// Transform Vote Market campaigns to PoolReward format for charts
export interface PoolReward {
    pool: string;
    [token: string]: string | number;
}

export function extractVoteMarketPoolRewards(
    campaigns: VoteMarketCampaign[],
    analytics: VoteMarketAnalytics | null,
    gauges: BalancerStakingGauges[]
): PoolReward[] {
    const poolRewards: PoolReward[] = [];

    if (!analytics || !analytics.analytics) {
        console.log('extractVoteMarketPoolRewards: No analytics data');
        return poolRewards;
    }

    console.log(`extractVoteMarketPoolRewards: Processing ${analytics.analytics.length} gauges from ${campaigns.length} campaigns`);

    // Group campaigns by gauge for token symbol lookup
    const campaignsByGauge = new Map<string, VoteMarketCampaign[]>();
    campaigns.forEach(campaign => {
        const gaugeKey = campaign.gauge.toLowerCase();
        if (!campaignsByGauge.has(gaugeKey)) {
            campaignsByGauge.set(gaugeKey, []);
        }
        campaignsByGauge.get(gaugeKey)!.push(campaign);
    });

    // Process each gauge with incentives
    analytics.analytics.forEach(gaugeAnalytics => {
        const gaugeAddress = gaugeAnalytics.gauge.toLowerCase();
        const gaugeCampaigns = campaignsByGauge.get(gaugeAddress) || [];

        // Find the pool name from gauges
        const matchingGauge = gauges.find(g => g.address.toLowerCase() === gaugeAddress);
        const poolName = matchingGauge?.pool?.symbol || gaugeAddress.slice(0, 10) + '...';

        // Use totalDeposited from vlaura endpoint as Aura's share, fallback to incentiveDirectedUSD
        const totalUSD = gaugeAnalytics.totalDeposited || gaugeAnalytics.incentiveDirectedUSD || 0;

        console.log(`  Pool ${poolName}: totalDeposited = $${totalUSD?.toFixed(2) || 0}, campaigns found: ${gaugeCampaigns.length}`);

        if (totalUSD > 0.01) { // Filter out dust
            const poolReward: PoolReward = { pool: poolName };

            if (gaugeCampaigns.length > 0) {
                // Get unique token symbols from campaigns
                const tokenSymbols = new Set<string>();
                gaugeCampaigns.forEach(campaign => {
                    const symbol = campaign.rewardToken?.symbol?.toUpperCase() || 'TOKEN';
                    tokenSymbols.add(symbol);
                });

                // If multiple tokens, distribute equally (simplified)
                // In practice, most gauges have single-token incentives
                const tokenCount = tokenSymbols.size;
                const valuePerToken = totalUSD / tokenCount;

                tokenSymbols.forEach(symbol => {
                    poolReward[symbol] = valuePerToken;
                });
            } else {
                // No campaigns found, just show as generic incentives
                poolReward['INCENTIVES'] = totalUSD;
            }

            poolRewards.push(poolReward);
        }
    });

    // Sort by total rewards (highest first)
    poolRewards.sort((a, b) => {
        const aTotal = Object.entries(a).reduce((sum, [key, val]) =>
            key !== 'pool' && typeof val === 'number' ? sum + val : sum, 0);
        const bTotal = Object.entries(b).reduce((sum, [key, val]) =>
            key !== 'pool' && typeof val === 'number' ? sum + val : sum, 0);
        return bTotal - aTotal;
    });

    console.log(`extractVoteMarketPoolRewards: Returning ${poolRewards.length} pool rewards`);
    return poolRewards;
}

// Combine historical data from multiple sources
export interface CombinedHistoricalData {
    dollarPerVlAssetData: number[];
    totalAmountDollarsData: number[];
    xAxisData: string[];
    totalAmountDollarsSum: number;
    hiddenHandData?: number[];
    paladinData?: number[];
    voteMarketData?: number[];
}

export function combineHistoricalIncentiveData(
    hiddenHandData: { dollarPerVlAssetData: number[]; totalAmountDollarsData: number[]; xAxisData: string[]; totalAmountDollarsSum: number } | null,
    paladinData: { dollarPerVlAssetData: number[]; totalAmountDollarsData: number[]; xAxisData: string[]; totalAmountDollarsSum: number } | null,
    voteMarketData: { dollarPerVlAssetData: number[]; totalAmountDollarsData: number[]; xAxisData: string[]; totalAmountDollarsSum: number } | null
): CombinedHistoricalData | null {
    // Collect all unique dates
    const allDates = new Set<string>();
    if (hiddenHandData) hiddenHandData.xAxisData.forEach(d => allDates.add(d));
    if (paladinData) paladinData.xAxisData.forEach(d => allDates.add(d));
    if (voteMarketData) voteMarketData.xAxisData.forEach(d => allDates.add(d));

    if (allDates.size === 0) return null;

    // Sort dates chronologically
    const sortedDates = Array.from(allDates).sort((a, b) =>
        new Date(a).getTime() - new Date(b).getTime()
    );

    // Dynamically determine when Vote Market becomes primary (first VM data point)
    let vmStartTime = Infinity;
    if (voteMarketData && voteMarketData.xAxisData.length > 0) {
        const sortedVmDates = [...voteMarketData.xAxisData].sort((a, b) =>
            new Date(a).getTime() - new Date(b).getTime()
        );
        vmStartTime = new Date(sortedVmDates[0]).getTime();
    }

    // Initialize arrays
    const combinedDollarPerVlAsset: number[] = [];
    const combinedTotalAmount: number[] = [];
    const hhDataArray: number[] = [];
    const paladinDataArray: number[] = [];
    const vmDataArray: number[] = [];

    sortedDates.forEach(date => {
        const dateTime = new Date(date).getTime();
        const isVoteMarketPrimary = dateTime >= vmStartTime;

        // Get values for each source at this date
        const hhIndex = hiddenHandData?.xAxisData.indexOf(date) ?? -1;
        const paladinIndex = paladinData?.xAxisData.indexOf(date) ?? -1;
        const vmIndex = voteMarketData?.xAxisData.indexOf(date) ?? -1;

        const hhDollarPerVote = hhIndex >= 0 ? hiddenHandData!.dollarPerVlAssetData[hhIndex] : 0;
        const hhTotal = hhIndex >= 0 ? hiddenHandData!.totalAmountDollarsData[hhIndex] : 0;

        const paladinDollarPerVote = paladinIndex >= 0 ? paladinData!.dollarPerVlAssetData[paladinIndex] : 0;
        const paladinTotal = paladinIndex >= 0 ? paladinData!.totalAmountDollarsData[paladinIndex] : 0;

        const vmDollarPerVote = vmIndex >= 0 ? voteMarketData!.dollarPerVlAssetData[vmIndex] : 0;
        const vmTotal = vmIndex >= 0 ? voteMarketData!.totalAmountDollarsData[vmIndex] : 0;

        // For stacked chart data
        if (isVoteMarketPrimary) {
            // After VM starts: Use Vote Market + Paladin
            hhDataArray.push(0);
            paladinDataArray.push(paladinTotal);
            vmDataArray.push(vmTotal);
            combinedTotalAmount.push(vmTotal + paladinTotal);
            combinedDollarPerVlAsset.push(vmDollarPerVote + paladinDollarPerVote);
        } else {
            // Before VM starts: Use Hidden Hand + Paladin
            hhDataArray.push(hhTotal);
            paladinDataArray.push(paladinTotal);
            vmDataArray.push(0);
            combinedTotalAmount.push(hhTotal + paladinTotal);
            combinedDollarPerVlAsset.push(hhDollarPerVote + paladinDollarPerVote);
        }
    });

    const totalSum = (hiddenHandData?.totalAmountDollarsSum || 0) +
                     (paladinData?.totalAmountDollarsSum || 0) +
                     (voteMarketData?.totalAmountDollarsSum || 0);

    return {
        dollarPerVlAssetData: combinedDollarPerVlAsset,
        totalAmountDollarsData: combinedTotalAmount,
        xAxisData: sortedDates,
        totalAmountDollarsSum: totalSum,
        hiddenHandData: hhDataArray,
        paladinData: paladinDataArray,
        voteMarketData: vmDataArray
    };
}
