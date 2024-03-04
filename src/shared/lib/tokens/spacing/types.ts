export type SpacingVertical =
  | 'XXXL'
  | 'XXL'
  | 'XL'
  | 'L'
  | 'M'
  | 'S'
  | 'XS'
  | 'XXS';

export type SpacingHorizontal = 'L' | 'M' | 'S' | 'XS';

export interface SpacingParams {
  desktop: number;
  mobile: number;
}

export type SpacingMap<T extends SpacingVertical | SpacingHorizontal> = {
  [key in T]: SpacingParams;
};
