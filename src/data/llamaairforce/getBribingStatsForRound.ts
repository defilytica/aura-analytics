import {useEffect, useState} from "react";
import isDev from "../../constants";
import dashboard from "./data/dashboard.json";
import round25 from "./data/round25.json";

export interface BribeResponse {
    epoch: Epoch;
}

export interface Bribe{
    pool: string;
    token: string;
    amount: number;
    amountDollars:number;
}

export interface DashboardResponse{
    dashboard: DashboardEpochs;
}

export interface DashboardEpochs{
    epochs: DashboardEpoch[];
    rewardPerDollarBribe: number;
}

export interface DashboardEpoch{
    dollarPerVlAsset: number;
    end: number;
    proposal: string;
    protocol: string;
    round: number;
    totalAmountDollars: number;
}

export interface Epoch{
    platform: string;
    protocol: string;
    round: number;
    proposal: string;
    end: number;
    bribed: { [key: string]: number };
    bribes: Bribe[];
}

async function fetchBribeData(bribingRound: number) {
    const baseURI = 'https://api.llama.airforce/bribes';
    const response = await fetch(baseURI, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            "platform": "hh",
            "protocol": "aura-bal",
            "round": bribingRound.toString()
        })
    });
    const json: BribeResponse = await response.json();
    return json;
}

export function GetBribingStatsForRound(bribingRound: number) {
    const [jsonData, setJsonData] = useState<BribeResponse>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json = await fetchBribeData(bribingRound);
                setJsonData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        if (isDev()) {
            console.log("DEV: loading transaction mock")
            const copy = JSON.parse(JSON.stringify(round25));
            setJsonData(copy)
        } else {
            console.log("PRODUCTION: fetching data from LlamaAirforce")
            fetchData();
        }
    }, [bribingRound]);

    return jsonData;
}

export function GetBribingStatsForRounds() {
    const [jsonData, setJsonData] = useState<DashboardResponse>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseURI = 'https://api.llama.airforce/dashboard';
                const response = await fetch(baseURI, {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json',
                    }, body: JSON.stringify({
                        "id": "bribes-overview-aura",
                    })
                });
                const json: DashboardResponse = await response.json();
                setJsonData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        if (isDev()) {
            console.log("DEV: loading transaction mock")
            const copy = JSON.parse(JSON.stringify(dashboard));
            setJsonData(copy)
        } else {
            console.log("PRODUCTION: fetching data from LlamaAirforce")
            fetchData();
        }
    }, []);

    return jsonData;
}