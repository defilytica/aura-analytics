import { GqlChain } from "../../apollo/generated/graphql-codegen-generated";
import { balancerV3APIClient } from "../../apollo/client";
import { useGetTokenSetHistoricalPricesQuery } from "../../apollo/generated/graphql-balancer-v3-codegen-generated";
import { unixToDate } from "../../utils/date";

// Define interfaces for the query response
interface Price {
    price: number;
    timestamp: string;
}

interface TokenHistoricalPrice {
    address: string;
    prices: Price[];
}

// Define a new interface for the processed data
interface ProcessedTokenPrice {
    date: string;
    price: number;
}

interface ProcessedTokenPrices {
    [address: string]: ProcessedTokenPrice[];
}

export default function useGetTokenSetHistoricalPrices(addresses: string[], chainId: GqlChain) {
    // Skip query if no addresses provided
    const shouldSkip = !addresses || addresses.length === 0;

    const { data, loading, error } = useGetTokenSetHistoricalPricesQuery({
        client: balancerV3APIClient,
        variables: {
            addresses: addresses,
            chain: chainId,
        },
        skip: shouldSkip,
    });

    let processedData: ProcessedTokenPrices | undefined = undefined;

    if (data && data.tokenGetHistoricalPrices) {
        processedData = {};
        data.tokenGetHistoricalPrices.forEach((tokenData) => {
            const groupedByDate: { [date: string]: ProcessedTokenPrice } = {};

            tokenData.prices.forEach((item) => {
                const dateString = unixToDate(Number(item.timestamp));
                if (!groupedByDate[item.timestamp] || item.price > groupedByDate[dateString].price) {
                    groupedByDate[dateString] = {
                        date: dateString,
                        price: item.price,
                    };
                }
            });

            // Normalize address to lowercase for consistent lookup
            const normalizedAddress = tokenData.address.toLowerCase();
            processedData![normalizedAddress] = Object.values(groupedByDate)
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        });
    }

    return {
        // If skipped, not loading
        loading: shouldSkip ? false : loading,
        error,
        data: processedData,
    };
}
