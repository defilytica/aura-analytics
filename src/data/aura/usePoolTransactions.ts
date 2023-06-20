import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useCallback, useEffect, useState} from "react";
import {child, get, getDatabase, ref, set} from "firebase/database";

export type Volume = {
    volume: number;
    date: number;
}

export function usePoolTransactions(): Volume[] {
    const [activeNetwork] = useActiveNetworkVersion();
    const [poolTransactionEntries, setPoolTransactionEntries] = useState<Volume[]>([]);

    const fetchTransactionDataFromDB = useCallback(async () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `poolTransactions/`)).then((snapshot) => {
            if (snapshot.exists()) {
                let poolTransactions = snapshot.val();
                const array = Object.keys(poolTransactions).map(key => poolTransactions[key]);
                setPoolTransactionEntries(array);
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        fetchTransactionDataFromDB();
    }, [fetchTransactionDataFromDB]);

    if (!poolTransactionEntries) {
        return [];
    }

    return poolTransactionEntries;
}