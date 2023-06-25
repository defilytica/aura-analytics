import { useEffect } from 'react';
import { useVaultLeaderboardLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraLeaderboardInfo } from './auraTypes';
import {auraClient, getAuraNetworkClient} from '../../apollo/client';
import {EthereumNetworkInfo} from "../../constants/networks";


export function useAuraVaultLeaderboardInfo(vaultId: string, chainId = EthereumNetworkInfo.chainId): AuraLeaderboardInfo {

    const auraPoolLeaderboardInfo: AuraLeaderboardInfo = {
        leaderboard: [],
        totalStaked: 0,
    };

    const [getAuraLeaderboard, { data }] = useVaultLeaderboardLazyQuery({ client: getAuraNetworkClient(chainId) });

    useEffect(() => {
        getAuraLeaderboard({
            variables: {
                vaultId: vaultId
            }
        });
    }, []);

    if (!data) {
        return auraPoolLeaderboardInfo;
    }

    let { leaderboard } = data;

    if (leaderboard) {
        auraPoolLeaderboardInfo.leaderboard = leaderboard.accounts.map((entry) => {
            return {
                stakedAmount: entry.shares / 1e18,
                accountId: entry.account.id,
            }
        });
        auraPoolLeaderboardInfo.totalStaked = leaderboard.totalSupply / 1e18
    }

    return auraPoolLeaderboardInfo;
}