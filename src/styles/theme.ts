const blue = '#0074FD'
const lightBlue = '#61A9FF'

export const theme = {
  breakpoints: {
    xs: 480,
    s: 768,
  },
  colors: {
    blue: blue,
    lightBlue: lightBlue,
    background: {
      grey: '#F6F6F6',
    },
    gradient: {
      blue: `linear-gradient(180deg, ${blue} 0%, ${lightBlue} 100%)`,
    },
    text: {
      body: '#404040',
      secondary: '#909090',
    },
    border: {
      input: '#C9C9C9',
    },
  },
  text: {
    fontSize: {
      xs: '.75rem',
    },
  },
  border: {
    radius: '.5rem',
  },
  space: [0.25, 0.5, 1, 2],
}
