import { createTheme, ThemeOptions as MuiThemeOptions } from '@mui/material';
import 'typeface-yantramanav';

const background = '#0d1321';
const primary = '#60AFE0';
const primaryContrastText = '#000000';
const secondary = '#eac779';
const secondaryContrastText = '#000000';
const primaryText = '#FAFBFD';
const secondaryText = '#FAFBFD';
const disabledText = '#B0B0B0';
const paperBackground = '#2C373E';

const muiThemeOptions: MuiThemeOptions = {
  typography: {
    fontFamily: ['Yantramanav', 'Calibri', 'arial'].join(','),
    fontWeightRegular: 100,
    fontWeightBold: 300,
    h1: {
      fontWeight: 300,
      fontSize: 38,
    },
    h2: {
      fontWeight: 300,
      fontSize: 22
    },
    h3: {
      fontWeight: 300,
      fontSize: 18,
    },
    h4: {
      fontWeight: 300,
      fontSize: 20,
    },
    h5: {
      fontWeight: 100,
      fontSize: 18,
    },
    h6: {
      fontWeight: 100,
      fontSize: 12,
    },
    body1: {
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1
    },
    body2: {
      fontWeight: 100,
      fontSize: 16,
    },
    caption: {
      fontWeight: 300,
      fontSize: 12,
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: background,
      paper: paperBackground,
    },
    primary: {
      main: primary,
      contrastText: primaryContrastText,
    },
    secondary: {
      main: secondary,
      contrastText: secondaryContrastText,
    },
    text: {
      primary: primaryText,
      secondary: secondaryText,
      disabled: disabledText,
    },
  },
  components: {
    MuiPaper:{
      styleOverrides:{
        root: {
          backdropFilter: "blur(8px) brightness(70%)",
          backgroundColor: "transparent",
        },
      }
    },
  }
};

export const muiTheme = createTheme(muiThemeOptions);
