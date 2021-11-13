import React, { ChangeEventHandler, FC, ReactNode } from 'react'
import styled from 'styled-components'

import COLORS, { PRIMARY_GRADIENT } from '../shared/colors'

type RadioButtonVariant = 'default' | 'primary' | 'error'

function getBackground({ $disabled }: { $disabled: boolean }): string {
  return $disabled ? COLORS.alabster : COLORS.white
}

function getCheckedBackground({
  $disabled,
  $variant,
}: {
  $disabled: boolean
  $variant: RadioButtonVariant
}) {
  switch ($variant) {
    case 'primary':
      return $disabled ? PRIMARY_GRADIENT : undefined

    case 'default':
    default:
      return undefined
  }
}

function getBorderColor({
  $variant,
}: {
  $variant: RadioButtonVariant
}): string {
  switch ($variant) {
    case 'error':
      return COLORS.carnation

    case 'primary':
    case 'default':
    default:
      return COLORS.mischa
  }
}

function getInnerCircleBackgroundColor({
  $variant,
}: {
  $variant: RadioButtonVariant
}): string {
  switch ($variant) {
    case 'primary':
      return COLORS.white

    case 'default':
    default:
      return COLORS.black
  }
}

function getLabelColor({
  $disabled,
  $variant,
}: {
  $disabled: boolean
  $variant: RadioButtonVariant
}): string {
  switch ($variant) {
    case 'error':
      return COLORS.carnation

    case 'primary':
    case 'default':
    default:
      return $disabled ? COLORS.silverChalice : COLORS.black
  }
}

const Container = styled.label<{
  $disabled: boolean
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
`

const OuterCircle = styled.span<{
  $variant: RadioButtonVariant
}>`
  z-index: 1;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid ${getBorderColor};
  border-radius: 50%;
`

const InnerCircle = styled.span<{
  $variant: RadioButtonVariant
}>`
  z-index: 1;
  position: absolute;
  top: 7px;
  right: 7px;
  bottom: 7px;
  left: 7px;
  opacity: 0;
  border-radius: 50%;
  background-color: ${getInnerCircleBackgroundColor};
`

const Input = styled.input<{
  $disabled: boolean
  $variant: RadioButtonVariant
}>`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  appearance: none;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  &:checked {
    background: ${getCheckedBackground};
  }

  &:checked + span {
    opacity: 1;
  }
`

const Text = styled.span<{
  $disabled: boolean
  $variant: RadioButtonVariant
}>`
  display: block;
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor};
`

type RadioButtonProps = {
  required?: boolean
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  variant?: RadioButtonVariant
  id?: string
  name?: string
  className?: string
  /** Radio button label text */
  label?: string | ReactNode
  /** Radio button onChange event callback */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const RadioButton: FC<RadioButtonProps> = ({
  required,
  disabled = false,
  defaultChecked,
  checked,
  variant = 'default',
  id,
  name,
  label,
  className,
  onChange,
}) => {
  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (typeof label === 'string') return label
    return Math.random().toString()
  }

  const derivedId = getDerivedId()

  return (
    <Container
      $disabled={disabled}
      className={className}
      as={label ? undefined : 'span'}
      {...(label ? { htmlFor: derivedId } : {})}
    >
      <OuterCircle $variant={variant}>
        <Input
          $disabled={disabled}
          $variant={variant}
          required={required}
          disabled={disabled}
          defaultChecked={defaultChecked}
          checked={checked}
          type="radio"
          id={derivedId}
          name={name}
          onChange={onChange}
        />
        <InnerCircle $variant={variant} />
      </OuterCircle>
      {!!label && (
        <Text $disabled={disabled} $variant={variant}>
          {label}
        </Text>
      )}
    </Container>
  )
}

export default RadioButton
