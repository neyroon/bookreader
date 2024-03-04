import { SpacingVertical, SpacingHorizontal, SpacingMap } from './types';

export const spacingVertical: SpacingMap<SpacingVertical> = {
  XXXL: {
    desktop: 120,
    mobile: 64,
  },
  XXL: {
    desktop: 88,
    mobile: 48,
  },
  XL: {
    desktop: 48,
    mobile: 24,
  },
  L: {
    desktop: 40,
    mobile: 24,
  },
  M: {
    desktop: 32,
    mobile: 16,
  },
  S: {
    desktop: 24,
    mobile: 16,
  },
  XS: {
    desktop: 16,
    mobile: 8,
  },
  XXS: {
    desktop: 8,
    mobile: 8,
  },
} as const;

export const spacingHorizontal: SpacingMap<SpacingHorizontal> = {
  L: {
    desktop: 40,
    mobile: 24,
  },
  M: {
    desktop: 24,
    mobile: 16,
  },
  S: {
    desktop: 16,
    mobile: 8,
  },
  XS: {
    desktop: 8,
    mobile: 8,
  },
} as const;
