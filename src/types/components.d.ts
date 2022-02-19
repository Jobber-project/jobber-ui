export type MenuOption = {
  id: string
  label: string
  onClick: () => void
  icon?: JSX.Element
  disabled?: boolean
}

export type MenuProps = {
  options: MenuOption[]
  className?: string
}
