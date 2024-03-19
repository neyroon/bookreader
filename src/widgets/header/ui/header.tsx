import { ReactNode } from 'react';

import { BookIconContainer, Box, ButtonsContainer, Navigation, StyledBookIcon, Title } from './header.styles';

export interface HeaderProps {
  title?: string;
  children: ReactNode;
}

export const Header = ({ title = '', children }: HeaderProps) => {
  return (
    <Box>
      <Navigation>
        <BookIconContainer>
          <StyledBookIcon />
        </BookIconContainer>
        <Title $size='normal-text' $align='center'>
          {title}
        </Title>
        <ButtonsContainer>{children}</ButtonsContainer>
      </Navigation>
    </Box>
  );
};
