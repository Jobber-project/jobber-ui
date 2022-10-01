import React, { ReactNode } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

type LabelVariant = 'default' | 'success' | 'warning' | 'error'

function getVariantColor({ $variant }: { $variant: LabelVariant }) {
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

const Container = styled.label<{
  $variant: LabelVariant
}>`
  display: block;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.667em;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  color: ${getVariantColor};
`

interface LabelProps {
  className?: string
  variant?: LabelVariant
  as?: keyof HTMLElementTagNameMap
  htmlFor?: string
  children?: ReactNode
}

function Label({
  className,
  variant = 'default',
  as,
  htmlFor,
  children,
}: LabelProps) {
  return (
    <Container
      $variant={variant}
      as={as as any}
      htmlFor={as ? undefined : htmlFor}
      className={className}
    >
      {children}
    </Container>
  )
}

export type { LabelProps }

export default Label
