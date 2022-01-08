import { createTheme } from '@mui/material/styles';
import { yellow, teal, blue, indigo, grey } from '@mui/material/colors';
import { Theme, ThemeOptions } from '@mui/material/styles';

import {
  // Theme,
  // ThemeOptions,
  PaletteOptions,
  PaletteColorOptions,
  Palette,
} from '@mui/material/styles';

// declare module '@mui/material/styles' {
//  export interface Theme {
//     pallet: PaletteOptions;
//   }
//   interface PaletteOptions  {
//     test?: PaletteColorOptions;
//   }
//   interface Palette  {
//     test?: PaletteColorOptions;

//   }
// }

const customDarkTheme = {
  palette: {
    mode: 'dark',
    primary: yellow,
    secondary: teal,
    background: {
      default: '#222222',
      light: '#303030',
      dark: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
    customDivider: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
} as const;

const customLightTheme = {
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
    customDivider: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof customDarkTheme]: typeof customDarkTheme[Key];
};
type CustomPallet = {
  [Key in keyof typeof customDarkTheme.palette]: typeof customDarkTheme.palette[Key];
};

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
  interface Palette extends CustomPallet {}
}

export const darkTheme = createTheme(customDarkTheme);
export const lightTheme = createTheme(customLightTheme);

