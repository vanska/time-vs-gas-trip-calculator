import React from 'react'
import { css } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setCar } from '../../redux/calculatorSlice'
import { CARS } from '../../constants/constants'
import { titleStyle } from '../../styles/text'
import { pxApp } from '../../styles/padding'
import { flexColumnBase } from '../../styles/flex'
import { CarCard } from '../CarCard/CarCard'

export function CarSelection() {
  const dispatch = useAppDispatch()
  const selectedCar = useAppSelector(state => state.calculator.selectedCar)
  return (
    <div css={css(pxApp, flexColumnBase(1))}>
      <div css={titleStyle}>Select a car</div>
      <div css={{ display: 'flex', gap: '.5rem', justifyContent: 'space-between', paddingTop: '1rem' }}>
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
