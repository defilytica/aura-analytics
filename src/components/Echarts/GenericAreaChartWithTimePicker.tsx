import Select, {SelectChangeEvent} from "@mui/material/Select";
import React, {useState} from "react";
import {BalancerChartDataItem} from "../../data/balancer/balancerTypes";
import {Box, Card, Divider, Grid} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import CustomLinearProgress from "../Progress/CustomLinearProgress";
import GenericAreaChart from "./GenericAreaChart";

interface GenericChartWithTimePickerProps {
    chartData: BalancerChartDataItem[],
    dataTitle: string,
}

export default function GenericAreaChartWithTimePicker({chartData, dataTitle} : GenericChartWithTimePickerProps) {

    const [rangedChartData, setRangedChartData] = React.useState(chartData)
    const [timeRange, setTimeRange] = useState(30);


    React.useEffect(() => {
        if (chartData.length < Number(timeRange) || timeRange === 0) {
            setRangedChartData(chartData);
        } else {
            setRangedChartData(chartData.slice(chartData.length - Number(timeRange)))
        }
    }, [chartData, timeRange]);

    const handleChange = (event: SelectChangeEvent) => {
        setTimeRange(Number(event.target.value));
        if (chartData.length < Number(event.target.value) || event.target.value === '0') {
            setRangedChartData(chartData);
        } else if (chartData.length >= Number(event.target.value)) {
            setRangedChartData(chartData.slice(chartData.length - Number(event.target.value)))
        }
    };

    return (
        chartData.length > 10 ?
            <Card sx={{boxShadow: 3}}>
                <Box m={1}>
                    <FormControl size="small">
                        <Select
                            sx={{
                                backgroundColor: "background.paper",
                                boxShadow: 2,
                                borderRadius: 2,
                                borderColor: 0,
                            }}
                            color="primary"
                            labelId="timeRangeSelectLabel"
                            id="timeRangeSelect"
                            onChange={handleChange}
                            value={String(timeRange)}
                            inputProps={{
                                name: 'timeRange',
                                id: 'timeRangeId-native-simple',
                            }}
                        >
                            <MenuItem disabled={true} dense={true}>Time range:</MenuItem>
                            <Divider />
                            <MenuItem value={'30'}> 30 days</MenuItem>
                            <MenuItem value={'90'}>90 days</MenuItem>
                            <MenuItem value={'120'}>120 days</MenuItem>
                            <MenuItem value={'360'}>All time</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
               <GenericAreaChart chartData={rangedChartData} dataTitle={dataTitle} />
            </Card> : <Grid
                container
                spacing={2}
                mt='10%'
                mb='10%'
                sx={{ justifyContent: 'center' }}
            >
                <CustomLinearProgress />
            </Grid>
    )

}