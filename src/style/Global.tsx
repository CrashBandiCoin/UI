import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
    
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url('/images/TeaSwap_Background_v5.png');
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-position: center center;

    img {
      height: auto;
      max-width: 80%;
    }
  }
`

export default GlobalStyle
