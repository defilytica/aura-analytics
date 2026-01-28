// Vote Market API endpoints
// Using balancer endpoint for live data since Aura votes on Balancer gauges
export const VOTE_MARKET_API_URL = 'https://api-v3.stakedao.org/votemarket/balancer';

// Balancer historical data (for reference/Balancer dashboard)
export const VOTE_MARKET_BALANCER_METADATA_URL = 'https://raw.githubusercontent.com/stake-dao/votemarket-analytics/refs/heads/main/analytics/votemarket-analytics/balancer/rounds-metadata.json';
export const VOTE_MARKET_BALANCER_HISTORICAL_BASE_URL = 'https://raw.githubusercontent.com/stake-dao/votemarket-analytics/refs/heads/main/analytics/votemarket-analytics/balancer';

// Aura/vlAURA specific historical data - contains Aura-specific votes, efficiency, and rewards
export const VOTE_MARKET_AURA_METADATA_URL = 'https://raw.githubusercontent.com/stake-dao/votemarket-analytics/refs/heads/main/analytics/votemarket-analytics/vlaura/balancer/rounds-metadata.json';
export const VOTE_MARKET_AURA_HISTORICAL_BASE_URL = 'https://raw.githubusercontent.com/stake-dao/votemarket-analytics/refs/heads/main/analytics/votemarket-analytics/vlaura/balancer';

// Legacy aliases for backwards compatibility
export const VOTE_MARKET_METADATA_URL = VOTE_MARKET_AURA_METADATA_URL;
export const VOTE_MARKET_HISTORICAL_BASE_URL = VOTE_MARKET_AURA_HISTORICAL_BASE_URL;

// Round IDs that have valid data (starting from when Vote Market became active for Aura)
// Round 94 is the first valid round for Aura Vote Market data (uses vlaura endpoint numbering)
export const VOTE_MARKET_FIRST_VALID_ROUND = 94;
