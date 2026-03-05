import { useGetTokenListQuery } from '../../apollo/generated/graphql-codegen-generated';
import { tokenClient } from '../../apollo/client';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { GqlChain } from '../../apollo/generated/graphql-codegen-generated';

export function useLatestTokenList(clientOverride?: ApolloClient<NormalizedCacheObject>, chainId?: string){
    // Map chainId string to GqlChain enum, default to OPTIMISM for backward compatibility
    const chains: GqlChain[] = [GqlChain.Mainnet];

    const { data, loading } = useGetTokenListQuery(
        {
            client: clientOverride ? clientOverride : tokenClient,
            variables: {
                chains,
            },
        }
    );

    return {
        tokenList: data?.tokenGetTokens,
        loading,
    };
}
