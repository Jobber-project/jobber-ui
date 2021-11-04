import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { COLORS, PRIMARY_GRADIENT } from '../utils/colorUtils'

const primaryTheme = {
  border: COLORS.electricViolet,
  background: `linear-gradient(90deg, ${COLORS.electricViolet} 0%, ${COLORS.havelockBlue} 100%)`,
  text: COLORS.white,
}

function getTheme(variant) {
  switch (variant) {
    case 'primary':
      return {
        border: COLORS.electricViolet,
        background: `linear-gradient(90deg, ${COLORS.electricViolet} 0%, ${COLORS.havelockBlue} 100%)`,
        text: COLORS.white,
      }
    case 'secondary':
      return {
        border: COLORS.sunshade,
        background: PRIMARY_GRADIENT,
        text: COLORS.persianIndigo,
      }
    case 'success':
      return {
        border: COLORS.emerald,
        background: COLORS.emerald,
        text: COLORS.white,
      }
    case 'warning':
      return {
        border: COLORS.yellowOrange,
        background: COLORS.yellowOrange,
        text: COLORS.black,
      }
    case 'error':
      return {
        border: COLORS.carnation,
        background: COLORS.carnation,
        text: COLORS.white,
      }
    default:
      return {
        border: COLORS.havelockBlue,
        background: COLORS.white,
        text: COLORS.black,
      }
  }
}

function getOutlined({ $outlined }): string {
  if (!$outlined) return ''
  return ``
}

const Container = styled.button<{
  $variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
  $size?: 'small' | 'medium' | 'large'
  $outlined: boolean
}>`
  cursor: pointer;
  appearance: none;
  border-radius: 10px;
  height: 40px;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 0.7619047619em; // 16/21
  border: none;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};

  ${getOutlined}

  ${props =>
    props.$outlined &&
    `
    border: 1px solid ${props.theme.border};
    background: white;
    color: ${props.theme.border};

    &:hover {
      border-width: 2px
    }
  `};
`

type ButtonProps = {
  /**
   * Appearance variant
   */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
  /**
   * Button element type attribute
   */
  type?: 'button' | 'submit'
  /**
   * Regular onClick handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button outlined
   */
  outlined?: boolean
  /**
   * Button disabled
   */
  disabled?: boolean
  /**
   * Button content
   */
  children?: string
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  type = 'button',
  onClick,
  size = 'medium',
  outlined = false,
  disabled = false,
  children,
}) => {
  return (
    <ThemeProvider theme={() => getTheme(variant)}>
      <Container
        $variant={variant}
        type={type}
        onClick={onClick}
        $size={size}
        $outlined={outlined}
        disabled={disabled}
        height="false"
      >
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default Button
