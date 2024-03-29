import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {
    ArbitrumNetworkInfo, BaseNetworkInfo,
    EthereumNetworkInfo,
    GnosisNetworkInfo,
    OptimismNetworkInfo,
    PolygonNetworkInfo, PolygonZkEVMNetworkInfo
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
  uri: 'https://graph.aura.finance/subgraphs/name/aura/aura-mainnet-v2-1',
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

export const auraPolygonZkEVMClient = new ApolloClient({
    uri: 'https://subgraph.satsuma-prod.com/3c56113393d7/1xhub-ltd/aura-finance-zkevm/api',
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

export const auraBaseClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/aurafinance/aura-finance-base',
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
    uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
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
    uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
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
    uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-prune-v2',
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
    uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gnosis-chain-v2',
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
    uri: 'https://api.studio.thegraph.com/query/24660/balancer-polygon-zk-v2/version/latest',
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

export const baseBlockClient = new ApolloClient({
    uri: 'https://api.studio.thegraph.com/query/48427/bleu-base-blocks/version/latest',
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

export const baseClient = new ApolloClient({
    //uri: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    uri: 'https://api.studio.thegraph.com/query/24660/balancer-base-v2/version/latest',
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

export function getAuraNetworkClient(networkId: string): ApolloClient<NormalizedCacheObject> {
    switch (networkId) {
        case EthereumNetworkInfo.chainId:
            return auraClient;
        case ArbitrumNetworkInfo.chainId:
            return auraArbitrumClient;
        case PolygonNetworkInfo.chainId:
            return auraPolygonClient;
        case PolygonZkEVMNetworkInfo.chainId:
            return auraPolygonZkEVMClient;
        case OptimismNetworkInfo.chainId:
            return auraOptimismClient;
        case GnosisNetworkInfo.chainId:
            return auraGnosisClient;
        case BaseNetworkInfo.chainId:
            return auraBaseClient;
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
