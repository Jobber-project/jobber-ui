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

const story: ComponentMeta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    label: {
      // defaultValue:
      //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsum cum? Culpa officia eos quis expedita minima, vel accusamus consectetur fugit optio perferendis. Necessitatibus aliquid nobis cum velit, est qui.',
      defaultValue: 'Label',
    },
    // placeholder: {
    //   defaultValue: 'Placeholder',
    // },
    // size: {
    //   options: ['medium', 'large'],
    //   defaultValue: 'medium',
    // },
    disabled: {
      defaultValue: false,
    },
    // onChange: { action: 'onChange' },
  },
}

export default story
