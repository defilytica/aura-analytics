import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';

/**
 * Used to get large amounts of data when
 * @param query
 * @param localClient
 * @param vars - any variables that are passed in every query
 * @param values - the keys that are used as the values to map over if
 * @param skipCount - amount of entities to skip per query
 */
export async function splitQuery<Type>(
  query: any,
  client: ApolloClient<NormalizedCacheObject>,
  vars: any[],
  values: any[],
  skipCount = 1000
) {
  let fetchedData = <Type>{}
  let allFound = false
  let skip = 0
  try {
    while (!allFound) {
      let end = values.length
      if (skip + skipCount < values.length) {
        end = skip + skipCount
      }
      const sliced = values.slice(skip, end)
      const result = await client.query<Type>({
        query: query(...vars, sliced),
        fetchPolicy: 'network-only',
      })
      fetchedData = {
        ...fetchedData,
        ...result.data,
      }
      if (Object.keys(result).length < skipCount || skip + skipCount > values.length) {
        allFound = true
      } else {
        skip += skipCount
      }
    }
    return fetchedData
  } catch (e) {
    console.log(e)
    return undefined
  }
}

export function useDeltaTimestamps(): [number, number, number] {
  const utcCurrentTime = dayjs()
  //startOf changed to hour from minute
  const t1 = utcCurrentTime.subtract(1, 'day').startOf('hour').unix()
  const t2 = utcCurrentTime.subtract(2, 'day').startOf('hour').unix()
  const tWeek = utcCurrentTime.subtract(1, 'week').startOf('hour').unix()
  return [t1, t2, tWeek]
}

export function useDeltaTimestampsDailyUTCPastNDays(n: number): number[] {
  dayjs.extend(utc);
  const utcCurrentTime = dayjs().utc();
  let timestamps: number[] = [];

  for(let i = 1; i <= n; i++) {
    let timestamp = utcCurrentTime.subtract(i, 'day').startOf('day').unix();
    timestamps.push(timestamp);
  }

  return timestamps;
}