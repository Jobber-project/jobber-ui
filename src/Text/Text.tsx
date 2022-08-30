import React from 'react'
import { ReactNode, forwardRef, ElementType } from 'react'
import styled from 'styled-components'

enum WEIGHT_NAME {
  thin = 'thin',
  light = 'light',
  normal = 'normal',
  medium = 'medium',
  bold = 'bold',
}

enum WEIGHT {
  thin = 100,
  light = 300,
  normal = 400,
  medium = 500,
  bold = 700,
}

enum SIZE_NAME {
  atomic = 'atomic',
  micro = 'micro',
  tiny = 'tiny',
  small = 'small',
  reduced = 'reduced',
  regular = 'regular',
  increased = 'increased',
  large = 'large',
  huge = 'huge',
  giant = 'giant',
}

enum FONT_SIZE {
  atomic = '0.8rem',
  micro = '1rem',
  tiny = '1.2rem',
  small = '1.4rem',
  reduced = '1.5rem',
  regular = '1.6rem',
  increased = '1.8rem',
  large = '2rem',
  huge = '2.6rem',
  giant = '3.2rem',
}

const StyledText = styled.p<{
  $margin: boolean
  $wrap: boolean
  $size: string
  $weight: string
  $color: string
  $align?: string
}>`
  margin: ${props => (props.$margin ? '0.5em 0 0.5em' : '0')};
  font-size: ${props => FONT_SIZE[props.$size]};
  font-weight: ${props => WEIGHT[props.$weight]};
  line-height: 1.4em;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.$color};
  ${props => (props.$align ? `text-align: ${props.$align};` : '')}
  ${props =>
    props.$wrap
      ? `
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
  `
      : ''}

  ${props =>
    props.$margin
      ? `
    &:first-child {
      margin-top: 0;
    }
  `
      : ''}
`

export type TextProps = {
  margin?: boolean
  wrap?: boolean
  as?: ElementType | keyof JSX.IntrinsicElements
  className?: string
  size?:
    | 'atomic'
    | 'micro'
    | 'tiny'
    | 'small'
    | 'reduced'
    | 'regular'
    | 'increased'
    | 'large'
    | 'huge'
    | 'giant'
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'bold'
  color?: string
  align?: string
  children?: ReactNode
}

// eslint-disable-next-line react/display-name
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      margin = false,
      wrap = false,
      as,
      className,
      size = SIZE_NAME.regular,
      weight = WEIGHT_NAME.normal,
      color,
      align,
      children,
    }: TextProps,
    ref,
  ) => {
    return (
      <StyledText
        ref={ref}
        $margin={margin}
        $wrap={wrap}
        as={as}
        className={className}
        $size={size}
        $weight={weight}
        $color={color}
        $align={align}
      >
        {children}
      </StyledText>
    )
  },
)

export default Text
