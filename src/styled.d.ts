// styled.d.ts
import 'styled-components';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends MuiTheme {}
}

declare module '@mui/material/styles' {
  interface Palette {
    gray: PaletteColor;
    pink: PaletteColor;
    gradientBackgroundColors: {
      lightPink: string;
      lightBlue: string;
    };
  }

  interface PaletteOptions {
    gray?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    gradientBackgroundColors?: {
      lightPink: string;
      lightBlue: string;
    };
  }
}
