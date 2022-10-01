import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'

import { ButtonVariant } from '../Button/Button'

export interface DialogComponentType<T, P>
  extends ForwardRefExoticComponent<P & RefAttributes<T>> {
  confirm: (args: DialogConfirmArgs) => Promise<boolean>
  info: (args: DialogInfoArgs) => Promise<void>
}

export interface DialogButtonConfig {
  loading?: boolean
  outlined?: boolean
  title: string
  variant?: ButtonVariant
  onClick?: () => void
}

export interface DialogConfig {
  center?: boolean
  title?: ReactNode
  message?: ReactNode
  buttons: DialogButtonConfig[]
  onDidClose?: () => void
}

export interface DialogConfirmButtonConfig {
  title?: string
  onClick?: (() => void) | (() => Promise<void>)
}

export type DialogConfirmArgs = {
  center?: boolean
  title?: ReactNode
  message?: ReactNode
  accept?: DialogConfirmButtonConfig
  decline?: DialogConfirmButtonConfig
}

export interface DialogInfoButton {
  title: string
}

export type DialogConfirmCallback = (
  args: DialogConfirmArgs,
) => Promise<boolean>

export type DialogInfoArgs = {
  title?: ReactNode
  message?: ReactNode
  button?: DialogInfoButton
}
