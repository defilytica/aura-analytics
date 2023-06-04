import {useEffect, useState} from "react";
import isDev from "../../constants";
import rounds from './data/rounds.json';

export interface Rounds {
    rounds: number[]
}

export function GetBribingRounds() {
    const baseURI = 'https://api.llama.airforce/bribes/rounds';
    const [jsonData, setJsonData] = useState<Rounds>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(baseURI, {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                    }, body: JSON.stringify({
                        "platform": "hh",
                        "protocol": "aura-bal"
                    })
                });
                const json: Rounds = await response.json();
                setJsonData(json);

            } catch (error) {
                console.log("error", error);
            }
        };
        if (isDev()) {
            console.log("DEV: loading transaction mock")
            const copy = JSON.parse(JSON.stringify(rounds));
            setJsonData(copy)
        } else {
            console.log("PRODUCTION: fetching rounds from LlamaAirforce")
            fetchData();
        }

    }, []);
    return jsonData;
}