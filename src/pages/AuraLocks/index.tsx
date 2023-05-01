import Box from '@mui/material/Box';
import {Grid, Typography, CircularProgress, Card} from '@mui/material';
import {useParams} from "react-router-dom";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useGetLeadingLockers} from "../../data/aura/useLockers";
import LockerTable from "../../components/Tables/LockerTable";
import LockedAuraCard from "../../components/Cards/LockedAuraCard";
import TopLockerCard from "../../components/Cards/TopLockerCard";
import {BalancerChartDataItem, BalancerPieChartDataItem} from "../../data/balancer/balancerTypes";
import {shortenAddress} from "../../utils";
import AuraLockerPieChart from "../../components/Echarts/AuraLockerPieChart";
import {useCoinGeckoSimpleTokenPrices} from "../../data/coingecko/useCoinGeckoSimpleTokenPrices";
import * as React from "react";
import {useEffect} from "react";
import {ethers} from "ethers";
import {useLockerLeaderboardQuery} from "../../apollo/generated/graphql-codegen-generated";
import {LockerAccount} from "../../data/aura/auraTypes";

const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';

export default function AuraLocks() {
    const params = useParams();
    const [activeNetwork] = useActiveNetworkVersion();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {loading, data, error} = useLockerLeaderboardQuery();
    const lockerArray : LockerAccount[] = []
    const [topLockers, setTopLockers] = React.useState(lockerArray);
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const ensDict: { [key: string]: string | null } = {};
    const [ensMap, setEnsMap] = React.useState(ensDict);

    React.useEffect(() => {
        if (data) {
            let {auraLockerLeaderboard} = data;

            if (auraLockerLeaderboard) {
                let accounts = auraLockerLeaderboard["accounts"];
                const tops = accounts.map((locker) => {
                    return {
                        balanceLocked: locker.balanceLocked,
                        id: locker.id,
                    }
                });
                const enslocalMap = {...ensMap}
                for (let x = page * rowsPerPage; x <= page * rowsPerPage + rowsPerPage - 1; x++) {
                    let account = tops[x]
                    const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_URL);
                    if (ensMap[account.id] === undefined) {
                        provider.lookupAddress(account.id).then(response => {
                            console.log("Query: ");
                            console.log(account.id);

                            enslocalMap[account.id] = response;
                        })
                    }
                }
                setEnsMap(enslocalMap);
                setTopLockers(tops);
            }
        }
    }, [data,page])

    useEffect(() => {
        const enslocalMap = {...ensMap}
        if (topLockers.length > 0) {
            for (let x = page * rowsPerPage; x <= page * rowsPerPage + rowsPerPage - 1; x++) {
                let account = topLockers[x]
                const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_URL);
                console.log(ensMap)
                if (ensMap[account.id] === undefined) {
                    provider.lookupAddress(account.id).then(response => {
                        console.log("Query: ");
                        console.log(account.id);

                        enslocalMap[account.id] = response;
                    })
                }
            }
            setEnsMap(enslocalMap);
        }
    }, [])


    let totalLockedAmount = topLockers.reduce((a, b) => a + Number(b.balanceLocked), 0);
    totalLockedAmount = totalLockedAmount / 10 ** 18;

    let tokenBarChartData: BalancerChartDataItem[] = [];
    topLockers.map((locker) =>
        tokenBarChartData.push(
            {
                value: Number(((100 / totalLockedAmount) * Math.round(Number(locker.balanceLocked) / 10 ** 18)).toFixed(2)),
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
                <Grid item mt={1} xs={11}>
                    <Grid item xs={11} mt={1}>
                        <Typography variant="h5" mb={1}>Top Lockers</Typography>
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
                                {topLockers.length > 0 ?
                                    <TopLockerCard address={topLockers[0].id} lockedAmount={topLockers[0].balanceLocked}
                                                   place={"First"}/> : <CircularProgress/>}
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={7}
                            md={5}

                        >
                            <Card
                                sx={{boxShadow: 3}}
                            >
                                <AuraLockerPieChart data={filteredPieChartData} height='350px'/>
                            </Card>

                        </Grid>
                    </Grid>
                    <LockerTable lockerAccounts={topLockers}
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