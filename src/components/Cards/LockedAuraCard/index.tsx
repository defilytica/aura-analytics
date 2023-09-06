import {Box, Card, CardActionArea, CardContent, CircularProgress, Grid, Typography} from '@mui/material';
import CurrencyLogo from '../../CurrencyLogo';
import {useNavigate} from 'react-router-dom';
import {useActiveNetworkVersion} from '../../../state/application/hooks';
import {formatDollarAmount, formatNumber} from "../../../utils/numbers";
import {CoingeckoRawData} from "../../../data/coingecko/getCoingecoSimpleTokenPrices";
import {AURA_TOKEN_MAINNET} from "../../../data/aura/auraConstants";

export type LockedAuraCardProps = {
    totalLockedAmount: number,
    coinData: CoingeckoRawData,
}

const LockedAuraCard = ({totalLockedAmount, coinData}: LockedAuraCardProps) => {
    let navigate = useNavigate();
    const [activeNetwork] = useActiveNetworkVersion()
    const auraAddress = AURA_TOKEN_MAINNET;

    return (
        <Card
            sx={{
                maxWidth: '275px',
                minWidth: '200px',
                maxHeight: '150px',
                cursor: 'pointer',
                boxShadow: 3,
            }}
        >
            <CardActionArea>
                <CardContent sx={{p: '10px'}}>
                    <Grid
                        container
                        spacing={1}
                        sx={{justifyContent: 'space-between'}}
                    >
                        <Grid item>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                sx={{fontSize: '18px',}}
                            >
                                Total Locked
                            </Typography>
                            <Typography
                                color="textPrimary"
                                sx={{fontSize: '22px',}}
                            >
                                {formatNumber(totalLockedAmount)} AURA
                            </Typography>
                            <Typography
                                color="textPrimary"
                                sx={{fontSize: '22px',}}
                            >
                                {formatDollarAmount(totalLockedAmount * coinData[auraAddress].usd)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CurrencyLogo address="0xc0c293ce456ff0ed870add98a0828dd4d2903dbf" size='30px'/>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default LockedAuraCard;
