import React from 'react'
import { IconTime, IconGas } from '../Icons/Icons'

export function Header() {
  return (
    <header
      css={{
        zIndex: 10,
        display: 'flex',
        padding: '1rem',
        margin: 'auto',
        background: 'white',
        justifyContent: 'center',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, gap: '1rem' }}>
        <IconTime />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div css={{ fontSize: '2rem', borderBottom: '1px solid #E2E2E2' }}>Time vs. Gas</div>
          <div css={{ textTransform: 'uppercase', fontSize: '.75rem', color: '#909090', letterSpacing: '.3rem' }}>
            Trip calculator
          </div>
        </div>
        <IconGas />
      </div>
    </header>
  )
}
