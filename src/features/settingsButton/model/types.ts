export const FontSize = {
  Normal: '18',
  Large: '22',
} as const;

export const FontFamily = {
  Times: 'Times New Roman',
  Arial: 'Arial',
  Kazimir: 'Kazimir',
  Verdana: 'Verdana',
} as const;

export const TextAlign = {
  Left: 'left',
  Justify: 'justify',
} as const;

export const Hyphens = {
  Auto: 'auto',
  None: 'none',
} as const;

export const LineHeight = {
  Minimum: '1.3',
  Intermediate: '1.4',
  Maximum: '1.6',
} as const;

type ValueOf<T> = T[keyof T];

export type FontSize = ValueOf<typeof FontSize>;
export type FontFamily = ValueOf<typeof FontFamily>;
export type TextAlign = ValueOf<typeof TextAlign>;
export type Hyphens = ValueOf<typeof Hyphens>;
export type LineHeight = ValueOf<typeof LineHeight>;

export interface FontState {
  fontSize: FontSize;
  fontFamily: FontFamily;
  hyphens: Hyphens;
  lineHeight: LineHeight;
  textAlign: TextAlign;
}
