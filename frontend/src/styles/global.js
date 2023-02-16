import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background-color: #5974c1;
    text-rendering: optimizeLegibility;
  }

  html body, #root {
    height: 50%;
  }
`;