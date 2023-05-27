import {useEffect, useState} from 'react';
import {
    AuraPoolsDocument,
    AuraPoolsQuery,
    useAuraPoolsLazyQuery,
} from '../../apollo/generated/graphql-aura-codegen-generated';
import {AuraPoolData} from './auraTypes';
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useDeltaTimestamps} from "../../utils/queries";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {auraClient} from "../../apollo/client";
import {ethers} from "ethers";

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

const getPastBlockNumber = (
    currentBlockNumber: number,
    blocksPerDay: number,
    daysAgo: number
): number => {
    return Number((currentBlockNumber - (blocksPerDay * daysAgo)).toFixed(0));
};

type AuraPoolsDataEntry = {
    blockNumber: number;
    data: AuraPoolsQuery | undefined;
    date: Date;
};

export type TVL = {
    tvl: number;
    date: Date;
    blockNumber: number;
}

export function useAuraPoolsHistorically(timeRange:number): TVL[] {
    //TODO: Dynamically call Aura client depending on network!
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const {blocks} = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24] = blocks ?? [];

    const [auraPoolsData, setAuraPoolsData] = useState<AuraPoolsDataEntry[]>([]);

    console.log(block24);
    useEffect(() => {
        if (block24) {
            const blocksPerDay = 24 * 60 * 60 / 13.2; // Assuming 13.2 seconds per block on average
            const currentBlockNumber = parseInt(block24.number);
            const blockNumbers = Array.from({length: timeRange}, (_, i) => getPastBlockNumber(currentBlockNumber, blocksPerDay, i));

            const fetchAuraPoolsData = async () => {
                const fetchedData = await Promise.all(
                    blockNumbers.map(async (blockNumber) => {
                        const response = await auraClient.query<AuraPoolsQuery>({
                            query: AuraPoolsDocument,
                            variables: {
                                block: { number: blockNumber },
                            },
                        });
                        const block = await provider.getBlock(blockNumber);
                        return { blockNumber, data: response.data, date: new Date(block.timestamp * 1000) };
                    })
                );
                setAuraPoolsData(fetchedData);
            };

            fetchAuraPoolsData();
        }
    }, [timeRange,block24]);

    const processAuraPoolsData = (auraPoolsData: AuraPoolsDataEntry[]) => {
        let tvlArray : TVL[] = [];
        auraPoolsData.map(({blockNumber, data,date}) => {
            let totalStaked = 0;
            if (data) {
                for (const pool of data.pools) {
                    totalStaked = totalStaked + pool.totalStaked / 1e18;
                }
                tvlArray.push({ blockNumber, date, tvl: totalStaked });
            }
        });
        return tvlArray;
    };

    const processedData = processAuraPoolsData(auraPoolsData);

    if (!processedData) {
        return [];
    }

    return processedData
}