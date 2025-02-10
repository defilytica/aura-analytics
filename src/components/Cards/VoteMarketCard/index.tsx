import {Card, Grid, Link, Typography} from '@mui/material';
import { styled } from '@mui/system';
import StakeDAO from '../../../assets/svg/stakeDAO.svg';
import OrbBg from '../../../assets/png/orbz.png';

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    maxWidth: 500,
    padding: theme.spacing(2),
    boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",
    pointerEvents: 'auto',
}));

const ContentContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between', // Add this line to distribute items evenly along the horizontal axis
    marginBottom: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
}));

const Description = styled(Typography)(({ theme }) => ({

}));

const LogoImage = styled('img')({
    height: '60px',
    width: 'auto',
    alignSelf: 'flex-end',
    background: `url(${OrbBg}) no-repeat center center`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    border: 'none',
    filter: 'brightness(0) invert(1)',
});


const LogoContainer = styled(Grid)({
    display: 'flex',
    alignItems: 'flex-end',
});

const PaladinQuestsCard = () => {
    return (
        <StyledCard>
            <ContentContainer container>
                <Grid item xs={9}>
                    <Title variant="h5">Vote Market</Title>
                    <Description variant="body2">
                        Explore vote aggregation on StakeDAO's vote market.
                    </Description>
                </Grid>

                <LogoContainer item xs={3}>
                    <LogoImage src={StakeDAO} alt="VoteMarket Logo" />
                </LogoContainer>

            </ContentContainer>
            <Link
                href="https://classic.votemarket.org/?market=bal"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
            >Learn more</Link>
        </StyledCard>
    );
};

export default PaladinQuestsCard;
