import React from 'react';
import { ProtocolData } from '../../../data/balancer/useProtocolDataWithClientOverride';
import { Card, Grid, Box } from '@mui/material';
import CustomLinearProgress from '../../Progress/CustomLinearProgress';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@mui/material';
import AuraBALProtocolTVLCharts from "./AuraBALProtocolTVLCharts";
import {BalancerChartDataItem} from "../../../data/balancer/balancerTypes";

export interface Normal {
    color: string;
}

export interface ItemStyle {
    normal: Normal;
}

export interface echartsData {
    name: number;
    type: string;
    itemStyle: ItemStyle;
}

export interface ToolTipParams {
    value: string;
    data: echartsData;
}

interface ProtocolAreaChartProps {
    mintedAuraBAL: BalancerChartDataItem[],
    stakedAuraBAL: BalancerChartDataItem[],
    compounderAuraBAL: BalancerChartDataItem[],
}



export default function AuraBALMultiAreaChart({mintedAuraBAL, stakedAuraBAL, compounderAuraBAL}: ProtocolAreaChartProps) {

    const mintedAuraBALData = mintedAuraBAL.map(el => Number(el.value.toFixed(2)));
    let stakedAuraBALData = stakedAuraBAL.map(el => Number(el.value.toFixed(2)));


    //add preceeding zero values based on mainnet size to later deployed chains
    if (mintedAuraBALData && stakedAuraBALData) {
        const diffSize = mintedAuraBALData.length - stakedAuraBALData.length;
        const zeroArray = mintedAuraBALData.slice(0, diffSize).map(el => 0);
        stakedAuraBALData = zeroArray.concat(stakedAuraBALData);
    }

    let compounderAuraBALData = compounderAuraBAL.map(el => Number(el.value.toFixed(2)));

    if (mintedAuraBALData && compounderAuraBALData) {
        const diffSize = mintedAuraBALData.length - compounderAuraBALData.length;
        const zeroArray = mintedAuraBALData.slice(0, diffSize).map(el => 0);
        compounderAuraBALData = zeroArray.concat(compounderAuraBALData);
    }


    const timexAxisData = mintedAuraBAL.map(el => el.time);


    //---Hooks for custom time ranges---
    const [timeRange, setTimeRange] = React.useState('180');
    //data state
    const [timeRangedMintedAuraBALData, settimeRangedMintedAuraBALData] = React.useState(mintedAuraBALData)
    const [rangedStakedAuraBALData, setrangedStakedAuraBALData] = React.useState(stakedAuraBALData);
    const [rangedCompounderAuraBALData, setrangedCompounderAuraBALData] = React.useState(compounderAuraBALData);
    const [rangedTimexAxisData, setRangedTimexAxisData] = React.useState(timexAxisData);

    React.useEffect(() => {
        if (mintedAuraBALData.length < Number(timeRange) || timeRange === '0') {
            settimeRangedMintedAuraBALData(mintedAuraBALData);
            setrangedStakedAuraBALData(stakedAuraBALData);
            setrangedCompounderAuraBALData(compounderAuraBALData);
            setRangedTimexAxisData(timexAxisData)
        } else {
            settimeRangedMintedAuraBALData(mintedAuraBALData.slice(mintedAuraBALData.length - Number(timeRange)))
            setrangedStakedAuraBALData(stakedAuraBALData.slice(stakedAuraBALData.length - Number(timeRange)))
            setrangedCompounderAuraBALData(compounderAuraBALData.slice(compounderAuraBALData.length - Number(timeRange)))
            setRangedTimexAxisData(timexAxisData.slice(timexAxisData.length - Number(timeRange)))
        }
    }, [mintedAuraBAL, timeRange]);

    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(event.target.value as string);
        if (mintedAuraBALData.length < Number(event.target.value) || event.target.value === '0') {
            settimeRangedMintedAuraBALData(mintedAuraBALData);
            setrangedStakedAuraBALData(stakedAuraBALData);
            setrangedCompounderAuraBALData(compounderAuraBALData);
        } else if (mintedAuraBALData.length >= Number(event.target.value)) {
            settimeRangedMintedAuraBALData(mintedAuraBALData.slice(mintedAuraBALData.length - Number(event.target.value)))
            setrangedStakedAuraBALData(stakedAuraBALData.slice(stakedAuraBALData.length - Number(event.target.value)))
            setrangedCompounderAuraBALData(compounderAuraBALData.slice(compounderAuraBALData.length - Number(event.target.value)))
        }
    };

    return (
            <Card sx={{boxShadow: 3}}>
                <Box m={1}>
                    <FormControl size="small">
                        <Select
                            sx={{
                                backgroundColor: "background.paper",
                                boxShadow: 2,
                                borderRadius: 2,
                                borderColor: 0,
                            }}
                            color="primary"
                            labelId="timeRangeSelectLabel"
                            id="timeRangeSelect"
                            onChange={handleChange}
                            value={timeRange}
                            inputProps={{
                                name: 'timeRange',
                                id: 'timeRangeId-native-simple',
                            }}
                        >
                            <MenuItem disabled={true} dense={true}>Time range:</MenuItem>
                            <Divider />
                            <MenuItem value={'30'}> 30 days</MenuItem>
                            <MenuItem value={'90'}>90 days</MenuItem>
                            <MenuItem value={'180'}>180 days</MenuItem>
                            <MenuItem value={'365'}>365 days</MenuItem>
                            <MenuItem value={'0'}>All time</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <AuraBALProtocolTVLCharts
                    mintedAuraBAL={timeRangedMintedAuraBALData}
                    stakedAuraBAL={rangedStakedAuraBALData}
                    compounderAuraBAL={rangedCompounderAuraBALData}
                    xAxis={rangedTimexAxisData} />
            </Card>
    )
}