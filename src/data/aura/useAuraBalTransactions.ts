import { useEffect } from 'react';
import { useAuraBalMintTransactionsLazyQuery, useAuraBalTransactionsLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraBALTransactions, AuraTransactionInfo, AuraVaultDepositWithdrawTransactionInfo, AuraVaultHarvestTransactionInfo } from './auraTypes';
import { auraClient } from '../../apollo/client';

export function useAuraBalTransactions(): AuraBALTransactions {

    const aurabalTransactions: AuraBALTransactions = {
        harvests: [],
        deposits: [],
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
    let auraBalDepositTransactions: AuraVaultDepositWithdrawTransactionInfo[] = [];
    let auraBalHarvestTransactions: AuraVaultHarvestTransactionInfo[] = [];


    if (vaultDepositTransactions) {
        auraBalDepositTransactions = vaultDepositTransactions.map((transactions) => {
            return {
                timestamp: transactions.hash,
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
                harvested: transactions.harvested,
                hash: transactions.hash,
                sender: transactions.sender,
            }
        })
    }

    if (auraBalDepositTransactions && auraBalHarvestTransactions) {
        aurabalTransactions.deposits = auraBalDepositTransactions
        aurabalTransactions.harvests = auraBalHarvestTransactions
    }

    return aurabalTransactions;
}