import {Box, Card, CardContent, CircularProgress, Grid, MenuItem, Select, Typography} from "@mui/material";
import CustomLinearProgress from '../../components/Progress/CustomLinearProgress';
import {GetBribingRounds} from "../../data/llamaairforce/getBribingRounds";
import {GetBribingStatsForRounds} from "../../data/llamaairforce/getBribingStatsForRound";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import DashboardOverviewChart from "../../components/Echarts/VotingIncentives/DashboardOverviewChart";
import {unixToDate} from "../../utils/date";
import MetricsCard from "../../components/Cards/MetricsCard";
import {AddShoppingCart, CurrencyExchange, ShoppingCartCheckout} from "@mui/icons-material";
import SingleRoundBarChart from "../../components/Echarts/VotingIncentives/SingleRoundBarChart";
import {useGetHiddenHandVotingIncentives} from "../../data/hidden-hand/useGetHiddenHandVotingIncentives";
import {HiddenHandIncentives} from "../../data/hidden-hand/hiddenHandTypes";
import {useGetHiddenHandHistoricalIncentives} from "../../data/hidden-hand/useGetHiddenHandHistoricalIncentives";
import {AURA_TIMESTAMPS, HISTORICAL_AURA_PRICE} from "../../data/hidden-hand/constants";
import {BalancerStakingGauges} from "../../data/balancer/balancerTypes";
import {decorateGaugesWithIncentives} from "./helpers";
import IncentivesTable from "../../components/Tables/IncentivesTable";
import HistoricalIncentivesTable from "../../components/Tables/HistoricalIncentivesTable";
import {useGetHiddenHandRewards} from "../../data/hidden-hand/useGetHiddenHandRewards";
import {useAccount} from "wagmi";
import HiddenHandCard from "../../components/Cards/HiddenHandCard";
import HiddenHandAddressRewards from "../../components/Tables/HiddenHandAddressRewards";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import {AURA_TOKEN_MAINNET} from "../../data/aura/auraConstants";
import AuraIncentiveAPRChart from "../../components/Echarts/VotingIncentives/AuraIncentiveAPRChart";
import useGetBalancerV3StakingGauges from "../../data/balancer-api-v3/useGetBalancerV3StakingGauges";
import {useGetEmissionPerVote} from "../../data/VotingIncentives/useGetEmissionPerVote";
import PaladinQuestsCard from "../../components/Cards/PaladinQuestsCard";
import useGetHistoricalTokenPrice from "../../data/balancer-api-v3/useGetHistoricalTokenPrice";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import useGetTokenSetHistoricalPrices from "../../data/balancer-api-v3/useGetTokenSetHistoricalPrices";
import VoteMarketCard from "../../components/Cards/VoteMarketCard";
import {useGetPaladinHistoricalQuests} from "../../data/paladin/useGetPaladinHistoricalQuests";
import {ethers} from "ethers";
import CombinedOverviewChart from "../../components/Echarts/VotingIncentives/CombinedOverviewChart";
import {
    getTokenPriceAtTimestamp,
    useGetHistoricalTokenPricesAggregated
} from "../../data/balancer-api-v3/useGetHistoricalTokenPricesAggregated";

// Helper functions to parse data types to Llama model
const extractPoolRewards = (data: HiddenHandIncentives | null): PoolReward[] => {
    const poolRewards: PoolReward[] = [];

    if (data) {
        data.data.forEach((item) => {
            const {title, bribes} = item;

            if (bribes.length > 0) {
                const poolReward: PoolReward = {pool: title};
                bribes.forEach((bribe) => {
                    const {symbol, value} = bribe;
                    const tokenKey = `${symbol.toUpperCase()}`;

                    if (!poolReward[tokenKey]) {
                        poolReward[tokenKey] = value;
                    } else {
                        const existingValue = poolReward[tokenKey];
                        poolReward[tokenKey] = typeof existingValue === 'number' ? existingValue + value : value;
                    }
                });

                poolRewards.push(poolReward);
            }
        });
    }
    return poolRewards;
};

//Combined stats for HH and Paladin
type CombinedIncentiveData = {
    dollarPerVlAssetData: number[];
    totalAmountDollarsData: number[];
    xAxisData: string[];
    totalAmountDollarsSum: number;
};

const combineIncentiveData = (
    hiddenHandData: CombinedIncentiveData | null,
    paladinData: CombinedIncentiveData | null
): CombinedIncentiveData | null => {
    if (!hiddenHandData && !paladinData) return null;
    if (!hiddenHandData) return paladinData;
    if (!paladinData) return hiddenHandData;

    // Create a map of all unique dates
    const dateMap = new Map<string, number>();
    hiddenHandData.xAxisData.forEach((date, index) => {
        dateMap.set(date, index);
    });
    paladinData.xAxisData.forEach((date, index) => {
        if (!dateMap.has(date)) {
            dateMap.set(date, dateMap.size);
        }
    });

    // Sort dates chronologically
    const sortedDates = Array.from(dateMap.keys()).sort();

    // Initialize arrays for combined data
    const combinedDollarPerVlAsset: number[] = new Array(sortedDates.length).fill(0);
    const combinedTotalAmount: number[] = new Array(sortedDates.length).fill(0);

    // Combine Hidden Hand data
    sortedDates.forEach((date, newIndex) => {
        const hhIndex = hiddenHandData.xAxisData.indexOf(date);
        if (hhIndex !== -1) {
            combinedDollarPerVlAsset[newIndex] += hiddenHandData.dollarPerVlAssetData[hhIndex] || 0;
            combinedTotalAmount[newIndex] += hiddenHandData.totalAmountDollarsData[hhIndex] || 0;
        }
    });

    // Add Paladin data
    sortedDates.forEach((date, newIndex) => {
        const palIndex = paladinData.xAxisData.indexOf(date);
        if (palIndex !== -1) {
            combinedDollarPerVlAsset[newIndex] += paladinData.dollarPerVlAssetData[palIndex] || 0;
            combinedTotalAmount[newIndex] += paladinData.totalAmountDollarsData[palIndex] || 0;
        }
    });

    return {
        dollarPerVlAssetData: combinedDollarPerVlAsset,
        totalAmountDollarsData: combinedTotalAmount,
        xAxisData: sortedDates,
        totalAmountDollarsSum: hiddenHandData.totalAmountDollarsSum + paladinData.totalAmountDollarsSum
    };
};


export type PoolReward = {
    pool: string;
    [token: string]: string | number; // this represents any number of token properties with their corresponding `amountDollars` value
};
export default function VotingIncentives() {
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)

    // New Hidden Hand API
    const timestamps = AURA_TIMESTAMPS;
    const [currentRoundNew, setCurrentRoundNew] = useState<number>(timestamps[timestamps.length - 1]); // Default timestamp
    const [bribeRewardsNew, setBribeRewardsNew] = useState<PoolReward[]>([]);
    const [xAxisDataRoundNew, setXAxisDataRoundNew] = useState<string[]>([]);
    const [incentivePerVote, setIncentivePerVote] = useState<number>(0);
    const [roundIncentives, setRoundIncentives] = useState<number>(0);
    const [emissionVotesTotal, setEmissionVotesTotal] = useState<number>(0);
    const [decoratedGauges, setDecoratedGagues] = useState<BalancerStakingGauges[]>([]);
    const hiddenHandData = useGetHiddenHandVotingIncentives(currentRoundNew === 0 ? '' : String(currentRoundNew));
    // const currentHiddenHandData = useGetHiddenHandVotingIncentives();
    const {address} = useAccount();
    const addressRewards = useGetHiddenHandRewards(address ? address : '')
    const gaugeData = useGetBalancerV3StakingGauges();
    const timeStampNow = Math.floor(Date.now() / 1000);
    const priceData = HISTORICAL_AURA_PRICE
    const { data: auraHistoricalPrice} = useGetHistoricalTokenPrice(AURA_TOKEN_MAINNET, GqlChain.Mainnet)
    const [tokenAddresses, setTokenAddresses] = useState<string[]>([]);
    const { data: historicalPrices, loading: pricesLoading, error: pricesError } = useGetTokenSetHistoricalPrices(tokenAddresses, GqlChain.Mainnet);
    const [correctedIncentives, setCorrectedIncentives] = useState<HiddenHandIncentives | null>(null);
    const [paladinHistoricalData, setPaladinHistoricalData] = useState<CombinedIncentiveData | null>(null);

    //console.log("auraHistoricalprice: ", auraHistoricalPrice)

    const {emissionValuePerVote, emissionsPerDollarSpent} = useGetEmissionPerVote(currentRoundNew);

    //Paladin data
    const { questData, loading: questsLoading } = useGetPaladinHistoricalQuests();
    const questTimestamps = useMemo(() => {
        if (!questData) return [];
        return Array.from(new Set(questData.quests.map(q => q.timestamp)));
    }, [questData]);

    // Use the new hook for historical price data
    const {
        priceData: historicalTokenPrices,
        loading: tokenPricesLoading,
    } = useGetHistoricalTokenPricesAggregated(
        questData ? Array.from(questData.tokenAddresses) : [],
        questTimestamps
    );

    console.log("questData", questData);
    console.log("historicalTokenPrices", historicalTokenPrices)

    // Process Paladin quest data
    useEffect(() => {
        // Only process when we have both quest data and token prices
        if (!questData || !historicalTokenPrices || questsLoading || tokenPricesLoading) {
            return;
        }

        const processedData = questData.quests.map(questPeriod => {
            let periodTotalValue = 0;
            let totalRewardPerVote = 0;
            let validQuestCount = 0;

            questPeriod.data.forEach(quest => {
                // Validate all required fields exist
                if (!quest.rewardToken || !quest.rewardDistributed || !quest.rewardPerVote) {
                    return;
                }

                try {
                    // Get historical price for this token at this timestamp
                    const tokenPrice = getTokenPriceAtTimestamp(
                        historicalTokenPrices,
                        quest.rewardToken,
                        questPeriod.timestamp
                    );

                    if (tokenPrice === 0) {
                        console.warn(`No price found for token ${quest.rewardToken} at timestamp ${questPeriod.timestamp}`);
                        return;
                    }

                    // Calculate value using historical token price
                    const rewardDistributedEther = Number(ethers.utils.formatEther(quest.rewardDistributed || '0'));
                    const rewardValueUSD = rewardDistributedEther * tokenPrice;
                    periodTotalValue += rewardValueUSD;

                    // Calculate reward per vote in USD
                    const questRewardPerVote = Number(ethers.utils.formatEther(quest.rewardPerVote || '0'));
                    const rewardPerVoteUSD = questRewardPerVote * tokenPrice;
                    totalRewardPerVote += rewardPerVoteUSD;
                    validQuestCount++;
                } catch (error) {
                    console.error('Error processing quest:', error, quest);
                    return;
                }
            });

            return {
                totalValue: periodTotalValue,
                valuePerVote: validQuestCount > 0 ? totalRewardPerVote / validQuestCount : 0,
                xAxis: unixToDate(questPeriod.timestamp)
            };
        });

        // Filter out periods with no valid data and sort chronologically
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


    // Memoize hiddenHandData to prevent unnecessary re-renders
    const memoizedHiddenHandData = useMemo(() => hiddenHandData.incentives, [hiddenHandData.incentives]);

    useEffect(() => {
        if (memoizedHiddenHandData) {
            const addresses = memoizedHiddenHandData.data.flatMap(proposal =>
                proposal.bribes.map(bribe => bribe.token)
            );
            setTokenAddresses([...new Set(addresses)]);
        }
    }, [JSON.stringify(memoizedHiddenHandData)]);

    useEffect(() => {
        if (memoizedHiddenHandData && historicalPrices && !pricesLoading && !pricesError) {
            const correctedData = memoizedHiddenHandData.data.map(proposal => ({
                ...proposal,
                bribes: proposal.bribes.map(bribe => {
                    const tokenPrices = historicalPrices[bribe.token];
                    if (!tokenPrices || tokenPrices.length === 0) {
                        return bribe;
                    }

                    // Find the closest price to the proposal deadline
                    const closestPrice = tokenPrices.reduce((prev, curr) => {
                        return Math.abs(new Date(curr.date).getTime() - proposal.proposalDeadline * 1000) <
                        Math.abs(new Date(prev.date).getTime() - proposal.proposalDeadline * 1000)
                            ? curr : prev;
                    });

                    // Check if the closest price is within 3 days of the proposal deadline
                    const timeDifference = Math.abs(new Date(closestPrice.date).getTime() - proposal.proposalDeadline * 1000);
                    const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;

                    if (timeDifference <= threeDaysInMilliseconds) {
                        const correctedValue = bribe.amount * closestPrice.price;
                        return {
                            ...bribe,
                            value: correctedValue,
                        };
                    } else {
                        // If no price within 3 days, use the original amount
                        return {
                            ...bribe,
                            value: bribe.value,
                        };
                    }
                }),
            }));

            setCorrectedIncentives({
                ...memoizedHiddenHandData,
                data: correctedData,
            });
        }
    }, [JSON.stringify(memoizedHiddenHandData), JSON.stringify(historicalPrices), pricesLoading, pricesError]);

    // Memoize correctedIncentives to prevent unnecessary re-renders
    const memoizedCorrectedIncentives = useMemo(() => correctedIncentives, [correctedIncentives]);

    useEffect(() => {
        if (memoizedCorrectedIncentives) {
            const data = extractPoolRewards(memoizedCorrectedIncentives);
            setBribeRewardsNew(data);
            setXAxisDataRoundNew(data.map((el) => el.pool));

            let totalVotes = 0;
            let totalValue = 0;
            let emissionVotes = 0;
            let emissionValue = 0;

            memoizedCorrectedIncentives.data.forEach((item) => {
                const itemTotalValue = item.bribes.reduce((sum, bribe) => sum + bribe.value, 0);
                totalValue += itemTotalValue;
                totalVotes += item.voteCount;
                if (itemTotalValue > 0) {
                    emissionValue += itemTotalValue;
                    emissionVotes += item.voteCount;
                }
            });

            const incentiveEfficency = emissionValue / emissionVotes;
            setEmissionVotesTotal(emissionVotes);
            setIncentivePerVote(incentiveEfficency);
            setRoundIncentives(totalValue);

            if (gaugeData.length > 1) {
                const fullyDecoratedGauges = decorateGaugesWithIncentives(gaugeData, memoizedCorrectedIncentives);
                setDecoratedGagues(fullyDecoratedGauges);
            }
        }
    }, [JSON.stringify(memoizedCorrectedIncentives), JSON.stringify(gaugeData)]);


    const handleEpochChange = (event: SelectChangeEvent<number>) => {
        setCurrentRoundNew(Number(event.target.value));
    };

    //Historical data
    const historicalData = useGetHiddenHandHistoricalIncentives();

    // LLAMA API
    const roundsData = GetBribingRounds();
    let allRoundsBribes = GetBribingStatsForRounds()
    let dashboardData = allRoundsBribes?.dashboard;
    let dollarPerVlAssetData: number[] = [];
    let totalAmountDollarsData;
    let xAxisData: string[] = [];
    let totalAmountDollarsSum;
    if (dashboardData && historicalData) {
        //Remove the last element of the Llama data as the new API needs at least that data point as a starting element.
        //TODO: Refactor after data is stored in DB
        dollarPerVlAssetData = [...dashboardData.epochs.slice(0, -1).map(item => item.dollarPerVlAsset), ...historicalData.dollarPerVlAssetData]
        totalAmountDollarsData = [...dashboardData.epochs.slice(0, -1).map(item => item.totalAmountDollars), ...historicalData.totalAmountDollarsData]
        totalAmountDollarsSum = totalAmountDollarsData.slice(0, -1).reduce((accumulator, currentValue) => accumulator + currentValue, 0) + historicalData.totalAmountDollarsSum;
        xAxisData = [...dashboardData.epochs.slice(0, -1).map(item => unixToDate(item.end)), ...historicalData.xAxisData];
    }
    // APR chart: match the dollarPerVLAssetData with price Data to calculate APR
    let historicalAPR = xAxisData.map((el) => {
        const price = priceData.find(price => el === price.time);
        const fallbackPrice = auraHistoricalPrice ? auraHistoricalPrice.find(price => el === price.time) : 0
        if (price && price.value) {
            return dollarPerVlAssetData[xAxisData.indexOf(el)] * 2 * 12 / price.value;
        } else if (auraHistoricalPrice && fallbackPrice) {
            return dollarPerVlAssetData[xAxisData.indexOf(el)] * 2 * 12 / fallbackPrice.value;
        }
        else {
            return 0; // Fallback value
        }
    });

    let historicalPrice = xAxisData.map((el) => {
        const price = priceData.find(price => el === price.time);
        const fallbackPrice = auraHistoricalPrice ? auraHistoricalPrice.find(price => el === price.time) : 0
        if (price) {
            return price.value;
        } else if (auraHistoricalPrice && fallbackPrice) {
            return fallbackPrice.value;
        }
        else {
            return 0; // Fallback value
        }
    });

    // Add Paladin data preparation
    let paladinDollarPerVlAssetData: number[] = [];
    let paladinTotalAmountDollarsData: number[] = [];
    let paladinXAxisData: string[] = [];
    let paladinTotalAmountDollarsSum = 0;

    if (paladinHistoricalData) {
        paladinDollarPerVlAssetData = paladinHistoricalData.dollarPerVlAssetData;
        paladinTotalAmountDollarsData = paladinHistoricalData.totalAmountDollarsData;
        paladinXAxisData = paladinHistoricalData.xAxisData;
        paladinTotalAmountDollarsSum = paladinHistoricalData.totalAmountDollarsSum;
    }




    return (<>
            {(!roundsData?.rounds
                || !historicalData
                || !hiddenHandData.incentives
                || bribeRewardsNew.length < 1
                || !totalAmountDollarsSum
                || !dashboardData
                || incentivePerVote === 0
                || roundIncentives === 0
                || questsLoading
            ) ? (
                <Grid
                    container
                    spacing={2}
                    mt='25%'
                    sx={{justifyContent: 'center'}}
                >
                    <CustomLinearProgress/>
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
                                spacing={2}  // Consistent spacing
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{
                                    justifyContent: { md: 'space-between', xs: 'center' }
                                }}
                            >
                                <Grid item xs={12} sm={6} md={4}>
                                    <HiddenHandCard />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <PaladinQuestsCard />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <VoteMarketCard />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Hidden Hand: Historical Incentives Overview</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                        <Grid
                            container
                            columns={{xs: 4, sm: 8, md: 12}}
                            sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
                        >
                            <Box mt={1}>
                                {totalAmountDollarsSum ?
                                    <MetricsCard mainMetric={totalAmountDollarsSum}
                                                 metricName={"All time incentives"} mainMetricInUSD={true}
                                                 MetricIcon={CurrencyExchange}/>
                                    : <CircularProgress/>}
                            </Box>
                        </Grid>
                        </Grid>
                        {dashboardData && dollarPerVlAssetData && totalAmountDollarsData && xAxisData ?
                            <Grid item xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <DashboardOverviewChart
                                        dollarPerVlAssetData={dollarPerVlAssetData}
                                        totalAmountDollarsData={totalAmountDollarsData}
                                        xAxisData={xAxisData}
                                        height="400px"
                                    />
                                </Card>
                            </Grid>
                            : <CircularProgress/>}
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '15px'}}>Paladin Quest Marketplace</Typography>
                        </Grid>
                        {paladinDollarPerVlAssetData && paladinTotalAmountDollarsData && paladinXAxisData ?
                            <Grid item xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <DashboardOverviewChart
                                        dollarPerVlAssetData={paladinDollarPerVlAssetData}
                                        totalAmountDollarsData={paladinTotalAmountDollarsData}
                                        xAxisData={paladinXAxisData}
                                        height="400px"
                                    />
                                </Card>
                            </Grid>
                            : <CircularProgress/>}
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Aura Price vs. Incentive APR</Typography>
                        </Grid>
                        {historicalPrice && historicalPrice.length > 0 && historicalAPR ?
                            <Grid item xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <AuraIncentiveAPRChart
                                        auraPrice={historicalPrice}
                                        auraAPR={historicalAPR}
                                        xAxisData={xAxisData}
                                        height={"400px"}/>
                                </Card>
                            </Grid> :
                            <CircularProgress/>}
                        <Grid item xs={11} sm={9} mt={1}>
                            <Typography sx={{fontSize: '24px'}} mb={1}>Hidden Hand: Voting Epoch Metrics</Typography>
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
                                    value={currentRoundNew}
                                    onChange={handleEpochChange}
                                    displayEmpty
                                >
                                    {timestamps.map((roundNumber, index) => (
                                        <MenuItem
                                            value={roundNumber}
                                            key={index}>{roundNumber === 0 ? 'Current' : unixToDate(roundNumber)}
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
                                <Box mr={1}>
                                    {totalAmountDollarsSum ?
                                        <MetricsCard mainMetric={roundIncentives} metricName={"Total Incentives"}
                                                     mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box mr={1}>
                                    {emissionVotesTotal ?
                                        <MetricsCard mainMetric={emissionVotesTotal}
                                                     metricName={"Total Incentive Votes"}
                                                     mainMetricInUSD={false} MetricIcon={HowToVoteIcon}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box mr={1}>
                                    {totalAmountDollarsSum ?
                                        <MetricsCard mainMetric={incentivePerVote} metricName={"Incentive $/Vote"}
                                                     metricDecimals={4}
                                                     mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box mr={1}>
                                    {totalAmountDollarsSum ?
                                        <MetricsCard mainMetric={emissionValuePerVote} metricName={"Emission $/Vote"}
                                                     metricDecimals={4}
                                                     mainMetricInUSD={true} MetricIcon={ShoppingCartCheckout}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box mr={1}>
                                    {emissionsPerDollarSpent ?
                                        <MetricsCard
                                            mainMetric={emissionsPerDollarSpent}
                                            metricName={"Emissions per $1"} mainMetricInUSD={true}
                                            metricDecimals={4}
                                            MetricIcon={AddShoppingCart}/>
                                        : <CircularProgress/>}
                                </Box>
                            </Grid>
                        </Grid>
                        {hiddenHandData.incentives === null ? (
                            <CircularProgress/>
                        ) : (
                            <Grid item mt={1} xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>

                                    <SingleRoundBarChart
                                        rewardData={bribeRewardsNew}
                                        xAxisData={xAxisDataRoundNew}
                                        height="500px"
                                        currentRound={currentRoundNew}
                                    />
                                </Card>
                            </Grid>
                        )}

                        <Grid item xs={11} sm={9}>
                            {currentRoundNew < 1689019200 && currentRoundNew !== 0 && hiddenHandData.incentives !== null ? (
                                <HistoricalIncentivesTable
                                    key={currentRoundNew}
                                    currentRound={currentRoundNew}
                                    gaugeDatas={hiddenHandData.incentives.data}/>
                            ) : decoratedGauges && decoratedGauges.length > 0 ? (
                                <IncentivesTable gaugeDatas={decoratedGauges} currentRound={currentRoundNew}/>
                            ) : (
                                <CircularProgress/>
                            )}
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography variant="h5" mb={1}>Unclaimed Personal Rewards</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            {address && addressRewards && addressRewards.data ?
                                <HiddenHandAddressRewards rewardData={addressRewards?.data}/> :
                                <Card sx={{
                                    maxWidth: '250px',
                                    minHeight: '100px'
                                }}><CardContent>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        height="100%"
                                    >
                                        <SelfImprovementIcon sx={{fontSize: 48}}/>
                                        <Typography variant="subtitle1" align="center">
                                            Please connect your Wallet
                                        </Typography>
                                    </Box>
                                </CardContent>
                                </Card>}
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
}
