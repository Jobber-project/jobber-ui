import { ComponentMeta } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import TextArea from './TextArea'

const Container = styled.div`
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function Intro(props) {
  return (
    <Container>
      <TextArea {...props} />
    </Container>
  )
}

export function Default() {
  return (
    <Container>
      <TextArea label="Default" placeholder="Default" />
    </Container>
  )
}

export function Disabled() {
  return (
    <Container>
      <TextArea disabled label="Disabled" placeholder="Disabled" />
    </Container>
  )
}

export function Error() {
  return (
    <Container>
      <TextArea variant="error" label="Error" placeholder="Error" />
    </Container>
  )
}

export function Question() {
  return (
    <Container>
      <TextArea
        question="This is my exceptional Question!"
        label="Question"
        placeholder="Question"
      />
    </Container>
  )
}

const story: ComponentMeta<typeof TextArea> = {
  title: 'Design System/TextArea',
  component: TextArea,
  argTypes: {
    onChange: { action: 'onChange' },
  },
}

export default story
