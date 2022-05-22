import { ComponentMeta } from '@storybook/react'

import { ToastVariant } from './Toast'

import Toast from '.'

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
    message: {
      defaultValue: 'This is a message to notify the end user about happened.',
    },
    onClick: { action: 'onClick' },
  },
}

export default story
