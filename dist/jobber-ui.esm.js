import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { forwardRef, useRef, useEffect, useState } from 'react';

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
const Container$4 = styled.span `
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
    return (jsxs(Container$4, Object.assign({ className: className }, { children: [jsxs("svg", Object.assign({ width: derivedSize - strokeWidth, height: derivedSize - strokeWidth }, { children: [jsx(BackgroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference - 1 * circumference, r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }, void 0), jsx(ForegroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset, strokeLinecap: "round", r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }, void 0)] }), void 0), children] }), void 0));
};

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
const IconWrapper$1 = styled.div `
  line-height: 0;
  z-index: 2;
  pointer-events: none;

  ${getIconFluidStyling}
  color: ${getIconColor$1};

  & svg {
    width: ${getIconSize$1}px;
    height: ${getIconSize$1}px;
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
const Button = ({ variant = 'default', type = 'button', onClick, size = 'medium', className, outlined = false, disabled = false, fluid = false, loading = false, icon = null, spinnerColor, href, as, target, children, }) => {
    // Styled-components TS as prop workaround
    const Component = ButtonContainer;
    const isLink = as === 'a';
    return (jsx("div", { children: jsxs(Component, Object.assign({ className: className, "$variant": variant, type: isLink ? undefined : type, onClick: onClick, "$size": size, "$outlined": outlined, disabled: disabled, icon: !!icon, fluid: fluid, "$loading": loading, href: isLink ? href : undefined, as: as, target: isLink ? target : undefined }, { children: [!!icon && (jsx(IconWrapper$1, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size, fluid: fluid }, { children: icon }), variant)), jsx(ChildrenWrapper, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size, "$loading": loading }, { children: children }), variant), loading && (jsx(InnerWrapper, { children: jsx(StyledSpinner, { "$variant": variant, "$outlined": outlined, "$spinnerColor": spinnerColor, size: "small" }, void 0) }, void 0))] }), void 0) }, void 0));
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
const Container$3 = styled.label `
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
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor$1};
`;
const Checkbox = ({ required, disabled = false, defaultChecked, checked, value, variant = 'default', id, name, className, label, onChange, }, ref) => {
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
    return (jsxs(Container$3, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxs(Square, { children: [jsx(Input$2, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: derivedDefaultChecked, checked: derivedChecked, value: value, type: "checkbox", id: derivedId, name: name, onChange: onChange }, void 0), jsx(SquareBorder, { "$disabled": disabled, "$variant": variant }, void 0), jsx(Svg, Object.assign({ width: "13", height: "10", viewBox: "0 0 13 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsx(Checkmark, { "$disabled": disabled, "$variant": variant, d: "M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }), void 0)] }, void 0), !!label && (jsx(Text$2, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: label }), void 0))] }), void 0));
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
const Container$2 = styled.label `
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
    return (jsxs(Container$2, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxs(OuterCircle, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: [jsx(Input$1, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: defaultChecked, checked: checked, type: "radio", id: derivedId, name: name, value: value, onChange: onChange }, void 0), jsx(InnerCircle, { "$variant": variant }, void 0)] }), void 0), !!label && (jsx(Text$1, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: label }), void 0))] }), void 0));
};
const ForwardedRadioButton = forwardRef(RadioButton);

var _path$8, _circle$2, _path2$8;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgCircleCheck = function SvgCircleCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    className: "circle-check_svg__icon circle-check_svg__icon-tabler circle-check_svg__icon-tabler-circle-check",
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
    d: "m9 12 2 2 4-4"
  })));
};

var _path$7, _path2$7;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgAlertTriangle = function SvgAlertTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    className: "alert-triangle_svg__icon alert-triangle_svg__icon-tabler alert-triangle_svg__icon-tabler-alert-triangle",
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
  })), _path2$7 || (_path2$7 = /*#__PURE__*/React.createElement("path", {
    d: "M12 9v2m0 4v.01M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"
  })));
};

var _path$6, _circle$1, _path2$6;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgCircleX = function SvgCircleX(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    className: "circle-x_svg__icon circle-x_svg__icon-tabler circle-x_svg__icon-tabler-circle-x",
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
    cx: 12,
    cy: 12,
    r: 9
  })), _path2$6 || (_path2$6 = /*#__PURE__*/React.createElement("path", {
    d: "m10 10 4 4m0-4-4 4"
  })));
};

var _path$5, _rect, _path2$5;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var SvgMail = function SvgMail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    className: "mail_svg__icon mail_svg__icon-tabler mail_svg__icon-tabler-mail",
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
  })), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    x: 3,
    y: 5,
    width: 18,
    height: 14,
    rx: 2
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })));
};

var _path$4, _circle, _path2$4;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    className: "search_svg__icon search_svg__icon-tabler search_svg__icon-tabler-search",
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
  })), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 7
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
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
const Container$1 = styled.div `
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
const TextField = ({ required, disabled, autoFocus, variant = 'default', id, name, type = 'text', className, size = 'medium', label, value, placeholder, helperText, ariaLabel, iconAlign, icon, onChange, }, ref) => {
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
        if (type === 'email')
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
    return (jsxs(Container$1, Object.assign({ "$variant": variant, "$disabled": disabled, "$size": size, className: className }, { children: [!!label && jsx(Label, Object.assign({ htmlFor: derivedId }, { children: label }), void 0), jsxs(InputWrapper, { children: [jsx(Input, { ref: ref, "$icon": !!derivedIcon, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, required: required, disabled: disabled, autoFocus: autoFocus, type: type, id: derivedId, name: name, value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChange }, void 0), !!derivedIcon && (jsx(IconWrapper, Object.assign({ "$animate": shouldAnimate, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, onAnimationEnd: handleAnimationEnd }, { children: derivedIcon }), variant))] }, void 0), !!helperText && (jsx(HelperText, Object.assign({ "$animate": shouldAnimate, "$variant": variant, onAnimationEnd: handleAnimationEnd }, { children: helperText }), void 0))] }), void 0));
};
const ForwardedTextField = forwardRef(TextField);

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
const Avatar = ({ src, name = 'N N', id, size, className, disabled = false, }) => {
    const initials = name
        .toUpperCase()
        .split(' ')
        .slice(0, 2)
        .map(n => n[0])
        .join('');
    return (jsx(Circle, Object.assign({ size: size, id: id, className: className, "$disabled": disabled }, { children: src ? (jsx(Image, { src: src, alt: 'Avatar' }, void 0)) : (jsx(Text, Object.assign({ "$disabled": disabled, id: id, size: size }, { children: initials }), void 0)) }), void 0));
};

var _path$3, _path2$3;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-up_svg__icon chevron-up_svg__icon-tabler chevron-up_svg__icon-tabler-chevron-up",
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
    d: "m6 15 6-6 6 6"
  })));
};

var _path$2, _path2$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-right_svg__icon chevron-right_svg__icon-tabler chevron-right_svg__icon-tabler-chevron-right",
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
    d: "m9 6 6 6-6 6"
  })));
};

var _path$1, _path2$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-down_svg__icon chevron-down_svg__icon-tabler chevron-down_svg__icon-tabler-chevron-down",
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
    d: "m6 9 6 6 6-6"
  })));
};

var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "chevron-left_svg__icon chevron-left_svg__icon-tabler chevron-left_svg__icon-tabler-chevron-left",
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
    d: "m15 6-6 6 6 6"
  })));
};

const Container = styled.div `
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
    return (jsx(Container, Object.assign({ className: className }, { children: jsxs(Pill, { children: [jsxs(PillHalf, Object.assign({ type: "button", "aria-label": "Left", onClick: onLeftButtonClick }, { children: [jsx(SvgChevronLeft, {}, void 0), jsx(HiddenText, { children: "Left" }, void 0)] }), void 0), jsxs(PillHalf, Object.assign({ type: "button", "aria-label": "Right", onClick: onRightButtonClick }, { children: [jsx(SvgChevronRight, {}, void 0), jsx(HiddenText, { children: "Right" }, void 0)] }), void 0)] }, void 0) }), void 0));
};
const Vertical = ({ className, onTopButtonClick, onBottomButtonClick, }) => {
    return (jsx(Container, Object.assign({ "$vertical": true, className: className }, { children: jsxs(Pill, Object.assign({ "$vertical": true }, { children: [jsxs(PillHalf, Object.assign({ "$vertical": true, type: "button", "aria-label": "Up", onClick: onTopButtonClick }, { children: [jsx(SvgChevronUp, {}, void 0), jsx(HiddenText, { children: "Up" }, void 0)] }), void 0), jsxs(PillHalf, Object.assign({ "$vertical": true, type: "button", "aria-label": "Down", onClick: onBottomButtonClick }, { children: [jsx(SvgChevronDown, {}, void 0), jsx(HiddenText, { children: "Down" }, void 0)] }), void 0)] }), void 0) }), void 0));
};

var Switcher = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Horizontal: Horizontal,
  Vertical: Vertical
});

export { Avatar, Button, ForwardedCheckbox as Checkbox, GlobalStyle, ForwardedRadioButton as RadioButton, Spinner, Switcher, ForwardedTextField as TextField, globalStyle };
