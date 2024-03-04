import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  FontSize,
  FontFamily,
  TextAlign,
  Hyphens,
  LineHeight,
  FontState,
} from './types';

const initialFontState: FontState = {
  fontSize: FontSize.Normal,
  fontFamily: FontFamily.Times,
  hyphens: Hyphens.None,
  lineHeight: LineHeight.Intermediate,
  textAlign: TextAlign.Left,
};

export const FontSlice = createSlice({
  name: 'font',
  initialState: initialFontState,
  reducers: {
    setFontSize: (state, action: PayloadAction<FontSize>) => {
      state.fontSize = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<FontFamily>) => {
      state.fontFamily = action.payload;
    },
    setHyphens: (state, action: PayloadAction<Hyphens>) => {
      state.hyphens = action.payload;
    },
    setLineHeight: (state, action: PayloadAction<LineHeight>) => {
      state.lineHeight = action.payload;
    },
    setTextAlign: (state, action: PayloadAction<TextAlign>) => {
      state.textAlign = action.payload;
    },
  },
  selectors: {
    selectFontSize: (state) => state.fontSize,
    selectFontFamily: (state) => state.fontFamily,
    selectHyphens: (state) => state.hyphens,
    selectLineHeight: (state) => state.lineHeight,
    selectTextAlign: (state) => state.textAlign,
  },
});

export const {
  setFontFamily,
  setFontSize,
  setHyphens,
  setLineHeight,
  setTextAlign,
} = FontSlice.actions;
export const {
  selectFontFamily,
  selectFontSize,
  selectHyphens,
  selectLineHeight,
  selectTextAlign,
} = FontSlice.selectors;
