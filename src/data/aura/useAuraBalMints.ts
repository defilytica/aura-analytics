import { useEffect } from 'react';
import { useAuraBalMintTransactionsLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraTransactionInfo } from './auraTypes';
import { auraClient } from '../../apollo/client';

export function useAuraBalMints(): AuraTransactionInfo[] {
    //TODO: Dynamically call Aura client depending on network!
    const [getAuraMints, {data}] = useAuraBalMintTransactionsLazyQuery({client: auraClient});
    const indexingTimeStamp = 1672527600 //01.01.2023

    useEffect(() => {
        getAuraMints({
            variables: {
                startTimestamp: indexingTimeStamp,
            }
        });
    }, []);

    if (!data) {
        return [];
    }

    let {auraBalMintTransactions} = data;

    if (auraBalMintTransactions){
       return auraBalMintTransactions.map((auraBalMintTransaction) =>{
        return {
            timestamp: auraBalMintTransaction.timestamp,
            amount: auraBalMintTransaction.amount / 1e18,
            accountId: auraBalMintTransaction.account ? auraBalMintTransaction.account.id : '',
            hash: auraBalMintTransaction.hash,
        }
       })
    }

    return[];
}