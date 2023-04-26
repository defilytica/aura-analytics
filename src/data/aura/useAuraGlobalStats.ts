import { useEffect } from 'react';
import { useAuraGlobalStatsLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { GlobalAuraStats } from './auraTypes';
import { auraClient } from '../../apollo/client';

export function useAuraGlobalStats(): GlobalAuraStats | null {
    //TODO: Dynamically call Aura client depending on network!
    const [getAuraStats, {data}] = useAuraGlobalStatsLazyQuery({client: auraClient});
    ;

    useEffect(() => {
        getAuraStats();
    }, []);

    if (!data) {
        return null;
    }

    let { global } = data;

    if (global){
        return {
            id: global.id,
            aura: global.aura,
            auraTotalSupply: global.auraBalTotalSupply / 1e18,
            auraBALTotalSupply: global.auraBalTotalSupply / 1e18,
            auraMaxSupply: global.auraMaxSupply / 1e18,
            auraReductionPerCliff: global.auraReductionPerCliff / 1e18,
            auraTotalCliffs: global.auraTotalCliffs / 1e18,
        }
    }

    return null;
}