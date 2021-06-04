import React from 'react'
import { Header } from '../Header/Header'

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main {...props}>{children}</main>
    </div>
  )
}

export default Layout
