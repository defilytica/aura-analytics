import {Avatar, Box, CircularProgress, Link} from "@mui/material";
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TokensWhite from "../../../assets/svg/tokens_white.svg";
import TokensBlack from "../../../assets/svg/tokens_black.svg";
import {visuallyHidden} from "@mui/utils";
import {LockerAccount} from "../../../data/aura/auraTypes";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TablePagination from "@mui/material/TablePagination";
import {useActiveNetworkVersion} from "../../../state/application/hooks";
import {getEtherscanLink} from "../../../utils";
import {formatDollarAmount, formatNumber} from "../../../utils/numbers";
import {generateIdenticon} from "../../../utils/generateIdenticon";
import {deepPurple} from "@mui/material/colors";
import {ethers} from "ethers";
import isDev from "../../../constants";
import StyledTableCell from "../StyledTableCell";

interface Data {
    id: number;
    address: string;
    locked: number;
    poolShare: number;
    lockedUSD: number;
    nrOfLocks: number;
}

function createData(
    id: number,
    address: string,
    locked: number,
    poolShare: number,
    lockedUSD: number,
    nrOfLocks: number,
): Data {
    return {
        id,
        address,
        locked,
        poolShare,
        lockedUSD,
        nrOfLocks,
    };
}

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string | LockerAccount[] },
    b: { [key in Key]: number | string | LockerAccount[] },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
    isMobileVisible: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: '#',
        isMobileVisible: true,
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Address',
        isMobileVisible: true,
    },
    {
        id: 'locked',
        numeric: false,
        disablePadding: false,
        label: 'Locked AURA',
        isMobileVisible: true,
    },
    {
        id: 'lockedUSD',
        numeric: false,
        disablePadding: false,
        label: 'Value ($)',
        isMobileVisible: true,
    },
    {
        id: 'poolShare',
        numeric: false,
        disablePadding: false,
        label: 'Relative Share (%)',
        isMobileVisible: true,
    },
    {
        id: 'nrOfLocks',
        numeric: false,
        disablePadding: false,
        label: '# Locks',
        isMobileVisible: true
    }
];

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    console.log(array);
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {order, orderBy, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    const theme = useTheme()


    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{display: {xs: headCell.isMobileVisible ? 'table-cell' : 'none', md: 'table-cell'}}}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            //sx={{ display: {xs: headCell.isMobileVisible ? 'table-cell' : 'none', md: 'table-cell' }}}
                        >
                            {headCell.label === '' ?
                                <img src={(theme.palette.mode === 'dark') ? TokensWhite : TokensBlack} alt="Theme Icon"
                                     width="25"/> : headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


export default function LockerTable({
                                        lockerAccounts,
                                        totalAmountLocked,
                                        auraUSD,
                                        page,
                                        setPage,
                                        rowsPerPage,
                                        setRowsPerPage,
                                    }: {
    lockerAccounts: LockerAccount[],
    totalAmountLocked: number,
    auraUSD?: number,
    page: number,
    setPage: any,
    rowsPerPage: number,
    setRowsPerPage: any,
}) {
    const [order, setOrder] = React.useState<Order>('desc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('locked');
    const [dense, setDense] = React.useState(false);
    const [activeNetwork] = useActiveNetworkVersion();
    const ensDict: { [key: string]: string | null } = {};
    const [localEnsMap, setLocalEnsMap] = React.useState(ensDict);

    React.useEffect(() => {
        if (lockerAccounts && lockerAccounts.length > 0) {
            const provider = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com');

            const updateENSMap = async () => {
                const ensLocalMap = { ...localEnsMap };

                for (let x = page * rowsPerPage; x <= page * rowsPerPage + rowsPerPage - 1; x++) {
                    let account = lockerAccounts[x];
                    if (account && localEnsMap[account.id] === undefined) {
                        const response = await provider.lookupAddress(account.id);
                        ensLocalMap[account.id] = response;
                    }
                }

                setLocalEnsMap(ensLocalMap);
            };

            updateENSMap();
        }
    }, [lockerAccounts.length, page]);

    console.log(localEnsMap);



    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    if (!lockerAccounts) {
        return <CircularProgress/>;
    }

    if (auraUSD === undefined) {
        return <CircularProgress/>;
    }

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const rows = lockerAccounts.map(el =>
        createData(lockerAccounts.indexOf(el) + 1, el.id, el.balanceLocked, (100 / totalAmountLocked) * Math.round(el.balanceLocked), auraUSD * el.balanceLocked, el.userLocksLength)
    )


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    return (<Box sx={{width: '100%'}}>
            <Paper elevation={1} sx={{mb: 2, boxShadow: 3}}>
                <TableContainer>
                    <Table
                        //sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
                            {stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            role="number"
                                            tabIndex={-1}
                                            key={row.id}
                                            sx={{cursor: 'pointer'}}
                                        >
                                            <StyledTableCell align="left">
                                                {row.id}
                                            </StyledTableCell>
                                            <StyledTableCell
                                                sx={{display: {xs: 'table-cell', md: 'table-cell'}}}
                                            >
                                                <Box display="flex" alignItems="center" alignContent="center">
                                                    <Box mr={1}>
                                                        <Avatar
                                                            sx={{
                                                                bgcolor: deepPurple[500],
                                                                height: 25,
                                                                width: 25,
                                                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
                                                            }}
                                                            src={generateIdenticon(row.address)}
                                                        />
                                                    </Box>
                                                    <Link href={getEtherscanLink(row.address, 'address', activeNetwork)}
                                                          target='_blank'>     {localEnsMap[row.address] ? localEnsMap[row.address] : row.address}</Link>
                                                </Box>
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                sx={{display: {xs: 'table-cell', md: 'table-cell'}}}
                                            >
                                                <Box display="flex" alignItems="center">
                                                    <Box mr={1}>
                                                        {formatNumber(row.locked)}
                                                    </Box>
                                                </Box>

                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                sx={{display: {xs: 'table-cell', md: 'table-cell'}}}>
                                                <Box display="flex" alignItems="center">
                                                    <Box mr={1}>
                                                        {formatDollarAmount(row.lockedUSD)}
                                                    </Box>
                                                </Box>
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                sx={{display: {xs: 'table-cell', md: 'table-cell'}}}>
                                                <Box display="flex" alignItems="center">
                                                    <Box mr={1}>
                                                        {row.poolShare.toFixed(2)}%
                                                    </Box>
                                                </Box>
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                sx={{display: {xs: 'table-cell', md: 'table-cell'}}}>
                                                <Box display="flex" alignItems="center">
                                                    <Box mr={1}>
                                                        {row.nrOfLocks}
                                                    </Box>
                                                </Box>
                                            </StyledTableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <StyledTableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" alignItems="center" justifyContent={"space-between"}>
                    <Box m={1} display="flex" justifyContent={"flex-start"}>
                        <FormControlLabel
                            control={<Switch checked={dense} onChange={handleChangeDense}/>}
                            label="Compact view"
                        />
                    </Box>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Paper>
        </Box>
    );
}
