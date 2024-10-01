import { GqlChain } from "../../apollo/generated/graphql-codegen-generated";
import { balancerV3APIClient } from "../../apollo/client";
import { useGetTokenSetHistoricalPricesQuery } from "../../apollo/generated/graphql-balancer-v3-codegen-generated";
import { BalancerChartDataItem } from "../balancer/balancerTypes";
import { unixToDate } from "../../utils/date";

export default function useGetHistoricalTokenPrice(address: string, chainId: GqlChain) {
    const { data, loading, error } = useGetTokenSetHistoricalPricesQuery({
        client: balancerV3APIClient,
        variables: {
            addresses: [address],
            chain: chainId,
        },
    });

    let mappedData: BalancerChartDataItem[] | undefined = undefined;

    if (data && data.tokenGetHistoricalPrices && data.tokenGetHistoricalPrices.length > 0) {
        const tokenData = data.tokenGetHistoricalPrices[0]; // We only expect one token's data

        // Group data by date string
        const groupedByDate: { [date: string]: BalancerChartDataItem[] } = {};
        tokenData.prices.forEach((item) => {
            const dateString = unixToDate(Number(item.timestamp));
            if (!groupedByDate[dateString]) {
                groupedByDate[dateString] = [];
            }
            groupedByDate[dateString].push({
                value: item.price,
                time: dateString,
            });
        });

        // Select the first item for each date
        mappedData = Object.keys(groupedByDate).map(date => {
            const items = groupedByDate[date];
            return items[0]; // Assuming items are sorted by time, selects the first data point of the day
        }).sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()); // Sort by date
    }

    return {
        loading,
        error,
        data: mappedData, // Return the mapped data
    };
}
