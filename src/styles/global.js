import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #434343, #131313);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #434343, #131313); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #414141;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
