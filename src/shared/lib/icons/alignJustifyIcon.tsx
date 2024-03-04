import { FC } from 'react';

import { IconProps } from './types';

export const AlignJustifyIcon: FC<IconProps> = ({ className }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10H21M3 14H21M3 18H21M3 6H21"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
