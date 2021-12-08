import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';

const globalStyle = css `
  ${reset}
  font-family: 'Roboto', sans-serif;

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
  }
`;
const GlobalStyle = createGlobalStyle `
  ${globalStyle}
`;

// https://chir.ag/projects/name-that-color/#6B53FF
const COLORS = {
    havelockBlue: '#5971dd',
    electricViolet: '#8d49f7',
    cornflowerBlue: '#6b53ff',
    mischa: '#dddfe5',
    emerald: '#41c879',
    yellowOrange: '#fda146',
    carnation: '#fb5255',
    supernova: '#ffc600',
    sunshade: '#ff9e2c',
    persianIndigo: '#371789',
    silverChalice: '#a9a9a9',
    alabster: '#f9f9f9',
    charade: '#2b2a35',
    white: '#ffffff',
    black: '#000000',
};
const PRIMARY_GRADIENT = `linear-gradient(90deg, ${COLORS.electricViolet}, ${COLORS.havelockBlue})`;
const SECONDARY_GRADIENT = `linear-gradient(90deg, ${COLORS.supernova}, ${COLORS.sunshade})`;

function getIconSize$1({ $size }) {
    switch ($size) {
        case 'large':
            return 24;
        case 'medium':
        default:
            return 20;
    }
}
function getBackgroundColor({ $variant, }) {
    switch ($variant) {
        case 'primary':
            return PRIMARY_GRADIENT;
        case 'secondary':
            return SECONDARY_GRADIENT;
        case 'success':
            return COLORS.emerald;
        case 'warning':
            return COLORS.yellowOrange;
        case 'error':
            return COLORS.carnation;
        default:
            return COLORS.white;
    }
}
function getTextColor({ $variant, $outlined, }) {
    switch ($variant) {
        case 'secondary':
            return $outlined ? COLORS.supernova : COLORS.persianIndigo;
        case 'primary':
            return $outlined ? COLORS.electricViolet : COLORS.white;
        case 'success':
            return $outlined ? COLORS.emerald : COLORS.white;
        case 'warning':
            return $outlined ? COLORS.yellowOrange : COLORS.white;
        case 'error':
            return $outlined ? COLORS.carnation : COLORS.white;
        default:
            return COLORS.black;
    }
}
function getIconColor$1({ $variant, $outlined, }) {
    switch ($variant) {
        case 'secondary':
            return $outlined ? COLORS.sunshade : COLORS.persianIndigo;
        case 'primary':
        default:
            return $outlined ? COLORS.electricViolet : COLORS.white;
    }
}
function getIconPadding({ $size }) {
    switch ($size) {
        case 'large':
            return 24;
        case 'medium':
        default:
            return 20;
    }
}
const IconWrapper$1 = styled.div `
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${getIconPadding}px;
  display: flex;
  align-items: center;
  color: ${getIconColor$1};

  & svg {
    width: ${getIconSize$1}px;
    height: ${getIconSize$1}px;
  }
`;
const ChildrenWrapper = styled.div `
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${getTextColor};
`;
function getOutlinedStyles({ $outlined, }) {
    return ($outlined &&
        `
    display: inline-block;
    position: relative;
    z-index: 10;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      border-radius: 7px;
      
      background: white;
      pointer-events: none;
    }
    &:hover {
      &::before {
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        border-radius: 6px;
      }
    }
    `);
}
function getFilledHoverStyles({ $outlined }) {
    return (!$outlined &&
        `
    overflow: hidden;
    z-index: 1;

    &:after {
      background: ${COLORS.white};
      content: '';
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
    &:hover {
      &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  `);
}
function getSizes({ $size }) {
    if ($size === 'small')
        return `
      font-size: 16px;
      line-height: 21px;
      height: 40px;
      padding: 8px 16px;
    `;
    if ($size === 'large')
        return `
      font-size: 18px;
      line-height: 21px;
      height: 53px;
      padding: 16px 24px;
    `;
    return `
    font-size: 16px;
    line-height: 21px;
    height: 40px;
    padding: 8px 16px;
  `;
}
function getIconStyles({ $size, icon, }) {
    if (!icon)
        return '';
    if ($size === 'small')
        return `
      z-index: 1;
      padding-left: 16px;
    `;
    if ($size === 'large')
        return `
    z-index: 1;
    padding-left: 24px;
    `;
    return `
    z-index: 1;
    padding-left: 16px;
  `;
}
function getDisabledStyle({ disabled }) {
    if (!disabled)
        return '';
    return `
    background: ${COLORS.alabster};
    color: ${COLORS.silverChalice};
    border: 1px solid ${COLORS.mischa};
    cursor: not-allowed! important;
  `;
}
const ButtonWrapper = styled.div `
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
const ButtonContainer = styled.button `
  cursor: pointer;
  position: relative;
  appearance: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  border: none;

  background: ${getBackgroundColor};

  color: ${getTextColor};

  ${getSizes};

  ${getIconStyles};

  ${getOutlinedStyles};

  ${getFilledHoverStyles};

  ${getDisabledStyle};
`;
const Button = ({ variant = 'default', type = 'button', onClick, size = 'medium', outlined = false, disabled = false, icon = null, children, }) => {
    return (jsxs(ButtonWrapper, { children: [!!icon && (jsx(IconWrapper$1, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size }, { children: icon }), variant)), jsx(ButtonContainer, Object.assign({ "$variant": variant, type: type, onClick: onClick, "$size": size, "$outlined": outlined, disabled: disabled, icon: !!icon }, { children: jsx(ChildrenWrapper, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size }, { children: children }), variant) }), void 0)] }, void 0));
};

function getBackground({ $disabled }) {
    return $disabled ? COLORS.alabster : COLORS.white;
}
function getStroke({ $disabled, $variant, }) {
    switch ($variant) {
        case 'primary':
            return COLORS.white;
        case 'error':
            return COLORS.carnation;
        case 'default':
        default:
            return $disabled ? COLORS.silverChalice : COLORS.black;
    }
}
function getCheckedBackground$1({ $disabled, $variant, }) {
    switch ($variant) {
        case 'primary':
            return $disabled ? PRIMARY_GRADIENT : undefined;
        case 'default':
        default:
            return undefined;
    }
}
function getBorderColor$1({ $variant }) {
    switch ($variant) {
        case 'error':
            return COLORS.carnation;
        case 'primary':
        case 'default':
        default:
            return COLORS.mischa;
    }
}
function getLabelColor$1({ $disabled, $variant, }) {
    switch ($variant) {
        case 'error':
            return COLORS.carnation;
        case 'primary':
        case 'default':
        default:
            return $disabled ? COLORS.silverChalice : COLORS.black;
    }
}
function getFocusedBorderColor({ $variant }) {
    switch ($variant) {
        case 'default':
        case 'primary':
            return COLORS.havelockBlue;
        default:
            return false;
    }
}
const Container$2 = styled.label `
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
`;
const Square = styled.span `
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;
const Input$2 = styled.input `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  appearance: none;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  ${props => props.$variant === 'default' &&
    `
    &:hover:not(:disabled) + span {
      border-color: ${getFocusedBorderColor(props)};  
    }
  `}

  &:focus + span {
    border-color: ${getFocusedBorderColor};
  }

  &:checked + span {
    background: ${getCheckedBackground$1};

    ${props => props.$variant === 'primary' &&
    props.$disabled &&
    `
      border-width: 0;
      opacity: 0.5;
    `}
  }

  ${props => props.$variant === 'primary' &&
    `
      &:hover + span::before,
      &:focus + span::before {
        transform: scale(0.95);
      }
    `}

  &:checked + span::before {
    visibility: hidden;
  }

  &:checked ~ svg {
    opacity: 1;
    transform: none;
  }
`;
const Svg = styled.svg `
  z-index: 1;
  position: relative;
  opacity: 0;
  transform: scale(0.5);
  transition: transform 120ms ease;
  pointer-events: none;
`;
const Checkmark = styled.path `
  stroke: ${getStroke};
`;
const SquareBorder = styled.span `
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${getBorderColor$1};
  border-radius: 4px;
  background: ${getBackground};

  ${props => props.$variant === 'primary' &&
    !props.$disabled &&
    `
    border-width: 0;
    background: ${PRIMARY_GRADIENT};
  `}

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 3px;
    background: ${getBackground};
    transition: transform 120ms ease-out;
  }
`;
const Text$1 = styled.span `
  display: block;
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor$1};
`;
const Checkbox = ({ required, disabled = false, defaultChecked, checked, variant = 'default', id, name, className, label, onChange, }) => {
    function getDerivedId() {
        if (id)
            return id;
        if (label && name)
            return name;
        if (typeof label === 'string')
            return label;
        return Math.random().toString();
    }
    const derivedId = getDerivedId();
    return (jsxs(Container$2, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxs(Square, { children: [jsx(Input$2, { "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: defaultChecked, checked: checked, type: "checkbox", id: derivedId, name: name, onChange: onChange }, void 0), jsx(SquareBorder, { "$disabled": disabled, "$variant": variant }, void 0), jsx(Svg, Object.assign({ width: "13", height: "10", viewBox: "0 0 13 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsx(Checkmark, { "$disabled": disabled, "$variant": variant, d: "M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }), void 0)] }, void 0), !!label && (jsx(Text$1, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: label }), void 0))] }), void 0));
};

function getCheckedBackground({ $variant, }) {
    switch ($variant) {
        case 'primary':
            return COLORS.white;
        case 'error':
            return COLORS.carnation;
        case 'default':
        default:
            return COLORS.charade;
    }
}
function getBorderColor({ $variant, }) {
    switch ($variant) {
        case 'error':
            return COLORS.carnation;
        case 'primary':
        case 'default':
        default:
            return COLORS.mischa;
    }
}
function getOutlerCircleBackground({ $variant, }) {
    switch ($variant) {
        case 'primary':
            return PRIMARY_GRADIENT;
        case 'default':
        default:
            return COLORS.white;
    }
}
function getInnerCircleBackgroundColor({ $variant, }) {
    switch ($variant) {
        case 'primary':
            return COLORS.white;
        case 'error':
            return undefined;
        case 'default':
        default:
            return undefined;
    }
}
function getLabelColor({ $disabled, $variant, }) {
    switch ($variant) {
        case 'error':
            return COLORS.carnation;
        case 'primary':
        case 'default':
        default:
            return $disabled ? COLORS.silverChalice : COLORS.black;
    }
}
const Container$1 = styled.label `
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
`;
const OuterCircle = styled.span `
  z-index: 1;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${getOutlerCircleBackground};

  ${props => props.$variant === 'primary' &&
    `
    opacity: ${props.$disabled ? 0.5 : 1};
  `}
`;
const InnerCircle = styled.span `
  z-index: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border: 1px solid ${getBorderColor};
  border-radius: 50%;
  background-color: ${getInnerCircleBackgroundColor};
  transition: transform 120ms ease-out;

  ${props => props.$variant === 'primary' &&
    `
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-width: 0;
  `}

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    border-radius: 50%;
    opacity: 0;
    background-color: ${getCheckedBackground};
    transform: scale(0.25);
    transition: transform 120ms ease;
  }
`;
const Input$1 = styled.input `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  appearance: none;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  &:checked + span::before {
    opacity: 1;
    transform: none;
  }

  ${props => props.$variant === 'default' &&
    `
    &:hover:not(:disabled):not(:checked) + span,
    &:focus:not(:disabled):not(:checked) + span {
      border-color: ${COLORS.havelockBlue};
    }
  `}

  ${props => props.$variant === 'primary' &&
    `
      &:hover:not(:disabled):not(:checked) + span,
      &:focus:not(:disabled):not(:checked) + span {
        transform: scale(0.95);
      }

      &:checked + span {
        background-color: transparent;
      }
  `}
`;
const Text = styled.span `
  display: block;
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor};
`;
const RadioButton = ({ required, disabled = false, defaultChecked, checked, variant = 'default', id, name, label, className, onChange, }) => {
    function getDerivedId() {
        if (id)
            return id;
        if (label && name)
            return name;
        if (typeof label === 'string')
            return label;
        return Math.random().toString();
    }
    const derivedId = getDerivedId();
    return (jsxs(Container$1, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxs(OuterCircle, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: [jsx(Input$1, { "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: defaultChecked, checked: checked, type: "radio", id: derivedId, name: name, onChange: onChange }, void 0), jsx(InnerCircle, { "$variant": variant }, void 0)] }), void 0), !!label && (jsx(Text, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: label }), void 0))] }), void 0));
};

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-check' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3e %3cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3e %3ccircle cx='12' cy='12' r='9' /%3e %3cpath d='M9 12l2 2l4 -4' /%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-alert-triangle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3e %3cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3e %3cpath d='M12 9v2m0 4v.01' /%3e %3cpath d='M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75' /%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3e %3cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3e %3ccircle cx='12' cy='12' r='9' /%3e %3cpath d='M10 10l4 4m0 -4l-4 4' /%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-mail' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3e %3cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3e %3crect x='3' y='5' width='18' height='14' rx='2' /%3e %3cpolyline points='3 7 12 13 21 7' /%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3e %3cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3e %3ccircle cx='10' cy='10' r='7' /%3e %3cline x1='21' y1='21' x2='15' y2='15' /%3e%3c/svg%3e";

const animateIcon = keyframes `
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  100% {
    tansform: none;
    opacity: 1;
  }
`;
const animateHelperText = keyframes `
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
function getVariantColor({ $variant }) {
    switch ($variant) {
        case 'success':
            return COLORS.emerald;
        case 'warning':
            return COLORS.yellowOrange;
        case 'error':
            return COLORS.carnation;
        case 'default':
        default:
            return COLORS.mischa;
    }
}
function getIconColor({ $variant }) {
    switch ($variant) {
        case 'success':
            return COLORS.emerald;
        case 'warning':
            return COLORS.yellowOrange;
        case 'error':
            return COLORS.carnation;
        case 'default':
        default:
            return COLORS.black;
    }
}
function getIconSize({ $size }) {
    switch ($size) {
        case 'large':
            return 24;
        case 'medium':
        default:
            return 20;
    }
}
function getIconRight({ $size, $iconAlign, }) {
    switch ($iconAlign) {
        case 'right': {
            switch ($size) {
                case 'large':
                    return 24;
                case 'medium':
                default:
                    return 16;
            }
        }
        case 'left':
        default:
            return 0;
    }
}
function getIconLeft({ $size, $iconAlign, }) {
    switch ($iconAlign) {
        case 'right':
            return 0;
        case 'left':
        default:
            switch ($size) {
                case 'large':
                    return 24;
                case 'medium':
                default:
                    return 16;
            }
    }
}
function getPadding({ $size }) {
    switch ($size) {
        case 'large':
            return '16px 24px';
        case 'medium':
        default:
            return '8px 16px';
    }
}
function getPaddingRight({ $size, $iconAlign, }) {
    switch ($iconAlign) {
        case 'right':
            return getIconSize({ $size }) + getIconRight({ $size, $iconAlign }) * 1.5;
        case 'left':
        default:
            switch ($size) {
                case 'large':
                    return 24;
                case 'medium':
                default:
                    return 16;
            }
    }
}
function getPaddingLeft({ $size, $iconAlign, }) {
    switch ($iconAlign) {
        case 'right':
            switch ($size) {
                case 'large':
                    return 24;
                case 'medium':
                default:
                    return 16;
            }
        case 'left':
        default:
            return getIconSize({ $size }) + getIconLeft({ $size, $iconAlign }) * 1.5;
    }
}
function getInputHeight({ $size }) {
    switch ($size) {
        case 'large':
            return 56;
        case 'medium':
        default:
            return 40;
    }
}
function getInputFontSize({ $size }) {
    switch ($size) {
        case 'large':
            return 18;
        case 'medium':
        default:
            return 16;
    }
}
function getInputLineHeight({ $size }) {
    switch ($size) {
        case 'large':
            return 1.1667; // 21px
        case 'medium':
        default:
            return 1.1875; // 19px
    }
}
function getFocusBorderColor({ $variant }) {
    switch ($variant) {
        case 'default':
            return COLORS.havelockBlue;
        default:
            return false;
    }
}
const Container = styled.div `
  display: flex;
  flex-direction: column;
`;
const Label = styled.label `
  display: block;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const InputWrapper = styled.div `
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input `
  display: flex;
  align-items: center;
  height: ${getInputHeight}px;
  margin: 0;
  padding: ${getPadding};
  box-sizing: border-box;
  border: 1px solid ${getVariantColor};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  transition: border-color 140ms ease-in;

  ${props => props.$icon &&
    `
      padding-right: ${getPaddingRight(props)}px;
      padding-left: ${getPaddingLeft(props)}px;
    `}

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  ${props => props.$variant === 'default' &&
    `
    &:placeholder-shown + div {
      color: ${COLORS.mischa};
    }
  `}

  &,
  &::placeholder {
    font-size: ${getInputFontSize}px;
    line-height: ${getInputLineHeight}em;
    font-weight: 400;
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }

  &::-webkit-search-decoration {
    display: none;
  }
`;
const IconWrapper = styled.div `
  z-index: 1;
  position: absolute;
  top: 0;
  right: ${props => {
    const right = getIconRight(props);
    return right ? `${right}px` : 'auto';
}};
  bottom: 0;
  left: ${props => {
    const left = getIconLeft(props);
    return left ? `${left}px` : 'auto';
}};
  display: flex;
  align-items: center;
  color: ${getIconColor};
  transition: color 280ms ease;

  ${props => props.$animate &&
    css `
      animation: ${animateIcon} 280ms ease;
    `}

  & svg {
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
`;
const HelperText = styled.span `
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor};
  transition: color 280ms ease;

  ${props => props.$animate &&
    css `
      animation: ${animateHelperText} 280ms ease;
    `}
`;
const TextField = ({ required, disabled, variant = 'default', id, name, type = 'text', className, size = 'medium', label, value, placeholder, helperText, iconAlign, icon, onChange, }) => {
    const didMountRef = useRef(false);
    useEffect(() => {
        didMountRef.current = true;
    }, []);
    function getDerivedIcon() {
        switch (variant) {
            case 'success':
                return jsx(img$4, { viewBox: "0 0 24 24" }, void 0);
            case 'warning':
                return jsx(img$3, { viewBox: "0 0 24 24" }, void 0);
            case 'error':
                return jsx(img$2, { viewBox: "0 0 24 24" }, void 0);
            case 'default':
            default: {
                if (icon)
                    return icon;
                if (type === 'email')
                    return jsx(img$1, { viewBox: "0 0 24 24" }, void 0);
                if (type === 'search')
                    return jsx(img, { viewBox: "0 0 24 24" }, void 0);
                return undefined;
            }
        }
    }
    function getDerivedId() {
        if (id)
            return id;
        if (label && name)
            return name;
        if (label)
            return label;
        return Math.random().toString();
    }
    function getDerivedIconAlign() {
        if (type === 'email')
            return 'right';
        return variant === 'default' ? iconAlign : 'right';
    }
    const derivedId = getDerivedId();
    const derivedIcon = getDerivedIcon();
    const derivedIconAlign = getDerivedIconAlign();
    return (jsxs(Container, Object.assign({ "$variant": variant, "$disabled": disabled, "$size": size, className: className }, { children: [!!label && jsx(Label, Object.assign({ htmlFor: derivedId }, { children: label }), void 0), jsxs(InputWrapper, { children: [jsx(Input, { "$icon": !!derivedIcon, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, required: required, disabled: disabled, type: type, id: derivedId, name: name, value: value, placeholder: placeholder, onChange: onChange }, void 0), !!derivedIcon && (jsx(IconWrapper, Object.assign({ "$animate": didMountRef.current, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign }, { children: derivedIcon }), variant))] }, void 0), !!helperText && (jsx(HelperText, Object.assign({ "$animate": didMountRef.current, "$variant": variant }, { children: helperText }), void 0))] }), void 0));
};

export { Button, Checkbox, GlobalStyle, RadioButton, TextField, globalStyle };
