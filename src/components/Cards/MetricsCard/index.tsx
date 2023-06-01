import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { formatDollarAmount, formatNumber } from '../../../utils/numbers';
import { green } from '@mui/material/colors';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import DiscordIconDark from "../../../assets/svg/discord-dark.svg";

export type CoinCardProps = {
  mainMetric: number,
  mainMetricInUSD: boolean,
  mainMetricUnit? : string,
  mainMetricChange?: number,
  mainMetricChangeRange?: string,
  metricName: string,
  MetricIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  svgContent?: string,
}

const MetricsCard = ({
  mainMetric,
  mainMetricInUSD,
  mainMetricUnit,
  mainMetricChange,
  mainMetricChangeRange,
  metricName,
  MetricIcon,
  svgContent}: CoinCardProps) => {

  const metricUnit = mainMetricUnit ? mainMetricUnit : '';

  return (
    <Card
    sx={{
      maxWidth: '275px',
      minWidth: '250px',
      minHeight: '130px',
      boxShadow: 3,
    }}
    >
      <CardContent>
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {metricName}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              {mainMetricInUSD ? formatDollarAmount(mainMetric) : formatNumber(mainMetric, 2) + metricUnit}
            </Typography>
          </Grid>
          <Grid item>
            {svgContent? <img src={svgContent} alt="Svg Icon" width="30" /> : <MetricIcon />}
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {mainMetricChange && mainMetricChange > 0 ? 
            <ArrowUpwardIcon fontSize="small" sx={{color: green[500]}} /> 
            : 
            mainMetricChange ? <ArrowDownwardIcon fontSize="small" color="error" /> : null}
            {mainMetricChange ?
          <Typography
            color={mainMetricChange > 0 ? 'green' : 'error'}
            sx={{
              mr: 1
            }}
            variant="body2"
          >
            {Number(mainMetricChange).toFixed(2)} %
          </Typography> : null }
          {mainMetricChange ? 
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {mainMetricChangeRange ? (mainMetricChangeRange) : '(24h)'}
          </Typography> : null }
        </Box>
      </CardContent>
    </Card>
  );
}
export default MetricsCard;