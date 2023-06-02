import Box from '@mui/material/Box';
import {Grid, CircularProgress, Typography, Card} from '@mui/material';
import {useCoinGeckoSimpleTokenPrices} from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import {TVL, useAuraPoolsHistorically} from "../../data/aura/useAuraPools";
import MetricsCard from "../../components/Cards/MetricsCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FinancialAreaChart from "../../components/Echarts/FinancialCharts/FinancialAreaChart";
import React from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {usePoolTransactions} from "../../data/aura/usePoolTransactions";
import CustomLinearProgress from "../../components/Progress/CustomLinearProgress";
import GenericAreaChart from "../../components/Echarts/GenericAreaChart";
import GenericBarChart from "../../components/Echarts/GenericBarChart";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AuraIcon from "../../assets/png/AURA_ISO_colors.png";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {useGetLeadingLockers} from "../../data/aura/useAuraLockers";
import {ethers} from "ethers";
import {BalancerChartDataItem} from "../../data/balancer/balancerTypes";
import {ChartDataItem} from "../../components/Echarts/PastUnlocksWithdrawalBarChart";
import TokenIcon from "@mui/icons-material/Token";
import {useAuraGlobalStats} from "../../data/aura/useAuraGlobalStats";

export default function Protocol() {

    const [timeRange, setTimeRange] = React.useState(30);
    const [timeRangeVolume, setTimeRangeVolume] = React.useState(30);

    //TODO: REFACTOR TO CONSTANTS!
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';
    //Data
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const auraGlobalStats = useAuraGlobalStats();
    const auraPools = useAuraPoolsHistorically(timeRange);
    const poolTransactions = usePoolTransactions(timeRange);
    const lockers = useGetLeadingLockers();

    let totalLockedAmount = lockers.reduce((a, b) => a + Number(b.balanceLocked), 0);



    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(Number(event.target.value));
    };

    const handleChangeVolume = (event: SelectChangeEvent) => {
        setTimeRangeVolume(Number(event.target.value));
    };

    //TODO Silas: Fix this state handling and if loop for conditional jsx elements. Decouple data loading from rendering!
    if (auraPools && auraPools.length > 0 && poolTransactions && poolTransactions.length > 0) {
        const tvl = auraPools[0].tvl;
        const tvlChange = (auraPools[0].tvl - auraPools[1].tvl) / auraPools[1].tvl * 100;
        const volume = poolTransactions[0].volume;
        const volumeChange = (poolTransactions[0].volume - poolTransactions[1].volume) / poolTransactions[1].volume * 100;
        let tvlDollar;
        let volumeDollar;
        let sortedPoolTransactions;
        let sortedTvlData;
        if (coinData) {
            tvlDollar = tvl * coinData[auraAddress].usd
            console.log(tvl);
            sortedTvlData = auraPools.sort((a, b) => b.date.getTime() - a.date.getTime()).map(({tvl, date}) => {
                return {
                    value: tvl * coinData[auraAddress].usd,
                    time: date.toLocaleDateString('en-US') // Convert the date to an ISO string
                };
            });

            sortedTvlData.sort((a, b) => +new Date(a.time) - +new Date(b.time));


            volumeDollar = volume * coinData[auraAddress].usd;
            sortedPoolTransactions = poolTransactions.sort((a, b) => b.date.getTime() - a.date.getTime()).map(({volume, date}) => {
                return {
                    value: volume * coinData[auraAddress].usd,
                    time: date.toLocaleDateString('en-US') // Convert the date to an ISO string
                };
            });
            sortedPoolTransactions.sort((a, b) => +new Date(a.time) - +new Date(b.time));
        }

        return (
            <Box sx={{flexGrow: 2}}>
                <Grid
                    container
                    spacing={2}
                    sx={{justifyContent: 'center'}}
                >
                    <Grid item xs={11} mt={1}>
                        <Typography variant="h5" mb={1}>Global Aura Stats</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <Grid
                            container
                            columns={{xs: 4, sm: 8, md: 12}}
                            sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                        >
                            <Box m={1}>
                                {coinData && coinData[auraAddress] && coinData[auraAddress].usd ?
                                    <CoinCard
                                        tokenAddress={auraAddress}
                                        tokenName='Aura'
                                        tokenPrice={coinData[auraAddress].usd}
                                        tokenPriceChange={coinData[auraAddress].usd_24h_change}

                                    />
                                    : <CircularProgress/>}
                            </Box>

                                <Box m={1}>
                                    {tvl && tvlChange && tvlDollar ?
                                    <MetricsCard
                                        mainMetric={tvlDollar}
                                        mainMetricInUSD={true}
                                        mainMetricChange={tvlChange}
                                        MetricIcon={MonetizationOnIcon}
                                        metricName={"Protocol TVL"}/>
                                        : <CircularProgress/>}
                                </Box>
                            <Box m={1}>
                                {volume && volumeChange && volumeDollar ?
                                <MetricsCard
                                    mainMetric={volumeDollar}
                                    mainMetricInUSD={true}
                                    mainMetricChange={volumeChange}
                                    MetricIcon={MonetizationOnIcon}
                                    metricName={"Protocol Volume"}/>
                                : <CircularProgress/>}
                            </Box>
                            <Box m={1}>
                                <MetricsCard
                                    mainMetric={totalLockedAmount}
                                    mainMetricInUSD={false}
                                    metricName={'Total Aura Locked'}
                                    MetricIcon={SelfImprovementIcon}
                                    svgContent={AuraIcon}/>
                            </Box>
                            <Box m={1}>
                                {auraGlobalStats ?
                                    <MetricsCard
                                        mainMetric={auraGlobalStats ? auraGlobalStats.auraBALTotalSupply : 0}
                                        mainMetricInUSD={false}
                                        metricName='AuraBAL Supply'
                                        mainMetricChange={0}
                                        MetricIcon={TokenIcon}
                                    />
                                    : <CircularProgress/>}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={1}
                    sx={{justifyContent: 'center'}}
                >
                    <Grid item mt={1} xs={11}>
                        <Typography variant='h5'>Historical TVL (30d)</Typography>
                    </Grid>

                    {sortedTvlData ?
                        <Grid item mt={1} xs={11}>
                            <Card sx={{boxShadow: 3}}>
                                <GenericAreaChart chartData={sortedTvlData} dataTitle={""} />
                                {/* <FinancialAreaChart
                                    chartData={finalData}
                                    dataTitle={""}
                                    changeHandler={handleChange}
                                    timeRange={timeRange}/>
                                */}
                            </Card>
                        </Grid>
                        : <CircularProgress/>
                    }
                    <Grid item mt={1} xs={11}>
                        <Typography variant='h5'>Historical Volume (30d)</Typography>
                    </Grid>

                    {sortedPoolTransactions ?
                        <Grid item mt={1} mb={2} xs={11}>
                            <Card sx={{boxShadow: 3}}>
                                <GenericBarChart data={sortedPoolTransactions} />

                                { /* <FinancialAreaChart
                                    chartData={sortedPoolTransactions}
                                    dataTitle={""}
                                    changeHandler={handleChangeVolume}
                                    timeRange={timeRangeVolume}/>
                                 */}
                            </Card>
                        </Grid>
                        : <CircularProgress/>
                    }
                </Grid>
            </Box>
        );
    }
    return  <Grid
        container
        spacing={2}
        mt='25%'
        sx={{justifyContent: 'center'}}
    >
        <CustomLinearProgress/>
    </Grid>
}