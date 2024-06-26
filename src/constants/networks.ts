import ARBITRUM_LOGO_URL from '../assets/svg/arbitrum.svg'
import ETHEREUM_LOGO_URL from '../assets/svg/ethereum.svg'
import POLYGON_LOGO_URL from '../assets/svg/polygon.svg'
import GNOSIS_LOGO_URL from '../assets/svg/gnosis.svg'
import ZKEVM_LOGO_URL from '../assets/svg/zkevm.svg'
import OPTIMISM_LOGO_URL from '../assets/svg/optimism.svg';
import BASE_LOGO_URL from '../assets/svg/base.svg'
import AVALANCHE_LOGO_URL from '../assets/svg/avalancheLogo.svg'

import {
  ALCHEMY_KEY,
  ALCHEMY_KEY_ARBITRUM, ALCHEMY_KEY_POLYGON, ALCHEMY_KEY_ZKEVM,
  ALCHEMY_URL, ALCHEMY_URL_ARBITRUM, ALCHEMY_URL_POLYGON, ALCHEMY_URL_ZKEVM,
  BALANCER_PRIMARY_COLOR,
  BALANCER_SECONDARY_COLOR, PERSONAL_GRAPH_KEY
} from '../data/balancer/constants';

export enum SupportedNetwork {
  ETHEREUM,
  ARBITRUM,
  POLYGON,
  GNOSIS,
  ZKEVM,
  OPTIMISM,
  AVALANCHE,
  BASE,
}

export type NetworkInfo = {
  id: SupportedNetwork
  chainId: string
  coingeckoId: string
  debankId: string
  dbNetworkId: string
  v3NetworkID: string
  balAddress: string
  feeCollectorThreshold: number
  decentralicedClientUri: string
  blockClientUri: string
  alchemyRPCUrl: string
  alchemyKey: string
  route: string
  name: string
  startTimeStamp: number
  clientUri: string
  appUri: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
  blurb?: string
}

const DECENTRALIZED_ENDPOINT = 'https://gateway-arbitrum.network.thegraph.com/api/' + PERSONAL_GRAPH_KEY + '/subgraphs/id/'

export const EthereumNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ETHEREUM,
  chainId: '1',
  coingeckoId: 'ethereum',
  debankId: 'eth',
  dbNetworkId: 'eth',
  v3NetworkID: 'MAINNET',
  balAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
  feeCollectorThreshold: 10000,
  route: '',
  name: 'Ethereum',
  startTimeStamp: 1619874000,
  appUri: 'https://app.balancer.fi/#/',
  clientUri: 'https://api.studio.thegraph.com/query/75376/balancer-v2/version/latest',
  decentralicedClientUri: DECENTRALIZED_ENDPOINT + 'C4ayEZP2yTXRAB8vSaTrgN4m9anTe9Mdm2ViyiAuV9TV',
  blockClientUri: DECENTRALIZED_ENDPOINT + '9A6bkprqEG2XsZUYJ5B2XXp6ymz9fNcn4tVPxMWDztYC',
  alchemyRPCUrl: ALCHEMY_URL,
  alchemyKey: ALCHEMY_KEY,
  bgColor: BALANCER_PRIMARY_COLOR,
  primaryColor: BALANCER_PRIMARY_COLOR,
  secondaryColor: BALANCER_SECONDARY_COLOR,
  imageURL: ETHEREUM_LOGO_URL,
}

export const ArbitrumNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ARBITRUM,
  chainId: '42161',
  coingeckoId: 'arbitrum-one',
  debankId: 'arb',
  dbNetworkId: 'arb',
  v3NetworkID: 'ARBITRUM',
  balAddress: '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8',
  feeCollectorThreshold: 5000,
  route: 'arbitrum',
  name: 'Arbitrum',
  startTimeStamp: 1619874000,
  appUri: 'https://app.balancer.fi/#/arbitrum/',
  clientUri: 'https://api.studio.thegraph.com/query/75376/balancer-arbitrum-v2/version/latest',
  decentralicedClientUri: DECENTRALIZED_ENDPOINT + '/subgraphs/id/98cQDy6tufTJtshDCuhh9z2kWXsQWBHVh2bqnLHsGAeS',
  blockClientUri: DECENTRALIZED_ENDPOINT + 'JBnWrv9pvBvSi2pUZzba3VweGBTde6s44QvsDABP47Gt',
  alchemyRPCUrl: ALCHEMY_URL_ARBITRUM,
  alchemyKey: ALCHEMY_KEY_ARBITRUM,
  imageURL: ARBITRUM_LOGO_URL,
  bgColor: '#0A294B',
  primaryColor: '#0490ED',
  secondaryColor: '#96BEDC',
  blurb: 'Beta',
}

export const PolygonNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.POLYGON,
  chainId: '137',
  coingeckoId: 'polygon-pos',
  debankId: 'matic',
  dbNetworkId: 'poly',
  v3NetworkID: 'POLYGON',
  balAddress: '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3',
  feeCollectorThreshold: 5000,
  route: 'polygon',
  name: 'Polygon',
  startTimeStamp: 1619874000,
  appUri: 'https://app.balancer.fi/#/polygon/',
  clientUri: 'https://api.studio.thegraph.com/query/75376/balancer-polygon-v2/version/latest',
  decentralicedClientUri: DECENTRALIZED_ENDPOINT + '/subgraphs/id/H9oPAbXnobBRq1cB3HDmbZ1E8MWQyJYQjT1QDJMrdbNp',
  blockClientUri: DECENTRALIZED_ENDPOINT + 'DMnXZnphMTkcFiK5NHm6LzwhJ7yUy7seVnZuNkNsXLHp',
  alchemyRPCUrl: ALCHEMY_URL_POLYGON,
  alchemyKey: ALCHEMY_KEY_POLYGON,
  bgColor: '#8247e5',
  primaryColor: '#8247e5',
  secondaryColor: '#FB7876',
  imageURL: POLYGON_LOGO_URL,
  blurb: 'Beta',
}

export const GnosisNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.GNOSIS,
  chainId: '100',
  coingeckoId: 'xdai-ecosystem',
  debankId: 'gnosis',
  dbNetworkId: 'gnosis',
  v3NetworkID: 'GNOSIS',
  balAddress: '0x7eF541E2a22058048904fE5744f9c7E4C57AF717',
  feeCollectorThreshold: 5000,
  route: 'gnosis',
  name: 'Gnosis',
  startTimeStamp: 1673807871,
  appUri: 'https://app.balancer.fi/#/gnosis-chain/',
  clientUri: 'https://api.studio.thegraph.com/query/75376/balancer-gnosis-chain-v2/version/latest',
  decentralicedClientUri: DECENTRALIZED_ENDPOINT + '/subgraphs/id/EJezH1Cp31QkKPaBDerhVPRWsKVZLrDfzjrLqpmv6cGg',
  blockClientUri: DECENTRALIZED_ENDPOINT + '8ZD25Ff1efVjqHkGmPdgn7oevwe3FkSB7WFygyNEsAco',
  alchemyRPCUrl: 'https://rpc.gnosis.gateway.fm',
  alchemyKey: '',
  bgColor: '#8247e5',
  primaryColor: '#0d8e74',
  secondaryColor: '#FB7876',
  imageURL: GNOSIS_LOGO_URL,
  blurb: 'Beta',
}

export const PolygonZkEVMNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ZKEVM,
  chainId: '1101',
  coingeckoId: 'polygon-zkevm',
  debankId: 'pze',
  dbNetworkId: '',
  v3NetworkID: 'POLYGONZKEVM',
  balAddress: '0x120eF59b80774F02211563834d8E3b72cb1649d6',
  feeCollectorThreshold: 5000,
  route: 'zkevm',
  name: 'Polygon zkEVM',
  startTimeStamp: 1685990897,
  appUri: 'https://app.balancer.fi/#/zkevm/',
  clientUri: 'https://api.studio.thegraph.com/query/24660/balancer-polygon-zk-v2/version/latest',
  decentralicedClientUri: 'https://api.studio.thegraph.com/query/24660/balancer-polygon-zk-v2/version/latest',
  blockClientUri: '',
  alchemyRPCUrl: ALCHEMY_URL_ZKEVM,
  alchemyKey: ALCHEMY_KEY_ZKEVM,
  bgColor: '#a176e8',
  primaryColor: '#620df3',
  secondaryColor: '#FB7876',
  imageURL: ZKEVM_LOGO_URL,
  blurb: 'Beta',
}

export const OptimismNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.OPTIMISM,
  chainId: '10',
  coingeckoId: 'optimistic-ethereum',
  debankId: 'op',
  dbNetworkId: 'opt',
  v3NetworkID: 'OPTIMISM',
  balAddress: '0xf24bcf4d1e507740041c9cfd2dddb29585adce1e',
  route: 'optimism',
  name: 'OΞ (Optimism)',
  startTimeStamp: 1654034400,
  appUri: 'https://op.beets.fi',
  clientUri: 'https://api.studio.thegraph.com/query/75376/balancer-optimism-v2/version/latest',
  decentralicedClientUri: '',
  blockClientUri: DECENTRALIZED_ENDPOINT + 'E7PJSKBpyCmcx7HfW6NCpv7pWg43YfXhS4bGVCcx2Tfq',
  alchemyKey: '',
  alchemyRPCUrl: '',
  feeCollectorThreshold: 1000,
  bgColor: '#F01B36',
  primaryColor: '#F01B36',
  secondaryColor: '#FB7876',
  imageURL: OPTIMISM_LOGO_URL,
  blurb: 'L2 Beta',
};

export const BaseNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.BASE,
  chainId: '8453',
  v3NetworkID: 'BASE',
  coingeckoId: 'base',
  debankId: 'base',
  dbNetworkId: 'base',
  balAddress: '0x4158734d47fc9692176b5085e0f52ee0da5d47f1',
  feeCollectorThreshold: 1000,
  route: 'base',
  name: 'Base',
  startTimeStamp: 1690495200,
  appUri: 'https://app.balancer.fi/#/avalanche/',
  clientUri: 'https://api.studio.thegraph.com/query/24660/balancer-base-v2/version/latest',
  decentralicedClientUri: DECENTRALIZED_ENDPOINT + '/subgraphs/id/98cQDy6tufTJtshDCuhh9z2kWXsQWBHVh2bqnLHsGAeS',
  blockClientUri: '',
  alchemyRPCUrl: 'https://base.publicnode.com',
  alchemyKey: '',
  bgColor: '#0030a6',
  primaryColor: '#0027a2',
  secondaryColor: '#005094',
  imageURL: BASE_LOGO_URL,
  blurb: 'Beta',
}

export const AvalancheNetworkInfo: NetworkInfo = {
  dbNetworkId: "avax",
  feeCollectorThreshold: 1000,
  id: SupportedNetwork.AVALANCHE,
  chainId: '43114',
  v3NetworkID: 'AVALANCHE',
  coingeckoId: 'avalanche',
  debankId: 'avax',
  balAddress: '0xe15bcb9e0ea69e6ab9fa080c4c4a5632896298c3',
  route: 'avalanche',
  name: 'Avalanche',
  startTimeStamp: 1688229198,
  appUri: 'https://app.balancer.fi/#/avalanche/',
  clientUri: 'https://api.studio.thegraph.com/query/75376/balancer-avalanche-v2/version/latest',
  decentralicedClientUri: DECENTRALIZED_ENDPOINT + '/subgraphs/id/7asfmtQA1KYu6CP7YVm5kv4bGxVyfAHEiptt2HMFgkHu',
  blockClientUri: DECENTRALIZED_ENDPOINT + '97YH6dMhGcXoTvVwDAML6GxYm9hBh7PCz6WPscUkrFhv',
  alchemyRPCUrl: ' https://api.avax.network/ext/bc/C/rpc ',
  alchemyKey: '',
  bgColor: '#F01B36',
  primaryColor: '#F01B36',
  secondaryColor: '#FB7876',
  imageURL: AVALANCHE_LOGO_URL,
  blurb: 'Beta'
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [
  EthereumNetworkInfo,
  ArbitrumNetworkInfo,
  PolygonNetworkInfo,
  GnosisNetworkInfo,
  PolygonZkEVMNetworkInfo,
  OptimismNetworkInfo,
  AvalancheNetworkInfo,
  BaseNetworkInfo
]
