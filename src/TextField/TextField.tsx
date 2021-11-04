import React, {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
} from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'
// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'
// @ts-ignore
import WarningIcon from '../shared/icons/alert-triangle.svg'
// @ts-ignore
import ErrorIcon from '../shared/icons/circle-x.svg'

type TextFieldIconAlign = 'left' | 'right'

type TextFieldSize = 'small' | 'medium' | 'large'

type TextFieldVariant = 'default' | 'success' | 'warning' | 'error'

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
  display: block;
  margin: 0;
  padding: 10px 16px;
  box-sizing: border-box;
  border: 1px solid ${getVariantColor};
  border-radius: 8px;

  ${props =>
    props.$icon &&
    `
      padding-right: ${getPaddingRight(props)}px;
      padding-left: ${getPaddingLeft(props)}px;
    `}

  &:focus {
    outline: none;
    border-color: ${COLORS.havelockBlue};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  &,
  &::placeholder {
    font-size: 16px;
    line-height: 1.171875em;
    font-weight: 400;
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }
`

const IconWrapper = styled.div<{
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
  color: ${getVariantColor};

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
`

const HelperText = styled.span<{
  $variant: TextFieldVariant
}>`
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor};
`

type TextFieldProps = {
  required?: boolean
  disabled?: boolean
  variant?: TextFieldVariant
  id?: string
  name?: string
  type?: HTMLInputTypeAttribute
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
  size = 'medium',
  label,
  value,
  placeholder,
  helperText,
  iconAlign,
  icon,
  onChange,
}) => {
  function getDerivedIcon(): ReactNode {
    switch (variant) {
      case 'success':
        return <SuccessIcon viewBox="0 0 24 24" />

      case 'warning':
        return <WarningIcon viewBox="0 0 24 24" />

      case 'error':
        return <ErrorIcon viewBox="0 0 24 24" />

      case 'default':
      default:
        return icon
    }
  }

  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (label) return label
    return Math.random().toString()
  }

  function getDerivedIconAlign(): TextFieldIconAlign {
    return variant === 'default' ? iconAlign : 'right'
  }

  const derivedId = getDerivedId()
  const derivedIcon = getDerivedIcon()
  const derivedIconAlign = getDerivedIconAlign()

  return (
    <Container $variant={variant} $disabled={disabled} $size={size}>
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
            $variant={variant}
            $size={size}
            $iconAlign={derivedIconAlign}
          >
            {derivedIcon}
          </IconWrapper>
        )}
      </InputWrapper>
      {!!helperText && <HelperText $variant={variant}>{helperText}</HelperText>}
    </Container>
  )
}

export default TextField