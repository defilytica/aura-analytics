import {useEffect, useState} from "react";

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

        fetchData();
    }, []);
    return jsonData;
}