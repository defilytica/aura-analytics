import {BalancerStakingGauges} from '../../data/balancer/balancerTypes';
import {HiddenHandIncentives} from '../../data/hidden-hand/hiddenHandTypes';

export function decorateGaugesWithIncentives(balancerGauges: BalancerStakingGauges[], votingIncentives: HiddenHandIncentives): BalancerStakingGauges[] {
    return balancerGauges.map((gauge) => {
        const matchingIncentive = votingIncentives.data.find((incentive) => incentive.proposal.toLowerCase() === gauge.address.toLowerCase());
        if (matchingIncentive) {
            return {
                ...gauge,
                voteCount: matchingIncentive.voteCount,
                valuePerVote: matchingIncentive.valuePerVote,
                totalRewards: matchingIncentive.totalValue,
            };
        } else {
            return gauge;
        }
    });
}
