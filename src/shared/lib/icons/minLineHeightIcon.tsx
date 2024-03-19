import { IconProps } from './types';

export const MinLineHeightIcon = ({ className }: IconProps) => (
  <svg width='40' height='11' viewBox='0 0 40 11' fill='none' className={className} xmlns='http://www.w3.org/2000/svg'>
    <line y1='1.5' x2='40' y2='1.5' stroke='black' strokeWidth='3' />
    <line y1='5.5' x2='40' y2='5.5' stroke='black' strokeWidth='3' />
    <line y1='9.5' x2='40' y2='9.5' stroke='black' strokeWidth='3' />
  </svg>
);
