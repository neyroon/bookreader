import { ComponentProps, ReactNode } from 'react';

import { Box } from './button.styles';

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <Box {...props}>{children}</Box>;
};
