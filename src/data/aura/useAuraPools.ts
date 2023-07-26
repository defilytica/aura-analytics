import {useCallback, useEffect, useState} from 'react';
import {
    AuraPoolsQuery,
    useAuraPoolsLazyQuery,
} from '../../apollo/generated/graphql-aura-codegen-generated';
import {AuraPoolData} from './auraTypes';
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useDeltaTimestamps} from "../../utils/queries";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {auraClient, getAuraNetworkClient} from "../../apollo/client";
import { getDatabase, ref, child, get} from "firebase/database";

export function useAuraPools(): AuraPoolData[] {
    //TODO: Dynamically call Aura client depending on network!
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const {blocks} = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24] = blocks ?? [];
    const [getAuraPools, {data}] = useAuraPoolsLazyQuery({client: getAuraNetworkClient(activeNetwork.chainId)});

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
    if (pools) {
        return pools.map((pool) => {
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

    return [];
}

type AuraPoolsDataEntry = {
    blockNumber: number;
    data: AuraPoolsQuery | undefined;
    date: number;
};

export type TVL = {
    tvl: number;
    date: number;
    blockNumber: number;
}

export function useAuraPoolsHistorically(networkId:string): TVL[] {
    const [activeNetwork] = useActiveNetworkVersion();
    const [auraPoolsData, setAuraPoolsData] = useState<TVL[]>([]);

    const fetchPoolDataFromDB = useCallback(async () => {
        const dbRef = ref(getDatabase());
        console.log(activeNetwork)
        get(child(dbRef, `poolData/` + networkId + '/')).then((snapshot) => {
            if (snapshot.exists()) {
                const object = snapshot.val();
                const array = Object.keys(object).map(key => object[key]);
                setAuraPoolsData(array);
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        fetchPoolDataFromDB();
    }, [fetchPoolDataFromDB]);

    return auraPoolsData;
}
