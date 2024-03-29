import React, { useEffect, useRef, useState } from 'react'

import useModal from '../Modal/useModal'

import Dialog from './Dialog'
import {
  DialogButtonConfig,
  DialogConfirmArgs,
  DialogConfirmButtonConfig,
  DialogConfig,
  DialogInfoArgs,
} from './types'

function DialogProvider() {
  const { ref, open, close } = useModal()

  const [config, setConfig] = useState<DialogConfig | null>(null)

  const didClickButton = useRef<boolean>(false)

  useEffect(() => {
    function updateConfirmAcceptButton(loading: boolean) {
      setConfig(prev =>
        prev
          ? {
              ...prev,
              buttons: [
                { ...prev.buttons[0], disabled: loading },
                { ...prev.buttons[1], loading },
              ],
            }
          : null,
      )
    }

    function updateConfirmDeclineButton(loading: boolean) {
      setConfig(prev =>
        prev
          ? {
              ...prev,
              buttons: [
                { ...prev.buttons[0], loading },
                { ...prev.buttons[1], disabled: loading },
              ],
            }
          : null,
      )
    }

    async function handleAcceptButtonClick(button: DialogConfirmButtonConfig) {
      if (button.onClick) {
        try {
          const maybePromise = button.onClick()
          if ((maybePromise as Promise<any>).then) {
            updateConfirmAcceptButton(true)
            await maybePromise
          }
        } catch (err) {
          updateConfirmAcceptButton(false)
          throw err
        }
      }
    }

    async function handleDeclineButtonClick(button: DialogConfirmButtonConfig) {
      if (button.onClick) {
        try {
          const maybePromise = button.onClick()
          if ((maybePromise as Promise<any>).then) {
            updateConfirmDeclineButton(true)
            await maybePromise
          }
        } catch (err) {
          updateConfirmDeclineButton(false)
          throw err
        }
      }
    }

    function confirm(args: DialogConfirmArgs): Promise<boolean> {
      const defaultDecline: DialogButtonConfig = {
        title: 'Decline',
        variant: 'error',
        outlined: true,
      }

      const defaultAccept: DialogButtonConfig = {
        title: 'Accept',
        variant: 'success',
        outlined: true,
      }

      const decline = {
        ...defaultDecline,
        ...(args.decline ?? {}),
      }

      const accept = {
        ...defaultAccept,
        ...(args.accept ?? {}),
      }

      return new Promise(resolve => {
        setConfig({
          title: args.title,
          message: args.message,
          onDidClose: () => {
            if (!didClickButton.current) {
              resolve(false)
            }
          },
          buttons: [
            {
              ...decline,
              onClick: async () => {
                didClickButton.current = true
                await handleDeclineButtonClick(decline)
                close(() => resolve(false))
              },
            },
            {
              ...accept,
              onClick: async () => {
                didClickButton.current = true
                await handleAcceptButtonClick(accept)
                close(() => resolve(true))
              },
            },
          ],
        })
      })
    }

    Dialog.confirm = args =>
      new Promise(resolve => {
        confirm(args).then(result => {
          setConfig(null)
          didClickButton.current = false

          resolve(result)
        })
      })

    function info(args: DialogInfoArgs): Promise<void> {
      return new Promise(resolve => {
        const defaultInfoButton: DialogButtonConfig = {
          title: 'OK',
          variant: 'default',
          outlined: true,
          onClick: () => close(),
        }

        const infoButton: DialogButtonConfig = {
          ...defaultInfoButton,
          ...(args.button ?? {}),
        }

        setConfig({
          title: args.title,
          message: args.message,
          buttons: [infoButton],
          onDidClose: () => {
            setConfig(null)
            resolve()
          },
        })
      })
    }

    Dialog.info = info
  }, [close])

  useEffect(() => {
    if (config) {
      open()
    }
  }, [config, open])

  return config ? (
    <Dialog
      ref={ref}
      title={config.title}
      message={config.message}
      buttons={config.buttons}
      onDidClose={config.onDidClose}
    />
  ) : null
}

export default DialogProvider
