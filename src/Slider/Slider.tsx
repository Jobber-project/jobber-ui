import RCSlider from 'rc-slider'
// import 'rc-slider/assets/index.css'
import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

export type SliderProps = {
  onChange?: (number: number | number[]) => void
  disabled?: boolean
  min?: number
  max?: number
  step?: number
  defaultValue?: number | number[]
}

const SliderWrapper = styled.div`
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
`

const Slider: FC<SliderProps> = ({
  disabled,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
}) => {
  return (
    <SliderWrapper>
      <RCSlider
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue ?? min}
      />
    </SliderWrapper>
  )
}

export default Slider
