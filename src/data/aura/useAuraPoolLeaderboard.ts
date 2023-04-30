import { useEffect } from 'react';
import { usePoolLeaderboardLazyQuery } from '../../apollo/generated/graphql-aura-codegen-generated';
import { AuraLeaderboardInfo } from './auraTypes';
import { auraClient } from '../../apollo/client';


export function useAuraPoolLeaderboardInfo(poolId: string): AuraLeaderboardInfo {

    const auraPoolLeaderboardInfo: AuraLeaderboardInfo = {
        leaderboard: [],
        totalStaked: 0,
    };

    const [getAuraLeaderboard, { data }] = usePoolLeaderboardLazyQuery({ client: auraClient });

    useEffect(() => {
        getAuraLeaderboard({
            variables: {
                poolId: poolId
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
                stakedAmount: entry.staked / 1e18,
                accountId: entry.account.id,
            }
        });
        auraPoolLeaderboardInfo.totalStaked = leaderboard.totalStaked / 1e18
    }

    return auraPoolLeaderboardInfo;
}