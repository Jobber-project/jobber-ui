import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import LabelComponent from './Label'

const Container = styled.div`
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function Label(props) {
  return (
    <Container>
      <LabelComponent {...props} />
    </Container>
  )
}

const story: ComponentMeta<typeof LabelComponent> = {
  title: 'Design System/Label',
  component: LabelComponent,
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    children: {
      type: 'string',
      defaultValue: 'Label',
    },
  },
}

export default story
