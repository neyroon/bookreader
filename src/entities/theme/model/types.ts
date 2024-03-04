export interface IBaseTheme {
  type: Themes;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    danger: string;

    bg: string;
    font: string;
  };
}

export enum Themes {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}
