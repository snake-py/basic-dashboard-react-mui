import { createTheme } from '@mui/material/styles';
import { yellow, teal, blue, indigo, grey } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: yellow,
    secondary: teal,
    background: {
      default: '#222222',
      light: '#303030',
      dark: '#101010',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
    divider: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: indigo,
    background: {
      default: '#e4f0e2',
      light: '#effced',
      dark: '#c2cfc0',

    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    divider: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
});