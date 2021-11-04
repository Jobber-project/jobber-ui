import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import TextField from '.'

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
      <TextField {...props} />
    </Container>
  )
}

export function Default() {
  return (
    <Container>
      <TextField label="Label" placeholder="Placeholder" />
    </Container>
  )
}

export function Disabled() {
  return (
    <Container>
      <TextField disabled label="Label" placeholder="Placeholder" />
    </Container>
  )
}

export function Success() {
  return (
    <Container>
      <TextField variant="success" label="Label" placeholder="Placeholder" />
    </Container>
  )
}

export function Warning() {
  return (
    <Container>
      <TextField
        variant="warning"
        label="Label"
        placeholder="Placeholder"
        helperText="Input helper text"
      />
    </Container>
  )
}

export function Error() {
  return (
    <Container>
      <TextField
        variant="error"
        label="Label"
        placeholder="Placeholder"
        helperText="Input helper text"
      />
    </Container>
  )
}

const story: ComponentMeta<typeof TextField> = {
  title: 'Design System/TextField',
  component: TextField,
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    label: {
      defaultValue: 'Label',
    },
    placeholder: {
      defaultValue: 'Placeholder',
    },
    size: {
      options: ['medium', 'large'],
      defaultValue: 'medium',
    },
    disabled: {
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
  },
}

export default story
