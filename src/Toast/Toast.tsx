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
import styled, { keyframes } from 'styled-components'

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

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
  }
`

const progressOut = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
`

const Positioner = styled.div<{
  $closing?: boolean
  $index: number
}>`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: ${props => (props.$closing ? 0 : 1)};
  transition: transform ease 280ms, opacity ease 280ms;
  transform: translateX(${props => (props.$closing ? -100 : 0)}%)
    translateY(${props => -props.$index * 100}%)
    translateY(${props => -props.$index * 10}px);
`

const ProgressWrapper = styled.span`
  display: block;
  width: 100%;
  height: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`

const Progress = styled.span<{
  $duration: number
  $color: string
}>`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$color};
  animation: ${progressOut} ${props => props.$duration}ms linear forwards;
`

const Container = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  max-width: 427px;
  background-color: ${COLORS.white};
  border-radius: 8px;
  box-shadow: 0px 5px 50px 10px rgba(0, 0, 0, 0.05);
  animation: ${animateIn} ease 280ms forwards;

  &:hover {
    ${Progress} {
      animation-play-state: paused;
    }
  }
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
  flex-grow: 1;
  padding: 16px 32px 15px 16px;
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
  overflow: hidden;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Message = styled.span`
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.167em;
  color: ${COLORS.charade};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

type ProgressBarProps = {
  duration?: number
  color: string
  onAnimationEnd?: () => any
}

const ProgressBar = memo(
  ({ duration = 500000, color, onAnimationEnd }: ProgressBarProps) => {
    return (
      <ProgressWrapper>
        <Progress
          $duration={duration}
          $color={color}
          onAnimationEnd={onAnimationEnd}
        />
      </ProgressWrapper>
    )
  },
)

ProgressBar.displayName = 'ProgressBar'

type ToastOptions = {}

type ToastConfig = ToastOptions & {
  closing?: boolean
  id: string
  variant: ToastVariant
  title?: string
  message?: string
  onTransitionEnd?: () => any
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
    if (id) context.close(id)
  }

  function handleAnimationEnd() {
    if (id) context.close(id)
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
      <ProgressBar color={color} onAnimationEnd={handleAnimationEnd} />
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
  close: (id: string) => {},
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

        setToasts(prev => [...prev, toastConfig])
      }
    }

    MemoizedToast.info = createToastCallback('info')
    MemoizedToast.success = createToastCallback('success')
    MemoizedToast.warning = createToastCallback('warning')
    MemoizedToast.error = createToastCallback('error')
  }, [])

  const remove = useCallback((id: string) => {
    setToasts(prev => prev.filter(toastConfig => toastConfig.id !== id))
  }, [])

  const close = useCallback(
    (id: string) => {
      setToasts(prev =>
        prev.map(toastConfig =>
          toastConfig.id === id
            ? {
                ...toastConfig,
                closing: true,
                onTransitionEnd: () => remove(id),
              }
            : toastConfig,
        ),
      )
    },
    [remove],
  )

  const value = useMemo(() => {
    return {
      remove,
      close,
    }
  }, [remove, close])

  return createPortal(
    <ToasterContext.Provider value={value}>
      {toasts.map(({ closing, onTransitionEnd, ...props }, index) => (
        <Positioner
          $closing={closing}
          $index={index}
          key={props.id}
          onTransitionEnd={onTransitionEnd}
        >
          <MemoizedToast {...props} />
        </Positioner>
      ))}
    </ToasterContext.Provider>,
    getOrCreatePortalElement(),
  )
}

export default MemoizedToast
