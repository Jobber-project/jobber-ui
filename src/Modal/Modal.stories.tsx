import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import ModalComponent from './Modal'
import useModal from './useModal'

const Container = styled.div`
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function Modal(props) {
  const { ref, toggle } = useModal()

  return (
    <>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      <ModalComponent ref={ref} {...props} />
    </>
  )
}

const story: ComponentMeta<typeof ModalComponent> = {
  title: 'Design System/Modal',
  component: ModalComponent,
  argTypes: {
    unmountOnClose: {
      defaultValue: false,
    },
    children: {
      type: 'string',
      defaultValue: 'Modal',
    },
  },
}

export default story
