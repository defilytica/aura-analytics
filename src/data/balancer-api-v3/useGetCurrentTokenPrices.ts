import {
    GqlChain,

} from "../../apollo/generated/graphql-codegen-generated";
import {balancerV3APIClient} from "../../apollo/client";
import {useTokenGetCurrentPricesQuery} from "../../apollo/generated/graphql-balancer-v3-codegen-generated";

export default function useGetCurrentTokenPrices(chainInIds: GqlChain[]) {
    const {data, loading, error} = useTokenGetCurrentPricesQuery({
        client: balancerV3APIClient,
        variables: {
            chains: chainInIds
        }
    });

    return {
        loading,
        error,
        data: data?.tokenGetCurrentPrices, // Return the mapped data
    };
}