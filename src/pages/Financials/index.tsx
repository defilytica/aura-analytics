import Box from '@mui/material/Box';
import { Grid, Typography, List, ListItem } from '@mui/material';




export default function Financials() {



    return (
        <Box sx={{ flexGrow: 2 }}>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item mt={1} xs={11}>
                <Typography>
                    TODOs
                        <List>
                            <ListItem>Overhauled financials specific to the Aura ecosystem use-case</ListItem>
                        </List>
                    </Typography>
                </Grid>
            </Grid>
            
        </Box>
    );
}