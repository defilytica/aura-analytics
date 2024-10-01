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
    const { data, loading, error } = useGetTokenSetHistoricalPricesQuery({
        client: balancerV3APIClient,
        variables: {
            addresses: addresses,
            chain: chainId,
        },
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

            processedData![tokenData.address] = Object.values(groupedByDate)
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        });
    }

    return {
        loading,
        error,
        data: processedData,
    };
}
