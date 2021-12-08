import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

export const globalStyle = css`
  ${reset}
  font-family: 'Roboto', sans-serif;

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
  }
`

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

export default GlobalStyle
