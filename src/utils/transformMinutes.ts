export function transformMinutes(minutes: number) {
  const modulo = minutes % 60
  const h = (minutes - modulo) / 60
  const min = h >= 1 ? minutes - 60 * h : minutes
  return [h, min]
}
