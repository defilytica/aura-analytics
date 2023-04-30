import { useEffect } from 'react';
import { useAuraBalMintTransactionsLazyQuery, useAuraBalTransactionsLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraBALTransactions, AuraTransactionInfo, AuraVaultDepositWithdrawTransactionInfo, AuraVaultHarvestTransactionInfo } from './auraTypes';
import { auraClient } from '../../apollo/client';

export function useAuraBalTransactions(): AuraBALTransactions {

    const aurabalTransactions: AuraBALTransactions = {
        harvests: [],
        deposits: [],
        withdrawals: [],
    };
    //TODO: Dynamically call Aura client depending on network!
    const [getAuraTransactions, { data }] = useAuraBalTransactionsLazyQuery({ client: auraClient });

    useEffect(() => {
        getAuraTransactions();
    }, []);

    if (!data) {
        return aurabalTransactions;
    }

    let vaultDepositTransactions = data.vaultDepositTransactions;
    let vaultharvestTransactions = data.vaultHarvestTransactions;
    let vaultwithdrawalTransactions = data.vaultWithdrawTransactions;
    let auraBalDepositTransactions: AuraVaultDepositWithdrawTransactionInfo[] = [];
    let auraBalWithdrawalTransactions: AuraVaultDepositWithdrawTransactionInfo[] = [];
    let auraBalHarvestTransactions: AuraVaultHarvestTransactionInfo[] = [];


    if (vaultDepositTransactions) {
        auraBalDepositTransactions = vaultDepositTransactions.map((transactions) => {
            return {
                timestamp: transactions.timestamp,
                assets: 0,
                shares: transactions.shares / 1e18,
                hash: transactions.hash,
                sender: transactions.sender,
            }
        })
    }

    if (vaultwithdrawalTransactions) {
        auraBalWithdrawalTransactions = vaultwithdrawalTransactions.map((transactions) => {
            return {
                timestamp: transactions.timestamp,
                assets: 0,
                shares: transactions.shares / 1e18,
                hash: transactions.hash,
                sender: transactions.sender,
            }
        })
    }

    if (vaultharvestTransactions) {
        auraBalHarvestTransactions = vaultharvestTransactions.map((transactions) => {
            return {
                timestamp: transactions.timestamp,
                harvested: transactions.harvested / 1e18,
                hash: transactions.hash,
                sender: transactions.sender,
            }
        })
    }

    if (auraBalDepositTransactions && auraBalHarvestTransactions) {
        aurabalTransactions.deposits = auraBalDepositTransactions
        aurabalTransactions.harvests = auraBalHarvestTransactions
        aurabalTransactions.withdrawals = auraBalWithdrawalTransactions
    }

    return aurabalTransactions;
}