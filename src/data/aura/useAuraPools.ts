import {useCallback, useEffect, useState} from 'react';
import {
    AuraPoolsDocument,
    AuraPoolsQuery,
    useAuraPoolsLazyQuery,
} from '../../apollo/generated/graphql-aura-codegen-generated';
import {AuraPoolData} from './auraTypes';
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useDeltaTimestamps, useDeltaTimestampsDailyUTCPastNDays} from "../../utils/queries";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {auraClient} from "../../apollo/client";
import {ethers} from "ethers";
import { getDatabase, ref, child, get, set } from "firebase/database";

const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_URL);

export function useAuraPools(): AuraPoolData[] {
    //TODO: Dynamically call Aura client depending on network!
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const {blocks} = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24] = blocks ?? [];
    const [getAuraPools, {data}] = useAuraPoolsLazyQuery({client: auraClient});

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

//TODO prevent fetching of all days, instead refetch only necessary days
//TODO add initial loading of all elements. The current implementation only checks if the newest day is present and if not fetches the past 30 days.
export function useAuraPoolsHistorically(): TVL[] {
    const [activeNetwork] = useActiveNetworkVersion();
    const timestamps  = useDeltaTimestampsDailyUTCPastNDays(180);
    const {blocks} = useBlocksFromTimestamps(timestamps);
    const [block24] = blocks ?? [];
    const [auraPoolsData, setAuraPoolsData] = useState<TVL[]>([]);

    const fetchAuraPoolsData = useCallback(async () => {
        if (!blocks) {
            return;
        }

        const fetchedData = await Promise.all(
            blocks.map(async (blockNumber) => {
                const response = await auraClient.query<AuraPoolsQuery>({
                    query: AuraPoolsDocument,
                    variables: {
                        block: { number: Number(blockNumber.number) },
                    },
                });
                return { blockNumber: Number(blockNumber.number), data: response.data, date: Number(blockNumber.timestamp) * 1000 };
            })
        );
        const processedData = processAuraPoolsData(fetchedData);
        setAuraPoolsData(processedData);
    }, [blocks]);

    const fetchPoolDataFromDB = useCallback(async () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `poolData/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const object = snapshot.val();
                const array = Object.keys(object).map(key => object[key]);
                setAuraPoolsData(array);
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const checkDBForLatestBlock = useCallback(async () => {
        if (!blocks) {
            return;
        }
        try {
            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, `poolData/` + blocks[0].number));
            if (snapshot.exists()) {
                console.log("PoolData is available in the Backend: Fetching Backend")
                await fetchPoolDataFromDB();
            } else {
                console.log("PoolData is not up to date: Fetching Subgraph")
                await fetchAuraPoolsData();
            }
        } catch (error) {
            console.error(error);
        }
    }, [blocks, fetchAuraPoolsData, fetchPoolDataFromDB]);

    useEffect(() => {
        if (block24 && blocks) {
            checkDBForLatestBlock();
        }
    }, [block24, checkDBForLatestBlock]);

    const processAuraPoolsData = (auraPoolsData: AuraPoolsDataEntry[]) => {
        let tvlArray : TVL[] = [];
        const now = new Date();
        now.setDate(now.getDate() - 180);

        auraPoolsData.map(({blockNumber, data, date}) => {
            if (data) {
                let totalStaked = 0;
                for (const pool of data.pools) {
                    totalStaked = totalStaked + pool.totalStaked / 1e18;
                }
                const dateObject = new Date(date);
                if (dateObject >= now) {
                    const db = getDatabase();
                    set(ref(db, 'poolData/' + blockNumber), { blockNumber: blockNumber, date: date, tvl: totalStaked })
                    tvlArray.push({ blockNumber: blockNumber, date: date, tvl: totalStaked });
                }
            }
        });
        return tvlArray;
    };

    if (!auraPoolsData) {
        return [];
    }

    return auraPoolsData;
}
