import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

export type SliderProps = {
  onChange?: (number: number | number[]) => void
  disabled?: boolean
  min?: number
  max?: number
  step?: number
}

const SliderWrapper = styled.div`
  * {
    border-color: none;
  }
  .rc-slider {
    height: 0;
    display: flex;
    align-items: center;
  }
  .rc-slider-rail {
    height: 2px;
  }
  .rc-slider-track {
    height: 2px;
    background-color: ${COLORS.royalBlue};
  }
  .rc-slider-handle,
  .rc-slider-handle:active {
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
  }
`

const Slider: FC<SliderProps> = ({
  disabled,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <SliderWrapper>
      <RCSlider
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={onChange}
      />
    </SliderWrapper>
  )
}

export default Slider
