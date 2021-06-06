import { calculateTimeSpent, calculateConsumptionPer100Km, calculateTotalConsumption } from '../utils/calculations'

export const CARS = [
  { name: 'A', baseConsumption: 3 },
  { name: 'B', baseConsumption: 3.5 },
  { name: 'C', baseConsumption: 4 },
]

export const CONSUMPTION_MULTIPLIER = 1.009
export const INITIAL_DISTANCE = 500
export const INITIAL_SPEEDS = [80, 120]

export const INITIAL_TIMES_SPENT = INITIAL_SPEEDS.map(speed => calculateTimeSpent(INITIAL_DISTANCE, speed))

export const INITIAL_CONSUMPTIONS_PER_100_KM = INITIAL_SPEEDS.map(speed =>
  calculateConsumptionPer100Km(speed, CARS[0].baseConsumption, CONSUMPTION_MULTIPLIER)
)

export const INITIAL_TOTAL_CONSUMPTIONS = INITIAL_CONSUMPTIONS_PER_100_KM.map(consumptionPer100Km =>
  calculateTotalConsumption(INITIAL_DISTANCE, consumptionPer100Km)
)

export const INITIAL_SLIDER_MAX_VALUE = 1000
export const SLIDER_SPEED_MAX_VALUE = 150
