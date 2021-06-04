import React from 'react'
import { css } from '@emotion/react'
import { Slider } from '../Slider/Slider'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setDistance } from '../../redux/calculatorSlice'
import { theme } from '../../styles/theme'
import { distanceRegex } from '../../utils/regExes'
import { titleStyle } from '../../styles/text'

export function DistanceSelector() {
  const dispatch = useAppDispatch()
  const distance = useAppSelector(state => state.calculator.distance)

  function distanceInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value
    if (inputValue === '' || distanceRegex.test(inputValue)) {
      dispatch(setDistance(+inputValue))
    }
  }

  function onSliderChange(value: string) {
    dispatch(setDistance(+value))
  }

  return (
    <div css={{ padding: '2rem' }}>
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div css={css(titleStyle, { flex: 1 })}>Trip distance</div>
        <label css={{ display: 'flex', flex: 1 }}>
          <input
            css={{
              fontWeight: 700,
              flex: 1,
              width: '6rem',
              color: theme.colors.blue,
              outlineColor: theme.colors.blue,
              border: '2px solid transparent',
              borderRadius: '8px',
              padding: '.25rem',
              textAlign: 'center',
              fontSize: '2rem',
              backgroundColor: 'transparent',
              '&:hover,&:focus': {
                borderColor: theme.colors.border.input,
              },
            }}
            type="number"
            onChange={distanceInputHandler}
            value={distance ? distance : ''}
          />
        </label>
        <div css={css(titleStyle, { flex: 1, textAlign: 'right' })}>km</div>
      </div>
      <Slider value={distance} onChange={onSliderChange} />
    </div>
  )
}
