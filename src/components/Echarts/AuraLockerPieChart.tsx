import ReactEcharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import { BalancerPieChartDataItem } from '../../data/balancer/balancerTypes';
import { formatDollarAmount, formatNumber } from '../../utils/numbers';

export interface AuraLockerPieChartProps {
    data: BalancerPieChartDataItem[],
    height: string,
}

export interface ToolTipParams {
    name: string;
    data: BalancerPieChartDataItem;
}

export default function AuraLockerPieChart({ data, height }: AuraLockerPieChartProps) {

    const theme = useTheme()

    data = data.filter(el => el.value > 0)

    //Chart options
    const option = {

        // Hover Tooltip
        // {a} = series:[{name:}]
        // {b} = series:[{data: [{name:}]}]
        // {c} = series:[{data: [{value:}]
        //formatter: "{a}<br/><strong>{b}</strong>: ${c}"
        tooltip: {
            trigger: "item",
            formatter: function (params: ToolTipParams) {
                return `
                 
                ${formatNumber(params.data.value)}% <br />`
            }
        },
        calculable: true,
        series: [
            {
                name: 'Total asset fraction',
                type: 'pie',
                data: data,
                radius: ['40%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    formatter: '{b} ({c}%)',
                    fontSize: 10,

                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: '{b} ({c}%)',
                        fontSize: 12,
                        fontWeight: 'bold',

                    }
                },
                labelLine: {
                    show: true
                },
            }],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },


    };

    return (
        <ReactEcharts
            option={option}
            style={{ height: height, width: '100%' }}
            className="pie-chart"
        />
    );
}