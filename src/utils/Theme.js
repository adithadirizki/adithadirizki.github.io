import { createGlobalStyle } from "styled-components";

const defaultTheme = {
  primary: "#ff2f2f",
  secondary: "#ffffff",
};

export const lightTheme = {
  ...defaultTheme,
  name: "light",
  highlight: "#000000",
  color: "#5a5a5a",
  background: "#ffffff",
};

export const darkTheme = {
  ...defaultTheme,
  name: "dark",
  highlight: "#ffffff",
  color: "#cfcfcf",
  background: "#000000",
};

export const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
   background-color: ${({ theme }) => theme.background};
   color: ${({ theme }) => theme.color};
   transition: all .5s ease-in-out;
}
`;
