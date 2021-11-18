import React, { ChangeEventHandler, FC, ReactNode } from 'react'
import styled from 'styled-components'

import COLORS, { PRIMARY_GRADIENT } from '../shared/colors'

type RadioButtonVariant = 'default' | 'primary' | 'error'

function getWidthHeight({
  $variant,
}: {
  $variant: RadioButtonVariant
}): number {
  switch ($variant) {
    case 'primary':
      return 24

    case 'default':
    case 'error':
      return 22
  }
}

function getCheckedBackground({
  $disabled,
  $variant,
}: {
  $disabled: boolean
  $variant: RadioButtonVariant
}): string | undefined {
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

function getOutlerCircleBackground({
  $variant,
}: {
  $variant: RadioButtonVariant
}): string {
  switch ($variant) {
    case 'primary':
      return PRIMARY_GRADIENT

    case 'default':
    default:
      return COLORS.white
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

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return COLORS.black
  }
}

function getInnerCircleCheckedOffset({
  $variant,
}: {
  $variant: RadioButtonVariant
}): number {
  switch ($variant) {
    case 'primary':
      return 7

    case 'default':
    case 'error':
    default:
      return 6
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
  $disabled: boolean
  $variant: RadioButtonVariant
}>`
  z-index: 1;
  position: relative;
  width: ${getWidthHeight}px;
  height: ${getWidthHeight}px;
  border: 1px solid ${getBorderColor};
  border-radius: 50%;
  background: ${getOutlerCircleBackground};

  ${props =>
    props.$variant === 'primary' &&
    `
    border-width: 0;
    opacity: ${props.$disabled && 0.5};
  `}
`

const InnerCircle = styled.span<{
  $variant: RadioButtonVariant
}>`
  z-index: 1;
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  opacity: 0;
  border-radius: 50%;
  background-color: ${getInnerCircleBackgroundColor};
  transition: transform 120ms ease;

  ${props =>
    props.$variant === 'primary' &&
    `
      opacity: 1;
  `}
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

  ${props =>
    props.$variant === 'primary' &&
    `
      &:hover:not(:disabled):not(:checked) + span,
      &:focus:not(:disabled):not(:checked) + span {
        transform: scale(0.95);
      }
    `}

  &:checked + span {
    top: ${getInnerCircleCheckedOffset}px;
    right: ${getInnerCircleCheckedOffset}px;
    bottom: ${getInnerCircleCheckedOffset}px;
    left: ${getInnerCircleCheckedOffset}px;
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
      <OuterCircle $disabled={disabled} $variant={variant}>
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
