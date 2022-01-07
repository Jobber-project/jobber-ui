import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Avatar from '.'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;

  & > span + span,
  & > label + label {
    margin-top: 20px;
  }
  & > div {
    margin-right: 10px;
  }
`

export function Initials() {
  return (
    <Container>
      <Avatar size="small" id="1" name="Test Testsson" />
      <Avatar size="medium" id="1" name="Test Testsson" />
      <Avatar size="large" id="1" name="Test Testsson" />
      <Avatar size="xlarge" id="1" name="Test Testsson" />
    </Container>
  )
}

export function Image() {
  return (
    <Container>
      <Avatar
        size="small"
        src="https://i.pravatar.cc/144"
        id="1"
        name="Test Testsson"
      />
      <Avatar
        size="medium"
        src="https://i.pravatar.cc/144"
        id="1"
        name="Test Testsson"
      />
      <Avatar
        size="large"
        src="https://i.pravatar.cc/144"
        id="1"
        name="Test Testsson"
      />
      <Avatar
        size="xlarge"
        src="https://i.pravatar.cc/144"
        id="1"
        name="Test Testsson"
      />
    </Container>
  )
}

export function Colors() {
  return (
    <>
      <Container>
        <Avatar size="small" id="1" name="Test Testsson" />
        <Avatar size="small" id="2" name="Test Testsson" />
        <Avatar size="small" id="3" name="Test Testsson" />
        <Avatar size="small" id="4" name="Test Testsson" />
      </Container>
      <Container>
        <Avatar size="medium" id="1" name="Test Testsson" />
        <Avatar size="medium" id="2" name="Test Testsson" />
        <Avatar size="medium" id="3" name="Test Testsson" />
        <Avatar size="medium" id="4" name="Test Testsson" />
      </Container>
      <Container>
        <Avatar size="large" id="1" name="Test Testsson" />
        <Avatar size="large" id="2" name="Test Testsson" />
        <Avatar size="large" id="3" name="Test Testsson" />
        <Avatar size="large" id="4" name="Test Testsson" />
      </Container>
      <Container>
        <Avatar size="xlarge" id="1" name="Test Testsson" />
        <Avatar size="xlarge" id="2" name="Test Testsson" />
        <Avatar size="xlarge" id="3" name="Test Testsson" />
        <Avatar size="xlarge" id="4" name="Test Testsson" />
      </Container>
    </>
  )
}

const story: ComponentMeta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
}

export default story
