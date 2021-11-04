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

  & > div + div {
    margin-top: 20px;
  }
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
      <TextField label="Medium" placeholder="Placeholder" />
      <TextField size="large" label="Large" placeholder="Placeholder" />
    </Container>
  )
}

export function Disabled() {
  return (
    <Container>
      <TextField disabled label="Medium" placeholder="Placeholder" />
      <TextField
        disabled
        size="large"
        label="Large"
        placeholder="Placeholder"
      />
    </Container>
  )
}

export function Email() {
  return (
    <Container>
      <TextField type="email" label="Medium" placeholder="Placeholder" />
      <TextField
        type="email"
        size="large"
        label="Large"
        placeholder="Placeholder"
      />
    </Container>
  )
}

export function Search() {
  return (
    <Container>
      <TextField type="search" label="Medium" placeholder="Placeholder" />
      <TextField
        type="search"
        size="large"
        label="Large"
        placeholder="Placeholder"
      />
    </Container>
  )
}

export function Success() {
  return (
    <Container>
      <TextField variant="success" label="Medium" placeholder="Placeholder" />
      <TextField
        variant="success"
        size="large"
        label="Large"
        placeholder="Placeholder"
      />
    </Container>
  )
}

export function Warning() {
  return (
    <Container>
      <TextField
        variant="warning"
        label="Medium"
        placeholder="Placeholder"
        helperText="Input helper text"
      />
      <TextField
        variant="warning"
        size="large"
        label="Large"
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
        label="Medium"
        placeholder="Placeholder"
        helperText="Input helper text"
      />
      <TextField
        variant="error"
        size="large"
        label="Large"
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
        label="Medium"
        helperText={helperText}
        variant={variant}
        value={value}
        onChange={handleChange}
      />
      <TextField
        label="Large"
        size="large"
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
