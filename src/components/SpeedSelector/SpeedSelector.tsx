import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setSpeed } from '../../redux/calculatorSlice'
import { SpeedInput, ButtonPropTypes } from '../SpeedInput/SpeedInput'
import { speedRegEx } from '../../utils/regExes'

export function SpeedSelector() {
  const dispatch = useAppDispatch()
  const speeds = useAppSelector(state => state.calculator.speeds)
  const consumptionsPer100Km = useAppSelector(state => state.calculator.consumptionsPer100Km)

  function speedInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const speedIndex = e.currentTarget.name
    const inputValue = e.currentTarget.value
    if (inputValue === '' || speedRegEx.test(inputValue)) {
      dispatch(setSpeed({ index: +speedIndex, value: +inputValue }))
    }
  }

  function buttonClickHandler({ type, index }: ButtonPropTypes) {
    switch (type) {
      case 'increment':
        dispatch(setSpeed({ index: index, value: speeds[index] + 1 }))
        break
      case 'decrement':
        dispatch(setSpeed({ index: index, value: speeds[index] - 1 }))
        break
      default:
        break
    }
  }

  return (
    <div css={{ padding: '2rem' }}>
      <h2>Compare travel speeds</h2>
      <div css={{ display: 'flex', gap: '2rem' }}>
        {speeds.map((speed, i) => (
          <div key={`speed-${i}`} css={{ flex: 1 }}>
            <SpeedInput
              index={i}
              consumption={consumptionsPer100Km[i]}
              speed={speed}
              onChange={speedInputChangeHandler}
              buttonClickHandler={buttonClickHandler}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
