import { keyframes } from '@emotion/core'
import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import COLORS, { PRIMARY_GRADIENT, SECONDARY_GRADIENT } from '../shared/colors'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'

function getIconSize({ $size }: { $size: ButtonSize }): number {
  switch ($size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 20
  }
}

function getIconColor({
  $variant,
  $outlined,
}: {
  $variant: ButtonVariant
  $outlined: boolean
}): string {
  switch ($variant) {
    case 'secondary':
      return $outlined ? COLORS.sunshade : COLORS.persianIndigo

    case 'primary':
    default:
      return $outlined ? COLORS.electricViolet : COLORS.white
  }
}

function getIconPadding({ $size }: { $size: ButtonSize }): number {
  switch ($size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 20
  }
}

const IconWrapper = styled.div<{
  $variant: ButtonVariant
  $size: ButtonSize
  $outlined: boolean
}>`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${getIconPadding}px;
  display: flex;
  align-items: center;
  color: ${getIconColor};

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
`

function getOutlinedStyles({
  $outlined,
  $variant,
}: {
  $outlined?: boolean
  $variant?: ButtonVariant
}): string {
  if (!$outlined) return ''
  switch ($variant) {
    case 'primary':
      return `
      outline: 1px solid ${COLORS.electricViolet};
      background: ${COLORS.white};
      color: ${COLORS.electricViolet};
    
      &:hover {
        outline: 2px solid ${COLORS.electricViolet};
      }
    `
    case 'secondary':
      return `
      outline: 1px solid ${COLORS.sunshade};
      background: ${COLORS.white};
      color: ${COLORS.sunshade};
    
      &:hover {
        outline: 2px solid ${COLORS.sunshade};
      }
    `
    case 'success':
      return `
      outline: 1px solid ${COLORS.emerald};
      background: ${COLORS.white};
      color: ${COLORS.emerald};
    
      &:hover {
        outline: 2px solid ${COLORS.emerald};
      }
    `
    case 'warning':
      return `
      outline: 1px solid ${COLORS.yellowOrange};
      background: ${COLORS.white};
      color: ${COLORS.yellowOrange};
    
      &:hover {
        outline: 2px solid ${COLORS.yellowOrange};
      }
    `
    case 'error':
      return `
      outline: 1px solid ${COLORS.carnation};
      background: ${COLORS.white};
      color: ${COLORS.carnation};

      &:hover {
        outline: 2px solid ${COLORS.carnation};
      }
    `
    default:
      return `
      outline: 1px solid ${COLORS.mischa};
      background: ${COLORS.white};
      color: ${COLORS.black};
    
      &:hover {
        outline: 2px solid ${COLORS.havelockBlue};
      }
    `
  }
}

function getFilledStyles({
  $outlined,
  $variant,
}: {
  $outlined?: boolean
  $variant?: ButtonVariant
}): string {
  if ($outlined) return ''
  switch ($variant) {
    case 'primary':
      return `
      background: ${PRIMARY_GRADIENT};
      color: ${COLORS.white};
    `
    case 'secondary':
      return `
        background: ${SECONDARY_GRADIENT};
        color: ${COLORS.persianIndigo};
      `
    case 'success':
      return `
      background: ${COLORS.emerald};
      color: ${COLORS.white};
    `
    case 'warning':
      return `
      background: ${COLORS.yellowOrange};
      color: ${COLORS.white};
    `
    case 'error':
      return `
      background: ${COLORS.carnation};
      color: ${COLORS.white};
    `
    default:
      return `
      background: ${COLORS.white};
      color: ${PRIMARY_GRADIENT};
    `
  }
}

function getFilledHoverStyles({ $outlined }: { $outlined?: boolean }): string {
  if ($outlined) return ''
  return `
    overflow: hidden;
    z-index: 1;

    &:after {
      background: ${COLORS.white};
      content: '';
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
    &:hover {
      &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  `
}

function getSizes({ $size }: { $size?: ButtonSize }): string {
  if ($size === 'small')
    return `
      font-size: 16px;
      line-height: 21px;
      height: 40px;
      padding: 8px 16px;
    `

  if ($size === 'large')
    return `
      font-size: 18px;
      line-height: 21px;
      height: 53px;
      padding: 16px 24px;
    `

  return `
    font-size: 16px;
    line-height: 21px;
    height: 40px;
    padding: 8px 16px;
  `
}

function getIconStyles({
  $size,
  icon,
}: {
  $size?: ButtonSize
  icon: boolean
}): string {
  if (!icon) return ''
  if ($size === 'small')
    return `
      z-index: 1;
      padding-left: 16px;
    `

  if ($size === 'large')
    return `
    z-index: 1;
    padding-left: 24px;
    `

  return `
    z-index: 1;
    padding-left: 16px;
  `
}

function getDisabledStyle({ disabled }: { disabled?: boolean }): string {
  if (!disabled) return ''
  return `
    background: ${COLORS.alabster};
    color: ${COLORS.silverChalice};
    border: 1px solid ${COLORS.mischa};
    cursor: not-allowed! important;
  `
}

const ButtonWrapper = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const ButtonContainer = styled.button<{
  $variant?: ButtonVariant
  $size?: ButtonSize
  $outlined: boolean
  icon: boolean
}>`
  cursor: pointer;
  position: relative;
  appearance: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  border: none;

  ${getSizes};

  ${getIconStyles};

  ${getOutlinedStyles};

  ${getFilledStyles};

  ${getFilledHoverStyles};

  ${getDisabledStyle};
`

type ButtonProps = {
  /**
   * Appearance variant
   */
  variant?: ButtonVariant
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
  size?: ButtonSize
  /**
   * Button outlined
   */
  outlined?: boolean
  /**
   * Button disabled
   */
  disabled?: boolean
  /**
   * Button disabled
   */
  icon?: ReactNode
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
  icon = null,
  children,
}) => {
  return (
    <ButtonWrapper>
      {!!icon && (
        <IconWrapper
          $outlined={outlined}
          $variant={variant}
          $size={size}
          key={variant}
        >
          {icon}
        </IconWrapper>
      )}
      <ButtonContainer
        $variant={variant}
        type={type}
        onClick={onClick}
        $size={size}
        $outlined={outlined}
        disabled={disabled}
        icon={!!icon}
      >
        {children}
      </ButtonContainer>
    </ButtonWrapper>
  )
}

export default Button
