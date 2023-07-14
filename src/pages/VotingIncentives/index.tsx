import {Box, Card, CircularProgress, Grid, MenuItem, Select, Typography} from "@mui/material";
import CustomLinearProgress from '../../components/Progress/CustomLinearProgress';
import {GetBribingRounds} from "../../data/llamaairforce/getBribingRounds";
import {
    BribeResponse,
    GetBribingStatsForRound,
    GetBribingStatsForRounds
} from "../../data/llamaairforce/getBribingStatsForRound";
import * as React from "react";
import {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import DashboardOverviewChart from "../../components/Echarts/VotingIncentives/DashboardOverviewChart";
import {unixToDate} from "../../utils/date";
import MetricsCard from "../../components/Cards/MetricsCard";
import {CurrencyExchange, Handshake} from "@mui/icons-material";
import SingleRoundBarChart from "../../components/Echarts/VotingIncentives/SingleRoundBarChart";
import {useGetHiddenHandVotingIncentives} from "../../data/hidden-hand/useGetHiddenHandVotingIncentives";
import {HiddenHandIncentives} from "../../data/hidden-hand/hiddenHandTypes";
import {useGetHiddenHandHistoricalIncentives} from "../../data/hidden-hand/useGetHiddenHandHistoricalIncentives";
import {AURA_TIMESTAMPS} from "../../data/hidden-hand/constants";

// Helper functions to parse data types to Llama model
const extractPoolRewards = (data: HiddenHandIncentives | null): PoolReward[] => {
    const poolRewards: PoolReward[] = [];

    if (data) {
        data.data.forEach((item) => {
            const { title, bribes } = item;

            if (bribes.length > 0) {
                const poolReward: PoolReward = { pool: title };

                bribes.forEach((bribe) => {
                    const { symbol, value } = bribe;
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
    console.log("poolRewards", poolRewards)
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

    const [currentRoundNew, setCurrentRoundNew] = useState<number>(1656378000); // Default timestamp
    const [bribeRewardsNew, setBribeRewardsNew] = useState<PoolReward[]>([]);
    const [xAxisDataRoundNew, setXAxisDataRoundNew] = useState<string[]>([]);
    const [incentivePerVote, setIncentivePerVote] = useState<number>(0);
    const [emissionPerVote, setEmissionPerVote] = useState<number>(0);
    const [roundIncentives, setRoundIncentives] = useState<number>(0);
    const hiddenHandData = useGetHiddenHandVotingIncentives(String(currentRoundNew));

    useEffect(() => {
        const data = extractPoolRewards(hiddenHandData.incentives);
        setBribeRewardsNew(data);
        if (hiddenHandData.incentives && hiddenHandData.incentives.data.length > 1) {
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
            const incentiveEfficency = totalValue / totalVotes;
            const emissionEff = emissionValue / emissionVotes
            setIncentivePerVote(incentiveEfficency)
            setEmissionPerVote(emissionEff)
            setRoundIncentives(totalValue)
        }


    }, [currentRoundNew, hiddenHandData.incentives]);

    const handleEpochChange = (event: SelectChangeEvent<number>) => {
        setCurrentRoundNew(Number(event.target.value));
    };

    const timestamps = AURA_TIMESTAMPS;


    //Historical data
    const historicalData = useGetHiddenHandHistoricalIncentives();


    // LLAMA API
    const roundsData = GetBribingRounds();
    const roundsNumbers = roundsData ? roundsData.rounds : [];
    const [currentRound, setCurrentRound] = useState(roundsNumbers[-0] || 25); // Select the first round by default

    let allRoundsBribes = GetBribingStatsForRounds()
    console.log(allRoundsBribes);
    const bribes = GetBribingStatsForRound(currentRound);
    console.log(bribes);


    let dashboardData = allRoundsBribes?.dashboard;

    let dollarPerVlAssetData;
    let totalAmountDollarsData;
    let xAxisData;
    let totalAmountDollarsSum;
    if (dashboardData && historicalData) {
        //Remove the last element of the Llama data as the new API needs at least that data point as a starting element.
        //TODO: Refactor after data is stored in DB
        dollarPerVlAssetData = [...dashboardData.epochs.slice(0, -1).map(item => item.dollarPerVlAsset), ...historicalData.dollarPerVlAssetData]
        totalAmountDollarsData = [...dashboardData.epochs.slice(0, -1).map(item => item.totalAmountDollars), ...historicalData.totalAmountDollarsData]
        totalAmountDollarsSum = totalAmountDollarsData.slice(0, -1).reduce((accumulator, currentValue) => accumulator + currentValue, 0) + historicalData.totalAmountDollarsSum;
        xAxisData = [...dashboardData.epochs.slice(0, -1).map(item => unixToDate(item.end)), ...historicalData.xAxisData];
    }




    let xAxisDataRound;
    let bribeRewards;
    let bribeRewardsRatio;
    if (bribes) {
        console.log(bribes);
        xAxisDataRound = bribes.epoch.bribes.map(item => item.pool);
        bribeRewards = bribes.epoch.bribes.reduce((acc: PoolReward[], item) => {
            // find the existing pool object
            let pool = acc.find(pool => pool.pool === item.pool);

            // if the pool does not exist yet, create it
            if (!pool) {
                pool = { pool: item.pool };
                acc.push(pool);
            }

            // if the pool already has this token, add to its amountDollars
            // otherwise, set it to the current bribe's amountDollars
            pool[item.token] = (pool[item.token] as number || 0) + item.amountDollars;

            return acc;
        }, []);

        const calculateRatios = (response: BribeResponse): number[] => {
            return response.epoch.bribes.map(bribe => {
                const correspondingBribedValue = response.epoch.bribed[bribe.pool];
                if (correspondingBribedValue !== undefined && correspondingBribedValue !== 0) {
                    return bribe.amountDollars / correspondingBribedValue;
                }
                return 0; // Return 0 or throw an error if there is no corresponding bribed value or it is zero
            });
        }

        console.log("emission / vote", emissionPerVote)
        console.log("incentive / vote", incentivePerVote)
        bribeRewardsRatio = calculateRatios(bribes);
        //console.log("bribeRewardsRatio", bribeRewardsRatio);
        //console.log("bribeRewards", bribeRewards);
    }

    return (<>
            {!roundsData ? (
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
                        <Grid item xs={11}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <NavCrumbs crumbSet={navCrumbs} destination={'Voting Incentives'}/>
                            </Box>
                        </Grid>
                        <Grid item xs={11}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                            >
                                <Box m={1}>
                                    {totalAmountDollarsSum ?
                                        <MetricsCard mainMetric={totalAmountDollarsSum} metricName={"All time incentives"} mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                        : <CircularProgress/>}
                                </Box>
                                { /*<Box m={1}>
                                    {dashboardData ?
                                        <MetricsCard mainMetric={dashboardData.rewardPerDollarBribe} metricName={"Emissions per $1"} mainMetricInUSD={true} MetricIcon={Handshake}/>
                                        : <CircularProgress/>}
                                </Box> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={11} >
                            <Typography variant="h5" >Overview</Typography>
                        </Grid>
                        {dashboardData&&dollarPerVlAssetData&&totalAmountDollarsData&&xAxisData ?
                            <Grid item mt={1} xs={11}>
                                <Card sx={{boxShadow: 3}}>
                                    <DashboardOverviewChart
                                        dollarPerVlAssetData={dollarPerVlAssetData}
                                        totalAmountDollarsData={totalAmountDollarsData}
                                        xAxisData={xAxisData}
                                        height="400px"
                                    />
                                </Card>
                            </Grid>
                        : <CircularProgress/>}
                        <Grid item xs={11} mt={1}>
                            <Typography variant="h5" mb={1}>Voting Epoch Metrics</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Box m={1}>
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
                                            key={index}>{unixToDate(roundNumber)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>
                        </Grid>
                        <Grid item xs={11}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                            >
                                <Box m={1}>
                                    {totalAmountDollarsSum ?
                                        <MetricsCard mainMetric={roundIncentives} metricName={"Total Incentives"} mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box m={1}>
                                    {totalAmountDollarsSum ?
                                        <MetricsCard mainMetric={incentivePerVote} metricName={"Incentives per Vote"} mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box m={1}>
                                    {dashboardData ?
                                        <MetricsCard mainMetric={1+(emissionPerVote - incentivePerVote) / emissionPerVote} metricName={"Emissions per $1"} mainMetricInUSD={true} MetricIcon={Handshake}/>
                                        : <CircularProgress/>}
                                </Box>
                            </Grid>
                        </Grid>
                        {hiddenHandData.incentives === null ? (
                            <CircularProgress/>
                        ) : (
                            <Grid item mt={1} xs={11}>
                                <Card sx={{boxShadow: 3, marginBottom: 5}}>

                                    <SingleRoundBarChart
                                        rewardData={bribeRewardsNew}
                                        xAxisData={xAxisDataRoundNew}
                                        height="500px"
                                    />
                                </Card>
                            </Grid>
                        )}

                    </Grid>
                </Box>
            )}
        </>
    );
}