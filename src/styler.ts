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
//     test2?: PaletteColorOptions;
//   }
//   interface Palette  {

//   }
// }

// function creatMyTheme(options?: ThemeOptions) {
//   return createTheme({
//     ...options,
//   });
// }

// export default creatMyTheme({
//   palette: {
//     test: yellow,
//     mode: 'dark',
//     primary: yellow,
//     secondary: teal,
//     text: {
//       primary: '#ffffff',
//       secondary: '#000000',
//     },
//   },
// });

const theme = {
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: yellow.A400,
    },
    background: {
      default: '#fff',
    },
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key];
};

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export const darkTheme = createTheme(theme);

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: yellow,
//     secondary: teal,
//     background1: yellow,
//     text: {
//       primary: '#ffffff',
//       secondary: '#000000',
//     },
//     divider1: {
//       primary: '#ffffff',
//       secondary: '#000000',
//     },
//   },
// });

// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: blue,
//     secondary: indigo,
//     background: {
//       default: '#e4f0e2',
//       light: '#effced',
//       dark: '#c2cfc0',
//     },
//     text: {
//       primary: '#000000',
//       secondary: '#ffffff',
//     },
//     divider: {
//       primary: '#000000',
//       secondary: '#ffffff',
//     },
//   },
// });

// export const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: yellow[500],
//       },
//       secondary: {
//         main: teal[500],
//       },
//       background: {
//         default: '#222222',
//         paper: '#303030',
//       },
//       action: {
//         active: yellow['A700'],
//         hover: yellow['A200'],
//         disabled: grey['A200'],
//         activatedOpacity: 0.12,
//         focus: yellow['A200'],
//         selected: yellow['A200'],
//       },
//       divider: grey['200'],
//       text: {
//         primary: '#ffffff',
//         secondary: '#000000',
//       },
//     },
//   });

// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: blue[500],
//     },
//     secondary: {
//       main: indigo[500],
//     },
//     background: {
//       default: '#e4f0e2',
//       paper: '#effced',
//     },
//     action: {
//       active: yellow['A700'],
//       hover: yellow['A200'],
//       disabled: grey['A200'],
//       activatedOpacity: 0.12,
//       focus: yellow['A200'],
//       selected: yellow['A200'],
//     },
//     divider: grey['200'],
//     text: {
//       primary: '#000000',
//       secondary: '#ffffff',
//     },
//   },
// });
