import Box from '@mui/material/Box';
import {Grid, CircularProgress, Typography, Card} from '@mui/material';
import {useCoinGeckoSimpleTokenPrices} from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import MetricsCard from "../../components/Cards/MetricsCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React, {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {usePoolTransactions, Volume} from "../../data/aura/usePoolTransactions";
import CustomLinearProgress from "../../components/Progress/CustomLinearProgress";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AuraIcon from "../../assets/png/AURA_ISO_colors.png";
import TokenIcon from "@mui/icons-material/Token";
import {useAuraGlobalStats} from "../../data/aura/useAuraGlobalStats";
import {TVL, useAuraPoolsHistorically} from "../../data/aura/useAuraPools";
import ProtocolMultiAreaChart from "../../components/Echarts/ProtocolCharts/ProtocolMultiAreaChart";
import ProtocolMultiBarChart from "../../components/Echarts/ProtocolCharts/ProtocolMultiBarChart";
import {CoingeckoRawData} from "../../data/coingecko/getCoingecoSimpleTokenPrices";
import {useBalancerPoolsHistorically} from "../../data/balancer/useBalancerPoolsHistorically";
import {CapturedTVL} from "../../data/aura/auraTypes";
import { ProtocolMultiLineChart } from '../../components/Echarts/ProtocolCharts/ProtocolMultiLineChart';

export default function Protocol() {
    const [timeRange, setTimeRange] = useState(30);
    const [timeRangeVolume, setTimeRangeVolume] = useState(30);
    const [displayTransactions, setDisplayTransactions] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsArb, setDisplayTransactionsArb] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsOpt, setDisplayTransactionsOpt] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsPoly, setDisplayTransactionsPoly] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsGnosis, setDisplayTransactionsGnosis] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolData, setDisplayPoolData] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataArb, setDisplayPoolDataArb] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataOpt, setDisplayPoolDataOpt] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataPoly, setDisplayPoolDataPoly] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataGnosis, setDisplayPoolDataGnosis] = useState<{ value: number; time: string }[]>([]);
    const [capturedTVLOpt, setCapturedTVLOpt] = useState<CapturedTVL[]>([]);
    const [capturedTVLArb, setCapturedTVLArb] = useState<CapturedTVL[]>([]);
    const [capturedTVLEth, setCapturedTVLEth] = useState<CapturedTVL[]>([]);
    const [capturedTVLPoly, setCapturedTVLPoly] = useState<CapturedTVL[]>([]);
    const [capturedTVLGnosis, setCapturedTVLGnosis] = useState<CapturedTVL[]>([]);
    const [sortedPoolTransactions, setSortedPoolTransactions] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsArb, setSortedPoolTransactionsArb] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsOpt, setSortedPoolTransactionsOpt] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsPoly, setSortedPoolTransactionsPoly] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsGnosis, setSortedPoolTransactionsGnosis] = useState<{ value: number; time: string }[]>([]);
    const [tvlDollar, setTvlDollar] = useState<number | undefined>();
    const [sortedTvlData, setSortedTvlData] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataArb, setSortedTvlDataArb] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataOpt, setSortedTvlDataOpt] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataPoly, setSortedTvlDataPoly] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataGnosis, setSortedTvlDataGnosis] = useState<{ value: number; time: string }[]>([]);
    const [tvlChange, setTvlChange] = useState<number | undefined>();
    const [volumeChange, setVolumeChange] = useState<number | undefined>();
    const [volumeDollar, setVolumeDollar] = useState<number | undefined>();


    // Constants
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

    // Hooks to fetch data
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const auraGlobalStats = useAuraGlobalStats();

    const balancerPools = useBalancerPoolsHistorically('eth');
    const balancerPoolsArb = useBalancerPoolsHistorically('arb')
    const balancerPoolsOpt = useBalancerPoolsHistorically('opt')
    const balancerPoolsPoly = useBalancerPoolsHistorically('poly')
    const balancerPoolsGnosis = useBalancerPoolsHistorically('gnosis')
    const auraPools = useAuraPoolsHistorically('eth');
    const auraPoolsArb = useAuraPoolsHistorically('arb');
    const auraPoolsOpt = useAuraPoolsHistorically('opt');
    const auraPoolsPoly = useAuraPoolsHistorically('poly');
    const auraPoolsGnosis = useAuraPoolsHistorically('gnosis');
    const poolTransactions = usePoolTransactions('eth');
    const poolTransactionsArb = usePoolTransactions('arb');
    const poolTransactionsOpt = usePoolTransactions('opt');
    const poolTransactionsPoly = usePoolTransactions('poly');
    const poolTransactionsGnosis = usePoolTransactions('gnosis');
    const totalLockedAmount = auraGlobalStats?.auraTotalLockedAmount;

    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(Number(event.target.value));

    };

    const handleChangeVolume = (event: SelectChangeEvent) => {
        setTimeRangeVolume(Number(event.target.value));
    };

    const sliceAndSetData = (data: Array<{
        value: number;
        time: string
    }>, timeRange: number, setFunction: React.Dispatch<React.SetStateAction<Array<{
        value: number;
        time: string
    }>>>) => {
        if (data) {
            const start = Math.max(data.length - timeRange, 0);
            setFunction(data.slice(start));
        }
    };

    React.useEffect(() => {
        sliceAndSetData(sortedPoolTransactions, timeRangeVolume, setDisplayTransactions);
        sliceAndSetData(sortedPoolTransactionsArb, timeRangeVolume, setDisplayTransactionsArb);
        sliceAndSetData(sortedPoolTransactionsOpt, timeRangeVolume, setDisplayTransactionsOpt);
        sliceAndSetData(sortedPoolTransactionsPoly, timeRangeVolume, setDisplayTransactionsPoly);
        sliceAndSetData(sortedPoolTransactionsGnosis, timeRangeVolume, setDisplayTransactionsGnosis);
    }, [sortedPoolTransactions, sortedPoolTransactionsArb, sortedPoolTransactionsOpt, sortedPoolTransactionsPoly, sortedPoolTransactionsGnosis, timeRangeVolume]);

    React.useEffect(() => {
        sliceAndSetData(sortedTvlData, timeRange, setDisplayPoolData);
        sliceAndSetData(sortedTvlDataArb, timeRange, setDisplayPoolDataArb);
        sliceAndSetData(sortedTvlDataOpt, timeRange, setDisplayPoolDataOpt);
        sliceAndSetData(sortedTvlDataPoly, timeRange, setDisplayPoolDataPoly);
        sliceAndSetData(sortedTvlDataGnosis, timeRange, setDisplayPoolDataGnosis);
    }, [sortedTvlData, sortedTvlDataArb, sortedTvlDataOpt, sortedTvlDataPoly, sortedTvlDataGnosis, timeRange]);

    const processTransactions = (transactions: Volume[], coinData: CoingeckoRawData) => {
        return transactions
            .sort((a, b) => b.date - a.date)
            .map(({volume, date}) => ({
                value: volume * coinData[auraAddress].usd,
                time: new Date(date * 1000).toLocaleDateString('en-US')
            }))
            .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    }

    const processTVLData = (data: TVL[]) => {
        let tempSortedTvlData = data.sort((a, b) => b.date - a.date).map(({tvl, date}) => {
            return {
                value: tvl,
                time: new Date(date).toLocaleDateString('en-US')
            };
        });
        tempSortedTvlData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

        return tempSortedTvlData;
    }

    function calculateCapturedTVL(balancerTVLs: Array<{ value: number; time: string }>, auraTVLs:Array<{ value: number; time: string }>): CapturedTVL[] {
        let balancerIndex = 0;
        let auraIndex = 0;
        const capturedTVLs: CapturedTVL[] = [];

        while (balancerIndex < balancerTVLs.length && auraIndex < auraTVLs.length) {
            const balancerTVL = balancerTVLs[balancerIndex];
            const auraTVL = auraTVLs[auraIndex];

            if (balancerTVL.time === auraTVL.time) {
                if (balancerTVL.value !== 0) {
                    const capturedPercentage = (auraTVL.value / balancerTVL.value) * 100; // In percentage

                    capturedTVLs.push({
                        capturedPercentage,
                        time: balancerTVL.time,
                    });
                }

                balancerIndex++;
                auraIndex++;
            } else if (Date.parse(balancerTVL.time) < Date.parse(auraTVL.time)) {
                balancerIndex++;
            } else {
                auraIndex++;
            }
        }

        return capturedTVLs;
    }


    React.useEffect(() => {
        if (auraPools && auraPools.length > 0 && auraPoolsArb && auraPoolsArb.length > 0 && auraPoolsOpt && auraPoolsOpt.length > 0 && auraPoolsPoly && auraPoolsPoly.length > 0 && auraPoolsGnosis && auraPoolsGnosis.length > 0 && poolTransactions && poolTransactions.length > 0 && poolTransactionsArb && poolTransactionsArb.length > 0 && poolTransactionsOpt && poolTransactionsOpt.length > 0 && balancerPools && balancerPools.length > 0 && balancerPoolsArb && balancerPoolsArb.length > 0 && balancerPoolsOpt && balancerPoolsOpt.length > 0 && balancerPoolsPoly && balancerPoolsPoly.length > 0 && balancerPoolsGnosis && balancerPoolsGnosis.length > 0 && coinData) {
            const tempSortedTvlData = processTVLData(auraPools);
            setSortedTvlData(tempSortedTvlData);

            const tempSortedTvlDataArb = processTVLData(auraPoolsArb);
            setSortedTvlDataArb(tempSortedTvlDataArb);

            const tempSortedTvlDataOpt = processTVLData(auraPoolsOpt);
            setSortedTvlDataOpt(tempSortedTvlDataOpt);

            const tempSortedTvlDataPoly = processTVLData(auraPoolsPoly);
            setSortedTvlDataPoly(tempSortedTvlDataPoly);

            const tempSortedTvlDataGnosis = processTVLData(auraPoolsGnosis);
            setSortedTvlDataGnosis(tempSortedTvlDataGnosis);

            const tempSortedTvlDataBalancer = processTVLData(balancerPools);
            const tempSortedTvlDataBalancerArb = processTVLData(balancerPoolsArb);
            const tempSortedTvlDataBalancerOpt = processTVLData(balancerPoolsOpt);
            const tempSortedTvlDataBalancerPoly = processTVLData(balancerPoolsPoly);
            const tempSortedTvlDataBalancerGnosis = processTVLData(balancerPoolsGnosis);

            const tempCalculatedCapturedTVL = calculateCapturedTVL(tempSortedTvlDataBalancer, tempSortedTvlData)
            setCapturedTVLEth(tempCalculatedCapturedTVL);
            const tempCalculatedCapturedTVLArb = calculateCapturedTVL(tempSortedTvlDataBalancerArb, tempSortedTvlDataArb)
            setCapturedTVLArb(tempCalculatedCapturedTVLArb);
            const tempCalculatedCapturedTVLOpt = calculateCapturedTVL(tempSortedTvlDataBalancerOpt, tempSortedTvlDataOpt)
            setCapturedTVLOpt(tempCalculatedCapturedTVLOpt);
            const tempCalculatedCapturedTVLPoly = calculateCapturedTVL(tempSortedTvlDataBalancerPoly, tempSortedTvlDataPoly)
            setCapturedTVLPoly(tempCalculatedCapturedTVLPoly);
            const tempCalculatedCapturedTVLGnosis = calculateCapturedTVL(tempSortedTvlDataBalancerGnosis, tempSortedTvlDataGnosis)
            setCapturedTVLGnosis(tempCalculatedCapturedTVLGnosis);

            let tempTvlDollar = tempSortedTvlData[tempSortedTvlData.length - 1].value + tempSortedTvlDataArb[tempSortedTvlDataArb.length - 1].value + tempSortedTvlDataOpt[tempSortedTvlDataOpt.length - 1].value + tempSortedTvlDataPoly[tempSortedTvlDataPoly.length - 1].value + tempSortedTvlDataGnosis[tempSortedTvlDataGnosis.length - 1].value;
            setTvlDollar(tempTvlDollar);

            let tempTvlDollarForChange = tempSortedTvlData[tempSortedTvlData.length - 2].value + tempSortedTvlDataArb[tempSortedTvlDataArb.length - 2].value + tempSortedTvlDataOpt[tempSortedTvlDataOpt.length - 2].value + tempSortedTvlDataPoly[tempSortedTvlDataPoly.length - 2].value + tempSortedTvlDataGnosis[tempSortedTvlDataGnosis.length - 2].value;

            let tempTvlChange = (tempTvlDollar - tempTvlDollarForChange) / tempTvlDollarForChange * 100;
            setTvlChange(tempTvlChange);

            const tempSortedTransactions = processTransactions(poolTransactions, coinData);
            setSortedPoolTransactions(tempSortedTransactions);

            const tempSortedTransactionsArb = processTransactions(poolTransactionsArb, coinData);
            setSortedPoolTransactionsArb(tempSortedTransactionsArb);

            const tempSortedTransactionsOpt = processTransactions(poolTransactionsOpt, coinData);
            setSortedPoolTransactionsOpt(tempSortedTransactionsOpt);

            const tempSortedTransactionsPoly = processTransactions(poolTransactionsPoly, coinData);
            setSortedPoolTransactionsPoly(tempSortedTransactionsPoly);

            const tempSortedTransactionsGnosis = processTransactions(poolTransactionsGnosis, coinData);
            setSortedPoolTransactionsGnosis(tempSortedTransactionsGnosis);

            let tempVolumeDollar = tempSortedTransactions[tempSortedTransactions.length - 1].value + tempSortedTransactionsArb[tempSortedTransactionsArb.length - 1].value + tempSortedTransactionsOpt[tempSortedTransactionsOpt.length - 1].value + tempSortedTransactionsPoly[tempSortedTransactionsPoly.length - 1].value + tempSortedTransactionsGnosis[tempSortedTransactionsGnosis.length - 1].value;
            setVolumeDollar(tempVolumeDollar);

            let tempVolumeDollarForChange = tempSortedTransactions[tempSortedTransactions.length - 2].value + tempSortedTransactionsArb[tempSortedTransactionsArb.length - 2].value + tempSortedTransactionsOpt[tempSortedTransactionsOpt.length - 2].value + tempSortedTransactionsPoly[tempSortedTransactionsPoly.length - 2].value + tempSortedTransactionsGnosis[tempSortedTransactionsGnosis.length - 2].value;

            let tempVolumeChange = (tempVolumeDollar - tempVolumeDollarForChange) / tempVolumeDollarForChange * 100;
            setVolumeChange(tempVolumeChange);
        }
    }, [auraPools, poolTransactions, coinData]);


    return (
        tvlDollar && tvlChange && volumeChange && volumeDollar && displayPoolData && displayTransactions && displayTransactionsArb && displayTransactionsOpt && displayTransactionsPoly && displayTransactionsGnosis && totalLockedAmount && capturedTVLEth && capturedTVLArb && capturedTVLOpt && capturedTVLPoly && capturedTVLGnosis ? (
                <Box sx={{flexGrow: 2}}>
                    <Grid
                        container
                        spacing={2}
                        sx={{justifyContent: 'center'}}
                    >
                        <Grid item xs={11} sm={9} mt={1}>
                            <Typography sx={{fontSize: '24px'}} mb={1}>Global Aura Stats</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
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
                        <Grid item mt={1} xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Staking TVL</Typography>
                        </Grid>

                        {sortedTvlData ?
                            <Grid item xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <ProtocolMultiAreaChart
                                        mainnetProtocolData={displayPoolData}
                                        arbitrumProtocolData={displayPoolDataArb}
                                        optimismProtocolData={displayPoolDataOpt}
                                        polygonProtocolData={displayPoolDataPoly}
                                        gnosisProtocolData={displayPoolDataGnosis}
                                        changeHandler={handleChange}
                                        timeRange={timeRange}/>
                                </Card>
                            </Grid>
                            : <CircularProgress/>
                        }
                        <Grid item mt={1} xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Staking Volume</Typography>
                        </Grid>

                        {sortedPoolTransactions ?
                            <Grid item mb={2} xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <ProtocolMultiBarChart
                                        mainnetProtocolData={displayTransactions}
                                        arbitrumProtocolData={displayTransactionsArb}
                                        optimismProtocolData={displayTransactionsOpt}
                                        polygonProtocolData={displayTransactionsPoly}
                                        gnosisProtocolData={displayTransactionsGnosis}
                                        changeHandler={handleChangeVolume}
                                        timeRange={timeRangeVolume}/>
                                </Card>
                            </Grid>
                            : <CircularProgress/>
                        }

                        <Grid item mt={1} xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Balancer TVL captured</Typography>
                        </Grid>

                        {sortedPoolTransactions ?
                            <Grid item mb={2} xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <ProtocolMultiLineChart
                                        dataSets={[
                                            { name: 'Ethereum', data: capturedTVLEth },
                                            { name: 'Arbitrum', data: capturedTVLArb },
                                            { name: 'Optimism', data: capturedTVLOpt },
                                            { name: 'Polygon', data: capturedTVLPoly },
                                            { name: 'Gnosis', data: capturedTVLGnosis },
                                        ]}/>
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
