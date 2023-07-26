import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles'
import NavCrumbs, {NavElement} from '../../components/NavCrumbs';
import {Card, CardMedia, CircularProgress, Grid, Typography} from '@mui/material';
import {useAuraBalMints} from '../../data/aura/useAuraBalMints';
import {useAuraBalTransactions} from '../../data/aura/useAuraBalTransactions';
import {useAuraGlobalStats} from '../../data/aura/useAuraGlobalStats';
import {BalancerChartDataItem} from '../../data/balancer/balancerTypes';
import GenericBarChart from '../../components/Echarts/GenericBarChart';
import {useCoinGeckoSimpleTokenPrices} from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import {useAuraPoolLeaderboardInfo} from '../../data/aura/useAuraPoolLeaderboard';
import {AuraVaultDepositWithdrawTransactionInfo, AuraVaultHarvestTransactionInfo} from '../../data/aura/auraTypes';
import {useAuraVaultLeaderboardInfo} from '../../data/aura/useAuraVaultLeaderboard';
import {useActiveNetworkVersion} from '../../state/application/hooks';
import MetricsCard from '../../components/Cards/MetricsCard';
import TokenIcon from '@mui/icons-material/Token';
import PieChartIcon from '@mui/icons-material/PieChart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AuraPoolLeaderboardTable from '../../components/Tables/AuraPoolLeaderboardTable';
import {useBalancerTokenPageData, useBalancerTokenSingleData} from "../../data/balancer/useTokens";
import {useBalancerPoolsForToken} from "../../data/balancer/usePools";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import CustomLinearProgress from "../../components/Progress/CustomLinearProgress";
import TokenChart from "../../components/TokenChart";
import PoolTable from "../../components/Tables/PoolTable";
import {cumulativeTokenSupply} from "./helpers";
import {AURA_BAL_SUPPLY} from "../../data/aura/auraConstants";
import GenericAreaChart from "../../components/Echarts/GenericAreaChart";
import AuraBALMultiAreaChart from "../../components/Echarts/auraBAL/AuraBALMultiAreaChart";
import {ArbitrumNetworkInfo, EthereumNetworkInfo} from "../../constants/networks";


export default function AuraBAL() {

    const theme = useTheme();
    const [activeNetwork] = useActiveNetworkVersion();
    //TODO: add to auraConstants
    const auraBALMainnet = '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d'
    let auraBALAddress = '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d';
    let auraBALVaultAddress = "0xfaa2ed111b4f580fcb85c48e6dc6782dc5fcd7a6";
    let startTimeStamp = 1655276813;
    if (activeNetwork === ArbitrumNetworkInfo) {
        auraBALAddress = '0x223738a747383d6f9f827d95964e4d8e8ac754ce'
        auraBALVaultAddress = '0x4ea9317d90b61fc28c418c247ad0ca8939bbb0e9'
        startTimeStamp = 1686811327
    }
    const coinData = useCoinGeckoSimpleTokenPrices([auraBALMainnet], true);
    //Image banner resources
    const auraBalBannerDark = require('../../assets/png/aurabal-dark.png');
    const auraBalBannerLight = require('../../assets/png/aurabal-light.png');

    //Navigation
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)


    //Data fetching
    //const auraPools = useAuraPools();
    const auraBalMints = useAuraBalMints(startTimeStamp, activeNetwork.chainId);
    const auraBALTransactions = useAuraBalTransactions(activeNetwork.chainId);
    const auraGlobalStats = useAuraGlobalStats();
    const auraBalPoolLeaderboard = useAuraPoolLeaderboardInfo("auraBal");
    //auraBAL vault
    const auraBalVaultLeaderboard = useAuraVaultLeaderboardInfo(auraBALVaultAddress, activeNetwork.chainId)

    //Coin data for global Balancer stats
    const tokenData = useBalancerTokenSingleData(auraBALAddress);
    const {tvlData, volumeData, priceData} = useBalancerTokenPageData(auraBALAddress);
    const poolData = useBalancerPoolsForToken(auraBALAddress);


    //Create daily mint data
    // Reduce the original object array to an object with daily sums
    const dailySums: { [date: string]: number } = auraBalMints.reduce((acc, item) => {
        const date = new Date(item.timestamp * 1000).toLocaleDateString('en-US');
        acc[date] = (acc[date] || 0) + item.amount;
        return acc;
    }, {} as { [key: string]: number }); // type assertion here
    const auraBalDailyMintSeries: BalancerChartDataItem[] = Object.keys(dailySums).map((date) => {
        return {
            time: date,
            value: dailySums[date],
        };
    });


    //Daily auraBAL harvest chart
    const dailyHarvestSums: { [date: string]: number } = auraBALTransactions.harvests.reduce((acc, item) => {
        const date = new Date(item.timestamp * 1000).toLocaleDateString('en-US');
        acc[date] = (acc[date] || 0) + item.harvested;
        return acc;
    }, {} as { [key: string]: number }); // type assertion here
    const auraBalDailyHarvestSeries: BalancerChartDataItem[] = Object.keys(dailyHarvestSums).map((date) => {
        return {
            time: date,
            value: dailySums[date],
        };
    });

    //Daily auraBAL deposit chart
    const dailyDepositSums: { [date: string]: number } = auraBALTransactions.deposits.reduce((acc, item) => {
        const date = new Date(item.timestamp * 1000).toLocaleDateString('en-US');
        acc[date] = (acc[date] || 0) + item.shares;
        return acc;
    }, {} as { [key: string]: number }); // type assertion here
    const auraBalDailyDepositSeries: BalancerChartDataItem[] = Object.keys(dailyDepositSums).map((date) => {
        return {
            time: date,
            value: dailySums[date],
        };
    });
    console.log("auraBalDailyDepositSeries", auraBalDailyDepositSeries)

    //Daily auraBAL withdrawal chart
    const dailyWithdrawalSums: { [date: string]: number } = auraBALTransactions.withdrawals.reduce((acc, item) => {
        const date = new Date(item.timestamp * 1000).toLocaleDateString('en-US');
        acc[date] = (acc[date] || 0) + item.shares;
        return acc;
    }, {} as { [key: string]: number }); // type assertion here
    const auraBalDailyWithdrawalSeries: BalancerChartDataItem[] = Object.keys(dailyWithdrawalSums).map((date) => {
        return {
            time: date,
            value: dailySums[date],
        };
    });

    const auraNetCompounderDeposits: BalancerChartDataItem[] = Object.keys(dailyDepositSums).map((date) => {
        const dailyDepositSum = dailyDepositSums[date] || 0;
        const dailyWithdrawalSum = dailyWithdrawalSums[date] || 0;
        return {
            time: date,
            value: dailyDepositSum - dailyWithdrawalSum,
        };
    });

    //Create the cumulative trace
    const cumulativeAuraBAL = cumulativeTokenSupply(AURA_BAL_SUPPLY, auraBalDailyMintSeries);
    const cumulativeCompounderAuraBAL = cumulativeTokenSupply(0, auraNetCompounderDeposits)

    //--------DATA--------
    const auraBALCompounderRatio = 100 / auraBalPoolLeaderboard.totalStaked * auraBalVaultLeaderboard.totalStaked
    // Calculate average daily harvest amount
    let averageDailyHarvestAmount = 0
    let averageDailyDepositAmount = 0
    let averageDailyHarvestsChange = 0

    if (auraBALTransactions && auraBALTransactions.harvests && auraBALTransactions.harvests.length > 0) {
        const totalHarvestedAmount: number = auraBALTransactions.harvests.reduce((acc: number, harvestInfo: AuraVaultHarvestTransactionInfo) => {
            return acc + harvestInfo.harvested;
        }, 0);
        const numDaysSinceFirstHarvest: number = (Date.now() / 1000 - auraBALTransactions.harvests[0].timestamp) / 86400;
        averageDailyHarvestAmount = totalHarvestedAmount / numDaysSinceFirstHarvest;


        // Calculate average daily deposits and harvest frequency
        const totalDepositedAmount: number = auraBALTransactions.deposits.reduce((acc: number, depositInfo: AuraVaultDepositWithdrawTransactionInfo) => {
            return acc + depositInfo.shares;
        }, 0);
        const numDaysSinceFirstDeposit: number = (Date.now() - new Date(auraBALTransactions.deposits[0].timestamp).getTime()) / (1000 * 60 * 60 * 24);
        averageDailyDepositAmount = totalDepositedAmount / numDaysSinceFirstDeposit;

        // Calculate 24h trend as a percentage
        averageDailyHarvestsChange = ((auraBalDailyHarvestSeries[auraBalDailyHarvestSeries.length - 1].value / auraBalDailyHarvestSeries[auraBalDailyHarvestSeries.length - 2].value) - 1) * 100;
    }


    return (
        <Box sx={{flexGrow: 2}}>
            <Grid
                container
                spacing={2}
                sx={{justifyContent: 'center'}}
            >
                <Grid item xs={11} sm={9}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <NavCrumbs crumbSet={navCrumbs} destination={'auraBAL'}/>
                    </Box>

                </Grid>
                <Grid item xs={11} sm={9}>
                    <Box>
                        <div style={{position: "relative"}}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={theme.palette.mode === 'dark' ? auraBalBannerDark : auraBalBannerLight}
                                alt="SP Image"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    color: "white",
                                    top: '10%',
                                    left: "50%",
                                    transform: "translateX(-50%)"
                                }}>
                                <Typography
                                    sx={{fontSize: '24px'}}
                                    color={theme.palette.mode === 'dark' ? 'white' : '#9C4ED6'}
                                >
                                    AuraBAL on {activeNetwork.name}
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Global Metrics</Typography>
                    </Box>
                    <Grid
                        container
                        columns={{xs: 4, sm: 8, md: 12}}
                        sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                    >
                        <Box m={1}>
                            {coinData && coinData[auraBALMainnet] && coinData[auraBALMainnet].usd ?
                                <CoinCard
                                    tokenAddress={auraBALMainnet}
                                    tokenName='auraBAL'
                                    tokenPrice={coinData[auraBALMainnet].usd}
                                    tokenPriceChange={coinData[auraBALMainnet].usd_24h_change}

                                />
                                : <CircularProgress/>}
                        </Box>
                        <Box m={1}>
                            {auraGlobalStats ?
                                <MetricsCard
                                    mainMetric={auraGlobalStats ? auraGlobalStats.auraBALTotalSupply : 0}
                                    mainMetricInUSD={false}
                                    metricName='Total Supply'
                                    mainMetricUnit=' auraBAL'
                                    mainMetricChange={0}
                                    MetricIcon={TokenIcon}
                                />
                                : <CircularProgress/>}
                        </Box>

                    </Grid>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Historical auraBAL Supply</Typography>
                    </Box>
                    <Card>
                        <AuraBALMultiAreaChart
                            mintedAuraBAL={cumulativeAuraBAL}
                            stakedAuraBAL={cumulativeAuraBAL}
                            compounderAuraBAL={cumulativeCompounderAuraBAL}
                        />
                    </Card>
                </Grid>
                {tokenData ?
                    <Grid item xs={11} sm={9}>
                        <Box mb={1}>
                            <Typography sx={{fontSize: '24px'}}>Balancer Metrics</Typography>
                        </Box>
                        <Grid
                            container
                            columns={{xs: 4, sm: 8, md: 12}}
                            sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                        >
                            <Box m={1}>
                                <MetricsCard
                                    mainMetric={tokenData ? tokenData.volumeUSD : 0}
                                    mainMetricInUSD={true}
                                    metricName='auraBAL Volume'
                                    mainMetricChange={tokenData.volumeUSDChange}
                                    MetricIcon={EqualizerIcon}
                                />
                            </Box>
                            <Box m={1}>
                                <MetricsCard
                                    mainMetric={tokenData.tvlUSD}
                                    mainMetricInUSD={true}
                                    metricName='auraBAL TVL'
                                    mainMetricChange={tokenData.tvlUSDChange * 100}
                                    MetricIcon={MonetizationOnIcon}
                                />
                            </Box>
                            <Box m={1}>
                                <MetricsCard
                                    mainMetric={tokenData.txCount}
                                    mainMetricInUSD={false}
                                    metricName='auraBAL Swaps'
                                    mainMetricChange={0}
                                    MetricIcon={SwapHorizontalCircleIcon}

                                />
                            </Box>
                        </Grid>
                    </Grid> :
                    <Grid
                        container
                        spacing={2}
                        mt='25%'
                        sx={{justifyContent: 'center'}}
                    >
                        <CustomLinearProgress/>
                    </Grid>}
            </Grid>
            <Grid
                container
                spacing={3}
                sx={{justifyContent: 'center'}}
            >
                <Grid item xs={11} sm={9} mt={2}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Deployed Liquidity Metrics</Typography>
                    </Box>
                    <Box>
                        <Card>
                            <TokenChart tvlData={tvlData} volumeData={volumeData} priceData={priceData}/>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>auraBAL: Deployed Balancer Pools</Typography>
                    </Box>
                    <PoolTable poolDatas={poolData}/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{justifyContent: 'center'}}
            >

                <Grid item mt={1} xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Daily AuraBAL Mints</Typography>
                    </Box>
                    <Card sx={{boxShadow: 3}}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericBarChart data={auraBalDailyMintSeries} customUnit={'auraBAL'}/>
                    </Card>
                </Grid>
                {/* <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Top 20 auraBAL Stakers</Typography>
                    </Box>
                    <Card>
                        <GenericPieChart data={auraBALPieChartData} height={'350px'} isNotUSD={true}/>
                    </Card>

                </Grid>
                */}
                <Grid item mt={1} xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Top Depositors</Typography>
                    </Box>

                    <Box p={1} display="flex" alignItems='center'>

                    </Box>
                    <AuraPoolLeaderboardTable leaderboardInfo={activeNetwork === EthereumNetworkInfo ? auraBalPoolLeaderboard : auraBalVaultLeaderboard}/>

                </Grid>
            </Grid>
            <Grid
                mt={2}
                container
                spacing={2}
                sx={{justifyContent: 'center'}}
            >
                <Grid item xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>auraBAL Compounder Stats</Typography>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Grid

                        container
                        columns={{xs: 4, sm: 8, md: 12}}
                        sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                    >
                        <Box m={1}>
                            {auraBalDailyHarvestSeries.length > 0 ?
                                <MetricsCard
                                    mainMetric={auraBalDailyHarvestSeries[auraBalDailyHarvestSeries.length - 1].value ? auraBalDailyHarvestSeries[auraBalDailyHarvestSeries.length - 1].value : 0}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' auraBAL'
                                    metricName='Harvests Today'
                                    mainMetricChange={averageDailyHarvestsChange}
                                    MetricIcon={AgricultureIcon}
                                />
                                : <CircularProgress/>}
                        </Box>
                        <Box m={1}>
                            {auraBALCompounderRatio > 0 ?
                                <MetricsCard
                                    mainMetric={averageDailyHarvestAmount}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' auraBAL'
                                    metricName='Avg Daily Harvest'
                                    mainMetricChange={0}
                                    MetricIcon={AgricultureIcon}
                                />
                                : <CircularProgress/>}
                        </Box>
                        <Box m={1}>
                            {averageDailyDepositAmount > 0 ?
                                <MetricsCard
                                    mainMetric={averageDailyDepositAmount}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' auraBAL'
                                    metricName='Avg Daily Deposits'
                                    mainMetricChange={0}
                                    MetricIcon={ArrowCircleDownIcon}
                                />
                                : <CircularProgress/>}
                        </Box>
                        <Box m={1}>
                            {auraBALCompounderRatio > 0 && activeNetwork === EthereumNetworkInfo ?
                                <MetricsCard
                                    mainMetric={auraBALCompounderRatio}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' %'
                                    metricName='Compounder Ratio'
                                    mainMetricChange={0}
                                    MetricIcon={PieChartIcon}
                                />
                                : null}
                        </Box>

                    </Grid>
                </Grid>
                <Grid item mt={1} xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Daily Vault Harvests</Typography>
                    </Box>
                    <Card sx={{boxShadow: 3}}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericBarChart data={auraBalDailyHarvestSeries} customUnit={'auraBAL'}/>
                    </Card>
                </Grid>
                <Grid item mt={1} xs={11} sm={9}>
                    <Box mb={1}>
                        <Typography sx={{fontSize: '24px'}}>Historical auraBAL in Compounder</Typography>
                    </Box>
                    <Card sx={{boxShadow: 3}}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericAreaChart
                            chartData={cumulativeCompounderAuraBAL}
                            dataTitle={"compounder"}
                            format={"auraBAL"}
                        />
                    </Card>
                </Grid>

                {/* <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Top 20 Autocompounder Stakers</Typography>
                    </Box>
                    <Card>
                        <GenericPieChart data={auraBALVaultPieChartData} height={'350px'} isNotUSD={true}/>
                    </Card>

                </Grid> */}
            </Grid>
        </Box>
    );
}
