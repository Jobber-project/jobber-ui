import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import RadioButton from '.'

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
      <RadioButton {...props} />
    </Container>
  )
}

export function Default() {
  return (
    <Container>
      <RadioButton label="Default" />
      <RadioButton defaultChecked label="Checked" />
      <RadioButton disabled label="Disabled" />
      <RadioButton disabled defaultChecked label="Checked disabled" />
    </Container>
  )
}

export function Primary() {
  return (
    <Container>
      <RadioButton variant="primary" label="Primary" />
      <RadioButton variant="primary" defaultChecked label="Checked" />
      <RadioButton variant="primary" disabled label="Disabled" />
      <RadioButton
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
      <RadioButton variant="error" label="Error" />
    </Container>
  )
}

const story: ComponentMeta<typeof RadioButton> = {
  title: 'Design System/RadioButton',
  component: RadioButton,
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    label: {
      defaultValue: 'Label',
    },
    // size: {
    //   options: ['medium', 'large'],
    //   defaultValue: 'medium',
    // },
    disabled: {
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
  },
}

export default story
