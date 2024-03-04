import { LeftArrowIcon, RightArrowIcon } from '@/shared/lib/icons';
import styled from 'styled-components';

export const StyledLeftArrowIcon = styled(LeftArrowIcon)`
  transition: opacity 0.3s;
  opacity: 0;
  & path {
    fill: ${({ theme }) => theme.colors.font};
  }
`;

export const StyledRightArrowIcon = styled(RightArrowIcon)`
  transition: opacity 0.3s;
  opacity: 0;

  & path {
    fill: ${({ theme }) => theme.colors.font};
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 80px;
  z-index: 5;
  &:hover > svg {
    opacity: 1;
  }
`;
