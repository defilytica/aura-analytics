import gql from "graphql-tag";

export const AuraPoolAprChart = gql`
  query AuraPoolAprChart($range: DateRangeIntervalInput!, $poolId: String!) {
    pool(id: $poolId) {
      aprs {
        totalHistoric(range: $range) {
          timestamp
          total
        }
      }
    }
  }
`;
