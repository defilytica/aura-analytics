import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {
    ArbitrumNetworkInfo,
    EthereumNetworkInfo,
    GnosisNetworkInfo,
    OptimismNetworkInfo,
    PolygonNetworkInfo
} from "../constants/networks";

export const healthClient = new ApolloClient({
    uri: 'https://api.thegraph.com/index-node/graphql',
    cache: new InMemoryCache(),
});

export const blockClient = new ApolloClient({
    uri: process.env.REACT_APP_BLOCKS_SUBGRAPH_URL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

//Aura client
export const auraClient = new ApolloClient({
  //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
  uri: 'https://aura-v2-1-analytics.stellate.sh/',
  cache: new InMemoryCache({
      typePolicies: {
          Token: {
              // Singleton types that have no identifying field can use an empty
              // array for their keyFields.
              keyFields: false,
          },
          Pool: {
              // Singleton types that have no identifying field can use an empty
              // array for their keyFields.
              keyFields: false,
          },
      },
  }),
  queryDeduplication: true,
  defaultOptions: {
      watchQuery: {
          fetchPolicy: 'no-cache',
      },
      query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
      },
  },
});

//Aura client
export const auraArbitrumClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    uri: 'https://graph.data.aura.finance/subgraphs/name/aura/aura-arbitrum',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

export const auraOptimismClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    uri: 'https://graph.data.aura.finance/subgraphs/name/aura/aura-optimism',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

export const auraPolygonClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    uri: 'https://api.thegraph.com/subgraphs/name/aurafinance/aura-finance-polygon',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

export const auraGnosisClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    uri: 'https://api.thegraph.com/subgraphs/name/aurafinance/aura-finance-gnosis-chain',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

export const client = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    uri: 'https://balancer-v2-analytics.stellate.sh/',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

export const arbitrumClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
    uri: 'https://balancer-arbitrum-v2-analytics.stellate.sh',
    cache: new InMemoryCache({
      typePolicies: {
        Token: {
          // Singleton types that have no identifying field can use an empty
          // array for their keyFields.
          keyFields: false,
        },
        Pool: {
          // Singleton types that have no identifying field can use an empty
          // array for their keyFields.
          keyFields: false,
        },
      },
    }),
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  })

  export const arbitrumBlockClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    },
  })

  export const polygonClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    uri: 'https://balancer-polygon-prune-v2-analytics.stellate.sh',
    cache: new InMemoryCache({
      typePolicies: {
        Token: {
          // Singleton types that have no identifying field can use an empty
          // array for their keyFields.
          keyFields: false,
        },
        Pool: {
          // Singleton types that have no identifying field can use an empty
          // array for their keyFields.
          keyFields: false,
        },
      },
    }),
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    },
  })

  export const polygonBlockClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/polygon-blocks',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    },
  })

  export const gnosisClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    uri: 'https://balancer-gnosis-chain-v2-analytics.stellate.sh',
    cache: new InMemoryCache({
      typePolicies: {
        Token: {
          // Singleton types that have no identifying field can use an empty
          // array for their keyFields.
          keyFields: false,
        },
        Pool: {
          // Singleton types that have no identifying field can use an empty
          // array for their keyFields.
          keyFields: false,
        },
      },
    }),
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    },
  })

export const polygonZKEVMClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    uri: 'https://balancer-polygon-zkevm-v2-analytics.stellate.sh',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-first',
        },
        query: {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
    },
})

export const polygonZKEVMBlockClient = new ApolloClient({
    uri: 'https://api.studio.thegraph.com/query/48427/bleu-polygon-zkevm-blocks/version/latest',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-first',
        },
        query: {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
    },
})

  export const gnosisBlockClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/x0swapsubgraph/xdai-blocks',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    },
  })

export const optimismClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/beethovenxfi/beethovenx-optimism',
    cache: new InMemoryCache({
        typePolicies: {
            Token: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
            Pool: {
                // Singleton types that have no identifying field can use an empty
                // array for their keyFields.
                keyFields: false,
            },
        },
    }),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
})

export const optimismBlockClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/beethovenxfi/optimism-blocks',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-first',
        },
        query: {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
    },
})

export function getAuraNetworkClient(networkId: string): ApolloClient<NormalizedCacheObject> {
    switch (networkId) {
        case EthereumNetworkInfo.chainId:
            return auraClient;
        case ArbitrumNetworkInfo.chainId:
            return auraArbitrumClient;
        case PolygonNetworkInfo.chainId:
            return auraPolygonClient;
        case OptimismNetworkInfo.chainId:
            return auraOptimismClient;
        case GnosisNetworkInfo.chainId:
            return auraGnosisClient;
        default:
            return auraClient;
    }
}

export const tokenClient = new ApolloClient({
    uri: 'https://backend-v3.beets-ftm-node.com/',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

export const balancerV3APIClient = new ApolloClient({
    uri: 'https://api-v3.balancer.fi/',
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});
