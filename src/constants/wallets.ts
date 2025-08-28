import { ArbitrumNetworkInfo, EthereumNetworkInfo, PolygonNetworkInfo } from "./networks";

//Mainnet fee collector address
export const FEE_COLLECTOR_ADDRESS = '0xce88686553686da562ce7cea497ce749da109f9f';

export const FEE_STREAMER = '0xe649b71783d5008d10a96b6871e3840a398d4f06';

export const FEE_STREAMER_2 = '0x7c68c42de679ffb0f16216154c996c354cf1161b';

//Service Providers
export const WALLETS = [
    {
        name: 'AEF',
        walletId: '0x388a09a28e7d56dc61dcb1bb356251fe0c46fe8c',
    },
    {
        name: 'Aura Sidechain Distributor',
        walletId: '0x96D15D08538A17A03B0210FD1626D5f42bdba9a4',
    },
    {
        name: 'Aura Proxy OFT',
        walletId: '0xB401f0cff9F05d10699c0e2c88a81dD923c1FFFf',
    },
    {
        name: 'Aura Treasury',
        walletId: '0xfc78f8e1Af80A3bF5A1783BB59eD2d1b10f78cA9',
    },
    {
        name: 'Aura L1 Coordinator',
        walletId: '0xaA54f3b282805822419265208e669d12372a3811',
    },
    {
        name: 'Aura Ecosystem Wallet (A)',
        walletId: '0x196bda3808A7Af322AaD6384103C1E6Adb40AFa7',
    },
    {
        name: 'Aura Ecosystem Wallet (B)',
        walletId: '3A0x3BC0Cb287f74504347D50fe3aDA6d90214E6F512',
    },
    {
        name: 'Aura Ecosystem Wallet (C)',
        walletId: '0x388a09A28e7D56dc61dcb1bb356251Fe0C46fe8C',
    },
    {
        name: 'Aura Incentives Wallet',
        walletId: '0x21AED3a7A1c34Cd88B8A39DbDAE042bEfbf947ff',
    },
    {
        name: 'Aura Gauge Vote Rewards',
        walletId: '0x26094f9A6a498c1FCCd8Ff65829F55FB8BD72A4E',
    }
]

export function getSPWalletName(walletId: string) {
    const targetWallet = WALLETS.find(wallet => wallet.walletId.toLowerCase() === walletId)
    return targetWallet ? targetWallet.name : '-';
}

//Treasury addresses
const TREASURY_ADDRESS_MAINNET = '0xfc78f8e1af80a3bf5a1783bb59ed2d1b10f78ca9';
const TREASURY_ADDRESS_ARBITRUM = '0xfc78f8e1af80a3bf5a1783bb59ed2d1b10f78ca9';
const TREASURY_ADDRESS_POLYGON = '0xfc78f8e1af80a3bf5a1783bb59ed2d1b10f78ca9';
//Copper proxy contracts
const COPPER_LAUNCH_PROXY_MAINNET = '0x9a74cbff3f36ff1e433ef88d0ec1cdcd1eb79afa';
const COPPER_LAUNCH_PROXY_ARBITRUM = '0x22D15E202538e90d6fDaE5044A4D6a28453aA4C5';
const COPPER_LAUNCH_PROXY_POLYGON ='0x7388feB5a04990bb4c7570e68F1b37aB06C1aafD';
export const DAO_FEE_MULTISIG  = '0xe649b71783d5008d10a96b6871e3840a398d4f06';
export const KARPATKEY_SAFE = '0x0EFcCBb9E2C09Ea29551879bd9Da32362b32fc89'

export const AEF = '0x388a09a28e7d56dc61dcb1bb356251fe0c46fe8c';

export const TREASURY_ADDRESS_CONFIG = [
    {
        chainID: EthereumNetworkInfo.chainId,
        treasury: TREASURY_ADDRESS_MAINNET,
        copper: COPPER_LAUNCH_PROXY_MAINNET,
    },
    {
        chainID: ArbitrumNetworkInfo.chainId,
        treasury: TREASURY_ADDRESS_ARBITRUM,
        copper: COPPER_LAUNCH_PROXY_ARBITRUM,
    },
    {
        chainID: PolygonNetworkInfo.chainId,
        treasury: TREASURY_ADDRESS_POLYGON,
        copper: COPPER_LAUNCH_PROXY_POLYGON,
    }
];

export function getTreasuryConfig(chainID: string) {
    const TREASURY_CONFIG = TREASURY_ADDRESS_CONFIG.find((t) => t.chainID === chainID);
    if (TREASURY_CONFIG) {
        return TREASURY_CONFIG;
    }
    return TREASURY_ADDRESS_CONFIG[0];

}

