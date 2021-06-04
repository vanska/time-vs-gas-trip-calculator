const defaultTheme = require('tailwindcss/defaultTheme')

const blue = '#0074FD'
const lightBlue = '#61A9FF'

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      'purple-light': '#fcfaff',
      purple: '#639',
      'purple-dark': '#362066',
      blue: blue,
      lightBlue: lightBlue,
      'light-grey': '#F6F6F6',
      'body-grey': '#404040',
      'header-sub-title': '#909090',
      'gradient-blue': `linear-gradient(90deg, ${blue} 0%, ${lightBlue} 100%)`,
    },
    gradient: {
      blue: `linear-gradient(90deg, ${blue} 0%, ${lightBlue} 100%)`,
    },
    fontFamily: {
      sans: ['ManropeVariable', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      body: ['1rem', 1.5],
      h1: ['2.25rem', 1.5],
      header: ['2rem', 1.5],
      'sub-title': ['0.75rem', 1.5],
    },
    extend: {
      outline: theme => ({
        DEFAULT: [`3px solid ${theme('colors.purple-light')}`, '2px'],
      }),
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
}
