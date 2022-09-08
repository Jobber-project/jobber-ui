import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

// @ts-ignore
import ClipboardCheckIcon from '../shared/icons/clipboard-check.svg'

import MultiSelect, { MultiSelectValue } from './MultiSelect'

const Container = styled.div<{
  $fluid?: boolean
}>`
  min-width: 333px;
  height: 500px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;

  ${props =>
    props.$fluid &&
    `
    width: 100%;
  `}
`

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

export function Intro(props) {
  const [value, setValue] = useState<MultiSelectValue>([])

  return (
    <Container>
      <MultiSelect
        {...props}
        options={options}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

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

export function Icon(props) {
  const [value, setValue] = useState<MultiSelectValue>([])

  return (
    <Container>
      <MultiSelect
        {...props}
        label="Default"
        options={options}
        value={value}
        onChange={setValue}
        icon={<ClipboardCheckIcon viewBox="0 0 24 24" />}
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

export function Error(props) {
  const [value, setValue] = useState<MultiSelectValue>([])

  return (
    <Container>
      <MultiSelect
        {...props}
        variant="error"
        label="Error"
        helperText="Helper text"
        options={options}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

export function Portal(props) {
  const [value, setValue] = useState<MultiSelectValue>([])

  return (
    <>
      <Container>
        <MultiSelect
          {...props}
          rerenderOnControlResize
          label="Portal - with rerenderOnControlResize"
          menuPortalTarget="multi-select-portal"
          options={options}
          value={value}
          onChange={setValue}
        />
      </Container>
      <Container $fluid>
        <MultiSelect
          {...props}
          rerenderOnWindowResize
          label="Portal - with rerenderOnWindowResize"
          menuPortalTarget="multi-select-portal"
          options={options}
          value={value}
          onChange={setValue}
        />
      </Container>
    </>
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
    helperText: {
      type: 'string',
      defaultValue: '',
    },
    rerenderOnControlResize: {
      type: 'boolean',
      defaultValue: false,
      description:
        'Optional workaround for menu not resizing when using portals',
    },
    rerenderOnWindowResize: {
      type: 'boolean',
      defaultValue: false,
      description:
        'Optional workaround for menu not resizing when using portals',
    },
    onChange: { action: 'onChange' },
  },
}

export default story
