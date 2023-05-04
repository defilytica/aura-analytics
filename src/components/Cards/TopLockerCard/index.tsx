import {Box, Card, CardActionArea, CardContent, Grid, Typography} from '@mui/material';
import {formatNumber} from "../../../utils/numbers";
import GoldMedal from '../../../assets/svg/gold-medal.svg';
import SilverMedal from '../../../assets/svg/silver-medal.svg';
import BronzeMedal from '../../../assets/svg/bronze-medal.svg';


const TopLockerCard = ({address, lockedAmount, place}: { address: string, lockedAmount: string, place: string }) => {
    let icon = BronzeMedal;
    if (place === 'first') {
        icon = GoldMedal;
    } else if (place === 'second') {
        icon = SilverMedal;
    }
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
                            <Grid item>
                                <img src={icon} alt="Bronze medal" width="30"/>
                            </Grid>
                            <Typography
                                color="textPrimary"
                                variant="h6"
                            >
                                {formatNumber(Number(lockedAmount) / 10 ** 18)} AURA
                            </Typography>

                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="h6"
                                fontSize={10}
                            >
                                {address}
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default TopLockerCard;