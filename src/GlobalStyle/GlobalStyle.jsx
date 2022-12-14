import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
// npm i modern-normalize

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /*dark theme*/
html[data-theme="dark"] {
  --mainWrapper: #5c6bc0;
  --appBarWrapper: #8c9eff;
  --textFirst: #03e9f4; 
  --textFirstHover: #6666ff;
  --textBlack: #000000;
   --contactsButton: #6666ff;
   --borderWrapper: #12b8cc;
   --inputWrapper: #e6e6e6;
}

/*light theme*/
html[data-theme="light"] {
  --mainWrapper:#e3f2fd;
  --appBarWrapper: #bbdefb;
  --textFirst: #64b5f6; 
  --textFirstHover: #3f51b5;
  --textBlack:#2a2a2a;
  --contactsButton: #3f51b5;
   --borderWrapper: #64b5f6;
   --inputWrapper: #ffffff;
}

`;

// #12b8cc
// #4c1b8f
