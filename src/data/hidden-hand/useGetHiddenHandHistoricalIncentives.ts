import { useEffect, useState } from 'react';
import axios from 'axios';
import {unixToDate} from "../../utils/date";
import { LOCAL_CACHE } from './cache';

interface HiddenHandIncentives {
    error?: boolean;
    data: {
        totalValue: number;
        voteCount: number;
    }[];
}

interface IncentiveData {
    dollarPerVlAssetData: number[];
    totalAmountDollarsData: number[];
    totalAmountDollarsSum: number;
    xAxisData: string[];
}

const API_URL = 'https://api.hiddenhand.finance/proposal/aura';
const GITHUB_CACHE_URL = 'https://raw.githubusercontent.com/dinero-protocol/hidden-hand-cache/refs/heads/master/proposal-cache/aura';

// Helper to check if data is valid (not empty)
const isValidData = (data: HiddenHandIncentives | null): boolean => {
    return data !== null && !data.error && Array.isArray(data.data) && data.data.length > 0;
};

// Fetch data for a single timestamp with fallback
const fetchTimestampData = async (timestamp: number): Promise<HiddenHandIncentives | null> => {
    // First, check local cache (for Sep-Dec 2025 data after GitHub cache stopped)
    if (LOCAL_CACHE[timestamp]) {
        const localData = LOCAL_CACHE[timestamp] as HiddenHandIncentives;
        if (isValidData(localData)) {
            return localData;
        }
    }

    const githubCacheUrl = `${GITHUB_CACHE_URL}/aura-${timestamp}.json`;
    const hhApiUrl = `${API_URL}/${timestamp}`;

    // Try GitHub cache second (for older historical data)
    try {
        const cacheResponse = await axios.get(githubCacheUrl);
        const cacheJson: HiddenHandIncentives = cacheResponse.data;
        if (isValidData(cacheJson)) {
            return cacheJson;
        }
    } catch (cacheError) {
        // Cache miss, continue to HH API
    }

    // Fall back to Hidden Hand API
    try {
        const apiResponse = await axios.get(hhApiUrl);
        const apiJson: HiddenHandIncentives = apiResponse.data;
        if (isValidData(apiJson)) {
            return apiJson;
        }
    } catch (apiError) {
        // All sources failed
    }

    return null;
};

export const useGetHiddenHandHistoricalIncentives = (): IncentiveData | null => {
    const [data, setData] = useState<IncentiveData | null>(null);

    useEffect(() => {
        const ONE_DAY = 60 * 60 * 24;
        const BIWEEKLY = ONE_DAY * 14;
        const startDate = 1687809600;
        const today = Math.floor(Date.now() / 1000);

        const timestamps: number[] = [];
        for(let i = startDate; i <= today; i += BIWEEKLY) {
            timestamps.push(i);
        }

        const fetchAndCalculateData = async () => {
            console.log(`Fetching historical incentives for ${timestamps.length} timestamps...`);

            const results = await Promise.all(
                timestamps.map(async (timestamp: number) => {
                    try {
                        const hiddenHandData = await fetchTimestampData(timestamp);

                        if (!hiddenHandData || !isValidData(hiddenHandData)) {
                            console.warn(`No data available for timestamp ${timestamp}`);
                            return null;
                        }

                        let totalValue = 0;
                        let totalVotes = 0;
                        hiddenHandData.data.forEach((item) => {
                            totalValue += item.totalValue;
                            if (item.totalValue > 0) {
                                totalVotes += item.voteCount;
                            }
                        });

                        const valuePerVote = totalVotes > 0 ? totalValue / totalVotes : 0;
                        return {
                            totalValue,
                            valuePerVote,
                            xAxis: unixToDate(timestamp),
                        };
                    } catch (error) {
                        console.error(`Error processing timestamp ${timestamp}:`, error);
                        return null;
                    }
                }),
            );

            // Filter out any failed fetches (null results)
            const filteredResults = results.filter(
                (result): result is { totalValue: number; valuePerVote: number; xAxis: string } => result !== null,
            );

            console.log(`Successfully fetched ${filteredResults.length}/${timestamps.length} historical data points`);

            const totalValueList = filteredResults.map(result => result.totalValue);
            const valuePerVoteList = filteredResults.map(result => result.valuePerVote);
            const totalAmountDollarsSum = totalValueList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const xAxisData = filteredResults.map(result => result.xAxis);

            setData({
                dollarPerVlAssetData: valuePerVoteList,
                totalAmountDollarsData: totalValueList,
                totalAmountDollarsSum: totalAmountDollarsSum,
                xAxisData: xAxisData,
            });
        };

        fetchAndCalculateData();
    }, []);

    return data;
};
