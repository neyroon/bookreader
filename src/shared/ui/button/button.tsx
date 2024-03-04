import { ComponentProps, FC, ReactNode } from 'react';

import { Box } from './button.styles';

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
