import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useDeltaTimestamps} from "../../utils/queries";
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useEffect, useState} from "react";
import {auraClient} from "../../apollo/client";
import {TVL} from "./useAuraPools";
import {
    PoolWithdrawnTransactionsDocument,
    PoolWithdrawnTransactionsQuery
} from "../../apollo/generated/graphql-aura-codegen-generated";
import {ethers} from "ethers";

const getPastBlockNumber = (
    currentBlockNumber: number,
    blocksPerDay: number,
    daysAgo: number
): number => {
    return Number((currentBlockNumber - (blocksPerDay * daysAgo)).toFixed(0));
};

type PoolTransactionEntry = {
    blockNumber: number;
    data: PoolWithdrawnTransactionsQuery | undefined;
    date: Date;
};

export type Volume = {
    volume: number;
    date: Date;
    blockNumber: number;
}

const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_URL);

const addToVolumeMap = (dateObj: Date, blockNumber: number, vol: number, volumeMap: {[key: string]: Volume}) => {
    const dateStr = dateObj.toISOString().split('T')[0];

    // If the date is not in the map, add it with the current volume and block number
    if (!volumeMap[dateStr]) {
        volumeMap[dateStr] = {blockNumber, date: new Date(dateStr), volume:vol};
    } else {
        // If the date is already in the map, add the volume to the existing entry and update the block number
        volumeMap[dateStr].volume += vol;
        volumeMap[dateStr].blockNumber = blockNumber;
    }
};

export function usePoolTransactions(timeRange:number): Volume[] {
    //TODO: Dynamically call Aura client depending on network!
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const {blocks} = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24] = blocks ?? [];

    const [auraPoolsData, setAuraPoolsData] = useState<PoolTransactionEntry[]>([]);

    console.log(block24);
    useEffect(() => {
        if (block24) {
            const blocksPerDay = 24 * 60 * 60 / 13.2; // Assuming 13.2 seconds per block on average
            const currentBlockNumber = parseInt(block24.number);
            const blockNumbers = Array.from({length: timeRange}, (_, i) => getPastBlockNumber(currentBlockNumber, blocksPerDay, i));

            const fetchAuraPoolsData = async () => {
                const fetchedData = await Promise.all(
                    blockNumbers.map(async (blockNumber) => {
                        const response = await auraClient.query<PoolWithdrawnTransactionsQuery>({
                            query: PoolWithdrawnTransactionsDocument,
                            variables: {
                                block: { number: blockNumber },
                                first: 200
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

    const processAuraPoolsData = (poolTransactionEntries: PoolTransactionEntry[]) => {
        let volumeMap: { [key: string]: Volume } = {};
        let processedIDs: Set<string> = new Set();

        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - timeRange);

        poolTransactionEntries.map(({ blockNumber, data, date }) => {
            if (data) {
                processTransactions(data.poolRewardPaidTransactions, 'reward', blockNumber, processedIDs, volumeMap, thirtyDaysAgo);
                processTransactions(data.poolStakedTransactions, 'amount', blockNumber, processedIDs, volumeMap, thirtyDaysAgo);
                processTransactions(data.poolWithdrawnTransactions, 'amount', blockNumber, processedIDs, volumeMap, thirtyDaysAgo);
            }
        });

        // Convert the map values to an array
        return Object.values(volumeMap);
    };

    const processTransactions = (
        transactions: any[],
        valueKey: string,
        blockNumber: number,
        processedIDs: Set<string>,
        volumeMap: { [key: string]: Volume },
        thirtyDaysAgo: Date
    ) => {
        for (const transaction of transactions) {
            if (!processedIDs.has(transaction.id)) {
                processedIDs.add(transaction.id);
                const dateObj = new Date(transaction.timestamp * 1000);
                if (dateObj >= thirtyDaysAgo) {
                    const vol = transaction[valueKey] / 1e18;
                    addToVolumeMap(dateObj, blockNumber, vol, volumeMap);
                }
            }
        }
    };

    const processedData = processAuraPoolsData(auraPoolsData);

    if (!processedData) {
        return [];
    }

    return processedData
}