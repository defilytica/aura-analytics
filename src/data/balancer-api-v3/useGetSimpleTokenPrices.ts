
import { balancerV3APIClient } from "../../apollo/client";
import {TokenPrices} from "../balancer/balancerTypes";
import {useGetDynamicTokenPricesQuery} from "../../apollo/generated/graphql-balancer-v3-codegen-generated";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import useGetCurrentTokenPrices from "./useGetCurrentTokenPrices";

export default function useGetSimpleTokenPrices(addresses: string[], chain: GqlChain) {
    // Primary price source: tokenGetCurrentPrices (accurate, up-to-date)
    const { data: currentPrices, loading: currentLoading, error: currentError } = useGetCurrentTokenPrices([chain]);

    // Secondary source: tokenGetTokensDynamicData (only for 24h change info)
    const { data: dynamicData } = useGetDynamicTokenPricesQuery({
        client: balancerV3APIClient,
        variables: {
            addresses: addresses,
            chain: chain,
        },
    });

    // Build token prices using current prices as the source of truth
    const tokenPrices: TokenPrices = {};

    if (currentPrices) {
        addresses.forEach(address => {
            const currentPrice = currentPrices.find(
                t => t.address.toLowerCase() === address.toLowerCase()
            );
            if (currentPrice) {
                // Get 24h change from dynamic data if available
                const dynamicToken = dynamicData?.tokenGetTokensDynamicData?.find(
                    d => d.tokenAddress.toLowerCase() === address.toLowerCase()
                );
                const priceChange24h = dynamicToken?.priceChange24h ?? 0;
                const price24hAgo = currentPrice.price - priceChange24h;
                const priceChangePercentage24h = price24hAgo !== 0 ? (priceChange24h / price24hAgo) * 100 : 0;

                tokenPrices[currentPrice.address] = {
                    price: currentPrice.price,
                    priceChange24h,
                    priceChangePercentage24h,
                };
            }
        });
    }

    return {
        loading: currentLoading,
        error: currentError,
        data: tokenPrices,
    };
}
