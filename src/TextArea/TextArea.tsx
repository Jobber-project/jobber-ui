import React, { forwardRef, HTMLProps, useEffect, useState } from 'react'
import { ForwardRefRenderFunction } from 'react'
import styled, { css, keyframes } from 'styled-components'

import COLORS from '../shared/colors'
import { usePrevious } from '../shared/hooks'

export type TextAreaVariant = 'default' | 'success' | 'warning' | 'error'

const animateHelperText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

function getVariantColor({ $variant }: { $variant: TextAreaVariant }): string {
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

function getFocusBorderColor({ $variant }: { $variant: TextAreaVariant }) {
  switch ($variant) {
    case 'default':
      return COLORS.havelockBlue

    default:
      return false
  }
}

const Container = styled.div`
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

const StyledTextArea = styled.textarea<{
  $variant: TextAreaVariant
  $resizable: boolean
}>`
  display: block;
  padding: 20px 16px;
  box-sizing: border-box;
  border: 1px solid ${getVariantColor};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  resize: ${props => (props.$resizable ? 'both' : 'none')};
  transition: border-color 140ms ease-in;

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }

  &,
  &::placeholder {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.1875em;
    font-weight: 400;
  }
`

const HelperText = styled.span<{
  $animate: boolean
  $variant: TextAreaVariant
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

type TextAreaProps = {
  required?: HTMLProps<HTMLTextAreaElement>['required']
  disabled?: HTMLProps<HTMLTextAreaElement>['disabled']
  autoFocus?: HTMLProps<HTMLTextAreaElement>['autoFocus']
  resizable?: boolean
  rows?: HTMLProps<HTMLTextAreaElement>['rows']
  className?: HTMLProps<HTMLTextAreaElement>['className']
  variant?: TextAreaVariant
  id?: HTMLProps<HTMLTextAreaElement>['id']
  name?: HTMLProps<HTMLTextAreaElement>['name']
  label?: string
  helperText?: string
  value?: HTMLProps<HTMLTextAreaElement>['value']
  placeholder?: HTMLProps<HTMLTextAreaElement>['placeholder']
  ariaLabel?: HTMLProps<HTMLTextAreaElement>['aria-label']
  onChange?: HTMLProps<HTMLTextAreaElement>['onChange']
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  {
    required,
    disabled,
    autoFocus,
    rows,
    className,
    resizable = false,
    variant = 'default',
    id,
    name,
    label,
    helperText,
    value,
    placeholder,
    ariaLabel,
    onChange,
  },
  ref,
) => {
  const prevVariant = usePrevious(variant)

  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (label) return label
    return Math.random().toString()
  }

  function handleAnimationEnd() {
    if (shouldAnimate) setShouldAnimate(false)
  }

  useEffect(() => {
    if (variant !== prevVariant && !shouldAnimate) {
      setShouldAnimate(true)
    }
  }, [variant, prevVariant, shouldAnimate])

  const derivedId = getDerivedId()

  return (
    <Container className={className}>
      {!!label && <Label htmlFor={derivedId}>{label}</Label>}
      <StyledTextArea
        $resizable={resizable}
        $variant={variant}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        rows={rows}
        ref={ref}
        id={derivedId}
        name={name}
        value={value}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      {!!helperText && (
        <HelperText
          $animate={shouldAnimate}
          $variant={variant}
          onAnimationEnd={handleAnimationEnd}
        >
          {helperText}
        </HelperText>
      )}
    </Container>
  )
}

const ForwardedTextArea = forwardRef(TextArea)

export default ForwardedTextArea
