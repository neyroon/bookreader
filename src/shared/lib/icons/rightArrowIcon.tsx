import { FC } from 'react';
import { IconProps } from './types';

export const RightArrowIcon: FC<IconProps> = ({ className }) => (
  <svg
    width={80}
    height={80}
    viewBox="0 0 1024 1024"
    version="1.1"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
      fill="#000000"
    />
  </svg>
);
