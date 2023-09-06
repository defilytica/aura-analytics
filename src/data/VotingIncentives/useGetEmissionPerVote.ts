import {useState, useEffect} from 'react';
import {useCoinGeckoSimpleTokenPrices} from "../coingecko/useCoinGeckoSimpleTokenPrices";
import {useAuraGlobalStats} from "../aura/useAuraGlobalStats";
import balancerTokenAdminAbi from '../../constants/abis/balancerTokenAdmin.json';
import erc20Abi from '../../constants/abis/erc20.json';
import {AURA_TIMESTAMPS} from "../hidden-hand/constants";
import {useGetHiddenHandVotingIncentives} from "../hidden-hand/useGetHiddenHandVotingIncentives";
import {ethers} from "ethers";
import {AURA_TOKEN_MAINNET, BALANCER_TOKEN_MAINNET} from "../aura/auraConstants";


const auraAddress = AURA_TOKEN_MAINNET;
const balAddress = BALANCER_TOKEN_MAINNET;
export const useGetEmissionPerVote = (timestampCurrentRound: number) => {
    const timestamps = AURA_TIMESTAMPS;
    const indexOfCurrent = timestamps.indexOf(timestampCurrentRound);
    const timestampPreviousRound = timestamps[indexOfCurrent - 1]

    const [emissionValuePerVote, setEmissionValuePerVote] = useState(0);
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress, balAddress]);
    const auraGlobalStats = useAuraGlobalStats();
    const hiddenHandDataCurrent = useGetHiddenHandVotingIncentives(String(timestampCurrentRound));
    const hiddenHandDataPrevious = useGetHiddenHandVotingIncentives(String(timestampPreviousRound));

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (timestampCurrentRound && coinData && auraGlobalStats && hiddenHandDataCurrent.incentives && hiddenHandDataPrevious.incentives) {
                    const DAY = 86400;
                    const WEEK = 604800;
                    const currentTime = Date.now();


                    const provider = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com');

                    // Per AIP-42, reduce AURA emission per BAL by 40%
                    // and instead add additional AURA distributed pro rata based on voting result
                    // starting from August 17th 2023 voting round (epoch at 1692230400)
                    const newEmissionEffectiveAt = 1692230400;
                    const isNewEmission = timestampCurrentRound > newEmissionEffectiveAt;
                    const emissionMultiplier = isNewEmission ? 0.4 : 1;
                    const additionalAuraAmount = isNewEmission ? 180000 : 0; // Hardcoded until Aura has updated the data on-chain

                    const auraPrice = coinData[auraAddress].usd
                    const balPrice = coinData[balAddress].usd


                    const balTokenAdminAddress = '0xf302f9F50958c5593770FDf4d4812309fF77414f';

                    const balTokenAdmin = new ethers.Contract(
                        balTokenAdminAddress,
                        balancerTokenAdminAbi,
                        provider
                    );

                    const biweeklyBalEmission = (await balTokenAdmin.rate()).mul(WEEK * 2);

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
                    if (hiddenHandDataPrevious.incentives.data.length > 1 && hiddenHandDataCurrent.incentives.data.length > 1) {
                        hiddenHandDataCurrent.incentives.data.forEach((item) => {
                            totalVotesCurrent += item.voteCount;
                        });
                        hiddenHandDataPrevious.incentives.data.forEach((item) => {
                            totalVotesPrevious += item.voteCount;
                        });
                    }
                    let approximateTotalVote = 0;
                    // Use the largest of the vote count between the last 2 rounds in the beginning
                    // But use actual current vote near the end
                    if (
                        !hiddenHandDataPrevious ||
                        currentTime >= timestampCurrentRound ||
                        timestampCurrentRound - currentTime < DAY
                    ) {
                        approximateTotalVote = totalVotesCurrent;
                    } else {
                        approximateTotalVote =
                            totalVotesCurrent > totalVotesPrevious ? totalVotesCurrent : totalVotesPrevious;
                    }

                    const biweeklyBalEmissionPerAura =
                        (parseFloat(ethers.utils.formatEther(biweeklyBalEmission)) * auraBalShare) /
                        approximateTotalVote;


                    // Handle additional distribution mechanism per AIP-42
                    const additionalAuraPerVote =
                        (additionalAuraAmount / approximateTotalVote) * auraPrice;


                    const auraFee = 0.25;
                    const emissionValuePerVote =
                        biweeklyBalEmissionPerAura *
                        (balPrice + auraPerBal * auraPrice) *
                        (1 - auraFee) +
                        additionalAuraPerVote;
                    setEmissionValuePerVote(emissionValuePerVote);
                }

            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };

        fetchData();
    }, [coinData, auraGlobalStats, hiddenHandDataCurrent, hiddenHandDataPrevious]);

    return emissionValuePerVote;
};