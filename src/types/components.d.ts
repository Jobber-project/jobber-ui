import { FC } from 'react'

export type MenuProps = {
  isVisible: boolean
  align?: 'left' | 'right'
  className?: string
  children: JSX.Element[]
}

export type MenuItemProps = {
  onClick?: () => void
  icon?: JSX.Element
  children?: string
}

type MenuType = FC<MenuProps> & {
  Item: FC<MenuItemProps>
}
