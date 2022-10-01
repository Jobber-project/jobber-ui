import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import HelperTextComponent from './HelperText'

const Container = styled.div`
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function HelperText(props) {
  return (
    <Container>
      <HelperTextComponent {...props} />
    </Container>
  )
}

const story: ComponentMeta<typeof HelperTextComponent> = {
  title: 'Design System/HelperText',
  component: HelperTextComponent,
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    children: {
      defaultValue: 'Helper text example',
    },
  },
}

export default story
