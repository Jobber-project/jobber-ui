import { FC } from 'react'

export type MenuProps = {
  isVisible: boolean
  toggleVisibility?: () => void
  className?: string
}

export type MenuItemProps = {
  onClick?: () => void
  icon?: JSX.Element
  children?: string
}

type MenuType = FC<MenuProps> & {
  Item: FC<MenuItemProps>
}
