import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus{
  outline: 0;
 }

 body{
   background: ${(props) => props.theme.COLORS['base-background']};
   color: ${(props) => props.theme.COLORS['base-text']};
   -webkit-font-smoothing: antialiased;
 }

 a{
  text-decoration: none
 }

 body, input, text-area, button{
    font-family: ${(props) => props.theme.FONT_FAMILY}, sans-serif;
    font-size: 1rem;

 }

`
