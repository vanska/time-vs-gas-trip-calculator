import { theme } from './theme'

export const mq = Object.entries(theme.breakpoints).reduce((p, c) => {
  p[c[0]] = `@media (min-width: ${c[1]}px)`
  return p
}, {})
