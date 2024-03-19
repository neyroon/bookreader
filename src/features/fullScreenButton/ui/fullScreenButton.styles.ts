import { ExitFullScreenIcon, FullScreenIcon } from '@/shared/lib/icons';
import styled from 'styled-components';

export const StyledExitFullScreenIcon = styled(ExitFullScreenIcon)`
  & path {
    fill: ${({ theme }) => theme.colors.font};
  }
`;

export const StyledFullScreenIcon = styled(FullScreenIcon)`
  & path {
    fill: ${({ theme }) => theme.colors.font};
  }
`;
