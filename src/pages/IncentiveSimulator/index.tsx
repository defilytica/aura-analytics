import * as React from "react";
import Box from '@mui/material/Box';
import {
    FormControl,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Autocomplete,
    Card,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell, Divider,
} from '@mui/material';
import {BalancerSDK, balEmissions} from "@balancer-labs/sdk";
import {useActiveNetworkVersion} from "../../state/application/hooks";
import MetricsCard from "../../components/Cards/MetricsCard";
import {useBalancerPools} from "../../data/balancer/usePools";
import {useEffect, useState} from "react";
import {useGetHiddenHandVotingIncentives} from "../../data/hidden-hand/useGetHiddenHandVotingIncentives";
import { useCoinGeckoSimpleTokenPrices } from "../../data/coingecko/useCoinGeckoSimpleTokenPrices";
import CoinCard from "../../components/Cards/CoinCard";
import CircularProgress from "@mui/material/CircularProgress";
import PoolComposition from "../../components/PoolComposition";
import {formatDollarAmount, formatNumber} from "../../utils/numbers";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import useGetBalancerStakingGauges from "../../data/balancer/useGetBalancerStakingGauges";
import { HiddenHandIncentives } from "../../data/hidden-hand/hiddenHandTypes";
import {calculateAPR, calculateAPRforAura, calculateBribeValue, calculateBribeValueForAura} from "./bribeHelpers";
import useGetGaugeRelativeWeights from "../../data/balancer/useGetGaugeEmissions";
import useDecorateL1Gauges from "../../data/balancer/useDecorateL1Gauges";
import useDecorateL2Gauges from "../../data/balancer/useDeocrateL2Gauges";
import PoolCurrencyLogo from "../../components/PoolCurrencyLogo";
import Switch from "@mui/material/Switch";
import {useAuraGlobalStats} from "../../data/aura/useAuraGlobalStats";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AuraIcon from "../../assets/png/AURA_ISO_colors.png";
import TokenIcon from "@mui/icons-material/Token";
import {AURA_TIMESTAMPS} from "../../data/hidden-hand/constants";
import {useGetEmissionPerVote} from "../../data/VotingIncentives/useGetEmissionPerVote";
import {AddShoppingCart, ShoppingCartCheckout} from "@mui/icons-material";
import {unixToDate} from "../../utils/date";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {useTheme} from "@mui/material/styles";
import useGetSimpleTokenPrices from "../../data/balancer-api-v3/useGetSimpleTokenPrices";

interface TableData {
    parameter: string;
    value: string;
}

// TODO: put somewhere else
//  Helper functions to parse data types to Llama model
const extractPoolRewards = (data: HiddenHandIncentives | null): PoolReward[] => {
    const poolRewards: PoolReward[] = [];

    if (data) {
        data.data.forEach((item) => {
            const {title, bribes} = item;

            if (bribes.length > 0) {
                const poolReward: PoolReward = {pool: title};

                bribes.forEach((bribe) => {
                    const {symbol, value} = bribe;
                    const tokenKey = `${symbol.toUpperCase()}`;

                    if (!poolReward[tokenKey]) {
                        poolReward[tokenKey] = value;
                    } else {
                        const existingValue = poolReward[tokenKey];
                        poolReward[tokenKey] = typeof existingValue === 'number' ? existingValue + value : value;
                    }
                });

                poolRewards.push(poolReward);
            }
        });
    }
    return poolRewards;
};

export type PoolReward = {
    pool: string;
    [token: string]: string | number; // this represents any number of token properties with their corresponding `amountDollars` value
};

type Pool = {
    name: string;
    address: string;
    tvlUSD: number; // Add the tvlUSD property to the Pool type
    // Add other properties if there are more
};


export default function BribeSimulator() {
    // Fetch relevant data
    const [activeNetwork] = useActiveNetworkVersion();
    const theme = useTheme();
    const balAddress = "0xba100000625a3754423978a60c9317c58a424e3d";
    const auraAddress = '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf';
    const pools = useBalancerPools();

    const auraGlobalStats = useAuraGlobalStats();
    const gaugeData = useGetBalancerStakingGauges();
    const l1GaugeData = useDecorateL1Gauges(gaugeData);
    const decoratedGaugeData = useDecorateL2Gauges(l1GaugeData);
    const gaugeRelativeWeights = useGetGaugeRelativeWeights(decoratedGaugeData);

    // New state to hold the checkbox value
    const [useNewPoolValue, setUseNewPoolValue] = useState(false);
    const [customPoolValue, setCustomPoolValue] = useState<number>(0); // New state to hold the custom poolValue
    const [hidePoolSelect, setHidePoolSelect] = useState<boolean>(false); // New state to hide the "Select a Pool" component

    //Stats for LPs
    const [customLPValue, setCustomLPValue] = useState<number>(0); // New state to hold the custom lpValue

    //Protocol owned liquidity
    const [isPOL, setIsPOL] = useState<boolean>(false);

    //BAL and AURA Stats
    //const coinData = useCoinGeckoSimpleTokenPrices([balAddress, auraAddress], true);
    const coinData = useGetSimpleTokenPrices([balAddress, auraAddress], activeNetwork.chainId);
    const now = Math.round(new Date().getTime() / 1000);
    const weeklyEmissions = balEmissions.weekly(now);
    const totalLockedAmount = auraGlobalStats?.auraTotalLockedAmount;

    //Emission stats
    const timestamps = AURA_TIMESTAMPS;
    const [currentRoundNew, setCurrentRoundNew] = useState<number>(timestamps[timestamps.length - 2]); // Default timestamp
    // TODO: take average of historical incentives for estimation
    const hhIncentives = useGetHiddenHandVotingIncentives(currentRoundNew.toString());
    const {emissionValuePerVote, emissionsPerDollarSpent} = useGetEmissionPerVote(currentRoundNew);

    //States
    const [selectedPoolId, setSelectedPoolId] = useState<string>("");
    const [targetAPR, setTargetAPR] = useState<number>(0);
    const [allocatedVotes, setAllocatedVotes] = useState<number>(0);
    const [incentivePerVote, setIncentivePerVote] = useState<number>(0);
    const [emissionPerVote, setEmissionPerVote] = useState<number>(0);
    const [roundIncentives, setRoundIncentives] = useState<number>(0);
    const [bribeValue, setBribeValue] = useState<number>(0);
    const [gaugeRelativeWeight, setGaugeRelativeWeight] = useState<number>(0);
    const [pricePerBPT, setPricePerBPT] = useState<number>(0);

    const getOptionLabel = (pool: Pool) => {
        // Display the pool name and TVL together in the dropdown
        return `${pool.name} - TVL: ${formatDollarAmount(pool.tvlUSD, 2)}`;
    };

    // Handler for selecting a pool from the dropdown menu
    const handlePoolChange = (
        event: React.SyntheticEvent<Element, Event>,
        newValue: Pool | null
    ) => {
        setSelectedPoolId(newValue ? newValue.address : "");
        setBribeValue(0);
        setTargetAPR(0);

    };



    // Handler for entering the target APR in the input field
    const handleTargetAPRChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTargetAPR(parseFloat(event.target.value));
        let bribeValue = calculateBribeValue(
            Number(event.target.value),
            customPoolValue,
            emissionPerVote,
            incentivePerVote
        );
        setBribeValue(Number(bribeValue));
    };

    const handleAuraTargetAPRChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTargetAPR(parseFloat(event.target.value));
        let bribeValue = calculateBribeValueForAura(
            emissionValuePerVote,
            incentivePerVote,
            Number(event.target.value),
            customPoolValue,
        );
        setBribeValue(Number(bribeValue));
    };

    // Handler for when a project wants to experiment with the amount of their bribe
    const handleBribeValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBribeValue(parseFloat(event.target.value));
        let newTargetAPR = calculateAPR(
            Number(event.target.value),
            customPoolValue,
            emissionPerVote,
            incentivePerVote
        );
        setTargetAPR(Number(newTargetAPR));
    };

    const handleAuraBribeValuechange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBribeValue(parseFloat(event.target.value));
        let newTargetAPR = calculateAPRforAura(
            emissionValuePerVote,
            incentivePerVote,
            Number(event.target.value),
            customPoolValue,
        );
        setTargetAPR(Number(newTargetAPR));
    };

    // Handler for the checkbox change event
    const handleUseNewPoolValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUseNewPoolValue(event.target.checked);
        // Set hidePoolSelect to true when the checkbox is checked
        setHidePoolSelect(event.target.checked);
    };

    const handlePOLValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsPOL(event.target.checked);
    };

    // Handler for the new custom pool value input field
    const handlePoolValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newCustomPoolValue = parseFloat(event.target.value);
        setCustomPoolValue(isNaN(newCustomPoolValue) ? 0 : newCustomPoolValue);
        setTargetAPR(0);
        setBribeValue(0)
    };

    const handleLPValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newCustomLPValue = parseFloat(event.target.value);
        setCustomLPValue(isNaN(newCustomLPValue) ? 0 : newCustomLPValue);
    };

    useEffect(() => {
        if (gaugeRelativeWeights && selectedPoolId) {
            const val = selectedPoolId.toLowerCase();
            const selectedGauge = gaugeRelativeWeights.find(
                (gauge) => gauge.pool.address.toLowerCase() === val
            );
            if (selectedGauge) {
                setGaugeRelativeWeight(selectedGauge.gaugeRelativeWeight);
                setAllocatedVotes(parseFloat(selectedGauge.gaugeVotes.toFixed(2)));
                const balPrice = coinData ? coinData.data[balAddress].price : 0;
                // TODO: what metric do we need here? emission per 1$ spent? gauge weight and aura emissions? Need Aura boost??
                setTargetAPR(parseFloat(((selectedGauge.gaugeRelativeWeight * weeklyEmissions * balPrice * 52) / pricePerBPT / (Number(selectedGauge.workingSupply) / 1e18) * 0.4).toFixed(2)));
            }
        }
    }, [gaugeRelativeWeights, selectedPoolId, weeklyEmissions, pricePerBPT]);

    // useEffect to handle other calculations and updates
    useEffect(() => {
        if (hhIncentives.incentives && hhIncentives.incentives.data.length > 1) {
            // Calculate incentives and emission per vote Metrics for a given round
            let totalVotes = 0;
            let totalValue = 0;

            if (useNewPoolValue) {
                // Use the custom poolValue if the checkbox is checked
                setCustomPoolValue(customPoolValue);
            } else if (selectedPoolId) {
                // Otherwise, use the TVL of the selected pool from the pools object
                const selectedPool = pools.find((pool) => pool.address === selectedPoolId);
                console.log("selectedPool", selectedPool)
                if (selectedPool) {
                    setCustomPoolValue(selectedPool.tvlUSD);
                    setPricePerBPT(selectedPool.tvlUSD / selectedPool.totalShares);
                }
            }

            hhIncentives.incentives.data.forEach((item) => {
                totalValue += item.totalValue;
                totalVotes += item.voteCount;
            });

            let emissionVotes = 0;
            let emissionValue = 0;

            hhIncentives.incentives.data.forEach((item) => {
                totalValue += item.totalValue;
                totalVotes += item.voteCount;
                if (item.totalValue > 0) {
                    emissionValue += item.totalValue;
                    emissionVotes += item.voteCount;
                }
            });

            const incentiveEfficency = totalValue / totalVotes;
            const emissionEff = emissionValue / emissionVotes;

            setIncentivePerVote(incentiveEfficency);
            console.log("incentiveEfficiency", incentiveEfficency)
            console.log("totalValue", totalValue)
            console.log("totalVotes", totalVotes)
            setEmissionPerVote(emissionEff);
            setRoundIncentives(totalValue);
        }
    }, [gaugeData, hhIncentives.incentives, useNewPoolValue, customPoolValue, selectedPoolId, pools]);

    const selectedPool = pools.find((pool) => pool.address === selectedPoolId);
    const val = selectedPoolId.toLowerCase();
    const selectedGauge = gaugeRelativeWeights.find(
        (gauge) => gauge.pool.address.toLowerCase() === val
    );

    // Display Table POC
    const votingIncentiveRows: TableData[] = [
        { parameter: 'Incentive Budget (bi-weekly)', value: bribeValue.toString() },
        { parameter: 'Pool size ($)', value: useNewPoolValue ? formatDollarAmount(customPoolValue) : formatDollarAmount(selectedPool? selectedPool.tvlUSD : 0 )  },
        { parameter: 'Voting incentive cost per vlAURA', value: '$' + formatNumber(incentivePerVote, 3) },
        { parameter: 'vlAURA votes', value: formatNumber(bribeValue / incentivePerVote) },
        { parameter: 'Emission per vlAURA', value: formatDollarAmount(emissionValuePerVote) },
        { parameter: 'Total Emission (bi-weekly)', value: formatDollarAmount(emissionValuePerVote * bribeValue / incentivePerVote) },
        { parameter: 'Target APR', value: targetAPR.toString() + '%' },
        ];

    const lpRows : TableData[] = [
        { parameter: 'Position Value ($)', value: formatDollarAmount(customLPValue)},
        { parameter: 'Target APR', value: targetAPR.toString() + '%' },
        { parameter: 'Return (bi-weekly)', value: formatDollarAmount(customLPValue * targetAPR / 100 / 26) },
        { parameter: 'Annual return', value: formatDollarAmount(customLPValue * targetAPR / 100) },


    ];

    const polRows : TableData[] = [
        { parameter: 'POL Position Value ($)', value: formatDollarAmount(customLPValue)},
        { parameter: 'Pool size ($)', value: useNewPoolValue ? formatDollarAmount(customPoolValue) : formatDollarAmount(selectedPool? selectedPool.tvlUSD : 0 )  },
        { parameter: 'Target APR', value: targetAPR.toString() + '%' },
        { parameter: 'Return (bi-weekly)', value: formatDollarAmount(customLPValue * targetAPR / 100 / 26) },
        { parameter: 'Annual return', value: formatDollarAmount(customLPValue * targetAPR / 100) },
        { parameter: 'LP size to breakeven (pool %)', value: formatNumber(bribeValue / (emissionValuePerVote * bribeValue / incentivePerVote) * 100) + '%'},
        { parameter: 'Incentives True Cost (bi-weekly)', value: formatDollarAmount(bribeValue - (customLPValue * targetAPR / 100 / 26))},
        { parameter: 'Incentives True Cost (yearly)', value: formatDollarAmount(bribeValue - (customLPValue * targetAPR / 100))},
        { parameter: 'Cost reduction, current LP (%)', value: formatNumber((1- (bribeValue - (customLPValue * targetAPR / 100))) / (bribeValue * 26) * 100) + '%'},
    ];

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                {/* Voting Incentive Placement Simulator Title */}
                <Grid item xs={11} md={9}>
                    <Typography variant={"h4"}>
                        Aura Ecosystem Voting Incentive Placement Simulator
                    </Typography>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Typography variant={"h5"}>AURA Tokenomics</Typography>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Grid
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{
                            justifyContent: { md: "flex-start", xs: "center" },
                            alignContent: "center",
                        }}
                    >
                        {coinData && coinData.data[auraAddress] && coinData.data[auraAddress].price ? (
                            <Box m={{xs: 0, sm: 1}}>
                                <CoinCard
                                    tokenAddress={auraAddress}
                                    tokenName="AURA"
                                    tokenPrice={coinData.data[auraAddress].price}
                                    tokenPriceChange={coinData.data[auraAddress].priceChangePercentage24h}
                                />
                            </Box>

                        ) : (
                            <CircularProgress />
                        )}
                        <Box m={{xs: 0, sm: 1}}>
                            <MetricsCard
                                mainMetric={totalLockedAmount ? totalLockedAmount : 0}
                                mainMetricInUSD={false}
                                metricName={'Total Aura Locked'}
                                MetricIcon={SelfImprovementIcon}
                                svgContent={AuraIcon}/>
                        </Box>
                        <Box m={{xs: 0, sm: 1}}>
                            {auraGlobalStats ?
                                <MetricsCard
                                    mainMetric={auraGlobalStats ? auraGlobalStats.auraBALTotalSupply : 0}
                                    mainMetricInUSD={false}
                                    metricName='AuraBAL Supply'
                                    mainMetricChange={0}
                                    MetricIcon={TokenIcon}
                                />
                                : <CircularProgress/>}
                        </Box>

                        {/* <Box ml={1}>
                {hhIncentives ? (
                    <MetricsCard
                        mainMetric={
                            1 + (emissionPerVote - incentivePerVote) / emissionPerVote
                        }
                        metricName={"HH Emissions per $1"}
                        mainMetricInUSD={true}
                        metricDecimals={4}
                        MetricIcon={Handshake}
                    />
                ) : (
                    <CircularProgress />
                )}
              </Box> */}
                    </Grid>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Typography variant={"h5"}>HH Voting Market Metrics as of voting round {unixToDate(currentRoundNew)}</Typography>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Grid
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{
                            justifyContent: { md: "flex-start", xs: "center" },
                            alignContent: "center",
                        }}
                    >
                        <Box m={{xs: 0, sm: 1}}>
                            {emissionValuePerVote ?
                                <MetricsCard mainMetric={emissionValuePerVote} metricName={"Emission $/Vote"}
                                             metricDecimals={4}
                                             mainMetricInUSD={true} MetricIcon={ShoppingCartCheckout}/>
                                : <CircularProgress/>}
                        </Box>
                        <Box m={{xs: 0, sm: 1}}>
                            {emissionsPerDollarSpent ?
                                <MetricsCard
                                    mainMetric={emissionsPerDollarSpent}
                                    metricName={"Emissions per $1"} mainMetricInUSD={true}
                                    metricDecimals={4}
                                    MetricIcon={AddShoppingCart}/>
                                : <CircularProgress/>}
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Divider/>
                </Grid>
                {/* Calculator-like layout */}
                <Grid item xs={11} md={9}>
                    <Typography fontWeight={'bold'} variant={'h5'}>Pool Parameter Selection</Typography>
                </Grid>
                <Grid item xs={11} md={9}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={useNewPoolValue}
                                onChange={handleUseNewPoolValueChange}
                            />
                        }
                        label="Use custom value as pool TVL ($)"
                    />
                </Grid>
                {!hidePoolSelect && (
                    <Grid item xs={11} md={9}>
                        {pools && pools.length > 1 ?
                            <FormControl sx={{marginBottom: '10px'}}>
                                <Autocomplete
                                    options={pools as Pool[]}
                                    getOptionLabel={getOptionLabel}
                                    value={pools.find((pool) => pool.address === selectedPoolId) || null}
                                    onChange={(event, newValue) => {
                                        handlePoolChange(event, newValue);
                                    }}
                                    sx={{
                                        minWidth: "500px",
                                        maxWidth: "500px"
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Select a Pool" size="small" />}
                                />
                            </FormControl> :
                            <Box>
                                <CircularProgress />
                                <Typography>Loading pools...</Typography>
                            </Box>}
                        { !hidePoolSelect && allocatedVotes && selectedPool && selectedGauge ?
                            <Card
                                sx={{

                                    minWidth: '100px',
                                    maxWidth: '900px',
                                    border: '1px solid grey',
                                }}
                            >
                                <Box m={1}>
                                    <Typography variant={'h6'}>Active Gauge Found</Typography>
                                </Box>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Pool Composition</TableCell>
                                            <TableCell>TVL</TableCell>
                                            <TableCell>Current Votes</TableCell>
                                            <TableCell>Min BAL APR</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            { selectedPool ?
                                                <TableCell>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box mr={1}>
                                                            <PoolCurrencyLogo tokens={selectedPool.tokens} />
                                                        </Box>
                                                        <Box>
                                                            <PoolComposition poolData={selectedPool} />
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                : <TableCell>-</TableCell>
                                            }
                                            <TableCell>{useNewPoolValue ? formatDollarAmount(customPoolValue) : formatDollarAmount(selectedPool.tvlUSD)}</TableCell>
                                            <TableCell>{formatNumber(allocatedVotes)}</TableCell>
                                            <TableCell>{formatNumber(parseFloat(((selectedGauge.gaugeRelativeWeight * weeklyEmissions * (coinData ? coinData.data[auraAddress].price : 0) * 52) / pricePerBPT / (Number(selectedGauge.workingSupply) / 1e18) * 0.4).toFixed(2)))}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Card>

                            : null }
                    </Grid>
                )}
                {useNewPoolValue && (
                    <Grid item xs={11} md={9}>
                        <TextField
                            size="small"
                            label="Theoretical Pool Value ($)"
                            type="number"
                            value={customPoolValue}
                            onChange={handlePoolValueChange}
                        />
                    </Grid>
                )}
                <Grid item xs={11} md={9}>
                    <Typography fontWeight={'bold'} variant={'h5'}>Target APR vs. Voting Incentive Amount</Typography>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Grid
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{
                            justifyContent: { md: "space-between", xs: "center" },
                            alignContent: "center",
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box mr={1}>
                                <TextField
                                    size="small"
                                    label="Target APR (%)"
                                    type="number"
                                    value={targetAPR}
                                    onChange={handleAuraTargetAPRChange}
                                />
                            </Box>
                            <Box m={1}>
                                <CompareArrowsIcon />
                            </Box>
                            <Box m={1}>
                                <TextField
                                    size="small"
                                    label="Bribe Value ($)"
                                    type="number"
                                    value={bribeValue}
                                    onChange={handleAuraBribeValuechange}
                                />
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Typography fontWeight={'bold'} variant={'h5'}>Liquidity Provider (LP) Inputs</Typography>
                </Grid>
                <Grid item xs={11} md={9}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isPOL}
                                onChange={handlePOLValueChange}
                            />
                        }
                        label="Protocol Owned Liquidity (POL)"
                    />
                </Grid>
                <Grid item xs={11} md={9}>
                    <TextField
                        size="small"
                        label="LP TVL ($)"
                        type="number"
                        value={customLPValue}
                        onChange={handleLPValueChange}
                    />

                </Grid>
                <Grid item xs={11} md={9}>
                    <Divider/>
                </Grid>
                <Grid item xs={11} md={9}>
                    <Typography variant={'h5'}>Voting Incentive Metrics</Typography>
                </Grid>
                <Grid item xs={11} md={9} mb={2}>
                    {bribeValue || targetAPR ?
                    <TableContainer component={Paper}>
                        <Table aria-labelledby="tableTitle"
                               size={'small'}
                               sx={{borderColor: theme.palette.table.light}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Parameter</TableCell>
                                    <TableCell align="right" style={{ fontWeight: 'bold' }}>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {votingIncentiveRows.map((row) => (
                                    <TableRow key={row.parameter}>
                                        <TableCell component="th" scope="row">
                                            {row.parameter}
                                        </TableCell>
                                        <TableCell align="right">{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> : <Typography>Set parameters</Typography> }
                </Grid>
                {!isPOL ?
                <Grid item xs={11} md={9}>
                    <Typography variant={'h5'}>LP Metrics</Typography>
                </Grid> : null }
                {!isPOL ?
                <Grid item xs={11} md={9} mb={2}>
                    { customLPValue || targetAPR ?
                        <TableContainer component={Paper}>
                            <Table aria-labelledby="tableTitle"
                                   size={'small'}
                                   sx={{borderColor: theme.palette.table.light}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Parameter</TableCell>
                                        <TableCell align="right" style={{ fontWeight: 'bold' }}>Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lpRows.map((row) => (
                                        <TableRow key={row.parameter}>
                                            <TableCell component="th" scope="row">
                                                {row.parameter}
                                            </TableCell>
                                            <TableCell align="right">{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> : <Typography>Set parameters</Typography> }
                </Grid> : null }
                {isPOL ?
                <Grid item xs={11} md={9}>
                    <Typography variant={'h5'}>POL Metrics</Typography>
                </Grid> : null  }
                {isPOL ?
                <Grid item xs={11} md={9} mb={2}>
                    {bribeValue ?
                        <TableContainer component={Paper}>
                            <Table aria-labelledby="tableTitle"
                                   size={'small'}
                                   sx={{borderColor: theme.palette.table.light}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Parameter</TableCell>
                                        <TableCell align="right" style={{ fontWeight: 'bold' }}>Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {polRows.map((row) => (
                                        <TableRow key={row.parameter}>
                                            <TableCell component="th" scope="row">
                                                {row.parameter}
                                            </TableCell>
                                            <TableCell align="right">{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> : <Typography>Set parameters</Typography> }
                </Grid> : null }
            </Grid>
        </Box>
    );

}
