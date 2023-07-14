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
import isDev from "../../constants";
import {useGetHiddenHandVotingIncentives} from "../../data/hidden-hand/useGetHiddenHandVotingIncentives";
import {HiddenHandIncentives} from "../../data/hidden-hand/hiddenHandTypes";
import {useGetHiddenHandHistoricalIncentives} from "../../data/hidden-hand/useGetHiddenHandHistoricalIncentives";

// Helper functions to parse data types to Llama model
const calculateIncentives = (data: HiddenHandIncentives | null) => {
    let totalValue = 0;
    let totalVotes = 0;

    if (data) {
        data.data.forEach((item) => {
            totalValue += item.totalValue;
            totalVotes += item.voteCount;
        });
    }

    const valuePerVote = totalVotes > 0 ? totalValue / totalVotes : 0;

    return { totalValue, valuePerVote };
};

const extractPoolRewards = (data: HiddenHandIncentives | null): PoolReward[] => {
    const poolRewards: PoolReward[] = [];

    if (data) {
        data.data.forEach((item) => {
            const { title, bribes } = item;

            if (bribes.length > 0) {
                const poolReward: PoolReward = { pool: title };

                bribes.forEach((bribe) => {
                    const { token, amount } = bribe;
                    const tokenKey = `${token}`;

                    if (!poolReward[tokenKey]) {
                        poolReward[tokenKey] = amount;
                    } else {
                        const existingValue = poolReward[tokenKey];
                        poolReward[tokenKey] = typeof existingValue === 'number' ? existingValue + amount : amount;
                    }
                });

                poolRewards.push(poolReward);
            }
        });
    }

    return poolRewards;
};

interface IncentiveData {
    dollarPerVlAssetData: number[];
    totalAmountDollarsData: number[];
    totalAmountDollarsSum: number;
    xAxisData: string[];
}

interface Epoch {
    dollarPerVlAsset: number;
    totalAmountDollars: number;
    end: string;
}

interface DashboardData {
    epochs: Epoch[];
}


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
    //const hiddenHandData = useGetHiddenHandVotingIncentives('1687809600');
    //console.log("hiddenHandData", hiddenHandData)

    //const { totalValue, valuePerVote } = calculateIncentives(hiddenHandData ? hiddenHandData.incentives : null);
    //const poolRewards = extractPoolRewards(hiddenHandData ? hiddenHandData.incentives : null);
    const historicalData = useGetHiddenHandHistoricalIncentives();
    console.log("historicalData", historicalData)




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
    if (dashboardData) {
        dollarPerVlAssetData = dashboardData.epochs.map(item => item.dollarPerVlAsset);
        totalAmountDollarsData = dashboardData.epochs.map(item => item.totalAmountDollars);
        totalAmountDollarsSum = totalAmountDollarsData.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        xAxisData = dashboardData.epochs.map(item => unixToDate(item.end));
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

        bribeRewardsRatio = calculateRatios(bribes);
        console.log("bribeRewardsRatio", bribeRewardsRatio);
        console.log("bribeRewards", bribeRewards);
    }





    const handleChange = (event: SelectChangeEvent<number>) => {
        if (isDev()) {
            setCurrentRound(25);
        } else {
            setCurrentRound(event.target.value as number);
        }
    };

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
                                        <MetricsCard mainMetric={totalAmountDollarsSum} metricName={"All time revenue"} mainMetricInUSD={true} MetricIcon={CurrencyExchange}/>
                                        : <CircularProgress/>}
                                </Box>
                                <Box m={1}>
                                    {dashboardData ?
                                        <MetricsCard mainMetric={dashboardData.rewardPerDollarBribe} metricName={"Emissions per $1"} mainMetricInUSD={true} MetricIcon={Handshake}/>
                                        : <CircularProgress/>}
                                </Box>
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
                            <Typography variant="h6" mb={1}>Round by Round</Typography>
                        </Grid>
                        {bribes && bribeRewards && bribeRewardsRatio && xAxisDataRound ?
                            <Grid item mt={1} xs={11}>
                                <Card sx={{boxShadow: 3, marginBottom: 5}}>
                                    <Box m={1}>
                                        <Select
                                            sx={{
                                                backgroundColor: "background.paper",
                                                boxShadow: 2,
                                                borderRadius: 2,
                                                borderColor: 0,
                                            }}
                                            color="primary"
                                            value={currentRound}
                                            onChange={handleChange}
                                            displayEmpty
                                        >
                                            {roundsNumbers.map((roundNumber, index) => (
                                                <MenuItem
                                                    value={roundNumber}
                                                    key={index}>{`Round ${roundNumber}`}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>

                                    <SingleRoundBarChart
                                        rewardData={bribeRewards}
                                        xAxisData={xAxisDataRound}
                                        height="500px"
                                    />
                                </Card>
                            </Grid>
                            : <CircularProgress/>}
                    </Grid>
                </Box>
            )}
        </>
    );
}