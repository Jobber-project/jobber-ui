import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Checkbox from '.'

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

export function Intro(props) {
  return (
    <Container>
      <Checkbox {...props} />
    </Container>
  )
}

export function Default() {
  return (
    <Container>
      <Checkbox label="Default" />
      <Checkbox defaultChecked label="Checked" />
      <Checkbox disabled label="Disabled" />
      <Checkbox disabled defaultChecked label="Checked disabled" />
    </Container>
  )
}

export function Primary() {
  return (
    <Container>
      <Checkbox variant="primary" label="Primary" />
      <Checkbox variant="primary" defaultChecked label="Checked" />
      <Checkbox variant="primary" disabled label="Disabled" />
      <Checkbox
        variant="primary"
        disabled
        defaultChecked
        label="Checked disabled"
      />
    </Container>
  )
}

export function Error() {
  return (
    <Container>
      <Checkbox variant="error" label="Error" />
    </Container>
  )
}

const story: ComponentMeta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  argTypes: {
    variant: {
      type: 'string',
      defaultValue: 'default',
    },
    label: {
      type: 'string',
      defaultValue: 'Label',
    },
    // size: {
    //   options: ['medium', 'large'],
    //   defaultValue: 'medium',
    // },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    flipped: {
      type: 'boolean',
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
  },
}

export default story
