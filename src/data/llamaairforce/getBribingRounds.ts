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
            const copy = JSON.parse(JSON.stringify(rounds));
            setJsonData(copy)

    }, []);
    return jsonData;
}