import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts';
import { CircularProgress } from '@mui/material';
import { BalancerChartDataItem} from '../../data/balancer/balancerTypes';
import { formatAmount, formatDollarAmount } from '../../utils/numbers';

export interface TvlAreaProps {
    chartData: BalancerChartDataItem[],
    dataTitle: string,
    format?: string,
    backgroundColor?: string,
    height?: string,

}


export default function GenericAreaChart({chartData, dataTitle, format = '$', backgroundColor = '#6a7985', height = '350px'}: TvlAreaProps) {

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
        chartData.length > 1 ?
            <ReactEcharts
                option={option}
                style={{ height: height, width: '100%' }}
                className={'react_for_echarts'}
            /> : <CircularProgress />
    );
}