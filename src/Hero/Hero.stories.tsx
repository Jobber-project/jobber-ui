import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Hero from '.'

export function Intro({ ...props }) {
  return <Hero {...props} />
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
