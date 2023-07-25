import ReactEcharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import { BalancerChartDataItem } from '../../data/balancer/balancerTypes';
import { formatAmount, formatDollarAmount } from '../../utils/numbers';
import { pink } from '@mui/material/colors';
import {AppColors} from "../../assets/auraTheme/colors";

export interface GenericBarChartProps {
    data: BalancerChartDataItem[],
    customUnit?: string
}

export default function GenericBarChart({ data, customUnit = '' }: GenericBarChartProps) {

    const theme = useTheme();
    let xData = data.map(el => el.time);
    let yData = data.map(el => el.value);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xData
        },
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: function (d: number) {
                        return customUnit ? formatAmount(d) : formatDollarAmount(d) ;
                    }
                }
            }
        ],
        series: [
            {
                emphasis: {
                    itemStyle: {
                        color: pink[500]
                    }
                },
                data: yData,
                type: 'bar',
                itemStyle: {
                    color: AppColors.purple[50]
                },
                tooltip: {
                    valueFormatter: function (value: number) {
                        return customUnit ? formatAmount(value) + ' ' + customUnit: formatDollarAmount(value) ;
                    }
                },
            },
        ]
    };

    return (
        data.length > 1 ?
            <ReactEcharts
                option={option}
                style={{ height: '350px', width: '100%' }}
                className={'react_for_echarts'}
            /> : <CircularProgress />
    );
}
