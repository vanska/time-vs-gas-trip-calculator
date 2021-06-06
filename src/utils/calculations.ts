export function calculateTimeSpent(distance: number, speed: number) {
  return +((distance / speed) * 60).toFixed(0)
}

export function calculateConsumptionPer100Km(speed: number, baseConsumption: number, multiplier: number) {
  if (speed) {
    return baseConsumption * Math.pow(multiplier, speed - 1)
  }
  return 0
}

export function calculateTotalConsumption(distance: number, consumption: number) {
  return (distance / 100) * consumption
}
