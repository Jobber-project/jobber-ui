import React, {
  cloneElement,
  FC,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode,
} from 'react'
import { RefAttributes } from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

const MenuContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  overflow: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
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
const MenuItemWrapper = styled.button<any>`
  appearance: none;
  padding: 0;
  border-radius: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;

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
  className?: string
  href?: string
  onClick?: () => void
  icon?: JSX.Element
  children?: string | JSX.Element
}

export const Item: FC<MenuItemProps> = ({
  isVisible = false,
  as,
  className,
  href,
  onClick,
  icon,
  children,
}): JSX.Element => {
  return (
    <MenuItemWrapper
      tabIndex={isVisible ? undefined : -1}
      as={as}
      className={className}
      type={as === undefined ? 'button' : undefined}
      href={as === 'a' ? href : undefined}
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
  children: ReactNode
}

type MenuType = ForwardRefRenderFunction<HTMLDivElement, MenuProps> & {
  Item: FC<MenuItemProps>
}

const Menu: MenuType = (
  { className, isVisible, align = 'left', children },
  ref,
) => {
  function getMutableChildrenArray(): ReactElement[] {
    if (!children) {
      return []
    }

    if (Array.isArray(children)) {
      return children as ReactElement[]
    }

    return [children] as ReactElement[]
  }

  return (
    <MenuContainer className={className} isVisible={isVisible}>
      <MenuWrapper ref={ref} $align={align}>
        {getMutableChildrenArray().reduce(
          (acc: ReactNode[], child: ReactElement, i) => {
            if (child) {
              acc.push(
                cloneElement(child, {
                  key: i,
                  isVisible: isVisible,
                }),
              )
            }

            return acc
          },
          [],
        )}
      </MenuWrapper>
    </MenuContainer>
  )
}

Menu.Item = Item

const withStaticProps = <T,>(
  forwarded: ForwardRefExoticComponent<
    MenuProps & RefAttributes<HTMLDivElement>
  >,
  staticProps: T,
) => Object.assign(forwarded, staticProps)

const ForwardedMenu = withStaticProps(forwardRef(Menu), {
  Item,
})

export default ForwardedMenu
