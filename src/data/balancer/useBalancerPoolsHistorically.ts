import {useCallback, useEffect, useState} from "react";
import {child, get, getDatabase, ref} from "firebase/database";
import {TVL} from "../aura/useAuraPools";

export function useBalancerPoolsHistorically(networkId:string): TVL[] {
    const [balancerPoolsData, setBalancerPoolsData] = useState<TVL[]>([]);

    const fetchPoolDataFromDB = useCallback(async () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `poolData/` + `balancer-` + networkId + '/')).then((snapshot) => {
            if (snapshot.exists()) {
                const object = snapshot.val();
                const array = Object.keys(object).map(key => object[key]);
                setBalancerPoolsData(array);
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        fetchPoolDataFromDB();
    }, [fetchPoolDataFromDB]);

    return balancerPoolsData;
}
