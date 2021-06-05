import React from 'react'
import { theme } from '../../styles/theme'
import { IconPlus, IconMinus } from '../Icons/Icons'
import { inputBorder } from '../../styles/input'

export type ButtonPropTypes = { type: 'increment' | 'decrement'; index: number }

export function SpeedInput({
  speed,
  index,
  consumption,
  onChange,
  buttonClickHandler,
}: {
  speed: number
  index: number
  consumption: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  buttonClickHandler: ({ type, index }: ButtonPropTypes) => void
}) {
  return (
    <label css={{ display: 'flex', textAlign: 'center', gap: '1rem' }}>
      <div>
        <input
          css={{
            flex: '0 1 auto',
            fontWeight: 700,
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
          <div>km/h</div>
          <div>{`${consumption.toFixed(1)} L /100km`}</div>
        </div>
      </div>
      <div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button tabIndex={-1} onClick={() => buttonClickHandler({ type: 'increment', index: index })}>
          <IconPlus />
        </button>
        <button tabIndex={-1} onClick={() => buttonClickHandler({ type: 'decrement', index: index })}>
          <IconMinus />
        </button>
      </div>
    </label>
  )
}
