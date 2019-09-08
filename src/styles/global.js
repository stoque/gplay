import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #000;
    overflow: hidden;
  }
`;

export default GlobalStyle;
