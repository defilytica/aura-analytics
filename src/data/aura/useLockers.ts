import {
    useLockerLeaderboardLazyQuery,
} from "../../apollo/generated/graphql-codegen-generated";
import {LockerAccount} from "./auraTypes";
import {useEffect} from "react";
import { Alchemy, Network } from "alchemy-sdk";

const config = {
    apiKey: process.env.REACT_APP_ALCHEMY_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export function useGetLeadingLockers(first = 0): LockerAccount[] {
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
                balanceLocked: locker.balanceLocked,
                id: locker.id,
            }
        })
    }

    return [];

}