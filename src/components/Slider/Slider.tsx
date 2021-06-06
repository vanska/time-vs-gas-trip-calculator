import React, { useState, useEffect } from 'react'
import { SliderTypes } from '../../types'
import { theme } from '../../styles/theme'
import { INITIAL_SLIDER_MAX_VALUE, SLIDER_SPEED_MAX_VALUE } from '../../constants/constants'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setDistance, setSpeed } from '../../redux/calculatorSlice'

export type SliderOnChangePropTypes = { value: string; index?: number }

type Props = {
  type: SliderTypes
  speedIndex?: number
}

export type TInputRef = HTMLInputElement

export const Slider = React.forwardRef<TInputRef, Props>(function Slider({ type, speedIndex }: Props, ref) {
  const [distanceMaxValue, setDistanceMaxValue] = useState(INITIAL_SLIDER_MAX_VALUE)

  const dispatch = useAppDispatch()
  const distance = useAppSelector(state => state.calculator.distance)
  const speeds = useAppSelector(state => state.calculator.speeds)

  useEffect(() => {
    if (distance > distanceMaxValue) {
      setDistanceMaxValue(distance)
    }
  }, [distance, distanceMaxValue])

  function onSliderChangeInternalHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value
    switch (type) {
      case 'distance':
        {
          dispatch(setDistance(+inputValue))
          // onChange({ value: inputValue })
          setTimeout(() => {
            if (+inputValue === distanceMaxValue && distanceMaxValue < 9000) {
              const newdistanceMaxValue = distanceMaxValue + INITIAL_SLIDER_MAX_VALUE
              setDistanceMaxValue(newdistanceMaxValue)
              dispatch(setDistance(newdistanceMaxValue - 1))
              // onChange({ value: (newdistanceMaxValue - 1).toString() })
            }
            if (+inputValue === 1 && distanceMaxValue > INITIAL_SLIDER_MAX_VALUE) {
              const newdistanceMaxValue = distanceMaxValue - INITIAL_SLIDER_MAX_VALUE
              setDistanceMaxValue(newdistanceMaxValue)
              dispatch(setDistance(2))
              // onChange({ value: '2' })
            }
          }, 400)
        }
        break
      case 'speed':
        {
          const speedIndex = e.currentTarget.name
          dispatch(setSpeed({ index: +speedIndex, value: +inputValue }))
        }
        break
      default:
        break
    }
  }

  return (
    <div>
      {type === 'distance' ? (
        <div css={{ display: 'flex', justifyContent: 'space-between', color: theme.colors.text.secondary }}>
          <div>1 km</div>
          <div>{`${distanceMaxValue} km`}</div>
        </div>
      ) : null}
      <label css={{ height: '2rem', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          ref={ref}
          min={1}
          max={type === 'distance' ? distanceMaxValue : SLIDER_SPEED_MAX_VALUE}
          value={type === 'distance' ? distance : speeds[speedIndex ? speedIndex : 0]}
          name={type === 'speed' && speedIndex ? speedIndex.toString() : ''}
          type="range"
          tabIndex={-1}
          onChange={onSliderChangeInternalHandler}
          css={{
            display: 'block',
            width: '100%',
            height: 6,
            marginTop: 2,
            cursor: 'pointer',
            appearance: 'none',
            borderRadius: 9999,
            color: 'inherit',
            background: theme.colors.gradient.blue,
            ':focus': {
              outline: 'none',
              color: 'primary',
            },
            '&::-webkit-slider-thumb': {
              appearance: 'none',
              width: '2rem',
              height: '2rem',
              background: theme.colors.background.grey,
              outline: '2px',
              border: `6px solid ${theme.colors.blue}`,
              borderRadius: 9999,
            },
          }}
        />
      </label>
    </div>
  )
})
