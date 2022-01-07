import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'

import Button from './Button'

const Container = styled.div`
  min-width: 333px;
  width: 333px;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;

  & > div + div {
    margin-top: 20px;
  }
`

export function Intro(props) {
  return <Button {...props} />
}

Intro.storyName = 'Intro'

export function Default() {
  return (
    <Container>
      <Button variant="default">Default</Button>
      <Button outlined variant="default">
        Outlined
      </Button>
    </Container>
  )
}

export function Primary() {
  return (
    <Container>
      <Button variant="primary">Primary</Button>
      <Button outlined variant="primary">
        Outlined
      </Button>
    </Container>
  )
}

Primary.storyName = 'Primary'

export function Secondary() {
  return (
    <Container>
      <Button variant="secondary">Secondary</Button>
      <Button outlined variant="secondary">
        Outlined
      </Button>
    </Container>
  )
}

Secondary.storyName = 'Secondary'

export function Success() {
  return (
    <Container>
      <Button variant="success">Success</Button>
      <Button outlined variant="success">
        Outlined
      </Button>
    </Container>
  )
}

Success.storyName = 'Success'

export function Warning() {
  return (
    <Container>
      <Button variant="warning">Warning</Button>
      <Button outlined variant="warning">
        Outlined
      </Button>
    </Container>
  )
}

Warning.storyName = 'Warning'

export function Error() {
  return (
    <Container>
      <Button variant="error">Error</Button>
      <Button outlined variant="error">
        Outlined
      </Button>
    </Container>
  )
}

Error.storyName = 'Error'

export function Coach() {
  return (
    <Container>
      <Button variant="coach">Coach</Button>
      <Button outlined variant="coach">
        Outlined
      </Button>
    </Container>
  )
}

Coach.storyName = 'Coach'

export function Disabled() {
  return (
    <Container>
      <Button disabled>Disabled</Button>
    </Container>
  )
}

Disabled.storyName = 'Disabled'

export function Icon() {
  return (
    <>
      <Container>
        <Button icon={<SuccessIcon viewBox="0 0 24 24" />}>Icon</Button>
        <Button outlined icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon
        </Button>
      </Container>
      <Container>
        <Button variant="primary" icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon
        </Button>
        <Button
          variant="primary"
          outlined
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon
        </Button>
      </Container>
      <Container>
        <Button variant="secondary" icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon
        </Button>
        <Button
          variant="secondary"
          outlined
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon
        </Button>
      </Container>
      <Container>
        <Button variant="coach" icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon
        </Button>
        <Button
          variant="coach"
          outlined
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon
        </Button>
      </Container>
    </>
  )
}

Disabled.storyName = 'Disabled'

const story: ComponentMeta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ],
      defaultValue: 'default',
    },
    type: {
      options: ['button', 'submit'],
      defaultValue: 'button',
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    outlined: {
      defaultValue: 'false',
    },
    disabled: {
      defaultValue: 'false',
    },
    onClick: { action: 'onClick' },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
    },
  },
}

export default story
