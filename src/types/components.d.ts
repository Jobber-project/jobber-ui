import { FC } from 'react'

export type MenuProps = {
  isVisible: boolean
  align?: 'left' | 'right'
  className?: string
  children: JSX.Element[]
}

export type MenuItemProps = {
  isVisible?: boolean
  as?: 'button' | 'a' | 'span'
  onClick?: () => void
  icon?: JSX.Element
  children?: string
}

type MenuType = FC<MenuProps> & {
  Item: FC<MenuItemProps>
}
