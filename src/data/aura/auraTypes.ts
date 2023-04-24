export interface TODO{
    yoloType: string
}

export interface GlobalAuraTypes{
    id: string,
    aura: string,
    auraTotalSupply: number,
    auraBALTotalSupply: number,
    auraMaxSupply: number,
    auraReductionPerCliff: number,
    auraTotalCliffs: number,
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
    timestamp: string,
    assets: number,
    shares: number,
    hash: string,
    vaultAccountId: string,
}

export interface AuraTransactions{
    transactions: AuraTransactionInfo[],
}

export interface AuraBALTransacionts{
    harvests: AuraVaultHarvestTransactionInfo[],
    deposits: AuraVaultDepositWithdrawTransactionInfo[],
    withdrawals: AuraVaultDepositWithdrawTransactionInfo[],
}