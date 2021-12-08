import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

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

function getBackgroundColor({
  $variant,
}: {
  $variant?: ButtonVariant
}): string {
  switch ($variant) {
    case 'primary':
      return PRIMARY_GRADIENT
    case 'secondary':
      return SECONDARY_GRADIENT
    case 'success':
      return COLORS.emerald
    case 'warning':
      return COLORS.yellowOrange
    case 'error':
      return COLORS.carnation
    default:
      return COLORS.white
  }
}

function getTextColor({
  $variant,
  $outlined,
}: {
  $variant?: ButtonVariant
  $outlined: boolean
}): string {
  switch ($variant) {
    case 'secondary':
      return $outlined ? COLORS.supernova : COLORS.persianIndigo
    case 'primary':
      return $outlined ? COLORS.electricViolet : COLORS.white
    case 'success':
      return $outlined ? COLORS.emerald : COLORS.white
    case 'warning':
      return $outlined ? COLORS.yellowOrange : COLORS.white
    case 'error':
      return $outlined ? COLORS.carnation : COLORS.white
    default:
      return COLORS.black
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
      return $outlined ? COLORS.electricViolet : COLORS.white

    case 'default':
    default:
      return COLORS.mischa
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
  pointer-events: none;

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
`
const ChildrenWrapper = styled.div<{
  $variant: ButtonVariant
  $size: ButtonSize
  $outlined: boolean
}>`
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${getTextColor};
`

function getOutlinedStyles({
  $outlined,
}: {
  $outlined?: boolean
  $variant?: ButtonVariant
}): string {
  return (
    $outlined &&
    `
    display: inline-block;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      border-radius: 7px;
      
      background: white;
      pointer-events: none;
    }
    &:hover {
      &::before {
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        border-radius: 6px;
      }
    }
    `
  )
}

function getFilledHoverStyles({ $outlined }: { $outlined?: boolean }): string {
  return (
    !$outlined &&
    `
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
  )
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

function getBorderStyle({
  $outlined,
  $variant,
}: {
  $outlined: boolean
  $variant?: ButtonVariant
}): string {
  switch ($variant) {
    case 'default':
      return $outlined
        ? `
        border: 1px solid ${COLORS.mischa};
      `
        : ''
    default:
      return ''
  }
}

const ButtonWrapper = styled.div`
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

  background: ${getBackgroundColor};

  color: ${getTextColor};

  ${getSizes};

  ${getIconStyles};

  ${getOutlinedStyles};

  ${getFilledHoverStyles};

  ${getBorderStyle};

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
        <ChildrenWrapper
          $outlined={outlined}
          $variant={variant}
          $size={size}
          key={variant}
        >
          {children}
        </ChildrenWrapper>
      </ButtonContainer>
    </ButtonWrapper>
  )
}

export default Button
