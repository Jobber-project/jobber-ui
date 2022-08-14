import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

import COLORS from '../shared/colors'

export const globalStyle = css`
  ${reset}
  font-family: 'Roboto', sans-serif;

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
  }

  input,
  button,
  select {
    outline-color: ${COLORS.scienceBlue};
  }
`

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

export default GlobalStyle
