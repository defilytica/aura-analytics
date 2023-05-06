import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts'
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import CustomLinearProgress from '../../Progress/CustomLinearProgress';
import { formatDollarAmount } from '../../../utils/numbers';

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
    mintedAuraBAL: number[],
    stakedAuraBAL: number[],
    compounderAuraBAL: number[],
    xAxis: string[],
}


export default function AuraBALProtocolTVLCharts({ mintedAuraBAL, stakedAuraBAL, compounderAuraBAL,  xAxis }: ProtocolAreaChartProps) {


    const theme = useTheme()

    const option = {
        color: ['#b300ff','#582ca2', '#868e94'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                }
            },


        },
        legend: {
            data: ['auraBAL Supply', 'auraBAL Staked', 'auraBAL Autocompounder'],
            inactiveColor: "red",
            icon: 'circle',
            textStyle: {
                color: theme.palette.mode === 'dark' ? 'white' : 'black'
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
                boundaryGap: false,
                data: xAxis
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: function (d: number) {
                        return formatDollarAmount(d);
                    }
                }
            }
        ],
        series: [
            {
                name: 'auraBAL Supply',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.95,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(179,0,255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(93,36,198)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return formatDollarAmount(value)
                    }
                },
                data: mintedAuraBAL
            },
            {
                name: 'auraBAL Staked',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.95,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(93,36,198)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(88,44,162)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return formatDollarAmount(value)
                    }
                },
                data: stakedAuraBAL
            },
            {
                name: 'auraBAL Autocompounder',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.95,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(134,142,148)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(93,36,198)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return formatDollarAmount(value)
                    }
                },
                data: compounderAuraBAL
            },
        ]
    };


    return (
        mintedAuraBAL.length > 1 && stakedAuraBAL.length > 1 && compounderAuraBAL.length > 1 && xAxis ?
            <ReactEcharts
                option={option}
                style={{ height: '350px' }}
                className={'react_for_echarts'}
            /> : <Grid
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