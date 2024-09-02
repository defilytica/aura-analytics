import {useState, useEffect} from 'react';
import {useCoinGeckoSimpleTokenPrices} from "../coingecko/useCoinGeckoSimpleTokenPrices";
import {useAuraGlobalStats} from "../aura/useAuraGlobalStats";
import balancerTokenAdminAbi from '../../constants/abis/balancerTokenAdmin.json';
import erc20Abi from '../../constants/abis/erc20.json';
import {AURA_TIMESTAMPS} from "../hidden-hand/constants";
import {useGetHiddenHandVotingIncentives} from "../hidden-hand/useGetHiddenHandVotingIncentives";
import {ethers} from "ethers";
import {AURA_TOKEN_MAINNET, BALANCER_TOKEN_MAINNET} from "../aura/auraConstants";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import useGetSimpleTokenPrices from "../balancer-api-v3/useGetSimpleTokenPrices";
import useGetHistoricalTokenPrice from "../balancer-api-v3/useGetHistoricalTokenPrice";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import {formatTime, unixToDate} from "../../utils/date";


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
    const { data: historicalAuraCoinData } = useGetHistoricalTokenPrice(auraAddress, GqlChain.Mainnet)
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
                    const currentTime = Date.now() ;


                    const provider = new ethers.providers.JsonRpcProvider('https://rpc.mevblocker.io/fast');

                    // Per AIP-42, reduce AURA emission per BAL by 40%
                    // and instead add additional AURA distributed pro rata based on voting result
                    // starting from August 17th 2023 voting round (epoch at 1692230400)
                    // Weekly additional Aura: 90000 -> bi-weekly resulting in 180000
                    // -----
                    // Per AIP-63: additional weekly AURA has been reduced from 90000 to 76500 -> 153000 new additional Aura Amount
                    // LP fees have been reduced from 25 to 22.5%
                    const newEmissionEffectiveAt = 1692230400; // Starting point for new emission logic
                    const secondaryOptimizationEffectiveAt = 1707951600; // Starting point for secondary optimization
                    const thirdOptimizationEffectiveAt = 1724882400; //third optimization reducing emissions to 22.5%


                    const isNewEmission = timestampCurrentRound > newEmissionEffectiveAt || timestampCurrentRound === 0;
                    const isAuraOptimized = timestampCurrentRound > secondaryOptimizationEffectiveAt || timestampCurrentRound === 0;

                    const emissionMultiplier = isNewEmission ? 0.4 : 1;

                    let additionalAuraAmount = 0;
                    if (isNewEmission) {
                        additionalAuraAmount = 180000; // Bi-weekly amount after new emission policy
                        if (isAuraOptimized) {
                            if (timestampCurrentRound >= thirdOptimizationEffectiveAt) {
                                additionalAuraAmount = 70380 * 2; // Adjusted amount after third Aura optimization
                                console.log("Update: AIP-63 2024/09/02 AURA has been reduced from 76.5k to 70.380k per week")
                            } else {
                                additionalAuraAmount = 153000; // Adjusted amount after Aura optimization
                                console.log("Emission calculation based on AIP-63")
                            }

                        }
                    }

                    // Find price from historical set
                    const auraTsPrice = historicalAuraCoinData?.find(el => el.time === unixToDate(timestampCurrentRound) ? el.value : 0)
                    const balTsPrice = historicalBALCoinData?.find(el => el.time === unixToDate(timestampCurrentRound) ? el.value : 0)

                    const auraPrice = auraTsPrice ? auraTsPrice.value : coinData.data[auraAddress].price
                    const balPrice = balTsPrice ? balTsPrice.value : coinData.data[balAddress].price
                    console.log("Aura price: ", auraPrice, "- BAL price: ", balPrice);


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
