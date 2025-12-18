import {useState, useEffect} from 'react';
import {useCoinGeckoSimpleTokenPrices} from "../coingecko/useCoinGeckoSimpleTokenPrices";
import {useAuraGlobalStats} from "../aura/useAuraGlobalStats";
import balancerTokenAdminAbi from '../../constants/abis/balancerTokenAdmin.json';
import erc20Abi from '../../constants/abis/erc20.json';
import {AURA_TIMESTAMPS, HISTORICAL_ROUND_BAL_PRICE} from "../hidden-hand/constants";
import { useAuraPrice, getPriceForDate } from "../balancer-api-v3/useGetCompleteHistoricalTokenPrice";
import {useGetHiddenHandVotingIncentives} from "../hidden-hand/useGetHiddenHandVotingIncentives";
import {ethers} from "ethers";
import {AURA_TOKEN_MAINNET, BALANCER_TOKEN_MAINNET} from "../aura/auraConstants";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import useGetSimpleTokenPrices from "../balancer-api-v3/useGetSimpleTokenPrices";
import useGetHistoricalTokenPrice from "../balancer-api-v3/useGetHistoricalTokenPrice";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import {formatTime, unixToDate} from "../../utils/date";
import { BalancerChartDataItem } from "../balancer/balancerTypes";

// Helper function to find the closest price from historical data
const findClosestPrice = (
    priceData: BalancerChartDataItem[] | undefined,
    targetDate: string
): number | null => {
    if (!priceData || priceData.length === 0) return null;

    // First try exact match
    const exactMatch = priceData.find(p => p.time === targetDate);
    if (exactMatch) return exactMatch.value;

    // Find closest date
    const targetTime = new Date(targetDate).getTime();
    let closest: BalancerChartDataItem | null = null;
    let minDiff = Infinity;

    for (const item of priceData) {
        const itemTime = new Date(item.time).getTime();
        const diff = Math.abs(itemTime - targetTime);
        if (diff < minDiff) {
            minDiff = diff;
            closest = item;
        }
    }

    // Only return if within 7 days
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    if (closest && minDiff <= sevenDaysMs) {
        return closest.value;
    }

    return null;
};

// Helper function to find closest price from historical constants
const findClosestConstantPrice = (
    historicalPrices: { value: number; time: string }[],
    targetDate: string
): number | null => {
    if (!historicalPrices || historicalPrices.length === 0) return null;

    // First try exact match
    const exactMatch = historicalPrices.find(p => p.time === targetDate);
    if (exactMatch) return exactMatch.value;

    // Find closest date
    const targetTime = new Date(targetDate).getTime();
    let closest: { value: number; time: string } | null = null;
    let minDiff = Infinity;

    for (const item of historicalPrices) {
        const itemTime = new Date(item.time).getTime();
        const diff = Math.abs(itemTime - targetTime);
        if (diff < minDiff) {
            minDiff = diff;
            closest = item;
        }
    }

    // Only return if within 14 days (for bi-weekly rounds)
    const fourteenDaysMs = 14 * 24 * 60 * 60 * 1000;
    if (closest && minDiff <= fourteenDaysMs) {
        return closest.value;
    }

    return null;
};


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
    const hiddenHandDataCurrent = useGetHiddenHandVotingIncentives(timestampCurrentRound === 0 ? '' : String(timestampCurrentRound));
    const hiddenHandDataPrevious = useGetHiddenHandVotingIncentives(String(timestampPreviousRound));

    useEffect(() => {
        const fetchData = async () => {
            try {
                if ((timestampCurrentRound === 0 || timestampCurrentRound) && coinData && auraGlobalStats && hiddenHandDataCurrent.incentives && hiddenHandDataPrevious.incentives) {
                    const DAY = 86400;
                    const WEEK = 604800;
                    const currentTime = Date.now();
                    const currentTimestamp = Math.floor(currentTime / 1000);

                    const provider = new ethers.providers.JsonRpcProvider('https://lb.drpc.live/ethereum/ArfLI8Nwx0R2hnaACzaNOP6No1vyY0wR8KwLEklbR4ac');

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

                    let auraPrice: number;
                    let balPrice: number;

                    if (isCurrentRound) {
                        // For current round, ALWAYS use live API prices
                        auraPrice = liveAuraPrice;
                        balPrice = liveBalPrice;
                        console.log("Current round - using LIVE prices | AURA:", auraPrice, "| BAL:", balPrice);
                    } else {
                        // For historical rounds, use tiered fallback strategy:
                        // 1. Try Balancer API historical data (last 365 days)
                        // 2. Try historical constants (for older data)
                        // 3. Fall back to live prices as last resort

                        // AURA price fallback chain
                        const auraHistoricalApiPrice = getPriceForDate(auraCompletePrice || [], targetDate);
                        if (auraHistoricalApiPrice && auraHistoricalApiPrice > 0) {
                            auraPrice = auraHistoricalApiPrice;
                            console.log(`AURA historical price from API: ${auraPrice} for ${targetDate}`);
                        } else if (liveAuraPrice > 0) {
                            // For recent rounds without historical data, use live price
                            auraPrice = liveAuraPrice;
                            console.log(`AURA using live price as fallback: ${auraPrice} for ${targetDate}`);
                        } else {
                            auraPrice = 0;
                            console.warn(`No AURA price available for ${targetDate}`);
                        }

                        // BAL price fallback chain
                        // 1. Try Balancer API historical data
                        const balHistoricalApiPrice = findClosestPrice(historicalBALCoinData, targetDate);
                        if (balHistoricalApiPrice && balHistoricalApiPrice > 0) {
                            balPrice = balHistoricalApiPrice;
                            console.log(`BAL historical price from API: ${balPrice} for ${targetDate}`);
                        } else {
                            // 2. Try historical constants with closest match
                            const balConstantPrice = findClosestConstantPrice(HISTORICAL_ROUND_BAL_PRICE, targetDate);
                            if (balConstantPrice && balConstantPrice > 0) {
                                balPrice = balConstantPrice;
                                console.log(`BAL historical price from constants: ${balPrice} for ${targetDate}`);
                            } else if (liveBalPrice > 0) {
                                // 3. Fall back to live price for recent rounds
                                balPrice = liveBalPrice;
                                console.log(`BAL using live price as fallback: ${balPrice} for ${targetDate}`);
                            } else {
                                balPrice = 0;
                                console.warn(`No BAL price available for ${targetDate}`);
                            }
                        }
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

                    // Simple BAL emission map based on https://dune.com/balancer/bal-supply
                    const biweeklyBalEmission = (await balTokenAdmin.rate()).mul(WEEK * 2);
                    let biweeklyBalEmissionFormatted = 145000 * 2
                    if (timestampCurrentRound < 1711975297 && timestampCurrentRound > 1680180097) {
                        biweeklyBalEmissionFormatted = 121929.98 * 2
                    } else if (timestampCurrentRound < 1680180097){
                        biweeklyBalEmissionFormatted = 145000 * 2
                    } else {
                        biweeklyBalEmissionFormatted = parseFloat(ethers.utils.formatEther(biweeklyBalEmission))
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

                    let totalVotesCurrent = 0;
                    let totalVotesPrevious = 0;
                    let totalVotesOnEmissions = 0;
                    let totalEmissionsCurrent = 0;
                    if (hiddenHandDataPrevious.incentives.data.length > 1 && hiddenHandDataCurrent.incentives.data.length > 1) {
                        hiddenHandDataCurrent.incentives.data.forEach((item) => {
                            totalVotesCurrent += item.voteCount;
                            if (item.totalValue > 0) {
                                totalVotesOnEmissions += item.voteCount;
                            }
                            totalEmissionsCurrent += item.totalValue;
                        });
                        hiddenHandDataPrevious.incentives.data.forEach((item) => {
                            totalVotesPrevious += item.voteCount;
                        });
                    }
                    let approximateTotalVote = 0;
                    // Use the largest of the vote count between the last 2 rounds in the beginning
                    // But use actual current vote near the end
                    if (timestampCurrentRound !== 0 && (
                        !hiddenHandDataPrevious ||
                        currentTime >= timestampCurrentRound ||
                        timestampCurrentRound - currentTime < DAY
                    )) {
                        approximateTotalVote = totalVotesCurrent;
                    } else {
                        approximateTotalVote =
                            totalVotesCurrent > totalVotesPrevious ? totalVotesCurrent : totalVotesPrevious;
                    }

                    console.log("approximateTotalVote", approximateTotalVote)

                    const biweeklyBalEmissionPerAura =
                        (parseFloat(ethers.utils.formatEther(biweeklyBalEmission)) * auraBalShare) /
                        approximateTotalVote;


                    // Handle additional distribution mechanism per AIP-42
                    const additionalAuraPerVote =
                        (additionalAuraAmount / approximateTotalVote) * auraPrice;


                    const auraFee = isAuraOptimized ? 0.225 : 0.25;
                    const emissionValuePerVote =
                        biweeklyBalEmissionPerAura *
                        (balPrice + auraPerBal * auraPrice) *
                        (1 - auraFee) +
                        additionalAuraPerVote;
                    setEmissionValuePerVote(emissionValuePerVote);

                    // Approximate emissions / $ spent
                    const dollarPervlAura = totalEmissionsCurrent / totalVotesOnEmissions;
                    const emissionDollars = 1 / (dollarPervlAura / emissionValuePerVote)
                    setEmissionsPerDollarSpent(emissionDollars)
                }

            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };

        fetchData();
    }, [coinData, auraGlobalStats, hiddenHandDataCurrent, hiddenHandDataPrevious]);

    return{
        emissionValuePerVote: emissionValuePerVote,
        emissionsPerDollarSpent: emissionsPerDollarSpent,
    };
};
