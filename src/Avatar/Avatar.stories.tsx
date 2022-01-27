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
      <Avatar size="small" id="1" name="Test Testsson Testsson" />
      <Avatar size="medium" id="1" name="Test Testsson" />
      <Avatar size="large" id="1" name="Test Testsson" />
      <Avatar size="xlarge" id="1" />
    </Container>
  )
}

export function Image() {
  return (
    <Container>
      <Avatar
        size="small"
        src="https://i.pravatar.cc/144"
        id="086090e8-802d-4286-a29e-ce3ee0b15941"
        name="Test Testsson"
      />
      <Avatar
        size="medium"
        src="https://i.pravatar.cc/144"
        id="1fdb6be2-5d6e-46c3-a921-8504a74383bc"
        name="Test Testsson"
      />
      <Avatar
        size="large"
        src="https://i.pravatar.cc/144"
        id="c950bfc4-d2f7-4116-bb24-42f445efaf30"
        name="Test Testsson"
      />
      <Avatar
        size="xlarge"
        src="https://i.pravatar.cc/144"
        id="d9ef3594-08b7-4869-b58f-adf11ce9d5bf"
        name="Test Testsson"
      />
    </Container>
  )
}

export function Colors() {
  return (
    <>
      <Container>
        <Avatar
          size="small"
          id="086090e8-802d-4286-a29e-ce3ee0b15941"
          name="Test Testsson"
        />
        <Avatar
          size="small"
          id="1fdb6be2-5d6e-46c3-a921-8504a74383bc"
          name="Test Testsson"
        />
        <Avatar
          size="small"
          id="c950bfc4-d2f7-4116-bb24-42f445efaf30"
          name="Test Testsson"
        />
        <Avatar
          size="small"
          id="d9ef3594-08b7-4869-b58f-adf11ce9d5bf"
          name="Test Testsson"
        />
        <Avatar size="small" />
      </Container>
      <Container>
        <Avatar
          size="medium"
          id="086090e8-802d-4286-a29e-ce3ee0b15941"
          name="Test Testsson"
        />
        <Avatar
          size="medium"
          id="1fdb6be2-5d6e-46c3-a921-8504a74383bc"
          name="Test Testsson"
        />
        <Avatar
          size="medium"
          id="c950bfc4-d2f7-4116-bb24-42f445efaf30"
          name="Test Testsson"
        />
        <Avatar
          size="medium"
          id="d9ef3594-08b7-4869-b58f-adf11ce9d5bf"
          name="Test Testsson"
        />
        <Avatar size="medium" />
      </Container>
      <Container>
        <Avatar size="large" id="1" name="Test Testsson" />
        <Avatar size="large" id="2" name="Test Testsson" />
        <Avatar size="large" id="3" name="Test Testsson" />
        <Avatar size="large" id="4" name="Test Testsson" />
        <Avatar size="large" />
      </Container>
      <Container>
        <Avatar size="xlarge" id="1" name="Test Testsson" />
        <Avatar size="xlarge" id="2" name="Test Testsson" />
        <Avatar size="xlarge" id="3" name="Test Testsson" />
        <Avatar size="xlarge" id="4" name="Test Testsson" />
        <Avatar size="xlarge" />
      </Container>
    </>
  )
}

const story: ComponentMeta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
}

export default story
