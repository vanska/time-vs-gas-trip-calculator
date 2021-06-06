import React from 'react'
import { theme } from '../../styles/theme'
import { inputBorder } from '../../styles/input'
import { Slider } from '../Slider/Slider'

export type ButtonPropTypes = { type: 'increment' | 'decrement'; index: number }

export function SpeedInput({
  speed,
  index,
  consumption,
  onChange,
}: {
  speed: number
  index: number
  consumption: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <label
        css={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '1rem', justifyContent: 'center' }}
      >
        <input
          css={{
            flex: '0 1 auto',
            fontWeight: 700,
            margin: 'auto',
            color: theme.colors.blue,
            width: '5rem',
            textAlign: 'center',
            fontSize: '2rem',
            backgroundColor: 'transparent',
            ...inputBorder,
          }}
          name={index.toString()}
          type="number"
          onChange={onChange}
          value={speed ? speed : ''}
        />
        <div css={{ fontWeight: 500 }}>
          <div css={{ fontSize: theme.text.fontSize.xs }}>{`${consumption.toFixed(1)} L /100km`}</div>
        </div>
      </label>
      <Slider type="speed" speedIndex={index} />
    </div>
  )
}
