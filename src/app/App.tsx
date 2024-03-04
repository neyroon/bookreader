import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ResetStyle } from './styles/reset';
import { BookPage, UploadPage } from '@/pages';
import { useAppSelector } from '@/shared/model/hooks';

const App = () => {
  const theme = useAppSelector((state) => state.theme);
  const [unparsedText, setUnparsedText] = useState<string | null>(null);

  const handleReady = (file: File) => {
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
      setUnparsedText(reader.result as string);
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      {unparsedText ? (
        <BookPage unparsedText={unparsedText} />
      ) : (
        <UploadPage onReady={handleReady} />
      )}
    </ThemeProvider>
  );
};

export default App;
