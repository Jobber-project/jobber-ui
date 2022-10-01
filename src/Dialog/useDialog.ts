import { useCallback } from 'react'

import Dialog from './Dialog'
import { DialogConfirmArgs, DialogInfoArgs } from './types'

function useDialog() {
  const confirm = useCallback(
    async (args: DialogConfirmArgs): Promise<boolean> => {
      const result = await Dialog.confirm(args)
      return result
    },
    [],
  )

  const info = useCallback(async (args: DialogInfoArgs): Promise<void> => {
    await Dialog.info(args)
  }, [])

  return {
    confirm,
    info,
  }
}

export default useDialog
