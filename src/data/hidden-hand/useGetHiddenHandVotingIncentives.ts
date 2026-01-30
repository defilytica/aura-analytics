import axios from 'axios';
import { useState, useEffect } from 'react';
import { HiddenHandIncentives } from './hiddenHandTypes';
import { LOCAL_CACHE } from './cache';

const API_URL = 'https://api.hiddenhand.finance/proposal/aura';
const GITHUB_CACHE_URL = 'https://raw.githubusercontent.com/dinero-protocol/hidden-hand-cache/refs/heads/master/proposal-cache/aura';

// get current time in seconds
const now = Math.floor(Date.now() / 1000);
export const ONE_WEEK = 7 * 24 * 60 * 60;

// Helper to check if data is valid (not empty)
const isValidData = (data: HiddenHandIncentives | null): boolean => {
    return data !== null && !data.error && Array.isArray(data.data) && data.data.length > 0;
};

export const useGetHiddenHandVotingIncentives = (timestamp = ''): { incentives: HiddenHandIncentives | null; loading: boolean } => {
    const [incentives, setIncentives] = useState<HiddenHandIncentives | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Determine if this is a current round request
    const isCurrentRound = !timestamp || Number(timestamp) > now - ONE_WEEK;

    // For current round, use empty timestamp; for historical, use the provided timestamp
    const effectiveTimestamp = isCurrentRound ? '' : timestamp;

    useEffect(() => {
        const fetchIncentives = async () => {
            setLoading(true);

            // For current round, only use the HH API (cache won't have current data)
            if (isCurrentRound) {
                try {
                    const response = await axios.get(API_URL);
                    const json: HiddenHandIncentives = response.data;
                    if (isValidData(json)) {
                        setIncentives(json);
                    } else {
                        console.warn('Hidden Hand API returned empty data for current round');
                        setIncentives(null);
                    }
                } catch (error) {
                    console.error('Error fetching current round from Hidden Hand API:', error);
                    setIncentives(null);
                }
                setLoading(false);
                return;
            }

            // For historical rounds, check local cache first, then GitHub cache, then HH API
            const tsNum = Number(effectiveTimestamp);
            const githubCacheUrl = `${GITHUB_CACHE_URL}/aura-${effectiveTimestamp}.json`;
            const hhApiUrl = `${API_URL}/${effectiveTimestamp}`;

            // First, check local cache (for Sep-Dec 2025 data)
            if (LOCAL_CACHE[tsNum]) {
                const localData = LOCAL_CACHE[tsNum] as HiddenHandIncentives;
                if (isValidData(localData)) {
                    console.log(`Using local cache for timestamp ${effectiveTimestamp}`);
                    setIncentives(localData);
                    setLoading(false);
                    return;
                }
            }

            try {
                // Try GitHub cache second (for older historical data)
                console.log(`Fetching historical data from GitHub cache: ${githubCacheUrl}`);
                const cacheResponse = await axios.get(githubCacheUrl);
                const cacheJson: HiddenHandIncentives = cacheResponse.data;

                if (isValidData(cacheJson)) {
                    console.log(`Successfully fetched data from GitHub cache for timestamp ${effectiveTimestamp}`);
                    setIncentives(cacheJson);
                    setLoading(false);
                    return;
                }
            } catch (cacheError) {
                console.warn(`GitHub cache miss for timestamp ${effectiveTimestamp}, trying HH API...`);
            }

            // Fall back to Hidden Hand API
            try {
                console.log(`Fetching historical data from Hidden Hand API: ${hhApiUrl}`);
                const apiResponse = await axios.get(hhApiUrl);
                const apiJson: HiddenHandIncentives = apiResponse.data;

                if (isValidData(apiJson)) {
                    console.log(`Successfully fetched data from HH API for timestamp ${effectiveTimestamp}`);
                    setIncentives(apiJson);
                } else {
                    console.warn(`Hidden Hand API returned empty data for timestamp ${effectiveTimestamp}`);
                    setIncentives(null);
                }
            } catch (apiError) {
                console.error(`Failed to fetch data for timestamp ${effectiveTimestamp} from all sources:`, apiError);
                setIncentives(null);
            }

            setLoading(false);
        };

        fetchIncentives();
    }, [effectiveTimestamp, isCurrentRound]);

    return { incentives, loading };
};
