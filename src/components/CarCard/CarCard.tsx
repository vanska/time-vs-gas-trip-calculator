import React from 'react'
import { theme } from '../../styles/theme'

export function CarCard({
  car,
  selected,
  onClick,
}: {
  car: { name: string; baseConsumption: number }
  selected: boolean
  onClick: () => void
}) {
  return (
    <div
      css={{
        background: selected ? theme.colors.gradient.blue : 'white',
        color: `${selected ? 'white' : theme.colors.text}`,
        boxShadow: selected ? '0px 4px 8px rgba(0, 0, 0, 0.15)' : '0px 0px 0px rgba(0, 0, 0, 0)',
        transform: selected ? `translateY(-8px)` : 'translateY(0)',
        transition: 'transform .1s ease-in-out, box-shadow .1s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        padding: '1rem',
        borderRadius: '8px',
        outlineColor: theme.colors.blue,
        border: `1px solid ${theme.colors.border.input}`,
        textAlign: 'center',
        '&:hover': {
          background: theme.colors.gradient.blue,
          color: 'white',
        },
      }}
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyPress={onClick}
    >
      <div css={{ fontWeight: 700, fontSize: '2rem' }}>{car.name}</div>
      <div>{`${car.baseConsumption}L / 100km`}</div>
    </div>
  )
}
