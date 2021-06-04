import React from 'react'
import { theme } from '../../styles/theme'
import { IconPlus, IconMinus } from '../Icons/Icons'

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
    <label css={{ display: 'flex', textAlign: 'center' }}>
      <div>
        <input
          css={{
            flex: '0 1 auto',
            fontWeight: 700,
            color: theme.colors.blue,
            width: '100%',
            outline: 0,
            border: 'none',
            textAlign: 'center',
            fontSize: '2rem',
            backgroundColor: 'transparent',
          }}
          name={index.toString()}
          type="number"
          onChange={onChange}
          value={speed ? speed : ''}
        />
        <div>km/h</div>
        <div>{`${consumption.toFixed(1)} L /100km`}</div>
      </div>
      <div css={{ flex: '0 1 auto' }}>
        <button onClick={() => buttonClickHandler({ type: 'increment', index: index })}>
          <IconPlus />
        </button>
        <button onClick={() => buttonClickHandler({ type: 'decrement', index: index })}>
          <IconMinus />
        </button>
      </div>
    </label>
  )
}
