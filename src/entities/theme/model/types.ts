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

export const Themes = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const;

export type Themes = (typeof Themes)[keyof typeof Themes];
