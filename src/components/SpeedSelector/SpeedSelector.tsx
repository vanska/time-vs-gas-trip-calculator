import React from 'react'
import { css } from '@emotion/react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setSpeed } from '../../redux/calculatorSlice'
import { SpeedInput, ButtonPropTypes } from '../SpeedInput/SpeedInput'
import { speedRegEx } from '../../utils/regExes'
import { titleStyle } from '../../styles/text'

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

  return (
    <div css={{ padding: '2rem' }}>
      <div css={css(titleStyle, { display: 'flex', justifyContent: 'space-between' })}>
        <div>Compare travel speeds</div>
        <div>km/h</div>
      </div>
      <div css={{ display: 'flex', gap: '2rem' }}>
        {speeds.map((speed, i) => (
          <div key={`speed-${i}`} css={{ flex: 1 }}>
            <SpeedInput
              index={i}
              consumption={consumptionsPer100Km[i]}
              speed={speed}
              onChange={speedInputChangeHandler}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
