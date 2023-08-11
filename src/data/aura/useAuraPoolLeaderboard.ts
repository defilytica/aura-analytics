import { useEffect } from 'react';
import { usePoolLeaderboardLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraLeaderboardInfo } from './auraTypes';
import {getAuraNetworkClient} from '../../apollo/client';
import {useActiveNetworkVersion} from "../../state/application/hooks";


export function useAuraPoolLeaderboardInfo(poolId: string): AuraLeaderboardInfo {

    const [activeNetwork] = useActiveNetworkVersion()
    const auraPoolLeaderboardInfo: AuraLeaderboardInfo = {
        leaderboard: [],
        totalStaked: 0,
    };

    const [getAuraLeaderboard, { data }] = usePoolLeaderboardLazyQuery({ client: getAuraNetworkClient(activeNetwork.chainId) });

    useEffect(() => {
        getAuraLeaderboard({
            variables: {
                poolId: poolId
            }
        });
    }, [poolId]);

    if (!data || poolId === '') {
        return auraPoolLeaderboardInfo;
    }

    let { leaderboard } = data;

    if (leaderboard) {
        auraPoolLeaderboardInfo.leaderboard = leaderboard.accounts.map((entry) => {
            return {
                stakedAmount: entry.staked / 1e18,
                accountId: entry.account.id,
            }
        });
        auraPoolLeaderboardInfo.totalStaked = leaderboard.totalStaked / 1e18
    }

    return auraPoolLeaderboardInfo;
}