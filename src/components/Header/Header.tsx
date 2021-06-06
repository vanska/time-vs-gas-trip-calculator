import React from 'react'
import { css } from '@emotion/react'
import { IconTime, IconGas } from '../Icons/Icons'
import { theme } from '../../styles/theme'
import { flexColumnBase } from '../../styles/flex'

export function Header() {
  return (
    <header
      css={{
        zIndex: 10,
        display: 'flex',
        padding: theme.space[2],
        margin: 'auto',
        background: 'white',
        justifyContent: 'center',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
      }}
    >
      <div
        css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, gap: theme.space[2] }}
      >
        <IconTime />
        <div
          css={css(flexColumnBase(0.5), {
            justifyContent: 'center',
            textAlign: 'center',
          })}
        >
          <div css={{ fontSize: theme.text.fontSize.xl, borderBottom: '1px solid #E2E2E2' }}>Time vs. Gas</div>
          <div
            css={{
              textTransform: 'uppercase',
              fontSize: theme.text.fontSize.s,
              color: theme.colors.text.secondary,
              letterSpacing: '.3rem',
            }}
          >
            Trip calculator
          </div>
        </div>
        <IconGas />
      </div>
    </header>
  )
}
