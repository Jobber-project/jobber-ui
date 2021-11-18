import React, { ChangeEventHandler, FC, ReactNode } from 'react'
import styled from 'styled-components'

import COLORS, { PRIMARY_GRADIENT } from '../shared/colors'

export type CheckboxVariant = 'default' | 'primary' | 'error'

function getBackground({ $disabled }: { $disabled: boolean }): string {
  return $disabled ? COLORS.alabster : COLORS.white
}

function getStroke({
  $disabled,
  $variant,
}: {
  $disabled: boolean
  $variant: CheckboxVariant
}): string {
  switch ($variant) {
    case 'primary':
      return COLORS.white

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return $disabled ? COLORS.silverChalice : COLORS.black
  }
}

function getCheckedBackground({
  $disabled,
  $variant,
}: {
  $disabled: boolean
  $variant: CheckboxVariant
}) {
  switch ($variant) {
    case 'primary':
      return $disabled ? PRIMARY_GRADIENT : undefined

    case 'default':
    default:
      return undefined
  }
}

function getBorderColor({ $variant }: { $variant: CheckboxVariant }) {
  switch ($variant) {
    case 'error':
      return COLORS.carnation

    case 'primary':
    case 'default':
    default:
      return COLORS.mischa
  }
}

function getLabelColor({
  $disabled,
  $variant,
}: {
  $disabled: boolean
  $variant: CheckboxVariant
}) {
  switch ($variant) {
    case 'error':
      return COLORS.carnation

    case 'primary':
    case 'default':
    default:
      return $disabled ? COLORS.silverChalice : COLORS.black
  }
}

function getFocusedBorderColor({ $variant }: { $variant: CheckboxVariant }) {
  switch ($variant) {
    case 'default':
    case 'primary':
      return COLORS.havelockBlue

    default:
      return false
  }
}

const Container = styled.label<{
  $disabled: boolean
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
`

const Square = styled.span`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`

const Input = styled.input<{
  $disabled: boolean
  $variant: CheckboxVariant
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

  ${props =>
    props.$variant === 'default' &&
    `
    &:hover:not(:disabled) + span {
      border-color: ${getFocusedBorderColor(props)};  
    }
  `}

  &:focus + span {
    border-color: ${getFocusedBorderColor};
  }

  &:checked + span {
    background: ${getCheckedBackground};

    ${props =>
      props.$variant === 'primary' &&
      props.$disabled &&
      `
      border-width: 0;
      opacity: 0.5;
    `}
  }

  ${props =>
    props.$variant === 'primary' &&
    `
      &:hover + span::before,
      &:focus + span::before {
        transform: scale(0.95);
      }
    `}

  &:checked + span::before {
    visibility: hidden;
  }

  &:checked ~ svg {
    opacity: 1;
    transform: none;
  }
`

const Svg = styled.svg`
  z-index: 1;
  position: relative;
  opacity: 0;
  transform: scale(0.5);
  transition: transform 120ms ease;
  pointer-events: none;
`

const Checkmark = styled.path<{
  $disabled: boolean
  $variant: CheckboxVariant
}>`
  stroke: ${getStroke};
`

const SquareBorder = styled.span<{
  $disabled: boolean
  $variant: CheckboxVariant
}>`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${getBorderColor};
  border-radius: 4px;
  background: ${getBackground};

  ${props =>
    props.$variant === 'primary' &&
    !props.$disabled &&
    `
    border-width: 0;
    background: ${PRIMARY_GRADIENT};
  `}

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 3px;
    background: ${getBackground};
    transition: transform 120ms ease-out;
  }
`

const Text = styled.span<{
  $disabled: boolean
  $variant: CheckboxVariant
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

type CheckboxProps = {
  required?: boolean
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  id?: string
  name?: string
  className?: string
  variant?: CheckboxVariant
  /** Checkbox label text */
  label?: string | ReactNode
  /** Checkbox onChange event callback */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Checkbox: FC<CheckboxProps> = ({
  required,
  disabled = false,
  defaultChecked,
  checked,
  variant = 'default',
  id,
  name,
  className,
  label,
  onChange,
}: CheckboxProps) => {
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
      <Square>
        <Input
          $disabled={disabled}
          $variant={variant}
          required={required}
          disabled={disabled}
          defaultChecked={defaultChecked}
          checked={checked}
          type="checkbox"
          id={derivedId}
          name={name}
          onChange={onChange}
        />
        <SquareBorder $disabled={disabled} $variant={variant} />
        <Svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Checkmark
            $disabled={disabled}
            $variant={variant}
            d="M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Square>
      {!!label && (
        <Text $disabled={disabled} $variant={variant}>
          {label}
        </Text>
      )}
    </Container>
  )
}

export default Checkbox
