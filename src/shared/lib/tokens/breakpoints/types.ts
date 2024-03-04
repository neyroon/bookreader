export type Breakpoints =
  | 'MOBILE_S'
  | 'MOBILE_M'
  | 'MOBILE_L'
  | 'MOBILE_XL'
  | 'DESKTOP_S'
  | 'DESKTOP_M'
  | 'DESKTOP_L'
  | 'DESKTOP_XL';

export type BreakpointMap<T extends Breakpoints> = {
  [key in T]: number;
};

export type GetBreakpointToken = (name: Breakpoints) => number;
