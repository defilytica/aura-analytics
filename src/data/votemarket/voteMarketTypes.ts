export interface VoteMarketToken {
    address: string;
    symbol: string;
    decimals: number;
}

export interface VoteMarketPeriod {
    id: number;
    timestamp: number;
    distributed: string;
    rewardPerPeriod: string;
    rewardPerVote: string;
    leftOver: string;
}

export type VoteMarketStatus = "Expired" | "Ongoing" | "Unknown";

export interface VoteMarketCampaignStatus {
    voteOpen: boolean;
    voteClosed: boolean;
    claimOpen: boolean;
    claimClosed: boolean;
    expired: boolean;
}

export interface VoteMarketCampaign {
    key: string;
    id: number;
    gauge: string;
    rewardToken: VoteMarketToken;
    totalRewardAmount: string;
    totalDistributed: string;
    maxRewardPerVote: string;
    startTimestamp: number;
    endTimestamp: number;
    numberOfPeriods?: number;
    periods?: VoteMarketPeriod[];  // All periods in the campaign
    currentPeriod: VoteMarketPeriod;
    previousPeriod?: VoteMarketPeriod | null;
    rewardTokenPrice: number;
    status: VoteMarketCampaignStatus | VoteMarketStatus;
    gaugeController?: string;
    chainId: number;
    platform: string;
    rewardPerVote?: string;
    // Address filtering fields
    addresses?: string[];  // Addresses that can/cannot claim based on isBlacklist
    isBlacklist?: boolean; // If true, addresses is a BLACKLIST (cannot claim); if false/undefined, addresses is a WHITELIST (only those can claim)
    isWhitelist?: boolean; // If true, addresses is a WHITELIST (only those can claim)
    blacklistedAddresses?: string[];
    restrictedVotes?: string;
    lastPeriodVotes?: string;
    apr?: number;
}

export interface VoteMarketGaugeAnalytics {
    gauge: string;
    nonBlacklistedVotes: string | number;
    totalDeposited: number;
    dollarPerVote: number;
    incentiveDirectedUSD: number;
    efficiency: number;
    platform: string;
}

export interface VoteMarketAnalytics {
    totalDepositedUSD: number;
    globalAverageDollarPerVote: number;
    globalAverageEfficiency: number;
    analytics: VoteMarketGaugeAnalytics[];
}

export interface VoteMarketResponse {
    success: boolean;
    campaigns: VoteMarketCampaign[];
    analytics: VoteMarketAnalytics;
}

export interface VoteMarketRoundMetadata {
    id: number;
    endVoting: number;
}

export interface VoteMarketHistoricalRound {
    totalDepositedUSD: number;
    globalAverageDollarPerVote: number;
    globalAverageEfficiency: number;
    analytics: VoteMarketGaugeAnalytics[];
}

// For combined chart data
export interface VoteMarketHistoricalData {
    dollarPerVlAssetData: { value: number; time: string }[];
    totalAmountDollarsData: { value: number; time: string }[];
    xAxisData: string[];
}
