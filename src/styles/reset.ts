import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const ResetStyle = styled.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Oswald', serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
