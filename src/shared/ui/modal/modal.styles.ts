import { CloseIcon } from '@/shared/lib/icons';
import styled from 'styled-components';

import { Button } from '../button';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  animation: none;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 30px 30px;
  border-radius: 10px;
  width: 600px;
  height: calc(100vh - 120px);
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: 30px;
`;

export const CloseButton = styled(Button)`
  width: 25px;
  height: 25px;
`;

export const CloseButtonIcon = styled(CloseIcon)`
  fill: ${({ theme }) => theme.colors.font};
`;

export const Body = styled.div`
  margin-top: 16px;
  text-align: left;
`;
