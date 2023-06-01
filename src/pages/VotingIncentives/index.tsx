import {Typography, Grid, Box, Card, MenuItem, Select, CircularProgress} from "@mui/material";
import {useActiveNetworkVersion} from "../../state/application/hooks";

import CustomLinearProgress from '../../components/Progress/CustomLinearProgress';
import {GetBribingRounds} from "../../data/llamaairforce/getBribingRounds";
import {
    BribeResponse,
    GetBribingStatsForRound,
    GetBribingStatsForRounds
} from "../../data/llamaairforce/getBribingStatsForRound";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import * as React from "react";
import DashboardOverviewChart from "../../components/Echarts/VotingIncentives/DashboardOverviewChart";
import {unixToDate} from "../../utils/date";
import MetricsCard from "../../components/Cards/MetricsCard";
import {CurrencyExchange, Handshake, Money} from "@mui/icons-material";

export default function VotingIncentives() {
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)

    const [activeNetwork] = useActiveNetworkVersion()
    const roundsData = GetBribingRounds();

    const roundsNumbers = roundsData ? roundsData.rounds : [];
    const [currentRound, setCurrentRound] = useState(roundsNumbers[0] || 1); // Select the first round by default

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
        bribeRewards = bribes.epoch.bribes.map(item => item.amountDollars);

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
        console.log(bribeRewardsRatio);
        console.log(bribeRewards);
    }



    const handleChange = (event: SelectChangeEvent<number>) => {
        setCurrentRound(event.target.value as number);
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
                        <Grid item xs={11} mt={1}>
                            <Typography variant="h6" mb={1}>Overview</Typography>
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
                    </Grid>
                </Box>
            )}
        </>
    );
}