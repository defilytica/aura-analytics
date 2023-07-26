import ReactEcharts from 'echarts-for-react';
import { formatDollarAmount} from '../../../utils/numbers';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import CustomLinearProgress from '../../Progress/CustomLinearProgress';
import {graphic} from "echarts";

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

interface ProtocolBarChartProps {
    mainnetData: number[],
    arbitrumData: number[],
    optimismData: number[],
    xAxis: string[],
}



export default function ProtocolMultiBarCharts({mainnetData, arbitrumData, optimismData, xAxis}: ProtocolBarChartProps) {

    const theme = useTheme();

    const option = {
        color: ['#00DDFF','#80FFA5', '#37A2FF', '#0d8e74'],
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
            data: ['Ethereum', 'Arbitrum', 'Optimism'],
            inactiveColor: "red",
            textStyle:{
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
                    formatter: function(d: number) {
                        return formatDollarAmount(d)
                    }
                }
            }
        ],
        series: [
            {
                name: 'Ethereum',
                type: 'bar',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                itemStyle: {
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
                    focus: 'series'
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return formatDollarAmount(value);
                    }
                },
                data: mainnetData
            },
            {
                name: 'Arbitrum',
                type: 'bar',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                itemStyle: {
                    opacity: 0.95,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(77, 119, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(0, 221, 255)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return formatDollarAmount(value);
                    }
                },
                data: arbitrumData
            },
            {
                name: 'Optimism',
                type: 'bar',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                itemStyle: {
                    opacity: 0.95,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(245, 2, 2)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(214, 79, 79)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return formatDollarAmount(value);
                    }
                },
                data: optimismData
            },
        ]
    };

    const onChartHover = (params: any) => {
        console.log('Chart mouse trigger params:', params);
      };
    
      const onEvents = {
        mousemove: onChartHover,
      };

    return (
        mainnetData.length > 1 && arbitrumData.length > 1 && optimismData.length > 1 && xAxis ?
            <ReactEcharts
                option={option}
                theme='my_theme'
                style={{ height: '350px' }}
                className={'react_for_echarts'}
                //onEvents={onEvents}
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