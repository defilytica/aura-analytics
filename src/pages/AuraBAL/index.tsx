import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'
import NavCrumbs, { NavElement } from '../../components/NavCrumbs';
import { Grid, Typography, List, ListItem, CardMedia, Card, CircularProgress } from '@mui/material';
import { useAuraPools } from '../../data/aura/useAuraPools';
import { useAuraBalMints } from '../../data/aura/useAuraBalMints';
import { useAuraBalTransactions } from '../../data/aura/useAuraBalTransactions';
import { useAuraGlobalStats } from '../../data/aura/useAuraGlobalStats';
import { BalancerChartDataItem } from '../../data/balancer/balancerTypes';
import GenericBarChart from '../../components/Echarts/GenericBarChart';
import { useCoinGeckoSimpleTokenPrices } from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import { useAuraPoolLeaderboardInfo } from '../../data/aura/useAuraPoolLeaderboard';
import { AuraBALTransactions, AuraVaultDepositWithdrawTransactionInfo, AuraVaultHarvestTransactionInfo, PositionInfo } from '../../data/aura/auraTypes';
import { BalancerPieChartDataItem } from '../../data/balancer/balancerTypes'
import GenericPieChart from '../../components/Echarts/GenericPieChart';
import { useAuraVaultLeaderboardInfo } from '../../data/aura/useAuraVaultLeaderboard';
import { useActiveNetworkVersion } from '../../state/application/hooks';
import MetricsCard from '../../components/Cards/MetricsCard';
import TokenIcon from '@mui/icons-material/Token';
import PieChartIcon from '@mui/icons-material/PieChart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';





export default function AuraBAL() {

    const theme = useTheme();
    const auraBALAddress = '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d'
    const auraBALVaultAddress = "0xfaa2ed111b4f580fcb85c48e6dc6782dc5fcd7a6"
    const coinData = useCoinGeckoSimpleTokenPrices([auraBALAddress]);
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
    const [activeNetwork] = useActiveNetworkVersion();
    const auraBalMints = useAuraBalMints();
    const auraBALTransactions = useAuraBalTransactions();
    const auraGlobalStats = useAuraGlobalStats();
    const auraBalPoolLeaderboard = useAuraPoolLeaderboardInfo("auraBal");
    //auraBAL vault
    const auraBalVaultLeaderboard = useAuraVaultLeaderboardInfo(auraBALVaultAddress)

    console.log("aurabaltransactions", auraBALTransactions)


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

    //--------DATA--------
    //AuraBAL Top 20 Stakers: TODO: also pass ens name if applicable
    const auraBALPieChartData: BalancerPieChartDataItem[] = auraBalPoolLeaderboard.leaderboard.map((positionInfo: PositionInfo) => {
        const value = positionInfo.stakedAmount;
        const name = positionInfo.accountId;
        return { value, name };
    }).slice(0, 20);

    //AuraBAL Top 20 Stakers: TODO: also pass ens name if applicable
    const auraBALVaultPieChartData: BalancerPieChartDataItem[] = auraBalVaultLeaderboard.leaderboard.map((positionInfo: PositionInfo) => {
        const value = positionInfo.stakedAmount;
        const name = positionInfo.accountId;
        return { value, name };
    }).slice(0, 20);

    const auraBALCompounderRatio = 100 / auraBalPoolLeaderboard.totalStaked * auraBalVaultLeaderboard.totalStaked

    //AuraBAL Autocompounder stats
    //1. calcuate average daily harvest amount and frequency

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
        <Box sx={{ flexGrow: 2 }}>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item xs={11}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <NavCrumbs crumbSet={navCrumbs} destination={'auraBAL'} />
                    </Box>

                </Grid>
                <Grid item xs={11}>
                    <Box>
                        <div style={{ position: "relative" }}>
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
                                    variant='h4'
                                    color={theme.palette.mode === 'dark' ? 'white' : '#9C4ED6'}
                                >
                                    AuraBAL Statistics
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={11}>
                    <Grid
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ justifyContent: { md: 'flex-start', xs: 'center' }, alignContent: 'center' }}
                    >
                        <Box m={1}>
                            {coinData && coinData[auraBALAddress] && coinData[auraBALAddress].usd ?
                                <CoinCard
                                    tokenAddress={auraBALAddress}
                                    tokenName='auraBAL'
                                    tokenPrice={coinData[auraBALAddress].usd}
                                    tokenPriceChange={coinData[auraBALAddress].usd_24h_change}

                                />
                                : <CircularProgress />}
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
                                : <CircularProgress />}
                        </Box>

                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >

                <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Daily AuraBAL Mints</Typography>
                    </Box>
                    <Card sx={{ boxShadow: 3 }}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericBarChart data={auraBalDailyMintSeries} customUnit={'auraBAL'} />
                    </Card>
                </Grid>
                <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Top 20 auraBAL Stakers</Typography>
                    </Box>
                    <Card>
                        <GenericPieChart data={auraBALPieChartData} height={'350px'} isNotUSD={true} />
                    </Card>

                </Grid>
            </Grid>


            <Grid
                mt={2}
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item xs={11}>
                    <Box mb={1}>
                        <Typography variant="h5">auraBAL Compounder Stats</Typography>
                    </Box>
                </Grid>
                <Grid item xs={11}>
                    <Grid

                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ justifyContent: { md: 'flex-start', xs: 'center' }, alignContent: 'center' }}
                    >
                        <Box m={1}>
                            {auraBalDailyHarvestSeries.length > 0 && averageDailyHarvestsChange ?
                                <MetricsCard
                                    mainMetric={auraBalDailyHarvestSeries[auraBalDailyHarvestSeries.length - 1].value}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' auraBAL'
                                    metricName='Daily Harvest'
                                    mainMetricChange={averageDailyHarvestsChange}
                                    MetricIcon={AgricultureIcon}
                                />
                                : <CircularProgress />}
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
                                : <CircularProgress />}
                        </Box>
                        <Box m={1}>
                            {auraBALCompounderRatio > 0 ?
                                <MetricsCard
                                    mainMetric={averageDailyDepositAmount}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' auraBAL'
                                    metricName='Avg Daily Deposits'
                                    mainMetricChange={0}
                                    MetricIcon={ArrowCircleDownIcon}
                                />
                                : <CircularProgress />}
                        </Box>
                        <Box m={1}>
                            {auraBALCompounderRatio > 0 ?
                                <MetricsCard
                                    mainMetric={auraBALCompounderRatio}
                                    mainMetricInUSD={false}
                                    mainMetricUnit=' %'
                                    metricName='Compounder Ratio'
                                    mainMetricChange={0}
                                    MetricIcon={PieChartIcon}
                                />
                                : <CircularProgress />}
                        </Box>

                    </Grid>
                </Grid>
                <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Daily Vault Harvests</Typography>
                    </Box>
                    <Card sx={{ boxShadow: 3 }}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericBarChart data={auraBalDailyHarvestSeries} customUnit={'auraBAL'} />
                    </Card>
                </Grid>
                <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Daily Vault Deposits</Typography>
                    </Box>
                    <Card sx={{ boxShadow: 3 }}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericBarChart data={auraBalDailyDepositSeries} customUnit={'auraBAL'} />
                    </Card>
                </Grid>
                <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Daily Vault Withdrawals</Typography>
                    </Box>
                    <Card sx={{ boxShadow: 3 }}>
                        <Box p={1} display="flex" alignItems='center'>

                        </Box>
                        <GenericBarChart data={auraBalDailyWithdrawalSeries} customUnit={'auraBAL'} />
                    </Card>
                </Grid>
                <Grid item mt={1} xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Top 20 Autocompounder Stakers</Typography>
                    </Box>
                    <Card>
                        <GenericPieChart data={auraBALVaultPieChartData} height={'350px'} isNotUSD={true} />
                    </Card>

                </Grid>
            </Grid>
        </Box>
    );
}