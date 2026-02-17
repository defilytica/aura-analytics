import Box from '@mui/material/Box';
import {Card, CircularProgress, Grid, Typography} from '@mui/material';
import {useGetLeadingLockers} from "../../data/aura/useAuraLockers";
import LockerTable from "../../components/Tables/LockerTable";
import TopLockerCard from "../../components/Cards/TopLockerCard";
import {BalancerChartDataItem} from "../../data/balancer/balancerTypes";
import {shortenAddress} from "../../utils";
import {useCoinGeckoSimpleTokenPrices} from "../../data/coingecko/useCoinGeckoSimpleTokenPrices";
import * as React from "react";
import {ethers} from "ethers"
import GenericBarChart from "../../components/Echarts/GenericBarChart";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import {ChartDataItem, PastUnlocksWithdrawalsChart,} from "../../components/Echarts/PastUnlocksWithdrawalBarChart";
import {
    PastUnlocksWithdrawalPercentageBarChart
} from "../../components/Echarts/PastUnlocksWithdrawalPercentageBarChart";
import MetricsCard from "../../components/Cards/MetricsCard";
import AuraIcon from '../../assets/png/AURA_ISO_colors.png'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CustomLinearProgress from "../../components/Progress/CustomLinearProgress";
import AuraDailyUnlocksChart from "../../components/Echarts/AuraDailyUnlocksChart";
import {useAuraGlobalStats} from "../../data/aura/useAuraGlobalStats";
import useGetSimpleTokenPrices from "../../data/balancer-api-v3/useGetSimpleTokenPrices";
import {GqlChain} from "../../apollo/generated/graphql-codegen-generated";
import {isMobile} from "react-device-detect";


const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

export default function AuraLocks() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const lockers = useGetLeadingLockers();
    //const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const coinData = useGetSimpleTokenPrices([auraAddress], "MAINNET" as GqlChain);
    const auraGlobalStats = useAuraGlobalStats();
    let unlockAmounts: BalancerChartDataItem[] = [];
    let filteredChartData: ChartDataItem[] = []

    //Navigation
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)

    const getWeekStart = (date: Date) => {
        const weekStart = new Date(date);
        weekStart.setUTCDate(date.getUTCDate() - date.getUTCDay());
        weekStart.setUTCHours(0, 0, 0, 0);
        return weekStart;
    };

    if (lockers && lockers.length > 0) {
        const weeklyUnlockAmounts: { [key: string]: number } = {};
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 7 * 16);

        const pastUnlockAmounts: { [key: string]: { unlock: number; withdraw: number; relocked: number } } = {};



        lockers.forEach(account => {
            account.userLocks.forEach(lock => {
                const unlockDate = new Date(lock.unlockTime * 1000);
                const unlockTimestamp = unlockDate.getTime();
                const todayTimestamp = today.getTime();
                const futureDateTimestamp = futureDate.getTime();

                if (unlockTimestamp >= todayTimestamp && unlockTimestamp < futureDateTimestamp) {
                    const weekDifference = Math.floor((unlockTimestamp - todayTimestamp) / (7 * 24 * 60 * 60 * 1000));
                    const weekStart = new Date(today);
                    weekStart.setDate(today.getDate() + 7 * weekDifference);
                    const weekKey = weekStart.toISOString();

                    if (!weeklyUnlockAmounts[weekKey]) {
                        weeklyUnlockAmounts[weekKey] = 0;
                    }
                    const amountInEther = parseFloat(ethers.utils.formatEther(lock.amount));
                    weeklyUnlockAmounts[weekKey] += amountInEther;
                }
            });

            account.userLocks.forEach(lock => {
                const unlockDate = new Date(lock.unlockTime * 1000);
                if (unlockDate < today) {
                    const weekStart = getWeekStart(unlockDate);
                    const weekKey = weekStart.toISOString().split('T')[0];
                    if (!pastUnlockAmounts[weekKey]) {
                        pastUnlockAmounts[weekKey] = {unlock: 0, withdraw: 0, relocked: 0};
                    }
                    const amountInEther = parseFloat(ethers.utils.formatEther(lock.amount.toString()));
                    pastUnlockAmounts[weekKey].unlock += amountInEther;
                }
            });

            account.withdrawnTransactions.forEach(transaction => {
                const withdrawDate = new Date(transaction.timestamp * 1000);
                if (withdrawDate < today) {
                    const weekStart = getWeekStart(withdrawDate);
                    const weekKey = weekStart.toISOString().split('T')[0];
                    if (!pastUnlockAmounts[weekKey]) {
                        pastUnlockAmounts[weekKey] = {unlock: 0, withdraw: 0, relocked: 0};
                    }
                    const amountInEther = parseFloat(ethers.utils.formatEther(transaction.amount.toString()));
                    pastUnlockAmounts[weekKey].withdraw += amountInEther;
                    if (transaction.relocked) {
                        pastUnlockAmounts[weekKey].relocked += amountInEther;
                    }
                }
            });

        });

        unlockAmounts = Array.from({length: 16}, (_, i) => {
            const weekStart = new Date(today);
            weekStart.setDate(today.getDate() + 7 * i);
            const weekKey = weekStart.toISOString();
            const localeDateString = weekStart.toLocaleDateString();
            return {
                time: localeDateString,
                value: weeklyUnlockAmounts[weekKey] || 0,
            };
        });

        const chartData = Object.keys(pastUnlockAmounts).map(dateKey => ({
            date: dateKey,
            unlock: pastUnlockAmounts[dateKey].unlock,
            withdraw: pastUnlockAmounts[dateKey].withdraw - pastUnlockAmounts[dateKey].relocked,
            relocked: pastUnlockAmounts[dateKey].relocked,
        }));

        filteredChartData = chartData.filter(item => item.withdraw > 0 || item.relocked > 0);
        filteredChartData = filteredChartData.sort((a, b) => +new Date(a.date) - +new Date(b.date));
    }


    const totalLockedAmount = auraGlobalStats ? auraGlobalStats?.auraTotalLockedAmount : 0;

    let tokenBarChartData: BalancerChartDataItem[] = [];
    lockers.map((locker) =>
        tokenBarChartData.push(
            {
                value: ((100 / totalLockedAmount) * Math.round(locker.balanceLocked)),
                time: shortenAddress(locker.id),
            }
        )
    )

    tokenBarChartData = tokenBarChartData.slice(0, 19);

    // Generate the dailyUnlocks array
    const dailyUnlocks: BalancerChartDataItem[] = [];
    lockers.forEach((locker) => {
        locker.withdrawnTransactions.forEach((transaction) => {
            const transactionDate = new Date(transaction.timestamp * 1000); // Convert to Unix timestamp format
            transactionDate.setHours(0, 0, 0, 0); // Set time to 00:00:00:00

            const existingUnlock = dailyUnlocks.find(
                (item) => item.time === transactionDate.toISOString()
            );

            if (existingUnlock) {
                existingUnlock.value += parseFloat(ethers.utils.formatEther(transaction.amount.toString()));
            } else {
                dailyUnlocks.push({
                    time: transactionDate.toISOString(),
                    value: parseFloat(ethers.utils.formatEther(transaction.amount.toString())),
                });
            }
        });
    });

   const sortedUnlocks = dailyUnlocks.sort((a, b) => +new Date(a.time) - +new Date(b.time));
   sortedUnlocks.forEach((el) =>{
       el.time = new Date(el.time).toLocaleDateString()
   })

// Generate the cumulativeUnlocks array
    const cumulativeUnlocks: BalancerChartDataItem[] = [];
    let cumulativeSum = 0;

    sortedUnlocks.forEach((item) => {
        cumulativeSum += item.value;
        cumulativeUnlocks.push({
            time: item.time,
            value: cumulativeSum,
        });
    });

    console.log("dailyUnlocks", sortedUnlocks)


    return (
        totalLockedAmount && filteredChartData.length > 1 ? (
                <Box sx={{flexGrow: 2}}>
                    <Grid
                        container
                        spacing={2}
                        sx={{justifyContent: 'center'}}
                    >
                        <Grid item xs={11} sm={9}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <NavCrumbs crumbSet={navCrumbs} destination={'auraLocks'}/>
                            </Box>

                        </Grid>
                        <Grid item xs={11} sm={9} mt={1}>
                            <Typography sx={{fontSize: '24px',}} mb={1}>Global Aura Locking Stats</Typography>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{xs: 4, sm: 8, md: 12}}
                                sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
                            >
                                <Box m={1}>
                                    <MetricsCard mainMetric={totalLockedAmount} mainMetricInUSD={false}
                                                 metricName={'Total Aura Locked'} MetricIcon={SelfImprovementIcon}
                                                 svgContent={AuraIcon}/>
                                </Box>
                                <Box m={1}>
                                    <MetricsCard
                                        mainMetric={filteredChartData[filteredChartData.length - 1].unlock}
                                        mainMetricChange={(filteredChartData[filteredChartData.length - 2].unlock - filteredChartData[filteredChartData.length - 1].unlock) / filteredChartData[filteredChartData.length - 2].unlock * 100}
                                        mainMetricChangeRange={'7d'}
                                        mainMetricInUSD={false}
                                        metricName={'Weekly Unlocks'}
                                        MetricIcon={KeyOffIcon}/>
                                </Box>
                                <Box m={1}>
                                    <MetricsCard
                                        mainMetric={filteredChartData[filteredChartData.length - 1].relocked}
                                        mainMetricChange={(filteredChartData[filteredChartData.length - 2].relocked - filteredChartData[filteredChartData.length - 1].relocked) / filteredChartData[filteredChartData.length - 2].relocked * 100}
                                        mainMetricChangeRange={'7d'}
                                        mainMetricInUSD={false}
                                        metricName={'Weekly Relocks'}
                                        MetricIcon={SelfImprovementIcon}/>
                                </Box>
                                <Box m={1}>
                                    <MetricsCard
                                        mainMetric={filteredChartData[filteredChartData.length - 1].withdraw}
                                        mainMetricChange={(filteredChartData[filteredChartData.length - 2].withdraw - filteredChartData[filteredChartData.length - 1].withdraw) / filteredChartData[filteredChartData.length - 2].withdraw * 100}
                                        mainMetricChangeRange={'7d'}
                                        mainMetricInUSD={false}
                                        metricName={'Weekly Withdrawals'}
                                        MetricIcon={AccountBalanceWalletIcon}/>
                                </Box>
                            </Grid>
                        </Grid>
                        {/*
                <Grid
                    item
                    xs={11} sm={9}
                >
                    <Card
                        sx={{boxShadow: 3}}
                    >
                        <AuraLockerPieChart data={filteredPieChartData} height='350px'/>
                    </Card>
                </Grid>
                */}
                        <Grid item xs={11} sm={9}>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '24px'}}>Cumulative Daily Unlocks</Typography>
                            </Box>
                            <Card sx={{boxShadow: 3}}>
                                <AuraDailyUnlocksChart
                                    dollarPerVlAssetData={cumulativeUnlocks.map(el => el.value)}
                                    totalAmountDollarsData={sortedUnlocks.map(el => el.value)}
                                    xAxisData={sortedUnlocks.map(el => el.time)}
                                    height="400px" />
                            </Card>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '24px'}}>Weekly Aura Unlocks</Typography>
                            </Box>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '12px'}}>
                                    Aggregated weekly amount of Aura that can be removed from the Aura Locker.
                                </Typography>
                            </Box>
                            <Card sx={{boxShadow: 3}}>
                                <GenericBarChart data={unlockAmounts} customUnit={'vlAura'}/>
                            </Card>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '24px'}}>Weekly Aura Re-Locks vs Withdrawals</Typography>
                            </Box>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '12px'}}>
                                    Relationship analysis of weekly unlocks vs withdrawals to infer Aura locker retention.
                                </Typography>
                            </Box>
                            <Card sx={{boxShadow: 3}}>
                                <PastUnlocksWithdrawalsChart filteredChartData={filteredChartData}/>
                            </Card>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '24px'}}>Weekly Percentage Aura Re-Locks vs
                                    Withdrawals</Typography>
                            </Box>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '12px'}}>
                                    Relative user retention metric to relock Aura
                                </Typography>
                            </Box>
                            <Card sx={{boxShadow: 3}}>
                                <PastUnlocksWithdrawalPercentageBarChart filteredChartData={filteredChartData}/>
                            </Card>
                        </Grid>
                        <Grid item xs={11} sm={9}>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '24px'}}>Top Depositors</Typography>
                            </Box>
                            <Box mb={1}>
                                <Typography sx={{fontSize: '12px'}}>
                                    Leaderboard of vlAura holders
                                </Typography>
                            </Box>
                            <Grid item xs={11} sm={9}>
                                <Grid
                                    container
                                    columns={{xs: 4, sm: 8, md: 12}}
                                    sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                                >
                                    <Box m={1}>
                                        {lockers.length > 0 ?
                                            <TopLockerCard address={lockers[0].id} lockedAmount={lockers[0].balanceLocked}
                                                           place={"first"}/> : <CircularProgress/>}
                                    </Box>
                                    <Box m={1}>
                                        {lockers.length > 0 ?
                                            <TopLockerCard address={lockers[1].id} lockedAmount={lockers[1].balanceLocked}
                                                           place={"second"}/> : <CircularProgress/>}
                                    </Box>
                                    <Box m={1}>
                                        {lockers.length > 0 ?
                                            <TopLockerCard address={lockers[2].id} lockedAmount={lockers[2].balanceLocked}
                                                           place={"third"}/> : <CircularProgress/>}
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{
                                width: isMobile ? '430px' : 'auto',
                                maxWidth: '100%'
                            }}>
                            <LockerTable lockerAccounts={lockers}
                                         auraUSD={coinData?.data[auraAddress].price}
                                         totalAmountLocked={totalLockedAmount}
                                         page={page}
                                         setPage={setPage}
                                         rowsPerPage={rowsPerPage}
                                         setRowsPerPage={setRowsPerPage}
                                         />
                            </Box>
                        </Grid>
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
