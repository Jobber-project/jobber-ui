import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Button from './Button'

export function Intro(props) {
  return <Button {...props} />
}

Intro.storyName = 'Intro'

export function Default() {
  return (
    <>
      <Button variant="default">Default</Button>
      <Button outlined variant="default">
        Outlined
      </Button>
    </>
  )
}

export function Primary() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button outlined variant="primary">
        Outlined
      </Button>
    </>
  )
}

Primary.storyName = 'Primary'

export function Secondary() {
  return (
    <>
      <Button variant="secondary">Secondary</Button>
      <Button outlined variant="secondary">
        Outlined
      </Button>
    </>
  )
}

Secondary.storyName = 'Secondary'

export function Success() {
  return (
    <>
      <Button variant="success">Success</Button>
      <Button outlined variant="success">
        Outlined
      </Button>
    </>
  )
}

Success.storyName = 'Success'

export function Warning() {
  return (
    <>
      <Button variant="warning">Warning</Button>
      <Button outlined variant="warning">
        Outlined
      </Button>
    </>
  )
}

Warning.storyName = 'Warning'

export function Error() {
  return (
    <>
      <Button variant="error">Error</Button>
      <Button outlined variant="error">
        Outlined
      </Button>
    </>
  )
}

Error.storyName = 'Error'

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
