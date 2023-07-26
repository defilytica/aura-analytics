import { useEffect } from 'react';
import { useAuraGlobalStatsLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { GlobalAuraStats } from './auraTypes';
import {auraClient, getAuraNetworkClient} from '../../apollo/client';
import {EthereumNetworkInfo} from "../../constants/networks";

export function useAuraGlobalStats(chainId = EthereumNetworkInfo.chainId): GlobalAuraStats | null {
    //TODO: Dynamically call Aura client depending on network!
    const [getAuraStats, {data}] = useAuraGlobalStatsLazyQuery({client: getAuraNetworkClient(chainId)});
    ;

    useEffect(() => {
        getAuraStats();
    }, []);

    if (!data) {
        return null;
    }

    let { global, auraLockers } = data;

    if (global){
        return {
            id: global.id,
            aura: global.aura,
            auraTotalSupply: global.auraBalTotalSupply / 1e18,
            auraBALTotalSupply: global.auraBalTotalSupply / 1e18,
            auraMaxSupply: global.auraMaxSupply / 1e18,
            auraReductionPerCliff: global.auraReductionPerCliff / 1e18,
            auraTotalCliffs: global.auraTotalCliffs / 1e18,
            auraTotalLockedAmount: auraLockers[0].lockedSupply / 1e18
        }
    }

    return null;
}