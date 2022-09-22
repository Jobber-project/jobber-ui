import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Hero from '.'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

export function Intro({ ...props }) {
  return (
    <Container>
      <Hero {...props} />
    </Container>
  )
}

const story: ComponentMeta<typeof Hero> = {
  title: 'Design System/Hero',
  component: Hero,
  argTypes: {
    title: {
      type: 'string',
      defaultValue: 'Rubrik',
    },
    subtitle: {
      type: 'string',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
}

export default story
