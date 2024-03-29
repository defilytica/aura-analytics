import ReactEcharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import {formatDollarAmount} from "../../../utils/numbers";
import {AppColors} from "../../../assets/auraTheme/colors";

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

export default function DashboardOverviewChart({dollarPerVlAssetData, totalAmountDollarsData, xAxisData, height
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
                    if (param.seriesName === '$/vlAURA') {
                        res += `<br/>${param.seriesName}: ${formatDollarAmount(param.value, 3)}`
                    } else if (param.seriesName === 'Voting Incentives') {
                        res += `<br/>${param.seriesName}: ${formatDollarAmount(param.value)}`
                    }
                })
                return res;
            }
        },
        legend: {
            data:['$/vlAURA', 'Voting Incentives'],
            textStyle: {
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.gray[800]
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
                name: '$/vlAURA',
                min: 0,
                max: Math.max(...dollarPerVlAssetData),
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: 'rgb(255, 204, 0)'
                    }
                },
                axisLabel: {
                    formatter: function (value:number) {
                        return formatDollarAmount(value);
                    },
                },
            },
            {
                type: 'value',
                name: 'Voting Incentives',
                min: 0,
                max: Math.max(...totalAmountDollarsData),
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.gray[800]
                    }
                },
                axisLabel: {
                    formatter: function (value:number) {
                        return formatDollarAmount(value);
                    },
                    color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.gray[800]
                },
                splitLine: {
                    show: false  // This removes the split lines
                }
            },
        ],
        series: [
            {
                name:'$/vlAURA',
                type:'line',
                itemStyle: {
                    color: 'rgb(255, 204, 0)'
                },
                data:dollarPerVlAssetData,
                yAxisIndex: 0,
            },
            {
                name:'Voting Incentives',
                type:'bar',
                data:totalAmountDollarsData,
                yAxisIndex: 1,
                itemStyle: {
                    color: 'rgb(32, 129, 240)'
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
