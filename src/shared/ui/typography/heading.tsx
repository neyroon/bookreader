import { FunctionComponent } from 'react';

import { HeadingProps } from './types';
import { Typography } from './typography';

export const Heading: FunctionComponent<HeadingProps> = ({
  children,
  as = 'h1',
  $size = 'heading-1',
  ...props
}) => (
  <Typography {...props} as={as} $size={$size}>
    {children}
  </Typography>
);

export const Heading1: FunctionComponent<HeadingProps> = ({
  children,
  ...props
}) => (
  <Heading {...props} as="h1" $size="heading-1">
    {children}
  </Heading>
);

export const Heading2: FunctionComponent<HeadingProps> = ({
  children,
  ...props
}) => (
  <Heading {...props} as="h2" $size="heading-2">
    {children}
  </Heading>
);
