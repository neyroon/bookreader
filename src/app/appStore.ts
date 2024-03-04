import { configureStore } from '@reduxjs/toolkit';
import { ReaderSlice } from '@/entities/pageBuilder/model';
import { ThemeSlice } from '@/entities/theme/model';
import { FontSlice } from '@/features/settingsButton/model';

export const appStore = configureStore({
  reducer: {
    [ReaderSlice.name]: ReaderSlice.reducer,
    [ThemeSlice.name]: ThemeSlice.reducer,
    [FontSlice.name]: FontSlice.reducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
