import Tippy from '@tippyjs/react'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

import 'tippy.js/dist/tippy.css'

import COLORS from '../shared/colors'

const StyledTippy = styled(Tippy)<{ variant: 'black' | 'default' }>`
  background: ${props =>
    props?.variant !== 'default' ? COLORS.black : COLORS.havelockBlue};
  font-size: 12px;
  font-family: Roboto, sans-serif;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;

  .tippy-arrow {
    color: ${props =>
      props?.variant !== 'default' ? COLORS.black : COLORS.havelockBlue};
  }

  .tippy-content {
    padding: 0;
    background-color: ${props =>
      props?.variant !== 'default' ? COLORS.black : COLORS.havelockBlue};
  }
`

type TooltipProps = {
  hidden?: boolean
  label?: string
  variant?: 'black' | 'default'
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  children: ReactElement
}

export default function Tooltip({
  label = '',
  position = 'top',
  variant = 'default',
  className,
  children,
}: TooltipProps) {
  return (
    <StyledTippy
      variant={variant}
      className={className}
      content={label}
      placement={position}
    >
      {children}
    </StyledTippy>
  )
}
