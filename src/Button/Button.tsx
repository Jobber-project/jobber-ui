import React, { ElementType, FC, ReactNode } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'
import Spinner from '../Spinner/Spinner'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'coach'

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
  className?: string
  /**
   * Button outlined
   */
  outlined?: boolean
  /**
   * Button disabled
   */
  disabled?: boolean
  /**
   * Button icon
   */
  icon?: ReactNode
  /**
   * Button content
   */
  children?: ReactNode
  /**
   * Button flex state
   */
  fluid?: boolean
  /** Whether or not button should show spinner and disable clicks */
  loading?: boolean
  /** Override spinner color to use instead of text color */
  spinnerColor?: string
  /** URL when used as link */
  href?: string
  as?: 'a'
}

function getIconSize({ $size }: { $size: ButtonSize }) {
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
      return COLORS.primaryGradient
    case 'secondary':
      return COLORS.secondaryGradient
    case 'success':
      return COLORS.emerald
    case 'warning':
      return COLORS.yellowOrange
    case 'error':
      return COLORS.carnation
    case 'coach':
      return COLORS.royalBlue
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
      return $outlined ? COLORS.sunshade : COLORS.persianIndigo
    case 'primary':
      return $outlined ? COLORS.electricViolet : COLORS.white
    case 'success':
      return $outlined ? COLORS.emerald : COLORS.white
    case 'warning':
      return $outlined ? COLORS.yellowOrange : COLORS.white
    case 'error':
      return $outlined ? COLORS.carnation : COLORS.white
    case 'coach':
      return $outlined ? COLORS.royalBlue : COLORS.white
    case 'default':
    default:
      return COLORS.charade
  }
}

function getSpinnerColor({
  $variant,
  $outlined,
  $spinnerColor,
}: {
  $variant?: ButtonVariant
  $outlined: boolean
  $spinnerColor?: string
}): string {
  return $spinnerColor ?? getTextColor({ $variant, $outlined })
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

    case 'coach':
      return $outlined ? COLORS.royalBlue : COLORS.white

    case 'default':
    default:
      return COLORS.mischa
  }
}

function getIconLeftPosition({ $size }: { $size: ButtonSize }): number {
  switch ($size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 20
  }
}

function getIconFluidStyling({
  $size,
  fluid,
}: {
  $size: ButtonSize
  fluid: boolean
}): string {
  if (!fluid) return `padding-right: 8px;`
  return `
    position: absolute;
    left: ${getIconLeftPosition({ $size })}px;
  `
}

const IconWrapper = styled.div<{
  $variant: ButtonVariant
  $size: ButtonSize
  $outlined: boolean
  fluid: boolean
}>`
  line-height: 0;
  z-index: 2;
  pointer-events: none;

  ${getIconFluidStyling}
  color: ${getIconColor};

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
`

const InnerWrapper = styled.span`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const ChildrenWrapper = styled.div<{
  $variant: ButtonVariant
  $size: ButtonSize
  $outlined: boolean
  $loading: boolean
}>`
  z-index: 2;
  color: ${getTextColor};
  ${props => props.$loading && 'opacity: 0;'}
`

const StyledSpinner = styled(Spinner).attrs<{
  $variant: ButtonVariant
  $outlined: boolean
  $spinnerColor?: string
}>(props => ({
  color: getSpinnerColor(props),
}))<{
  $variant: ButtonVariant
  $outlined: boolean
  $spinnerColor?: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function getOutlinedStyles({ $outlined }: { $outlined?: boolean }): string {
  return (
    $outlined &&
    `
    display: flex;
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

function getFilledHoverStyles({
  $variant,
  $outlined,
  $loading,
}: {
  $variant?: ButtonVariant
  $outlined?: boolean
  $loading: boolean
}): string {
  if ($outlined || $loading) return ''
  if ($variant === 'coach')
    return `
      &:hover {
        background-color: ${COLORS.havelockBlue};
      }
    `
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

function getDisabledStyle({
  disabled,
  $loading,
}: {
  disabled?: boolean
  $loading: boolean
}): string {
  if ($loading) {
    return `
      cursor: not-allowed! important;
    `
  }

  return disabled
    ? `
    background: ${COLORS.alabster};
    color: ${COLORS.silverChalice};
    border: 1px solid ${COLORS.mischa};
    cursor: not-allowed! important;
  `
    : ''
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

const ButtonContainer = styled.button<{
  $variant?: ButtonVariant
  $size?: ButtonSize
  $outlined: boolean
  icon: boolean
  fluid: boolean
  $loading: boolean
}>`
  cursor: pointer;
  position: relative;
  display: flex;

  ${props => props.fluid && 'width: 100%'};
  align-items: center;
  justify-content: center;
  appearance: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  border: none;
  box-sizing: border-box;
  text-decoration: none;

  background: ${getBackgroundColor};

  color: ${getTextColor};

  ${getSizes}

  ${getIconStyles};

  ${getOutlinedStyles};

  ${getFilledHoverStyles};

  ${getBorderStyle};

  ${getDisabledStyle};
`

const Button: FC<ButtonProps> = ({
  variant = 'default',
  type = 'button',
  onClick,
  size = 'medium',
  className,
  outlined = false,
  disabled = false,
  fluid = false,
  loading = false,
  icon = null,
  spinnerColor,
  href,
  as,
  children,
}) => {
  const derivedDisabled = disabled || loading

  // Styled-components TS as prop workaround
  const Component = ButtonContainer as unknown as ElementType

  return (
    <div>
      <Component
        className={className}
        $variant={variant}
        type={as === 'a' ? undefined : type}
        onClick={onClick}
        $size={size}
        $outlined={outlined}
        disabled={disabled}
        icon={!!icon}
        fluid={fluid}
        $loading={loading}
        href={href}
        as={as}
      >
        {!!icon && (
          <IconWrapper
            $outlined={outlined}
            $variant={variant}
            $size={size}
            key={variant}
            fluid={fluid}
          >
            {icon}
          </IconWrapper>
        )}
        <ChildrenWrapper
          $outlined={outlined}
          $variant={variant}
          $size={size}
          key={variant}
          $loading={loading}
        >
          {children}
        </ChildrenWrapper>
        {loading && (
          <InnerWrapper>
            <StyledSpinner
              $variant={variant}
              $outlined={outlined}
              $spinnerColor={spinnerColor}
              size="small"
            />
          </InnerWrapper>
        )}
      </Component>
    </div>
  )
}

export default Button
