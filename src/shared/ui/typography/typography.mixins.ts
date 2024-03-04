import { allTypography, breakpoints, FontByDevice } from '@/shared/lib/tokens';
import { css } from 'styled-components';

import { MixinsMap, Size, TypographyProps } from './types';

export const stylesByColor = () =>
  css`
    color: inherit;
  `;

export const fontMixins: MixinsMap<Size, FontByDevice> = {
  'heading-1': allTypography.HEADING1,
  'heading-2': allTypography.HEADING2,
  'big-text': allTypography.BIG_TEXT,
  'normal-text': allTypography.NORMAL_TEXT,
  'normal-medium-text': allTypography.NORMAL_MEDIUM_TEXT,
  'small-text': allTypography.SMALL_TEXT,
  'small-medium-text': allTypography.SMALL_MEDIUM_TEXT,
};

export const stylesBySize = ({ $size }: TypographyProps) => css`
  font-weight: ${fontMixins[$size].mobile.weight};
  font-size: ${fontMixins[$size].mobile.size}em;
  letter-spacing: ${fontMixins[$size].mobile.tracking}px;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    font-weight: ${fontMixins[$size].desktop.weight};
    font-size: ${fontMixins[$size].desktop.size}em;
    letter-spacing: ${fontMixins[$size].desktop.tracking}px;
  }
`;

export const stylesByUppercase = ({ $uppercase }: TypographyProps) =>
  $uppercase
    ? css`
        text-transform: uppercase;
      `
    : css``;

export const stylesByAlign = ({ $align }: TypographyProps) =>
  $align
    ? css`
        text-align: ${$align};
      `
    : css``;

export const stylesByFontFamily = ({ $fontFamily }: TypographyProps) =>
  $fontFamily
    ? css`
        font-family: ${$fontFamily};
      `
    : css``;
