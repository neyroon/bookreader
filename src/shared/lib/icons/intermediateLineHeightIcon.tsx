import { FC } from 'react';

import { IconProps } from './types';

export const IntermediateLineHeightIcon: FC<IconProps> = ({ className }) => (
  <svg
    width="40"
    height="13"
    viewBox="0 0 40 13"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="1.5" x2="40" y2="1.5" stroke="black" strokeWidth="3" />
    <line y1="6.5" x2="40" y2="6.5" stroke="black" strokeWidth="3" />
    <line y1="11.5" x2="40" y2="11.5" stroke="black" strokeWidth="3" />
  </svg>
);
