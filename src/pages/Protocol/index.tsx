import Box from '@mui/material/Box';
import { Grid, CircularProgress, Typography, Stack, Skeleton, List, ListItem } from '@mui/material';
import { useCoinGeckoSimpleTokenPrices } from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';
import {useAuraPools} from "../../data/aura/useAuraPools";
import MetricsCard from "../../components/Cards/MetricsCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";



export default function Protocol() {

    //TODO: REFACTOR TO CONSTANTS!
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';
    //Data
    const coinData = useCoinGeckoSimpleTokenPrices([auraAddress]);
    const auraPools = useAuraPools();

    console.log(auraPools);

    const tvl = auraPools.reduce((accumulator, currentObj) => {
        return accumulator + currentObj.totalStaked;
    }, 0);
    let tvlDollar;
    if (coinData) {
        tvlDollar = tvl * coinData[auraAddress].usd
    }

    console.log(tvl);
    return (
        <Box sx={{ flexGrow: 2 }}>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >
                
                <Grid
                    item
                    xs={11}
                >
                    <Grid
                        container
                        spacing={{ xs: 2, md: 2 }}
                        columns={{ xs: 4, sm: 2, md: 10 }}
                    >
                        <Grid item xs={11} sm={4} md={4}>
                            {coinData && coinData[auraAddress] && coinData[auraAddress].usd ?
                                <CoinCard
                                    tokenAddress={auraAddress}
                                    tokenName='Aura'
                                    tokenPrice={coinData[auraAddress].usd}
                                    tokenPriceChange={coinData[auraAddress].usd_24h_change}

                                />
                                : <CircularProgress />}

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item mt={1} xs={11}>
                <Typography>
                    TODOs
                        <List>
                            <ListItem>Show aggregated Protocol Metrics</ListItem>
                            <ListItem>Historical TVL, Locks and unlocks, locked vebal in aura etc</ListItem>
                            <ListItem>IMPORTANT: Aura is going multi-chain (Arbitrum soon): repo is ready for that</ListItem>
                        </List>
                    </Typography>
                    <Grid item xs={11} sm={4} md={4}>
                        {tvl && tvlDollar ?
                            <Grid item xs={11} sm={4} md={4}>
                            <MetricsCard
                                mainMetric={tvlDollar}
                                mainMetricInUSD={true}
                                mainMetricUnit={"$"}
                                MetricIcon={MonetizationOnIcon}
                                metricName={"TVL"}/>
                            </Grid>
                            : <CircularProgress />}

                    </Grid>
                </Grid>
            </Grid>
            
        </Box>
    );
}