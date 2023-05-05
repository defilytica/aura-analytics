import React from 'react';
import {graphic} from 'echarts';
import ReactEcharts from 'echarts-for-react';
import {useTheme} from "@mui/material/styles";

export type ChartDataItem = {
    date: string;
    unlock: number;
    withdraw: number;
    relocked: number;
};

export interface PastUnlocksWithdrawalsChartProps {
    filteredChartData: ChartDataItem[];
}

export function PastUnlocksWithdrawalsChart({
                                                filteredChartData,
                                            }: PastUnlocksWithdrawalsChartProps){
    const theme = useTheme();
    let height = '278px'
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
        legend: {
            data: ['Unlock', 'Withdraw', 'Relocked', 'Locked'],
            inactiveColor: "red",
            textStyle: {
                color: theme.palette.mode === 'dark' ? 'white' : 'black'
            },
        },
        xAxis: {
            type: 'category',
            data: filteredChartData.map(item => {
                const weekStart = new Date(item.date);
                const weekEnd = new Date(weekStart);
                weekEnd.setDate(weekStart.getDate() + 6);
                return (
                    weekStart.toLocaleDateString() + ' - ' + weekEnd.toLocaleDateString()
                );
            }),
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Unlock',
                type: 'bar',
                data: filteredChartData.map(item => item.unlock),
                itemStyle: {
                    color: theme.palette.secondary.main
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
                name: 'Withdraw',
                type: 'bar',
                data: filteredChartData.map(item => item.withdraw),
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
                data: filteredChartData.map(item => item.relocked),
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