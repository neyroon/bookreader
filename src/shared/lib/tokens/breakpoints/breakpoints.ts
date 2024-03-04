import { Breakpoints, BreakpointMap, GetBreakpointToken } from './types';

export const breakpoints: BreakpointMap<Breakpoints> = {
  MOBILE_S: 320,
  MOBILE_M: 375,
  MOBILE_L: 540,
  MOBILE_XL: 768,
  DESKTOP_S: 1024,
  DESKTOP_M: 1280,
  DESKTOP_L: 1440,
  DESKTOP_XL: 1920,
} as const;

export const getBreakpointToken: GetBreakpointToken = (tokenName) =>
  breakpoints[tokenName];
