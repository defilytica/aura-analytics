import ReactEcharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import {formatDollarAmount, formatNumber} from "../../utils/numbers";

export interface BribesProps {
    dollarPerVlAssetData: number[],
    totalAmountDollarsData: number[],
    xAxisData: string[],
    height: string,
}

interface TooltipParam {
    name: string;
    value: number;
    seriesName: string;
}

export default function AuraDailyUnlocksChart({dollarPerVlAssetData, totalAmountDollarsData, xAxisData,
 height
                                               }: BribesProps) {
    const theme = useTheme()

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                }
            },
            formatter: function (params:TooltipParam[]) {
                let res = params[0].name;
                params.forEach(param => {
                    if (param.seriesName === 'Cumulative vlAura') {
                        res += `<br/>${param.seriesName}: ${formatNumber(param.value)}`
                    } else if (param.seriesName === 'Daily Unlocks') {
                        res += `<br/>${param.seriesName}: ${formatNumber(param.value)}`
                    }
                })
                return res;
            }
        },
        legend: {
            data:['$/vlAURA', 'Voting Incentives'],
            textStyle: {
                color: '#FFFFFF',
            }
        },
        xAxis: [
            {
                type: 'category',
                data: xAxisData, // This can be customized based on your data.
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Cumulative vlAura',
                min: 0,
                max: Math.max(...dollarPerVlAssetData),
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: '#5793f3'
                    }
                },
                axisLabel: {
                    formatter: function (value:number) {
                        return formatNumber(value);
                    },
                },
            },
            {
                type: 'value',
                name: 'Daily Unlocks',
                min: 0,
                max: Math.max(...totalAmountDollarsData),
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLabel: {
                    formatter: function (value:number) {
                        return formatNumber(value);
                    },
                    color: '#FFFFFF'
                },
                splitLine: {
                    show: false  // This removes the split lines
                }
            },
        ],
        series: [
            {
                name:'Cumulative vlAura',
                type:'line',
                data:dollarPerVlAssetData,
                yAxisIndex: 0,
            },
            {
                name:'Daily unlocks',
                type:'bar',
                data:totalAmountDollarsData,
                yAxisIndex: 1,
                itemStyle: {
                    color: theme.palette.secondary.main
                },
            }
        ]
    };

    return (
        <ReactEcharts
            option={option}
            style={{ height: height, width: '100%' }}
            className="graph"
        />
    );
}