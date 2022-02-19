import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'

import Menu from '.'

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

const options = [
  {
    id: '1',
    label: 'normal',
    onClick: () => {
      console.log('Normal')
    },
  },
  {
    id: '2',
    label: 'icon',
    onClick: () => {
      console.log('Icon')
    },
    icon: <SuccessIcon viewBox="0 0 24 24" />,
  },
  {
    id: '3',
    label: 'Disabled',
    onClick: () => {
      console.log('Disabled')
    },
    disabled: true,
  },
]

export function Colors() {
  return (
    <Container>
      <Menu options={options} />
    </Container>
  )
}

const story: ComponentMeta<typeof Menu> = {
  title: 'Design System/Menu',
  component: Menu,
}

export default story
