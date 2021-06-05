import React, { useState } from 'react'
import { theme } from '../../styles/theme'
import { INITIAL_SLIDER_MAX_VALUE } from '../../constants/constants'

type Props = {
  value: number
  onChange: (value: string) => void
}

export type TInputRef = HTMLInputElement

export const Slider = React.forwardRef<TInputRef, Props>(function Slider({ value, onChange }: Props, ref) {
  const [maxValue, setMaxValue] = useState(INITIAL_SLIDER_MAX_VALUE)

  if (value > maxValue) {
    setMaxValue(value)
  }

  function onSliderChangeInternalHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value
    onChange(inputValue)
    setTimeout(() => {
      if (+inputValue === maxValue && maxValue < 9000) {
        const newMaxValue = maxValue + INITIAL_SLIDER_MAX_VALUE
        setMaxValue(newMaxValue)
        onChange((newMaxValue - 1).toString())
      }
      if (+inputValue === 1 && maxValue > INITIAL_SLIDER_MAX_VALUE) {
        const newMaxValue = maxValue - INITIAL_SLIDER_MAX_VALUE
        setMaxValue(newMaxValue)
        onChange('2')
      }
    }, 400)
  }

  return (
    <div>
      <div css={{ display: 'flex', justifyContent: 'space-between', color: theme.colors.text.secondary }}>
        <div>1 km</div>
        <div>{`${maxValue} km`}</div>
      </div>
      <label css={{ height: '2rem', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          ref={ref}
          min={1}
          max={maxValue}
          value={value}
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
