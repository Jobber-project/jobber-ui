import React, { useEffect, useRef } from 'react'
import { ComponentMeta } from '@storybook/react'

import { Toaster, ToastVariant } from './Toast'

import Toast from '.'

export function Intro() {
  const num = useRef(0)

  useEffect(() => {
    num.current += 1
    Toast.info(`Title #${num.current}`, `Message #${num.current}`)
    num.current += 1
    Toast.success(`Title #${num.current}`, `Message #${num.current}`)
    num.current += 1
    Toast.warning(`Title #${num.current}`, `Message #${num.current}`)
    num.current += 1
    Toast.error(`Title #${num.current}`, `Message #${num.current}`)
  }, [])

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          num.current += 1
          Toast.info(`Title #${num.current}`, `Message #${num.current}`)
        }}
      >
        Info
      </button>
      <button
        type="button"
        onClick={() => {
          num.current += 1
          Toast.success(`Title #${num.current}`, `Message #${num.current}`)
        }}
      >
        Success
      </button>
      <button
        type="button"
        onClick={() => {
          num.current += 1
          Toast.warning(`Title #${num.current}`, `Message #${num.current}`)
        }}
      >
        Warning
      </button>
      <button
        type="button"
        onClick={() => {
          num.current += 1
          Toast.error(`Title #${num.current}`, `Message #${num.current}`)
        }}
      >
        Error
      </button>
      <Toaster />
    </div>
  )
}

export function Info({ title = 'Information title', ...props }) {
  return <Toast title={title} {...props} />
}

export function Success({
  variant = 'success',
  title = 'Success title',
  ...props
}) {
  return <Toast variant={variant as ToastVariant} title={title} {...props} />
}

export function Warning({
  variant = 'warning',
  title = 'Warning title',
  ...props
}) {
  return <Toast variant={variant as ToastVariant} title={title} {...props} />
}

export function Error({ variant = 'error', title = 'Error title', ...props }) {
  return <Toast variant={variant as ToastVariant} title={title} {...props} />
}

const story: ComponentMeta<typeof Toast> = {
  title: 'Design System/Toast',
  component: Toast,
  argTypes: {
    title: {
      type: 'string',
    },
    message: {
      type: 'string',
      defaultValue: 'This is a message to notify the end user about happened.',
    },
    duration: {
      defaultValue: 5000,
      type: 'number',
    },
    onClick: { action: 'onClick' },
  },
}

export default story
