import {Avatar, Divider, FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import {Box} from "@mui/system"
import {
    ArbitrumNetworkInfo,
    EthereumNetworkInfo,
    GnosisNetworkInfo,
    NetworkInfo,
    OptimismNetworkInfo,
    PolygonNetworkInfo,
} from "../../constants/networks"
import {useActiveNetworkVersion} from "../../state/application/hooks"
import ArbitrumLogo from '../../assets/svg/arbitrum.svg'
import PolygonLogo from '../../assets/svg/polygon.svg'
import EtherLogo from '../../assets/svg/ethereum.svg'
import OpLogo from '../../assets/svg/optimism.svg'
import GnosisLogo from '../../assets/svg/gnosis.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {useSwitchNetwork} from 'wagmi'

const updatePathForNetwork = (network: NetworkInfo, currentPath: string) => {
    const pathParts = currentPath.split('/');

    let newPath;

    if (network === EthereumNetworkInfo) {
        newPath = `/${pathParts[pathParts.length - 1]}`;
    } else if (network === OptimismNetworkInfo) {
        newPath = `/optimism/${pathParts[pathParts.length - 1]}`;
    } else {
        newPath = `/${network.name.toLowerCase()}/${pathParts[pathParts.length - 1]}`;
    }

    return newPath;
};

export default function NetworkSelector() {

    const [activeNetwork, update] = useActiveNetworkVersion();
    const navigate = useNavigate();
    const location = useLocation();
    const {switchNetwork} = useSwitchNetwork()

    const handleNetworkChange = (evt: SelectChangeEvent) => {
        const chainId = evt.target.value as string;
        switchNetwork?.(Number(chainId))
        if (chainId === EthereumNetworkInfo.chainId) {
            update(EthereumNetworkInfo)
            const newPath = updatePathForNetwork(EthereumNetworkInfo, location.pathname)
            navigate(newPath)
        } else if (chainId === ArbitrumNetworkInfo.chainId) {
            update(ArbitrumNetworkInfo)
            const newPath = updatePathForNetwork(ArbitrumNetworkInfo, location.pathname)
            navigate(newPath)
        } else if (chainId === PolygonNetworkInfo.chainId) {
            update(PolygonNetworkInfo)
            const newPath = updatePathForNetwork(PolygonNetworkInfo, location.pathname)
            navigate(newPath)
        } else if (chainId === GnosisNetworkInfo.chainId) {
            update(GnosisNetworkInfo)
            const newPath = updatePathForNetwork(GnosisNetworkInfo, location.pathname)
            navigate(newPath)
        } else if (chainId === OptimismNetworkInfo.chainId) {
            const newPath = updatePathForNetwork(OptimismNetworkInfo, location.pathname)
            navigate(newPath)
        }
    };

    return (
        <FormControl size="small">
            <Select
                sx={{
                    backgroundColor: "background.paper",
                    boxShadow: 2,
                    borderRadius: 2,
                    borderColor: 0,
                }}
                color="primary"
                labelId="networkSelectLabel"
                id="chainSelect"
                onChange={handleNetworkChange}
                value={activeNetwork.chainId ? activeNetwork.chainId : ' '}
                inputProps={{
                    name: 'chainId',
                    id: 'chainId-native-simple',
                }}
            >
                <MenuItem disabled={true} dense={true}>Network selection:</MenuItem>
                <Divider/>
                <MenuItem value={EthereumNetworkInfo.chainId} key="eth">
                    <Box display="flex" alignItems="center">
                        <Box mr={0.5}>
                            <Avatar
                                sx={{
                                    height: 20,
                                    width: 20
                                }}
                                src={EtherLogo}
                            />
                        </Box>
                        <Box>
                            Ethereum
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem value={ArbitrumNetworkInfo.chainId} key="arb">
                    <Box display="flex" alignItems="center">
                        <Box mr={0.5}>
                            <Avatar
                                sx={{
                                    height: 20,
                                    width: 20
                                }}
                                src={ArbitrumLogo}
                            />
                        </Box>
                        <Box>
                            Arbitrum
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem value={PolygonNetworkInfo.chainId} key="poly">
                    <Box display="flex" alignItems="center">
                        <Box mr={0.5}>
                            <Avatar
                                sx={{
                                    height: 20,
                                    width: 20
                                }}
                                src={PolygonLogo}
                            />
                        </Box>
                        <Box>
                            Polygon
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem value={OptimismNetworkInfo.chainId} key="optimism">
                    <Box display="flex" alignItems="center">
                        <Box mr={0.5}>
                            <Avatar
                                sx={{
                                    height: 20,
                                    width: 20
                                }}
                                src={OpLogo}
                            />
                        </Box>
                        <Box>
                            Optimism
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem value={GnosisNetworkInfo.chainId} key="optimism">
                    <Box display="flex" alignItems="center">
                        <Box mr={0.5}>
                            <Avatar
                                sx={{
                                    height: 20,
                                    width: 20
                                }}
                                src={GnosisLogo}
                            />
                        </Box>
                        <Box>
                            Gnosis
                        </Box>
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}
