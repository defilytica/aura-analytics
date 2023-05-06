import { useEffect } from 'react';
import { useAuraPoolsLazyQuery, useAuraPoolsQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraPoolData } from './auraTypes';
import { auraClient } from '../../apollo/client';

export function useAuraPools(): AuraPoolData[] {
    //TODO: Dynamically call Aura client depending on network!
    const [getAuraPools, {data}] = useAuraPoolsLazyQuery({client: auraClient});

    useEffect(() => {
        getAuraPools();
    }, []);

    if (!data) {
        return [];
    }

    let {pools} = data;

    //TODO: expand fields and check what totalStaked value is (BPT?)
    if (pools){
       return pools.map((pool) =>{
        return {
            totalStaked: pool.totalStaked / 1e18,
            id: pool.id,
            gaugeId: pool.gauge ? pool.gauge.id : '',
            balancerPoolId: pool.gauge?.pool?.factoryPoolData ? pool.gauge.pool.factoryPoolData.balancerPoolId : '',
            isShutdown: pool.gauge?.pool?.factoryPoolData ? pool.gauge.pool.factoryPoolData?.isShutdown : false,
            gaugeTotalSupply: pool.gauge ? pool.gauge.totalSupply / 1e18 : 0,
            gaugeWorkingSupply: pool.gauge ? pool.gauge.workingSupply / 1e18 : 0,
        }
       })
    }

    return[];
}