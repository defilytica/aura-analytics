import Box from '@mui/material/Box';
import {Grid, CircularProgress, Typography, Card} from '@mui/material';
import {useCoinGeckoSimpleTokenPrices} from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import MetricsCard from "../../components/Cards/MetricsCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React, {useEffect, useState} from "react";
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
import {useBalancerPoolsHistorically} from "../../data/balancer/useBalancerPoolsHistorically";
import {CapturedTVL} from "../../data/aura/auraTypes";
import {ProtocolMultiLineChart} from '../../components/Echarts/ProtocolCharts/ProtocolMultiLineChart';
import useGetSimpleTokenPrices from "../../data/balancer-api-v3/useGetSimpleTokenPrices";
import {BalancerChartDataItem, TokenPrices} from "../../data/balancer/balancerTypes";


type Network = 'eth' | 'arb' | 'opt' | 'poly' | 'gnosis' | 'base' | 'zkevm' | 'avalanche';
const networks: Network[] = ['eth', 'arb', 'opt', 'poly', 'gnosis', 'base', 'zkevm', 'avalanche'];

export const useNetworkPoolTransactions = (network: Network) => {
    return usePoolTransactions(network);
};

export const useNetworkAuraPools = (network: Network) => {
    return useAuraPoolsHistorically(network);
};

export const useNetworkBalancerPools = (network: Network) => {
    return useBalancerPoolsHistorically(network);
};

interface SlicedData {
    tvlData: { [key in Network]: BalancerChartDataItem[] };
    transactionData: { [key in Network]: BalancerChartDataItem[] };
}


export default function Protocol() {
    const [timeRange, setTimeRange] = useState(30);
    const [timeRangeVolume, setTimeRangeVolume] = useState(30);
    const [displayData, setDisplayData] = useState<{
        tvlData: { [key in Network]: BalancerChartDataItem[] };
        transactionData: { [key in Network]: BalancerChartDataItem[] };
        capturedTVLData: { [key in Network]: CapturedTVL[] };
    }>({
        tvlData: { eth: [], arb: [], opt: [], poly: [], gnosis: [], base: [], zkevm: [], avalanche: [] },
        transactionData: { eth: [], arb: [], opt: [], poly: [], gnosis: [], base: [], zkevm: [], avalanche: [] },
        capturedTVLData: { eth: [], arb: [], opt: [], poly: [], gnosis: [], base: [], zkevm: [], avalanche: [] },
    });
    const [slicedData, setSlicedData] = useState<SlicedData>({
        tvlData: { eth: [], arb: [], opt: [], poly: [], gnosis: [], base: [], zkevm: [], avalanche: [] },
        transactionData: { eth: [], arb: [], opt: [], poly: [], gnosis: [], base: [], zkevm: [], avalanche: [] },
    });
    const [dataLoaded, setDataLoaded] = useState(false);

    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

    // Hooks to fetch data
    const coinData = useGetSimpleTokenPrices([auraAddress], '1');
    const auraGlobalStats = useAuraGlobalStats();

    const poolTransactions = {
        eth: useNetworkPoolTransactions('eth'),
        arb: useNetworkPoolTransactions('arb'),
        opt: useNetworkPoolTransactions('opt'),
        poly: useNetworkPoolTransactions('poly'),
        gnosis: useNetworkPoolTransactions('gnosis'),
        base: useNetworkPoolTransactions('base'),
        zkevm: useNetworkPoolTransactions('zkevm'),
        avalanche: useNetworkPoolTransactions('avalanche'),
    };

    const balancerPools = {
        eth: useNetworkBalancerPools('eth'),
        arb: useNetworkBalancerPools('arb'),
        opt: useNetworkBalancerPools('opt'),
        poly: useNetworkBalancerPools('poly'),
        gnosis: useNetworkBalancerPools('gnosis'),
        base: useNetworkBalancerPools('base'),
        zkevm: useNetworkBalancerPools('zkevm'),
        avalanche: useNetworkBalancerPools('avalanche'),
    };

    const auraPools = {
        eth: useNetworkAuraPools('eth'),
        arb: useNetworkAuraPools('arb'),
        opt: useNetworkAuraPools('opt'),
        poly: useNetworkAuraPools('poly'),
        gnosis: useNetworkAuraPools('gnosis'),
        base: useNetworkAuraPools('base'),
        zkevm: useNetworkAuraPools('zkevm'),
        avalanche: useNetworkAuraPools('avalanche'),
    };

    const totalLockedAmount = auraGlobalStats?.auraTotalLockedAmount;

    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(Number(event.target.value));
    };

    const handleChangeVolume = (event: SelectChangeEvent) => {
        setTimeRangeVolume(Number(event.target.value));
    };

    const processTransactions = (transactions: Volume[], coinData: TokenPrices): BalancerChartDataItem[] => {
        return transactions
            .sort((a, b) => b.date - a.date)
            .map(({ volume, date }) => ({
                value: volume * coinData[auraAddress].price,
                time: new Date(date * 1000).toLocaleDateString('en-US'),
            }))
            .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    };

    const processTVLData = (data: TVL[]): BalancerChartDataItem[] => {
        return data
            .sort((a, b) => b.date - a.date)
            .map(({ tvl, date }) => ({
                value: tvl,
                time: new Date(date).toLocaleDateString('en-US'),
            }))
            .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    };

    const calculateCapturedTVL = (balancerTVLs: BalancerChartDataItem[], auraTVLs: BalancerChartDataItem[]): CapturedTVL[] => {
        let balancerIndex = 0;
        let auraIndex = 0;
        const capturedTVLs: CapturedTVL[] = [];

        while (balancerIndex < balancerTVLs.length && auraIndex < auraTVLs.length) {
            const balancerTVL = balancerTVLs[balancerIndex];
            const auraTVL = auraTVLs[auraIndex];

            if (balancerTVL.time === auraTVL.time) {
                if (balancerTVL.value !== 0) {
                    const capturedPercentage = (auraTVL.value / balancerTVL.value) * 100;
                    capturedTVLs.push({ capturedPercentage, time: balancerTVL.time });
                }
                balancerIndex++;
                auraIndex++;
            } else if (new Date(balancerTVL.time) < new Date(auraTVL.time)) {
                balancerIndex++;
            } else {
                auraIndex++;
            }
        }

        return capturedTVLs;
    };

    const sliceData = (data: BalancerChartDataItem[], range: number): BalancerChartDataItem[] => {
        const start = Math.max(data.length - range, 0);
        return data.slice(start);
    };

    useEffect(() => {
        if (
            totalLockedAmount &&
            !coinData.loading &&
            networks.every(network => auraPools[network].length > 0) &&
            networks.every(network => poolTransactions[network].length > 0) &&
            networks.every(network => balancerPools[network].length > 0) &&
            coinData &&
            auraGlobalStats
        ) {
            const tvlData = networks.reduce((acc, network) => {
                acc[network] = processTVLData(auraPools[network]);
                return acc;
            }, {} as { [key in Network]: BalancerChartDataItem[] });

            const balancerTvlData = networks.reduce((acc, network) => {
                acc[network] = processTVLData(balancerPools[network]);
                return acc;
            }, {} as { [key in Network]: BalancerChartDataItem[] });

            const capturedTVLData = networks.reduce((acc, network) => {
                acc[network] = calculateCapturedTVL(balancerTvlData[network], tvlData[network]);
                return acc;
            }, {} as { [key in Network]: CapturedTVL[] });

            const transactionData = networks.reduce((acc, network) => {
                acc[network] = processTransactions(poolTransactions[network], coinData.data);
                return acc;
            }, {} as { [key in Network]: BalancerChartDataItem[] });

            setDisplayData({
                tvlData,
                transactionData,
                capturedTVLData,
            });

            setDataLoaded(true);
        }
    }, [JSON.stringify(auraPools), JSON.stringify(poolTransactions), JSON.stringify(totalLockedAmount), JSON.stringify(coinData), JSON.stringify(auraGlobalStats), JSON.stringify(balancerPools)]);

    useEffect(() => {
        if (dataLoaded) {
            const slicedTvlData = networks.reduce((acc, network) => {
                acc[network] = sliceData(displayData.tvlData[network], timeRange);
                return acc;
            }, {} as { [key in Network]: BalancerChartDataItem[] });

            const slicedTransactionData = networks.reduce((acc, network) => {
                acc[network] = sliceData(displayData.transactionData[network], timeRangeVolume);
                return acc;
            }, {} as { [key in Network]: BalancerChartDataItem[] });

            setSlicedData({
                tvlData: slicedTvlData,
                transactionData: slicedTransactionData
            });
        }
    }, [displayData, timeRange, timeRangeVolume, dataLoaded]);


    return dataLoaded && totalLockedAmount && coinData ? (
        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                <Grid item xs={11} sm={9}>
                    <Typography sx={{ fontSize: '24px' }} mb={1}>
                        Global Aura Stats
                    </Typography>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: { md: 'space-between', xs: 'center' }, alignContent: 'center' }}>
                        <Box m={{ xs: 0, sm: 1 }}>
                            {coinData?.data[auraAddress]?.price ? (
                                <CoinCard
                                    tokenAddress={auraAddress}
                                    tokenName="Aura"
                                    tokenPrice={coinData.data[auraAddress].price}
                                    tokenPriceChange={coinData.data[auraAddress].priceChangePercentage24h}
                                />
                            ) : (
                                <CircularProgress />
                            )}
                        </Box>
                        <Box m={{ xs: 0, sm: 1 }}>
                            <MetricsCard
                                mainMetric={totalLockedAmount}
                                mainMetricInUSD={false}
                                metricName="Total Aura Locked"
                                MetricIcon={SelfImprovementIcon}
                                svgContent={AuraIcon}
                            />
                        </Box>
                        <Box m={{ xs: 0, sm: 1 }}>
                            {auraGlobalStats ? (
                                <MetricsCard
                                    mainMetric={auraGlobalStats.auraBALTotalSupply || 0}
                                    mainMetricInUSD={false}
                                    metricName="AuraBAL Supply"
                                    MetricIcon={TokenIcon}
                                />
                            ) : (
                                <CircularProgress />
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                <Grid item mt={2} xs={11} sm={9}>
                    <Typography sx={{ fontSize: '24px' }}>Historical Staking TVL</Typography>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Typography sx={{ fontSize: '12px' }}>Total value locked (TVL) across all Aura staking gauges.</Typography>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Card sx={{ boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px" }}>
                        <ProtocolMultiAreaChart
                                mainnetProtocolData={slicedData.tvlData['eth']}
                                arbitrumProtocolData={slicedData.tvlData['arb']}
                                optimismProtocolData={slicedData.tvlData['opt']}
                                polygonProtocolData={slicedData.tvlData['poly']}
                                gnosisProtocolData={slicedData.tvlData['gnosis']}
                                baseProtocolData={slicedData.tvlData['base']}
                                zkevmProtocolData={slicedData.tvlData['zkevm']}
                                avalancheProtocolData={slicedData.tvlData['avalanche']}
                            changeHandler={handleChange}
                            timeRange={timeRange}
                        />
                    </Card>
                </Grid>
                <Grid item mt={2} xs={11} sm={9}>
                    <Typography sx={{ fontSize: '24px' }}>Historical Staking Volume</Typography>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Typography sx={{ fontSize: '12px' }}>
                        Relative change of stakes vs. unstakes in Aura gauges. This is an indirect measure of protocol activity as users move funds into or out of Aura gauges.
                    </Typography>
                </Grid>
                <Grid item mb={2} xs={11} sm={9}>
                    <Card sx={{ boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px" }}>
                        <ProtocolMultiBarChart
                            mainnetProtocolData={slicedData.transactionData['eth']}
                            arbitrumProtocolData={slicedData.transactionData['arb']}
                            optimismProtocolData={slicedData.transactionData['opt']}
                            polygonProtocolData={slicedData.transactionData['poly']}
                            gnosisProtocolData={slicedData.transactionData['gnosis']}
                            baseProtocolData={slicedData.transactionData['base']}
                            zkevmProtocolData={slicedData.transactionData['zkevm']}
                            avalancheProtocolData={slicedData.transactionData['avalanche']}
                            changeHandler={handleChangeVolume}
                            timeRange={timeRangeVolume}
                        />
                    </Card>
                </Grid>
                <Grid item mt={2} xs={11} sm={9}>
                    <Typography sx={{ fontSize: '24px' }}>Historical Balancer TVL captured</Typography>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Typography sx={{ fontSize: '12px' }}>
                        The percentage of TVL that is staked in Aura gauges relative to overall TVL in Balancer pools.
                    </Typography>
                </Grid>
                <Grid item mb={2} xs={11} sm={9}>
                    <Card sx={{ boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px" }}>
                        <ProtocolMultiLineChart
                            dataSets={networks.map(network => ({
                                name: network.charAt(0).toUpperCase() + network.slice(1),
                                data: displayData.capturedTVLData[network],
                            }))}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    ) : (
        <Grid container spacing={2} mt='25%' sx={{ justifyContent: 'center' }}>
            <CustomLinearProgress />
        </Grid>
    );
};
