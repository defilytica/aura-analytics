import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts';
import {Box, Card, CircularProgress, Divider} from '@mui/material';
import { BalancerChartDataItem } from '../../../data/balancer/balancerTypes';
import {formatAmount, formatDollarAmount} from "../../../utils/numbers";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";


export interface TvlAreaProps {
    chartData: BalancerChartDataItem[],
    dataTitle: string,
    format?: string,
    backgroundColor?: string,
    height?: string,
    changeHandler: (event: SelectChangeEvent) => void,
    timeRange: number,
}


export default function FinancialAreaChart({chartData, dataTitle, format = '$', backgroundColor = '#6a7985', height = '278px', changeHandler, timeRange}: TvlAreaProps) {

    let xData = chartData.map(el => el.time);
    let yData = chartData.map(el => el.value);


    const option = {
        color: ['#9C4ED6'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                }
            },


        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                show: true,
                boundaryGap: false,
                data: xData
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: true,
                axisLabel: {
                    formatter: function(d: number) {
                        return format === '$' ? formatDollarAmount(d) : formatAmount(d);
                    }
                }
            }
        ],
        series: [
            {
                name: dataTitle,
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 2,
                    color: new graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#9C4ED6' }, // Brighter color
                        { offset: 1, color: '#5d24c6' }, // Darker color
                    ]),
                    shadowColor: 'rgba(156, 78, 214, 0.5)',
                    shadowBlur: 10,
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.95,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(93, 36, 198)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(156, 78, 214)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series',
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return format === '$' ? formatDollarAmount(value) : formatAmount(value);
                    }
                },
                data: yData
            },
        ]
    };

    return(
        chartData.length > 2 ?
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
                            <MenuItem value={'180'}>All time</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <ReactEcharts
                    option={option}
                    style={{ height: height, width: '100%' }}
                    className={'react_for_echarts'}
                />
            </Card>
          : <CircularProgress />
    );
}