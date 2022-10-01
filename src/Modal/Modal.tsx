import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  Ref,
} from 'react'
import { createPortal } from 'react-dom'
import styled, { keyframes } from 'styled-components'

import { ModalInstance } from './types'

const backdropFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const backdropFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const containerFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`

const containerFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  100% {
    opacity: 0;
    transform: scale(0.8) translateY(50px);
  }
`

const Wrapper = styled.div<{
  $visible: boolean
  $hidden: boolean
}>`
  z-index: ${props => (props.$hidden ? -1 : 2)};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => (props.$hidden ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  visibility: ${props => (props.$visible ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.$visible ? 'auto' : 'none')};
  padding: 10px;
`

const Backdrop = styled.div<{
  $closing: boolean
}>`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${props => (props.$closing ? backdropFadeOut : backdropFadeIn)}
    180ms ease-out;
`

const Container = styled.section<{
  $closing: boolean
}>`
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  animation: ${props => (props.$closing ? containerFadeOut : containerFadeIn)}
    180ms ease-out;
`

type ModalProps = {
  unmountOnClose?: boolean
  id?: string
  className?: string
  children?: ReactNode
  onDidClose?: () => any | void
}

const openModals = new Set<string>([])

function ModalComponent(
  {
    unmountOnClose = false,
    id = '',
    className,
    children,
    onDidClose,
  }: ModalProps,
  ref: Ref<ModalInstance>,
) {
  const [visible, setVisible] = useState<boolean>(false)
  const [closing, setClosing] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const [internalID, setInternalID] = useState<string>('')
  const closeCb = useRef<(() => void) | null>(null)

  const portalRef = useRef<HTMLElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useImperativeHandle(ref, () => ({
    open: () => (visible ? undefined : setVisible(true)),
    close: cb => {
      if (cb) {
        closeCb.current = cb
      }

      if (visible && !closing) {
        setClosing(true)
      }
    },
    toggle: () => {
      if (visible && !closing) {
        setClosing(true)
      } else if (!visible && !closing) {
        setVisible(true)
      }
    },
  }))

  useEffect(() => {
    const { current: backdrop } = backdropRef

    function handleAnimationEnd() {
      console.log('handleAnimationEnd')
      setVisible(false)
      setClosing(false)
      onDidClose?.()
      closeCb.current?.()
    }

    if (backdrop && closing) {
      backdrop.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      if (backdrop) {
        backdrop.removeEventListener('animationend', handleAnimationEnd)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closing])

  useEffect(() => {
    function selector(tag: string): string {
      return `${tag}:not([type="hidden"]:not([tabIndex="-1"]):not([disabled])):not([data-plain-button])`
    }

    function focusFirstFocusable() {
      if (containerRef.current) {
        const focusableElems = ['a', 'input', 'button', 'select', 'textarea']
        const selectors = focusableElems.map(selector)
        const elem = containerRef.current.querySelector(
          selectors.join(','),
        ) as HTMLFormElement

        if (elem) {
          // @ts-ignore
          elem.focus?.({ focusVisible: true })
        }
      }
    }

    function handleEscape({ keyCode, key }) {
      if (
        visible &&
        !closing &&
        (keyCode === 27 || key === 'Escape' || key === 'Esc')
      ) {
        setClosing(true)
      }
    }

    if (mounted && visible && !closing) {
      focusFirstFocusable()
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [closing, visible, mounted])

  useEffect(() => {
    if (internalID) {
      if (visible && !openModals.has(internalID)) {
        openModals.add(internalID)
      } else if (openModals.has(internalID)) {
        openModals.delete(internalID)
      }

      document.body.style.overflow = openModals.size > 0 ? 'hidden' : ''
    }
  }, [visible, internalID])

  useEffect(() => {
    portalRef.current = document.getElementById('modal-portal')
    const generatedInternalID = `modal-${
      Math.random().toString().split('.')[1]
    }`
    setInternalID(generatedInternalID)
    setMounted(true)

    return () => {
      if (openModals.has(generatedInternalID)) {
        openModals.delete(generatedInternalID)
      }
    }
  }, [])

  function shouldRender(): boolean {
    if (!mounted) {
      return false
    }

    if (unmountOnClose) {
      return visible || closing
    }

    return true
  }

  return shouldRender()
    ? createPortal(
        <Wrapper $visible={visible} $hidden={!visible && !closing}>
          <Backdrop
            ref={backdropRef}
            $closing={closing}
            onClick={visible && !closing ? () => setClosing(true) : undefined}
          />
          <Container
            ref={containerRef}
            $closing={closing}
            className={className}
            aria-modal="true"
            role="dialog"
          >
            {children}
          </Container>
        </Wrapper>,
        portalRef.current,
        id,
      )
    : null
}

const Modal = forwardRef(ModalComponent)

export type { ModalProps }

export default Modal
