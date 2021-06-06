import React from 'react'
import { theme } from '../../styles/theme'

const SvgBase = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24">
      {children}
    </svg>
  )
}

export const IconTime = () => (
  <SvgBase>
    <path
      d="M15 1.5H9V3.5H15V1.5ZM11 14.5H13V8.5H11V14.5ZM19.03 7.89L20.45 6.47C20.02 5.96 19.55 5.48 19.04 5.06L17.62 6.48C16.07 5.24 14.12 4.5 12 4.5C7.03 4.5 3 8.53 3 13.5C3 18.47 7.02 22.5 12 22.5C16.98 22.5 21 18.47 21 13.5C21 11.38 20.26 9.43 19.03 7.89ZM12 20.5C8.13 20.5 5 17.37 5 13.5C5 9.63 8.13 6.5 12 6.5C15.87 6.5 19 9.63 19 13.5C19 17.37 15.87 20.5 12 20.5Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="3" y1="12" x2="21.2361" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme.colors.blue} />
        <stop offset="1" stopColor={theme.colors.darkBlue} />
      </linearGradient>
    </defs>
  </SvgBase>
)

export const IconGas = () => (
  <SvgBase>
    <path
      d="M22.0267 5.64L22.04 5.62667L17.08 0.666667L15.6667 2.08L18.48 4.89333C17.2267 5.37333 16.3333 6.57333 16.3333 8C16.3333 9.84 17.8267 11.3333 19.6667 11.3333C20.1467 11.3333 20.5867 11.2267 21 11.0533V20.6667C21 21.4 20.4 22 19.6667 22C18.9333 22 18.3333 21.4 18.3333 20.6667V14.6667C18.3333 13.2 17.1333 12 15.6667 12H14.3333V2.66667C14.3333 1.2 13.1333 0 11.6667 0H3.66667C2.2 0 1 1.2 1 2.66667V24H14.3333V14H16.3333V20.6667C16.3333 22.5067 17.8267 24 19.6667 24C21.5067 24 23 22.5067 23 20.6667V8C23 7.08 22.6267 6.24 22.0267 5.64ZM11.6667 9.33333H3.66667V2.66667H11.6667V9.33333ZM19.6667 9.33333C18.9333 9.33333 18.3333 8.73333 18.3333 8C18.3333 7.26667 18.9333 6.66667 19.6667 6.66667C20.4 6.66667 21 7.26667 21 8C21 8.73333 20.4 9.33333 19.6667 9.33333Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="1" y1="12" x2="23.2885" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme.colors.blue} />
        <stop offset="1" stopColor={theme.colors.darkBlue} />
      </linearGradient>
    </defs>
  </SvgBase>
)
