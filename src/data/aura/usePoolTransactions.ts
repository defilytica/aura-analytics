import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useDeltaTimestamps, useDeltaTimestampsDailyUTCPastNDays} from "../../utils/queries";
import {useBlocksFromTimestamps} from "../../hooks/useBlocksFromTimestamps";
import {useCallback, useEffect, useState} from "react";
import {auraClient} from "../../apollo/client";
import {
    PoolWithdrawnTransactionsDocument,
    PoolWithdrawnTransactionsQuery
} from "../../apollo/generated/graphql-aura-codegen-generated";
import {ethers} from "ethers";
import {child, get, getDatabase, ref, set} from "firebase/database";

type PoolTransactionEntry = {
    blockNumber: number;
    data: PoolWithdrawnTransactionsQuery | undefined;
};

export type Volume = {
    volume: number;
    date: number;
}

const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_URL);

const addToVolumeMap = (dateObj: Date, vol: number, volumeMap: {[key: string]: Volume}) => {
    const dateStr = dateObj.toISOString().split('T')[0];

    // If the date is not in the map, add it with the current volume and block number
    if (!volumeMap[dateStr]) {
        volumeMap[dateStr] = {date: Math.floor(dateObj.getTime() / 1000), volume:vol};
    } else {
        // If the date is already in the map, add the volume to the existing entry and update the block number
        volumeMap[dateStr].volume += vol;
    }
};

export function usePoolTransactions(): Volume[] {
    const [activeNetwork] = useActiveNetworkVersion();
    const timestamps = useDeltaTimestampsDailyUTCPastNDays(180);
    const {blocks} = useBlocksFromTimestamps(timestamps);
    const [block24] = blocks ?? [];

    const [poolTransactionEntries, setPoolTransactionEntries] = useState<Volume[]>([]);

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
                return { blockNumber: Number(blockNumber.number), data: response.data };
            })
        );
        const processedData = processPoolTransactionsData(fetchedData);
        setPoolTransactionEntries(processedData);
    }, [block24, blocks]);

    const checkDBForLatestBlock = useCallback(async () => {
        if (!blocks) {
            return;
        }
        try {
            const dbRef = ref(getDatabase());
            const yesterdayMidnight = new Date();
            yesterdayMidnight.setHours(0,0,0,0);
            yesterdayMidnight.setDate(yesterdayMidnight.getDate()-2);

            // Convert yesterday's date to Unix timestamp
            const yesterdayMidnightTimestamp = Math.floor(yesterdayMidnight.getTime() / 1000);

            // Fetch all transactions
            const snapshot = await get(child(dbRef, `poolTransactions`));
            if (snapshot.exists()) {
                let poolTransactions = snapshot.val();

                // Get the latest transaction
                let latestTransactionTimestamp = Math.max(
                    ...(Object.values(poolTransactions) as Volume[]).map(t => t.date)
                );

                // Check if the latest transaction is older than yesterday midnight
                if (latestTransactionTimestamp < yesterdayMidnightTimestamp) {
                    console.log("PoolTransactions are not up to date: Fetching Subgraph")
                    await fetchPoolTransactions();
                } else {
                    console.log("PoolTransactions are available in the Backend: Fetching Backend")
                    const array = Object.keys(poolTransactions).map(key => poolTransactions[key]);
                    setPoolTransactionEntries(array);
                }
            } else {
                console.log("PoolTransactions are not available: Fetching Subgraph")
                await fetchPoolTransactions();
            }
        } catch (error) {
            console.error(error);
        }
    }, [blocks, fetchPoolTransactions]);

    useEffect(() => {
        if (block24 && blocks) {
            checkDBForLatestBlock();
        }
    }, [block24, checkDBForLatestBlock]);

    const processPoolTransactionsData = (poolTransactionEntries: PoolTransactionEntry[]) => {
        let volumeMap: { [key: string]: Volume } = {};
        let processedIDs: Set<string> = new Set();
        const now = new Date();
        now.setDate(now.getDate() - 180);

        poolTransactionEntries.map(({ blockNumber, data }) => {
            if (data) {
                processTransactions(data.poolRewardPaidTransactions, 'reward', blockNumber, processedIDs, volumeMap, now);
                processTransactions(data.poolStakedTransactions, 'amount', blockNumber, processedIDs, volumeMap, now);
                processTransactions(data.poolWithdrawnTransactions, 'amount', blockNumber, processedIDs, volumeMap, now);
            }
        });

        // Convert the map values to an array
        let volumeArr =  Object.values(volumeMap);
        volumeArr.map(({date,volume}) => {
            console.log("upload");
            const db = getDatabase();
            set(ref(db, 'poolTransactions/' + date), { date: date, volume: volume })
        })

        return volumeArr;
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
                    addToVolumeMap(dateObj, vol, volumeMap);
                }
            }
        }
    };

    if (!poolTransactionEntries) {
        return [];
    }

    return poolTransactionEntries;
}