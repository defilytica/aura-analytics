import { useEffect } from 'react';
import { useAuraBalMintTransactionsLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraTransactionInfo } from './auraTypes';
import { auraClient } from '../../apollo/client';

export function useAuraBalMints(startTimestamp = 1655276813): AuraTransactionInfo[] {
    //TODO: Dynamically call Aura client depending on network!
    const [getAuraMints, {data}] = useAuraBalMintTransactionsLazyQuery({client: auraClient});

    useEffect(() => {
        getAuraMints({
            variables: {
                startTimestamp: startTimestamp,
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