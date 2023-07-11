import Box from '@mui/material/Box';
import {Grid, CircularProgress, Typography, Card} from '@mui/material';
import {useCoinGeckoSimpleTokenPrices} from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import MetricsCard from "../../components/Cards/MetricsCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FinancialAreaChart from "../../components/Echarts/FinancialCharts/FinancialAreaChart";
import React, {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {usePoolTransactions} from "../../data/aura/usePoolTransactions";
import CustomLinearProgress from "../../components/Progress/CustomLinearProgress";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AuraIcon from "../../assets/png/AURA_ISO_colors.png";
import {useGetLeadingLockers} from "../../data/aura/useAuraLockers";
import TokenIcon from "@mui/icons-material/Token";
import {useAuraGlobalStats} from "../../data/aura/useAuraGlobalStats";
import {useAuraPoolsHistorically} from "../../data/aura/useAuraPools";

export default function Protocol() {
    const [timeRange, setTimeRange] = useState(30);
    const [timeRangeVolume, setTimeRangeVolume] = useState(30);
    const [displayTransactions, setDisplayTransactions] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolData, setdisplayPoolData] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactions, setSortedPoolTransactions] = useState<{ value: number; time: string }[]>([]);
    const [tvlDollar, setTvlDollar] = useState<number | undefined>();
    const [sortedTvlData, setSortedTvlData] = useState<{ value: number; time: string }[]>([]);
    const [tvlChange, setTvlChange] = useState<number | undefined>();
    const [volumeChange, setVolumeChange] = useState<number | undefined>();
    const [volumeDollar, setVolumeDollar] = useState<number | undefined>();


    // Constants
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

    // Hooks to fetch data
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const auraGlobalStats = useAuraGlobalStats();
    const auraPools = useAuraPoolsHistorically();
    const poolTransactions = usePoolTransactions();
    const lockers = useGetLeadingLockers();

    const totalLockedAmount = lockers.reduce((a, b) => a + Number(b.balanceLocked), 0);

    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(Number(event.target.value));

    };

    const handleChangeVolume = (event: SelectChangeEvent) => {
        setTimeRangeVolume(Number(event.target.value));
    };

    React.useEffect(() => {
        if (sortedPoolTransactions) {
            const start = Math.max(sortedPoolTransactions.length - timeRangeVolume, 0);
            setDisplayTransactions(sortedPoolTransactions.slice(start));
        }
    }, [sortedPoolTransactions, timeRangeVolume]);

    React.useEffect(() => {
        if (sortedTvlData) {
            const start = Math.max(sortedTvlData.length - timeRange, 0);
            setdisplayPoolData(sortedTvlData.slice(start));
        }
    }, [sortedTvlData, timeRange]);

    React.useEffect(() => {
        if (auraPools && auraPools.length > 0 && poolTransactions && poolTransactions.length > 0 && coinData) {
            let tempSortedTvlData = auraPools.sort((a, b) => b.date - a.date).map(({tvl, date}) => {
                return {
                    value: tvl,
                    time: new Date(date).toLocaleDateString('en-US') // Convert the Unix timestamp to an ISO string
                };
            });
            tempSortedTvlData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
            setSortedTvlData(tempSortedTvlData);

            console.log(tempSortedTvlData);

            let tempTvlDollar = tempSortedTvlData[tempSortedTvlData.length - 1].value;
            setTvlDollar(tempTvlDollar);

            let tempTvlChange = (tempSortedTvlData[tempSortedTvlData.length - 1].value - tempSortedTvlData[tempSortedTvlData.length - 2].value) / tempSortedTvlData[tempSortedTvlData.length - 2].value * 100;
            setTvlChange(tempTvlChange);

            const tempSortedTransactions = poolTransactions
                .sort((a, b) => b.date - a.date)
                .map(({volume, date}) => ({
                    value: volume * coinData[auraAddress].usd,
                    time: new Date(date * 1000).toLocaleDateString('en-US')
                }))
                .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

            setSortedPoolTransactions(tempSortedTransactions);

            let tempVolumeDollar = tempSortedTransactions[tempSortedTransactions.length - 1].value;
            setVolumeDollar(tempVolumeDollar);

            const tempVolumeChange = (tempSortedTransactions[tempSortedTransactions.length - 1].value - tempSortedTransactions[tempSortedTransactions.length - 2].value) / tempSortedTransactions[tempSortedTransactions.length - 2].value * 100;
            setVolumeChange(tempVolumeChange);
        }
    }, [auraPools, poolTransactions, coinData]);


    return (
        tvlDollar && tvlChange && volumeChange && volumeDollar && displayPoolData && displayTransactions && totalLockedAmount ?(
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
                            {tvlChange && tvlDollar ?
                                <MetricsCard
                                    mainMetric={tvlDollar}
                                    mainMetricInUSD={true}
                                    mainMetricChange={tvlChange}
                                    MetricIcon={MonetizationOnIcon}
                                    metricName={"Protocol TVL"}/>
                                : <CircularProgress/>}
                        </Box>
                        <Box m={1}>
                            {volumeChange && volumeDollar ?
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
                    <Typography variant='h5'>Historical Staking TVL</Typography>
                </Grid>

                {sortedTvlData ?
                    <Grid item mt={1} xs={11}>
                        <Card sx={{boxShadow: 3}}>
                            <FinancialAreaChart
                                chartData={displayPoolData}
                                dataTitle={""}
                                changeHandler={handleChange}
                                timeRange={timeRange}/>
                        </Card>
                    </Grid>
                    : <CircularProgress/>
                }
                <Grid item mt={1} xs={11}>
                    <Typography variant='h5'>Historical Staking Volume</Typography>
                </Grid>

                {sortedPoolTransactions ?
                    <Grid item mt={1} mb={2} xs={11}>
                        <Card sx={{boxShadow: 3}}>
                            <FinancialAreaChart
                                chartData={displayTransactions}
                                dataTitle={""}
                                changeHandler={handleChangeVolume}
                                timeRange={timeRangeVolume}/>
                        </Card>
                    </Grid>
                    : <CircularProgress/>
                }
            </Grid>
        </Box>) :
    <Grid
        container
        spacing={2}
        mt='25%'
        sx={{justifyContent: 'center'}}
    >
        <CustomLinearProgress/>
    </Grid>
    );
}