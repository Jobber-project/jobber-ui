import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import MultiSelect, { MultiSelectOption, MultiSelectValue } from './MultiSelect'

const Container = styled.div`
  min-width: 333px;
  height: 500px;
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
      <MultiSelect {...props} />
    </Container>
  )
}

const options = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
  { label: 'Four', value: 'four' },
  { label: 'Five', value: 'five' },
  { label: 'Six', value: 'six' },
  { label: 'Seven', value: 'seven' },
  { label: 'Eight', value: 'eight' },
  { label: 'Nine', value: 'nine' },
  { label: 'Ten', value: 'ten' },
]

export function Default(props) {
  const [value, setValue] = useState<MultiSelectValue>([])

  return (
    <Container>
      <MultiSelect
        {...props}
        label="Default"
        options={options}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

export function Disabled(props) {
  const [value, setValue] = useState<MultiSelectValue>([])

  return (
    <Container>
      <MultiSelect
        {...props}
        disabled
        label="Disabled"
        options={options}
        value={value}
        onChange={setValue}
      />
      <MultiSelect
        {...props}
        disabled
        label="Disabled with values"
        options={options}
        value={[options[0], options[1]]}
        onChange={setValue}
      />
    </Container>
  )
}

const story: ComponentMeta<typeof MultiSelect> = {
  title: 'Design System/MultiSelect',
  component: MultiSelect,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Default',
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Placeholder',
    },
    noOptionsMessage: {
      type: 'function',
      defaultValue: () => 'No options',
    },
    onChange: { action: 'onChange' },
  },
}

export default story
