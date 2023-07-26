import {CapturedTVL} from "../../../data/aura/auraTypes";
import ReactEcharts from 'echarts-for-react';
import {graphic} from "echarts";
import {useTheme} from "@mui/material/styles";

type LineChartProps = {
    dataSets: { name: string; data: CapturedTVL[] }[];
};

export function ProtocolMultiLineChart({dataSets}: LineChartProps) {
    const theme = useTheme()

    const maxLength = Math.max(...dataSets.map(dataSet => dataSet.data.length));


    const paddedDataSets = dataSets.map(dataSet => {
        const padding = Array(maxLength - dataSet.data.length).fill({ time: null, capturedPercentage: null });
        return { ...dataSet, data: [...padding, ...dataSet.data] };
    });

    // Define a color for each data set (replace with your own colors)
    const gradients = [
        new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgb(93, 36, 198)' },
            { offset: 1, color: 'rgb(156, 78, 214)' },
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgb(77, 119, 255)' },
            { offset: 1, color: 'rgb(0, 221, 255)' },
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgb(245, 2, 2)' },
            { offset: 1, color: 'rgb(214, 79, 79)' },
        ]),
    ];

    const option = {
        color: ['#b300ff','#37A2FF', '#f50202'],
        legend: {
            data: ['Ethereum', 'Arbitrum', 'Optimism'],
            inactiveColor: "red",
            icon: 'circle',
            textStyle: {
                color: theme.palette.mode === 'dark' ? 'white' : 'black'
            },
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params: any[]) {
                let result = params[0].axisValueLabel + '<br/>';
                params.forEach(param => {
                    const value = param.data;
                    const marker = param.marker; // circle marker using series color
                    result += `${marker} ${param.seriesName}: ${parseFloat(value).toFixed(2)}%<br/>`;
                });
                return result;
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
            boundaryGap: false,
            data: paddedDataSets[0].data.map((item) => item.time),
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}%' // Add percentage sign to y-axis labels
            }
        },
        series: paddedDataSets.map((dataSet, index) => ({
            name: dataSet.name,
            type: 'line',
            data: dataSet.data.map((item) => item.capturedPercentage),
            areaStyle: { color: gradients[index % gradients.length] },
            lineStyle: { color: gradients[index % gradients.length], width: 0 },
            connectNulls: true,
            smooth: true,
            showSymbol: false,
        })),
    };

    return <ReactEcharts option={option}/>;
}
