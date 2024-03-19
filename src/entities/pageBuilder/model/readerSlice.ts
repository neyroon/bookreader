import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReaderState, Section } from './types';

const initialState: ReaderState = {
  currentSection: 0,
  totalSections: 0,
  bookTitle: '',
  sections: [],
};

export const ReaderSlice = createSlice({
  name: 'reader',
  initialState,
  reducers: {
    decSection: (state) => {
      state.currentSection--;
    },
    incSection: (state) => {
      state.currentSection++;
    },
    setCurrentSection: (state, action: PayloadAction<number>) => {
      state.currentSection = action.payload;
    },
    setSections: (state, action: PayloadAction<Section[]>) => {
      state.sections = action.payload;
      state.totalSections = action.payload.length;
    },
    setBookTitle: (state, action: PayloadAction<string>) => {
      state.bookTitle = action.payload;
    },
  },
});

export const { decSection, incSection, setCurrentSection, setSections } = ReaderSlice.actions;
