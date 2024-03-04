declare global {
  declare type RootState = import('../appStore').RootState;
  declare type AppDispatch = import('../appStore').AppDispatch;
}

export {};
