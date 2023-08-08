import ReactEcharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import {formatDollarAmount, formatPercentageAmount} from "../../../utils/numbers";
import {AppColors} from "../../../assets/auraTheme/colors";

export interface BribesProps {
    auraPrice: number[],
    auraAPR: number[],
    xAxisData: string[],
    height: string,
}

interface TooltipParam {
    name: string;
    value: number;
    seriesName: string;
}

export default function AuraIncentiveAPRChart({auraPrice, auraAPR, xAxisData, height
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
                    if (param.seriesName === 'vlAura APR') {
                        res += `<br/>${param.seriesName}: ${formatPercentageAmount(param.value * 100)}` + '%'
                    } else if (param.seriesName === 'Aura Price') {
                        res += `<br/>${param.seriesName}: ${formatDollarAmount(param.value)}`
                    }
                })
                return res;
            }
        },
        legend: {
            data:['vlAura APR', 'Aura Price'],
            textStyle: {
                color: theme.palette.secondary
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
                name: 'Aura Price',
                min: 0,
                max: Math.max(...auraPrice),
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: AppColors.purple[600]
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
                name: 'vlAura APR',
                min: 0,
                max: Math.max(...auraAPR),
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.black[600]
                    }
                },
                axisLabel: {
                    formatter: function (value:number) {
                        return formatPercentageAmount(value * 100) + ' %';
                    },
                    color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.black[600]
                },
                splitLine: {
                    show: false  // This removes the split lines
                }
            },
        ],
        series: [
            {
                name:'Aura Price',
                type:'line',
                itemStyle: {
                    color: AppColors.purple[600]
                },
                data:auraPrice,
                yAxisIndex: 0,
            },
            {
                name:'vlAura APR',
                type:'bar',
                data:auraAPR,
                yAxisIndex: 1,
                itemStyle: {
                    color: AppColors.gray[400]
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
