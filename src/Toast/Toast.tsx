import React, {
  createContext,
  FC,
  memo,
  NamedExoticComponent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

// @ts-ignore
import XIcon from '../shared/icons/x.svg'
// @ts-ignore
import InfoIcon from '../shared/icons/info-circle.svg'
// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'
// @ts-ignore
import WarningIcon from '../shared/icons/alert-triangle-modified.svg'
// @ts-ignore
import ErrorIcon from '../shared/icons/alert-circle.svg'
import COLORS from '../shared/colors'

const Container = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  max-width: 427px;
  background-color: ${COLORS.white};
  border-radius: 8px;
  box-shadow: 0px 5px 50px 10px rgba(0, 0, 0, 0.05);
`

const CloseButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 4px;
  right: 4px;
  appearance: none;
  display: block;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: ${COLORS.charade};
`

const Inner = styled.span`
  display: flex;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
`

const InnerLeft = styled.span<{
  $color: string
}>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color};

  & svg {
    margin-right: 16px;
  }
`

const InnerRight = styled.span`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
`

const Title = styled.span<{
  $color: string
}>`
  display: block;
  margin-bottom: 4px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.167em;
  color: ${props => props.$color};
`

const Message = styled.span`
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.167em;
  color: ${COLORS.charade};
`

const Progress = styled.span<{
  $color: string
}>`
  display: block;
  width: 100%;
  height: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${props => props.$color};
`

const StyledInfoIcon = styled(InfoIcon)`
  & circle {
    fill: currentColor;
  }

  & circle + path {
    color: ${COLORS.white};
  }
`

const StyledSuccessIcon = styled(SuccessIcon)`
  & circle {
    fill: currentColor;
  }

  & circle + path {
    color: ${COLORS.white};
  }
`

const StyledErrorIcon = styled(ErrorIcon)`
  & circle {
    fill: currentColor;
  }

  & circle + path {
    color: ${COLORS.white};
  }
`

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'

function getIcon(variant: ToastVariant): JSX.Element {
  switch (variant) {
    case 'info':
      return <StyledInfoIcon width={32} height={32} viewBox="0 0 24 24" />

    case 'success':
      return <StyledSuccessIcon width={32} height={32} viewBox="0 0 24 24" />

    case 'warning':
      return <WarningIcon width={32} height={32} viewBox="0 0 24 24" />

    case 'error':
      return <StyledErrorIcon width={32} height={32} viewBox="0 0 24 24" />

    default:
      return null
  }
}

function getColor(variant: ToastVariant): string {
  switch (variant) {
    case 'info':
      return COLORS.havelockBlue

    case 'success':
      return COLORS.emerald

    case 'warning':
      return COLORS.yellowOrange

    case 'error':
      return COLORS.carnation

    default:
      return COLORS.black
  }
}

type ToastOptions = {}

type ToastConfig = ToastOptions & {
  id: string
  variant: ToastVariant
  title?: string
  message?: string
}

type TToast = {
  info: (title?: string, message?: string, options?: ToastOptions) => void
  success: (title?: string, message?: string, options?: ToastOptions) => void
  warning: (title?: string, message?: string, options?: ToastOptions) => void
  error: (title?: string, message?: string, options?: ToastOptions) => void
}

type ToastProps = {
  id?: string
  variant?: ToastVariant
  title?: string
  message?: string
  onClick?: () => any
}

const Toast: FC<ToastProps> = ({
  id,
  variant = 'info',
  title,
  message,
  onClick,
}: ToastProps) => {
  const context = useContext(ToasterContext)

  const icon = getIcon(variant)
  const color = getColor(variant)

  function handleClick() {
    onClick?.()
  }

  function handleCloseClick() {
    if (id) context.remove(id)
  }

  return (
    <Container onClick={handleClick}>
      <Inner>
        <InnerLeft $color={color}>{icon}</InnerLeft>
        <InnerRight>
          {!!title && <Title $color={color}>{title}</Title>}
          {!!message && <Message>{message}</Message>}
        </InnerRight>
      </Inner>
      <Progress $color={color} />
      <CloseButton type="button" onClick={handleCloseClick} aria-label="close">
        <XIcon width={20} height={20} viewBox="0 0 24 24" />
      </CloseButton>
    </Container>
  )
}

// @ts-ignore
const MemoizedToast: NamedExoticComponent<ToastProps> & TToast = memo(Toast)

MemoizedToast.info = (
  title?: string,
  message?: string,
  options?: ToastOptions,
) => {
  throw new Error('Toast.info() was called before Toaster had mounted.')
}

MemoizedToast.success = (
  title?: string,
  message?: string,
  options?: ToastOptions,
) => {
  throw new Error('Toast.success() was called before Toaster had mounted.')
}

MemoizedToast.warning = (
  title?: string,
  message?: string,
  options?: ToastOptions,
) => {
  throw new Error('Toast.warning() was called before Toaster had mounted.')
}

MemoizedToast.error = (
  title?: string,
  message?: string,
  options?: ToastOptions,
) => {
  throw new Error('Toast.error() was called before Toaster had mounted.')
}

MemoizedToast.displayName = 'Toast'

const ToasterContext = createContext({
  remove: (id: string) => {},
})

function getOrCreatePortalElement() {
  let element = document.getElementById('toasts-portal')

  if (!element) {
    element = document.createElement('div')
    element.setAttribute('id', 'toasts-portal')
    document.body.appendChild(element)
  }

  return element
}

export const Toaster: FC = () => {
  const [toasts, setToasts] = useState<ToastConfig[]>([])

  useEffect(() => {
    function generateId(): string {
      return `toast-${
        Math.random().toString().split('.')[1]
      }-${Date.now().toString()}`
    }

    function createToastCallback(
      variant: ToastVariant,
    ): (title?: string, message?: string, options?: ToastOptions) => void {
      return (title?: string, message?: string, options?: ToastOptions) => {
        const toastConfig: ToastConfig = {
          id: generateId(),
          variant,
          title,
          message,
          ...options,
        }

        setToasts(prev => [toastConfig, ...prev])
      }
    }

    MemoizedToast.info = createToastCallback('info')
  }, [])

  const remove = useCallback((id: string) => {
    setToasts(prev => prev.filter(toastConfig => toastConfig.id !== id))
  }, [])

  const value = useMemo(() => {
    return {
      remove,
    }
  }, [remove])

  return createPortal(
    <ToasterContext.Provider value={value}>
      {toasts.map(props => (
        <MemoizedToast key={props.id} {...props} />
      ))}
    </ToasterContext.Provider>,
    getOrCreatePortalElement(),
  )
}

export default MemoizedToast
