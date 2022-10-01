import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

const Container = styled.button`
  appearance: none;
  background: transparent;
  font: inherit;
  border: none;
  border-radius: 0;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.charade};
  text-align: center;
  box-sizing: border-box;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`

type PlainButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function PlainButtonComponent(
  { type = 'button', ...buttonProps }: PlainButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return <Container ref={ref} type={type} {...buttonProps} />
}

const PlainButton = forwardRef(PlainButtonComponent)

export type { PlainButtonProps }

export default PlainButton
