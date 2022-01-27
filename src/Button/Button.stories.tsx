import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'

import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 333px;
  width: 333px;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;

  & > button {
    margin-top: 20px;
  }
`

const DefaultContainer = styled(Container)`
  min-width: 333px;
  width: 333px;
  background-color: #7b61ff;
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
    <>
      <DefaultContainer>
        <Button fluid variant="default">
          Default fluid
        </Button>
        <Button fluid outlined variant="default">
          Outlined fluid
        </Button>
      </DefaultContainer>
      <DefaultContainer>
        <Button variant="default">Default</Button>
        <Button outlined variant="default">
          Outlined
        </Button>
      </DefaultContainer>
    </>
  )
}

export function Primary() {
  return (
    <>
      <Container>
        <Button fluid variant="primary">
          Primary fluid
        </Button>
        <Button fluid outlined variant="primary">
          Outlined fluid
        </Button>
      </Container>
      <Container>
        <Button variant="primary">Primary</Button>
        <Button outlined variant="primary">
          Outlined
        </Button>
      </Container>
    </>
  )
}

Primary.storyName = 'Primary'

export function Secondary() {
  return (
    <>
      <Container>
        <Button fluid variant="secondary">
          Secondary fluid
        </Button>
        <Button fluid outlined variant="secondary">
          Outlined fluid
        </Button>
      </Container>
      <Container>
        <Button variant="secondary">Secondary</Button>
        <Button outlined variant="secondary">
          Outlined
        </Button>
      </Container>
    </>
  )
}

Secondary.storyName = 'Secondary'

export function Success() {
  return (
    <>
      <Container>
        <Button fluid variant="success">
          Success fluid
        </Button>
        <Button fluid outlined variant="success">
          Outlined fluid
        </Button>
      </Container>
      <Container>
        <Button variant="success">Success</Button>
        <Button outlined variant="success">
          Outlined
        </Button>
      </Container>
    </>
  )
}

Success.storyName = 'Success'

export function Warning() {
  return (
    <>
      <Container>
        <Button fluid variant="warning">
          Warning fluid
        </Button>
        <Button fluid outlined variant="warning">
          Outlined fluid
        </Button>
      </Container>
      <Container>
        <Button variant="warning">Warning</Button>
        <Button outlined variant="warning">
          Outlined
        </Button>
      </Container>
    </>
  )
}

Warning.storyName = 'Warning'

export function Error() {
  return (
    <>
      <Container>
        <Button fluid variant="error">
          Error fluid
        </Button>
        <Button fluid outlined variant="error">
          Outlined fluid
        </Button>
      </Container>
      <Container>
        <Button variant="error">Error</Button>
        <Button outlined variant="error">
          Outlined
        </Button>
      </Container>
    </>
  )
}

Error.storyName = 'Error'

export function Coach() {
  return (
    <>
      <Container>
        <Button fluid variant="coach">
          Coach fluid
        </Button>
        <Button fluid outlined variant="coach">
          Outlined fluid
        </Button>
      </Container>
      <Container>
        <Button variant="coach">Coach</Button>
        <Button outlined variant="coach">
          Outlined
        </Button>
      </Container>
    </>
  )
}

Coach.storyName = 'Coach'

export function Disabled() {
  return (
    <>
      <Container>
        <Button fluid disabled>
          Disabled fluid
        </Button>
      </Container>
      <Container>
        <Button disabled>Disabled</Button>
      </Container>
    </>
  )
}

Disabled.storyName = 'Disabled'

export function Icon() {
  return (
    <>
      <Container>
        <Button fluid icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon fluid
        </Button>
        <Button fluid outlined icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon fluid
        </Button>
        <Button icon={<SuccessIcon viewBox="0 0 24 24" />}>Icon</Button>
        <Button outlined icon={<SuccessIcon viewBox="0 0 24 24" />}>
          Icon
        </Button>
      </Container>
      <Container>
        <Button
          fluid
          variant="primary"
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon fluid
        </Button>
        <Button
          fluid
          variant="primary"
          outlined
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon fluid
        </Button>
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
        <Button
          fluid
          variant="secondary"
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon fluid
        </Button>
        <Button
          fluid
          variant="secondary"
          outlined
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon fluid
        </Button>
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
        <Button
          fluid
          variant="coach"
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon fluid
        </Button>
        <Button
          fluid
          variant="coach"
          outlined
          icon={<SuccessIcon viewBox="0 0 24 24" />}
        >
          Icon fluid
        </Button>
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
