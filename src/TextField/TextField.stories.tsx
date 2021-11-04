import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { TextFieldVariant } from './TextField'

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

export function Transitions() {
  const variations = ['default', 'success', 'warning', 'error']

  const [value, setValue] = React.useState('')
  const [variant, setVariant] = React.useState<TextFieldVariant>(
    variations[0] as TextFieldVariant,
  )
  const [helperText, setHelperText] = React.useState<string | undefined>()

  function handleChange({ target }) {
    setValue(target?.value ?? '')
    if (Math.random() > 0.5) {
      const index = Math.floor(Math.random() * variations.length)
      if (index > 0 && !helperText) {
        setHelperText('Input helper text')
      } else if (index < 1 && helperText) {
        setHelperText(undefined)
      }
      setVariant(variations[index] as TextFieldVariant)
    }
  }

  return (
    <Container>
      <TextField
        label="Label"
        helperText={helperText}
        variant={variant}
        value={value}
        onChange={handleChange}
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
