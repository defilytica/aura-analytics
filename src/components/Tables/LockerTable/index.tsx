import {Typography, Box, Card, Grid, CircularProgress, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
import {AuraLockers, LockerAccount} from "../../../data/aura/auraTypes";
import CurrencyLogo from "../../CurrencyLogo";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TablePagination from "@mui/material/TablePagination";
import {Alchemy, Network} from "alchemy-sdk";
import StyledExternalLink from "../../StyledExternalLink";
import {useActiveNetworkVersion} from "../../../state/application/hooks";
import {useNavigate} from "react-router-dom";
import {getEtherscanLink} from "../../../utils";

const config = {
    apiKey: process.env.REACT_APP_ALCHEMY_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);
const ensContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";

interface Data {
    id: string;
    address: string;
    staked: string;
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
    a: { [key in Key]: number | string | LockerAccount[] | AuraLockers },
    b: { [key in Key]: number | string | LockerAccount[] | AuraLockers },
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
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Address',
        isMobileVisible: true,
    },
    {
        id: 'staked',
        numeric: false,
        disablePadding: false,
        label: 'Staked',
        isMobileVisible: false,
    },
];

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
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
                    <TableCell
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
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


export default function LockerTable({
                                        lockerAccounts,
                                        totalAmountLocked
                                    }: { lockerAccounts?: LockerAccount[], totalAmountLocked: number }) {
    const [order, setOrder] = React.useState<Order>('desc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('staked');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [dense, setDense] = React.useState(false);
    const [activeNetwork] = useActiveNetworkVersion();

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

    let rows = lockerAccounts;

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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                sx={{display: {xs: 'none', md: 'table-cell'}}}
                                                onClick={() => { window.open(`${getEtherscanLink(row.id, "address", activeNetwork)}/`, "_blank"); }}
                                            >
                                                {row.id}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                sx={{display: {xs: 'none', md: 'table-cell'}}}
                                            >
                                                <Box display="flex" alignItems="center">
                                                    <Box mr={1}>
                                                        {Math.round(Number(row.balanceLocked) / 10 ** 18)}
                                                    </Box>
                                                    <Box mr={1}>
                                                        <CurrencyLogo
                                                            address="0xc0c293ce456ff0ed870add98a0828dd4d2903dbf"
                                                            size={'20px'}/>
                                                    </Box>
                                                    <Box mr={1}>
                                                        {((100 / totalAmountLocked) * Math.round(Number(row.balanceLocked) / 10 ** 18)).toFixed(2)}%
                                                    </Box>
                                                </Box>

                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6}/>
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