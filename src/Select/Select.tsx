import React, {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react'
import styled from 'styled-components'

// @ts-ignore
import ChevronDownIcon from '../shared/icons/chevron-down.svg'
// @ts-ignore
import XIcon from '../shared/icons/x.svg'
import COLORS from '../shared/colors'

const Container = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`

const Hider = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & select {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    appearance: none;
    display: block;
    width: 100%;
    height: 100%;
    color: transparent;
    background: transparent;
    border: none;
  }
`

const Caption = styled.span<{
  $hasValue: boolean
}>`
  display: block;
  flex-grow: 1;
  margin-right: 8px;
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  line-height: 1.1875em;
  color: ${props => (props.$hasValue ? COLORS.charade : COLORS.silverChalice)};
`

const StyledChevronDownIcon = styled(ChevronDownIcon)<{
  $hidden: boolean
}>`
  color: ${COLORS.silverChalice};
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
`

const StyledXIcon = styled(XIcon)`
  color: ${COLORS.silverChalice};
`

const ClearButton = styled.button`
  z-index: 2;
  position: absolute;
  appearance: none;
  top: 0;
  right: 16px;
  bottom: 0;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  cursor: pointer;
`

type SelectOption = {
  /** Optional unique identifier to use as key. Default is value and label combined */
  id?: string
  value: string | number
  label: string
}

type SelectProps = {
  className?: string
  id?: string
  placeholder?: string
  name?: string
  value?: string | number
  options?: SelectOption[]
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onClear?: () => any
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { className, id, placeholder = '', name, value, options, onChange, onClear },
  ref,
) => {
  const innerRef = useRef<HTMLSelectElement>(null)

  useImperativeHandle(ref, () => innerRef.current as HTMLSelectElement)

  function handleClearClick() {
    if (innerRef.current) {
      innerRef.current.selectedIndex = 0
      const evt = new Event('change', { bubbles: true })
      innerRef.current.dispatchEvent(evt)
    }
  }

  function getDerivedId(): string {
    if (id) return id
    if (placeholder && name) return name
    if (placeholder && typeof placeholder === 'string') return placeholder
    return Math.random().toString()
  }

  function getCaption(): string {
    if (value !== undefined && options && options.length > 0) {
      return options.find(o => o.value === value)?.label ?? placeholder
    }

    return placeholder
  }

  const derivedId = getDerivedId()
  const caption = getCaption()

  return (
    <Container className={className}>
      <Caption $hasValue={!!value}>{caption}</Caption>
      <StyledChevronDownIcon $hidden={!!value} width={20} height={20} />
      <Hider>
        <select
          id={derivedId}
          ref={innerRef}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        >
          <option value={placeholder}>{placeholder}</option>
          {options?.map?.(option => (
            <option
              key={option.id ?? `${option.value}-${option.label}`}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </Hider>
      {!!value && (
        <ClearButton
          type="button"
          onClick={handleClearClick}
          aria-label="clear"
        >
          <StyledXIcon width={20} height={20} />
        </ClearButton>
      )}
    </Container>
  )
}

const ForwardedSelect = forwardRef(Select)

export default ForwardedSelect
