import {useState, useEffect} from 'react';
import {useAuraGlobalStats} from "../aura/useAuraGlobalStats";
import balancerTokenAdminAbi from '../../constants/abis/balancerTokenAdmin.json';
import erc20Abi from '../../constants/abis/erc20.json';
import {AURA_TIMESTAMPS} from "../hidden-hand/constants";
import {DRPC_ETHEREUM_URL} from "../balancer/constants";
import { useAuraPrice, getPriceForDate } from "../balancer-api-v3/useGetCompleteHistoricalTokenPrice";
import {useGetHiddenHandVotingIncentives} from "../hidden-hand/useGetHiddenHandVotingIncentives";
import {useGetVoteMarketIncentives} from "../votemarket/useGetVoteMarketIncentives";
import {ethers} from "ethers";
import {AURA_TOKEN_MAINNET, BALANCER_TOKEN_MAINNET} from "../aura/auraConstants";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import useGetSimpleTokenPrices from "../balancer-api-v3/useGetSimpleTokenPrices";
import useGetHistoricalTokenPrice from "../balancer-api-v3/useGetHistoricalTokenPrice";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import {unixToDate} from "../../utils/date";

const auraAddress = AURA_TOKEN_MAINNET;
const balAddress = BALANCER_TOKEN_MAINNET;
export const useGetEmissionPerVote = (timestampCurrentRound: number) => {
    const timestamps = AURA_TIMESTAMPS;
    const indexOfCurrent = timestamps.indexOf(timestampCurrentRound);
    const timestampPreviousRound = timestamps[indexOfCurrent - 1]
    const [activeNetwork] = useActiveNetworkVersion()
    // If a round is currently active we need to set the appropriate pattern

    const [emissionValuePerVote, setEmissionValuePerVote] = useState(0);
    const [emissionsPerDollarSpent, setEmissionsPerDollarSpent] = useState(0)
    //const coinData = useCoinGeckoSimpleTokenPrices([auraAddress, balAddress]);
    const coinData = useGetSimpleTokenPrices([auraAddress, balAddress], activeNetwork.chainId);
    const { data: auraCompletePrice } = useAuraPrice();
    const { data: historicalBALCoinData } = useGetHistoricalTokenPrice(balAddress, GqlChain.Mainnet)
    const auraGlobalStats = useAuraGlobalStats();

    // Vote Market data for current/recent rounds (from vlaura endpoint)
    // totalVotes = actual vlAURA votes
    // totalRewardsUSD = Aura's share of incentives
    // dollarPerVote = $/vlAURA (pre-calculated)
    const {
        data: voteMarketData,
        loading: voteMarketLoading,
        totalVotes: voteMarketTotalVotes,
        totalRewardsUSD: voteMarketTotalRewards,
        dollarPerVote: voteMarketDollarPerVote
    } = useGetVoteMarketIncentives();

    // Hidden Hand data for legacy/historical rounds
    const hiddenHandDataCurrent = useGetHiddenHandVotingIncentives(timestampCurrentRound === 0 ? '' : String(timestampCurrentRound));
    const hiddenHandDataPrevious = useGetHiddenHandVotingIncentives(String(timestampPreviousRound));

    // Note: Vote Market is used for current round (timestampCurrentRound === 0)
    // Hidden Hand is used for historical rounds (legacy data)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if we have the required data based on the data source
                const hasVoteMarketData = voteMarketData && !voteMarketLoading;
                const hasHiddenHandData = hiddenHandDataCurrent.incentives && hiddenHandDataPrevious.incentives;

                // For Vote Market rounds, we need Vote Market data; for legacy rounds, we need Hidden Hand data
                const hasRequiredIncentiveData = (timestampCurrentRound === 0 && hasVoteMarketData) || hasHiddenHandData;

                if ((timestampCurrentRound === 0 || timestampCurrentRound) && coinData && auraGlobalStats && hasRequiredIncentiveData) {
                    const DAY = 86400;
                    const WEEK = 604800;
                    const currentTime = Date.now();
                    const currentTimestamp = Math.floor(currentTime / 1000);

                    const provider = new ethers.providers.JsonRpcProvider(DRPC_ETHEREUM_URL);

                    // Per AIP-42, reduce AURA emission per BAL by 40%
                    // and instead add additional AURA distributed pro rata based on voting result
                    // starting from August 17th 2023 voting round (epoch at 1692230400)
                    // Weekly additional Aura: 90000 -> bi-weekly resulting in 180000
                    // -----
                    // Per AIP-63: additional weekly AURA has been reduced from 90000 to 76500 -> 153000 new additional Aura Amount
                    // LP fees have been reduced from 25 to 22.5%
                    const newEmissionEffectiveAt = 1692230400;
                    const secondaryOptimizationEffectiveAt = 1707951600;
                    const thirdOptimizationEffectiveAt = 1724882400;

                    // Use current timestamp if timestampCurrentRound is 0
                    const effectiveTimestamp = timestampCurrentRound === 0 ? currentTimestamp : timestampCurrentRound;

                    const isNewEmission = effectiveTimestamp > newEmissionEffectiveAt || timestampCurrentRound === 0;
                    const isAuraOptimized = effectiveTimestamp > secondaryOptimizationEffectiveAt || timestampCurrentRound === 0;

                    const emissionMultiplier = isNewEmission ? 0.4 : 1;

                    let additionalAuraAmount = 0;
                    if (isNewEmission) {
                        if (effectiveTimestamp >= thirdOptimizationEffectiveAt) {
                            additionalAuraAmount = 70380 * 2; // Adjusted amount after third Aura optimization
                            console.log("Update: AIP-63 2024/09/02 additional AURA has been reduced from 76.5k to 70.380k per week");
                        } else if (isAuraOptimized) {
                            additionalAuraAmount = 153000; // Adjusted amount after Aura optimization
                            console.log("Emission calculation based on AIP-63");
                        } else {
                            additionalAuraAmount = 180000; // Original bi-weekly amount after new emission policy
                        }
                    }

                    // Determine if this is current round
                    const isCurrentRound = timestampCurrentRound === 0;
                    const targetDate = isCurrentRound
                        ? unixToDate(currentTimestamp, 'YYYY-MM-DD')
                        : unixToDate(timestampCurrentRound, 'YYYY-MM-DD');

                    // Get live prices from API
                    const liveAuraPrice = coinData?.data?.[auraAddress]?.price ?? 0;
                    const liveBalPrice = coinData?.data?.[balAddress]?.price ?? 0;

                    // Determine AURA price to use
                    let auraPrice: number;
                    if (timestampCurrentRound === 0) {
                        // For current round, use the most recent historical price (last entry)
                        const latestHistoricalPrice = auraCompletePrice?.[auraCompletePrice.length - 1];
                        auraPrice = latestHistoricalPrice?.value ?? coinData.data[auraAddress].price;
                        console.log("Current round - using latest historical AURA price:", auraPrice);
                    } else {
                        // For historical rounds, find the price at that specific date
                        const auraTsPrice = getPriceForDate(auraCompletePrice || [], targetDate);
                        auraPrice = auraTsPrice ?? coinData.data[auraAddress].price;
                        console.log(`AURA historical price: ${auraPrice} for ${targetDate}`);
                    }

                    // Determine BAL price to use
                    let balPrice: number;
                    if (timestampCurrentRound === 0) {
                        // For current round, use the most recent historical price (last entry)
                        const latestHistoricalPrice = historicalBALCoinData?.[historicalBALCoinData.length - 1];
                        balPrice = latestHistoricalPrice?.value ?? coinData.data[balAddress].price;
                        console.log("Current round - using latest historical BAL price:", balPrice);
                    } else {
                        // For historical rounds, find the price at that specific date
                        const balTsPrice = historicalBALCoinData?.find(el => el.time === targetDate);
                        balPrice = balTsPrice?.value ?? coinData.data[balAddress].price;
                        console.log(`BAL historical price: ${balPrice} for ${targetDate}`);
                    }

                    // Final validation - ensure we have valid prices
                    if (auraPrice <= 0 || balPrice <= 0) {
                        console.error(`Invalid prices detected - AURA: ${auraPrice}, BAL: ${balPrice}. Using live prices as emergency fallback.`);
                        if (auraPrice <= 0 && liveAuraPrice > 0) auraPrice = liveAuraPrice;
                        if (balPrice <= 0 && liveBalPrice > 0) balPrice = liveBalPrice;
                    }

                    console.log(`Final prices for round ${isCurrentRound ? 'CURRENT' : targetDate} | AURA: $${auraPrice.toFixed(4)} | BAL: $${balPrice.toFixed(4)}`);


                    const balTokenAdminAddress = '0xf302f9F50958c5593770FDf4d4812309fF77414f';

                    const balTokenAdmin = new ethers.Contract(
                        balTokenAdminAddress,
                        balancerTokenAdminAbi,
                        provider
                    );

                    // BAL emission schedule based on https://dune.com/balancer/bal-supply
                    // Weekly emissions converted to biweekly (*2)
                    let biweeklyBalEmissionFormatted: number;
                    if (effectiveTimestamp > 1680127200 && effectiveTimestamp < 1743030000) {
                        // Weekly: 102530.5
                        biweeklyBalEmissionFormatted = 102530.5 * 2;
                    } else if (effectiveTimestamp > 1743372000 && effectiveTimestamp < 1774306800) {
                        // Weekly: 86217.5
                        biweeklyBalEmissionFormatted = 86217.5 * 2;
                    } else if (effectiveTimestamp > 1774652400 && effectiveTimestamp < 1805929200) {
                        // Weekly: 72500
                        biweeklyBalEmissionFormatted = 72500 * 2;
                    } else {
                        // Fallback to on-chain rate for timestamps outside defined ranges
                        const biweeklyBalEmission = (await balTokenAdmin.rate()).mul(WEEK * 2);
                        biweeklyBalEmissionFormatted = parseFloat(ethers.utils.formatEther(biweeklyBalEmission));
                    }

                    console.log("Biweekly BAL emission: ", biweeklyBalEmissionFormatted)


                    const initAuraSupply = 50000000;
                    const auraCliffCount = auraGlobalStats?.auraTotalCliffs;
                    const currentAuraSupply = auraGlobalStats?.auraTotalSupply;
                    const auraReductionPerCliff = auraGlobalStats?.auraReductionPerCliff;

                    const auraEmissionMinted = currentAuraSupply - initAuraSupply;
                    const auraCliff = auraEmissionMinted / auraReductionPerCliff;
                    const reduction = ((auraCliffCount - auraCliff) * 5 / 2) + 700;
                    const auraPerBal =
                        (emissionMultiplier * parseFloat(reduction.toString())) /
                        parseFloat(auraCliffCount.toString());


                    // Calculate Aura's voting power in Balancer
                    const veBalAddress = '0xc128a9954e6c874ea3d62ce62b468ba073093f25';
                    const veBal = new ethers.Contract(
                        veBalAddress,
                        erc20Abi,
                        provider
                    );
                    const auraVoterProxy = '0xaf52695e1bb01a16d33d7194c28c42b10e0dbec2';
                    const auraVotingPower = await veBal.balanceOf(auraVoterProxy);
                    const totalVotingPower = await veBal.totalSupply();
                    const auraBalShare = parseFloat(ethers.utils.formatEther(auraVotingPower)) / parseFloat(ethers.utils.formatEther(totalVotingPower));

                    // Total vlAURA supply - this is ALL voting power for emission calculation
                    // BAL emissions are distributed to ALL vlAURA holders, not just those voting on incentivized gauges
                    const totalVlAura = auraGlobalStats?.auraTotalLockedAmount || 0;

                    let totalVotesCurrent = 0;
                    let totalVotesPrevious = 0;
                    let totalVotesOnIncentivizedGauges = 0;
                    let totalIncentivesUSD = 0;
                    let dollarPerVlAura = 0;

                    // For current round, use Vote Market data if available (from vlaura endpoint)
                    if (timestampCurrentRound === 0 && voteMarketData) {
                        // Use Vote Market data directly - already Aura-specific from vlaura endpoint
                        totalIncentivesUSD = voteMarketTotalRewards || 0;
                        totalVotesOnIncentivizedGauges = voteMarketTotalVotes || 0;
                        // Use pre-calculated $/vlAURA from vlaura endpoint
                        dollarPerVlAura = voteMarketDollarPerVote || 0;

                        console.log("Using Votemarket (vlaura) data for current round");
                        console.log(`  Total vlAURA (all voting power): ${totalVlAura.toFixed(2)}`);
                        console.log(`  Votes on incentivized gauges: ${totalVotesOnIncentivizedGauges.toFixed(2)}`);
                        console.log(`  Aura's incentives: $${totalIncentivesUSD.toFixed(2)}`);

                        // Handle case where no vlAURA incentives are available
                        if (totalIncentivesUSD === 0) {
                            console.warn("No vlAURA incentives available");
                            console.warn("Emission value per vlAURA can still be calculated, but $/vlAURA will be 0");
                        } else {
                            console.log(`  $/vlAURA: ${dollarPerVlAura.toFixed(6)}`);
                        }
                    } else if (hiddenHandDataPrevious.incentives && hiddenHandDataCurrent.incentives &&
                               hiddenHandDataPrevious.incentives.data.length > 1 && hiddenHandDataCurrent.incentives.data.length > 1) {
                        // Use Hidden Hand data for historical rounds
                        hiddenHandDataCurrent.incentives.data.forEach((item) => {
                            totalVotesCurrent += item.voteCount;
                            if (item.totalValue > 0) {
                                totalVotesOnIncentivizedGauges += item.voteCount;
                            }
                            totalIncentivesUSD += item.totalValue;
                        });
                        hiddenHandDataPrevious.incentives.data.forEach((item) => {
                            totalVotesPrevious += item.voteCount;
                        });
                        // Calculate $/vlAURA from Hidden Hand data
                        dollarPerVlAura = totalVotesOnIncentivizedGauges > 0 ? totalIncentivesUSD / totalVotesOnIncentivizedGauges : 0;
                    }

                    // For BAL emission calculation, use TOTAL vlAURA (all voting power)
                    // This is because BAL emissions go to all voters, not just incentivized gauges
                    // For historical rounds without totalVlAura, fall back to vote counts
                    let totalVotingPowerForEmissions = totalVlAura;
                    if (totalVotingPowerForEmissions === 0) {
                        // Fallback for historical data where we don't have totalVlAura
                        if (timestampCurrentRound !== 0 && (
                            !hiddenHandDataPrevious ||
                            currentTime >= timestampCurrentRound ||
                            timestampCurrentRound - currentTime < DAY
                        )) {
                            totalVotingPowerForEmissions = totalVotesCurrent;
                        } else {
                            totalVotingPowerForEmissions =
                                totalVotesCurrent > totalVotesPrevious ? totalVotesCurrent : totalVotesPrevious;
                        }
                    }

                    console.log("Total voting power for emissions:", totalVotingPowerForEmissions)

                    // BAL emissions per vlAURA = (Total BAL emissions * Aura's veBAL share) / Total vlAURA
                    const biweeklyBalEmissionPerVlAura =
                        (biweeklyBalEmissionFormatted * auraBalShare) /
                        totalVotingPowerForEmissions;

                    // Handle additional distribution mechanism per AIP-42
                    // Additional AURA is also distributed to ALL vlAURA holders
                    const additionalAuraPerVlAura =
                        (additionalAuraAmount / totalVotingPowerForEmissions) * auraPrice;


                    const auraFee = isAuraOptimized ? 0.225 : 0.25;
                    // Emission value per vlAURA:
                    // = BAL per vlAURA * (BAL price + AURA per BAL * AURA price) * (1 - fee) + additional AURA value
                    const emissionValuePerVlAura =
                        biweeklyBalEmissionPerVlAura *
                        (balPrice + auraPerBal * auraPrice) *
                        (1 - auraFee) +
                        additionalAuraPerVlAura;
                    setEmissionValuePerVote(emissionValuePerVlAura);

                    console.log(`Emission calculation:`);
                    console.log(`  BAL per vlAURA (biweekly): ${biweeklyBalEmissionPerVlAura.toFixed(8)}`);
                    console.log(`  AURA per BAL: ${auraPerBal.toFixed(4)}`);
                    console.log(`  Emission value per vlAURA: $${emissionValuePerVlAura.toFixed(6)}`);

                    // Emissions per $1 spent on incentives
                    // = Emission value per vlAURA / Cost per vlAURA vote (from incentive market)
                    // This tells you how much emission value you get for each $1 spent on voting incentives
                    if (dollarPerVlAura > 0) {
                        const emissionsPerDollar = emissionValuePerVlAura / dollarPerVlAura;
                        setEmissionsPerDollarSpent(emissionsPerDollar);
                        console.log(`Emissions per $1 spent: ${emissionsPerDollar.toFixed(4)}`);
                        console.log(`  ($/vlAURA incentive cost: ${dollarPerVlAura.toFixed(6)}, emission value/vlAURA: $${emissionValuePerVlAura.toFixed(6)})`);
                    } else {
                        // No vlAURA incentives available - cannot calculate emissions per dollar
                        setEmissionsPerDollarSpent(0);
                        console.log(`Emissions per $1 spent: N/A (no vlAURA incentives available)`);
                    }
                }

            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };

        fetchData();
    // Use specific properties or loading states instead of entire objects to avoid infinite loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        coinData?.data?.[auraAddress]?.price,
        coinData?.data?.[balAddress]?.price,
        auraGlobalStats?.auraTotalCliffs,
        auraGlobalStats?.auraTotalSupply,
        auraGlobalStats?.auraTotalLockedAmount,
        hiddenHandDataCurrent.loading,
        hiddenHandDataPrevious.loading,
        JSON.stringify(hiddenHandDataCurrent.incentives?.data?.length),
        JSON.stringify(hiddenHandDataPrevious.incentives?.data?.length),
        voteMarketLoading,
        voteMarketTotalVotes,
        voteMarketTotalRewards,
        timestampCurrentRound
    ]);

    return{
        emissionValuePerVote: emissionValuePerVote,
        emissionsPerDollarSpent: emissionsPerDollarSpent,
    };
};
