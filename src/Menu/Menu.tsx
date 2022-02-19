import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'
import { MenuProps } from '../types/components'

const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;

  background-color: ${COLORS.white};

  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`
const MenuItemWrapper = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  padding: 0px 16px;
  border-radius: 8px;

  transition: all 0.2s ease-in;

  &:not(:last-child) {
    margin-bottom: 10px;
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

  transition: all 0.1s ease-in;

  color: ${COLORS.charade};
`

const MenuIcon = styled.div`
  display: flex;
  flex-direction: center;
  color: ${COLORS.havelockBlue};
  margin-right: 8px;
`

const Menu: FC<MenuProps> = ({ options, className }): JSX.Element => {
  return (
    <MenuContainer className={className}>
      {options.map(({ id, onClick, label, icon, disabled }) => (
        <MenuItemWrapper key={id} onClick={onClick}>
          {icon && <MenuIcon>{icon}</MenuIcon>}
          {label && <MenuLabel>{label}</MenuLabel>}
        </MenuItemWrapper>
      ))}
    </MenuContainer>
  )
}

export default Menu
