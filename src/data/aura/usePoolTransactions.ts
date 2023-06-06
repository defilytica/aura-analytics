import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useDeltaTimestamps, useDeltaTimestampsDailyUTCPastNDays} from "../../utils/queries";
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useCallback, useEffect, useState} from "react";
import {auraClient} from "../../apollo/client";
import {TVL} from "./useAuraPools";
import {
    PoolWithdrawnTransactionsDocument,
    PoolWithdrawnTransactionsQuery
} from "../../apollo/generated/graphql-aura-codegen-generated";
import {ethers} from "ethers";
import {child, get, getDatabase, ref, set} from "firebase/database";

type PoolTransactionEntry = {
    blockNumber: number;
    data: PoolWithdrawnTransactionsQuery | undefined;
    date: number;
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
    const [activeNetwork] = useActiveNetworkVersion();
    const timestamps = useDeltaTimestampsDailyUTCPastNDays(timeRange);
    const {blocks} = useBlocksFromTimestamps(timestamps);
    const [block24] = blocks ?? [];

    const [poolTransactionEntries, setPoolTransactionEntries] = useState<PoolTransactionEntry[]>([]);

    const fetchPoolTransactions = useCallback(async () => {
        if (!block24 || !blocks) {
            return;
        }
        const fetchedData = await Promise.all(
            blocks.map(async (blockNumber) => {
                const response = await auraClient.query<PoolWithdrawnTransactionsQuery>({
                    query: PoolWithdrawnTransactionsDocument,
                    variables: {
                        block: { number: Number(blockNumber.number) },
                        first: 200
                    },
                });
                return { blockNumber: Number(blockNumber.number), data: response.data, date: Number(blockNumber.timestamp) * 1000 };
            })
        );
        const db = getDatabase();
        fetchedData.forEach(function(item) {
            set(ref(db, 'poolTransactions/' + item.blockNumber), item)
        });
        setPoolTransactionEntries(fetchedData);
    }, [block24, blocks]);

    const fetchPoolDataFromDB = useCallback(async () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `poolTransactions/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const object = snapshot.val();
                const array = Object.keys(object).map(key => object[key]);
                setPoolTransactionEntries(array);
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
            const snapshot = await get(child(dbRef, `poolTransactions/` + blocks[0].number));
            if (snapshot.exists()) {
                console.log("PoolTransactions are available in the Backend: Fetching Backend")
                await fetchPoolDataFromDB();
            } else {
                console.log("PoolTransactions are not up to date: Fetching Subgraph")
                await fetchPoolTransactions();
            }
        } catch (error) {
            console.error(error);
        }
    }, [blocks, fetchPoolTransactions, fetchPoolDataFromDB]);

    useEffect(() => {
        if (block24 && blocks) {
            checkDBForLatestBlock();
        }
    }, [timeRange, block24, checkDBForLatestBlock]);

    const processPoolTransactionsData = (poolTransactionEntries: PoolTransactionEntry[]) => {
        let volumeMap: { [key: string]: Volume } = {};
        let processedIDs: Set<string> = new Set();
        const now = new Date();
        now.setDate(now.getDate() - timeRange);

        poolTransactionEntries.map(({ blockNumber, data, date }) => {
            if (data) {
                processTransactions(data.poolRewardPaidTransactions, 'reward', blockNumber, processedIDs, volumeMap, now);
                processTransactions(data.poolStakedTransactions, 'amount', blockNumber, processedIDs, volumeMap, now);
                processTransactions(data.poolWithdrawnTransactions, 'amount', blockNumber, processedIDs, volumeMap, now);
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
        now: Date
    ) => {
        for (const transaction of transactions) {
            if (!processedIDs.has(transaction.id)) {
                processedIDs.add(transaction.id);
                const dateObj = new Date(transaction.timestamp * 1000);
                if (dateObj >= now) {
                    const vol = transaction[valueKey] / 1e18;
                    addToVolumeMap(dateObj, blockNumber, vol, volumeMap);
                }
            }
        }
    };

    const processedData = processPoolTransactionsData(poolTransactionEntries);

    if (!processedData) {
        return [];
    }

    return processedData;
}