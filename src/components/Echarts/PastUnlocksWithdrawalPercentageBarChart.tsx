import React from 'react';
import {graphic} from 'echarts';
import ReactEcharts from 'echarts-for-react';
import {useTheme} from "@mui/material/styles";
import {AppColors} from "../../assets/auraTheme/colors";

export type ChartDataItem = {
    date: string;
    unlock: number;
    withdraw: number;
    relocked: number;
};

export interface PastUnlocksWithdrawalsChartProps {
    filteredChartData: ChartDataItem[];
}

type TransformedDataItem = {
    date: string;
    unlockPercentage: number;
    withdrawPercentage: number;
    relockedPercentage: number;
};


const transformData = (data: ChartDataItem[]) => {
    return data.map(({ date, unlock, withdraw, relocked }) => {
        const total = withdraw + relocked;
        return {
            date,
            unlockPercentage: parseFloat(((unlock / total) * 100).toFixed(1)),
            withdrawPercentage: parseFloat(((withdraw / total) * 100).toFixed(1)),
            relockedPercentage: parseFloat(((relocked / total) * 100).toFixed(1)),
        };
    });
};

export function PastUnlocksWithdrawalPercentageBarChart({
                                                filteredChartData,
                                            }: PastUnlocksWithdrawalsChartProps){
    const transformedData = transformData(filteredChartData);
    const theme = useTheme();
    let height = '350px'
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: (params: any) => {
                const date = params[0].axisValue;
                let tooltipText = date + '<br>';
                params.forEach((param: any) => {
                    tooltipText +=
                        param.marker +
                        param.seriesName +
                        ': ' +
                        param.value +
                        '%<br>';
                });
                return tooltipText;
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['Withdrawn', 'Relocked'],
            inactiveColor: "red",
            textStyle: {
                color: theme.palette.mode === 'dark' ? 'white' : 'black'
            },
        },
        xAxis: {
            type: 'category',
            data: transformedData.map((item:TransformedDataItem) => {
                const weekStart = new Date(item.date);
                const weekEnd = new Date(weekStart);
                weekEnd.setDate(weekStart.getDate() + 6);
                return (
                    weekStart.toLocaleDateString() +
                    ' - ' +
                    weekEnd.toLocaleDateString()
                );
            }),
        },
        yAxis: {
            type: 'value',
            axisLabel: { formatter: '{value}%' },
            max: 100,
        },
        series: [
            {
                name: 'Withdrawn',
                type: 'bar',
                stack: 'percentage',
                data: transformedData.map((item: TransformedDataItem) => item.withdrawPercentage),
                itemStyle: {
                    color: theme.palette.primary.main
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }
                    ])
                },
            },
            {
                name: 'Relocked',
                type: 'bar',
                stack: 'percentage',
                data: transformedData.map((item: TransformedDataItem) => item.relockedPercentage),
                itemStyle: {
                    color: theme.palette.success.main
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }
                    ])
                },
            },
        ],
    };

    return (
        <ReactEcharts
            option={option}
            style={{height: height, width: '100%'}}
            className={'react_for_echarts'}
        />
    );
};