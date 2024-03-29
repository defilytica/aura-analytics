import * as React from 'react';
import Cookies from 'universal-cookie';
import {Route, Routes, useLocation} from 'react-router-dom';
import AuraLogo from '../../assets/png/AURA_ISO_colors.png'
import MoonIcon from '../../assets/svg/MoonIcon.svg';
import SunIcon from '../../assets/svg/SunIcon.svg';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import {themes} from '../../assets/auraTheme/theme'
import {useActiveNetworkVersion} from '../../state/application/hooks';
import {EthereumNetworkInfo, SUPPORTED_NETWORK_VERSIONS} from '../../constants/networks';
import NetworkSelector from '../NetworkSelector';
import MenuDrawer from '../MenuDrawer'
import PoolsOverview from '../../pages/Pool/PoolsOverview';
import PoolPage from '../../pages/Pool/PoolPage';
import Protocol from '../../pages/Protocol';
import Tokens from '../../pages/Tokens';
import TokenPage from '../../pages/Token/TokenPage';
import Fees from '../../pages/Fees';
import {networkPrefix} from '../../utils/networkPrefix'
import Treasury from '../../pages/Treasury';
import Financials from '../../pages/Financials';
import {isMobile} from 'react-device-detect';
import Emissions from '../../pages/Emissions';
import AuraBAL from '../../pages/AuraBAL';
import AuraLocks from '../../pages/AuraLocks';
import VotingIncentives from "../../pages/VotingIncentives";
import {ConnectButton, darkTheme, lightTheme, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {WagmiConfig} from "wagmi";
import {chains, wagmiConfig} from "../../wagmi/wagmiConfig";
import {Alert, alpha, Button, Collapse} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AuraEcosystemFund from "../../pages/AuraEcosystemFund";
import IncentiveSimulator from '../../pages/IncentiveSimulator';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;

//Color mode
const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

const MainContent = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;

}>(({theme, open}) => ({
    flexGrow: 1,
    marginTop: theme.spacing(1),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: '0px',
        marginRight: '0px',
    }),
}));

//Custom Appbar settings
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

//Styled Drawer settings
const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function Dashboard() {
    const [openAlert, setOpenAlert] = React.useState(true);

    //Drawer logic
    const [open, setOpen] = React.useState(isMobile ? false : true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    //Color mode cookie
    const cookies = React.useMemo(() => new Cookies(), []);
    let storedTheme = 'dark';
    if (cookies.get('storedTheme') !== null && cookies.get('storedTheme') !== undefined) {
        storedTheme = cookies.get('storedTheme');
    } else {
        storedTheme = 'dark';
    }

    //Color mode handler
    const [mode, setMode] = React.useState<'light' | 'dark'>(storedTheme === 'light' ? 'light' : 'dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                //Set cookie
                cookies.set('storedTheme', (mode === 'light' ? 'dark' : 'light'));
            },
        }),
        [cookies, mode],
    );

    //Theme
    const theme = React.useMemo(() => createTheme(mode === 'light' ? themes.light : themes.dark), [mode]);

    //Network hook
    const location = useLocation();
    const [activeNetwork, setActiveNetwork] = useActiveNetworkVersion();
    React.useEffect(() => {
        if (location.pathname === '/') {
            setActiveNetwork(EthereumNetworkInfo);
        } else {
            SUPPORTED_NETWORK_VERSIONS.forEach((n) => {
                if (location.pathname.includes(n.route.toLocaleLowerCase())) {
                    setActiveNetwork(n);
                }
            });
        }
    }, [location.pathname, setActiveNetwork]);

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
                chains={chains}
                theme={
                    mode === 'dark' ? darkTheme(
                            {
                                borderRadius: 'small',
                                accentColor: alpha('#0F172A', 0.8),
                                overlayBlur: "large"

                            }) :
                        lightTheme(
                            {
                                borderRadius: 'small',
                                accentColor: '#9C4ED6'

                            }
                        )}>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <Box sx={{display: 'flex'}}>
                            <CssBaseline/>

                            <AppBar
                                position="fixed"
                                open={open}
                                enableColorOnDark
                                sx={{
                                    background: mode === 'dark' ? "rgba(14, 23, 33, 0.2)" : "rgba(255, 255, 255, 0.2)",
                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                    backdropFilter: "blur(5px)"
                                }}>
                                <Toolbar>
                                    <IconButton
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        edge="start"
                                        sx={{mr: 2, ...(open && {display: 'none'})}}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                    <Box display="flex" alignItems="center" alignContent="center"
                                         justifyContent='flex-end'>
                                        <Box
                                            sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
                                            <img src={AuraLogo} alt="Aura Logo" width="30"/>
                                        </Box>
                                        <Typography

                                            noWrap
                                            component="a"
                                            href="/"
                                            sx={{
                                                fontSize: '20px',
                                                mr: 0.5,
                                                display: {xs: 'none', md: 'flex'},
                                                fontWeight: 700,
                                                textDecoration: 'none',
                                                color: (mode === 'dark') ? 'white' : 'black',
                                            }}
                                        >
                                            Analytics
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '12px',
                                                color: (mode === 'dark') ? 'white' : 'black',
                                            }}>Beta</Typography>
                                        <Box position="absolute" right="10px">
                                            <Box display="flex" alignItems="center" alignContent="center"
                                                 justifyContent='flex-end'>

                                                <IconButton
                                                    sx={{
                                                        mr: 1,
                                                        animationDuration: 2,
                                                        width: 40,
                                                        height: 35,
                                                        borderRadius: 2,
                                                        backgroundColor: "background.paper",
                                                        boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",
                                                    }}
                                                    onClick={colorMode.toggleColorMode}>
                                                    <img src={(mode === 'dark') ? MoonIcon : SunIcon} alt="Theme Icon"
                                                         width="25"/>
                                                </IconButton>
                                                <NetworkSelector/>
                                                <Box ml={1}>
                                                    <ConnectButton chainStatus={"none"} showBalance={false}/>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Toolbar>
                            </AppBar>
                            <MenuDrawer
                                open={open}
                                drawerWidth={drawerWidth}
                                handleDrawerClose={handleDrawerClose}
                                activeNetwork={activeNetwork}
                            />
                            <MainContent open={open}>
                                <DrawerHeader/>
                                <Routes>
                                    <Route path="/" element={<Protocol/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'pools'} element={<PoolsOverview/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'tokens'} element={<Tokens/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'emissions'} element={<Emissions/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'locks'} element={<AuraLocks/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'aurabal'} element={<AuraBAL/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'voting-incentives'}
                                           element={<VotingIncentives/>}/>
                                    <Route path={networkPrefix(activeNetwork) + 'incentiveSimulator'} element={<IncentiveSimulator/>} />
                                    <Route path={'incentiveSimulator'} element={<IncentiveSimulator/>} />
                                    {/* Router v6: no query searches possible anymore. Provide all possible paths */}
                                    <Route path={"/:networkID/pools/:poolId"} element={<PoolPage/>}/>
                                    <Route path={"/pools/:poolId"} element={<PoolPage/>}/>
                                    <Route path={"/:networkID/tokens/:address"} element={<TokenPage/>}/>
                                    <Route path={"/tokens/:address"} element={<TokenPage/>}/>
                                    <Route path={"/:networkID/fees"} element={<Fees/>}/>
                                    <Route path={"/fees"} element={<Fees/>}/>
                                    <Route path={"/:networkID/treasury"} element={<Treasury/>}/>
                                    <Route path={"/treasury"} element={<Treasury/>}/>
                                    <Route path={"/aef"} element={<AuraEcosystemFund/>}/>
                                    <Route path={"/:networkID/financials"} element={<Financials/>}/>
                                    <Route path={"/financials"} element={<Financials/>}/>
                                </Routes>
                            </MainContent>
                        </Box>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default Dashboard;
