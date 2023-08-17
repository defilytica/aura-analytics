import { styled } from '@mui/system';
import { TableCell } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: `0.5px solid ${theme.palette.table.light}`,
    borderTop: `0.5px solid ${theme.palette.table.light}`,
    // Add any additional styles you might need
}));

export default StyledTableCell;
