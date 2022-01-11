import { createGlobalStyle, ThemeProps, withTheme } from 'styled-components';
import { ThemeType } from './theme/Theme.types';

  
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
    }

`);
  
export default withTheme(GlobalStyle);