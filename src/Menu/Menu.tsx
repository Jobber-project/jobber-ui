import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'
import { MenuItemProps, MenuType } from '../types/components'

const MenuContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  z-index: 3;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in;
`

const MenuWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`
const MenuItemWrapper = styled.div`
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
    cursor: pointer;
  }

  &:active {
    background-color: ${COLORS.linkWater};
    cursor: pointer;
    & > label {
      color: ${COLORS.governorBay};
    }
  }
`

const MenuLabel = styled.label`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  transition: color 0.1s ease-in;

  color: ${COLORS.charade};
`

const MenuIcon = styled.div`
  display: flex;
  flex-direction: center;
  color: ${COLORS.havelockBlue};
  margin-right: 8px;
`

export const Item: FC<MenuItemProps> = ({
  onClick,
  icon,
  children,
}): JSX.Element => {
  return (
    <MenuItemWrapper onClick={onClick}>
      {icon && <MenuIcon>{icon}</MenuIcon>}
      {children && <MenuLabel>{children}</MenuLabel>}
    </MenuItemWrapper>
  )
}

const Menu: MenuType = ({ className, isVisible, children }): JSX.Element => {
  return (
    <MenuContainer className={className} isVisible={isVisible}>
      <MenuWrapper>{children}</MenuWrapper>
    </MenuContainer>
  )
}

Menu.Item = Item

export default Menu
