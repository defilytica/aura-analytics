import Box from '@mui/material/Box';
import {Grid, Typography, CardContent, Card, CircularProgress} from '@mui/material';
import React from "react";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import TreasuryTransactionTable from "../../components/Tables/TreasuryTransactionTable";
import {useGetAddressTransactionsHistorically} from "../../data/firebase/useGetAddressTransactionsHistorically";
import {AEF, getTreasuryConfig} from "../../constants/wallets";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {TransactionHistory} from "../../data/debank/debankTypes";
import {useGetTotalBalances} from "../../data/debank/useGetTotalBalances";
import MetricsCard from "../../components/Cards/MetricsCard";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import WalletIcon from "@mui/icons-material/Wallet";
import IncomeVsSpendingMultiBarChart from "../../components/Echarts/FinancialCharts/IncomeVsSpendingsMultiBarChart";
import {extractTransactionsByTokenAndType, getMonthlyChartDataByDateRange} from "./helpers";
import GenericPieChart from "../../components/Echarts/GenericPieChart";
import {AURA_TOKEN_MAINNET} from "../../data/aura/auraConstants";
import {Handshake, HandshakeOutlined} from "@mui/icons-material";
import {USDC} from "../../constants";
import {useCoinGeckoSimpleTokenPrices} from "../../data/coingecko/useCoinGeckoSimpleTokenPrices";
import useGetSimpleTokenPrices from "../../data/balancer-api-v3/useGetSimpleTokenPrices";

export default function Financials() {
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)

    const [activeNetwork] = useActiveNetworkVersion()
    const TREASURY_CONFIG = getTreasuryConfig(activeNetwork.chainId);
    const txnHistoryTreasury: TransactionHistory | null = useGetAddressTransactionsHistorically(TREASURY_CONFIG.treasury)
    const txnHistoryAef: TransactionHistory | null = useGetAddressTransactionsHistorically(AEF)

    //const coinData = useCoinGeckoSimpleTokenPrices([AURA_TOKEN_MAINNET]);
    const coinData = useGetSimpleTokenPrices([AURA_TOKEN_MAINNET], '1');

    const {totalBalances : totalBalancesTreasury} = useGetTotalBalances(TREASURY_CONFIG.treasury);
    const {totalBalances : totalBalancesAef} = useGetTotalBalances(AEF);

    const walletTokenNetworth = totalBalancesTreasury ? totalBalancesTreasury.reduce((acc, el) => acc + el.amount * el.price, 0) : 0;

    const totalUSDCReserves = totalBalancesTreasury ? totalBalancesTreasury.find(el => {
        if (el.symbol === 'USDC') {
            return el
        }
    })?.amount : 0;

    const auraReserves = totalBalancesTreasury ? totalBalancesTreasury.find(el => {
        if (el.symbol === 'AURA') {
            return el
        }
    })?.amount : 0;

    let monthlyAURASpend;
    let pieData;
    let aefSpends;
    let aefAmountSpend : number = 0;

    if(txnHistoryAef && coinData && coinData.data[AURA_TOKEN_MAINNET]){
        let spendAefAura = extractTransactionsByTokenAndType(txnHistoryAef, AURA_TOKEN_MAINNET.toLowerCase(), 'send');
        const spendAefUsdc = extractTransactionsByTokenAndType(txnHistoryAef, USDC.address.toLowerCase(), 'send');

        spendAefAura = spendAefAura.map(transaction => {
            return { ...transaction, value: Number(transaction.value) * coinData.data[AURA_TOKEN_MAINNET].price };
        });


        aefSpends = [...spendAefAura, ...spendAefUsdc];

        aefAmountSpend = 0;
        aefSpends.forEach(transaction => {
            aefAmountSpend += Number(transaction.value);
        });
    }
    if (txnHistoryTreasury) {
        const auraSpend = extractTransactionsByTokenAndType(txnHistoryTreasury, AURA_TOKEN_MAINNET.toLowerCase(), 'send');

        const startDates: Date[] = [
            new Date(auraSpend[0].time),
        ];

        startDates.sort((a, b) => a.getTime() - b.getTime())
        let endDates: Date[] = [
            new Date(auraSpend[auraSpend.length - 1].time),
        ];
        endDates.sort((a, b) => a.getTime() - b.getTime())
        const startDate = startDates[0];
        const endDate = endDates[endDates.length - 1]

        monthlyAURASpend = getMonthlyChartDataByDateRange(auraSpend, startDate, endDate);

        let totalAuraSpend = 0;

        if (auraSpend) {
            totalAuraSpend = auraSpend.reduce((acc, transaction) => acc + transaction.value, 0);
        }

        if (auraReserves) {
            const remainingAura = auraReserves;
            const totalAura = auraReserves + totalAuraSpend;

            pieData = [
                {
                    name: 'Used AURA',
                    value: totalAuraSpend / totalAura * 100,
                },
                {
                    name: 'Remaining AURA',
                    value: remainingAura / totalAura * 100,
                },
            ];
        }
    }


    return (
        <Box sx={{flexGrow: 2}}>
            <Grid
                container
                spacing={1}
                sx={{justifyContent: 'center'}}
            >
                <Grid item xs={11} sm={9}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <NavCrumbs crumbSet={navCrumbs} destination={'DAO Financials'}/>
                    </Box>

                </Grid>
                <Grid mt={2} item xs={11} sm={9}>
                    <Box display="flex" alignItems="center">
                        <Box>
                            <Typography sx={{fontSize: '24px'}}>DAO Real-Time Financial Report Dashboard</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={9}>
                    <Grid
                        container
                        columns={{xs: 4, sm: 8, md: 12}}
                        sx={{justifyContent: {md: 'space-between', xs: 'center'}, alignContent: 'center'}}
                    >
                        <Box m={1}>
                            <MetricsCard
                                mainMetric={walletTokenNetworth ? walletTokenNetworth : 0}
                                mainMetricInUSD={true}
                                metricName='Total Liquid Reserves'
                                mainMetricChange={0}
                                MetricIcon={AccountBalanceIcon}
                            />
                        </Box>
                        <Box m={1}>
                            <MetricsCard
                                mainMetric={totalUSDCReserves ? totalUSDCReserves : 0}
                                mainMetricInUSD={true}
                                metricName='Liquid USDC'
                                mainMetricChange={0}
                                MetricIcon={CurrencyExchangeIcon}
                            />
                        </Box>
                        <Box m={1}>
                            <MetricsCard
                                mainMetric={auraReserves ? auraReserves : 0}
                                mainMetricInUSD={false}
                                mainMetricUnit={" AURA"}
                                metricName='AURA Reserves'
                                mainMetricChange={0}
                                MetricIcon={WalletIcon}
                            />
                        </Box>
                        <Box m={1}>
                            {aefSpends ?
                            <MetricsCard
                                mainMetric={aefSpends.length ? aefSpends.length : 0}
                                mainMetricInUSD={false}
                                mainMetricUnit={""}
                                metricName='AEF Payouts'
                                mainMetricChange={0}
                                MetricIcon={Handshake}
                            />
                                : <CircularProgress/>
                            }
                        </Box>
                        <Box m={1}>
                            {aefAmountSpend ?
                            <MetricsCard
                                mainMetric={aefAmountSpend ? aefAmountSpend : 0}
                                mainMetricInUSD={true}
                                mainMetricUnit={""}
                                metricName='AEF Payouts Amount'
                                mainMetricChange={0}
                                MetricIcon={HandshakeOutlined}
                            />
                                : <CircularProgress/>
                            }
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{direction: {xs: 'column', sm: 'row'}}}
                    justifyContent="center"
                    alignItems="left"
                    alignContent="left"
                    spacing={2}
                    mt={0.5}
                    mb={1}
                >
                    <Grid item xs={11} sm={4.5}>
                        <Card sx={{boxShadow: 3}}>
                            <Box p={1}>
                                <Typography
                                    sx={{fontSize: '24px'}}
                                    gutterBottom
                                >
                                    Monthly Spendings
                                </Typography>
                            </Box>
                            {monthlyAURASpend ?
                                <IncomeVsSpendingMultiBarChart
                                    data1={monthlyAURASpend}
                                    dataTitle1='Spendings'
                                    height='300px'
                                    unit='AURA'
                                />
                                : <CircularProgress/>
                            }
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={4.5}>
                        <Card sx={{boxShadow: 3}}>
                            <Box p={1} display="flex" alignItems='center'>
                                <Typography
                                    sx={{fontSize: '24px'}}
                                    gutterBottom
                                >
                                    Percentage of Treasury AURA Funds Used</Typography>
                            </Box>
                            {pieData ?
                                <GenericPieChart
                                    data={pieData}
                                    isNotUSD={true}
                                    height='300px'/>
                                : <CircularProgress/>
                            }
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={11} sm={9} mt={1}>
                    <Box display="flex" justifyContent="space-between" alignItems="row">
                        <Box display="flex" alignItems='center'>
                            <Box>
                                <Typography sx={{fontSize: '24px'}}>Treasury Transaction History</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={9}>
                    {txnHistoryTreasury && txnHistoryTreasury.history_list.length > 0 ?
                        <TreasuryTransactionTable txnHistory={txnHistoryTreasury}/>
                        : <CircularProgress/>}
                </Grid>
            </Grid>
        </Box>
    );
}
