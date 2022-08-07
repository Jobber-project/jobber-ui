import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { forwardRef, useRef, useEffect, useState, cloneElement, memo, createContext, useContext, useCallback, useMemo, useImperativeHandle } from 'react';
import RCSlider from 'rc-slider';
import { createPortal } from 'react-dom';

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
    royalBlue: '#586EE0',
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
    razzleDazzleRose: '#F22CCD',
    wildStrawberry: '#FF4591',
    salmon: '#FF8761',
    selago: '#F5F6FD',
    linkWater: '#EBEEFB',
    governorBay: '#3A52BF',
    primaryGradient: `linear-gradient(90deg, #8d49f7, #5971dd)`,
    secondaryGradient: `linear-gradient(90deg, #ffc600, #ff9e2c)`,
};

const animation = keyframes `
  0% {
    transform: rotate(0deg);
  }
  
  0% {
    transform: rotate(-360deg);
  }
`;
const Container$7 = styled.span `
  z-index: 1;
  position: relative;
  display: inline-block;
`;
const Circle$1 = styled.circle `
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
const BackgroundCircle = styled(Circle$1) `
  opacity: 0.2;
`;
const ForegroundCircle = styled(Circle$1) `
  transform: none;
  animation: ${animation} 1.25s infinite linear;
`;
function getDerivedSize(size) {
    switch (size) {
        case 'large':
            return 100;
        case 'small':
            return 25;
        case 'medium':
        default:
            return 50;
    }
}
function getStrokeWidth(size) {
    switch (size) {
        case 'large':
            return 10;
        case 'small':
            return 2.5;
        case 'medium':
        default:
            return 5;
    }
}
const Spinner = ({ size = 'medium', color = COLORS.emerald, className, children, }) => {
    const derivedSize = getDerivedSize(size);
    const strokeWidth = getStrokeWidth(size);
    const radius = derivedSize / 2 - strokeWidth;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (25 / 100) * circumference;
    return (jsxs(Container$7, Object.assign({ className: className }, { children: [jsxs("svg", Object.assign({ width: derivedSize - strokeWidth, height: derivedSize - strokeWidth }, { children: [jsx(BackgroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference - 1 * circumference, r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }, void 0), jsx(ForegroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset, strokeLinecap: "round", r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }, void 0)] }), void 0), children] }), void 0));
};

function getIconSize$2({ $size }) {
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
            return COLORS.primaryGradient;
        case 'secondary':
            return COLORS.secondaryGradient;
        case 'success':
            return COLORS.emerald;
        case 'warning':
            return COLORS.yellowOrange;
        case 'error':
            return COLORS.carnation;
        case 'coach':
            return COLORS.royalBlue;
        default:
            return COLORS.white;
    }
}
function getTextColor({ $variant, $outlined, }) {
    switch ($variant) {
        case 'secondary':
            return $outlined ? COLORS.sunshade : COLORS.persianIndigo;
        case 'primary':
            return $outlined ? COLORS.electricViolet : COLORS.white;
        case 'success':
            return $outlined ? COLORS.emerald : COLORS.white;
        case 'warning':
            return $outlined ? COLORS.yellowOrange : COLORS.white;
        case 'error':
            return $outlined ? COLORS.carnation : COLORS.white;
        case 'coach':
            return $outlined ? COLORS.royalBlue : COLORS.white;
        case 'default':
        default:
            return COLORS.charade;
    }
}
function getSpinnerColor({ $variant, $outlined, $spinnerColor, }) {
    return $spinnerColor !== null && $spinnerColor !== void 0 ? $spinnerColor : getTextColor({ $variant, $outlined });
}
function getIconColor$1({ $variant, $outlined, }) {
    switch ($variant) {
        case 'secondary':
            return $outlined ? COLORS.sunshade : COLORS.persianIndigo;
        case 'primary':
            return $outlined ? COLORS.electricViolet : COLORS.white;
        case 'coach':
            return $outlined ? COLORS.royalBlue : COLORS.white;
        case 'default':
        default:
            return COLORS.mischa;
    }
}
function getIconLeftPosition({ $size }) {
    switch ($size) {
        case 'large':
            return 24;
        case 'medium':
        default:
            return 20;
    }
}
function getIconFluidStyling({ $size, fluid, }) {
    if (!fluid)
        return `padding-right: 8px;`;
    return `
    position: absolute;
    left: ${getIconLeftPosition({ $size })}px;
  `;
}
const IconWrapper$2 = styled.div `
  line-height: 0;
  z-index: 2;
  pointer-events: none;

  ${getIconFluidStyling}
  color: ${getIconColor$1};

  & svg {
    width: ${getIconSize$2}px;
    height: ${getIconSize$2}px;
  }
`;
const InnerWrapper = styled.span `
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const ChildrenWrapper = styled.span `
  z-index: 2;
  color: ${getTextColor};
  ${props => props.$loading && 'opacity: 0;'}
`;
const StyledSpinner = styled(Spinner).attrs(props => ({
    color: getSpinnerColor(props),
})) `
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function getOutlinedStyles({ $outlined }) {
    return ($outlined &&
        `
    display: flex;
    z-index: 1;
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
function getFilledHoverStyles({ $variant, $outlined, $loading, }) {
    if ($outlined || $loading)
        return '';
    if ($variant === 'coach')
        return `
      &:hover {
        background-color: ${COLORS.havelockBlue};
      }
    `;
    return `
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
  `;
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
function getDisabledStyle({ disabled, $loading, }) {
    if ($loading) {
        return `
      cursor: not-allowed! important;
    `;
    }
    return disabled
        ? `
    background: ${COLORS.alabster};
    color: ${COLORS.silverChalice};
    border: 1px solid ${COLORS.mischa};
    cursor: not-allowed! important;
  `
        : '';
}
function getBorderStyle({ $outlined, $variant, }) {
    switch ($variant) {
        case 'default':
            return $outlined
                ? `
        border: 1px solid ${COLORS.mischa};
      `
                : '';
        default:
            return '';
    }
}
const ButtonContainer = styled.button `
  cursor: pointer;
  position: relative;
  display: flex;

  ${props => props.fluid && 'width: 100%'};
  align-items: center;
  justify-content: center;
  appearance: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  border: none;
  box-sizing: border-box;
  text-decoration: none;

  background: ${getBackgroundColor};

  color: ${getTextColor};

  ${getSizes}

  ${getIconStyles};

  ${getOutlinedStyles};

  ${getFilledHoverStyles};

  ${getBorderStyle};

  ${getDisabledStyle};
`;
const Button = forwardRef(({ variant = 'default', type = 'button', onClick, size = 'medium', className, outlined = false, disabled = false, fluid = false, loading = false, icon = null, spinnerColor, href, as, target, download, children, }, ref) => {
    // Styled-components TS as prop workaround
    const Component = ButtonContainer;
    const isLink = as === 'a';
    return (jsx("div", { children: jsxs(Component, Object.assign({ ref: ref, className: className, "$variant": variant, type: isLink ? undefined : type, onClick: onClick, "$size": size, "$outlined": outlined, disabled: disabled, icon: !!icon, fluid: fluid, "$loading": loading, href: isLink ? href : undefined, download: isLink ? download : undefined, as: as, target: isLink ? target : undefined }, { children: [!!icon && (jsx(IconWrapper$2, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size, fluid: fluid }, { children: icon }), `${variant}-icon-wrapper`)), jsx(ChildrenWrapper, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size, "$loading": loading }, { children: children }), `${variant}-children-wrapper`), loading && (jsx(InnerWrapper, { children: jsx(StyledSpinner, { "$variant": variant, "$outlined": outlined, "$spinnerColor": spinnerColor, size: "small" }, void 0) }, void 0))] }), void 0) }, void 0));
});
Button.displayName = 'Button';

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
            return $disabled ? COLORS.primaryGradient : undefined;
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
const Container$6 = styled.label `
  display: inline-flex;
  flex-direction: ${props => (props.$flipped ? 'row-reverse' : 'row')};
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
    background: ${COLORS.primaryGradient};
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
const Text$2 = styled.span `
  display: block;
  margin-right: ${props => (props.$flipped ? 8 : 0)}px;
  margin-left: ${props => (props.$flipped ? 0 : 8)}px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor$1};
`;
const Checkbox = ({ required, disabled = false, defaultChecked, checked, flipped = false, value, variant = 'default', id, name, className, label, onChange, }, ref) => {
    function getDerivedId() {
        if (id)
            return id;
        if (label && name)
            return name;
        if (typeof label === 'string')
            return label;
        return Math.random().toString();
    }
    function getDerivedDefaultChecked() {
        if (typeof value === 'string' && value.length > 0) {
            return value === 'on';
        }
        return defaultChecked;
    }
    function getDerivedChecked() {
        if (typeof value === 'string' && value.length > 0) {
            return value === 'on';
        }
        return checked;
    }
    const derivedId = getDerivedId();
    const derivedDefaultChecked = getDerivedDefaultChecked();
    const derivedChecked = getDerivedChecked();
    return (jsxs(Container$6, Object.assign({ "$disabled": disabled, "$flipped": flipped, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxs(Square, { children: [jsx(Input$2, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: derivedDefaultChecked, checked: derivedChecked, value: value, type: "checkbox", id: derivedId, name: name, onChange: onChange }, void 0), jsx(SquareBorder, { "$disabled": disabled, "$variant": variant }, void 0), jsx(Svg, Object.assign({ width: "13", height: "10", viewBox: "0 0 13 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsx(Checkmark, { "$disabled": disabled, "$variant": variant, d: "M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }), void 0)] }, void 0), !!label && (jsx(Text$2, Object.assign({ "$disabled": disabled, "$flipped": flipped, "$variant": variant }, { children: label }), void 0))] }), void 0));
};
const ForwardedCheckbox = forwardRef(Checkbox);

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
            return COLORS.primaryGradient;
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
const Container$5 = styled.label `
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
const Text$1 = styled.span `
  display: block;
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor};
`;
const RadioButton = ({ required, disabled = false, defaultChecked, checked, variant = 'default', id, name, label, value, className, onChange, }, ref) => {
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
    return (jsxs(Container$5, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxs(OuterCircle, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: [jsx(Input$1, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: defaultChecked, checked: checked, type: "radio", id: derivedId, name: name, value: value, onChange: onChange }, void 0), jsx(InnerCircle, { "$variant": variant }, void 0)] }), void 0), !!label && (jsx(Text$1, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: label }), void 0))] }), void 0));
};
const ForwardedRadioButton = forwardRef(RadioButton);

var _path$a, _circle$3, _path2$a;

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

var SvgCircleCheck = function SvgCircleCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
    xmlns: "http://www.w3.org/2000/svg",
    className: "circle-check_svg__icon circle-check_svg__icon-tabler circle-check_svg__icon-tabler-circle-check",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _circle$3 || (_circle$3 = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 9
  })), _path2$a || (_path2$a = /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })));
};

var _path$9, _path2$9;

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

var SvgAlertTriangle = function SvgAlertTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
    xmlns: "http://www.w3.org/2000/svg",
    className: "alert-triangle_svg__icon alert-triangle_svg__icon-tabler alert-triangle_svg__icon-tabler-alert-triangle",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2$9 || (_path2$9 = /*#__PURE__*/React.createElement("path", {
    d: "M12 9v2m0 4v.01M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"
  })));
};

var _path$8, _circle$2, _path2$8;

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var SvgCircleX = function SvgCircleX(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    xmlns: "http://www.w3.org/2000/svg",
    className: "circle-x_svg__icon circle-x_svg__icon-tabler circle-x_svg__icon-tabler-circle-x",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _circle$2 || (_circle$2 = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 9
  })), _path2$8 || (_path2$8 = /*#__PURE__*/React.createElement("path", {
    d: "m10 10 4 4m0-4-4 4"
  })));
};

var _path$7, _rect, _path2$7;

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

var SvgMail = function SvgMail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    className: "mail_svg__icon mail_svg__icon-tabler mail_svg__icon-tabler-mail",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    x: 3,
    y: 5,
    width: 18,
    height: 14,
    rx: 2
  })), _path2$7 || (_path2$7 = /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })));
};

var _path$6, _circle$1, _path2$6;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    className: "search_svg__icon search_svg__icon-tabler search_svg__icon-tabler-search",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _circle$1 || (_circle$1 = /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 7
  })), _path2$6 || (_path2$6 = /*#__PURE__*/React.createElement("path", {
    d: "m21 21-6-6"
  })));
};

function usePrevious(value) {
    const ref = useRef(value);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

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
const animateHelperText$1 = keyframes `
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
function getVariantColor$1({ $variant }) {
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
function getIconSize$1({ $size }) {
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
            return getIconSize$1({ $size }) + getIconRight({ $size, $iconAlign }) * 1.5;
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
            return getIconSize$1({ $size }) + getIconLeft({ $size, $iconAlign }) * 1.5;
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
function getFocusBorderColor$1({ $variant }) {
    switch ($variant) {
        case 'default':
            return COLORS.havelockBlue;
        default:
            return false;
    }
}
const Container$4 = styled.div `
  display: flex;
  flex-direction: column;
`;
const Label$1 = styled.label `
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
  border: 1px solid ${getVariantColor$1};
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
    border-color: ${getFocusBorderColor$1};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  ${props => props.$variant === 'default' &&
    `
    &:placeholder-shown + div {
      color: ${COLORS.silverChalice};
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
const IconWrapper$1 = styled.div `
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
    width: ${getIconSize$1}px;
    height: ${getIconSize$1}px;
  }
`;
const HelperText$1 = styled.span `
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor$1};
  transition: color 280ms ease;

  ${props => props.$animate &&
    css `
      animation: ${animateHelperText$1} 280ms ease;
    `}
`;
const TextField = ({ required, disabled, autoFocus, variant = 'default', id, name, type = 'text', className, size = 'medium', label, value, placeholder, helperText, ariaLabel, iconAlign = 'left', icon, onChange, }, ref) => {
    const prevVariant = usePrevious(variant);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    function getDerivedIcon() {
        switch (variant) {
            case 'success':
                return jsx(SvgCircleCheck, { viewBox: "0 0 24 24" }, void 0);
            case 'warning':
                return jsx(SvgAlertTriangle, { viewBox: "0 0 24 24" }, void 0);
            case 'error':
                return jsx(SvgCircleX, { viewBox: "0 0 24 24" }, void 0);
            case 'default':
            default: {
                if (icon)
                    return icon;
                if (type === 'email')
                    return jsx(SvgMail, { viewBox: "0 0 24 24" }, void 0);
                if (type === 'search')
                    return jsx(SvgSearch, { viewBox: "0 0 24 24" }, void 0);
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
        if (type === 'email' && !icon)
            return 'right';
        return variant === 'default' ? iconAlign : 'right';
    }
    function handleAnimationEnd() {
        if (shouldAnimate)
            setShouldAnimate(false);
    }
    useEffect(() => {
        if (variant !== prevVariant && !shouldAnimate) {
            setShouldAnimate(true);
        }
    }, [variant, prevVariant, shouldAnimate]);
    const derivedId = getDerivedId();
    const derivedIcon = getDerivedIcon();
    const derivedIconAlign = getDerivedIconAlign();
    return (jsxs(Container$4, Object.assign({ "$variant": variant, "$disabled": disabled, "$size": size, className: className }, { children: [!!label && jsx(Label$1, Object.assign({ htmlFor: derivedId }, { children: label }), void 0), jsxs(InputWrapper, { children: [jsx(Input, { ref: ref, "$icon": !!derivedIcon, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, required: required, disabled: disabled, autoFocus: autoFocus, type: type, id: derivedId, name: name, value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChange }, void 0), !!derivedIcon && (jsx(IconWrapper$1, Object.assign({ "$animate": shouldAnimate, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, onAnimationEnd: handleAnimationEnd }, { children: derivedIcon }), variant))] }, void 0), !!helperText && (jsx(HelperText$1, Object.assign({ "$animate": shouldAnimate, "$variant": variant, onAnimationEnd: handleAnimationEnd }, { children: helperText }), void 0))] }), void 0));
};
const ForwardedTextField = forwardRef(TextField);

var _path$5, _path2$5, _circle;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var SvgCamera = function SvgCamera(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    className: "camera_svg__icon camera_svg__icon-tabler camera_svg__icon-tabler-camera",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    d: "M5 7h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
  })), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 13,
    r: 3
  })));
};

const getTextSize = ({ size }) => {
    switch (size) {
        case 'small':
            return 16;
        case 'medium':
            return 20;
        case 'large':
            return 36;
        case 'xlarge':
            return 72;
        default:
            return 20;
    }
};
const getIcon$1 = (icon) => {
    switch (icon) {
        case 'camera':
        default:
            return jsx(SvgCamera, { height: "16px", width: "16", viewBox: "0 0 24 24" }, void 0);
    }
};
const getIconSize = ({ size }) => {
    switch (size) {
        case 'small':
        case 'medium':
        case 'large':
        case 'xlarge':
        default:
            return 20;
    }
};
const getCircleSize = ({ size }) => {
    switch (size) {
        case 'small':
            return 32;
        case 'medium':
            return 40;
        case 'large':
            return 72;
        case 'xlarge':
            return 144;
        default:
            return 40;
    }
};
const getColorFromId = ({ id, $disabled }) => {
    if ($disabled)
        return COLORS.mischa;
    const firstValueFromId = (id === null || id === void 0 ? void 0 : id.substring(0, 1)) || id;
    const generatedNumber = firstValueFromId === null || firstValueFromId === void 0 ? void 0 : firstValueFromId.charCodeAt(0);
    const colorNumber = generatedNumber % 4;
    switch (colorNumber) {
        case 0:
            return `${COLORS.razzleDazzleRose}`;
        case 1:
            return `${COLORS.cornflowerBlue}`;
        case 2:
            return `${COLORS.wildStrawberry}`;
        case 3:
            return `${COLORS.salmon}`;
        default:
            return `${COLORS.mischa}`;
    }
};
const AvatarWrapper = styled.div `
  position: relative;
`;
const Circle = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${getCircleSize}px;
  height: ${getCircleSize}px;
  border-radius: 50%;
  background-color: ${getColorFromId};
`;
const Image = styled.img `
  width: 100%;
  height: 100%;
`;
const Text = styled.p `
  margin: 0;
  font-size: ${getTextSize}px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: ${props => props.id || props.$disabled ? COLORS.white : COLORS.charade};
`;
const ButtonWrapper = styled.button `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const IconWrapper = styled.div `
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  width: ${getIconSize}px;
  height: ${getIconSize}px;
  border: 1px solid ${COLORS.mischa};
`;
const Icon = ({ icon, onClick, size }) => {
    return (jsx(ButtonWrapper, Object.assign({ onClick: onClick }, { children: jsx(IconWrapper, Object.assign({ size: size }, { children: getIcon$1(icon) }), void 0) }), void 0));
};
const Avatar = ({ src, name = 'N N', id, size, className, disabled = false, onClick, icon, }) => {
    const initials = name
        .toUpperCase()
        .split(' ')
        .slice(0, 2)
        .map(n => n[0])
        .join('');
    return (jsxs(AvatarWrapper, { children: [jsx(Circle, Object.assign({ size: size, id: id, className: className, "$disabled": disabled }, { children: src ? (jsx(Image, { src: src, alt: 'Avatar' }, void 0)) : (jsx(Text, Object.assign({ "$disabled": disabled, id: id, size: size }, { children: initials }), void 0)) }), void 0), icon && size === 'large' && (jsx(Icon, { size: size, onClick: onClick, icon: icon }, void 0))] }, void 0));
};

var _path$4, _path2$4;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-up_svg__icon chevron-up_svg__icon-tabler chevron-up_svg__icon-tabler-chevron-up",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    d: "m6 15 6-6 6 6"
  })));
};

var _path$3, _path2$3;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-right_svg__icon chevron-right_svg__icon-tabler chevron-right_svg__icon-tabler-chevron-right",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })));
};

var _path$2, _path2$2;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-down_svg__icon chevron-down_svg__icon-tabler chevron-down_svg__icon-tabler-chevron-down",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
};

var _path$1, _path2$1;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-left_svg__icon chevron-left_svg__icon-tabler chevron-left_svg__icon-tabler-chevron-left",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "m15 6-6 6 6 6"
  })));
};

const Container$3 = styled.div `
  width: ${props => (props.$vertical ? 42 : 89)}px;
  height: ${props => (props.$vertical ? 89 : 42)}px;
  background-color: ${COLORS.white};
  border-radius: 21px;
`;
const Pill = styled.div `
  display: flex;
  flex-direction: ${props => (props.$vertical ? 'column' : 'row')};
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 21px;
`;
const PillHalf = styled.button `
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.$vertical ? '100%' : '44px')};
  height: ${props => (props.$vertical ? '44px' : '100%')};
  color: ${COLORS.white};
  background: linear-gradient(
    ${props => (props.$vertical ? 90 : 0)}deg,
    ${COLORS.cornflowerBlue},
    ${COLORS.electricViolet}
  );

  &:first-child {
    border-top-left-radius: 21px;
    ${props => props.$vertical
    ? `
    border-top-right-radius: 21px;
    `
    : `
    border-bottom-left-radius: 21px;
    `}
  }

  &:last-child {
    border-bottom-right-radius: 21px;
    ${props => props.$vertical
    ? `
    border-bottom-left-radius: 21px;
    `
    : `
    border-top-right-radius: 21px;
    `}
  }

  & svg {
    transform: scale(0.83);
  }
`;
const HiddenText = styled.span `
  z-index: -1;
  position: absolute;
  color: transparent;
  user-select: none;
`;
const Horizontal = ({ className, onLeftButtonClick, onRightButtonClick, }) => {
    return (jsx(Container$3, Object.assign({ className: className }, { children: jsxs(Pill, { children: [jsxs(PillHalf, Object.assign({ type: "button", "aria-label": "Left", onClick: onLeftButtonClick }, { children: [jsx(SvgChevronLeft, {}, void 0), jsx(HiddenText, { children: "Left" }, void 0)] }), void 0), jsxs(PillHalf, Object.assign({ type: "button", "aria-label": "Right", onClick: onRightButtonClick }, { children: [jsx(SvgChevronRight, {}, void 0), jsx(HiddenText, { children: "Right" }, void 0)] }), void 0)] }, void 0) }), void 0));
};
const Vertical = ({ className, onTopButtonClick, onBottomButtonClick, }) => {
    return (jsx(Container$3, Object.assign({ "$vertical": true, className: className }, { children: jsxs(Pill, Object.assign({ "$vertical": true }, { children: [jsxs(PillHalf, Object.assign({ "$vertical": true, type: "button", "aria-label": "Up", onClick: onTopButtonClick }, { children: [jsx(SvgChevronUp, {}, void 0), jsx(HiddenText, { children: "Up" }, void 0)] }), void 0), jsxs(PillHalf, Object.assign({ "$vertical": true, type: "button", "aria-label": "Down", onClick: onBottomButtonClick }, { children: [jsx(SvgChevronDown, {}, void 0), jsx(HiddenText, { children: "Down" }, void 0)] }), void 0)] }), void 0) }), void 0));
};

var Switcher = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Horizontal: Horizontal,
  Vertical: Vertical
});

const SliderWrapper = styled.div `
  display: flex;
  width: 100%;
  .rc-slider {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
  }
  .rc-slider-rail {
    height: 2px;
    position: absolute;
    width: calc(100% - 4px);
    z-index: 0;
    background-color: #e9e9e9;
    border-radius: 6px;
  }
  .rc-slider-track {
    height: 2px;
    z-index: 1;
    background-color: ${COLORS.royalBlue};
  }
  .rc-slider-handle {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    top: 0;
    margin: 0;
    border: none;
    box-shadow: none;
    border-color: ${COLORS.royalBlue};
    background-color: ${COLORS.royalBlue};
    opacity: 1;
  }

  .rc-slider-handle-dragging {
    border: none;
    box-shadow: none;
  }

  .rc-slider-disabled {
    * {
      background-color: #e9e9e9;
    }
  }
`;
const Slider = ({ disabled, onChange, min = 0, max = 100, step = 1, defaultValue, }) => {
    return (jsx(SliderWrapper, { children: jsx(RCSlider, { min: min, max: max, step: step, disabled: disabled, onChange: onChange, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : min }, void 0) }, void 0));
};

const MenuContainer = styled.div `
  position: relative;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in;
`;
const MenuWrapper = styled.div `
  position: absolute;
  z-index: 4;
  top: 10px;
  ${({ $align }) => ($align === 'left' ? 'left: 0;' : 'right: 0;')}
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`;
const MenuItemWrapper = styled.button `
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
`;
const MenuLabel = styled.span `
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  white-space: nowrap;

  transition: color 0.1s ease-in;

  color: ${COLORS.charade};
`;
const MenuIcon = styled.div `
  display: flex;
  flex-direction: center;
  color: ${COLORS.havelockBlue};
  margin-right: 8px;
`;
const Item = ({ isVisible = false, as, className, href, onClick, icon, children, }) => {
    return (jsxs(MenuItemWrapper, Object.assign({ tabIndex: isVisible ? undefined : -1, as: as, className: className, type: as === undefined ? 'button' : undefined, href: as === 'a' ? href : undefined, onClick: onClick }, { children: [icon && jsx(MenuIcon, { children: icon }, void 0), children && jsx(MenuLabel, { children: children }, void 0)] }), void 0));
};
const Menu = ({ className, isVisible, align = 'left', children }, ref) => {
    function getMutableChildrenArray() {
        if (!children) {
            return [];
        }
        if (Array.isArray(children)) {
            return children;
        }
        return [children];
    }
    return (jsx(MenuContainer, Object.assign({ ref: ref, className: className, isVisible: isVisible }, { children: jsx(MenuWrapper, Object.assign({ "$align": align }, { children: getMutableChildrenArray().reduce((acc, child, i) => {
                if (child) {
                    acc.push(cloneElement(child, {
                        key: i,
                        isVisible: isVisible,
                    }));
                }
                return acc;
            }, []) }), void 0) }), void 0));
};
Menu.Item = Item;
const withStaticProps = (forwarded, staticProps) => Object.assign(forwarded, staticProps);
const ForwardedMenu = forwardRef(Menu);
var Menu$1 = withStaticProps(ForwardedMenu, {
    Item,
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var _path, _path2;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var SvgX = function SvgX(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    className: "x_svg__icon x_svg__icon-tabler x_svg__icon-tabler-x",
    width: 24,
    height: 24,
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    stroke: "none"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })));
};

var _g$3;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgInfoCircleFilled = function SvgInfoCircleFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    height: 24,
    width: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$3 || (_g$3 = /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 9h-1l-.117.007A1 1 0 0 0 11 13v3l.007.117A1 1 0 0 0 12 17h1l.117-.007A1 1 0 0 0 14 16l-.007-.117a1 1 0 0 0-.876-.876L13 15v-3l-.007-.117A1 1 0 0 0 12 11zm.01-4-.127.007A1 1 0 0 0 12 9l.127-.007A1 1 0 0 0 12.01 7z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
};

var _g$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgCircleCheckFilled = function SvgCircleCheckFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    height: 24,
    width: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.707 7.293a1 1 0 0 0-1.414 0L11 12.585l-1.293-1.292-.094-.083a1 1 0 0 0-1.32 1.497l2 2 .094.083a1 1 0 0 0 1.32-.083l4-4 .083-.094a1 1 0 0 0-.083-1.32z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
};

var _g$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgAlertTriangleFilled = function SvgAlertTriangleFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    height: 24,
    width: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.99 1.968c1.023 0 1.97.521 2.512 1.359l.103.172 7.1 12.25.062.126a3 3 0 0 1-2.568 4.117L19 20l-14.161-.001a3 3 0 0 1-2.697-3.93l.072-.195.06-.125L9.366 3.516a3 3 0 0 1 2.625-1.548zM12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-6a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 13 11V9l-.007-.117A1 1 0 0 0 12 8z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
};

var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlertCircleFilled = function SvgAlertCircleFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    height: 24,
    width: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.01 13-.127.007A1 1 0 0 0 12 17l.127-.007A1 1 0 0 0 12.01 15zM12 7a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 12V8l-.007-.117A1 1 0 0 0 12 7z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
};

const animateIn = keyframes `
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
  }
`;
const animateInReducedMotion = keyframes `
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const progressOut = keyframes `
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
`;
const Positioner = styled.div `
  z-index: 1;
  position: fixed;
  right: ${props => { var _a; return (_a = props.$left) !== null && _a !== void 0 ? _a : 0; }}px;
  bottom: ${props => { var _a; return (_a = props.$bottom) !== null && _a !== void 0 ? _a : 0; }}px;
  left: ${props => { var _a; return (_a = props.$bottom) !== null && _a !== void 0 ? _a : 0; }}px;
  max-width: 100%;
  opacity: ${props => (props.$closing ? 0 : 1)};
  transition: transform ease 280ms, opacity ease 280ms;
  transform: translateX(${props => (props.$closing ? -100 : 0)}%)
    translateY(${props => -props.$index * 100}%)
    translateY(${props => -props.$index * 10}px);

  @media (prefers-reduced-motion) {
    transform: translateY(${props => -props.$index * 100}%)
      translateY(${props => -props.$index * 10}px);
    transition: opacity ease 280ms;
  }
`;
const ProgressWrapper = styled.span `
  display: block;
  width: 100%;
  height: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`;
const Progress = styled.span `
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$color};
  animation: ${progressOut} ${props => props.$duration}ms linear forwards;
`;
const Container$2 = styled.div `
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  max-width: 427px;
  background-color: ${COLORS.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 5px 50px 10px rgba(0, 0, 0, 0.05);
  animation: ${animateIn} ease 280ms forwards;

  @media (prefers-reduced-motion) {
    animation: ${animateInReducedMotion} ease 280ms forwards;
  }

  &:hover {
    ${Progress} {
      animation-play-state: paused;
    }
  }
`;
const CloseButton = styled.button `
  z-index: 1;
  position: absolute;
  top: 4px;
  right: 4px;
  appearance: none;
  display: block;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: ${COLORS.charade};
`;
const Inner = styled.span `
  display: flex;
  flex-grow: 1;
  padding: 16px 32px 15px 16px;
  box-sizing: border-box;
`;
const InnerLeft = styled.span `
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color};

  & svg {
    margin-right: 16px;
  }
`;
const InnerRight = styled.span `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
`;
const Title = styled.span `
  display: block;
  margin-bottom: 4px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.167em;
  color: ${props => props.$color};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Message = styled.span `
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.167em;
  color: ${COLORS.charade};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
function getIcon(variant) {
    switch (variant) {
        case 'info':
            return jsx(SvgInfoCircleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
        case 'success':
            return jsx(SvgCircleCheckFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
        case 'warning':
            return jsx(SvgAlertTriangleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
        case 'error':
            return jsx(SvgAlertCircleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
        default:
            return null;
    }
}
function getColor(variant) {
    switch (variant) {
        case 'info':
            return COLORS.havelockBlue;
        case 'success':
            return COLORS.emerald;
        case 'warning':
            return COLORS.yellowOrange;
        case 'error':
            return COLORS.carnation;
        default:
            return COLORS.black;
    }
}
const ProgressBar = memo(({ duration, color, onAnimationEnd }) => {
    return (jsx(ProgressWrapper, { children: jsx(Progress, { "$duration": duration, "$color": color, onAnimationEnd: onAnimationEnd }, void 0) }, void 0));
});
ProgressBar.displayName = 'ProgressBar';
const Toast = ({ duration = 5000, id, variant = 'info', title, message, onClick, }) => {
    const context = useContext(ToasterContext);
    const icon = getIcon(variant);
    const color = getColor(variant);
    function handleClick() {
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }
    function handleCloseClick() {
        if (id)
            context.close(id);
    }
    function handleAnimationEnd() {
        if (id)
            context.close(id);
    }
    return (jsxs(Container$2, Object.assign({ onClick: handleClick }, { children: [jsxs(Inner, { children: [jsx(InnerLeft, Object.assign({ "$color": color }, { children: icon }), void 0), jsxs(InnerRight, { children: [!!title && jsx(Title, Object.assign({ "$color": color }, { children: title }), void 0), !!message && jsx(Message, { children: message }, void 0)] }, void 0)] }, void 0), jsx(ProgressBar, { duration: duration, color: color, onAnimationEnd: handleAnimationEnd }, void 0), jsx(CloseButton, Object.assign({ type: "button", onClick: handleCloseClick, "aria-label": "close" }, { children: jsx(SvgX, { width: 20, height: 20, viewBox: "0 0 24 24" }, void 0) }), void 0)] }), void 0));
};
// @ts-ignore
const MemoizedToast = memo(Toast);
MemoizedToast.info = (title, message, options) => {
    throw new Error('Toast.info() was called before Toaster had mounted.');
};
MemoizedToast.success = (title, message, options) => {
    throw new Error('Toast.success() was called before Toaster had mounted.');
};
MemoizedToast.warning = (title, message, options) => {
    throw new Error('Toast.warning() was called before Toaster had mounted.');
};
MemoizedToast.error = (title, message, options) => {
    throw new Error('Toast.error() was called before Toaster had mounted.');
};
MemoizedToast.displayName = 'Toast';
const ToasterContext = createContext({
    remove: (id) => { },
    close: (id) => { },
});
function getOrCreatePortalElement() {
    let element = document.getElementById('toasts-portal');
    if (!element) {
        element = document.createElement('div');
        element.setAttribute('id', 'toasts-portal');
        document.body.appendChild(element);
    }
    return element;
}
const Toaster = () => {
    const [toasts, setToasts] = useState([]);
    useEffect(() => {
        function generateId() {
            return `toast-${Math.random().toString().split('.')[1]}-${Date.now().toString()}`;
        }
        function createToastCallback(variant) {
            return (title, message, options) => {
                const toastConfig = Object.assign({ id: generateId(), variant,
                    title,
                    message }, options);
                setToasts(prev => [...prev, toastConfig]);
            };
        }
        MemoizedToast.info = createToastCallback('info');
        MemoizedToast.success = createToastCallback('success');
        MemoizedToast.warning = createToastCallback('warning');
        MemoizedToast.error = createToastCallback('error');
    }, []);
    const remove = useCallback((id) => {
        setToasts(prev => prev.filter(toastConfig => toastConfig.id !== id));
    }, []);
    const close = useCallback((id) => {
        setToasts(prev => prev.map(toastConfig => toastConfig.id === id
            ? Object.assign(Object.assign({}, toastConfig), { closing: true, onTransitionEnd: () => remove(id) }) : toastConfig));
    }, [remove]);
    const value = useMemo(() => {
        return {
            remove,
            close,
        };
    }, [remove, close]);
    return createPortal(jsx(ToasterContext.Provider, Object.assign({ value: value }, { children: toasts.map((_a, index) => {
            var { closing, bottom = 10, left = 10, onTransitionEnd } = _a, props = __rest(_a, ["closing", "bottom", "left", "onTransitionEnd"]);
            return (jsx(Positioner, Object.assign({ "$closing": closing, "$index": index, "$bottom": bottom, "$left": left, onTransitionEnd: onTransitionEnd }, { children: jsx(MemoizedToast, Object.assign({}, props), void 0) }), props.id));
        }) }), void 0), getOrCreatePortalElement());
};

const Container$1 = styled.div `
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`;
const Hider = styled.div `
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
`;
const Caption = styled.span `
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
`;
const StyledChevronDownIcon = styled(SvgChevronDown) `
  color: ${COLORS.silverChalice};
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
`;
const StyledXIcon = styled(SvgX) `
  color: ${COLORS.silverChalice};
`;
const ClearButtonWrapper = styled.div `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 16px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ClearButton = styled.button `
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
`;
const Select = ({ className, id, placeholder = '', name, value = '', options, onChange }, ref) => {
    var _a, _b, _c;
    const innerRef = useRef(null);
    useImperativeHandle(ref, () => innerRef.current);
    const selectedOption = (_a = options === null || options === void 0 ? void 0 : options.find) === null || _a === void 0 ? void 0 : _a.call(options, o => o.value === value);
    function handleClearClick() {
        if (innerRef.current) {
            innerRef.current.selectedIndex = 0;
            const evt = new Event('change', { bubbles: true });
            innerRef.current.dispatchEvent(evt);
        }
    }
    function getDerivedId() {
        if (id)
            return id;
        if (placeholder && name)
            return name;
        if (placeholder && typeof placeholder === 'string')
            return placeholder;
        return Math.random().toString();
    }
    const derivedId = getDerivedId();
    return (jsxs(Container$1, Object.assign({ className: className }, { children: [jsx(Caption, Object.assign({ "$hasValue": !!selectedOption }, { children: (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _b !== void 0 ? _b : placeholder }), void 0), jsx(StyledChevronDownIcon, { "$hidden": !!value, width: 20, height: 20, viewBox: "0 0 24 24" }, void 0), jsx(Hider, { children: jsxs("select", Object.assign({ id: derivedId, ref: innerRef, value: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value, name: name, placeholder: placeholder, onChange: onChange }, { children: [jsx("option", Object.assign({ value: "" }, { children: placeholder }), void 0), (_c = options === null || options === void 0 ? void 0 : options.map) === null || _c === void 0 ? void 0 : _c.call(options, option => {
                            var _a;
                            return (jsx("option", Object.assign({ value: option.value }, { children: option.label }), (_a = option.id) !== null && _a !== void 0 ? _a : `${option.value}-${option.label}`));
                        })] }), void 0) }, void 0), !!value && (jsx(ClearButtonWrapper, { children: jsx(ClearButton, Object.assign({ type: "button", onClick: handleClearClick, "aria-label": "clear" }, { children: jsx(StyledXIcon, { width: 20, height: 20, viewBox: "0 0 24 24" }, void 0) }), void 0) }, void 0))] }), void 0));
};
const ForwardedSelect = forwardRef(Select);

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
const StyledTextArea = styled.textarea `
  display: block;
  padding: 20px 16px;
  box-sizing: border-box;
  border: 1px solid ${getVariantColor};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  resize: ${props => (props.$resizable ? 'both' : 'none')};
  transition: border-color 140ms ease-in;

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }

  &,
  &::placeholder {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.1875em;
    font-weight: 400;
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
const TextArea = ({ required, disabled, autoFocus, rows, className, resizable = false, variant = 'default', id, name, label, helperText, value, placeholder, ariaLabel, onChange, }, ref) => {
    const prevVariant = usePrevious(variant);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    function getDerivedId() {
        if (id)
            return id;
        if (label && name)
            return name;
        if (label)
            return label;
        return Math.random().toString();
    }
    function handleAnimationEnd() {
        if (shouldAnimate)
            setShouldAnimate(false);
    }
    useEffect(() => {
        if (variant !== prevVariant && !shouldAnimate) {
            setShouldAnimate(true);
        }
    }, [variant, prevVariant, shouldAnimate]);
    const derivedId = getDerivedId();
    return (jsxs(Container, Object.assign({ className: className }, { children: [!!label && jsx(Label, Object.assign({ htmlFor: derivedId }, { children: label }), void 0), jsx(StyledTextArea, { "$resizable": resizable, "$variant": variant, required: required, disabled: disabled, autoFocus: autoFocus, rows: rows, ref: ref, id: derivedId, name: name, value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChange }, void 0), !!helperText && (jsx(HelperText, Object.assign({ "$animate": shouldAnimate, "$variant": variant, onAnimationEnd: handleAnimationEnd }, { children: helperText }), void 0))] }), void 0));
};
var TextArea$1 = forwardRef(TextArea);

export { Avatar, Button, ForwardedCheckbox as Checkbox, GlobalStyle, Menu$1 as Menu, ForwardedRadioButton as RadioButton, ForwardedSelect as Select, Slider, Spinner, Switcher, TextArea$1 as TextArea, ForwardedTextField as TextField, MemoizedToast as Toast, Toaster, globalStyle };
