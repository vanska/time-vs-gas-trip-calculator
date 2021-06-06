import { theme } from './theme'
import { mq } from './media'
import { css } from '@emotion/react'

export const px = (p: string) =>
  css({
    paddingLeft: p,
    paddingRight: p,
  })

export const py = (p: string) =>
  css({
    paddingTop: p,
    paddingBottom: p,
  })

export const pxApp = css(px(theme.space[2]), {
  [mq.s]: {
    ...px(theme.space[3]),
  },
})

export const pyApp = css(py(theme.space[2]), {
  [mq.s]: {
    ...py(theme.space[3]),
  },
})
