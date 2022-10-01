import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import PlainButtonComponent from './PlainButton'

const Container = styled.div`
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function PlainButton(props) {
  return (
    <Container>
      <PlainButtonComponent {...props} />
    </Container>
  )
}

const story: ComponentMeta<typeof PlainButtonComponent> = {
  title: 'Design System/PlainButton',
  component: PlainButtonComponent,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Button',
    },
  },
}

export default story
