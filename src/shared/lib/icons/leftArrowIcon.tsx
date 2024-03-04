import { FC } from 'react';
import { IconProps } from './types';

export const LeftArrowIcon: FC<IconProps> = ({ className }) => (
  <svg
    width={80}
    height={80}
    viewBox="0 0 1024 1024"
    version="1.1"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
      fill="#000000"
    />
  </svg>
);
