import React, { FC, MouseEventHandler } from 'react'
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

type ToastProps = {
  variant?: ToastVariant
  title?: string
  message?: string
  onClick?: () => any
}

const Toast: FC<ToastProps> = ({
  variant = 'info',
  title,
  message,
  onClick,
}: ToastProps) => {
  const icon = getIcon(variant)
  const color = getColor(variant)

  function handleClick() {
    onClick?.()
  }

  function handleCloseClick() {}

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

export default Toast
