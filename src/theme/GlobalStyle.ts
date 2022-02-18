import { createGlobalStyle, ThemeProps, withTheme } from "styled-components";
import { ThemeType } from "./Theme.types";

const GlobalStyle = createGlobalStyle<ThemeProps<ThemeType>>(
  ({ theme }) => `

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
  
    body  {
      -webkit-font-smoothing: antialiased;
      height: 100vh;
      margin: 0 auto;
      background-color: ${theme.background};
      color: ${theme.color};
      font-family: 'Gothic A1', sans-serif;
      font-size: 18px;
    }

    button { 
      background-color: ${theme.backgroundButton};
      color: ${theme.colorButton};
      cursor: pointer;
      transition: color 0.5s, background-color 0.5s;
    }

    a { 
      color: ${theme.color};
      cursor: pointer;
      text-decoration: none;
    }

    .text-btn {
      background-color: ${theme.backgroundButton};
      color: ${theme.colorButton};
      cursor: pointer;
      padding: 0.75rem;
      margin: 1rem;
      border: 1px solid ${theme.backgroundTwo};
      border-radius: 0.5rem;
      box-shadow: 0px 0 2px 1px ${theme.backgroundTwo};
      transition: color 0.5s, background-color 0.5s;
    }

    .icon-btn { 
      padding: 0.75rem;
      margin: 1rem;
      width: 3.5rem;
      height: 3.5rem;
      line-height: 2rem;
      border: 0;
      border-radius:100%;
      background-color: ${theme.background}33;
      cursor: pointer;
      backdrop-filter: blur(5px);

      span {
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
        color: ${theme.color};
      }

      @media (min-width: 768px) {

        span {
          font-size: 1.1rem;
        }

      }
    }

    @media (hover) {
      button:hover, .icon-btn:hover, .text-btn:hover {
          background-color: ${theme.background};
          color: ${theme.color};
      }
    }

    @media (pointer: coarse) {
      && button:hover, .icon-btn:hover, .text-btn:hover {
        background-color: none !important
    }

`
);

export default withTheme(GlobalStyle);
