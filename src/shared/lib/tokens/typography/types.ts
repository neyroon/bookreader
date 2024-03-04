export type CommunicationTypo = 'HEADING1' | 'HEADING2';

export type InterfaceTypo =
  | 'BIG_TEXT'
  | 'NORMAL_TEXT'
  | 'NORMAL_MEDIUM_TEXT'
  | 'SMALL_TEXT'
  | 'SMALL_MEDIUM_TEXT';

export type AllTypo = CommunicationTypo | InterfaceTypo;

export type Devices = 'desktop' | 'mobile';

export type FontWeight = 300 | 400 | 500;

export type FontSize =
  | 50
  | 34
  | 27
  | 24
  | 22
  | 18
  | 16
  | 14
  | 13
  | 11
  | 10
  | 1.5
  | 1
  | 0.8;

export interface FontParams {
  weight: FontWeight;
  size: FontSize;
  lineHeight: number;
  tracking: number;
}

export interface FontByDevice {
  desktop: FontParams;
  mobile: FontParams;
}

export type FontMap<T extends string> = {
  [key in T]: FontByDevice;
};

export interface Typography {
  communication: FontMap<CommunicationTypo>;
  interface: FontMap<InterfaceTypo>;
}

export type TypefaceStyles = 'LIGHT' | 'BOOK' | 'MEDIUM';

export type Typeface = {
  [key in TypefaceStyles]: {
    weight: FontWeight;
  };
};

export type GetTypographyToken = (name: AllTypo) => FontParams;
