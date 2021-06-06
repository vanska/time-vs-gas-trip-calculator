import React from 'react'
import { css } from '@emotion/react'
import { Slider } from '../Slider/Slider'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setDistance } from '../../redux/calculatorSlice'
import { theme } from '../../styles/theme'
import { distanceRegex } from '../../utils/regExes'
import { titleStyle } from '../../styles/text'
import { inputBorder } from '../../styles/input'
import { pxApp } from '../../styles/padding'

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
    <div css={pxApp}>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: theme.space[2],
          gap: theme.space[2],
        }}
      >
        <div css={css(titleStyle, { flex: 1 })}>Set trip distance</div>
        <label css={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <input
            css={{
              fontWeight: 700,
              width: '6rem',
              color: theme.colors.blue,
              ...inputBorder,
              padding: theme.space[0],
              textAlign: 'center',
              fontSize: theme.text.fontSize.xl,
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
