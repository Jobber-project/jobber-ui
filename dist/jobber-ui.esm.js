import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import * as React from 'react';
import React__default, { forwardRef, useRef, useEffect, useState, cloneElement, memo, createContext, useContext, useCallback, useMemo, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Select$1, { components } from 'react-select';

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// prettier-ignore
var reset = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"], ["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));
createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), reset);
var templateObject_1, templateObject_2;

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
    scienceBlue: '#005fcc',
    primaryGradient: `linear-gradient(90deg, #8d49f7, #5971dd)`,
    secondaryGradient: `linear-gradient(90deg, #ffc600, #ff9e2c)`,
};

const globalStyle = css `
  ${reset}
  font-family: 'Roboto', sans-serif;

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
  }

  * {
    outline-color: ${COLORS.scienceBlue};
  }
`;
const GlobalStyle = createGlobalStyle `
  ${globalStyle}
`;

const animation = keyframes `
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;
const Container$8 = styled.span `
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
    return (React__default.createElement(Container$8, { className: className },
        React__default.createElement("svg", { width: derivedSize - strokeWidth, height: derivedSize - strokeWidth },
            React__default.createElement(BackgroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference - 1 * circumference, r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }),
            React__default.createElement(ForegroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset, strokeLinecap: "round", r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 })),
        children));
};

function getIconSize$3({ $size }) {
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
function getIconColor$2({ $variant, $outlined, }) {
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
const IconWrapper$3 = styled.div `
  line-height: 0;
  z-index: 2;
  pointer-events: none;

  ${getIconFluidStyling}
  color: ${getIconColor$2};

  & svg {
    width: ${getIconSize$3}px;
    height: ${getIconSize$3}px;
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
    return (React__default.createElement("div", null,
        React__default.createElement(Component, { ref: ref, className: className, "$variant": variant, type: isLink ? undefined : type, onClick: onClick, "$size": size, "$outlined": outlined, disabled: disabled, icon: !!icon, fluid: fluid, "$loading": loading, href: isLink ? href : undefined, download: isLink ? download : undefined, as: as, target: isLink ? target : undefined },
            !!icon && (React__default.createElement(IconWrapper$3, { "$outlined": outlined, "$variant": variant, "$size": size, key: `${variant}-icon-wrapper`, fluid: fluid }, icon)),
            React__default.createElement(ChildrenWrapper, { "$outlined": outlined, "$variant": variant, "$size": size, key: `${variant}-children-wrapper`, "$loading": loading }, children),
            loading && (React__default.createElement(InnerWrapper, null,
                React__default.createElement(StyledSpinner, { "$variant": variant, "$outlined": outlined, "$spinnerColor": spinnerColor, size: "small" }))))));
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
const Container$7 = styled.label `
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
    return (React__default.createElement(Container$7, Object.assign({ "$disabled": disabled, "$flipped": flipped, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {})),
        React__default.createElement(Square, null,
            React__default.createElement(Input$2, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: derivedDefaultChecked, checked: derivedChecked, value: value, type: "checkbox", id: derivedId, name: name, onChange: onChange }),
            React__default.createElement(SquareBorder, { "$disabled": disabled, "$variant": variant }),
            React__default.createElement(Svg, { width: "13", height: "10", viewBox: "0 0 13 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React__default.createElement(Checkmark, { "$disabled": disabled, "$variant": variant, d: "M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
        !!label && (React__default.createElement(Text$2, { "$disabled": disabled, "$flipped": flipped, "$variant": variant }, label))));
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
const Container$6 = styled.label `
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
    return (React__default.createElement(Container$6, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {})),
        React__default.createElement(OuterCircle, { "$disabled": disabled, "$variant": variant },
            React__default.createElement(Input$1, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: defaultChecked, checked: checked, type: "radio", id: derivedId, name: name, value: value, onChange: onChange }),
            React__default.createElement(InnerCircle, { "$variant": variant })),
        !!label && (React__default.createElement(Text$1, { "$disabled": disabled, "$variant": variant }, label))));
};
const ForwardedRadioButton = forwardRef(RadioButton);

var _path$a, _circle$3, _path2$a;

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

var SvgCircleCheck = function SvgCircleCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$f({
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

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

var SvgAlertTriangle = function SvgAlertTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
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

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

var SvgCircleX = function SvgCircleX(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
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

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var SvgMail = function SvgMail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
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

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
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

const animateIcon$1 = keyframes `
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  100% {
    tansform: none;
    opacity: 1;
  }
`;
const animateHelperText$2 = keyframes `
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
function getVariantColor$2({ $variant }) {
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
function getIconColor$1({ $variant }) {
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
function getIconSize$2({ $size }) {
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
function getIconLeft$1({ $size, $iconAlign, }) {
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
function getPadding$1({ $size }) {
    switch ($size) {
        case 'large':
            return '16px 24px';
        case 'medium':
        default:
            return '8px 16px';
    }
}
function getPaddingRight$1({ $size, $iconAlign, }) {
    switch ($iconAlign) {
        case 'right':
            return getIconSize$2({ $size }) + getIconRight({ $size, $iconAlign }) * 1.5;
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
function getPaddingLeft$1({ $size, $iconAlign, }) {
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
            return getIconSize$2({ $size }) + getIconLeft$1({ $size, $iconAlign }) * 1.5;
    }
}
function getInputHeight$1({ $size }) {
    switch ($size) {
        case 'large':
            return 56;
        case 'medium':
        default:
            return 40;
    }
}
function getInputFontSize$1({ $size }) {
    switch ($size) {
        case 'large':
            return 18;
        case 'medium':
        default:
            return 16;
    }
}
function getInputLineHeight$1({ $size }) {
    switch ($size) {
        case 'large':
            return 1.1667; // 21px
        case 'medium':
        default:
            return 1.1875; // 19px
    }
}
function getFocusBorderColor$2({ $variant }) {
    switch ($variant) {
        case 'default':
            return COLORS.havelockBlue;
        default:
            return false;
    }
}
const Container$5 = styled.div `
  display: flex;
  flex-direction: column;
`;
const Label$2 = styled.label `
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
  height: ${getInputHeight$1}px;
  margin: 0;
  padding: ${getPadding$1};
  box-sizing: border-box;
  border: 1px solid ${getVariantColor$2};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  transition: border-color 140ms ease-in;

  ${props => props.$icon &&
    `
      padding-right: ${getPaddingRight$1(props)}px;
      padding-left: ${getPaddingLeft$1(props)}px;
    `}

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor$2};
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
    font-size: ${getInputFontSize$1}px;
    line-height: ${getInputLineHeight$1}em;
    font-weight: 400;
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }

  &::-webkit-search-decoration {
    display: none;
  }
`;
const IconWrapper$2 = styled.div `
  z-index: 1;
  position: absolute;
  top: 0;
  right: ${props => {
    const right = getIconRight(props);
    return right ? `${right}px` : 'auto';
}};
  bottom: 0;
  left: ${props => {
    const left = getIconLeft$1(props);
    return left ? `${left}px` : 'auto';
}};
  display: flex;
  align-items: center;
  color: ${getIconColor$1};
  transition: color 280ms ease;

  ${props => props.$animate &&
    css `
      animation: ${animateIcon$1} 280ms ease;
    `}

  & svg {
    width: ${getIconSize$2}px;
    height: ${getIconSize$2}px;
  }
`;
const HelperText$2 = styled.span `
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor$2};
  transition: color 280ms ease;

  ${props => props.$animate &&
    css `
      animation: ${animateHelperText$2} 280ms ease;
    `}
`;
const TextField = ({ required, disabled, autoFocus, variant = 'default', id, name, type = 'text', className, size = 'medium', label, value, placeholder, helperText, ariaLabel, iconAlign = 'left', icon, onChange, }, ref) => {
    const prevVariant = usePrevious(variant);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    function getDerivedIcon() {
        switch (variant) {
            case 'success':
                return React__default.createElement(SvgCircleCheck, { viewBox: "0 0 24 24" });
            case 'warning':
                return React__default.createElement(SvgAlertTriangle, { viewBox: "0 0 24 24" });
            case 'error':
                return React__default.createElement(SvgCircleX, { viewBox: "0 0 24 24" });
            case 'default':
            default: {
                if (icon)
                    return icon;
                if (type === 'email')
                    return React__default.createElement(SvgMail, { viewBox: "0 0 24 24" });
                if (type === 'search')
                    return React__default.createElement(SvgSearch, { viewBox: "0 0 24 24" });
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
    return (React__default.createElement(Container$5, { "$variant": variant, "$disabled": disabled, "$size": size, className: className },
        !!label && React__default.createElement(Label$2, { htmlFor: derivedId }, label),
        React__default.createElement(InputWrapper, null,
            React__default.createElement(Input, { ref: ref, "$icon": !!derivedIcon, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, required: required, disabled: disabled, autoFocus: autoFocus, type: type, id: derivedId, name: name, value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChange }),
            !!derivedIcon && (React__default.createElement(IconWrapper$2, { "$animate": shouldAnimate, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, key: variant, onAnimationEnd: handleAnimationEnd }, derivedIcon))),
        !!helperText && (React__default.createElement(HelperText$2, { "$animate": shouldAnimate, "$variant": variant, onAnimationEnd: handleAnimationEnd }, helperText))));
};
const ForwardedTextField = forwardRef(TextField);

var _path$5, _path2$5, _circle;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var SvgCamera = function SvgCamera(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
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
            return React__default.createElement(SvgCamera, { height: "16px", width: "16", viewBox: "0 0 24 24" });
    }
};
const getIconSize$1 = ({ size }) => {
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
const IconWrapper$1 = styled.div `
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  width: ${getIconSize$1}px;
  height: ${getIconSize$1}px;
  border: 1px solid ${COLORS.mischa};
`;
const Icon = ({ icon, onClick, size }) => {
    return (React__default.createElement(ButtonWrapper, { onClick: onClick },
        React__default.createElement(IconWrapper$1, { size: size }, getIcon$1(icon))));
};
const Avatar = ({ src, name = 'N N', id, size, className, disabled = false, onClick, icon, }) => {
    const initials = name
        .toUpperCase()
        .split(' ')
        .slice(0, 2)
        .map(n => n[0])
        .join('');
    return (React__default.createElement(AvatarWrapper, null,
        React__default.createElement(Circle, { size: size, id: id, className: className, "$disabled": disabled }, src ? (React__default.createElement(Image, { src: src, alt: 'Avatar' })) : (React__default.createElement(Text, { "$disabled": disabled, id: id, size: size }, initials))),
        icon && size === 'large' && (React__default.createElement(Icon, { size: size, onClick: onClick, icon: icon }))));
};

var _path$4, _path2$4;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
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

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
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

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
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

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
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

const Container$4 = styled.div `
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
    return (React__default.createElement(Container$4, { className: className },
        React__default.createElement(Pill, null,
            React__default.createElement(PillHalf, { type: "button", "aria-label": "Left", onClick: onLeftButtonClick },
                React__default.createElement(SvgChevronLeft, null),
                React__default.createElement(HiddenText, null, "Left")),
            React__default.createElement(PillHalf, { type: "button", "aria-label": "Right", onClick: onRightButtonClick },
                React__default.createElement(SvgChevronRight, null),
                React__default.createElement(HiddenText, null, "Right")))));
};
const Vertical = ({ className, onTopButtonClick, onBottomButtonClick, }) => {
    return (React__default.createElement(Container$4, { "$vertical": true, className: className },
        React__default.createElement(Pill, { "$vertical": true },
            React__default.createElement(PillHalf, { "$vertical": true, type: "button", "aria-label": "Up", onClick: onTopButtonClick },
                React__default.createElement(SvgChevronUp, null),
                React__default.createElement(HiddenText, null, "Up")),
            React__default.createElement(PillHalf, { "$vertical": true, type: "button", "aria-label": "Down", onClick: onBottomButtonClick },
                React__default.createElement(SvgChevronDown, null),
                React__default.createElement(HiddenText, null, "Down")))));
};

var Switcher = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Horizontal: Horizontal,
    Vertical: Vertical
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function useEvent(callback) {
  var fnRef = React.useRef();
  fnRef.current = callback;
  var memoFn = React.useCallback(function () {
    var _fnRef$current;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

var useLayoutEffect = process.env.NODE_ENV !== 'test' && canUseDom() ? React.useLayoutEffect : React.useEffect;

/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */

function useSafeState(defaultValue) {
  var destroyRef = React.useRef(false);

  var _React$useState = React.useState(defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }

    setValue(updater);
  }

  return [value, safeSetState];
}

var Source;

(function (Source) {
  Source[Source["INNER"] = 0] = "INNER";
  Source[Source["PROP"] = 1] = "PROP";
})(Source || (Source = {}));

var useUpdateEffect = function useUpdateEffect(callback, deps) {
  var firstMountRef = React.useRef(true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps); // We tell react that first mount has passed

  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
/** We only think `undefined` is empty */


function hasValue(value) {
  return value !== undefined;
}
/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */


function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState; // ======================= Init =======================


  var _useState = useSafeState(function () {
    var finalValue = undefined;
    var source;

    if (hasValue(value)) {
      finalValue = value;
      source = Source.PROP;
    } else if (hasValue(defaultValue)) {
      finalValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      source = Source.PROP;
    } else {
      finalValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      source = Source.INNER;
    }

    return [finalValue, source, finalValue];
  }),
      _useState2 = _slicedToArray(_useState, 2),
      mergedValue = _useState2[0],
      setMergedValue = _useState2[1];

  var chosenValue = hasValue(value) ? value : mergedValue[0];
  var postMergedValue = postState ? postState(chosenValue) : chosenValue; // ======================= Sync =======================

  useUpdateEffect(function () {
    setMergedValue(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          prevValue = _ref3[0];

      return [value, Source.PROP, prevValue];
    });
  }, [value]); // ====================== Update ======================

  var changeEventPrevRef = React.useRef();
  var triggerChange = useEvent(function (updater, ignoreDestroy) {
    setMergedValue(function (prev) {
      var _prev = _slicedToArray(prev, 3),
          prevValue = _prev[0],
          prevSource = _prev[1],
          prevPrevValue = _prev[2];

      var nextValue = typeof updater === 'function' ? updater(prevValue) : updater; // Do nothing if value not change

      if (nextValue === prevValue) {
        return prev;
      } // Use prev prev value if is in a batch update to avoid missing data


      var overridePrevValue = prevSource === Source.INNER && changeEventPrevRef.current !== prevPrevValue ? prevPrevValue : prevValue;
      return [nextValue, Source.INNER, overridePrevValue];
    }, ignoreDestroy);
  }); // ====================== Change ======================

  var onChangeFn = useEvent(onChange);
  useLayoutEffect(function () {
    var _mergedValue = _slicedToArray(mergedValue, 3),
        current = _mergedValue[0],
        source = _mergedValue[1],
        prev = _mergedValue[2];

    if (current !== prev && source === Source.INNER) {
      onChangeFn(current, prev);
      changeEventPrevRef.current = prev;
    }
  }, [mergedValue]);
  return [postMergedValue, triggerChange];
}

function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$5.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};

var SliderContext = /*#__PURE__*/React.createContext({
  min: 0,
  max: 0,
  direction: 'ltr',
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0
});

function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  var offset = getOffset(value, min, max);
  var positionStyle = {};

  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(50%)';
      break;

    case 'btt':
      positionStyle.bottom = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(50%)';
      break;

    case 'ttb':
      positionStyle.top = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(-50%)';
      break;

    default:
      positionStyle.left = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(-50%)';
      break;
  }

  return positionStyle;
}
/** Return index value if is list or return value directly */

function getIndex(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

var _excluded$1 = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];
var Handle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _getIndex;

  var prefixCls = props.prefixCls,
      value = props.value,
      valueIndex = props.valueIndex,
      onStartMove = props.onStartMove,
      style = props.style,
      render = props.render,
      dragging = props.dragging,
      onOffsetChange = props.onOffsetChange,
      restProps = _objectWithoutProperties(props, _excluded$1);

  var _React$useContext = React.useContext(SliderContext),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      disabled = _React$useContext.disabled,
      range = _React$useContext.range,
      tabIndex = _React$useContext.tabIndex,
      ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
      ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;

  var handlePrefixCls = "".concat(prefixCls, "-handle"); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled) {
      onStartMove(e, valueIndex);
    }
  }; // =========================== Keyboard ===========================


  var onKeyDown = function onKeyDown(e) {
    if (!disabled) {
      var offset = null; // Change the value

      switch (e.which || e.keyCode) {
        case KeyCode.LEFT:
          offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
          break;

        case KeyCode.RIGHT:
          offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
          break;
        // Up is plus

        case KeyCode.UP:
          offset = direction !== 'ttb' ? 1 : -1;
          break;
        // Down is minus

        case KeyCode.DOWN:
          offset = direction !== 'ttb' ? -1 : 1;
          break;

        case KeyCode.HOME:
          offset = 'min';
          break;

        case KeyCode.END:
          offset = 'max';
          break;

        case KeyCode.PAGE_UP:
          offset = 2;
          break;

        case KeyCode.PAGE_DOWN:
          offset = -2;
          break;
      }

      if (offset !== null) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  }; // ============================ Offset ============================


  var positionStyle = getDirectionStyle(direction, value, min, max); // ============================ Render ============================

  var handleNode = /*#__PURE__*/React.createElement("div", _extends$5({
    ref: ref,
    className: classNames(handlePrefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), _defineProperty(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
    style: _objectSpread2(_objectSpread2({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove,
    onKeyDown: onKeyDown,
    tabIndex: disabled ? null : getIndex(tabIndex, valueIndex),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-disabled": disabled,
    "aria-label": getIndex(ariaLabelForHandle, valueIndex),
    "aria-labelledby": getIndex(ariaLabelledByForHandle, valueIndex),
    "aria-valuetext": (_getIndex = getIndex(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
  }, restProps)); // Customize

  if (render) {
    handleNode = render(handleNode, {
      index: valueIndex,
      prefixCls: prefixCls,
      value: value,
      dragging: dragging
    });
  }

  return handleNode;
});

if (process.env.NODE_ENV !== 'production') {
  Handle.displayName = 'Handle';
}

var _excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
var Handles = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      style = props.style,
      onStartMove = props.onStartMove,
      onOffsetChange = props.onOffsetChange,
      values = props.values,
      handleRender = props.handleRender,
      draggingIndex = props.draggingIndex,
      restProps = _objectWithoutProperties(props, _excluded);

  var handlesRef = React.useRef({});
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus(index) {
        var _handlesRef$current$i;

        (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
      }
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(Handle, _extends$5({
      ref: function ref(node) {
        if (!node) {
          delete handlesRef.current[index];
        } else {
          handlesRef.current[index] = node;
        }
      },
      dragging: draggingIndex === index,
      prefixCls: prefixCls,
      style: getIndex(style, index),
      key: index,
      value: value,
      valueIndex: index,
      onStartMove: onStartMove,
      onOffsetChange: onOffsetChange,
      render: handleRender
    }, restProps));
  }));
});

if (process.env.NODE_ENV !== 'production') {
  Handles.displayName = 'Handles';
}

function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY
  };
}

function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      draggingValue = _React$useState2[0],
      setDraggingValue = _React$useState2[1];

  var _React$useState3 = React.useState(-1),
      _React$useState4 = _slicedToArray$1(_React$useState3, 2),
      draggingIndex = _React$useState4[0],
      setDraggingIndex = _React$useState4[1];

  var _React$useState5 = React.useState(rawValues),
      _React$useState6 = _slicedToArray$1(_React$useState5, 2),
      cacheValues = _React$useState6[0],
      setCacheValues = _React$useState6[1];

  var _React$useState7 = React.useState(rawValues),
      _React$useState8 = _slicedToArray$1(_React$useState7, 2),
      originValues = _React$useState8[0],
      setOriginValues = _React$useState8[1];

  var mouseMoveEventRef = React.useRef(null);
  var mouseUpEventRef = React.useRef(null);
  React.useEffect(function () {
    if (draggingIndex === -1) {
      setCacheValues(rawValues);
    }
  }, [rawValues, draggingIndex]); // Clean up event

  React.useEffect(function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
      document.removeEventListener('mouseup', mouseUpEventRef.current);
      document.removeEventListener('touchmove', mouseMoveEventRef.current);
      document.removeEventListener('touchend', mouseUpEventRef.current);
    };
  }, []);

  var flushValues = function flushValues(nextValues, nextValue) {
    // Perf: Only update state when value changed
    if (cacheValues.some(function (val, i) {
      return val !== nextValues[i];
    })) {
      if (nextValue !== undefined) {
        setDraggingValue(nextValue);
      }

      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };

  var updateCacheValue = function updateCacheValue(valueIndex, offsetPercent) {
    // Basic point offset
    if (valueIndex === -1) {
      // >>>> Dragging on the track
      var startValue = originValues[0];
      var endValue = originValues[originValues.length - 1];
      var maxStartOffset = min - startValue;
      var maxEndOffset = max - endValue; // Get valid offset

      var offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset); // Use first value to revert back of valid offset (like steps marks)

      var formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      var cloneCacheValues = originValues.map(function (val) {
        return val + offset;
      });
      flushValues(cloneCacheValues);
    } else {
      // >>>> Dragging on the handle
      var offsetDist = (max - min) * offsetPercent; // Always start with the valueIndex origin value

      var cloneValues = _toConsumableArray(cacheValues);

      cloneValues[valueIndex] = originValues[valueIndex];
      var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
      flushValues(next.values, next.value);
    }
  }; // Resolve closure


  var updateCacheValueRef = React.useRef(updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;

  var onStartMove = function onStartMove(e, valueIndex) {
    e.stopPropagation();
    var originValue = rawValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(rawValues);

    var _getPosition = getPosition(e),
        startX = _getPosition.pageX,
        startY = _getPosition.pageY; // Moving


    var onMouseMove = function onMouseMove(event) {
      event.preventDefault();

      var _getPosition2 = getPosition(event),
          moveX = _getPosition2.pageX,
          moveY = _getPosition2.pageY;

      var offsetX = moveX - startX;
      var offsetY = moveY - startY;

      var _containerRef$current = containerRef.current.getBoundingClientRect(),
          width = _containerRef$current.width,
          height = _containerRef$current.height;

      var offSetPercent;

      switch (direction) {
        case 'btt':
          offSetPercent = -offsetY / height;
          break;

        case 'ttb':
          offSetPercent = offsetY / height;
          break;

        case 'rtl':
          offSetPercent = -offsetX / width;
          break;

        default:
          offSetPercent = offsetX / width;
      }

      updateCacheValueRef.current(valueIndex, offSetPercent);
    }; // End


    var onMouseUp = function onMouseUp(event) {
      event.preventDefault();
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      setDraggingIndex(-1);
      finishChange();
    };

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  }; // Only return cache value when it mapping with rawValues


  var returnValues = React.useMemo(function () {
    var sourceValues = _toConsumableArray(rawValues).sort(function (a, b) {
      return a - b;
    });

    var targetValues = _toConsumableArray(cacheValues).sort(function (a, b) {
      return a - b;
    });

    return sourceValues.every(function (val, index) {
      return val === targetValues[index];
    }) ? cacheValues : rawValues;
  }, [rawValues, cacheValues]);
  return [draggingIndex, draggingValue, returnValues, onStartMove];
}

function Track(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      start = props.start,
      end = props.end,
      index = props.index,
      onStartMove = props.onStartMove;

  var _React$useContext = React.useContext(SliderContext),
      direction = _React$useContext.direction,
      min = _React$useContext.min,
      max = _React$useContext.max,
      disabled = _React$useContext.disabled,
      range = _React$useContext.range;

  var trackPrefixCls = "".concat(prefixCls, "-track");
  var offsetStart = getOffset(start, min, max);
  var offsetEnd = getOffset(end, min, max); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  }; // ============================ Render ============================


  var positionStyle = {};

  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    case 'btt':
      positionStyle.bottom = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    case 'ttb':
      positionStyle.top = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    default:
      positionStyle.left = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
    style: _objectSpread2(_objectSpread2({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
}

function Tracks(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      values = props.values,
      startPoint = props.startPoint,
      onStartMove = props.onStartMove;

  var _React$useContext = React.useContext(SliderContext),
      included = _React$useContext.included,
      range = _React$useContext.range,
      min = _React$useContext.min;

  var trackList = React.useMemo(function () {
    if (!range) {
      // null value do not have track
      if (values.length === 0) {
        return [];
      }

      var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
      var endValue = values[0];
      return [{
        start: Math.min(startValue, endValue),
        end: Math.max(startValue, endValue)
      }];
    } // Multiple


    var list = [];

    for (var i = 0; i < values.length - 1; i += 1) {
      list.push({
        start: values[i],
        end: values[i + 1]
      });
    }

    return list;
  }, [values, range, startPoint, min]);
  return included ? trackList.map(function (_ref, index) {
    var start = _ref.start,
        end = _ref.end;
    return /*#__PURE__*/React.createElement(Track, {
      index: index,
      prefixCls: prefixCls,
      style: getIndex(style, index),
      start: start,
      end: end,
      key: index,
      onStartMove: onStartMove
    });
  }) : null;
}

function Mark(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      children = props.children,
      value = props.value,
      _onClick = props.onClick;

  var _React$useContext = React.useContext(SliderContext),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      includedStart = _React$useContext.includedStart,
      includedEnd = _React$useContext.includedEnd,
      included = _React$useContext.included;

  var textCls = "".concat(prefixCls, "-text"); // ============================ Offset ============================

  var positionStyle = getDirectionStyle(direction, value, min, max);
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(textCls, _defineProperty({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
    style: _objectSpread2(_objectSpread2({}, positionStyle), style),
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
    },
    onClick: function onClick() {
      _onClick(value);
    }
  }, children);
}

function Marks(props) {
  var prefixCls = props.prefixCls,
      marks = props.marks,
      onClick = props.onClick;
  var markPrefixCls = "".concat(prefixCls, "-mark"); // Not render mark if empty

  if (!marks.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: markPrefixCls
  }, marks.map(function (_ref) {
    var value = _ref.value,
        style = _ref.style,
        label = _ref.label;
    return /*#__PURE__*/React.createElement(Mark, {
      key: value,
      prefixCls: markPrefixCls,
      style: style,
      value: value,
      onClick: onClick
    }, label);
  }));
}

function Dot(props) {
  var prefixCls = props.prefixCls,
      value = props.value,
      style = props.style,
      activeStyle = props.activeStyle;

  var _React$useContext = React.useContext(SliderContext),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      included = _React$useContext.included,
      includedStart = _React$useContext.includedStart,
      includedEnd = _React$useContext.includedEnd;

  var dotClassName = "".concat(prefixCls, "-dot");
  var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================

  var mergedStyle = _objectSpread2(_objectSpread2({}, getDirectionStyle(direction, value, min, max)), typeof style === 'function' ? style(value) : style);

  if (active) {
    mergedStyle = _objectSpread2(_objectSpread2({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
  }

  return /*#__PURE__*/React.createElement("span", {
    className: classNames(dotClassName, _defineProperty({}, "".concat(dotClassName, "-active"), active)),
    style: mergedStyle
  });
}

function Steps(props) {
  var prefixCls = props.prefixCls,
      marks = props.marks,
      dots = props.dots,
      style = props.style,
      activeStyle = props.activeStyle;

  var _React$useContext = React.useContext(SliderContext),
      min = _React$useContext.min,
      max = _React$useContext.max,
      step = _React$useContext.step;

  var stepDots = React.useMemo(function () {
    var dotSet = new Set(); // Add marks

    marks.forEach(function (mark) {
      dotSet.add(mark.value);
    }); // Fill dots

    if (dots && step !== null) {
      var current = min;

      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }

    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, stepDots.map(function (dotValue) {
    return /*#__PURE__*/React.createElement(Dot, {
      prefixCls: prefixCls,
      key: dotValue,
      value: dotValue,
      style: style,
      activeStyle: activeStyle
    });
  }));
}

function useOffset(min, max, step, markList, allowCross, pushable) {
  var formatRangeValue = React.useCallback(function (val) {
    var formatNextValue = isFinite(val) ? val : min;
    formatNextValue = Math.min(max, val);
    formatNextValue = Math.max(min, formatNextValue);
    return formatNextValue;
  }, [min, max]);
  var formatStepValue = React.useCallback(function (val) {
    if (step !== null) {
      var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step; // Cut number in case to be like 0.30000000000000004

      var getDecimal = function getDecimal(num) {
        return (String(num).split('.')[1] || '').length;
      };

      var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
      var fixedValue = Number(stepValue.toFixed(maxDecimal));
      return min <= fixedValue && fixedValue <= max ? fixedValue : null;
    }

    return null;
  }, [step, min, max, formatRangeValue]);
  var formatValue = React.useCallback(function (val) {
    var formatNextValue = formatRangeValue(val); // List align values

    var alignValues = markList.map(function (mark) {
      return mark.value;
    });

    if (step !== null) {
      alignValues.push(formatStepValue(val));
    } // min & max


    alignValues.push(min, max); // Align with marks

    var closeValue = alignValues[0];
    var closeDist = max - min;
    alignValues.forEach(function (alignValue) {
      var dist = Math.abs(formatNextValue - alignValue);

      if (dist <= closeDist) {
        closeValue = alignValue;
        closeDist = dist;
      }
    });
    return closeValue;
  }, [min, max, markList, step, formatRangeValue, formatStepValue]); // ========================== Offset ==========================
  // Single Value

  var offsetValue = function offsetValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';

    if (typeof offset === 'number') {
      var nextValue;
      var originValue = values[valueIndex]; // Only used for `dist` mode

      var targetDistValue = originValue + offset; // Compare next step value & mark value which is best match

      var potentialValues = [];
      markList.forEach(function (mark) {
        potentialValues.push(mark.value);
      }); // Min & Max

      potentialValues.push(min, max); // In case origin value is align with mark but not with step

      potentialValues.push(formatStepValue(originValue)); // Put offset step value also

      var sign = offset > 0 ? 1 : -1;

      if (mode === 'unit') {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      } // Find close one


      potentialValues = potentialValues.filter(function (val) {
        return val !== null;
      }) // Remove reverse value
      .filter(function (val) {
        return offset < 0 ? val <= originValue : val >= originValue;
      });

      if (mode === 'unit') {
        // `unit` mode can not contain itself
        potentialValues = potentialValues.filter(function (val) {
          return val !== originValue;
        });
      }

      var compareValue = mode === 'unit' ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      var valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(function (potentialValue) {
        var dist = Math.abs(potentialValue - compareValue);

        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      }); // Out of range will back to range

      if (nextValue === undefined) {
        return offset < 0 ? min : max;
      } // `dist` mode


      if (mode === 'dist') {
        return nextValue;
      } // `unit` mode may need another round


      if (Math.abs(offset) > 1) {
        var cloneValues = _toConsumableArray(values);

        cloneValues[valueIndex] = nextValue;
        return offsetValue(cloneValues, offset - sign, valueIndex, mode);
      }

      return nextValue;
    } else if (offset === 'min') {
      return min;
    } else if (offset === 'max') {
      return max;
    }
  };
  /** Same as `offsetValue` but return `changed` mark to tell value changed */


  var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var originValue = values[valueIndex];
    var nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue
    };
  };

  var needPush = function needPush(dist) {
    return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
  }; // Values


  var offsetValues = function offsetValues(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var nextValues = values.map(formatValue);
    var originValue = nextValues[valueIndex];
    var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;

    if (allowCross === false) {
      // >>>>> Allow Cross
      var pushNum = pushable || 0; // ============ AllowCross ===============

      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
      }

      if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
        nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
      }
    } else if (typeof pushable === 'number' || pushable === null) {
      // >>>>> Pushable
      // =============== Push ==================
      // >>>>>> Basic push
      // End values
      for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
        var changed = true;

        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);

          nextValues[i] = _offsetChangedValue.value;
          changed = _offsetChangedValue.changed;
        }
      } // Start values


      for (var _i = valueIndex; _i > 0; _i -= 1) {
        var _changed = true;

        while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
          var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);

          nextValues[_i - 1] = _offsetChangedValue2.value;
          _changed = _offsetChangedValue2.changed;
        }
      } // >>>>> Revert back to safe push range
      // End to Start


      for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
        var _changed2 = true;

        while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
          var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);

          nextValues[_i2 - 1] = _offsetChangedValue3.value;
          _changed2 = _offsetChangedValue3.changed;
        }
      } // Start to End


      for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
        var _changed3 = true;

        while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
          var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);

          nextValues[_i3 + 1] = _offsetChangedValue4.value;
          _changed3 = _offsetChangedValue4.changed;
        }
      }
    }

    return {
      value: nextValues[valueIndex],
      values: nextValues
    };
  };

  return [formatValue, offsetValues];
}

/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
/* eslint-enable */

var Slider$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls,
      className = props.className,
      style = props.style,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      autoFocus = props.autoFocus,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      value = props.value,
      defaultValue = props.defaultValue,
      range = props.range,
      count = props.count,
      onChange = props.onChange,
      onBeforeChange = props.onBeforeChange,
      onAfterChange = props.onAfterChange,
      _props$allowCross = props.allowCross,
      allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
      _props$pushable = props.pushable,
      pushable = _props$pushable === void 0 ? false : _props$pushable,
      draggableTrack = props.draggableTrack,
      reverse = props.reverse,
      vertical = props.vertical,
      _props$included = props.included,
      included = _props$included === void 0 ? true : _props$included,
      startPoint = props.startPoint,
      trackStyle = props.trackStyle,
      handleStyle = props.handleStyle,
      railStyle = props.railStyle,
      dotStyle = props.dotStyle,
      activeDotStyle = props.activeDotStyle,
      marks = props.marks,
      dots = props.dots,
      handleRender = props.handleRender,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      ariaLabelForHandle = props.ariaLabelForHandle,
      ariaLabelledByForHandle = props.ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
  var handlesRef = React.useRef();
  var containerRef = React.useRef();
  var direction = React.useMemo(function () {
    if (vertical) {
      return reverse ? 'ttb' : 'btt';
    }

    return reverse ? 'rtl' : 'ltr';
  }, [reverse, vertical]); // ============================ Range =============================

  var mergedMin = React.useMemo(function () {
    return isFinite(min) ? min : 0;
  }, [min]);
  var mergedMax = React.useMemo(function () {
    return isFinite(max) ? max : 100;
  }, [max]); // ============================= Step =============================

  var mergedStep = React.useMemo(function () {
    return step !== null && step <= 0 ? 1 : step;
  }, [step]); // ============================= Push =============================

  var mergedPush = React.useMemo(function () {
    if (pushable === true) {
      return mergedStep;
    }

    return pushable >= 0 ? pushable : false;
  }, [pushable, mergedStep]); // ============================ Marks =============================

  var markList = React.useMemo(function () {
    var keys = Object.keys(marks || {});
    return keys.map(function (key) {
      var mark = marks[key];
      var markObj = {
        value: Number(key)
      };

      if (mark && _typeof(mark) === 'object' && ! /*#__PURE__*/React.isValidElement(mark) && ('label' in mark || 'style' in mark)) {
        markObj.style = mark.style;
        markObj.label = mark.label;
      } else {
        markObj.label = mark;
      }

      return markObj;
    }).filter(function (_ref) {
      var label = _ref.label;
      return label || typeof label === 'number';
    }).sort(function (a, b) {
      return a.value - b.value;
    });
  }, [marks]); // ============================ Format ============================

  var _useOffset = useOffset(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush),
      _useOffset2 = _slicedToArray$1(_useOffset, 2),
      formatValue = _useOffset2[0],
      offsetValues = _useOffset2[1]; // ============================ Values ============================


  var _useMergedState = useMergedState(defaultValue, {
    value: value
  }),
      _useMergedState2 = _slicedToArray$1(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var rawValues = React.useMemo(function () {
    var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];

    var _valueList = _slicedToArray$1(valueList, 1),
        _valueList$ = _valueList[0],
        val0 = _valueList$ === void 0 ? mergedMin : _valueList$;

    var returnValues = mergedValue === null ? [] : [val0]; // Format as range

    if (range) {
      returnValues = _toConsumableArray(valueList); // When count provided or value is `undefined`, we fill values

      if (count || mergedValue === undefined) {
        var pointCount = count >= 0 ? count + 1 : 2;
        returnValues = returnValues.slice(0, pointCount); // Fill with count

        while (returnValues.length < pointCount) {
          var _returnValues;

          returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
        }
      }

      returnValues.sort(function (a, b) {
        return a - b;
      });
    } // Align in range


    returnValues.forEach(function (val, index) {
      returnValues[index] = formatValue(val);
    });
    return returnValues;
  }, [mergedValue, range, mergedMin, count, formatValue]); // =========================== onChange ===========================

  var rawValuesRef = React.useRef(rawValues);
  rawValuesRef.current = rawValues;

  var getTriggerValue = function getTriggerValue(triggerValues) {
    return range ? triggerValues : triggerValues[0];
  };

  var triggerChange = function triggerChange(nextValues) {
    // Order first
    var cloneNextValues = _toConsumableArray(nextValues).sort(function (a, b) {
      return a - b;
    }); // Trigger event if needed


    if (onChange && !shallowequal(cloneNextValues, rawValuesRef.current)) {
      onChange(getTriggerValue(cloneNextValues));
    } // We set this later since it will re-render component immediately


    setValue(cloneNextValues);
  };

  var changeToCloseValue = function changeToCloseValue(newValue) {
    if (!disabled) {
      var valueIndex = 0;
      var valueDist = mergedMax - mergedMin;
      rawValues.forEach(function (val, index) {
        var dist = Math.abs(newValue - val);

        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index;
        }
      }); // Create new values

      var cloneNextValues = _toConsumableArray(rawValues);

      cloneNextValues[valueIndex] = newValue; // Fill value to match default 2

      if (range && !rawValues.length && count === undefined) {
        cloneNextValues.push(newValue);
      }

      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(cloneNextValues));
      triggerChange(cloneNextValues);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(cloneNextValues));
    }
  }; // ============================ Click =============================


  var onSliderMouseDown = function onSliderMouseDown(e) {
    e.preventDefault();

    var _containerRef$current = containerRef.current.getBoundingClientRect(),
        width = _containerRef$current.width,
        height = _containerRef$current.height,
        left = _containerRef$current.left,
        top = _containerRef$current.top,
        bottom = _containerRef$current.bottom,
        right = _containerRef$current.right;

    var clientX = e.clientX,
        clientY = e.clientY;
    var percent;

    switch (direction) {
      case 'btt':
        percent = (bottom - clientY) / height;
        break;

      case 'ttb':
        percent = (clientY - top) / height;
        break;

      case 'rtl':
        percent = (right - clientX) / width;
        break;

      default:
        percent = (clientX - left) / width;
    }

    var nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue));
  }; // =========================== Keyboard ===========================


  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      keyboardValue = _React$useState2[0],
      setKeyboardValue = _React$useState2[1];

  var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
    if (!disabled) {
      var next = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValues));
      triggerChange(next.values);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(next.values));
      setKeyboardValue(next.value);
    }
  };

  React.useEffect(function () {
    if (keyboardValue !== null) {
      var valueIndex = rawValues.indexOf(keyboardValue);

      if (valueIndex >= 0) {
        handlesRef.current.focus(valueIndex);
      }
    }

    setKeyboardValue(null);
  }, [keyboardValue]); // ============================= Drag =============================

  var mergedDraggableTrack = React.useMemo(function () {
    if (draggableTrack && mergedStep === null) {
      if (process.env.NODE_ENV !== 'production') {
        warningOnce(false, '`draggableTrack` is not supported when `step` is `null`.');
      }

      return false;
    }

    return draggableTrack;
  }, [draggableTrack, mergedStep]);

  var finishChange = function finishChange() {
    onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(rawValuesRef.current));
  };

  var _useDrag = useDrag(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues),
      _useDrag2 = _slicedToArray$1(_useDrag, 4),
      draggingIndex = _useDrag2[0],
      draggingValue = _useDrag2[1],
      cacheValues = _useDrag2[2],
      onStartDrag = _useDrag2[3];

  var onStartMove = function onStartMove(e, valueIndex) {
    onStartDrag(e, valueIndex);
    onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValuesRef.current));
  }; // Auto focus for updated handle


  var dragging = draggingIndex !== -1;
  React.useEffect(function () {
    if (!dragging) {
      var valueIndex = rawValues.lastIndexOf(draggingValue);
      handlesRef.current.focus(valueIndex);
    }
  }, [dragging]); // =========================== Included ===========================

  var sortedCacheValues = React.useMemo(function () {
    return _toConsumableArray(cacheValues).sort(function (a, b) {
      return a - b;
    });
  }, [cacheValues]); // Provide a range values with included [min, max]
  // Used for Track, Mark & Dot

  var _React$useMemo = React.useMemo(function () {
    if (!range) {
      return [mergedMin, sortedCacheValues[0]];
    }

    return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
  }, [sortedCacheValues, range, mergedMin]),
      _React$useMemo2 = _slicedToArray$1(_React$useMemo, 2),
      includedStart = _React$useMemo2[0],
      includedEnd = _React$useMemo2[1]; // ============================= Refs =============================


  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        handlesRef.current.focus(0);
      },
      blur: function blur() {
        var _document = document,
            activeElement = _document.activeElement;

        if (containerRef.current.contains(activeElement)) {
          activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
        }
      }
    };
  }); // ========================== Auto Focus ==========================

  React.useEffect(function () {
    if (autoFocus) {
      handlesRef.current.focus(0);
    }
  }, []); // =========================== Context ============================

  var context = React.useMemo(function () {
    return {
      min: mergedMin,
      max: mergedMax,
      direction: direction,
      disabled: disabled,
      step: mergedStep,
      included: included,
      includedStart: includedStart,
      includedEnd: includedEnd,
      range: range,
      tabIndex: tabIndex,
      ariaLabelForHandle: ariaLabelForHandle,
      ariaLabelledByForHandle: ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle: ariaValueTextFormatterForHandle
    };
  }, [mergedMin, mergedMax, direction, disabled, mergedStep, included, includedStart, includedEnd, range, tabIndex, ariaLabelForHandle, ariaLabelledByForHandle, ariaValueTextFormatterForHandle]); // ============================ Render ============================

  return /*#__PURE__*/React.createElement(SliderContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), vertical), _defineProperty(_classNames, "".concat(prefixCls, "-horizontal"), !vertical), _defineProperty(_classNames, "".concat(prefixCls, "-with-marks"), markList.length), _classNames)),
    style: style,
    onMouseDown: onSliderMouseDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-rail"),
    style: railStyle
  }), /*#__PURE__*/React.createElement(Tracks, {
    prefixCls: prefixCls,
    style: trackStyle,
    values: sortedCacheValues,
    startPoint: startPoint,
    onStartMove: mergedDraggableTrack ? onStartMove : null
  }), /*#__PURE__*/React.createElement(Steps, {
    prefixCls: prefixCls,
    marks: markList,
    dots: dots,
    style: dotStyle,
    activeStyle: activeDotStyle
  }), /*#__PURE__*/React.createElement(Handles, {
    ref: handlesRef,
    prefixCls: prefixCls,
    style: handleStyle,
    values: cacheValues,
    draggingIndex: draggingIndex,
    onStartMove: onStartMove,
    onOffsetChange: onHandleOffsetChange,
    onFocus: onFocus,
    onBlur: onBlur,
    handleRender: handleRender
  }), /*#__PURE__*/React.createElement(Marks, {
    prefixCls: prefixCls,
    marks: markList,
    onClick: changeToCloseValue
  })));
});

if (process.env.NODE_ENV !== 'production') {
  Slider$1.displayName = 'Slider';
}

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
    return (React__default.createElement(SliderWrapper, null,
        React__default.createElement(Slider$1, { min: min, max: max, step: step, disabled: disabled, onChange: onChange, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : min })));
};

const MenuContainer = styled.div `
  position: relative;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  overflow: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
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
    return (React__default.createElement(MenuItemWrapper, { tabIndex: isVisible ? undefined : -1, as: as, className: className, type: as === undefined ? 'button' : undefined, href: as === 'a' ? href : undefined, onClick: onClick },
        icon && React__default.createElement(MenuIcon, null, icon),
        children && React__default.createElement(MenuLabel, null, children)));
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
    return (React__default.createElement(MenuContainer, { className: className, isVisible: isVisible },
        React__default.createElement(MenuWrapper, { ref: ref, "$align": align }, getMutableChildrenArray().reduce((acc, child, i) => {
            if (child) {
                acc.push(cloneElement(child, {
                    key: i,
                    isVisible: isVisible,
                }));
            }
            return acc;
        }, []))));
};
Menu.Item = Item;
const withStaticProps = (forwarded, staticProps) => Object.assign(forwarded, staticProps);
const ForwardedMenu = withStaticProps(forwardRef(Menu), {
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
const Container$3 = styled.div `
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
            return React__default.createElement(SvgInfoCircleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" });
        case 'success':
            return React__default.createElement(SvgCircleCheckFilled, { width: 32, height: 32, viewBox: "0 0 24 24" });
        case 'warning':
            return React__default.createElement(SvgAlertTriangleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" });
        case 'error':
            return React__default.createElement(SvgAlertCircleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" });
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
    return (React__default.createElement(ProgressWrapper, null,
        React__default.createElement(Progress, { "$duration": duration, "$color": color, onAnimationEnd: onAnimationEnd })));
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
    return (React__default.createElement(Container$3, { onClick: handleClick },
        React__default.createElement(Inner, null,
            React__default.createElement(InnerLeft, { "$color": color }, icon),
            React__default.createElement(InnerRight, null,
                !!title && React__default.createElement(Title, { "$color": color }, title),
                !!message && React__default.createElement(Message, null, message))),
        React__default.createElement(ProgressBar, { duration: duration, color: color, onAnimationEnd: handleAnimationEnd }),
        React__default.createElement(CloseButton, { type: "button", onClick: handleCloseClick, "aria-label": "close" },
            React__default.createElement(SvgX, { width: 20, height: 20, viewBox: "0 0 24 24" }))));
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
    return createPortal(React__default.createElement(ToasterContext.Provider, { value: value }, toasts.map((_a, index) => {
        var { closing, bottom = 10, left = 10, onTransitionEnd } = _a, props = __rest(_a, ["closing", "bottom", "left", "onTransitionEnd"]);
        return (React__default.createElement(Positioner, { "$closing": closing, "$index": index, "$bottom": bottom, "$left": left, key: props.id, onTransitionEnd: onTransitionEnd },
            React__default.createElement(MemoizedToast, Object.assign({}, props))));
    })), getOrCreatePortalElement());
};

const Container$2 = styled.div `
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

  & option {
    color: ${COLORS.charade};
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
const StyledChevronDownIcon$1 = styled(SvgChevronDown) `
  color: ${COLORS.silverChalice};
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
`;
const StyledXIcon$1 = styled(SvgX) `
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
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
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
const StyledSelect$1 = styled.select `
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;
const Select = ({ disabled, className, id, placeholder = '', name, value = '', options, onChange, }, ref) => {
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
    return (React__default.createElement(Container$2, { className: className },
        React__default.createElement(Caption, { "$hasValue": !!selectedOption }, (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _b !== void 0 ? _b : placeholder),
        React__default.createElement(StyledChevronDownIcon$1, { "$hidden": !!value, width: 20, height: 20, viewBox: "0 0 24 24" }),
        React__default.createElement(Hider, null,
            React__default.createElement(StyledSelect$1, { disabled: disabled, id: derivedId, ref: innerRef, value: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value, name: name, placeholder: placeholder, onChange: onChange },
                React__default.createElement("option", { value: "" }, placeholder), (_c = options === null || options === void 0 ? void 0 : options.map) === null || _c === void 0 ? void 0 :
                _c.call(options, option => {
                    var _a;
                    return (React__default.createElement("option", { key: (_a = option.id) !== null && _a !== void 0 ? _a : `${option.value}-${option.label}`, value: option.value }, option.label));
                }))),
        React__default.createElement(ClearButtonWrapper, { "$hidden": !value },
            React__default.createElement(ClearButton, { disabled: disabled, type: "button", onClick: handleClearClick, "aria-label": "clear" },
                React__default.createElement(StyledXIcon$1, { width: 20, height: 20, viewBox: "0 0 24 24" })))));
};
const ForwardedSelect = forwardRef(Select);

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
function getFocusBorderColor$1({ $variant }) {
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
const Label$1 = styled.label `
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
  border: 1px solid ${getVariantColor$1};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  resize: ${props => (props.$resizable ? 'both' : 'none')};
  transition: border-color 140ms ease-in;

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor$1};
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
    return (React__default.createElement(Container$1, { className: className },
        !!label && React__default.createElement(Label$1, { htmlFor: derivedId }, label),
        React__default.createElement(StyledTextArea, { "$resizable": resizable, "$variant": variant, required: required, disabled: disabled, autoFocus: autoFocus, rows: rows, ref: ref, id: derivedId, name: name, value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChange }),
        !!helperText && (React__default.createElement(HelperText$1, { "$animate": shouldAnimate, "$variant": variant, onAnimationEnd: handleAnimationEnd }, helperText))));
};
const ForwardedTextArea = forwardRef(TextArea);

function CustomSelect(props) {
    return React__default.createElement(Select$1, Object.assign({}, props));
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
function getVariantColor({ variant }) {
    switch (variant) {
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
function getIconColor({ $active, $variant, }) {
    if (!$active) {
        return COLORS.silverChalice;
    }
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
function getIconLeft({ $size }) {
    switch ($size) {
        case 'large':
            return 24;
        case 'medium':
        default:
            return 16;
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
function getPaddingRight({ size }) {
    switch (size) {
        case 'large':
            return 24;
        case 'medium':
        default:
            return 16;
    }
}
function getPaddingLeft({ size }) {
    return getIconSize({ $size: size }) + getIconLeft({ $size: size }) * 1.5;
}
function getPadding({ size }) {
    switch (size) {
        case 'large':
            return '16px 24px';
        case 'medium':
        default:
            return '8px 16px';
    }
}
function getInputHeight({ size }) {
    switch (size) {
        case 'large':
            return 56;
        case 'medium':
        default:
            return 40;
    }
}
function getInputFontSize({ size }) {
    switch (size) {
        case 'large':
            return 18;
        case 'medium':
        default:
            return 16;
    }
}
function getInputLineHeight({ size }) {
    switch (size) {
        case 'large':
            return 1.1667; // 21px
        case 'medium':
        default:
            return 1.1875; // 19px
    }
}
function getFocusBorderColor({ variant }) {
    switch (variant) {
        case 'default':
            return COLORS.havelockBlue;
        default:
            return false;
    }
}
function getTagFontSize({ size }) {
    switch (size) {
        case 'medium':
        default:
            return 12;
    }
}
function getTagLineHeight({ size }) {
    switch (size) {
        case 'medium':
        default:
            return 1.1667; // 14px
    }
}
function getRemoveSize({ size }) {
    switch (size) {
        case 'medium':
        default:
            return 12;
    }
}
const StyledChevronDownIcon = styled(SvgChevronDown) `
  color: ${COLORS.silverChalice};
`;
const StyledXIcon = styled(SvgX) `
  color: ${COLORS.silverChalice};
`;
const StyledClearIndicator = styled.button `
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
`;
const StyledMultiValueRemove = styled.button `
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
const HelperText = styled.span `
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor};
  transition: color 280ms ease;

  ${props => props.animate &&
    css `
      animation: ${animateHelperText} 280ms ease;
    `}
`;
const Container = styled.div `
  display: flex;
  flex-direction: column;
`;
const SelectWrapper = styled.div `
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const IconWrapper = styled.div `
  z-index: 1;
  position: absolute;
  top: 0;
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
const StyledSelect = styled(CustomSelect) `
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

    ${props => props.icon &&
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
`;
const StyledMenu = styled.div `
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
`;
function CustomControl(props) {
    const { children, menuIsOpen, selectProps } = props;
    const { animate, value, variant, size, icon, helperText, onAnimationEnd } = selectProps;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(components.Control, Object.assign({}, props),
            children,
            !!icon && (React__default.createElement(IconWrapper, { "$active": !!value && value.length > 0, "$animate": animate, "$variant": variant, "$size": size, key: variant, onAnimationEnd: onAnimationEnd }, icon))),
        !!helperText && !menuIsOpen && (React__default.createElement(HelperText, { animate: animate, variant: variant, onAnimationEnd: onAnimationEnd }, helperText))));
}
function CustomDropdownIndicator(props) {
    return React__default.createElement(StyledChevronDownIcon, null);
}
function CustomClearIndicator(props) {
    const innerProps = props.innerProps;
    return (React__default.createElement(StyledClearIndicator, Object.assign({ type: "button" }, innerProps),
        React__default.createElement(StyledXIcon, { width: 18, height: 18, viewBox: "0 0 24 24" })));
}
function CustomMenu({ selectProps, innerProps, children, }) {
    const customProps = selectProps;
    return (React__default.createElement(StyledMenu, Object.assign({ variant: customProps.variant, size: customProps.size }, innerProps), children));
}
function CustomMultiValueRemove(props) {
    const innerProps = props.innerProps;
    const customProps = props.selectProps;
    const size = getRemoveSize(customProps);
    return (React__default.createElement(StyledMultiValueRemove, Object.assign({ type: "button" }, innerProps),
        React__default.createElement(SvgX, { width: size, height: size, viewBox: "0 0 24 24" })));
}
const resetStyles = {
    clearIndicator: (provided, props) => {
        const styles = {};
        return styles;
    },
    container: provided => {
        return provided;
    },
    control: (provided, props) => {
        const styles = {
            zIndex: 1,
            position: 'relative',
        };
        return styles;
    },
    dropdownIndicator: (provided, props) => {
        const styles = {};
        return styles;
    },
    group: (provided, props) => {
        const styles = {};
        return styles;
    },
    groupHeading: (provided, props) => {
        const styles = {};
        return styles;
    },
    indicatorsContainer: (provided, props) => {
        const styles = {};
        return styles;
    },
    indicatorSeparator: (provided, props) => {
        const styles = {};
        return styles;
    },
    input: (provided, props) => {
        const styles = __rest(provided, ["margin", "paddingTop", "paddingBottom", "color"]);
        return Object.assign(Object.assign({}, styles), { padding: '0 2px' });
    },
    loadingIndicator: (provided, props) => {
        const styles = {};
        return styles;
    },
    loadingMessage: (provided, props) => {
        const styles = {};
        return styles;
    },
    menu: (provided, props) => {
        const styles = __rest(provided, ["backgroundColor", "borderRadius", "boxShadow", "marginTop", "marginBottom"]);
        return styles;
    },
    menuList: (provided, props) => {
        const styles = __rest(provided, ["paddingTop", "paddingBottom"]);
        return styles;
    },
    menuPortal: provided => {
        return provided;
    },
    multiValue: (provided, props) => {
        const styles = {};
        return styles;
    },
    multiValueLabel: (provided, props) => {
        const styles = {};
        return styles;
    },
    multiValueRemove: (provided, props) => {
        const styles = {};
        return styles;
    },
    noOptionsMessage: (provided, props) => {
        const styles = {};
        return styles;
    },
    option: (provided, props) => {
        const styles = {};
        return styles;
    },
    placeholder: (provided, props) => {
        const styles = {};
        return styles;
    },
    singleValue: (provided, props) => {
        const styles = {};
        return styles;
    },
    valueContainer: (provided, props) => {
        const styles = __rest(provided, ["padding"]);
        return styles;
    },
};
function MultiSelect({ disabled, autoFocus, maxMenuHeight, variant = 'default', size = 'medium', className, id, name, label, menuPortalTarget, placeholder, helperText, value, options = [], icon, noOptionsMessage, onChange, }) {
    var _a;
    const prevVariant = usePrevious(variant);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    function handleAnimationEnd() {
        if (shouldAnimate)
            setShouldAnimate(false);
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
    useEffect(() => {
        if (variant !== prevVariant && !shouldAnimate) {
            setShouldAnimate(true);
        }
    }, [variant, prevVariant, shouldAnimate]);
    const derivedId = getDerivedId();
    return (React__default.createElement(Container, { className: className },
        !!label && React__default.createElement(Label, { htmlFor: derivedId }, label),
        React__default.createElement(SelectWrapper, null,
            React__default.createElement(StyledSelect, { animate: shouldAnimate, icon: icon, variant: variant, size: size, helperText: helperText, isMulti: true, isDisabled: disabled, autoFocus: autoFocus, maxMenuHeight: maxMenuHeight, inputId: derivedId, name: name, classNamePrefix: "jobello-select", placeholder: placeholder, options: options, value: value, menuPortalTarget: menuPortalTarget
                    ? (_a = document.getElementById(menuPortalTarget)) !== null && _a !== void 0 ? _a : undefined
                    : undefined, styles: resetStyles, noOptionsMessage: noOptionsMessage, onChange: onChange, onAnimationEnd: handleAnimationEnd, components: {
                    Control: CustomControl,
                    DropdownIndicator: CustomDropdownIndicator,
                    ClearIndicator: CustomClearIndicator,
                    Menu: CustomMenu,
                    MultiValueRemove: CustomMultiValueRemove,
                } }))));
}

export { Avatar, Button, ForwardedCheckbox as Checkbox, GlobalStyle, ForwardedMenu as Menu, MultiSelect, ForwardedRadioButton as RadioButton, ForwardedSelect as Select, Slider, Spinner, Switcher, ForwardedTextArea as TextArea, ForwardedTextField as TextField, MemoizedToast as Toast, Toaster, globalStyle };
