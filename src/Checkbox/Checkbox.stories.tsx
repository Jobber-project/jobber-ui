import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Checkbox from '.'

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
      <Checkbox {...props} />
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
