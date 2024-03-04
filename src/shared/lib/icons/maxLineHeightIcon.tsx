import { FC } from 'react';

import { IconProps } from './types';

export const MaxLineHeightIcon: FC<IconProps> = ({ className }) => (
  <svg
    width="40"
    height="15"
    viewBox="0 0 40 15"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="1.5" x2="40" y2="1.5" stroke="black" strokeWidth="3" />
    <line y1="7.5" x2="40" y2="7.5" stroke="black" strokeWidth="3" />
    <line y1="13.5" x2="40" y2="13.5" stroke="black" strokeWidth="3" />
  </svg>
);
