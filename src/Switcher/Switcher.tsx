import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS, { PRIMARY_GRADIENT } from '../shared/colors'
// @ts-ignore
import ChevronUpIcon from '../shared/icons/chevron-up.svg'
// @ts-ignore
import ChevronRightIcon from '../shared/icons/chevron-right.svg'
// @ts-ignore
import ChevronDownIcon from '../shared/icons/chevron-down.svg'
// @ts-ignore
import ChevronLeftIcon from '../shared/icons/chevron-left.svg'

const Container = styled.div<{
  $vertical?: boolean
}>`
  width: ${props => (props.$vertical ? 42 : 89)}px;
  height: ${props => (props.$vertical ? 89 : 42)}px;
  background-color: ${COLORS.white};
  border-radius: 21px;
`

const Pill = styled.div<{
  $vertical?: boolean
}>`
  display: flex;
  flex-direction: ${props => (props.$vertical ? 'column' : 'row')};
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 21px;
`

const PillHalf = styled.button<{
  $vertical?: boolean
}>`
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.$vertical ? '100%' : '44px')};
  height: ${props => (props.$vertical ? '44px' : '100%')};
  color: ${COLORS.white};
  background: linear-gradient(
    ${props => (props.$vertical ? 90 : 0)}deg,
    ${COLORS.cornflowerBlue},
    ${COLORS.electricViolet}
  );

  &:first-child {
    border-top-left-radius: 21px;
    ${props =>
      props.$vertical
        ? `
    border-top-right-radius: 21px;
    `
        : `
    border-bottom-left-radius: 21px;
    `}
  }

  &:last-child {
    border-bottom-right-radius: 21px;
    ${props =>
      props.$vertical
        ? `
    border-bottom-left-radius: 21px;
    `
        : `
    border-top-right-radius: 21px;
    `}
  }

  & svg {
    transform: scale(0.83);
  }
`

const HiddenText = styled.span`
  z-index: -1;
  position: absolute;
  color: transparent;
  user-select: none;
`

type HorizontalProps = {
  className?: string
  onLeftButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  onRightButtonClick?: React.MouseEventHandler<HTMLButtonElement>
}

type VerticalProps = {
  className?: string
  onTopButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  onBottomButtonClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Horizontal: FC<HorizontalProps> = ({
  className,
  onLeftButtonClick,
  onRightButtonClick,
}) => {
  return (
    <Container className={className}>
      <Pill>
        <PillHalf type="button" aria-label="Left" onClick={onLeftButtonClick}>
          <ChevronLeftIcon />
          <HiddenText>Left</HiddenText>
        </PillHalf>
        <PillHalf type="button" aria-label="Right" onClick={onRightButtonClick}>
          <ChevronRightIcon />
          <HiddenText>Right</HiddenText>
        </PillHalf>
      </Pill>
    </Container>
  )
}

const Vertical: FC<VerticalProps> = ({
  className,
  onTopButtonClick,
  onBottomButtonClick,
}) => {
  return (
    <Container $vertical className={className}>
      <Pill $vertical>
        <PillHalf
          $vertical
          type="button"
          aria-label="Up"
          onClick={onTopButtonClick}
        >
          <ChevronUpIcon />
          <HiddenText>Up</HiddenText>
        </PillHalf>
        <PillHalf
          $vertical
          type="button"
          aria-label="Down"
          onClick={onBottomButtonClick}
        >
          <ChevronDownIcon />
          <HiddenText>Down</HiddenText>
        </PillHalf>
      </Pill>
    </Container>
  )
}

export { Horizontal, Vertical }
