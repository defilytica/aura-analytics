import {Box, Card, CardActionArea, CardContent, Grid, Typography} from '@mui/material';
import CurrencyLogo from '../../CurrencyLogo';
import {useNavigate} from 'react-router-dom';
import {useActiveNetworkVersion} from '../../../state/application/hooks';
import {formatNumber} from "../../../utils/numbers";

export type LockedAuraCardProps = {
    totalLockedAmount: number
}

const LockedAuraCard = ({totalLockedAmount}: LockedAuraCardProps) => {
    let navigate = useNavigate();
    const [activeNetwork] = useActiveNetworkVersion()
    return (
        <Card
            sx={{
                maxWidth: '275px',
                minWidth: '250px',
                maxHeight: '150px',
                cursor: 'pointer',
                boxShadow: 3,
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Grid
                        container
                        spacing={1}
                        sx={{justifyContent: 'space-between'}}
                    >
                        <Grid item>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="h6"
                            >
                                Total Locked
                            </Typography>
                            <Typography
                                color="textPrimary"
                                variant="h6"
                            >
                                {formatNumber(totalLockedAmount)} AURA
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