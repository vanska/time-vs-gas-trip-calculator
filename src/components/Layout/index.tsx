import React from 'react'
import { css } from '@emotion/react'
import { Header } from '../Header/Header'
import { pyApp } from '../../styles/padding'
import { theme } from '../../styles/theme'
import { flexColumnBase } from '../../styles/flex'

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main
        {...props}
        css={css(pyApp, flexColumnBase(3), {
          margin: 'auto',
          maxWidth: theme.breakpoints.s,
        })}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
