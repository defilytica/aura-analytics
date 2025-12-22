export const BALANCER_SUBGRAPH_START_TIMESTAMP: number = parseInt(
    process.env.REACT_APP_BALANCER_SUBGRAPH_START_TIMESTAMP ?? '1622542379',
);

export const BALANCER_APP_LINK = process.env.REACT_APP_APP_LINK || '';
export const BALANCER_DOCS_LINK = process.env.REACT_APP_DOCS_LINK || '';
export const BALANCER_PROJECT_NAME = process.env.REACT_APP_PROJECT_NAME || '';
export const BALANCER_PRIMARY_COLOR = process.env.REACT_APP_PRIMARY_COLOR || '';
export const BALANCER_SECONDARY_COLOR = process.env.REACT_APP_SECONDARY_COLOR || '';
export const BALANCER_APP_LOGO = process.env.REACT_APP_APP_LOGO || '';
export const BALANCER_LOADING_IMAGE = process.env.REACT_APP_LOADING_IMAGE || '';
export const BALANCER_BACKGROUND_IMAGE = process.env.REACT_APP_BACKGROUND_IMAGE  || '';
export const BALANCER_GRAPH_KEY = process.env.REACT_APP_BALANCER_GRAPH_KEY || '';
export const PERSONAL_GRAPH_KEY = process.env.REACT_APP_PERSONAL_GRAPH_KEY || '';
export const INFURA_KEY = process.env.REACT_APP_INFURA_KEY || '';
export const ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY || '';
export const ALCHEMY_URL = process.env.REACT_APP_ALCHEMY_URL || '';
export const ALCHEMY_KEY_POLYGON = process.env.REACT_APP_ALCHEMY_KEY_POLYGON || '';
export const ALCHEMY_URL_POLYGON = process.env.REACT_APP_ALCHEMY_URL_POLYGON || '';
export const ALCHEMY_KEY_ARBITRUM = process.env.REACT_APP_ALCHEMY_KEY_ARBITRUM || '';
export const ALCHEMY_URL_ARBITRUM = process.env.REACT_APP_ALCHEMY_URL_ARBITRUM || '';
export const ALCHEMY_KEY_ZKEVM = process.env.REACT_APP_ALCHEMY_KEY_ZKEVM || '';
export const ALCHEMY_URL_ZKEVM = process.env.REACT_APP_ALCHEMY_URL_ZKEVM|| '';
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API || '';
export const DAO_FEE_FACTOR = 0.175;
export const CG_KEY = process.env.REACT_APP_CG_KEY || '';

// DRPC endpoint for Ethereum mainnet (used for gauge emissions, voting power, etc.)
// Production key is domain-protected, dev key is loaded from .env for local development
const DRPC_KEY_PROD = 'ArfLI8Nwx0R2hnaACzaNOP6No1vyY0wR8KwLEklbR4ac';
const DRPC_KEY = process.env.NODE_ENV === 'development' && process.env.REACT_APP_DRPC_KEY_DEV
    ? process.env.REACT_APP_DRPC_KEY_DEV
    : DRPC_KEY_PROD;
export const DRPC_ETHEREUM_URL = `https://lb.drpc.live/ethereum/${DRPC_KEY}`;
