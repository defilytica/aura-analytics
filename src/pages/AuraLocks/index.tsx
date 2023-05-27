import Box from '@mui/material/Box';
import {Card, CircularProgress, Grid, Typography} from '@mui/material';
import {useParams} from "react-router-dom";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useGetLeadingLockers} from "../../data/aura/useAuraLockers";
import LockerTable from "../../components/Tables/LockerTable";
import LockedAuraCard from "../../components/Cards/LockedAuraCard";
import TopLockerCard from "../../components/Cards/TopLockerCard";
import {BalancerChartDataItem, BalancerPieChartDataItem} from "../../data/balancer/balancerTypes";
import {shortenAddress} from "../../utils";
import AuraLockerPieChart from "../../components/Echarts/AuraLockerPieChart";
import {useCoinGeckoSimpleTokenPrices} from "../../data/coingecko/useCoinGeckoSimpleTokenPrices";
import * as React from "react";
import {ethers} from "ethers"
import GenericBarChart from "../../components/Echarts/GenericBarChart";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import {ChartDataItem, PastUnlocksWithdrawalsChart,} from "../../components/Echarts/PastUnlocksWithdrawalBarChart";
import {PastUnlocksWithdrawalPercentageBarChart} from "../../components/Echarts/PastUnlocksWithdrawalPercentageBarChart";

const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

export default function AuraLocks() {
    const params = useParams();
    const [activeNetwork] = useActiveNetworkVersion();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const lockers = useGetLeadingLockers();
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const ensDict: { [key: string]: string | null } = {};
    const [ensMap, setEnsMap] = React.useState(ensDict);
    let unlockAmounts: BalancerChartDataItem[] = [];
    let filteredChartData : ChartDataItem[] = []

    //Navigation
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)


    if (lockers && lockers.length > 0) {
        const weeklyUnlockAmounts: { [key: string]: number } = {};
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 7 * 16);

        const pastUnlockAmounts: { [key: string]: { unlock: number; withdraw: number; relocked: number } } = {};

        const getWeekStart = (date: Date) => {
            const weekStart = new Date(date);
            weekStart.setUTCDate(date.getUTCDate() - date.getUTCDay());
            weekStart.setUTCHours(0, 0, 0, 0);
            return weekStart;
        };

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

            // Process past withdrawn transactions
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
            withdraw: pastUnlockAmounts[dateKey].withdraw,
            relocked: pastUnlockAmounts[dateKey].relocked,
        }));

        filteredChartData = chartData.filter(item => item.withdraw > 0 || item.relocked > 0);
        filteredChartData = filteredChartData.sort((a, b) => +new Date(a.date) - +new Date(b.date));


        console.log(filteredChartData);
    }


    React.useEffect(() => {
        if (lockers && lockers.length > 0) {
            const enslocalMap = {...ensMap};
            console.log(lockers);
            for (let x = page * rowsPerPage; x <= page * rowsPerPage + rowsPerPage - 1; x++) {
                let account = lockers[x]
                const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_URL);
                if (ensMap[account.id] === undefined) {
                    provider.lookupAddress(account.id).then(response => {
                        console.log("Query: ");
                        console.log(account.id);
                        console.log(response);
                        enslocalMap[account.id] = response;
                    })
                }
            }
            setEnsMap(enslocalMap);
        }
    }, [page]);


    let totalLockedAmount = lockers.reduce((a, b) => a + Number(b.balanceLocked), 0);

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
    const filteredPieChartData: BalancerPieChartDataItem[] = tokenBarChartData.map(({value, time}) => ({
        value: value,
        name: time,
    }))



    return (
        <Box sx={{flexGrow: 2}}>
            <Grid
                container
                spacing={2}
                sx={{justifyContent: 'center'}}
            >
                <Grid item xs={11}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <NavCrumbs crumbSet={navCrumbs} destination={'auraLocks'}/>
                    </Box>

                </Grid>
                <Grid item xs={11} mt={1}>
                    <Typography variant="h6" mb={1}>Top Lockers</Typography>
                </Grid>
                <Grid item xs={11}>
                    <Grid
                        container
                        columns={{xs: 4, sm: 8, md: 12}}
                        sx={{justifyContent: {md: 'flex-start', xs: 'center'}, alignContent: 'center'}}
                    >
                        <Box m={1}>
                            {coinData && coinData[auraAddress] && coinData[auraAddress].usd ?
                                <LockedAuraCard totalLockedAmount={totalLockedAmount} coinData={coinData}/>
                                : <CircularProgress/>}
                        </Box>
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
                <Grid
                    item
                    xs={11}
                >
                    <Card
                        sx={{boxShadow: 3}}
                    >
                        <AuraLockerPieChart data={filteredPieChartData} height='350px'/>
                    </Card>
                </Grid>
                <Grid item xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Weekly Aura Unlocks</Typography>
                    </Box>
                    <Card sx={{boxShadow: 3}}>
                        <GenericBarChart data={unlockAmounts} customUnit={'vlAura'}/>
                    </Card>
                </Grid>
                <Grid item xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Weekly Aura Re-Locks</Typography>
                    </Box>
                    <Card sx={{boxShadow: 3}}>
                        <PastUnlocksWithdrawalsChart filteredChartData={filteredChartData}/>
                    </Card>
                </Grid>
                <Grid item xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Weekly Aura Percentage Re-Locks</Typography>
                    </Box>
                    <Card sx={{boxShadow: 3}}>
                        <PastUnlocksWithdrawalPercentageBarChart filteredChartData={filteredChartData}/>
                    </Card>
                </Grid>
                <Grid item xs={11}>
                    <Box mb={1}>
                        <Typography variant="h6">Top Depositors</Typography>
                    </Box>
                    <LockerTable lockerAccounts={lockers}
                                 auraUSD={coinData?.[auraAddress].usd}
                                 totalAmountLocked={totalLockedAmount}
                                 page={page}
                                 setPage={setPage}
                                 rowsPerPage={rowsPerPage}
                                 setRowsPerPage={setRowsPerPage}
                                 ensMap={ensMap}/>
                </Grid>
            </Grid>
        </Box>
    );
}