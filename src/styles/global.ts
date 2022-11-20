import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: 'Work Sans', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
  scroll-behavior: auto;

  ::-webkit-scrollbar {
    background-color: #0D0D0D;
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1.2rem;
    background-color: lightgray;
  }
}
`