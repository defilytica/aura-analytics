import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, gnosis } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {ALCHEMY_KEY} from "../data/balancer/constants";

export const { chains, publicClient } = configureChains(
    [mainnet, arbitrum],
    [
        alchemyProvider({ apiKey: ALCHEMY_KEY }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'Aura Analytics',
    projectId: 'e4a09fd8139cf5b506720cced180f891',
    chains
});

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})