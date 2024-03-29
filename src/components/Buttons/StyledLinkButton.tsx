import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles'

interface StyledButtonProps {
    href: string,
    name: string,
}

export default function StyledLinkButton({ href, name }: StyledButtonProps) {

    const theme = useTheme();

    return (
        <Box m={1}>
            <Button
            sx={{
                backgroundColor: theme.palette.mode === 'dark' ? "background.paper" : null,
                boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px",
            }}
                variant="contained"
                href={href}
                target="_blank"
                >
                {name}
            </Button>
        </Box>
    );
}