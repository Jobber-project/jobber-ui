import React, {
  ForwardedRef,
  forwardRef,
  ReactNode,
  Ref,
  RefObject,
  useRef,
} from 'react'
import styled from 'styled-components'

import Modal from '../Modal/Modal'
import { ModalInstance } from '../Modal/types'
import COLORS from '../shared/colors'
import Text from '../Text/Text'
import XIcon from '../shared/icons/x.svg'
import PlainButton from '../PlainButton'
import useModal from '../Modal/useModal'
import Button from '../Button/Button'

import { DialogButtonConfig, DialogComponentType } from './types'

const DialogModal = styled(Modal)`
  width: 100%;
  max-width: 390px;
`

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 18px 18px 32px;
  text-align: center;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  border-radius: 8px;
`

const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: -10px;
`

const Title = styled(Text)`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.167em;
`

const HorizontalLine = styled.div`
  margin-bottom: 32px;
  width: 100%;
  height: 1px;
  background-color: ${COLORS.mischa};
`

const Message = styled(Text)`
  max-width: 316px;
  margin-bottom: 16px;
  font-size: 1.2rem;
  line-height: 1.167em;
`

const ButtonsRow = styled.div`
  display: flex;
  margin: 0 -8px;
`

const ButtonCol = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0 8px;
  box-sizing: border-box;
`

interface DialogProps {
  title?: ReactNode
  message?: ReactNode
  buttons?: DialogButtonConfig[]
  onDidClose?: () => void
}

function DialogComponent(
  { title, message, buttons, onDidClose }: DialogProps,
  forwardedRef: Ref<ModalInstance>,
) {
  const { ref, close } = useModal(forwardedRef)

  return (
    <DialogModal ref={ref} unmountOnClose onDidClose={onDidClose}>
      <Container>
        <TopBar>
          <PlainButton onClick={() => close()} aria-label="close">
            <XIcon width={20} height={20} viewBox="0 0 24 24" />
          </PlainButton>
        </TopBar>
        {!!title && <Title>{title}</Title>}
        {!!title && !!message && <HorizontalLine />}
        {!!message && <Message>{message}</Message>}
        {!!buttons?.length && (
          <ButtonsRow>
            {buttons.map(({ loading, outlined, variant, title, onClick }) => (
              <ButtonCol key={title}>
                <Button
                  loading={loading}
                  outlined={outlined}
                  variant={variant}
                  onClick={onClick}
                >
                  {title}
                </Button>
              </ButtonCol>
            ))}
          </ButtonsRow>
        )}
      </Container>
    </DialogModal>
  )
}

DialogComponent.confirm = async () => {
  throw new Error('Dialog.confirm() was called before it had been initialized')
}

DialogComponent.info = async () => {
  throw new Error('Dialog.info() was called before it had been initialized')
}

const Dialog = forwardRef(DialogComponent) as DialogComponentType<
  ModalInstance,
  DialogProps
>

export type { DialogProps }

export default Dialog
