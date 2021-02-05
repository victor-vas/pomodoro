import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    background: #41e1ba;
    transition: background-color 300ms ease-in-out;
    line-height: 1.5;

    &.working {
      background: #EF5D50;
    }

    &.working button {
      background: #ef5d50;
      color: #fff;
    }
  }

  .hidden {
    display: none;
  }
`;
