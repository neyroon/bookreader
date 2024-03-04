import { typeface } from './typeface';
import {
  AllTypo,
  CommunicationTypo,
  FontMap,
  GetTypographyToken,
  InterfaceTypo,
  Typography,
} from './types';

export const communicationTypography: FontMap<CommunicationTypo> = {
  HEADING1: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 50,
      lineHeight: 100,
      tracking: -3,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 34,
      lineHeight: 100,
      tracking: -2,
    },
  },
  HEADING2: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 1.5,
      lineHeight: 140,
      tracking: 0,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 1.5,
      lineHeight: 140,
      tracking: 0,
    },
  },
};

export const interfaceTypography: FontMap<InterfaceTypo> = {
  BIG_TEXT: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 24,
      lineHeight: 140,
      tracking: 0,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 18,
      lineHeight: 140,
      tracking: 0,
    },
  },
  NORMAL_TEXT: {
    desktop: {
      weight: typeface.BOOK.weight,
      size: 1,
      lineHeight: 140,
      tracking: 0,
    },
    mobile: {
      weight: typeface.BOOK.weight,
      size: 1,
      lineHeight: 140,
      tracking: 0,
    },
  },
  NORMAL_MEDIUM_TEXT: {
    desktop: {
      weight: typeface.MEDIUM.weight,
      size: 18,
      lineHeight: 110,
      tracking: -0.4,
    },
    mobile: {
      weight: typeface.MEDIUM.weight,
      size: 14,
      lineHeight: 120,
      tracking: -0.3,
    },
  },
  SMALL_TEXT: {
    desktop: {
      weight: typeface.LIGHT.weight,
      size: 13,
      lineHeight: 120,
      tracking: -0.4,
    },
    mobile: {
      weight: typeface.LIGHT.weight,
      size: 10,
      lineHeight: 120,
      tracking: -0.6,
    },
  },
  SMALL_MEDIUM_TEXT: {
    desktop: {
      weight: typeface.MEDIUM.weight,
      size: 0.8,
      lineHeight: 120,
      tracking: 0,
    },
    mobile: {
      weight: typeface.MEDIUM.weight,
      size: 0.8,
      lineHeight: 110,
      tracking: -0.3,
    },
  },
};

export const typography: Typography = {
  communication: communicationTypography,
  interface: interfaceTypography,
};

export const allTypography: FontMap<AllTypo> = {
  ...communicationTypography,
  ...interfaceTypography,
};

export const getDesktopTypographyToken: GetTypographyToken = (typoName) =>
  allTypography[typoName]['desktop'];

export const getMobileTypographyToken: GetTypographyToken = (typoName) =>
  allTypography[typoName]['mobile'];
