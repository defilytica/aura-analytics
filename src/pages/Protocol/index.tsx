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

export default function Protocol() {

    const [timeRange, setTimeRange] = React.useState(30);
    const [timeRangeVolume, setTimeRangeVolume] = React.useState(30);

    //TODO: REFACTOR TO CONSTANTS!
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';
    //Data
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const auraPools = useAuraPoolsHistorically(timeRange);
    const poolTransactions = usePoolTransactions(timeRange);

    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(Number(event.target.value));
    };

    const handleChangeVolume = (event: SelectChangeEvent) => {
        setTimeRangeVolume(Number(event.target.value));
    };

    if (auraPools && auraPools.length > 0 && poolTransactions && poolTransactions.length > 0) {
        const tvl = auraPools[0].tvl;
        const volume = poolTransactions[0].volume;
        let tvlDollar;
        let volumeDollar;
        let sortedPoolTransactions;
        let finalData;
        if (coinData) {
            tvlDollar = tvl * coinData[auraAddress].usd
            console.log(tvl);
            finalData = auraPools.sort((a, b) => b.date.getTime() - a.date.getTime()).map(({tvl, date}) => {
                return {
                    value: tvl * coinData[auraAddress].usd,
                    time: date.toLocaleDateString('en-US') // Convert the date to an ISO string
                };
            });

            finalData.sort((a, b) => +new Date(a.time) - +new Date(b.time));


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

                    <Grid
                        item
                        xs={11}
                    >
                        <Grid
                            container
                            spacing={{xs: 2, md: 2}}
                            columns={{xs: 4, sm: 2, md: 10}}
                        >
                            <Grid item xs={11} sm={4} md={4}>
                                {coinData && coinData[auraAddress] && coinData[auraAddress].usd ?
                                    <CoinCard
                                        tokenAddress={auraAddress}
                                        tokenName='Aura'
                                        tokenPrice={coinData[auraAddress].usd}
                                        tokenPriceChange={coinData[auraAddress].usd_24h_change}

                                    />
                                    : <CircularProgress/>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={1}
                    sx={{justifyContent: 'center'}}
                >
                    <Grid item mt={1} xs={11}>
                        <Typography variant='h5'>Historical TVL</Typography>
                    </Grid>
                    <Grid item mt={1} xs={11}>
                        {tvl && tvlDollar ?
                            <Box mr={3} mb={1}>
                                <MetricsCard
                                    mainMetric={tvlDollar}
                                    mainMetricInUSD={true}
                                    mainMetricUnit={"$"}
                                    MetricIcon={MonetizationOnIcon}
                                    metricName={"TVL"}/>
                            </Box>
                            : <CircularProgress/>}

                    </Grid>
                    {finalData ?
                        <Grid item mt={1} xs={11}>
                            <Card sx={{boxShadow: 3}}>
                                <Box p={1} display="flex" alignItems='center'>

                                </Box>
                                <FinancialAreaChart chartData={finalData} dataTitle={""} changeHandler={handleChange} timeRange={timeRange}/>
                            </Card>
                        </Grid>
                        : <CircularProgress/>
                    }
                    <Grid item mt={1} xs={11}>
                        <Typography variant='h5'>Historical Volume</Typography>
                    </Grid>
                    <Grid item mt={1} xs={11}>
                        {volume && volumeDollar ?
                            <Box mr={3} mb={1}>
                                <MetricsCard
                                    mainMetric={volumeDollar}
                                    mainMetricInUSD={true}
                                    mainMetricUnit={"$"}
                                    MetricIcon={MonetizationOnIcon}
                                    metricName={"Volume"}/>
                            </Box>
                            : <CircularProgress/>}

                    </Grid>
                    {sortedPoolTransactions ?
                        <Grid item mt={1} xs={11}>
                            <Card sx={{boxShadow: 3}}>
                                <Box p={1} display="flex" alignItems='center'>

                                </Box>
                                <FinancialAreaChart chartData={sortedPoolTransactions} dataTitle={""} changeHandler={handleChangeVolume} timeRange={timeRangeVolume}/>
                            </Card>
                        </Grid>
                        : <CircularProgress/>
                    }
                </Grid>
            </Box>
        );
    }

    return <CircularProgress/>
}