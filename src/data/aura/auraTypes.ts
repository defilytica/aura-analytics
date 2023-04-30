export interface GlobalAuraStats{
    id: string,
    aura: string,
    auraTotalSupply: number,
    auraBALTotalSupply: number,
    auraMaxSupply: number,
    auraReductionPerCliff: number,
    auraTotalCliffs: number,
}

export interface PositionInfo{
    stakedAmount: number,
    accountId: string,
}

export interface AuraLeaderboardInfo{
    leaderboard: PositionInfo[],
    totalStaked: number,
}

export interface AuraTokens{
    id: string,
    decimals: number,
    symbol: string,
    name: string
}

export interface AuraTransactionInfo{
    timestamp: number,
    amount: number
    accountId: string,
    hash: string,
}

export interface AuraVaultHarvestTransactionInfo{
    timestamp: number,
    harvested: number,
    hash: string,
    sender: string,
}

export interface AuraVaultDepositWithdrawTransactionInfo{
    timestamp: number,
    assets: number,
    shares: number,
    hash: string,
    sender: string,
}

export interface AuraTransactions{
    transactions: AuraTransactionInfo[],
}

export interface AuraBALTransactions{
    harvests: AuraVaultHarvestTransactionInfo[],
    deposits: AuraVaultDepositWithdrawTransactionInfo[],
    withdrawals: AuraVaultDepositWithdrawTransactionInfo[],
}

export interface AuraPoolData{
    totalStaked: number,
    id: string,
    gaugeId: string,
    balancerPoolId: string,
    isShutdown: boolean,
    gaugeTotalSupply: number,
    gaugeWorkingSupply: number,
}