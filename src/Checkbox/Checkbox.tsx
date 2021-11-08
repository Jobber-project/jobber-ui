import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

export type CheckboxVariant = 'default' | 'primary'

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

const Input = styled.input`
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

  &:focus ~ span:last-child {
    border-color: ${COLORS.havelockBlue};
  }

  &:checked + svg {
    opacity: 1;
    transform: none;
  }
`

const Svg = styled.svg`
  opacity: 0;
  transform: scale(0.5);
  transition: transform 120ms ease;
`

const SquareBorder = styled.span`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${COLORS.mischa};
  border-radius: 4px;
`

const Text = styled.span`
  display: block;
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
`

type CheckboxProps = {
  disabled?: boolean
  id?: string
  name?: string
  className?: string
  variant?: CheckboxVariant
  /** Checkbox label text */
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({
  variant = 'default',
  disabled = false,
  id,
  name,
  className,
  label,
}: CheckboxProps) => {
  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (label) return label
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
        <Input type="checkbox" id={derivedId} name={name} />
        <Svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663"
            stroke="#2B2A35"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <SquareBorder />
      </Square>
      {!!label && <Text>{label}</Text>}
    </Container>
  )
}

export default Checkbox
