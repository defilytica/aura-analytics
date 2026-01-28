import {Box, Card, CircularProgress, Grid, MenuItem, Select, Typography} from "@mui/material";
import {GetBribingRounds} from "../../data/llamaairforce/getBribingRounds";
import {GetBribingStatsForRounds} from "../../data/llamaairforce/getBribingStatsForRound";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import DashboardOverviewChart from "../../components/Echarts/VotingIncentives/DashboardOverviewChart";
import {unixToDate} from "../../utils/date";
import MetricsCard from "../../components/Cards/MetricsCard";
import {AddShoppingCart, CurrencyExchange} from "@mui/icons-material";
import SingleRoundBarChart from "../../components/Echarts/VotingIncentives/SingleRoundBarChart";
import {useGetHiddenHandHistoricalIncentives} from "../../data/hidden-hand/useGetHiddenHandHistoricalIncentives";
import {BalancerStakingGauges} from "../../data/balancer/balancerTypes";
import {
    decorateGaugesWithVoteMarketIncentives,
    extractVoteMarketPoolRewards,
    PoolReward
} from "./helpers";
import {
    VOTE_MARKET_AURA_METADATA_URL,
    VOTE_MARKET_AURA_HISTORICAL_BASE_URL,
    VOTE_MARKET_FIRST_VALID_ROUND
} from "../../data/votemarket/constants";
import { VoteMarketHistoricalRound, VoteMarketRoundMetadata, VoteMarketAnalytics } from "../../data/votemarket/voteMarketTypes";
import IncentivesTable from "../../components/Tables/IncentivesTable";
import {useGetHiddenHandRewards} from "../../data/hidden-hand/useGetHiddenHandRewards";
import {useAccount} from "wagmi";
import HiddenHandCard from "../../components/Cards/HiddenHandCard";
import HiddenHandAddressRewards from "../../components/Tables/HiddenHandAddressRewards";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import AuraIncentiveAPRChart from "../../components/Echarts/VotingIncentives/AuraIncentiveAPRChart";
import useGetBalancerV3StakingGauges from "../../data/balancer-api-v3/useGetBalancerV3StakingGauges";
import PaladinQuestsCard from "../../components/Cards/PaladinQuestsCard";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import VoteMarketCard from "../../components/Cards/VoteMarketCard";
import {useGetPaladinHistoricalQuests} from "../../data/paladin/useGetPaladinHistoricalQuests";
import {ethers} from "ethers";
import {
    getTokenPriceAtTimestamp,
    useGetHistoricalTokenPricesAggregated
} from "../../data/balancer-api-v3/useGetHistoricalTokenPricesAggregated";
import IntelligentLoadingIndicator from "../../components/Progress/IntelligentLoadingIndicator";
import { useAuraPrice, getPriceForDate } from "../../data/balancer-api-v3/useGetCompleteHistoricalTokenPrice";
// Vote Market imports
import { useGetVoteMarketIncentives } from "../../data/votemarket/useGetVoteMarketIncentives";
import { useGetVoteMarketHistoricalIncentives } from "../../data/votemarket/useGetVoteMarketHistoricalIncentives";

// Type for Paladin historical data
type CombinedIncentiveData = {
    dollarPerVlAssetData: number[];
    totalAmountDollarsData: number[];
    xAxisData: string[];
    totalAmountDollarsSum: number;
};

export default function VotingIncentives() {
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)

    // Round selector state - 0 means current/latest round
    const [selectedRoundId, setSelectedRoundId] = useState<number>(0);
    const [availableRounds, setAvailableRounds] = useState<{id: number; endVoting: number}[]>([]);
    const [bribeRewardsNew, setBribeRewardsNew] = useState<PoolReward[]>([]);
    const [xAxisDataRoundNew, setXAxisDataRoundNew] = useState<string[]>([]);
    const [incentivePerVote, setIncentivePerVote] = useState<number>(0);
    const [roundIncentives, setRoundIncentives] = useState<number>(0);
    const [emissionVotesTotal, setEmissionVotesTotal] = useState<number>(0);
    const [roundVotingEfficiency, setRoundVotingEfficiency] = useState<number>(0);
    const [decoratedGauges, setDecoratedGagues] = useState<BalancerStakingGauges[]>([]);
    const [paladinHistoricalData, setPaladinHistoricalData] = useState<CombinedIncentiveData | null>(null);
    const [historicalRoundLoading, setHistoricalRoundLoading] = useState<boolean>(false);

    // Vote Market data (primary source for current round)
    // Now uses vlaura endpoint directly - all metrics are Aura-specific
    const {
        data: voteMarketData,
        loading: voteMarketLoading,
        currentRoundId,
        totalRewardsUSD: vmTotalRewards,
        totalVotes: vmTotalVotes,
        dollarPerVote: vmDollarPerVote,
        votingEfficiency: vmVotingEfficiency // Emissions per $1 spent - directly from vlaura data
    } = useGetVoteMarketIncentives();
    const voteMarketCampaigns = voteMarketData?.campaigns || [];
    const voteMarketAnalytics = voteMarketData?.analytics || null;

    // Vote Market historical data
    const { data: voteMarketHistoricalData, loading: voteMarketHistoricalLoading } = useGetVoteMarketHistoricalIncentives();

    // Gauge data
    const gaugeData = useGetBalancerV3StakingGauges();

    // User wallet
    const {address} = useAccount();
    const addressRewards = useGetHiddenHandRewards(address ? address : '');

    // Price data
    const { data: auraCompletePrice, loading: auraPriceLoading, error: auraPriceError } = useAuraPrice();

    // Fetch available rounds from vlaura metadata
    useEffect(() => {
        const fetchRoundsMetadata = async () => {
            try {
                const response = await fetch(VOTE_MARKET_AURA_METADATA_URL);
                if (response.ok) {
                    const metadata: VoteMarketRoundMetadata[] = await response.json();
                    // Filter to valid rounds and sort by ID descending (newest first)
                    const validRounds = metadata
                        .filter(r => r.id >= VOTE_MARKET_FIRST_VALID_ROUND)
                        .sort((a, b) => b.id - a.id);
                    setAvailableRounds(validRounds);
                }
            } catch (error) {
                console.error('Error fetching rounds metadata:', error);
            }
        };
        fetchRoundsMetadata();
    }, []);

    // Paladin data
    const { questData, loading: questsLoading } = useGetPaladinHistoricalQuests();
    const questTimestamps = useMemo(() => {
        if (!questData) return [];
        return Array.from(new Set(questData.quests.map(q => q.timestamp)));
    }, [questData]);

    const {
        priceData: historicalTokenPrices,
        loading: tokenPricesLoading,
    } = useGetHistoricalTokenPricesAggregated(
        questData ? Array.from(questData.tokenAddresses) : [],
        questTimestamps
    );

    // Hidden Hand historical data
    const historicalData = useGetHiddenHandHistoricalIncentives();

    // LLAMA API
    const roundsData = GetBribingRounds();
    const allRoundsBribes = GetBribingStatsForRounds();
    const dashboardData = allRoundsBribes?.dashboard;

    // Process Paladin quest data
    useEffect(() => {
        if (!questData || !historicalTokenPrices || questsLoading || tokenPricesLoading) {
            return;
        }

        const now = Math.floor(Date.now() / 1000);
        const oneYearAgo = now - (365 * 24 * 60 * 60);

        const processedData = questData.quests
            .filter(questPeriod => questPeriod.timestamp <= now && questPeriod.timestamp >= oneYearAgo)
            .map(questPeriod => {
                let periodTotalValue = 0;
                let totalRewardPerVote = 0;
                let validQuestCount = 0;

                questPeriod.data.forEach(quest => {
                    if (!quest.rewardToken || !quest.rewardDistributed || !quest.rewardPerVote) {
                        return;
                    }

                    try {
                        const tokenPrice = getTokenPriceAtTimestamp(
                            historicalTokenPrices,
                            quest.rewardToken,
                            questPeriod.timestamp
                        );

                        if (tokenPrice === 0) return;

                        const rewardDistributedEther = Number(ethers.utils.formatEther(quest.rewardDistributed || '0'));
                        const rewardValueUSD = rewardDistributedEther * tokenPrice;
                        periodTotalValue += rewardValueUSD;

                        const questRewardPerVote = Number(ethers.utils.formatEther(quest.rewardPerVote || '0'));
                        const rewardPerVoteUSD = questRewardPerVote * tokenPrice;
                        totalRewardPerVote += rewardPerVoteUSD;
                        validQuestCount++;
                    } catch {
                        return;
                    }
                });

                return {
                    totalValue: periodTotalValue,
                    valuePerVote: validQuestCount > 0 ? totalRewardPerVote / validQuestCount : 0,
                    xAxis: unixToDate(questPeriod.timestamp)
                };
            });

        const validProcessedData = processedData
            .filter(data => data.totalValue > 0)
            .sort((a, b) => new Date(a.xAxis).getTime() - new Date(b.xAxis).getTime());

        const totalValueList = validProcessedData.map(result => result.totalValue);
        const valuePerVoteList = validProcessedData.map(result => result.valuePerVote);
        const xAxisData = validProcessedData.map(result => result.xAxis);
        const totalAmountDollarsSum = totalValueList.reduce((acc, curr) => acc + curr, 0);

        setPaladinHistoricalData({
            dollarPerVlAssetData: valuePerVoteList,
            totalAmountDollarsData: totalValueList,
            totalAmountDollarsSum,
            xAxisData
        });
    }, [JSON.stringify(questData), JSON.stringify(historicalTokenPrices), questsLoading, tokenPricesLoading]);

    // Process round data from vlaura endpoint
    useEffect(() => {
        const processRoundData = async () => {
            if (gaugeData.length === 0) return;

            // Current round (0) uses the already-fetched voteMarketData
            if (selectedRoundId === 0 && voteMarketAnalytics && !voteMarketLoading) {
                // Extract pool rewards from Vote Market analytics
                const vmPoolRewards = extractVoteMarketPoolRewards(voteMarketCampaigns, voteMarketAnalytics, gaugeData);
                setBribeRewardsNew(vmPoolRewards);
                setXAxisDataRoundNew(vmPoolRewards.map((el) => el.pool));

                // Use metrics directly from the vlaura hook - already Aura-specific
                setRoundIncentives(vmTotalRewards);
                setEmissionVotesTotal(vmTotalVotes);
                setIncentivePerVote(vmDollarPerVote);
                setRoundVotingEfficiency(vmVotingEfficiency);

                // Decorate gauges with Vote Market analytics and filter to only show gauges with incentives
                const fullyDecoratedGauges = decorateGaugesWithVoteMarketIncentives(gaugeData, voteMarketAnalytics);
                const gaugesWithIncentives = fullyDecoratedGauges.filter(gauge => gauge.totalRewards && gauge.totalRewards > 0);
                setDecoratedGagues(gaugesWithIncentives);
                setHistoricalRoundLoading(false);
            }
            // Historical rounds - fetch from vlaura endpoint
            else if (selectedRoundId !== 0) {
                setHistoricalRoundLoading(true);
                try {
                    const url = `${VOTE_MARKET_AURA_HISTORICAL_BASE_URL}/${selectedRoundId}.json`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        console.error(`Failed to fetch round ${selectedRoundId}`);
                        setHistoricalRoundLoading(false);
                        return;
                    }
                    const roundData: VoteMarketHistoricalRound = await response.json();

                    // Build analytics structure
                    const analytics: VoteMarketAnalytics = {
                        totalDepositedUSD: roundData.totalDepositedUSD || 0,
                        globalAverageDollarPerVote: roundData.globalAverageDollarPerVote || 0,
                        globalAverageEfficiency: roundData.globalAverageEfficiency || 0,
                        analytics: roundData.analytics || []
                    };

                    // Extract pool rewards
                    const vmPoolRewards = extractVoteMarketPoolRewards([], analytics, gaugeData);
                    setBribeRewardsNew(vmPoolRewards);
                    setXAxisDataRoundNew(vmPoolRewards.map((el) => el.pool));

                    // Calculate totals from analytics
                    let totalVotes = 0;
                    let totalRewards = 0;
                    if (roundData.analytics) {
                        roundData.analytics.forEach(ga => {
                            totalVotes += parseFloat(ga.nonBlacklistedVotes?.toString() || '0');
                            totalRewards += ga.totalDeposited || 0;
                        });
                    }

                    setRoundIncentives(roundData.totalDepositedUSD || totalRewards);
                    setEmissionVotesTotal(totalVotes);
                    setIncentivePerVote(roundData.globalAverageDollarPerVote || 0);
                    setRoundVotingEfficiency(roundData.globalAverageEfficiency || 0);

                    // Decorate gauges and filter
                    const fullyDecoratedGauges = decorateGaugesWithVoteMarketIncentives(gaugeData, analytics);
                    const gaugesWithIncentives = fullyDecoratedGauges.filter(gauge => gauge.totalRewards && gauge.totalRewards > 0);
                    setDecoratedGagues(gaugesWithIncentives);
                } catch (error) {
                    console.error(`Error fetching round ${selectedRoundId}:`, error);
                } finally {
                    setHistoricalRoundLoading(false);
                }
            }
        };

        processRoundData();
    }, [selectedRoundId, gaugeData.length, vmTotalRewards, vmTotalVotes, vmDollarPerVote, vmVotingEfficiency, voteMarketLoading]);

    const handleEpochChange = (event: SelectChangeEvent<number>) => {
        setSelectedRoundId(Number(event.target.value));
    };

    // Memoize processed HH historical data
    const { dollarPerVlAssetData, totalAmountDollarsData, xAxisData, totalAmountDollarsSum } = useMemo(() => {
        if (!dashboardData || !historicalData) {
            return {
                dollarPerVlAssetData: [],
                totalAmountDollarsData: [],
                xAxisData: [],
                totalAmountDollarsSum: 0
            };
        }

        const hhDollarPerVlAssetData = [...dashboardData.epochs.slice(0, -1).map(item => item.dollarPerVlAsset), ...historicalData.dollarPerVlAssetData];
        const hhTotalAmountDollarsData = [...dashboardData.epochs.slice(0, -1).map(item => item.totalAmountDollars), ...historicalData.totalAmountDollarsData];
        const hhXAxisData = [...dashboardData.epochs.slice(0, -1).map(item => unixToDate(item.end)), ...historicalData.xAxisData];
        const hhTotalAmountDollarsSum = hhTotalAmountDollarsData.slice(0, -1).reduce((acc, curr) => acc + curr, 0) + historicalData.totalAmountDollarsSum;

        return {
            dollarPerVlAssetData: hhDollarPerVlAssetData,
            totalAmountDollarsData: hhTotalAmountDollarsData,
            xAxisData: hhXAxisData,
            totalAmountDollarsSum: hhTotalAmountDollarsSum
        };
    }, [dashboardData, historicalData]);

    // Combine HH and Vote Market data for APR chart
    const { combinedXAxisData, combinedDollarPerVlAssetData, combinedTotalAmountData } = useMemo(() => {
        const voteMarketStartDate = '2025-01-08';
        const vmStartTime = new Date(voteMarketStartDate).getTime();

        const combinedX: string[] = [];
        const combinedDollarPerVote: number[] = [];
        const combinedTotal: number[] = [];

        // Add HH data for dates before VM start
        if (xAxisData && dollarPerVlAssetData && totalAmountDollarsData) {
            xAxisData.forEach((date, index) => {
                const dateTime = new Date(date).getTime();
                if (dateTime < vmStartTime) {
                    combinedX.push(date);
                    combinedDollarPerVote.push(dollarPerVlAssetData[index]);
                    combinedTotal.push(totalAmountDollarsData[index]);
                }
            });
        }

        // Add Vote Market data from VM start onwards
        if (voteMarketHistoricalData && voteMarketHistoricalData.xAxisData) {
            voteMarketHistoricalData.xAxisData.forEach((date, index) => {
                const dateTime = new Date(date).getTime();
                if (dateTime >= vmStartTime) {
                    combinedX.push(date);
                    combinedDollarPerVote.push(voteMarketHistoricalData.dollarPerVlAssetData[index]?.value || 0);
                    combinedTotal.push(voteMarketHistoricalData.totalAmountDollarsData[index]?.value || 0);
                }
            });
        }

        // Sort by date
        const sorted = combinedX
            .map((date, i) => ({ date, dollarPerVote: combinedDollarPerVote[i], total: combinedTotal[i] }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        return {
            combinedXAxisData: sorted.map(s => s.date),
            combinedDollarPerVlAssetData: sorted.map(s => s.dollarPerVote),
            combinedTotalAmountData: sorted.map(s => s.total)
        };
    }, [xAxisData, dollarPerVlAssetData, totalAmountDollarsData, voteMarketHistoricalData]);

    // APR chart data
    const { historicalAPR, historicalPrice } = useMemo(() => {
        if (!combinedXAxisData || combinedXAxisData.length === 0 || !combinedDollarPerVlAssetData) {
            return { historicalAPR: [], historicalPrice: [] };
        }

        const aprData = combinedXAxisData.map((el, index) => {
            const price = getPriceForDate(auraCompletePrice || [], el);
            if (price && price > 0) {
                // Aura uses bi-weekly rounds, so multiply by 26 for annual
                return combinedDollarPerVlAssetData[index] * 26 / price;
            }
            return 0;
        });

        const priceHistory = combinedXAxisData.map((el) => {
            const price = getPriceForDate(auraCompletePrice || [], el);
            return price || 0;
        });

        return {
            historicalAPR: aprData,
            historicalPrice: priceHistory
        };
    }, [combinedXAxisData, combinedDollarPerVlAssetData, auraCompletePrice]);

    // Calculate combined total for all-time incentives
    const allTimeIncentivesTotal = useMemo(() => {
        let total = totalAmountDollarsSum || 0;

        // Add Vote Market total
        if (voteMarketHistoricalData) {
            total += voteMarketHistoricalData.totalAmountDollarsData.reduce((sum, item) => sum + (item?.value || 0), 0);
        }

        // Add Paladin total
        if (paladinHistoricalData) {
            total += paladinHistoricalData.totalAmountDollarsSum;
        }

        return total;
    }, [totalAmountDollarsSum, voteMarketHistoricalData, paladinHistoricalData]);

    // Loading states
    const loadingStates = [
        {
            name: "Voting Rounds",
            isLoading: !roundsData?.rounds,
            isComplete: !!roundsData?.rounds,
            hasError: false
        },
        {
            name: "Votemarket (Primary)",
            isLoading: voteMarketLoading,
            isComplete: !voteMarketLoading && !!voteMarketData,
            hasError: false
        },
        {
            name: "Votemarket Historical",
            isLoading: voteMarketHistoricalLoading,
            isComplete: !voteMarketHistoricalLoading && !!voteMarketHistoricalData,
            hasError: false
        },
        {
            name: "Round Data",
            isLoading: historicalRoundLoading,
            isComplete: !historicalRoundLoading && decoratedGauges.length > 0,
            hasError: false
        },
        {
            name: "Historical Data",
            isLoading: !historicalData,
            isComplete: !!historicalData,
            hasError: false
        },
        {
            name: "AURA Price Data",
            isLoading: auraPriceLoading,
            isComplete: !auraPriceLoading && !!auraCompletePrice && auraCompletePrice.length > 0,
            hasError: !!auraPriceError,
            errorMessage: auraPriceError?.message || undefined
        },
        {
            name: "Paladin Quests",
            isLoading: questsLoading,
            isComplete: !!questData && !questsLoading,
            hasError: false
        }
    ];

    const isStillLoading = loadingStates.some(state => state.isLoading);

    return (<>
            {isStillLoading ? (
                <Grid container spacing={2} mt='5%' sx={{justifyContent: 'center'}}>
                    <Grid item xs={11} sm={9}>
                        <IntelligentLoadingIndicator loadingStates={loadingStates} />
                    </Grid>
                </Grid>
            ) : (
                <Box sx={{flexGrow: 2}}>
                    <Grid
                        container
                        spacing={2}
                        sx={{justifyContent: 'center'}}
                    >
                        <Grid item xs={11} sm={9}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <NavCrumbs crumbSet={navCrumbs} destination={'Voting Incentives'}/>
                            </Box>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Active Voting Markets</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                spacing={2}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{
                                    justifyContent: { md: 'space-between', xs: 'center' }
                                }}
                            >
                                <Grid item xs={12} sm={6} md={4}>
                                    <VoteMarketCard />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <PaladinQuestsCard />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <HiddenHandCard />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Vote Market: Round Metrics */}
                        <Grid item xs={11} sm={9} mt={1}>
                            <Typography sx={{fontSize: '24px'}} mb={1}>
                                {`Votemarket: Round ${selectedRoundId === 0 ? currentRoundId : selectedRoundId} Metrics`}
                            </Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Box>
                                <Select
                                    sx={{
                                        backgroundColor: "background.paper",
                                        boxShadow: 2,
                                        borderRadius: 2,
                                        borderColor: 0,
                                    }}
                                    color="primary"
                                    value={selectedRoundId}
                                    onChange={handleEpochChange}
                                    displayEmpty
                                >
                                    <MenuItem value={0} key="current">
                                        Round {currentRoundId} (Current)
                                    </MenuItem>
                                    {availableRounds
                                        .filter(r => r.id !== currentRoundId) // Don't show current round twice
                                        .map((round) => (
                                            <MenuItem value={round.id} key={round.id}>
                                                Round {round.id} ({unixToDate(round.endVoting)})
                                            </MenuItem>
                                        ))}
                                </Select>
                            </Box>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
                            >
                                <Box mr={1} mb={1}>
                                    <MetricsCard mainMetric={roundIncentives} metricName={"Total Incentives"}
                                                 mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                </Box>
                                <Box mr={1} mb={1}>
                                    <MetricsCard mainMetric={emissionVotesTotal}
                                                 metricName={"Total Incentive Votes"}
                                                 mainMetricInUSD={false} MetricIcon={HowToVoteIcon}/>
                                </Box>
                                <Box mr={1} mb={1}>
                                    <MetricsCard mainMetric={incentivePerVote} metricName={"$/vlAURA"}
                                                 metricDecimals={6}
                                                 mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                </Box>
                                <Box mr={1} mb={1}>
                                    <MetricsCard
                                        mainMetric={roundVotingEfficiency}
                                        metricName={"Avg Voting Efficiency"}
                                        metricDecimals={2}
                                        mainMetricInUSD={false}
                                        MetricIcon={AddShoppingCart}/>
                                </Box>
                            </Grid>
                        </Grid>
                        {historicalRoundLoading ? (
                            <Grid item mt={1} xs={11} sm={9}>
                                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                                    <CircularProgress/>
                                </Box>
                            </Grid>
                        ) : bribeRewardsNew.length > 0 ? (
                            <Grid item mt={1} xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <SingleRoundBarChart
                                        rewardData={bribeRewardsNew}
                                        xAxisData={xAxisDataRoundNew}
                                        height="500px"
                                        currentRound={selectedRoundId}
                                    />
                                </Card>
                            </Grid>
                        ) : (
                            <Grid item mt={1} xs={11} sm={9}>
                                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                                    <CircularProgress/>
                                </Box>
                            </Grid>
                        )}
                        <Grid item xs={11} sm={9}>
                            {historicalRoundLoading ? (
                                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                                    <CircularProgress/>
                                </Box>
                            ) : decoratedGauges && decoratedGauges.length > 0 ? (
                                <IncentivesTable gaugeDatas={decoratedGauges} currentRound={selectedRoundId}/>
                            ) : (
                                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                                    <CircularProgress/>
                                </Box>
                            )}
                        </Grid>

                        {/* Historical Combined Performance */}
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Incentives Performance</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
                            >
                                <Box mt={1}>
                                    <MetricsCard mainMetric={allTimeIncentivesTotal}
                                                 metricName={"All time incentives"} mainMetricInUSD={true}
                                                 MetricIcon={CurrencyExchange}/>
                                </Box>
                            </Grid>
                        </Grid>
                        {combinedDollarPerVlAssetData && combinedTotalAmountData && combinedXAxisData && combinedXAxisData.length > 0 ?
                            <Grid item xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <DashboardOverviewChart
                                        dollarPerVlAssetData={combinedDollarPerVlAssetData}
                                        totalAmountDollarsData={combinedTotalAmountData}
                                        xAxisData={combinedXAxisData}
                                        height="400px"
                                    />
                                </Card>
                            </Grid>
                            : <CircularProgress/>}

                        {/* Paladin Quests Historical */}
                        {paladinHistoricalData && paladinHistoricalData.dollarPerVlAssetData.length > 0 ? (
                            <>
                                <Grid item xs={11} sm={9}>
                                    <Typography sx={{fontSize: '24px'}}>Paladin Quests: Historical Incentives</Typography>
                                </Grid>
                                <Grid item xs={11} sm={9}>
                                    <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                        <DashboardOverviewChart
                                            dollarPerVlAssetData={paladinHistoricalData.dollarPerVlAssetData}
                                            totalAmountDollarsData={paladinHistoricalData.totalAmountDollarsData}
                                            xAxisData={paladinHistoricalData.xAxisData}
                                            height="400px"
                                        />
                                    </Card>
                                </Grid>
                            </>
                        ) : null}

                        {/* AURA Price vs APR Chart */}
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Aura Price vs. Incentive APR</Typography>
                        </Grid>
                        {historicalPrice && historicalPrice.length > 0 && historicalAPR ?
                            <Grid item xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <AuraIncentiveAPRChart
                                        auraPrice={historicalPrice}
                                        auraAPR={historicalAPR}
                                        xAxisData={combinedXAxisData}
                                        height={"400px"}/>
                                </Card>
                            </Grid> :
                            <CircularProgress/>}

                        {/* Unclaimed Personal Rewards */}
                        <Grid item xs={11} sm={9}>
                            <Typography variant="h5" mb={1}>Unclaimed Personal Rewards</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            {address && addressRewards && addressRewards.data ?
                                <HiddenHandAddressRewards rewardData={addressRewards?.data}/> :
                                <Card sx={{
                                    maxWidth: '250px',
                                    minHeight: '100px'
                                }}><Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    height="100%"
                                    p={2}
                                >
                                    <SelfImprovementIcon sx={{fontSize: 48}}/>
                                    <Typography variant="subtitle1" align="center">
                                        Please connect your Wallet
                                    </Typography>
                                </Box>
                                </Card>}
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
}
