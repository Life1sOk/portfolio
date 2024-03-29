import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  :root {
    --white: #ffffff;
    --blue: #40578f;
    --font-color: rgb(199, 207, 237);
    --light-orange: #e55f3f;
    --light-yellow: #f1a845;
    --background: #001528;
    --background-secondary: #011a31;
    --dark-background: #000e1b;
    --light-background: green;

    --font-name: "Exo 2", sans-serif;
    --font-logo: "Poppins", sans-serif;
    --font-main: "Inter", sans-serif;
  }

  body {
    font-family: var(--font-main);
    font-weight: 500;

    color: white;
    background-color: #001528;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul,
  ol {
    list-style: none;
  }
`;
