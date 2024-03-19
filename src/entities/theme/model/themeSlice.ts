import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseTheme, Themes } from './types';

const LightTheme: IBaseTheme = {
  type: Themes.LIGHT,
  colors: {
    primary: '#f2f1f1;',
    secondary: '#99149b;',
    tertiary: '#c8c8c8',
    danger: '#b80d0d',

    bg: '#ffffff',
    font: '#19191B',
  },
};

export const DarkTheme: IBaseTheme = {
  type: Themes.DARK,
  colors: {
    ...LightTheme.colors,
    primary: '#202022',
    tertiary: '#504e4e',
    bg: '#171717',
    font: '#c4c4c4',
  },
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: LightTheme,
  reducers: {
    setTheme: (state, action: PayloadAction<Themes>) => {
      const newTheme = action.payload === Themes.LIGHT ? LightTheme : DarkTheme;
      return { ...state, ...newTheme };
    },
  },
  selectors: {
    selectThemeType: (state) => state.type,
    selectThemeColors: (state) => state.colors,
  },
});

export const { setTheme } = ThemeSlice.actions;
export const { selectThemeColors, selectThemeType } = ThemeSlice.selectors;
