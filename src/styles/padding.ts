import { theme } from './theme'
import { mq } from './media'
import { css } from '@emotion/react'

export const px = (p: number) =>
  css({
    paddingLeft: p + 'rem',
    paddingRight: p + 'rem',
  })

export const pxApp = css(px(theme.space[2]), {
  [mq.s]: {
    ...px(theme.space[3]),
  },
})
