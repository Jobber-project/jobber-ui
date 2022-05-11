import React, { Children, cloneElement, FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

const MenuContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in;
`

const MenuWrapper = styled.div<{ $align: 'left' | 'right' }>`
  position: absolute;
  z-index: 4;
  top: 10px;
  ${({ $align }) => ($align === 'left' ? 'left: 0;' : 'right: 0;')}
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`
const MenuItemWrapper = styled.button`
  appearance: none;
  padding: 0;
  border-radius: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  height: 35px;
  align-items: center;
  padding: 0px 16px;
  margin: 10px 16px 0px 16px;
  border-radius: 8px;

  transition: background-color 0.2s ease-in;

  &:last-child {
    margin-bottom: 16px;
  }

  &:first-child {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${COLORS.selago};
  }

  &:active {
    background-color: ${COLORS.linkWater};

    & > span {
      color: ${COLORS.governorBay};
    }
  }
`

const MenuLabel = styled.span`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  white-space: nowrap;

  transition: color 0.1s ease-in;

  color: ${COLORS.charade};
`

const MenuIcon = styled.div`
  display: flex;
  flex-direction: center;
  color: ${COLORS.havelockBlue};
  margin-right: 8px;
`

type MenuItemProps = {
  isVisible?: boolean
  as?: 'button' | 'a' | 'span'
  onClick?: () => void
  icon?: JSX.Element
  children?: string
}

export const Item: FC<MenuItemProps> = ({
  isVisible = false,
  as,
  onClick,
  icon,
  children,
}): JSX.Element => {
  return (
    <MenuItemWrapper
      tabIndex={isVisible ? undefined : -1}
      forwardedAs={as}
      type={as === undefined ? 'button' : undefined}
      onClick={onClick}
    >
      {icon && <MenuIcon>{icon}</MenuIcon>}
      {children && <MenuLabel>{children}</MenuLabel>}
    </MenuItemWrapper>
  )
}

type MenuProps = {
  isVisible: boolean
  align?: 'left' | 'right'
  className?: string
  children: JSX.Element[]
}

type MenuType = FC<MenuProps> & {
  Item: FC<MenuItemProps>
}

const Menu: MenuType = ({
  className,
  isVisible,
  align = 'left',
  children,
}): JSX.Element => {
  return (
    <MenuContainer className={className} isVisible={isVisible}>
      <MenuWrapper $align={align}>
        {Children.map(children, (child: JSX.Element) =>
          cloneElement(child, {
            isVisible: isVisible,
          }),
        )}
      </MenuWrapper>
    </MenuContainer>
  )
}

Menu.Item = Item

export default Menu
