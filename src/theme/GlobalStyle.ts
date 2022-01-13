import { createGlobalStyle, ThemeProps, withTheme } from 'styled-components';
import { ThemeType } from './Theme.types';
  
const GlobalStyle = createGlobalStyle<ThemeProps<ThemeType>>(({theme}) => `

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
      background-color: ${ theme.background};
      color: ${ theme.color};
      font-family: 'Bebas Neue', sans-serif;
    }

    button { 
      background-color: ${ theme.backgroundButton};
      color: ${ theme.colorButton};
      cursor: pointer;
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
      background-color: rgba(0,0,0,.2);

      span {
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
      }

    }

    a { 
      color: ${ theme.color };
    }

    @media (hover) {
      button:hover {
          background-color: ${ theme.backgroundTwo};
          color: ${ theme.colorTwo};
      }
    }

    @media (pointer: coarse) {
      && button:hover {
        background-color: none !important
    }

`);
  
export default withTheme(GlobalStyle);