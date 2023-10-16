import {Box, Card, CardContent, CircularProgress, Grid, MenuItem, Select, Typography} from "@mui/material";
import CustomLinearProgress from '../../components/Progress/CustomLinearProgress';
import {GetBribingRounds} from "../../data/llamaairforce/getBribingRounds";
import {GetBribingStatsForRounds} from "../../data/llamaairforce/getBribingStatsForRound";
import * as React from "react";
import {useEffect, useState} from "react";
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
import {AURA_TIMESTAMPS} from "../../data/hidden-hand/constants";
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
import {useBalancerTokenPageData} from "../../data/balancer/useTokens";
import {AURA_TOKEN_MAINNET} from "../../data/aura/auraConstants";
import AuraIncentiveAPRChart from "../../components/Echarts/VotingIncentives/AuraIncentiveAPRChart";
import useGetBalancerV3StakingGauges from "../../data/balancer-api-v3/useGetBalancerV3StakingGauges";
import {useGetEmissionPerVote} from "../../data/VotingIncentives/useGetEmissionPerVote";
import PaladinQuestsCard from "../../components/Cards/PaladinQuestsCard";

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
    //APR chart data
    const {priceData} = useBalancerTokenPageData(AURA_TOKEN_MAINNET);
    const {emissionValuePerVote, emissionsPerDollarSpent} = useGetEmissionPerVote(currentRoundNew);

    useEffect(() => {
        const data = extractPoolRewards(hiddenHandData.incentives);
        setBribeRewardsNew(data);
        if (hiddenHandData.incentives && hiddenHandData.incentives.data.length > 1 && gaugeData.length > 1) {
            setXAxisDataRoundNew(data.map((el) => el.pool));
            //calculate inventives and emission per vote Metrics for a given round
            let totalVotes = 0;
            let totalValue = 0;
            let emissionVotes = 0;
            let emissionValue = 0;
            hiddenHandData.incentives.data.forEach((item) => {
                totalValue += item.totalValue;
                totalVotes += item.voteCount;
                if (item.totalValue > 0) {
                    emissionValue += item.totalValue;
                    emissionVotes += item.voteCount;
                }
            });
            const incentiveEfficency = emissionValue / emissionVotes;
            setEmissionVotesTotal(emissionVotes)
            setIncentivePerVote(incentiveEfficency)
            setRoundIncentives(totalValue)
            const fullyDecoratedGauges = decorateGaugesWithIncentives(gaugeData, hiddenHandData.incentives)
            setDecoratedGagues(fullyDecoratedGauges)
        }
    }, [currentRoundNew, JSON.stringify(gaugeData), hiddenHandData.incentives]);


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
        if (price && price.value) {
            return dollarPerVlAssetData[xAxisData.indexOf(el)] * 2 * 12 / price.value;
        } else {
            return 0; // Fallback value
        }
    });

    let historicalPrice = xAxisData.map((el) => {
        const price = priceData.find(price => el === price.time);
        if (price) {
            return price.value;
        } else {
            return 0; // Fallback value
        }
    });

    return (<>
            {(!roundsData?.rounds
                && !historicalData
                && !hiddenHandData.incentives
                && bribeRewardsNew.length < 1
                && !totalAmountDollarsSum
                && !dashboardData
                && incentivePerVote === 0
                && roundIncentives === 0
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
                                <Box sx={{mt: {xs: 1}}}>
                                    <HiddenHandCard/>
                                </Box>
                                <Box sx={{mt: {xs: 1}}}>
                                    <PaladinQuestsCard/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Incentives Overview</Typography>
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
                            <Typography sx={{fontSize: '24px'}} mb={1}>Voting Epoch Metrics</Typography>
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
