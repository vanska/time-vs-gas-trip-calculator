import { css } from '@emotion/react'

export const flexColumnBase = (gap: number) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    gap: gap + 'rem',
  })
