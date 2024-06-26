import React from 'react';
import { Card, Grid, Box } from '@mui/material';
import CustomLinearProgress from '../../Progress/CustomLinearProgress';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@mui/material';
import ProtocolTVLCharts from './ProtocolTVLCharts';
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
    mainnetProtocolData: BalancerChartDataItem[],
    arbitrumProtocolData: BalancerChartDataItem[],
    optimismProtocolData: BalancerChartDataItem[],
    polygonProtocolData: BalancerChartDataItem[],
    gnosisProtocolData: BalancerChartDataItem[],
    baseProtocolData: BalancerChartDataItem[],
    zkevmProtocolData: BalancerChartDataItem[],
    avalancheProtocolData: BalancerChartDataItem[],
    changeHandler: (event: SelectChangeEvent) => void,
    timeRange: number,
}



export default function ProtocolMultiAreaChart({mainnetProtocolData, arbitrumProtocolData, optimismProtocolData, polygonProtocolData, gnosisProtocolData, baseProtocolData, zkevmProtocolData, avalancheProtocolData, changeHandler, timeRange}: ProtocolAreaChartProps) {

    const mainnetData = mainnetProtocolData.map(el => Number(el.value.toFixed(2)));
    let arbitrumData = arbitrumProtocolData.map(el => Number(el.value.toFixed(2)));
    let optimismData = optimismProtocolData.map(el => Number(el.value.toFixed(2)));
    let polygonData = polygonProtocolData.map(el => Number(el.value.toFixed(2)));
    let gnosisData = gnosisProtocolData.map(el => Number(el.value.toFixed(2)));
    let baseData = baseProtocolData.map(el => Number(el.value.toFixed(2)));
    let zkevmData = zkevmProtocolData.map(el => Number(el.value.toFixed(2)));
    let avalancheData = avalancheProtocolData.map(el => Number(el.value.toFixed(2)));
    
    //add preceeding zero values based on mainnet size to later deployed chains
    if (mainnetData && arbitrumData) {
        const diffSize = mainnetData.length - arbitrumData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        arbitrumData = zeroArray.concat(arbitrumData);
    }

    if (mainnetData && optimismData) {
        const diffSize = mainnetData.length - optimismData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        optimismData = zeroArray.concat(optimismData);
    }

    if (mainnetData && polygonData) {
        const diffSize = mainnetData.length - polygonData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        polygonData = zeroArray.concat(polygonData);
    }

    if (mainnetData && gnosisData) {
        const diffSize = mainnetData.length - gnosisData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        gnosisData = zeroArray.concat(gnosisData);
    }

    if (mainnetData && baseData) {
        const diffSize = mainnetData.length - baseData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        baseData = zeroArray.concat(baseData);
    }

    if (mainnetData && zkevmData) {
        const diffSize = mainnetData.length - zkevmData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        zkevmData = zeroArray.concat(zkevmData);
    }

    if (mainnetData && avalancheData) {
        const diffSize = mainnetData.length - avalancheData.length;
        const zeroArray = mainnetData.slice(0, diffSize).map(el => 0);
        avalancheData = zeroArray.concat(avalancheData);
    }


    const mainnetxAxisData = mainnetProtocolData.map(el => el.time);

    return (
        optimismData.length > 10 ?
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
                        onChange={changeHandler}
                        value={String(timeRange)}
                        inputProps={{
                            name: 'timeRange',
                            id: 'timeRangeId-native-simple',
                        }}
                    >
                        <MenuItem disabled={true} dense={true}>Time range:</MenuItem>
                        <Divider />
                        <MenuItem value={'30'}> 30 days</MenuItem>
                        <MenuItem value={'90'}>90 days</MenuItem>
                        <MenuItem value={'120'}>120 days</MenuItem>
                        <MenuItem value={'360'}>All time</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            <ProtocolTVLCharts  
                mainnetData={mainnetData}
                arbitrumData={arbitrumData}
                optimismData={optimismData}
                polygonData={polygonData}
                gnosisData={gnosisData}
                baseData={baseData}
                zkevmData={zkevmData}
                avalancheData={avalancheData}
                xAxis={mainnetxAxisData}/>
            </Card> : <Grid
            container
            spacing={2}
            mt='10%'
            mb='10%'
            sx={{ justifyContent: 'center' }}
        >
            <CustomLinearProgress />
        </Grid>
    )
}