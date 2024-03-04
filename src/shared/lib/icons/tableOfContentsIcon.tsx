import { FC } from 'react';
import { IconProps } from './types';

export const TableOfContentsIcon: FC<IconProps> = ({className}) => (
  <svg
    fill="#000000"
    width={40}
    height={40}
    viewBox="0 0 32 32"
    id="icon"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="6" width="18" height="2" />
    <rect x="4" y="12" width="18" height="2" />
    <rect x="4" y="18" width="18" height="2" />
    <rect x="4" y="24" width="18" height="2" />
    <rect x="26" y="6" width="2" height="2" />
    <rect x="26" y="12" width="2" height="2" />
    <rect x="26" y="18" width="2" height="2" />
    <rect x="26" y="24" width="2" height="2" />
  </svg>
);
