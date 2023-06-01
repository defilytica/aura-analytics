import {useEffect, useState} from "react";

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

        fetchData();
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
            fetchData();
    }, []);

    return jsonData;
}