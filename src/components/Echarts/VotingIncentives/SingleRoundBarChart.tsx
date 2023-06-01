import ReactEcharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import {formatDollarAmount} from "../../../utils/numbers";
import {PoolReward} from "../../../pages/VotingIncentives";

interface BribesProps {
    rewardData: PoolReward[],
    xAxisData: string[],
    height: string,
}

interface TooltipParam {
    name: string;
    value: number;
    seriesName: string;
    dataIndex: number;
}

export default function SingleRoundBarChart({
                                                   rewardData,
                                                   xAxisData,
                                                   height
                                               }: BribesProps) {
    const theme = useTheme()

    const rewardDataArray = rewardData.map(obj => {
        return Object.entries(obj).reduce((total: number, [key, value]) => {
            if (key !== 'pool' && typeof value === 'number') {
                total += value;
            }
            return total;
        }, 0);
    });

    let mapIndexToDataObject: { [key: number]: PoolReward } = {};
    rewardData.forEach((item, index) => {
        mapIndexToDataObject[index] = item;
    });

    const pairedData = rewardDataArray.map((value, index) => ({value, index, name: xAxisData[index]}));

// Sort the paired data in descending order by value
    pairedData.sort((a, b) => b.value - a.value);

// Split the paired data back into separate arrays
    const sortedRewardDataArray = pairedData.map(pair => pair.value);
    const sortedMapIndexToDataObject = pairedData.map(pair => mapIndexToDataObject[pair.index]);
    const sortedPoolNames = pairedData.map(pair => pair.name);


    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                }
            },
            formatter: function (params: TooltipParam[]) {
                let res = params[0].name;
                params.forEach(param => {
                    const dataObject = sortedMapIndexToDataObject[param.dataIndex];
                    for (let key in dataObject) {
                        if (key !== 'pool') {
                            res += `<br/>${key}: ${formatDollarAmount(dataObject[key] as number)}`;
                        }
                    }
                });
                return res;
            }
        },
        legend: {
            data:['Voting Incentives'],
            textStyle: {
                color: '#FFFFFF',
            }
        },
        xAxis: [
            {
                type: 'category',
                data: sortedPoolNames,
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0, // This makes all labels visible
                    rotate: 45, // This rotates labels by 45 degrees
                    textStyle: {
                        fontSize: 8 // This reduces font size to 10px
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Voting Incentives',
                min: 0,
                max: Math.max(...rewardDataArray),
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLabel: {
                    formatter: function (value:number) {
                        return formatDollarAmount(value);
                    },
                    color: '#FFFFFF'
                },
            },
        ],
        series: [
            {
                name:'Voting Incentives',
                type:'bar',
                data:sortedRewardDataArray,
                yAxisIndex: 0,
                itemStyle: {
                    color: theme.palette.secondary.main
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