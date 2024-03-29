import {
    useLockerLeaderboardLazyQuery,
} from "../../apollo/generated/graphql-codegen-generated";
import {LockerAccount} from "./auraTypes";
import {useEffect} from "react";

export function useGetLeadingLockers(): LockerAccount[] {
    const [getTopLockers, {data}] = useLockerLeaderboardLazyQuery();

    useEffect(() => {
        getTopLockers();
    }, []);

    if (!data) {
        return [];
    }

    let {auraLockerLeaderboard} = data;

    if (auraLockerLeaderboard){
        let accounts = auraLockerLeaderboard["accounts"];

        return accounts.map((locker) => {
            return {
                balanceLocked: (Number(locker.balanceLocked) / 1e18),
                id: locker.id,
                userLocksLength: locker.userLocksLength,
                userLocks: locker.userLocks,
                withdrawnTransactions: locker.withdrawnTransactions
            }
        })
    }

    return [];

}