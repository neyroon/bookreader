import { HTMLAttributes } from 'react';

export type Size =
  | 'heading-1'
  | 'heading-2'
  | 'big-text'
  | 'normal-text'
  | 'normal-medium-text'
  | 'small-text'
  | 'small-medium-text';

export type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type Align = 'left' | 'center' | 'right';

export type MixinsMap<T extends string, K> = {
  [key in T]: K;
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: As;
  $size?: Size;
  $uppercase?: boolean;
}

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  $size: Size;
  $uppercase?: boolean;
}

export type HTMLTypographyElement =
  | HTMLSpanElement
  | HTMLParagraphElement
  | HTMLHeadingElement;

export interface TypographyProps extends HTMLAttributes<HTMLTypographyElement> {
  $size: Size;
  $uppercase?: boolean;
  as?: As;
  $align?: Align;
  $fontFamily?: string;
  className?: string;
}
