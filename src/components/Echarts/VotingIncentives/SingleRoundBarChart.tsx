import ReactEcharts from 'echarts-for-react';
import {formatDollarAmount} from "../../../utils/numbers";
import {PoolReward} from "../../../pages/VotingIncentives/helpers";
import {Box, Button, Grid} from "@mui/material";
import {Download} from "@mui/icons-material";
import React from "react";
import {useTheme} from "@mui/material/styles";
import { CSVLink } from "react-csv";
import {unixToDate} from "../../../utils/date";
import {AppColors} from "../../../assets/auraTheme/colors";

interface BribesProps {
    rewardData: PoolReward[],
    xAxisData: string[],
    height: string,
    currentRound: number
}

interface TooltipParam {
    name: string;
    value: number;
    seriesName: string;
    dataIndex: number;
}

const rainbowColors = [
    'rgb(32, 129, 240)',
    'rgb(255, 204, 0)',
    'rgb(126, 217, 87)',
    'rgb(255, 87, 87)',
    'rgb(140, 82, 255)',
];

export default function SingleRoundBarChart({rewardData, xAxisData, height, currentRound }: BribesProps) {
    const theme = useTheme();

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
        grid: {
            left: "100px",
            bottom:"120px"
        },
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
            data: ['Voting Incentives'],
            textStyle: {
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.gray[800]
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
                        fontSize: 11 // This reduces font size to 10px
                    },
                    formatter: function (value: string) {
                        if (value.length > 20) {
                            return value.slice(0, 17) + '...';
                        }
                        return value;
                    },
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
                        color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.gray[800]
                    }
                },
                axisLabel: {
                    formatter: function (value: number) {
                        return formatDollarAmount(value);
                    },
                    color: theme.palette.mode === 'dark' ? '#FFFFFF' : AppColors.gray[800]
                },
            },
        ],
        series: [
            {
                name: 'Voting Incentives',
                type: 'bar',
                data: sortedRewardDataArray,
                yAxisIndex: 0,
                itemStyle: {
                    color: function (params: any) {
                        // Use the rainbowColors array to set colors based on the index
                        const colorIndex = params.dataIndex % rainbowColors.length;
                        return rainbowColors[colorIndex];
                    },
                },
            },
        ]
    };

    let filename = "Aura-VotingIncentives-" + unixToDate(currentRound) + ".csv";

    return (
        <div>
            <Box
                mt={1}
                ml={1}
                display="flex"
                alignItems="center"

            >
                <CSVLink data={rewardData} filename={filename} style={{ textDecoration: 'none' }}>
                    <Button sx={{
                    backgroundColor: "background.paper",
                    boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",
                }}>
                        <Download/> CSV</Button>
                </CSVLink>
            </Box>
        <ReactEcharts
            option={option}
            style={{height: height, width: '100%'}}
            className="graph"
        />
        </div>
    );
}
