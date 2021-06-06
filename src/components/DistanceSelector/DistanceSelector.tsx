import React from 'react'
import { css } from '@emotion/react'
import { Slider } from '../Slider/Slider'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setDistance } from '../../redux/calculatorSlice'
import { theme } from '../../styles/theme'
import { distanceRegex } from '../../utils/regExes'
import { titleStyle } from '../../styles/text'
import { inputBorder } from '../../styles/input'

export function DistanceSelector() {
  const dispatch = useAppDispatch()
  const distance = useAppSelector(state => state.calculator.distance)

  function distanceInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value
    if (inputValue === '' || distanceRegex.test(inputValue)) {
      dispatch(setDistance(+inputValue))
    }
  }

  return (
    <div css={{ padding: '2rem' }}>
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div css={css(titleStyle, { flex: 1 })}>Trip distance</div>
        <label css={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <input
            css={{
              fontWeight: 700,
              width: '6rem',
              color: theme.colors.blue,
              ...inputBorder,
              padding: '.25rem',
              textAlign: 'center',
              fontSize: '2rem',
              backgroundColor: 'transparent',
            }}
            type="number"
            onChange={distanceInputHandler}
            value={distance ? distance : ''}
          />
        </label>
        <div css={css(titleStyle, { flex: 1, textAlign: 'right' })}>km</div>
      </div>
      <Slider type="distance" />
    </div>
  )
}
