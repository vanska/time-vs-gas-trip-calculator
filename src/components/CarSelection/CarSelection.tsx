import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setCar } from '../../redux/calculatorSlice'
import { CARS } from '../../constants/constants'
import { theme } from '../../styles/theme'

function CarCard({
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
        color: selected ? 'white' : theme.colors.text,
        boxShadow: selected ? '0px 8px 12px rgba(0, 0, 0, 0.15)' : '0px 0px 0px rgba(0, 0, 0, 0)',
        transform: selected ? `translateY(-1rem)` : 'translateY(0)',
        transition: 'transform .1s ease-in-out, box-shadow .1s ease-in-out',
        flex: 1,
        padding: '2rem',
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

export function CarSelection() {
  const dispatch = useAppDispatch()
  const selectedCar = useAppSelector(state => state.calculator.selectedCar)
  return (
    <div css={{ padding: '2rem' }}>
      <h2 css={{ fontWeight: 700, marginBottom: '1rem' }}>Car selection</h2>
      <div css={{ display: 'flex', gap: '1rem', justifyContent: 'center', paddingTop: '1rem' }}>
        {CARS.map(car => (
          <CarCard
            key={car.name}
            car={car}
            selected={car.name === selectedCar.name}
            onClick={() => dispatch(setCar(car))}
          />
        ))}
      </div>
    </div>
  )
}
