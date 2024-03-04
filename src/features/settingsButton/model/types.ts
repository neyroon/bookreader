export enum FontSize {
  Normal = '18',
  Large = '22',
}

export enum FontFamily {
  Times = 'Times New Roman',
  Arial = 'Arial',
  Kazimir = 'Kazimir',
  Verdana = 'Verdana',
}

export enum TextAlign {
  Left = 'left',
  Justify = 'justify',
}

export enum Hyphens {
  Auto = 'auto',
  None = 'none',
}

export enum LineHeight {
  Minimum = '1.3',
  Intermediate = '1.4',
  Maximum = '1.6',
}

export interface FontState {
  fontSize: FontSize;
  fontFamily: FontFamily;
  hyphens: Hyphens;
  lineHeight: LineHeight;
  textAlign: TextAlign;
}
