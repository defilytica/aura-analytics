import { Typography, Grid, Box, Card, Stack } from "@mui/material";
import WalletIcon from '@mui/icons-material/Wallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { NavElement } from '../../components/NavCrumbs';
import NavCrumbs from '../../components/NavCrumbs';
import { useActiveNetworkVersion } from "../../state/application/hooks";
import { getTreasuryConfig } from "../../constants/wallets";
import { useGetTotalBalances } from "../../data/debank/useGetTotalBalances";
import { useGetPortfolio } from '../../data/debank/useGetPortfolio';
import StyledExternalLink from '../../components/StyledExternalLink';
import MetricsCard from '../../components/Cards/MetricsCard';
import FeeCollectorTokenTable from "../../components/Tables/FeeCollectorTokenTable";
import LiquidityPosition from '../../components/LiquidityPosition';
import { BalancerPieChartDataItem } from '../../data/balancer/balancerTypes';
import GenericPieChart from '../../components/Echarts/GenericPieChart';
import CustomLinearProgress from '../../components/Progress/CustomLinearProgress';

export default function Treasury() {

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
        name: 'Treasury',
        link: 'treasury'
    }
    const navCrumbs: NavElement[] = []
    navCrumbs.push(homeNav)
    navCrumbs.push(chainNav);
    navCrumbs.push(feesNav);


    const [activeNetwork] = useActiveNetworkVersion()
    //Fetch debank data
    const TREASURY_CONFIG = getTreasuryConfig(activeNetwork.chainId);
    const { portfolio } = useGetPortfolio(TREASURY_CONFIG.treasury);
    const { totalBalances } = useGetTotalBalances(TREASURY_CONFIG.treasury);

    //Obtain wallet total worth and USDC
    const walletTokenNetworth = totalBalances ?
        totalBalances.reduce((acc, el) => acc + el.amount * el.price, 0) : 0;
    //const karpatkeyTokenNetworth = karpatkeyBalances.totalBalances ? karpatkeyBalances.totalBalances.reduce((acc, el) => acc + el.amount * el.price, 0) : 0;
    let netWorth = portfolio  ?
        portfolio.reduce((acc, el) => el.portfolio_item_list.reduce((p, pel) => p + pel.stats.net_usd_value, 0) + acc, 0) : 0;
    netWorth += walletTokenNetworth;
    const usdcReserves = totalBalances ? totalBalances.find(el => {
        if (el.symbol === 'USDC') {
            return el
        }
    })?.amount : 0;

    const totalUSDCReserves = usdcReserves ? usdcReserves : 0;

    const balPrice = totalBalances ? totalBalances.find(el => {
        if (el.symbol === 'BAL') {
            return el
        }
    })?.price : 0;


    //Token Balances Pie Chart
    const tokenPieChartData: BalancerPieChartDataItem[] | null = totalBalances ? totalBalances.filter(
        x => x.chain === activeNetwork.debankId &&
            x.amount * x.price > 10).map((balance) => {
                return {
                    value: balance.amount * balance.price,
                    name: balance.symbol
                }
            }
            ) : null;


    const ratioPieChartData: BalancerPieChartDataItem[] = []
    if (walletTokenNetworth > 0) {
        ratioPieChartData.push(
            {
                value: walletTokenNetworth,
                name: 'Tokens'
            }
        )
    }
    if (netWorth - walletTokenNetworth > 0) {
        ratioPieChartData.push(
            {
                value: netWorth - walletTokenNetworth,
                name: 'Treasury Liquidity provisions'
            }
        )
    }

    return (
        <Box sx={{ flexGrow: 2 }}>
            {totalBalances && portfolio ?
                <Grid
                    container
                    spacing={1}
                    sx={{ justifyContent: 'center' }}
                >
                    <Grid item xs={11} sm={9}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <NavCrumbs crumbSet={navCrumbs} destination={activeNetwork.name} />
                        </Box>

                    </Grid>
                    <Grid mt={2} item xs={11} sm={9}>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <Typography sx={{fontSize: '24px'}}>Treasury Metrics on {activeNetwork.name}</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {totalBalances && portfolio ?
                        <Grid item xs={11} sm={9}>
                            <Grid
                                container
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{ justifyContent: { md: 'space-between', xs: 'center' }, alignContent: 'center' }}
                            >
                                <Box>
                                    <MetricsCard
                                        mainMetric={netWorth}
                                        mainMetricInUSD={true}
                                        metricName='Net Worth'
                                        mainMetricChange={0}
                                        MetricIcon={AccountBalanceIcon}
                                    />
                                </Box>
                                <Box ml={1}>
                                    <MetricsCard
                                        mainMetric={walletTokenNetworth}
                                        mainMetricInUSD={true}
                                        metricName='Tokens in Wallet'
                                        mainMetricChange={0}
                                        MetricIcon={WalletIcon}
                                    />
                                </Box>
                                <Box ml={1}>
                                    <MetricsCard
                                        mainMetric={totalUSDCReserves ? totalUSDCReserves : 0}
                                        mainMetricInUSD={true}
                                        metricName='Liquid USDC'
                                        mainMetricChange={0}
                                        MetricIcon={CurrencyExchangeIcon}
                                    />
                                </Box>
                            </Grid>
                        </Grid> : null}
                    {ratioPieChartData && ratioPieChartData.length > 0 ?
                        <Grid
                            container
                            sx={{
                                direction: { xs: 'column', sm: 'row' },
                                mx: -1,  // Counteract the spacing's outer margin
                            }}
                            justifyContent="center"
                            alignItems="flex-start" // Changed from "left" which is not a valid value for alignItems
                            alignContent="flex-start" // Changed from "left" which is not a valid value for alignContent
                            spacing={2}
                        >
                            <Grid
                                item
                                mt={2}
                                xs={11} sm={4.5}
                                md={4.5}
                            >
                                <Box mb={1}>
                                    <Card
                                        sx={{ boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px", }}>
                                        <Box p={1}>
                                            <Typography
                                                sx={{fontSize: '24px'}}
                                                gutterBottom
                                            >
                                                Asset Distribution
                                            </Typography>
                                        </Box>
                                        <GenericPieChart data={ratioPieChartData} height='295px' />
                                    </Card>
                                </Box>

                            </Grid>
                            {tokenPieChartData && tokenPieChartData.length > 0 ?
                                <Grid
                                    item
                                    xs={11} sm={4.5}
                                    mt={2}
                                    md={4.5}
                                >
                                    <Card sx={{ boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px", }}>
                                        <Box p={1}>
                                            <Typography
                                                sx={{fontSize: '24px'}}
                                                gutterBottom
                                            >
                                                Token distribution
                                            </Typography>
                                        </Box>
                                        <GenericPieChart data={tokenPieChartData} height='295px' />
                                    </Card>
                                </Grid> : null}
                        </Grid>
                        : null}
                    <Grid
                        item
                        mt={1}
                        xs={11} sm={9}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="row">
                            <Box display="flex" alignItems='center'>
                                <Typography sx={{fontSize: '24px'}}>Tokens in Treasury Wallet</Typography>
                                <Box ml={1}>
                                    <StyledExternalLink address={TREASURY_CONFIG.treasury} type={'address'} activeNetwork={activeNetwork} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {totalBalances && totalBalances.length > 0 ?
                        <Grid item xs={11} sm={9}>
                            <FeeCollectorTokenTable tokenBalances={totalBalances} />
                            <Grid
                                mt={2}
                                item
                                xs={11} sm={9}
                            >
                                <Typography sx={{fontSize: '24px'}}>Liquidity Provisions</Typography>
                            </Grid>
                        </Grid> : null}
                    <Grid
                        item
                        xs={11} sm={9}
                    >
                        <Card
                            sx={{ boxShadow: 3 }}
                        >
                            <Box p={2}>
                                {portfolio && portfolio.length > 0 ?
                                    portfolio.map(pos =>
                                        pos.chain === activeNetwork.debankId ?
                                            <Box key={pos.id + "box"} mb={1}>
                                                <LiquidityPosition key={pos.id + pos.name} position={pos} />
                                            </Box> : undefined
                                    )
                                    : <Typography>none</Typography>}
                            </Box>
                        </Card>
                    </Grid>
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
