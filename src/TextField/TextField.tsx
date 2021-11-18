import React, {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
  useRef,
  useEffect,
} from 'react'
import styled, { keyframes, css } from 'styled-components'

import COLORS from '../shared/colors'
// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'
// @ts-ignore
import WarningIcon from '../shared/icons/alert-triangle.svg'
// @ts-ignore
import ErrorIcon from '../shared/icons/circle-x.svg'
// @ts-ignore
import EmailIcon from '../shared/icons/mail.svg'
// @ts-ignore
import SearchIcon from '../shared/icons/search.svg'

export type TextFieldIconAlign = 'left' | 'right'

export type TextFieldSize = 'small' | 'medium' | 'large'

export type TextFieldVariant = 'default' | 'success' | 'warning' | 'error'

const animateIcon = keyframes`
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  100% {
    tansform: none;
    opacity: 1;
  }
`

const animateHelperText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

function getVariantColor({ $variant }: { $variant: TextFieldVariant }): string {
  switch ($variant) {
    case 'success':
      return COLORS.emerald

    case 'warning':
      return COLORS.yellowOrange

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return COLORS.mischa
  }
}

function getIconColor({ $variant }: { $variant: TextFieldVariant }): string {
  switch ($variant) {
    case 'success':
      return COLORS.emerald

    case 'warning':
      return COLORS.yellowOrange

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return COLORS.black
  }
}

function getIconSize({ $size }: { $size: TextFieldSize }): number {
  switch ($size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 20
  }
}

function getIconRight({
  $size,
  $iconAlign,
}: {
  $size: TextFieldSize
  $iconAlign: TextFieldIconAlign
}): number {
  switch ($iconAlign) {
    case 'right': {
      switch ($size) {
        case 'large':
          return 24

        case 'medium':
        default:
          return 16
      }
    }

    case 'left':
    default:
      return 0
  }
}

function getIconLeft({
  $size,
  $iconAlign,
}: {
  $size: TextFieldSize
  $iconAlign: TextFieldIconAlign
}): number {
  switch ($iconAlign) {
    case 'right':
      return 0

    case 'left':
    default:
      switch ($size) {
        case 'large':
          return 24

        case 'medium':
        default:
          return 16
      }
  }
}

function getPadding({ $size }: { $size: TextFieldSize }): string {
  switch ($size) {
    case 'large':
      return '16px 24px'

    case 'medium':
    default:
      return '8px 16px'
  }
}

function getPaddingRight({
  $size,
  $iconAlign,
}: {
  $size: TextFieldSize
  $iconAlign: TextFieldIconAlign
}): number {
  switch ($iconAlign) {
    case 'right':
      return getIconSize({ $size }) + getIconRight({ $size, $iconAlign }) * 1.5

    case 'left':
    default:
      switch ($size) {
        case 'large':
          return 24

        case 'medium':
        default:
          return 16
      }
  }
}

function getPaddingLeft({
  $size,
  $iconAlign,
}: {
  $size: TextFieldSize
  $iconAlign: TextFieldIconAlign
}): number {
  switch ($iconAlign) {
    case 'right':
      switch ($size) {
        case 'large':
          return 24

        case 'medium':
        default:
          return 16
      }

    case 'left':
    default:
      return getIconSize({ $size }) + getIconLeft({ $size, $iconAlign }) * 1.5
  }
}

function getInputHeight({ $size }: { $size: TextFieldSize }): number {
  switch ($size) {
    case 'large':
      return 53

    case 'medium':
    default:
      return 40
  }
}

function getInputFontSize({ $size }: { $size: TextFieldSize }): number {
  switch ($size) {
    case 'large':
      return 18

    case 'medium':
    default:
      return 16
  }
}

function getInputLineHeight({ $size }: { $size: TextFieldSize }): number {
  switch ($size) {
    case 'large':
      return 1.1667 // 21px

    case 'medium':
    default:
      return 1.1875 // 19px
  }
}

function getFocusBorderColor({ $variant }: { $variant: TextFieldVariant }) {
  switch ($variant) {
    case 'default':
      return COLORS.havelockBlue

    default:
      return false
  }
}

const Container = styled.div<{
  $disabled?: boolean
  $variant?: TextFieldVariant
  $size?: TextFieldSize
}>`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
`

const InputWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Input = styled.input<{
  $icon: boolean
  $variant: TextFieldVariant
  $size: TextFieldSize
  $iconAlign: TextFieldIconAlign
}>`
  display: flex;
  align-items: center;
  height: ${getInputHeight}px;
  margin: 0;
  padding: ${getPadding};
  box-sizing: border-box;
  border: 1px solid ${getVariantColor};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  transition: border-color 140ms ease-in;

  ${props =>
    props.$icon &&
    `
      padding-right: ${getPaddingRight(props)}px;
      padding-left: ${getPaddingLeft(props)}px;
    `}

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  ${props =>
    props.$variant === 'default' &&
    `
    &:placeholder-shown + div {
      color: ${COLORS.mischa};
    }
  `}

  &,
  &::placeholder {
    font-size: ${getInputFontSize}px;
    line-height: ${getInputLineHeight}em;
    font-weight: 400;
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }

  &::-webkit-search-decoration {
    display: none;
  }
`

const IconWrapper = styled.div<{
  $animate: boolean
  $variant: TextFieldVariant
  $size: TextFieldSize
  $iconAlign: TextFieldIconAlign
}>`
  z-index: 1;
  position: absolute;
  top: 0;
  right: ${props => {
    const right = getIconRight(props)
    return right ? `${right}px` : 'auto'
  }};
  bottom: 0;
  left: ${props => {
    const left = getIconLeft(props)
    return left ? `${left}px` : 'auto'
  }};
  display: flex;
  align-items: center;
  color: ${getIconColor};
  transition: color 280ms ease;

  ${props =>
    props.$animate &&
    css`
      animation: ${animateIcon} 280ms ease;
    `}

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
`

const HelperText = styled.span<{
  $animate: boolean
  $variant: TextFieldVariant
}>`
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor};
  transition: color 280ms ease;

  ${props =>
    props.$animate &&
    css`
      animation: ${animateHelperText} 280ms ease;
    `}
`

type TextFieldProps = {
  required?: boolean
  disabled?: boolean
  variant?: TextFieldVariant
  id?: string
  name?: string
  type?: HTMLInputTypeAttribute
  className?: string
  /** Text field size */
  size?: TextFieldSize
  /** Label to show above text field */
  label?: string
  /** Text input value */
  value?: string | number
  /** Placeholder text */
  placeholder?: string
  /** Helper text to show below text input, ie validation message */
  helperText?: string
  /** Which side the icon should be rendered on */
  iconAlign?: TextFieldIconAlign
  /** Icon to render ie `<Icon />` */
  icon?: ReactNode
  /** Text input onChange event callback */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField: FC<TextFieldProps> = ({
  required,
  disabled,
  variant = 'default',
  id,
  name,
  type = 'text',
  className,
  size = 'medium',
  label,
  value,
  placeholder,
  helperText,
  iconAlign,
  icon,
  onChange,
}) => {
  const didMountRef = useRef<boolean>(false)

  useEffect(() => {
    didMountRef.current = true
  }, [])

  function getDerivedIcon(): ReactNode {
    switch (variant) {
      case 'success':
        return <SuccessIcon viewBox="0 0 24 24" />

      case 'warning':
        return <WarningIcon viewBox="0 0 24 24" />

      case 'error':
        return <ErrorIcon viewBox="0 0 24 24" />

      case 'default':
      default: {
        if (icon) return icon
        if (type === 'email') return <EmailIcon viewBox="0 0 24 24" />
        if (type === 'search') return <SearchIcon viewBox="0 0 24 24" />
        return undefined
      }
    }
  }

  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (label) return label
    return Math.random().toString()
  }

  function getDerivedIconAlign(): TextFieldIconAlign {
    if (type === 'email') return 'right'
    return variant === 'default' ? iconAlign : 'right'
  }

  const derivedId = getDerivedId()
  const derivedIcon = getDerivedIcon()
  const derivedIconAlign = getDerivedIconAlign()

  return (
    <Container
      $variant={variant}
      $disabled={disabled}
      $size={size}
      className={className}
    >
      {!!label && <Label htmlFor={derivedId}>{label}</Label>}
      <InputWrapper>
        <Input
          $icon={!!derivedIcon}
          $variant={variant}
          $size={size}
          $iconAlign={derivedIconAlign}
          required={required}
          disabled={disabled}
          type={type}
          id={derivedId}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {!!derivedIcon && (
          <IconWrapper
            $animate={didMountRef.current}
            $variant={variant}
            $size={size}
            $iconAlign={derivedIconAlign}
            key={variant}
          >
            {derivedIcon}
          </IconWrapper>
        )}
      </InputWrapper>
      {!!helperText && (
        <HelperText $animate={didMountRef.current} $variant={variant}>
          {helperText}
        </HelperText>
      )}
    </Container>
  )
}

export default TextField
