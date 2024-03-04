import { FunctionComponent } from 'react';

import { TextProps } from './types';
import { Typography } from './typography';

export const Paragraph: FunctionComponent<TextProps> = ({
  children,
  ...props
}) => (
  <Typography {...props} as="p">
    {children}
  </Typography>
);

export const Span: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Typography {...props} as="span">
    {children}
  </Typography>
);
