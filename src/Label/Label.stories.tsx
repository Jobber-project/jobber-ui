import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import LabelComponent from './Label'

const Container = styled.div<{}>``

export function Default(props) {
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
    invalid: {
      defaultValue: false,
    },
    children: {
      type: 'string',
      defaultValue: 'Label',
    },
  },
}

export default story
