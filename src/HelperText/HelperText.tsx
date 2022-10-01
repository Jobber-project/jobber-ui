import React, { ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components'

import COLORS from '../shared/colors'
import useVariantAnimation from '../shared/useVariantAnimation'

type HelperTextVariant = 'default' | 'success' | 'warning' | 'error'

const animateHelperText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.span<{
  $animate: boolean
  $variant: HelperTextVariant
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

function getVariantColor({ $variant }: { $variant: HelperTextVariant }) {
  switch ($variant) {
    case 'success':
      return COLORS.emerald

    case 'warning':
      return COLORS.yellowOrange

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return COLORS.charade
  }
}

interface HelperTextProps {
  className?: string
  variant?: HelperTextVariant
  children?: ReactNode
}

function HelperText({
  className,
  variant = 'default',
  children,
}: HelperTextProps) {
  const { ref, shouldAnimate } = useVariantAnimation(variant)

  return (
    <Container
      ref={ref}
      $animate={shouldAnimate}
      $variant={variant}
      className={className}
    >
      {children}
    </Container>
  )
}

export type { HelperTextProps, HelperTextVariant }

export default HelperText
