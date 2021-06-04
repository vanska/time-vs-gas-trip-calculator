import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CarType } from '../types'
import {
  INITIAL_DISTANCE,
  INITIAL_SPEEDS,
  INITIAL_TIMES_SPENT,
  INITIAL_CONSUMPTIONS_PER_100_KM,
  INITIAL_TOTAL_CONSUMPTIONS,
  CONSUMPTION_MULTIPLIER,
  CARS,
} from '../constants/constants'
import { calculateTimeSpent, calculateTotalConsumption, calculateConsumptionPer100Km } from '../utils/calculations'

interface IBrowserState {
  distance: number
  speeds: number[]
  tripTimes: number[]
  consumptionsPer100Km: number[]
  totalConsumptions: number[]
  selectedCar: { name: string; baseConsumption: number }
}

const initialState: IBrowserState = {
  distance: INITIAL_DISTANCE,
  speeds: INITIAL_SPEEDS,
  tripTimes: INITIAL_TIMES_SPENT,
  consumptionsPer100Km: INITIAL_CONSUMPTIONS_PER_100_KM,
  totalConsumptions: INITIAL_TOTAL_CONSUMPTIONS,
  selectedCar: CARS[0],
}

export const browserSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setCar: (state, action: PayloadAction<CarType>) => {
      const car = action.payload
      state.selectedCar = car
      const consumptionsPer100Km = state.speeds.map(speed =>
        calculateConsumptionPer100Km(speed, car.baseConsumption, CONSUMPTION_MULTIPLIER)
      )
      state.consumptionsPer100Km = consumptionsPer100Km
      state.totalConsumptions = consumptionsPer100Km.map(consumptionPer100Km =>
        calculateTotalConsumption(state.distance, consumptionPer100Km)
      )
    },
    setDistance: (state, action: PayloadAction<number>) => {
      const distance = action.payload
      state.distance = distance
      state.tripTimes = state.speeds.map(speed => calculateTimeSpent(distance, speed))
      state.totalConsumptions = state.consumptionsPer100Km.map(consumption =>
        calculateTotalConsumption(distance, consumption)
      )
    },
    setSpeed: (state, action: PayloadAction<{ index: number; value: number }>) => {
      const speedIndex = action.payload.index
      const speedValue = action.payload.value
      state.speeds[speedIndex] = speedValue
      state.tripTimes[speedIndex] = calculateTimeSpent(state.distance, speedValue)
      const consumptionPer100km = calculateConsumptionPer100Km(
        speedValue,
        state.selectedCar.baseConsumption,
        CONSUMPTION_MULTIPLIER
      )
      state.consumptionsPer100Km[speedIndex] = consumptionPer100km
      state.totalConsumptions[speedIndex] = calculateTotalConsumption(state.distance, consumptionPer100km)
    },
  },
})

export const { setCar, setDistance, setSpeed } = browserSlice.actions

export default browserSlice.reducer
