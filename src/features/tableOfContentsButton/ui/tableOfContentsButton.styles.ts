import { TableOfContentsIcon } from '@/shared/lib/icons';
import styled, { css } from 'styled-components';

export const StyledTableOfContentsIcon = styled(TableOfContentsIcon)`
  fill: ${({ theme }) => theme.colors.font};
`;

export const TitleList = styled.ul`
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
`;

export const Title = styled.li<{ $active: boolean }>`
  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.secondary};
    `}
  font-size: 1em;
  padding: 20px 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;
