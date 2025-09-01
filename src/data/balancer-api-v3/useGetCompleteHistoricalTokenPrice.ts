import { GqlChain } from "../../apollo/generated/graphql-codegen-generated";
import { BalancerChartDataItem } from "../balancer/balancerTypes";
import useGetHistoricalTokenPrice from "./useGetHistoricalTokenPrice";
import { HISTORICAL_AURA_PRICE } from "../hidden-hand/constants";
import { AURA_TOKEN_MAINNET } from "../aura/auraConstants";
import { useMemo } from "react";

/**
 * Hook that provides complete historical token price data by combining:
 * 1. Historical constant data (for dates older than 365 days)
 * 2. API data (for recent 365 days)
 * 3. Fallback to Firebase or other sources if needed
 * 
 * This eliminates the need for manual updates to HISTORICAL_AURA_PRICE constant
 */
export function useGetCompleteHistoricalTokenPrice(
    tokenAddress: string, 
    chainId: GqlChain,
    fallbackData?: BalancerChartDataItem[]
) {
    // Get API data (last 365 days)
    const { data: apiData, loading, error } = useGetHistoricalTokenPrice(tokenAddress, chainId);
    
    const completeData = useMemo(() => {
        // Special handling for AURA token - combine with historical constant
        if (tokenAddress.toLowerCase() === AURA_TOKEN_MAINNET.toLowerCase()) {
            const dataMap = new Map<string, number>();
            
            // First, add all historical constant data
            HISTORICAL_AURA_PRICE.forEach(item => {
                dataMap.set(item.time, item.value);
            });
            
            // Then, override with API data (more recent/accurate)
            if (apiData) {
                apiData.forEach(item => {
                    dataMap.set(item.time, item.value);
                });
            }
            
            // Add any fallback data for gaps
            if (fallbackData) {
                fallbackData.forEach(item => {
                    // Only add if we don't already have data for this date
                    if (!dataMap.has(item.time)) {
                        dataMap.set(item.time, item.value);
                    }
                });
            }
            
            // Convert map back to sorted array
            return Array.from(dataMap.entries())
                .map(([time, value]) => ({ time, value }))
                .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
        }
        
        // For other tokens, just use API data with optional fallback
        if (apiData && apiData.length > 0) {
            return apiData;
        }
        
        return fallbackData || [];
    }, [tokenAddress, apiData, fallbackData]);
    
    return {
        data: completeData,
        loading,
        error,
        hasData: completeData.length > 0,
        dataSource: {
            hasHistorical: tokenAddress.toLowerCase() === AURA_TOKEN_MAINNET.toLowerCase(),
            hasApi: !!apiData && apiData.length > 0,
            hasFallback: !!fallbackData && fallbackData.length > 0
        }
    };
}

/**
 * Helper function to get price for a specific date
 */
export function getPriceForDate(
    priceData: BalancerChartDataItem[],
    targetDate: string
): number | null {
    const price = priceData.find(p => p.time === targetDate);
    if (price) return price.value;
    
    // If exact date not found, try to interpolate between nearby dates
    const targetTime = new Date(targetDate).getTime();
    let before: BalancerChartDataItem | null = null;
    let after: BalancerChartDataItem | null = null;
    
    for (const item of priceData) {
        const itemTime = new Date(item.time).getTime();
        if (itemTime <= targetTime) {
            before = item;
        } else if (!after && itemTime > targetTime) {
            after = item;
            break;
        }
    }
    
    // If we have both before and after, interpolate
    if (before && after) {
        const beforeTime = new Date(before.time).getTime();
        const afterTime = new Date(after.time).getTime();
        const ratio = (targetTime - beforeTime) / (afterTime - beforeTime);
        return before.value + (after.value - before.value) * ratio;
    }
    
    // Otherwise return the closest value we have
    return before?.value || after?.value || null;
}

/**
 * Hook specifically for AURA price with automatic data source management
 */
export function useAuraPrice() {
    return useGetCompleteHistoricalTokenPrice(AURA_TOKEN_MAINNET, GqlChain.Mainnet);
}