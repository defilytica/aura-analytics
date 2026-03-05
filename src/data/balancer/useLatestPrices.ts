import { useActiveNetworkVersion } from '../../state/application/hooks';
import { SupportedNetwork } from '../../constants/networks';
import useGetSimpleTokenPrices from '../balancer-api-v3/useGetSimpleTokenPrices';
import { GqlChain } from '../../apollo/generated/graphql-codegen-generated';

export const getBalTokenAddress = (networkId: SupportedNetwork) => {
    switch (networkId) {
      case SupportedNetwork.ETHEREUM:
        return '0xba100000625a3754423978a60c9317c58a424e3d';
      case SupportedNetwork.ARBITRUM:
        return '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8';
      case SupportedNetwork.POLYGON:
        return '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3';
      default:
        return '0xba100000625a3754423978a60c9317c58a424e3d';
    }
  }

  export const getWethTokenAddress = (networkId: SupportedNetwork) => {
    switch (networkId) {
      case SupportedNetwork.ETHEREUM:
        return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
      case SupportedNetwork.ARBITRUM:
        return '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
      case SupportedNetwork.POLYGON:
        return '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619';
      default:
        return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
    }
  }

export function useLatestPrices(): { eth?: number; bal?: number } {
    const [activeNetwork] = useActiveNetworkVersion();
    const balAddress = getBalTokenAddress(activeNetwork.id);
    const wethAddress = getWethTokenAddress(activeNetwork.id);
    const coinData = useGetSimpleTokenPrices([balAddress, wethAddress], GqlChain.Mainnet);

    const bal = coinData?.data?.[balAddress]?.price ?? 0;
    const eth = coinData?.data?.[wethAddress]?.price ?? 0;

    return {
        eth: eth ? eth : undefined,
        bal: bal ? bal : undefined,
    };
}
