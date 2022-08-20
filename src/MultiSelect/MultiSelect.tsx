import React, { ComponentType, PropsWithChildren } from 'react'
import Select, {
  ActionMeta,
  MultiValue,
  StylesConfig,
  Props,
  GroupBase,
  MultiValueRemoveProps,
} from 'react-select'
import styled from 'styled-components'
import {
  ClearIndicatorProps,
  DropdownIndicatorProps,
} from 'react-select/dist/declarations/src/components/indicators'
import { MenuProps } from 'react-select/dist/declarations/src/components/Menu'

// @ts-ignore
import ChevronDownIcon from '../shared/icons/chevron-down.svg'
// @ts-ignore
import XIcon from '../shared/icons/x.svg'
import COLORS from '../shared/colors'

export type MultiSelectVariant = 'default' | 'success' | 'warning' | 'error'

export type MultiSelectSize = 'medium' | 'large'

export type MultiSelectValue = MultiValue<MultiSelectOption>

export type MultiSelectActionMeta = ActionMeta<MultiSelectOption>

export type MultiSelectOption = {
  readonly label: string
  readonly value: string | number
}

type CustomSelectPropsBase = Props<
  MultiSelectOption,
  true,
  GroupBase<MultiSelectOption>
>

type CustomSelectProps = CustomSelectPropsBase & {
  icon: boolean
  size: MultiSelectSize
  variant: MultiSelectVariant
}

function CustomSelect(props: CustomSelectProps) {
  return <Select {...props} />
}

type MultiSelectProps = {
  disabled?: boolean
  autoFocus?: boolean
  maxMenuHeight?: number
  variant?: MultiSelectVariant
  size?: MultiSelectSize
  className?: string
  id?: string
  name?: string
  label?: string
  menuPortalTarget?: string
  placeholder?: string
  value?: MultiSelectValue
  options?: MultiSelectOption[]
  noOptionsMessage?: CustomSelectProps['noOptionsMessage']
  onChange?: CustomSelectProps['onChange']
}

function getVariantColor({ variant }: { variant: MultiSelectVariant }): string {
  switch (variant) {
    case 'success':
      return COLORS.emerald

    case 'warning':
      return COLORS.yellowOrange

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return COLORS.mischa
  }
}

function getIconLeft({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 16
  }
}

function getIconSize({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 20
  }
}

function getPaddingRight({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 16
  }
}

function getPaddingLeft({ size }: { size: MultiSelectSize }): number {
  return getIconSize({ size }) + getIconLeft({ size }) * 1.5
}

function getPadding({ size }: { size: MultiSelectSize }): string {
  switch (size) {
    case 'large':
      return '16px 24px'

    case 'medium':
    default:
      return '8px 16px'
  }
}

function getInputHeight({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'large':
      return 56

    case 'medium':
    default:
      return 40
  }
}

function getInputFontSize({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'large':
      return 18

    case 'medium':
    default:
      return 16
  }
}

function getInputLineHeight({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'large':
      return 1.1667 // 21px

    case 'medium':
    default:
      return 1.1875 // 19px
  }
}

function getFocusBorderColor({ variant }: { variant: MultiSelectVariant }) {
  switch (variant) {
    case 'default':
      return COLORS.havelockBlue

    default:
      return false
  }
}

function getTagFontSize({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'medium':
    default:
      return 12
  }
}

function getTagLineHeight({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'medium':
    default:
      return 1.1667 // 14px
  }
}

function getRemoveSize({ size }: { size: MultiSelectSize }): number {
  switch (size) {
    case 'medium':
    default:
      return 12
  }
}

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  color: ${COLORS.silverChalice};
`

const StyledXIcon = styled(XIcon)`
  color: ${COLORS.silverChalice};
`

const StyledClearIndicator = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0;
  marign: 0;
  box-sizing: border-box;
  background: transparent;
  border-radius: 0;
  border: none;
  cursor: pointer;
  text-decoration: none;

  & svg {
    color: ${COLORS.charade};
  }
`

const StyledMultiValueRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0;
  marign: 0;
  box-sizing: border-box;
  background: transparent;
  border-radius: 0;
  border: none;
  cursor: pointer;
  text-decoration: none;

  & svg {
    margin-left: 4px;
    color: ${COLORS.charade};
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledSelect = styled(CustomSelect)`
  .jobello-select__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: ${getInputHeight}px;
    margin: 0;
    padding: ${getPadding};
    box-sizing: border-box;
    border: 1px solid ${getVariantColor};
    border-radius: 8px;
    background-color: ${COLORS.white};
    color: ${COLORS.charade};
    transition: border-color 140ms ease-in;

    ${props =>
      props.icon &&
      `
        padding-right: ${getPaddingRight(props)}px;
        padding-left: ${getPaddingLeft(props)}px;
      `}

    &--is-focused {
      border-color: ${getFocusBorderColor};
    }

    &--is-disabled {
      cursor: default;
      background-color: ${COLORS.alabster};

      & .jobello-select__multi-value {
        opacity: 0.5;
        background-color: ${COLORS.mischa};
      }
    }

    & {
      font-size: ${getInputFontSize}px;
      line-height: ${getInputLineHeight}em;
    }
  }

  .jobello-select__value-container {
    display: flex;
    align-items: center;

    &--has-value
      + .jobello-select__indicators
      .jobello-select__indicator-separator {
      display: block;
    }
  }

  .jobello-select__placeholder {
    color: ${COLORS.silverChalice};
  }

  .jobello-select__indicators {
    display: flex;
    align-items: center;
  }

  .jobello-select__multi-value {
    display: flex;
    align-items: center;
    border-radius: 3px;
    background-color: ${COLORS.linkWater};
    margin: 2px 0;
    padding: 2px 6px;
    box-sizing: border-box;
    font-size: ${getTagFontSize}px;
    line-height: ${getTagLineHeight}em;

    &:not(:last-child) {
      margin-right: 2px;
    }
  }

  .jobello-select__indicator-separator {
    display: none;
    align-self: stretch;
    margin-right: 4px;
    margin-left: 8px;
    width: 1px;
    background-color: ${COLORS.mischa};
  }
`

const StyledMenu = styled.div<{
  variant: MultiSelectVariant
  size: MultiSelectSize
}>`
  z-index: 1;
  position: relative;
  top: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  font-size: ${getInputFontSize}px;
  line-height: ${getInputLineHeight}em;
  font-weight: 400;

  .jobello-select__menu-list {
    padding: 16px;
    box-sizing: border-box;
  }

  .jobello-select__option {
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding: 8px 16px;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;

    &--is-focused,
    &:hover {
      background-color: ${COLORS.selago};
    }

    &:active {
      background-color: ${COLORS.linkWater};
    }
  }
`

function CustomDropdownIndicator(
  props: PropsWithChildren<
    DropdownIndicatorProps<
      MultiSelectOption,
      true,
      GroupBase<MultiSelectOption>
    >
  >,
) {
  return <StyledChevronDownIcon />
}

function CustomClearIndicator(
  props: ClearIndicatorProps<
    MultiSelectOption,
    true,
    GroupBase<MultiSelectOption>
  >,
) {
  const innerProps = props.innerProps as any
  return (
    <StyledClearIndicator type="button" {...innerProps}>
      <StyledXIcon width={18} height={18} viewBox="0 0 24 24" />
    </StyledClearIndicator>
  )
}

function CustomMenu({
  selectProps,
  innerProps,
  children,
}: MenuProps<MultiSelectOption, true, GroupBase<MultiSelectOption>>) {
  const customProps = selectProps as unknown as {
    variant: MultiSelectVariant
    size: MultiSelectSize
  }

  return (
    <StyledMenu
      variant={customProps.variant}
      size={customProps.size}
      {...(innerProps as any)}
    >
      {children}
    </StyledMenu>
  )
}

function CustomMultiValueRemove(
  props: MultiValueRemoveProps<
    MultiSelectOption,
    true,
    GroupBase<MultiSelectOption>
  >,
) {
  const innerProps = props.innerProps as any
  const customProps = props.selectProps as unknown as {
    size: MultiSelectSize
  }

  const size = getRemoveSize(customProps)

  return (
    <StyledMultiValueRemove type="button" {...innerProps}>
      <XIcon width={size} height={size} viewBox="0 0 24 24" />
    </StyledMultiValueRemove>
  )
}

const resetStyles: StylesConfig<MultiSelectOption, true> = {
  clearIndicator: (provided, props) => {
    const styles: any = {}
    return styles
  },
  container: provided => {
    return provided
  },
  control: (provided, props) => {
    const styles: any = {}
    return styles
  },
  dropdownIndicator: (provided, props) => {
    const styles: any = {}
    return styles
  },
  group: (provided, props) => {
    const styles: any = {}
    return styles
  },
  groupHeading: (provided, props) => {
    const styles: any = {}
    return styles
  },
  indicatorsContainer: (provided, props) => {
    const styles: any = {}
    return styles
  },
  indicatorSeparator: (provided, props) => {
    const styles: any = {}
    return styles
  },
  input: (provided, props) => {
    const { margin, paddingTop, paddingBottom, color, ...styles } = provided
    return { ...styles, padding: '0 2px' }
  },
  loadingIndicator: (provided, props) => {
    const styles: any = {}
    return styles
  },
  loadingMessage: (provided, props) => {
    const styles: any = {}
    return styles
  },
  menu: (provided, props) => {
    const {
      backgroundColor,
      borderRadius,
      boxShadow,
      marginTop,
      marginBottom,
      ...styles
    } = provided
    return styles
  },
  menuList: (provided, props) => {
    const { paddingTop, paddingBottom, ...styles } = provided
    return styles
  },
  menuPortal: provided => {
    return provided
  },
  multiValue: (provided, props) => {
    const styles: any = {}
    return styles
  },
  multiValueLabel: (provided, props) => {
    const styles: any = {}
    return styles
  },
  multiValueRemove: (provided, props) => {
    const styles: any = {}
    return styles
  },
  noOptionsMessage: (provided, props) => {
    const styles: any = {}
    return styles
  },
  option: (provided, props) => {
    const styles: any = {}
    return styles
  },
  placeholder: (provided, props) => {
    const styles: any = {}
    return styles
  },
  singleValue: (provided, props) => {
    const styles: any = {}
    return styles
  },
  valueContainer: (provided, props) => {
    const { padding, ...styles } = provided
    return styles
  },
}

function MultiSelect({
  disabled,
  autoFocus,
  maxMenuHeight,
  variant = 'default',
  size = 'medium',
  className,
  id,
  name,
  label,
  menuPortalTarget,
  placeholder,
  value,
  options = [],
  noOptionsMessage,
  onChange,
}: MultiSelectProps) {
  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (label) return label
    return Math.random().toString()
  }

  const derivedId = getDerivedId()

  return (
    <Container className={className}>
      {!!label && <Label htmlFor={derivedId}>{label}</Label>}
      <StyledSelect
        icon={false}
        variant={variant}
        size={size}
        isMulti
        isDisabled={disabled}
        autoFocus={autoFocus}
        maxMenuHeight={maxMenuHeight}
        inputId={derivedId}
        name={name}
        classNamePrefix="jobello-select"
        placeholder={placeholder}
        options={options}
        value={value}
        menuPortalTarget={
          menuPortalTarget
            ? document.getElementById(menuPortalTarget) ?? undefined
            : undefined
        }
        styles={resetStyles}
        noOptionsMessage={noOptionsMessage}
        onChange={onChange}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          ClearIndicator: CustomClearIndicator,
          Menu: CustomMenu,
          MultiValueRemove: CustomMultiValueRemove,
        }}
      />
    </Container>
  )
}

export default MultiSelect
