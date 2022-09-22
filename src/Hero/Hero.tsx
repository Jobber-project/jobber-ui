import React, { ReactNode } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

const Container = styled.div`
  z-index: -1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  max-height: 453px;
  min-height: 250px;
  background-color: ${COLORS.white};
  background-image: url('/static/images/hero-bg.jpg');
  background-size: cover;
  color: ${COLORS.charade};
  text-align: center;
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.h2`
  flex-shrink: 0;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 1.4em;
  max-width: 440px;
`

const Title = styled.h1`
  flex-shrink: 0;
  font-size: 64px;
  line-height: 0.828125em;
  font-weight: 700;

  & + ${Subtitle} {
    padding-top: 32px;
  }
`

interface HeroProps {
  className?: string
  title?: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}

function Hero({ className, title, subtitle, children }: HeroProps) {
  return (
    <Container className={className}>
      {(!!title || !!subtitle) && (
        <Header>
          {!!title && <Title>{title}</Title>}
          {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
      )}
      {children}
    </Container>
  )
}

export default Hero
