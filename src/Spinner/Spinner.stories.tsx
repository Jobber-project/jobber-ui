import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

import Spinner from '.'

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;

  & > span {
    margin: 10px;
  }
`

export function Intro(props) {
  return (
    <Container>
      <Spinner {...props} size="small" />
      <Spinner {...props} size="medium" />
      <Spinner {...props} size="large" />
    </Container>
  )
}

export function Green(props) {
  return (
    <Container>
      <Spinner {...props} size="small" />
      <Spinner {...props} size="medium" />
      <Spinner {...props} size="large" />
    </Container>
  )
}

export function Purple() {
  return (
    <Container>
      <Spinner size="small" color={COLORS.electricViolet} />
      <Spinner size="medium" color={COLORS.electricViolet} />
      <Spinner size="large" color={COLORS.electricViolet} />
    </Container>
  )
}

export function Blue() {
  return (
    <Container>
      <Spinner size="small" color={COLORS.royalBlue} />
      <Spinner size="medium" color={COLORS.royalBlue} />
      <Spinner size="large" color={COLORS.royalBlue} />
    </Container>
  )
}

const story: ComponentMeta<typeof Spinner> = {
  title: 'Design System/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    color: {
      defaultValue: COLORS.emerald,
    },
  },
}

export default story
