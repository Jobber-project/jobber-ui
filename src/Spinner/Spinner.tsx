import React, { FC, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

import COLORS from '../shared/colors'

export type SpinnerSize = 'small' | 'medium' | 'large'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`

const Container = styled.span`
  z-index: 1;
  position: relative;
  display: inline-block;
`

const Circle = styled.circle`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`

const BackgroundCircle = styled(Circle)`
  opacity: 0.2;
`

const ForegroundCircle = styled(Circle)`
  transform: none;
  animation: ${animation} 1.25s infinite linear;
`

function getDerivedSize(size: SpinnerSize): number {
  switch (size) {
    case 'large':
      return 100

    case 'small':
      return 25

    case 'medium':
    default:
      return 50
  }
}

function getStrokeWidth(size: SpinnerSize): number {
  switch (size) {
    case 'large':
      return 10

    case 'small':
      return 2.5

    case 'medium':
    default:
      return 5
  }
}

type SpinnerProps = {
  size?: SpinnerSize
  color?: string
  className?: string
  children?: ReactNode
}

const Spinner: FC<SpinnerProps> = ({
  size = 'medium',
  color = COLORS.emerald,
  className,
  children,
}: SpinnerProps) => {
  const derivedSize = getDerivedSize(size)
  const strokeWidth = getStrokeWidth(size)
  const radius = derivedSize / 2 - strokeWidth
  const circumference = radius * 2 * Math.PI

  const offset = circumference - (25 / 100) * circumference

  return (
    <Container className={className}>
      <svg width={derivedSize - strokeWidth} height={derivedSize - strokeWidth}>
        <BackgroundCircle
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - 1 * circumference}
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
        <ForegroundCircle
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
      </svg>
      {children}
    </Container>
  )
}

export default Spinner
