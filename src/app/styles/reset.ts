import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Kazimir', serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
