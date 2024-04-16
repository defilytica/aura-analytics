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
import {ProtocolMultiLineChart} from '../../components/Echarts/ProtocolCharts/ProtocolMultiLineChart';
import useGetSimpleTokenPrices from "../../data/balancer-api-v3/useGetSimpleTokenPrices";
import {TokenPrices} from "../../data/balancer/balancerTypes";

export default function Protocol() {
    const [timeRange, setTimeRange] = useState(30);
    const [timeRangeVolume, setTimeRangeVolume] = useState(30);
    const [displayTransactions, setDisplayTransactions] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsArb, setDisplayTransactionsArb] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsOpt, setDisplayTransactionsOpt] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsPoly, setDisplayTransactionsPoly] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsGnosis, setDisplayTransactionsGnosis] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsBase, setDisplayTransactionsBase] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsZkevm, setDisplayTransactionsZkevm] = useState<{ value: number; time: string }[]>([]);
    const [displayTransactionsAvalanche, setDisplayTransactionsAvalanche] = useState<{ value: number; time: string }[]>([]);

    const [displayPoolData, setDisplayPoolData] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataArb, setDisplayPoolDataArb] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataOpt, setDisplayPoolDataOpt] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataPoly, setDisplayPoolDataPoly] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataGnosis, setDisplayPoolDataGnosis] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataBase, setDisplayPoolDataBase] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataZkevm, setDisplayPoolDataZkevm] = useState<{ value: number; time: string }[]>([]);
    const [displayPoolDataAvalanche, setDisplayPoolDataAvalanche] = useState<{ value: number; time: string }[]>([]);

    const [capturedTVLOpt, setCapturedTVLOpt] = useState<CapturedTVL[]>([]);
    const [capturedTVLArb, setCapturedTVLArb] = useState<CapturedTVL[]>([]);
    const [capturedTVLEth, setCapturedTVLEth] = useState<CapturedTVL[]>([]);
    const [capturedTVLPoly, setCapturedTVLPoly] = useState<CapturedTVL[]>([]);
    const [capturedTVLGnosis, setCapturedTVLGnosis] = useState<CapturedTVL[]>([]);
    const [capturedTVLBase, setCapturedTVLBase] = useState<CapturedTVL[]>([]);
    const [capturedTVLZkevm, setCapturedTVLZkevm] = useState<CapturedTVL[]>([]);
    const [capturedTVLAvalanche, setCapturedTVLAvalanche] = useState<CapturedTVL[]>([]);

    const [sortedPoolTransactions, setSortedPoolTransactions] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsArb, setSortedPoolTransactionsArb] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsOpt, setSortedPoolTransactionsOpt] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsPoly, setSortedPoolTransactionsPoly] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsGnosis, setSortedPoolTransactionsGnosis] = useState<{
        value: number;
        time: string
    }[]>([]);
    const [sortedPoolTransactionsBase, setSortedPoolTransactionsBase] = useState<{ value: number; time: string }[]>([]);
    const [sortedPoolTransactionsZkevm, setSortedPoolTransactionsZkevm] = useState<{
        value: number;
        time: string
    }[]>([]);
    const [sortedPoolTransactionsAvalanche, setSortedPoolTransactionsAvalanche] = useState<{
        value: number;
        time: string
    }[]>([]);

    const [sortedTvlData, setSortedTvlData] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataArb, setSortedTvlDataArb] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataOpt, setSortedTvlDataOpt] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataPoly, setSortedTvlDataPoly] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataGnosis, setSortedTvlDataGnosis] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataBase, setSortedTvlDataBase] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataZkevm, setSortedTvlDataZkevm] = useState<{ value: number; time: string }[]>([]);
    const [sortedTvlDataAvalanche, setSortedTvlDataAvalanche] = useState<{ value: number; time: string }[]>([]);

    const [tvlDollar, setTvlDollar] = useState<number | undefined>();
    const [tvlChange, setTvlChange] = useState<number | undefined>();
    const [volumeChange, setVolumeChange] = useState<number | undefined>();
    const [volumeDollar, setVolumeDollar] = useState<number | undefined>();
    const [dataLoaded, setDataLoaded] = useState(false);


    // Constants
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

    // Hooks to fetch data
    //const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const coinData = useGetSimpleTokenPrices([auraAddress], '1');
    const auraGlobalStats = useAuraGlobalStats();

    const balancerPools = useBalancerPoolsHistorically('eth');
    const balancerPoolsArb = useBalancerPoolsHistorically('arb')
    const balancerPoolsOpt = useBalancerPoolsHistorically('opt')
    const balancerPoolsPoly = useBalancerPoolsHistorically('poly')
    const balancerPoolsGnosis = useBalancerPoolsHistorically('gnosis')
    const balancerPoolsBase = useBalancerPoolsHistorically('base')
    const balancerPoolsZkevm = useBalancerPoolsHistorically('zkevm')
    const balancerPoolsAvalanche = useBalancerPoolsHistorically('avalanche')

    const auraPools = useAuraPoolsHistorically('eth');
    const auraPoolsArb = useAuraPoolsHistorically('arb');
    const auraPoolsOpt = useAuraPoolsHistorically('opt');
    const auraPoolsPoly = useAuraPoolsHistorically('poly');
    const auraPoolsGnosis = useAuraPoolsHistorically('gnosis');
    const auraPoolsBase = useAuraPoolsHistorically('base');
    const auraPoolsZkevm = useAuraPoolsHistorically('zkevm');
    const auraPoolsAvalanche = useAuraPoolsHistorically('avalanche');

    const poolTransactions = usePoolTransactions('eth');
    const poolTransactionsArb = usePoolTransactions('arb');
    const poolTransactionsOpt = usePoolTransactions('opt');
    const poolTransactionsPoly = usePoolTransactions('poly');
    const poolTransactionsGnosis = usePoolTransactions('gnosis');
    const poolTransactionsBase = usePoolTransactions('base');
    const poolTransactionsZkevm = usePoolTransactions('zkevm');
    const poolTransactionsAvalanche = usePoolTransactions('avalanche');
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
        sliceAndSetData(sortedPoolTransactionsBase, timeRangeVolume, setDisplayTransactionsBase);
        sliceAndSetData(sortedPoolTransactionsZkevm, timeRangeVolume, setDisplayTransactionsZkevm);
        sliceAndSetData(sortedPoolTransactionsAvalanche, timeRangeVolume, setDisplayTransactionsAvalanche);
    }, [sortedPoolTransactions, sortedPoolTransactionsArb, sortedPoolTransactionsOpt, sortedPoolTransactionsPoly, sortedPoolTransactionsGnosis, sortedPoolTransactionsBase, sortedPoolTransactionsZkevm, sortedPoolTransactionsAvalanche, timeRangeVolume]);

    React.useEffect(() => {
        sliceAndSetData(sortedTvlData, timeRange, setDisplayPoolData);
        sliceAndSetData(sortedTvlDataArb, timeRange, setDisplayPoolDataArb);
        sliceAndSetData(sortedTvlDataOpt, timeRange, setDisplayPoolDataOpt);
        sliceAndSetData(sortedTvlDataPoly, timeRange, setDisplayPoolDataPoly);
        sliceAndSetData(sortedTvlDataGnosis, timeRange, setDisplayPoolDataGnosis);
        sliceAndSetData(sortedTvlDataBase, timeRange, setDisplayPoolDataBase);
        sliceAndSetData(sortedTvlDataZkevm, timeRange, setDisplayPoolDataZkevm);
        sliceAndSetData(sortedTvlDataAvalanche, timeRange, setDisplayPoolDataAvalanche);
    }, [sortedTvlData, sortedTvlDataArb, sortedTvlDataOpt, sortedTvlDataPoly, sortedTvlDataGnosis, sortedTvlDataBase, sortedTvlDataZkevm, sortedTvlDataAvalanche, timeRange]);

    const processTransactions = (transactions: Volume[], coinData: TokenPrices) => {
        return transactions
            .sort((a, b) => b.date - a.date)
            .map(({volume, date}) => ({
                value: volume * coinData[auraAddress].price,
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

    function calculateCapturedTVL(balancerTVLs: Array<{ value: number; time: string }>, auraTVLs: Array<{
        value: number;
        time: string
    }>): CapturedTVL[] {
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

    console.log(displayPoolDataZkevm)
    console.log(displayPoolDataBase)

    React.useEffect(() => {
        if (
            totalLockedAmount &&
            auraPools.length > 0 && auraPoolsArb.length > 0 && auraPoolsOpt.length > 0 &&
            auraPoolsPoly.length > 0 && auraPoolsGnosis.length > 0 && auraPoolsBase.length > 0 &&
            poolTransactions.length > 0 && poolTransactionsArb.length > 0 && poolTransactionsOpt.length > 0 &&
            poolTransactionsPoly.length > 0 && poolTransactionsGnosis.length > 0 && poolTransactionsBase.length > 0 && poolTransactionsZkevm.length > 0 &&
            coinData && auraGlobalStats && balancerPools.length > 0 && balancerPoolsArb.length > 0 &&
            balancerPoolsOpt.length > 0 && balancerPoolsPoly.length > 0 && balancerPoolsGnosis.length > 0 && balancerPoolsBase.length > 0 && balancerPoolsZkevm.length > 0 && balancerPoolsAvalanche.length > 0
        ) {
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

            const tempSortedTvlDataBase = processTVLData(auraPoolsBase);
            setSortedTvlDataBase(tempSortedTvlDataBase);

            const tempSortedTvlDataZkevm = processTVLData(auraPoolsZkevm);
            setSortedTvlDataZkevm(tempSortedTvlDataZkevm);

            const tempSortedTvlDataAvalanche = processTVLData(auraPoolsAvalanche);
            setSortedTvlDataAvalanche(tempSortedTvlDataAvalanche);

            const tempSortedTvlDataBalancer = processTVLData(balancerPools);
            const tempSortedTvlDataBalancerArb = processTVLData(balancerPoolsArb);
            const tempSortedTvlDataBalancerOpt = processTVLData(balancerPoolsOpt);
            const tempSortedTvlDataBalancerPoly = processTVLData(balancerPoolsPoly);
            const tempSortedTvlDataBalancerGnosis = processTVLData(balancerPoolsGnosis);
            const tempSortedTvlDataBalancerBase = processTVLData(balancerPoolsBase);
            const tempSortedTvlDataBalancerZkevm = processTVLData(balancerPoolsZkevm);
            const tempSortedTvlDataBalancerAvalanche = processTVLData(balancerPoolsAvalanche);

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
            const tempCalculatedCapturedTVLBase = calculateCapturedTVL(tempSortedTvlDataBalancerBase, tempSortedTvlDataBase)
            setCapturedTVLBase(tempCalculatedCapturedTVLBase);
            const tempCalculatedCapturedTVLZkevm = calculateCapturedTVL(tempSortedTvlDataBalancerZkevm, tempSortedTvlDataZkevm)
            setCapturedTVLZkevm(tempCalculatedCapturedTVLZkevm);
            const tempCalculatedCapturedTVLAvalanche = calculateCapturedTVL(tempSortedTvlDataBalancerAvalanche, tempSortedTvlDataAvalanche)
            setCapturedTVLAvalanche(tempCalculatedCapturedTVLAvalanche);

            let tempTvlDollar = tempSortedTvlData[tempSortedTvlData.length - 1].value + tempSortedTvlDataArb[tempSortedTvlDataArb.length - 1].value + tempSortedTvlDataOpt[tempSortedTvlDataOpt.length - 1].value + tempSortedTvlDataPoly[tempSortedTvlDataPoly.length - 1].value + tempSortedTvlDataGnosis[tempSortedTvlDataGnosis.length - 1].value + tempSortedTvlDataBase[tempSortedTvlDataBase.length - 1].value + tempSortedTvlDataZkevm[tempSortedTvlDataZkevm.length - 1].value + tempSortedTvlDataAvalanche[tempSortedTvlDataAvalanche.length - 1].value;
            setTvlDollar(tempTvlDollar);

            let tempTvlDollarForChange = tempSortedTvlData[tempSortedTvlData.length - 2].value + tempSortedTvlDataArb[tempSortedTvlDataArb.length - 2].value + tempSortedTvlDataOpt[tempSortedTvlDataOpt.length - 2].value + tempSortedTvlDataPoly[tempSortedTvlDataPoly.length - 2].value + tempSortedTvlDataGnosis[tempSortedTvlDataGnosis.length - 2].value + tempSortedTvlDataBase[tempSortedTvlDataBase.length - 2].value + tempSortedTvlDataZkevm[tempSortedTvlDataZkevm.length - 2].value + tempSortedTvlDataAvalanche[tempSortedTvlDataAvalanche.length - 2].value;

            let tempTvlChange = (tempTvlDollar - tempTvlDollarForChange) / tempTvlDollarForChange * 100;
            setTvlChange(tempTvlChange);

            const tempSortedTransactions = processTransactions(poolTransactions, coinData.data);
            setSortedPoolTransactions(tempSortedTransactions);

            const tempSortedTransactionsArb = processTransactions(poolTransactionsArb, coinData.data);
            setSortedPoolTransactionsArb(tempSortedTransactionsArb);

            const tempSortedTransactionsOpt = processTransactions(poolTransactionsOpt, coinData.data);
            setSortedPoolTransactionsOpt(tempSortedTransactionsOpt);

            const tempSortedTransactionsPoly = processTransactions(poolTransactionsPoly, coinData.data);
            setSortedPoolTransactionsPoly(tempSortedTransactionsPoly);

            const tempSortedTransactionsGnosis = processTransactions(poolTransactionsGnosis, coinData.data);
            setSortedPoolTransactionsGnosis(tempSortedTransactionsGnosis);

            const tempSortedTransactionsBase = processTransactions(poolTransactionsBase, coinData.data);
            setSortedPoolTransactionsBase(tempSortedTransactionsBase);

            const tempSortedTransactionsZkevm = processTransactions(poolTransactionsZkevm, coinData.data);
            setSortedPoolTransactionsZkevm(tempSortedTransactionsZkevm);

            const tempSortedTransactionsAvalanche = processTransactions(poolTransactionsAvalanche, coinData.data);
            setSortedPoolTransactionsAvalanche(tempSortedTransactionsAvalanche);

            let tempVolumeDollar = tempSortedTransactions[tempSortedTransactions.length - 1].value + tempSortedTransactionsArb[tempSortedTransactionsArb.length - 1].value + tempSortedTransactionsOpt[tempSortedTransactionsOpt.length - 1].value + tempSortedTransactionsPoly[tempSortedTransactionsPoly.length - 1].value + tempSortedTransactionsGnosis[tempSortedTransactionsGnosis.length - 1].value + tempSortedTransactionsBase[tempSortedTransactionsBase.length - 1].value + tempSortedTransactionsZkevm[tempSortedTransactionsZkevm.length - 1].value + tempSortedTransactionsAvalanche[tempSortedTransactionsAvalanche.length - 1].value;
            setVolumeDollar(tempVolumeDollar);

            let tempVolumeDollarForChange = tempSortedTransactions[tempSortedTransactions.length - 2].value + tempSortedTransactionsArb[tempSortedTransactionsArb.length - 2].value + tempSortedTransactionsOpt[tempSortedTransactionsOpt.length - 2].value + tempSortedTransactionsPoly[tempSortedTransactionsPoly.length - 2].value + tempSortedTransactionsGnosis[tempSortedTransactionsGnosis.length - 2].value + tempSortedTransactionsBase[tempSortedTransactionsBase.length - 2].value + tempSortedTransactionsZkevm[tempSortedTransactionsZkevm.length - 2].value + tempSortedTransactionsAvalanche[tempSortedTransactionsAvalanche.length - 2].value;

            let tempVolumeChange = (tempVolumeDollar - tempVolumeDollarForChange) / tempVolumeDollarForChange * 100;
            setVolumeChange(tempVolumeChange);
            setDataLoaded(true);
        }
    }, [auraPools.length, poolTransactions.length, totalLockedAmount, poolTransactionsArb.length, poolTransactionsZkevm.length, poolTransactionsOpt.length]);


    return (
        dataLoaded && totalLockedAmount ? (
                <Box sx={{flexGrow: 2}}>
                    <Grid
                        container
                        spacing={1}
                        sx={{justifyContent: 'center'}}
                    >
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}} mb={1}>Global Aura Stats</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
                            >
                                <Box m={{xs: 0, sm: 1}}>
                                    {coinData && coinData.data[auraAddress] && coinData.data[auraAddress].price ?
                                        <CoinCard
                                            tokenAddress={auraAddress}
                                            tokenName='Aura'
                                            tokenPrice={coinData.data[auraAddress].price}
                                            tokenPriceChange={coinData.data[auraAddress].priceChangePercentage24h}

                                        />
                                        : <CircularProgress/>}
                                </Box>

                                <Box m={{xs: 0, sm: 1}}>
                                    {tvlChange && tvlDollar ?
                                        <MetricsCard
                                            mainMetric={tvlDollar}
                                            mainMetricInUSD={true}
                                            mainMetricChange={tvlChange}
                                            MetricIcon={MonetizationOnIcon}
                                            metricName={"Staked TVL"}
                                            toolTipText={
                                                "The total value locked (TVL) in all Aura gauges across all networks."
                                            }
                                        />
                                        : <CircularProgress/>}
                                </Box>
                                <Box m={{xs: 0, sm: 1}}>
                                    {volumeChange && volumeDollar ?
                                        <MetricsCard
                                            mainMetric={volumeDollar}
                                            mainMetricInUSD={true}
                                            mainMetricChange={volumeChange}
                                            MetricIcon={MonetizationOnIcon}
                                            metricName={"Staking Volume"}
                                            toolTipText={
                                            "The Staking Volume Metric depicts the volume of " +
                                                "stakes and unstakes in the Aura Gauges"
                                        }
                                        />

                                        : <CircularProgress/>}
                                </Box>
                                <Box m={{xs: 0, sm: 1}}>
                                    <MetricsCard
                                        mainMetric={totalLockedAmount}
                                        mainMetricInUSD={false}
                                        metricName={'Total Aura Locked'}
                                        MetricIcon={SelfImprovementIcon}
                                        svgContent={AuraIcon}/>
                                </Box>
                                <Box m={{xs: 0, sm: 1}}>
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
                        <Grid item mt={2} xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Staking TVL</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '12px'}}>Total value locked (TVL) across all Aura staking gauges.</Typography>
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
                                        baseProtocolData={displayPoolDataBase}
                                        zkevmProtocolData={displayPoolDataZkevm}
                                        avalancheProtocolData={displayPoolDataAvalanche}
                                        changeHandler={handleChange}
                                        timeRange={timeRange}/>
                                </Card>
                            </Grid>
                            : <CircularProgress/>
                        }
                        <Grid item mt={2} xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Staking Volume</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '12px'}}>
                                Relative change of stakes vs. unstakes in Aura gauges.
                                This is an indirect measure of protocol activity as users move funds into or out of Aura gauges
                            </Typography>
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
                                        baseProtocolData={displayTransactionsBase}
                                        zkevmProtocolData={displayTransactionsZkevm}
                                        avalancheProtocolData={displayTransactionsAvalanche}
                                        changeHandler={handleChangeVolume}
                                        timeRange={timeRangeVolume}/>
                                </Card>
                            </Grid>
                            : <CircularProgress/>
                        }

                        <Grid item mt={2} xs={11} sm={9}>
                            <Typography sx={{fontSize: '24px'}}>Historical Balancer TVL captured</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Typography sx={{fontSize: '12px'}}>
                                The percentage of TVL that is staked in Aura gauges relative to overall TVL in Balancer pools.
                            </Typography>
                        </Grid>

                        {sortedPoolTransactions ?
                            <Grid item mb={2} xs={11} sm={9}>
                                <Card sx={{boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",}}>
                                    <ProtocolMultiLineChart
                                        dataSets={[
                                            {name: 'Ethereum', data: capturedTVLEth},
                                            {name: 'Arbitrum', data: capturedTVLArb},
                                            {name: 'Optimism', data: capturedTVLOpt},
                                            {name: 'Polygon', data: capturedTVLPoly},
                                            {name: 'Gnosis', data: capturedTVLGnosis},
                                            {name: 'Base', data: capturedTVLBase},
                                            {name: 'zkEVM', data: capturedTVLZkevm},
                                            {name: 'Avalanche', data: capturedTVLAvalanche},
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
