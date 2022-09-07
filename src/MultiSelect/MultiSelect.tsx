import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import Select, {
  ActionMeta,
  MultiValue,
  StylesConfig,
  Props,
  GroupBase,
  MultiValueRemoveProps,
  ControlProps,
  components,
  FormatOptionLabelMeta,
  OptionProps,
} from 'react-select'
import styled, { css, keyframes } from 'styled-components'
import {
  ClearIndicatorProps,
  DropdownIndicatorProps,
} from 'react-select/dist/declarations/src/components/indicators'
import { MenuProps } from 'react-select/dist/declarations/src/components/Menu'

// @ts-ignore
import ChevronDownIcon from '../shared/icons/chevron-down.svg'
// @ts-ignore
import XIcon from '../shared/icons/x.svg'
// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'
// @ts-ignore
import WarningIcon from '../shared/icons/alert-triangle.svg'
// @ts-ignore
import ErrorIcon from '../shared/icons/circle-x.svg'
// @ts-ignore
import EmailIcon from '../shared/icons/mail.svg'
// @ts-ignore
import SearchIcon from '../shared/icons/search.svg'
import COLORS from '../shared/colors'
import { usePrevious } from '../shared/hooks'

export type MultiSelectVariant = 'default' | 'success' | 'warning' | 'error'

export type MultiSelectSize = 'medium' | 'large'

export type MultiSelectValue = MultiValue<MultiSelectOption>

export type MultiSelectActionMeta = ActionMeta<MultiSelectOption>

export type MultiSelectOption = {
  readonly label: string
  readonly value: string | number
}

export type { FormatOptionLabelMeta }

type CustomSelectPropsBase = Props<
  MultiSelectOption,
  true,
  GroupBase<MultiSelectOption>
>

export type RenderOptionProps = OptionProps<
  MultiSelectOption,
  true,
  GroupBase<MultiSelectOption>
>

export type CustomSelectProps = CustomSelectPropsBase & {
  animate: boolean
  icon?: ReactNode
  size: MultiSelectSize
  variant: MultiSelectVariant
  helperText?: string
  renderOption?: (props: RenderOptionProps) => ReactNode
  onAnimationEnd: () => void
}

function CustomSelect(props: CustomSelectProps) {
  return <Select {...props} />
}

export type MultiSelectProps = CustomSelectPropsBase & {
  disabled?: boolean
  autoFocus?: boolean
  menuIsOpen?: boolean
  maxMenuHeight?: number
  variant?: MultiSelectVariant
  size?: MultiSelectSize
  className?: string
  id?: string
  name?: string
  label?: string
  menuPortalTarget?: string
  placeholder?: string
  helperText?: string
  value?: MultiSelectValue
  options?: MultiSelectOption[]
  /** Icon to render ie `<Icon />` */
  icon?: ReactNode
  formatOptionLabel?: (
    data: MultiSelectOption,
    formatOptionLabelMeta: FormatOptionLabelMeta<MultiSelectOption>,
  ) => React.ReactNode
  renderOption?: CustomSelectProps['renderOption']
  noOptionsMessage?: CustomSelectProps['noOptionsMessage']
  onChange?: CustomSelectProps['onChange']
}

const animateIcon = keyframes`
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  100% {
    tansform: none;
    opacity: 1;
  }
`

const animateHelperText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

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

function getIconColor({
  $active,
  $variant,
}: {
  $active: boolean
  $variant: MultiSelectVariant
}): string {
  console.log('active', $active)
  switch ($variant) {
    case 'success':
      return COLORS.emerald

    case 'warning':
      return COLORS.yellowOrange

    case 'error':
      return COLORS.carnation

    case 'default':
    default:
      return $active ? COLORS.black : COLORS.silverChalice
  }
}

function getIconLeft({ $size }: { $size: MultiSelectSize }): number {
  switch ($size) {
    case 'large':
      return 24

    case 'medium':
    default:
      return 16
  }
}

function getIconSize({ $size }: { $size: MultiSelectSize }): number {
  switch ($size) {
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
  return getIconSize({ $size: size }) + getIconLeft({ $size: size }) * 1.5
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
  text-align: left;
`

const HelperText = styled.span<{
  animate: boolean
  variant: MultiSelectVariant
}>`
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor};
  transition: color 280ms ease;

  ${props =>
    props.animate &&
    css`
      animation: ${animateHelperText} 280ms ease;
    `}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SelectWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`

const IconWrapper = styled.div<{
  $active: boolean
  $animate: boolean
  $variant: MultiSelectVariant
  $size: MultiSelectSize
}>`
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => {
    const left = getIconLeft(props)
    return left ? `${left}px` : 'auto'
  }};
  display: flex;
  align-items: center;
  color: ${getIconColor};
  transition: color 280ms ease;

  ${props =>
    props.$animate &&
    css`
      animation: ${animateIcon} 280ms ease;
    `}

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
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
  position: absolute;
  margin-top: 5px;
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

function CustomControl(
  props: ControlProps<MultiSelectOption, true, GroupBase<MultiSelectOption>>,
) {
  const { children, menuIsOpen, selectProps } = props
  const { animate, value, variant, size, icon, helperText, onAnimationEnd } =
    selectProps as CustomSelectProps

  return (
    <>
      <components.Control {...props}>
        {children}
        {!!icon && (
          <IconWrapper
            $active={
              !!value && (value as MultiValue<MultiSelectOption>).length > 0
            }
            $animate={animate}
            $variant={variant}
            $size={size}
            key={variant}
            onAnimationEnd={onAnimationEnd}
          >
            {icon}
          </IconWrapper>
        )}
      </components.Control>
      {!!helperText && !menuIsOpen && (
        <HelperText
          animate={animate}
          variant={variant}
          onAnimationEnd={onAnimationEnd}
        >
          {helperText}
        </HelperText>
      )}
    </>
  )
}

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

function CustomMenu(
  props: MenuProps<MultiSelectOption, true, GroupBase<MultiSelectOption>>,
) {
  const { selectProps, innerProps, children, getStyles } = props

  const styles = getStyles('menu', props)

  const customProps = selectProps as unknown as {
    variant: MultiSelectVariant
    size: MultiSelectSize
  }

  return (
    <StyledMenu
      variant={customProps.variant}
      size={customProps.size}
      style={styles}
      {...(innerProps as any)}
    >
      {children}
    </StyledMenu>
  )
}

function CustomOption(
  props: OptionProps<MultiSelectOption, true, GroupBase<MultiSelectOption>>,
) {
  const { selectProps } = props

  const customProps = selectProps as unknown as CustomSelectProps

  function render() {
    if (customProps.renderOption) {
      return customProps.renderOption(props)
    }

    return props.children
  }

  return <components.Option {...props}>{render()}</components.Option>
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
    const styles: any = {
      zIndex: 1,
      position: 'relative',
    }
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
  menuIsOpen,
  maxMenuHeight,
  variant = 'default',
  size = 'medium',
  className,
  id,
  name,
  label,
  menuPortalTarget,
  placeholder,
  helperText,
  value,
  options = [],
  icon,
  ...rest
}: MultiSelectProps) {
  const prevVariant = usePrevious(variant)

  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  function handleAnimationEnd() {
    if (shouldAnimate) setShouldAnimate(false)
  }

  function getDerivedId(): string {
    if (id) return id
    if (label && name) return name
    if (label) return label
    return Math.random().toString()
  }

  function getDerivedIcon(): ReactNode {
    switch (variant) {
      case 'success':
        return <SuccessIcon viewBox="0 0 24 24" />

      case 'warning':
        return <WarningIcon viewBox="0 0 24 24" />

      case 'error':
        return <ErrorIcon viewBox="0 0 24 24" />

      case 'default':
      default:
        return icon
    }
  }

  useEffect(() => {
    if (variant !== prevVariant && !shouldAnimate) {
      setShouldAnimate(true)
    }
  }, [variant, prevVariant, shouldAnimate])

  const derivedId = getDerivedId()

  const derivedIcon = getDerivedIcon()

  return (
    <Container className={className}>
      {!!label && <Label htmlFor={derivedId}>{label}</Label>}
      <SelectWrapper>
        <StyledSelect
          {...rest}
          animate={shouldAnimate}
          icon={derivedIcon}
          variant={variant}
          size={size}
          helperText={helperText}
          isMulti
          menuIsOpen={menuIsOpen}
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
          onAnimationEnd={handleAnimationEnd}
          components={{
            Control: CustomControl,
            DropdownIndicator: CustomDropdownIndicator,
            ClearIndicator: CustomClearIndicator,
            Menu: CustomMenu,
            Option: CustomOption,
            MultiValueRemove: CustomMultiValueRemove,
          }}
        />
      </SelectWrapper>
    </Container>
  )
}

export default MultiSelect
