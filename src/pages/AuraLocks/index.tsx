import Box from '@mui/material/Box';
import {Grid, Typography, List, ListItem, CircularProgress} from '@mui/material';
import {useParams} from "react-router-dom";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import {useGetLeadingLockers} from "../../data/aura/useLockers";
import LockerTable from "../../components/Tables/LockerTable";
import LockedAuraCard from "../../components/Cards/LockedAuraCard";
import TopLockerCard from "../../components/Cards/TopLockerCard";


export default function AuraLocks() {
    const params = useParams();
    const [activeNetwork] = useActiveNetworkVersion();
    const topLockers = useGetLeadingLockers();

    let totalLockedAmount = topLockers.reduce((a, b) => a + Number(b.balanceLocked), 0);
    totalLockedAmount = totalLockedAmount / 10 ** 18;

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
                                <LockedAuraCard totalLockedAmount={totalLockedAmount}/>
                            </Box>
                            <Box m={1}>
                                {topLockers.length > 0 ?
                                    <TopLockerCard address={topLockers[0].id} lockedAmount={topLockers[0].balanceLocked}
                                                   place={"First"}/> : <CircularProgress/>}
                            </Box>
                        </Grid>
                    </Grid>
                    <LockerTable lockerAccounts={topLockers}
                                 totalAmountLocked={totalLockedAmount}/>
                </Grid>
            </Grid>
        </Box>
    );
}