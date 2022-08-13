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

  & option {
    color: ${COLORS.charade};
  }
`

const Caption = styled.span<{
  $hasValue: boolean
}>`
  display: block;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const ClearButtonWrapper = styled.div<{
  $hidden: boolean
}>`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 16px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
`

const ClearButton = styled.button`
  z-index: 1;
  position: relative;
  appearance: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: -10px;
    right: -15px;
    bottom: -10px;
    left: -15px;
  }
`

const StyledSelect = styled.select`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`

export type SelectOption = {
  /** Optional unique identifier to use as key. Default is value and label combined */
  id?: string
  value: string | number
  label: string
}

type SelectProps = {
  disabled?: boolean
  className?: string
  id?: string
  placeholder?: string
  name?: string
  value?: string | number
  options?: SelectOption[]
  onChange?: ChangeEventHandler<HTMLSelectElement>
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  {
    disabled,
    className,
    id,
    placeholder = '',
    name,
    value = '',
    options,
    onChange,
  },
  ref,
) => {
  const innerRef = useRef<HTMLSelectElement>(null)

  useImperativeHandle(ref, () => innerRef.current as HTMLSelectElement)

  const selectedOption = options?.find?.(o => o.value === value)

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

  const derivedId = getDerivedId()

  return (
    <Container className={className}>
      <Caption $hasValue={!!selectedOption}>
        {selectedOption?.label ?? placeholder}
      </Caption>
      <StyledChevronDownIcon
        $hidden={!!value}
        width={20}
        height={20}
        viewBox="0 0 24 24"
      />
      <Hider>
        <StyledSelect
          disabled={disabled}
          id={derivedId}
          ref={innerRef}
          value={selectedOption?.value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        >
          <option value="">{placeholder}</option>
          {options?.map?.(option => (
            <option
              key={option.id ?? `${option.value}-${option.label}`}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </Hider>
      <ClearButtonWrapper $hidden={!value}>
        <ClearButton
          disabled={disabled}
          type="button"
          onClick={handleClearClick}
          aria-label="clear"
        >
          <StyledXIcon width={20} height={20} viewBox="0 0 24 24" />
        </ClearButton>
      </ClearButtonWrapper>
    </Container>
  )
}

const ForwardedSelect = forwardRef(Select)

export default ForwardedSelect
