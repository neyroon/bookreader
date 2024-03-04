import { forwardRef, FunctionComponent } from 'react';

import { HTMLTypographyElement, TypographyProps } from './types';
import { Box } from './typography.styles';

export const Typography: FunctionComponent<TypographyProps> = forwardRef<
  HTMLTypographyElement,
  TypographyProps
>(({ $size = 'normal-text', className, ...props }, ref) => {
  return <Box ref={ref} $size={$size} className={className} {...props} />;
});

export default Typography;
