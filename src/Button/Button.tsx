import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  appearance: none;
  border-width: 1px;

  ${props =>
    props.$variant === 'primary' &&
    `
    border-color: black;
    color: blue;
  `}

  ${props =>
    props.$variant === 'secondary' &&
    `
    border-color: gray;
    color: green;
  `}
`

type ButtonProps = {
  /**
   * Appearance variant
   */
  variant?: 'primary' | 'secondary'
  /**
   * Button element type attribute
   */
  type?: 'button' | 'submit'
  /**
   * Regular onClick handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * Button content
   */
  children?: string
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <Container $variant={variant} type={type} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button
