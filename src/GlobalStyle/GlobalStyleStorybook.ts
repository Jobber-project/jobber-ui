import { createGlobalStyle, css } from 'styled-components'

export const globalStyleStorybook = css`
  html {
    font-size: 10px;
  }
`

const GlobalStyle = createGlobalStyle`
  ${globalStyleStorybook}
`

export default GlobalStyle
