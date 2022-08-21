import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Select from '.'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;

  & > span + span,
  & > label + label {
    margin-top: 20px;
  }
`

const options = [
  {
    value: '1',
    label: 'One',
  },
  {
    value: '2',
    label: 'Two',
  },
  {
    value: '3',
    label: 'Three',
  },
]

export function Intro({ ...props }) {
  return (
    <Container>
      <Select {...props} options={options} />
    </Container>
  )
}

export function Controlled({ placeholder }) {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Container>
      <Select
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  )
}

export function Disabled({ placeholder }) {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Container>
      <Select
        disabled
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  )
}

export function Error(props) {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Container>
      <Select
        {...props}
        variant="error"
        value={value}
        options={options}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  )
}

const story: ComponentMeta<typeof Select> = {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    placeholder: {
      type: 'string',
      defaultValue: 'Placeholder',
    },
    value: {
      type: 'string',
    },
    onChange: { action: 'onChange' },
  },
}

export default story
