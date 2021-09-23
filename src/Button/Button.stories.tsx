import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Button from './Button'

export function Intro(props) {
  return <Button {...props} />
}

Intro.storyName = 'Intro'

export function Primary() {
  return <Button variant="primary">Primary</Button>
}

Primary.storyName = 'Primary'

export function Secondary() {
  return <Button variant="secondary">Secondary</Button>
}

Secondary.storyName = 'Secondary'

const story: ComponentMeta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    onClick: { action: 'onClick' },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
    },
  },
}

export default story
