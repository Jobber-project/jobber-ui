import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Text from '../Text'

import Tooltip from './Tooltip'

const Container = styled.div`
  border: 1px dashed #7b61ff;
  padding: 50px 20px;

  & > div + div {
    margin-top: 20px;
  }
`

const StyledText = styled(Text)`
  margin-top: 20px;
  width: 200px;
  text-align: center;
  border: 1px solid #7b61ff;
`

export function Default() {
  return (
    <Container>
      <Tooltip position="left" label="Left tooltip">
        <StyledText>Left</StyledText>
      </Tooltip>
      <Tooltip position="top" label="Top tooltip">
        <StyledText>Top</StyledText>
      </Tooltip>
      <Tooltip position="right" label="Right tooltip">
        <StyledText>Right</StyledText>
      </Tooltip>
      <Tooltip position="bottom" label="Bottom tooltip">
        <StyledText>Bottom</StyledText>
      </Tooltip>
    </Container>
  )
}

export function Black() {
  return (
    <Container>
      <Tooltip variant="black" position="left" label="Left tooltip">
        <StyledText>Left</StyledText>
      </Tooltip>
      <Tooltip variant="black" position="top" label="Top tooltip">
        <StyledText>Top</StyledText>
      </Tooltip>
      <Tooltip variant="black" position="right" label="Right tooltip">
        <StyledText>Right</StyledText>
      </Tooltip>
      <Tooltip variant="black" position="bottom" label="Bottom tooltip">
        <StyledText>Bottom</StyledText>
      </Tooltip>
    </Container>
  )
}

const story: ComponentMeta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  component: Tooltip,
}

export default story
