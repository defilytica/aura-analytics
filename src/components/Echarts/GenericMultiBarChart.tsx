import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts';
import { CircularProgress } from '@mui/material';
import { BalancerChartDataItem} from '../../data/balancer/balancerTypes';
import { formatAmount, formatDollarAmount } from '../../utils/numbers';

export interface TvlAreaProps {
    chartData: BalancerChartDataItem[],
    dataTitle: string,
    format?: string,
    backgroundColor?: string,
    height?: string,

}


export default function GenericMultiBarChart({chartData, dataTitle, format = '$', backgroundColor = '#6a7985', height = '278px'}: TvlAreaProps) {

    let xData = chartData.map(el => el.time);
    let yData = chartData.map(el => el.value);

    const option = {
        color: ['#00DDFF'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                }
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                show: true,
                boundaryGap: false,
                data: xData
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: true,
                axisLabel: {
                    formatter: function(d: number) {
                        return format === '$' ? formatDollarAmount(d) : formatAmount(d);
                    }
                }
            }
        ],
        series: [
            {
              name: dataTitle,
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)'
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
              emphasis: {
                focus: 'series',
            },
              tooltip: {
                valueFormatter: function (value: number) {
                    return format === '$' ? formatDollarAmount(value) : formatAmount(value);
                }
            },
              data: yData
            }
          ],
    };

    return(
        chartData.length > 2 ?
            <ReactEcharts
                option={option}
                style={{ height: height, width: '100%' }}
                className={'react_for_echarts'}
            /> : <CircularProgress />
    );
}