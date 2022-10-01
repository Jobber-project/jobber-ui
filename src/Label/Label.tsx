import React, { ReactNode } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

const Container = styled.label<{
  $invalid: boolean
}>`
  display: block;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.667em;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  color: ${props => (props.$invalid ? COLORS.carnation : COLORS.charade)};
`

interface LabelProps {
  invalid?: boolean
  as?: keyof HTMLElementTagNameMap
  htmlFor?: string
  children?: ReactNode
}

function Label({ invalid = false, as, htmlFor, children }: LabelProps) {
  return (
    <Container
      $invalid={invalid}
      as={as as any}
      htmlFor={as ? undefined : htmlFor}
    >
      {children}
    </Container>
  )
}

export type { LabelProps }

export default Label
