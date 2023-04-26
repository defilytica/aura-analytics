import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'
import { Grid, Typography, List, ListItem, CardMedia, Card, CircularProgress } from '@mui/material';
import { useAuraPools } from '../../data/aura/useAuraPools';
import { useAuraBalMints } from '../../data/aura/useAuraBalMints';
import { useAuraBalTransactions } from '../../data/aura/useAuraBalTransactions';
import { useAuraGlobalStats } from '../../data/aura/useAuraGlobalStats';
import { BalancerChartDataItem } from '../../data/balancer/balancerTypes';
import GenericBarChart from '../../components/Echarts/GenericBarChart';
import { useCoinGeckoSimpleTokenPrices } from '../../data/coingecko/useCoinGeckoSimpleTokenPrices';
import CoinCard from '../../components/Cards/CoinCard';





export default function AuraBAL() {

    const theme = useTheme();
    const auraBALAddress = '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d'
    const coinData = useCoinGeckoSimpleTokenPrices([auraBALAddress]);
    //Data fetching
    const auraPools = useAuraPools();
    const auraBalMints = useAuraBalMints();
    const aurabalTransasctions = useAuraBalTransactions();
    const auraGlobalStats = useAuraGlobalStats();
    console.log("aura Pools", auraPools)
    console.log("auraBAL Mints", auraBalMints)
    console.log("auraBAL transactions", aurabalTransasctions)
    console.log("aura Global stats", auraGlobalStats)
    //Image resources
    const auraBalBannerDark = require('../../assets/png/aurabal-dark.png');
    const auraBalBannerLight = require('../../assets/png/aurabal-light.png');

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


    return (
        <Box sx={{ flexGrow: 2 }}>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item xs={11}>
                    <Card>
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
                            <div
                                style={{
                                    position: "absolute",
                                    color: "white",
                                    top: '20%',
                                    left: "10%",
                                    transform: "translateX(-50%)"
                                }}>
                            {coinData && coinData[auraBALAddress] && coinData[auraBALAddress].usd ?
                        <CoinCard
                            tokenAddress={auraBALAddress}
                            tokenName='auraBAL'
                            tokenPrice={coinData[auraBALAddress].usd}
                            tokenPriceChange={coinData[auraBALAddress].usd_24h_change}

                        />
                        : <CircularProgress />}
                        </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item mt={1} xs={11}>
                <Typography variant="h6">Daily AuraBAL Mints</Typography>
                <Card sx={{ boxShadow: 3 }}>
                    <Box p={1} display="flex" alignItems='center'>
                        
                    </Box>
                    <GenericBarChart data={auraBalDailyMintSeries} isUsd={false} />
                </Card>
            </Grid>
            </Grid>
            
        </Box>
    );
}