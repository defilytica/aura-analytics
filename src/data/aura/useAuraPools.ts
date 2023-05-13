import { useEffect } from 'react';
import { useAuraPoolsLazyQuery, useAuraPoolsQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraPoolData } from './auraTypes';
import { auraClient } from '../../apollo/client';
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useDeltaTimestamps} from "../../utils/queries";
import {useActiveNetworkVersion} from "../../state/application/hooks";

export function useAuraPools(): AuraPoolData[] {
    //TODO: Dynamically call Aura client depending on network!
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const { blocks } = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24] = blocks ?? [];
    const [getAuraPools, {data}] = useAuraPoolsLazyQuery({client: auraClient});

    console.log(block24)
    useEffect(() => {
        if (block24) {
            getAuraPools({
                variables: {
                    block: {number: parseInt(block24.number)},
                },
            });
        }
    }, [block24]);

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