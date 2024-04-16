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
        const padding = Array(maxLength - dataSet.data.length).fill({time: null, capturedPercentage: null});
        return {...dataSet, data: [...padding, ...dataSet.data]};
    });

    const gradients = [
        new graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgb(134,142,148)'},
            {offset: 1, color: 'rgb(93,36,198)'}
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgb(77, 119, 255)'},
            {offset: 1, color: 'rgb(0, 221, 255)'},
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgb(245, 2, 2)'},
            {offset: 1, color: 'rgb(214, 79, 79)'},
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgb(93, 36, 198)'},
            {offset: 1, color: 'rgb(156, 78, 214)'},
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: 'rgb(13, 142, 116)'
            },
            {
                offset: 1,
                color: 'rgb(13, 100, 116)'
            }
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: 'rgb(15, 81, 252)'
            },
            {
                offset: 1,
                color: 'rgb(15, 120, 252)'
            }
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgb(46,17,98)'},
            {offset: 1, color: 'rgb(194,158,246)'},
        ]),
        new graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: 'rgb(232, 65, 66)'
            },
            {
                offset: 1,
                color: 'rgb(232, 65, 66)'
            }
        ])
    ];

    const option = {
        color: ['#868e94', '#37A2FF', '#f50202', '#b300ff', '#64A29D', '#0F51FC','#8500bb', '#E84142'],
        legend: {
            data: ['Ethereum', 'Arbitrum', 'Optimism', 'Polygon', 'Gnosis', 'Base','zkEVM', 'Avalanche'],
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
                    let value = param.data;
                    value = (typeof value !== 'number' || isNaN(value)) ? "0.00" : value.toFixed(2);
                    const marker = param.marker;
                    result += `${marker} ${param.seriesName}: ${value}%<br/>`;
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
            areaStyle: {color: gradients[index % gradients.length]},
            lineStyle: {color: gradients[index % gradients.length], width: 0},
            connectNulls: true,
            smooth: true,
            showSymbol: false,
        })),
    };

    return <ReactEcharts
        option={option}
        style={{height: '350px'}}
    />;
}
