import { useRef } from 'react';

import { Box, Footer, FooterContainer, Main } from './book.styles';

import { FullScreenButton } from '@/features/fullScreenButton';
import { SettingsButton } from '@/features/settingsButton/ui';
import { TableOfContentsButton } from '@/features/tableOfContentsButton';
import { Header } from '@/widgets/header';
import { Reader } from '@/widgets/reader';
import { useParser } from '@/shared/lib/use';
import { OTagNames } from '@/shared/lib/parser';

export const BookPage = ({ unparsedText }: { unparsedText: string }) => {
  const parsedBookContent = useParser(unparsedText);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerTitle = parsedBookContent[0].getElement(OTagNames.BOOK_TITLE)?.value;

  return (
    <Box ref={containerRef}>
      <Header title={headerTitle}>
        <TableOfContentsButton />
        <FullScreenButton ref={containerRef} />
        <SettingsButton />
      </Header>
      <Main><Reader parsedBookContent={parsedBookContent[0]} /></Main>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </Box>
  );
};
