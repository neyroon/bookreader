import { BookIcon } from '@/shared/lib/icons';
import { Typography } from '@/shared/ui/typography';
import styled from 'styled-components';

export const Box = styled.header`
  padding: 20px 60px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  display: block;
  text-align: center;
  width: calc(100% / 3);
  color: ${({ theme }) => theme.colors.font};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
  width: calc(100% / 3);
`;

export const BookIconContainer = styled.div`
  width: calc(100% / 3);
`;

export const StyledBookIcon = styled(BookIcon)`
  & path {
    stroke: ${({ theme }) => theme.colors.font};
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
`;
