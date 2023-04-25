import { PaletteMode } from "@mui/material";
import { alpha } from "@mui/material";

export const getThemeDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      'sans-serif',
    ].join(',')
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#3b82f6',
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#9C4ED6',
        },
        secondary: {
          main: '#5D24C6',
        },
        background: {
          paper: alpha('#0F172A', 0.8),
          default: '#0F172A',
        },
      }),
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            transition: 'all 2s linear',
          },
        },
      },
    },
  },
  //Background gradient overrides
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: mode === 'dark' ? "linear-gradient(to right, #0F172A, #5d24c6)" : '',


        },
      },
    },
  }
});

