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

    console.log("querying lockers")
    let {auraLockerLeaderboard} = data;

    if (auraLockerLeaderboard){
        let accounts = auraLockerLeaderboard["accounts"];
        return accounts.map((locker) => {
            return {
                balanceLocked: locker.balanceLocked,
                id: locker.id,
            }
        })
    }

    return [];

}