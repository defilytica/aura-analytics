import ReactEcharts from 'echarts-for-react';
import {useTheme} from '@mui/material/styles';
import {CircularProgress} from '@mui/material';
import {BalancerChartDataItem} from '../../../data/balancer/balancerTypes';
import {formatDollarAmount, formatNumber} from '../../../utils/numbers';
import {pink, blue} from '@mui/material/colors';
import {AppColors} from "../../../assets/auraTheme/colors";

export interface MultiBarChartProps {
    data1: BalancerChartDataItem[],
    dataTitle1: string,
    height: string,
    unit?: string
}

export default function IncomeVsSpendingMultiBarChart({data1, dataTitle1, height, unit}: MultiBarChartProps) {

    const theme = useTheme();
    let xData1 = data1.map(el => el.time);
    const xData = xData1

    let yData1 = xData.map(time => {
        let match = data1.find(e => e.time === time);
        return match ? match : {time: time, value: 0};
    }).map(el => el.value);


    let cumulativeSpendings = yData1.reduce<number[]>((acc, val) => {
        let previousSum = (acc.length > 0) ? acc[acc.length - 1] : 0;
        acc.push(previousSum + val);
        return acc;
    }, []);


    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            valueFormatter: function (value: number) {
                if(value >= 1e6) {
                    return unit? `${formatNumber(value/1e6)}M ${unit}` : `${formatDollarAmount(value/1e6)}M`;
                } else if(value >= 1e3) {
                    return unit? `${formatNumber(value/1e3)}k ${unit}` : `${formatDollarAmount(value/1e3)}k`;
                } else {
                    return unit? formatNumber(value) + ' ' + unit : formatDollarAmount(value);
                }
            }
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
                name: 'Monthly Spendings',
                axisLabel: {
                    formatter: function (d: number) {
                        if(d >= 1e6) {
                            return unit? `${formatNumber(d/1e6)}M ${unit}` : `${formatDollarAmount(d/1e6)}M`;
                        } else if(d >= 1e3) {
                            return unit? `${formatNumber(d/1e3)}k ${unit}` : `${formatDollarAmount(d/1e3)}k`;
                        } else {
                            return unit? formatNumber(d) + ' ' + unit : formatDollarAmount(d);
                        }
                    }
                },
                axisPointer: {
                    type: 'shadow'
                }
            },
        ],
        series: [
            {
                emphasis: {
                    itemStyle: {
                        color: pink[500]
                    }
                },
                name: dataTitle1,
                data: yData1,
                type: 'bar',
                itemStyle: {
                    color: theme.palette.mode === "dark" ? AppColors.gray[400] : AppColors.gray[500]
                },
                tooltip: {
                    formatter: function (params: any) {
                        if(params.value >= 1e6) {
                            return unit? `${formatNumber(params.value/1e6)}M ${unit}` : `${formatDollarAmount(params.value/1e6)}M`;
                        } else if(params.value >= 1e3) {
                            return unit? `${formatNumber(params.value/1e3)}k ${unit}` : `${formatDollarAmount(params.value/1e3)}k`;
                        } else {
                            return unit? formatNumber(params.value) + ' ' + unit : formatDollarAmount(params.value);
                        }
                    }
                },
            },
            {
                name: 'Cumulative Spendings',
                data: cumulativeSpendings,
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: theme.palette.primary.main,
                },
                itemStyle: {
                    color: theme.palette.primary.main
                },
                tooltip: {
                    formatter: function (params: any) {
                        if(params.value >= 1e6) {
                            return unit? `${formatNumber(params.value/1e6)}M ${unit}` : `${formatDollarAmount(params.value/1e6)}M`;
                        } else if(params.value >= 1e3) {
                            return unit? `${formatNumber(params.value/1e3)}k ${unit}` : `${formatDollarAmount(params.value/1e3)}k`;
                        } else {
                            return unit? formatNumber(params.value) + ' ' + unit : formatDollarAmount(params.value);
                        }
                    }
                }
            },
        ]
    };

    return (
        data1.length > 1 ?
            <ReactEcharts
                option={option}
                style={{height: height, width: '100%'}}
                className={'react_for_echarts'}
                theme={"shine"}
            /> : <CircularProgress/>
    );
}