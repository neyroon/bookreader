import styled from 'styled-components';

import { TypographyProps } from './types';
import {
  stylesByAlign,
  stylesByColor,
  stylesBySize,
  stylesByUppercase,
  stylesByFontFamily,
} from './typography.mixins';

export const Box = styled.span<TypographyProps>`
  font-feature-settings: normal;
  margin: 0;
  padding: 0;
  font-family: inherit;
  vertical-align: baseline;
  ${stylesByColor};
  ${stylesBySize};
  ${stylesByAlign};
  ${stylesByUppercase};
  ${stylesByFontFamily};
`;
