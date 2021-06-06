import React from 'react'
import { css } from '@emotion/react'
import { Header } from '../Header/Header'
import { mq } from '../../styles/media'
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
        css={css(flexColumnBase(3), {
          margin: 'auto',
          paddingTop: theme.space[3] + 'rem',
          paddingBottom: theme.space[3] + 'rem',
          [mq.s]: {
            maxWidth: theme.breakpoints.s,
          },
        })}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
