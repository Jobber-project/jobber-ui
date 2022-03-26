import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import Switcher from '.'

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function Horizontal(props) {
  return <Switcher.Horizontal {...props} />
}

export function Vertical(props) {
  return <Switcher.Vertical {...props} />
}

const story: ComponentMeta<typeof Horizontal | typeof Vertical> = {
  title: 'Design System/Switcher',
  component: Switcher.Horizontal,
  argTypes: {},
}

export default story
