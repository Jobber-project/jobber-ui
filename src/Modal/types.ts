import { Ref, RefObject } from 'react'

export type CloseFunction = {
  (cb?: () => void): void
  wrap: (cb?: () => void) => () => void
}

export type ModalInstance = {
  open?: () => void
  close?: (cb?: () => void) => void
  toggle?: () => void
}

export type UseModalReturnValue = {
  ref: Ref<ModalInstance> | RefObject<ModalInstance>
  open: () => void
  close: CloseFunction
  toggle: () => void
}
