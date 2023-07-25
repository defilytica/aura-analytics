import { AppColors, ColorRange } from './colors';
import { CSSInterpolation, ThemeOptions } from '@mui/material';
import MaisonNeue from '../fonts/MaisonNeue-Book.woff'
import { opacityToHex } from '../../utils/opacityUtils'

declare module '@mui/material/styles' {
  interface CustomTheme {
    borderRadius: { main: string };
    appColors: ColorRange;
    isDarkMode: boolean;
    overrides: {
      MuiCollapse: any;
      MuiAccordionDetails: any;
      MuiAccordionSummary: any;
      MuiTextField: any;
      MuiAccordion: any;
      MuiButtonBase: any;
      MuiButton: any;
      MuiTab: any;
      MuiModal: any;
    };
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
    info: string;
  }
  interface Palette {
    text: TypeText;
    table: Palette['primary'];
    card: Palette['primary'];
    border: Palette['primary'];
    contrast: string;
    rainbow: Palette['primary'];
    purple: Palette['primary'];
    loading: Palette['primary'];
    backgroundGradient: string;
    boxShadowHightlight: string;
  }
  interface PaletteOptions {
    text?: Partial<TypeText>;
    table: PaletteOptions['primary'];
    card: PaletteOptions['primary'];
    border: PaletteOptions['primary'];
    contrast: string;
    rainbow: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    loading: PaletteOptions['primary'];
    backgroundGradient: string;
    boxShadowHightlight: string;
  }
}

export const GlobalCss = {
  styleOverrides: {
    'html, body, body > #root': {
      height: '100%',
      padding: 0,
      margin: 0,
    },
    '*': {
      boxSizing: 'border-box',
    },
    '.web3modal-modal-lightbox': { zIndex: '9999 !important' }, // On top of all other modals

    // Override Snackbar defaults
    '.SnackbarContainer-root': {
      '.MuiCollapse-wrapper': {
        padding: '0 !important',
      },
    },
    '.SnackbarContainer-right': {
      right: '1rem !important',
    },
    '.SnackbarContainer-top': {
      top: '6.5rem !important',
      width: '20% !important',
      minWidth: '280px !important',
      zIndex: '2000 !important', // Must be above MUI modal backdrop
      userSelect: 'none',
      padding: '0 !important',
      margin: '0 !important',
    },
    '.SnackbarContent-root': {
      color: 'inherit !important',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      padding: '0 !important',
    },
    '.SnackbarItem-message': {
      padding: '0 !important',
    },

    '@font-face': {
      fontFamily: 'Maison Neue',
      src: `url(${MaisonNeue}) format('woff')`,
    },
  },
};

const borderRadius = { main: '12px' };

const getHeadingStyle = (fontSizeRem: number) => ({
  fontSize: `${fontSizeRem}rem`,
  fontFamily: "'Maison Neue'",
});

const base: ThemeOptions = {
  borderRadius,
  appColors: AppColors,
  isDarkMode: false,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1200,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    fontFamily: "'IBM Plex Sans', 'Maison Neue', Helvetica, Arial, sans-serif",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      ...getHeadingStyle(4),
    },
    h2: {
      ...getHeadingStyle(3),
    },
    h3: {
      ...getHeadingStyle(2.25),
    },
    h4: {
      ...getHeadingStyle(1.5),
    },
    h5: {
      ...getHeadingStyle(1.125),
    },
    h6: {
      ...getHeadingStyle(0.75),
    },
  },
  components: {
    MuiCssBaseline: GlobalCss,
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '-0.02em',
        },
      },
    },
  },
  overrides: {
    MuiCollapse: {
      borderBottomLeftRadius: borderRadius.main,
      borderBottomRightRadius: borderRadius.main,
    },
    MuiAccordionDetails: {
      borderRadius: borderRadius.main,
      borderTop: '0px',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
    },
    MuiAccordionSummary: {
      borderRadius: borderRadius.main,
      borderBottomLeftRadius: borderRadius.main,
      borderBottomRightRadius: borderRadius.main,
      borderBottomWidth: '1px',
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
    },
    MuiTextField: {},
    MuiAccordion: {},
    MuiButtonBase: {},
    MuiButton: {
      borderRadius: borderRadius.main,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    MuiTab: {
      textTransform: 'capitalize',
      fontSize: '1rem',
      fontWeight: 500,
    },
    MuiModal: {
      backdropFilter: 'blur(4px)',
    },
  },
};

const light: ThemeOptions = {
  ...base,
  isDarkMode: false,
  palette: {
    mode: 'light',
    primary: {
      light: AppColors.purple[500],
      main: AppColors.purple[600],
      dark: AppColors.purple[700],
      contrastText: AppColors.white as string,
    },
    secondary: {
      light: AppColors.slate[300],
      main: AppColors.slate[200],
      dark: AppColors.slate[100],
    },
    background: {
      default: AppColors.slate[50],
      paper: AppColors.white as string,
    },
    border: {
      light: AppColors.slate[100],
      main: AppColors.slate[200],
      dark: AppColors.slate[200],
    },
    backgroundGradient: `linear-gradient(180deg, ${AppColors.violet[50]} 0%, ${AppColors.violet[50]} 20px, ${AppColors.gray[50]} 250px)`,
    action: {
      disabled: `${AppColors.black}${opacityToHex(30)}`,
      disabledBackground: `${AppColors.slate[200]}${opacityToHex(50)}`,
    },
    text: {
      primary: AppColors.slate[800],
      secondary: AppColors.slate[600],
      tertiary: AppColors.slate[500],
      quaternary: AppColors.slate[400],
      disabled: 'rgba(255,255,255,0.4)',
      info: AppColors.purple[800],
    },
    contrast: AppColors.white as string,
    error: {
      light: AppColors.red[600],
      main: AppColors.red[500],
      dark: AppColors.red[400],
      contrastText: AppColors.white as string,
    },
    warning: {
      light: AppColors.amber[600],
      main: AppColors.amber[500],
      dark: AppColors.amber[400],
    },
    info: {
      light: AppColors.sky[600],
      main: AppColors.sky[500],
      dark: AppColors.sky[400],
    },
    success: {
      light: AppColors.emerald[700],
      main: AppColors.emerald[600],
      dark: AppColors.emerald[500],
    },
    divider: AppColors.slate[200],
    table: {
      light: AppColors.slate[200],
      main: AppColors.white as string,
      dark: AppColors.slate[50],
    },
    card: {
      light: AppColors.slate[100],
      main: AppColors.white as string,
      dark: AppColors.slate[50],
    },
    rainbow: {
      main: AppColors.rainbowDark as string,
      dark: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ' + AppColors.rainbow,
    },
    purple: {
      main: `linear-gradient(95deg, ${AppColors.purple[600]} 0%,  ${AppColors.purple[500]} 100%)`,
    },
    loading: {
      light: AppColors.purple[800],
      main: AppColors.purple[700],
      dark: AppColors.purple[600],
      contrastText: '#000',
    },
    boxShadowHightlight: `0 -0.5px 0 0 inset ${AppColors.slate[800]}${opacityToHex(10)}`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...GlobalCss.styleOverrides,
        a: {
          color: AppColors.purple[500],
        },
        '.MuiTooltip-popper': {
          '> div': {
            background: AppColors.slate[100],
            border: `1px solid ${AppColors.slate[200]}`,
            color: AppColors.slate[900],
            maxWidth: '32rem',
            borderRadius: 8,
            fontSize: '0.75rem',
            fontWeight: 400,
          },
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiCollapse,
          borderColor: AppColors.slate[700],
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiAccordionDetails,
          backgroundColor: AppColors.slate[800],
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiAccordionSummary,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiTextField,
          color: AppColors.slate[400],
          '& label.Mui-focused': {
            color: AppColors.violet[500],
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: AppColors.slate[400],
            },
            '&:hover fieldset': {
              borderColor: AppColors.violet[500],
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiAccordion,
          borderColor: AppColors.slate[700],
          ':first-of-type': {
            borderRadius: base.borderRadius.main,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          ...base.overrides.MuiButtonBase,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
        root: {
          ...base.overrides.MuiButton,
          borderRadius: '8px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiTab,
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiModal,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: AppColors.slate[50],
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: AppColors.slate[900],
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: AppColors.violet[500],
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: AppColors.amber[400],
          '.MuiAlert-standardWarning': {},
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: AppColors.slate[700],
        },
      },
    },
  },
};

export const dark: ThemeOptions = {
  ...base,
  isDarkMode: true,
  palette: {
    mode: 'dark',
    primary: {
      light: AppColors.violet[500],
      main: AppColors.violet[600],
      dark: AppColors.violet[700],
    },
    secondary: {
      light: AppColors.slate[500],
      main: AppColors.slate[600],
      dark: AppColors.slate[700],
    },
    background: {
      default: AppColors.slate[900],
      paper: AppColors.slate[800],
    },
    border: {
      main: AppColors.slate[700],
      light: AppColors.slate[600],
      dark: AppColors.slate[800],
    },
    backgroundGradient: `linear-gradient(180deg, ${AppColors.slate[800]} 0%, ${AppColors.slate[800]} 20px, ${AppColors.slate[900]} 250px)`,
    action: {
      disabled: `${AppColors.white}${opacityToHex(30)}`,
      disabledBackground: `${AppColors.slate[600]}${opacityToHex(20)}`,
    },
    text: {
      primary: AppColors.white as string,
      secondary: AppColors.slate[300],
      tertiary: AppColors.slate[400],
      quaternary: AppColors.slate[500],
      disabled: 'rgba(255,255,255,0.4)',
      info: AppColors.violet[800],
    },
    contrast: AppColors.black as string,
    error: {
      light: AppColors.red[500],
      main: AppColors.red[600],
      dark: AppColors.red[700],
      contrastText: AppColors.white as string,
    },
    warning: {
      light: AppColors.amber[400],
      main: AppColors.amber[500],
      dark: AppColors.amber[600],
    },
    info: {
      light: AppColors.blue[400],
      main: AppColors.blue[500],
      dark: AppColors.blue[600],
    },
    success: {
      light: AppColors.emerald[400],
      main: AppColors.emerald[500],
      dark: AppColors.emerald[600],
    },
    divider: AppColors.slate[700],
    table: {
      light: AppColors.slate[700],
      main: AppColors.slate[800],
      dark: AppColors.slate[900],
    },
    card: {
      light: AppColors.slate[700],
      main: AppColors.slate[800],
      dark: AppColors.slate[900],
    },
    rainbow: {
      main: AppColors.rainbow as string,
      dark: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ' + AppColors.rainbow,
    },
    purple: {
      main: `linear-gradient(95deg, ${AppColors.violet[700]} 0%,  ${AppColors.violet[500]} 100%)`,
    },
    loading: {
      light: AppColors.violet[300],
      main: AppColors.violet[400],
      dark: AppColors.violet[500],
      contrastText: '#000',
    },
    boxShadowHightlight: `0 0.5px 0 0 inset ${AppColors.white}${opacityToHex(15)}`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...GlobalCss.styleOverrides,
        a: {
          color: AppColors.purple[500],
        },
        '.MuiTooltip-popper': {
          '> div': {
            background: AppColors.slate[800],
            border: `1px solid ${AppColors.slate[700]}`,
            color: AppColors.slate[200],
            maxWidth: '32rem',
            borderRadius: 8,
            fontSize: '0.75rem',
            fontWeight: 400,
          },
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiCollapse,
          borderColor: AppColors.slate[700],
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiAccordionDetails,
          backgroundColor: AppColors.slate[800],
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiAccordionSummary,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          caretColor: AppColors.slate[300],

          '& :-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 30px ${AppColors.slate[800]} inset`,
            WebkitTextFillColor: AppColors.gray[100],
            caretColor: AppColors.slate[300],
          } as CSSInterpolation,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiTextField,
          color: AppColors.slate[400],
          '& label.Mui-focused': {
            color: AppColors.violet[500],
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: AppColors.slate[400],
            },
            '&:hover fieldset': {
              borderColor: AppColors.violet[500],
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiAccordion,
          ':first-of-type': {
            borderRadius: base.borderRadius.main,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          ...base.overrides.MuiButtonBase,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
        root: {
          ...base.overrides.MuiButton,
          borderRadius: '8px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiTab,
          '&.Mui-selected': {
            color: 'white',
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          ...base.overrides.MuiModal,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: AppColors.slate[800],
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: AppColors.slate[900],
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: AppColors.violet[500],
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: AppColors.amber[400],
          '.MuiAlert-standardWarning': {},
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: AppColors.slate[700],
        },
      },
    },
  },
};

export const themes = { light, dark };
