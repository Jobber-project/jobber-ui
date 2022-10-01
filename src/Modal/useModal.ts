import { Ref, RefObject, useCallback, useRef } from 'react'

import { ModalInstance, UseModalReturnValue } from './types'

function useModal(
  forwardedRef?: Ref<ModalInstance> | RefObject<ModalInstance> | null,
): UseModalReturnValue {
  const ref = useRef<ModalInstance>(null)

  const derivedRef =
    typeof forwardedRef === 'function' ? ref : forwardedRef ?? ref

  const toggle = useCallback(() => {
    derivedRef?.current?.toggle?.()
  }, [derivedRef])

  const open = useCallback(() => {
    derivedRef?.current?.open?.()
  }, [derivedRef])

  const close: any = useCallback(
    (cb?: () => void) => {
      derivedRef?.current?.close?.(cb)
    },
    [derivedRef],
  )

  close.wrap = (cb?: () => void) => close(cb)

  return { ref: forwardedRef ?? ref, toggle, open, close }
}

export default useModal
