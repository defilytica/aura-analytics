import { useState, useEffect } from 'react';
import { useActiveNetworkVersion } from '../../state/application/hooks';
import { CG_KEY } from '../balancer/constants';
import { unixToDate } from '../../utils/date';

// Assuming BalancerChartDataItem interface is defined elsewhere
export interface BalancerChartDataItem {
    value: number;
    time: string;
}

export function useCoinGeckoSingleTokenData(tokenAddress: string, fromTimestamp: number, toTimestamp: number) {
    const [priceData, setPriceData] = useState<BalancerChartDataItem[]>([]);
    const [loading, setLoading] = useState(true);

    const [activeNetwork] = useActiveNetworkVersion();

    useEffect(() => {
        const fetchCoingeckoData = async () => {
            const baseURI = 'https://api.coingecko.com/api/v3/coins/';
            const DAYS_LIMIT = 300;
            //&x_cg_demo_api_key=${CG_KEY}
            const queryParams = (id: string, address: string, from: number, to: number) =>
                `${id}/contract/${address}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`;

            let allPrices: number[][] = [];
            const numberOfDays = (toTimestamp - fromTimestamp) / (24 * 60 * 60) + 1;
            const numberOfRequests = Math.ceil(numberOfDays / DAYS_LIMIT);

            try {
                for (let i = 0; i < numberOfRequests; i++) {
                    const currentFromTimestamp = fromTimestamp + (DAYS_LIMIT * 24 * 60 * 60 * i);
                    const currentToTimestamp = (i === numberOfRequests - 1) ? toTimestamp : currentFromTimestamp + (DAYS_LIMIT * 24 * 60 * 60);
                    const response = await fetch(baseURI + queryParams(activeNetwork.coingeckoId, tokenAddress, currentFromTimestamp, currentToTimestamp));
                    const json = await response.json();

                    if (json.error) {
                        console.error(`Error for interval ${i}: ${json.error}`);
                        continue;
                    }

                    allPrices = [...allPrices, ...json.prices];
                }

                const formattedPriceData = allPrices.map(([timestamp, price]) => ({
                    value: price,
                    time: unixToDate(timestamp / 1000),
                }));

                setPriceData(formattedPriceData);
            } catch (error) {
                console.error("Failed to fetch data from CoinGecko", error);
            } finally {
                setLoading(false);
            }
        };

        if (tokenAddress && fromTimestamp && toTimestamp) {
            setLoading(true);
            fetchCoingeckoData();
        }
    }, [tokenAddress, fromTimestamp, toTimestamp, activeNetwork]);

    return { priceData, loading };
}
