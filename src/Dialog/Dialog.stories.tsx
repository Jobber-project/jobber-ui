import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import DialogComponent from './Dialog'
import useDialog from './useDialog'
import DialogProvider from './DialogProvider'

const Container = styled.div`
  min-width: 333px;
  width: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

export function Info(props) {
  const { info } = useDialog()

  async function handleClick() {
    await info(props)
    console.log('Info did resolve')
  }

  return (
    <>
      <DialogProvider />
      <button type="button" onClick={handleClick}>
        Toggle
      </button>
      <DialogComponent {...props} />
    </>
  )
}

export function Confirm(props) {
  const { confirm } = useDialog()

  async function handleClick() {
    const result = await confirm(props)
    console.log(`Confirm did resolve with result: ${result}`)
  }

  return (
    <>
      <DialogProvider />
      <button type="button" onClick={handleClick}>
        Toggle
      </button>
      <DialogComponent {...props} />
    </>
  )
}

const story: ComponentMeta<typeof DialogComponent> = {
  title: 'Design System/Dialog',
  component: DialogComponent,
  argTypes: {
    title: {
      defaultValue: 'Information',
    },
    message: {
      defaultValue: 'Message',
    },
  },
}

export default story
