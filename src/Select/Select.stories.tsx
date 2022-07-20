import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Select from '.'

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

export function Intro({ ...props }) {
  return (
    <Container>
      <Select
        {...props}
        options={[
          {
            value: '1',
            label: 'One',
          },
          {
            value: '2',
            label: 'Two',
          },
          {
            value: '3',
            label: 'Three',
          },
        ]}
      />
    </Container>
  )
}

const story: ComponentMeta<typeof Select> = {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    placeholder: {
      type: 'string',
      defaultValue: 'Placeholder',
    },
    value: {
      type: 'string',
    },
    onChange: { action: 'onChange' },
  },
}

export default story
