import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Slider from './Slider'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 333px;
  width: 333px;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;

  & > div + div {
    margin-top: 20px;
  }
`

export function Default() {
  return (
    <Container>
      <Slider
        onChange={number => console.log('number', number)}
        min={0}
        max={2.0}
        step={0.01}
      />
    </Container>
  )
}

export function Disabled() {
  return (
    <Container>
      <Slider disabled />
    </Container>
  )
}

const story: ComponentMeta<typeof Slider> = {
  title: 'Design System/Slider',
  component: Slider,
}

export default story
