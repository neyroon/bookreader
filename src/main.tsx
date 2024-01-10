import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { ResetStyle, theme } from './styles';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
