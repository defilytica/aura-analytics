import {useGetPortfolio} from "../../data/debank/useGetPortfolio";
import {Box, Card, Grid, Typography} from "@mui/material";
import NavCrumbs, {NavElement} from "../../components/NavCrumbs";
import MetricsCard from "../../components/Cards/MetricsCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WalletIcon from "@mui/icons-material/Wallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GenericPieChart from "../../components/Echarts/GenericPieChart";
import StyledExternalLink from "../../components/StyledExternalLink";
import FeeCollectorTokenTable from "../../components/Tables/FeeCollectorTokenTable";
import LiquidityPosition from "../../components/LiquidityPosition";
import CustomLinearProgress from "../../components/Progress/CustomLinearProgress";
import {useGetTotalBalances} from "../../data/debank/useGetTotalBalances";
import {useActiveNetworkVersion} from "../../state/application/hooks";


export default function AuraEcosystemFund(){

    //Navigation
    const homeNav: NavElement = {
        name: 'Home',
        link: ''
    }
    const chainNav: NavElement = {
        name: 'Chain',
        link: 'chain'
    }
    const feesNav: NavElement = {
        name: 'Aura Ecosystem Fund',
        link: 'aef'
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)
    navCrumbs.push(chainNav);
    navCrumbs.push(feesNav);

    const [activeNetwork] = useActiveNetworkVersion()
    const ecosystemFundAAddress = '0x196bda3808A7Af322AaD6384103C1E6Adb40AFa7'
    const ecosystemFundBAddress = '3A0x3BC0Cb287f74504347D50fe3aDA6d90214E6F512'
    const ecosystemFundCAddress = '0x388a09A28e7D56dc61dcb1bb356251Fe0C46fe8C'
    const { totalBalances: totalBalancesA } = useGetTotalBalances(ecosystemFundAAddress);
    const { totalBalances: totalBalancesB } = useGetTotalBalances(ecosystemFundBAddress);
    const { totalBalances: totalBalancesC } = useGetTotalBalances(ecosystemFundCAddress);

    const walletATokenNetworth = totalBalancesA ?
        totalBalancesA.reduce((acc, el) => acc + el.amount * el.price, 0) : 0;

    const usdcReservesA = totalBalancesA ? totalBalancesA.find(el => {
        if (el.symbol === 'USDC') {
            return el
        }
    })?.amount : 0;

    const walletBTokenNetworth = totalBalancesB ?
        totalBalancesB.reduce((acc, el) => acc + el.amount * el.price, 0) : 0;

    const usdcReservesB = totalBalancesB ? totalBalancesB.find(el => {
        if (el.symbol === 'USDC') {
            return el
        }
    })?.amount : 0;

    const walletCTokenNetworth = totalBalancesB ?
        totalBalancesB.reduce((acc, el) => acc + el.amount * el.price, 0) : 0;

    const usdcReservesC = totalBalancesC ? totalBalancesC.find(el => {
        if (el.symbol === 'USDC') {
            return el
        }
    })?.amount : 0;

    const totalBalances = walletATokenNetworth + walletBTokenNetworth + walletCTokenNetworth
    let usdcReserves = 0;
    if (usdcReservesA && usdcReservesB && usdcReservesC) {
        usdcReserves = usdcReservesA + usdcReservesB + usdcReservesC
    }



    return (
        <Box sx={{ flexGrow: 2 }}>
            {totalBalancesA && totalBalancesB && totalBalancesC ?
                <Grid
                    container
                    sx={{ justifyContent: 'center' }}
                >
                    <Grid item xs={11} sm={9} mb={2}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <NavCrumbs crumbSet={navCrumbs} destination={activeNetwork.name} />
                        </Box>

                    </Grid>
                    <Grid mt={2} item xs={11} sm={9}>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <Typography sx={{fontSize: '24px'}}>Aura Ecosystem Fund Metrics on {activeNetwork.name}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {totalBalancesA ?
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{ justifyContent: { md: 'space-between', xs: 'center' }, alignContent: 'center' }}
                            >
                                <Box>
                                    <MetricsCard
                                        mainMetric={totalBalances}
                                        mainMetricInUSD={true}
                                        metricName='Ecosystem Net Worth'
                                        mainMetricChange={0}
                                        MetricIcon={WalletIcon}
                                    />
                                </Box>
                                <Box ml={1}>
                                    <MetricsCard
                                        mainMetric={usdcReserves ? usdcReserves : 0}
                                        mainMetricInUSD={true}
                                        metricName='Ecosystem Liquid USDC'
                                        mainMetricChange={0}
                                        MetricIcon={CurrencyExchangeIcon}
                                    />
                                </Box>
                            </Grid>
                        </Grid> : null}
                    <Grid mt={2} item xs={11} sm={9}>
                        <Typography sx={{fontSize: '22px'}}>Offchain Relations Fund</Typography>
                    </Grid>
                    <Grid item xs={11} sm={9} mb={1}>
                        <Typography sx={{fontSize: '14px', maxWidth: '500px'}}> This wallet holds funds necessary for off-chain relationships in a multisig serviced by the Aura Foundation and Fund representatives</Typography>
                    </Grid>
                    {totalBalancesA ?
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{ justifyContent: { md: 'space-between', xs: 'center' }, alignContent: 'center' }}
                            >
                                <Box>
                                    <MetricsCard
                                        mainMetric={walletATokenNetworth}
                                        mainMetricInUSD={true}
                                        metricName='Net Worth'
                                        mainMetricChange={0}
                                        MetricIcon={WalletIcon}
                                    />
                                </Box>
                                <Box ml={1}>
                                    <MetricsCard
                                        mainMetric={usdcReservesA ? usdcReservesA : 0}
                                        mainMetricInUSD={true}
                                        metricName='Liquid USDC'
                                        mainMetricChange={0}
                                        MetricIcon={CurrencyExchangeIcon}
                                    />
                                </Box>
                            </Grid>
                        </Grid> : null}

                    <Grid
                        item
                        mt={1}
                        xs={11} sm={9}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="row">
                            <Box display="flex" alignItems='center'>
                                <Typography sx={{fontSize: '20px'}}>Tokens in Wallet</Typography>
                                <Box ml={1}>
                                    <StyledExternalLink address={ecosystemFundAAddress} type={'address'} activeNetwork={activeNetwork} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {totalBalancesA && totalBalancesA.length > 0 ?
                        <Grid item xs={11} sm={9}>
                            <FeeCollectorTokenTable tokenBalances={totalBalancesA} />
                        </Grid> : null}


                    <Grid mt={2} item xs={11} sm={9} >
                        <Typography sx={{fontSize: '22px'}}>On-chain Expenses Fund</Typography>
                    </Grid>
                    <Grid item xs={11} sm={9} mb={1}>
                        <Typography sx={{fontSize: '14px', maxWidth: '500px'}}> This wallet holds funds allocated towards on-chain expenses in a multisig serviced by current Treasury multisig signers and core contributors</Typography>
                    </Grid>
                    {totalBalancesB ?
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{ justifyContent: { md: 'space-between', xs: 'center' }, alignContent: 'center' }}
                            >
                                <Box>
                                    <MetricsCard
                                        mainMetric={walletBTokenNetworth}
                                        mainMetricInUSD={true}
                                        metricName='Net Worth'
                                        mainMetricChange={0}
                                        MetricIcon={WalletIcon}
                                    />
                                </Box>
                                <Box ml={1}>
                                    <MetricsCard
                                        mainMetric={usdcReservesB ? usdcReservesB : 0}
                                        mainMetricInUSD={true}
                                        metricName='Liquid USDC'
                                        mainMetricChange={0}
                                        MetricIcon={CurrencyExchangeIcon}
                                    />
                                </Box>
                            </Grid>
                        </Grid> : null}

                    <Grid
                        item
                        mt={1}
                        xs={11} sm={9}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="row">
                            <Box display="flex" alignItems='center'>
                                <Typography sx={{fontSize: '20px'}}>Tokens in Wallet</Typography>
                                <Box ml={1}>
                                    <StyledExternalLink address={ecosystemFundBAddress} type={'address'} activeNetwork={activeNetwork} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {totalBalancesB && totalBalancesB.length > 0 ?
                        <Grid item xs={11} sm={9}>
                            <FeeCollectorTokenTable tokenBalances={totalBalancesB} />
                        </Grid> : null}

                    <Grid mt={2} item xs={11} sm={9} mb={1}>
                        <Typography sx={{fontSize: '22px'}}>Grants Allocation Fund</Typography>
                    </Grid>
                    <Grid item xs={11} sm={9} mb={1}>
                        <Typography sx={{fontSize: '14px', maxWidth: '500px'}}> This wallet holds funds allocated towards grants, which is transferred on an as-needed basis, in a multisig serviced by AEF Grant Committee members</Typography>
                    </Grid>
                    {totalBalancesC ?
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{ justifyContent: { md: 'space-between', xs: 'center' }, alignContent: 'center' }}
                            >
                                <Box>
                                    <MetricsCard
                                        mainMetric={walletCTokenNetworth}
                                        mainMetricInUSD={true}
                                        metricName='Net Worth'
                                        mainMetricChange={0}
                                        MetricIcon={WalletIcon}
                                    />
                                </Box>
                                <Box ml={1}>
                                    <MetricsCard
                                        mainMetric={usdcReservesC ? usdcReservesC : 0}
                                        mainMetricInUSD={true}
                                        metricName='Liquid USDC'
                                        mainMetricChange={0}
                                        MetricIcon={CurrencyExchangeIcon}
                                    />
                                </Box>
                            </Grid>
                        </Grid> : null}

                    <Grid
                        item
                        mt={1}
                        xs={11} sm={9}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="row">
                            <Box display="flex" alignItems='center'>
                                <Typography sx={{fontSize: '20px'}}>Tokens in Wallet</Typography>
                                <Box ml={1}>
                                    <StyledExternalLink address={ecosystemFundCAddress} type={'address'} activeNetwork={activeNetwork} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {totalBalancesC && totalBalancesC.length > 0 ?
                        <Grid item xs={11} sm={9}>
                            <FeeCollectorTokenTable tokenBalances={totalBalancesC} />
                        </Grid> : null}
                </Grid>
                :
                <Grid
                    container
                    spacing={2}
                    mt='25%'
                    sx={{ justifyContent: 'center' }}
                >
                    <CustomLinearProgress />
                </Grid>}
        </Box>
    );

}