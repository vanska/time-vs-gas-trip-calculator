const blue = '#0069E5'
const darkBlue = '#0075FF'

export const theme = {
  breakpoints: {
    xs: 480,
    s: 768,
  },
  colors: {
    blue: blue,
    darkBlue: darkBlue,
    background: {
      grey: '#F6F6F6',
    },
    gradient: {
      blue: `linear-gradient(180deg, ${blue} 0%, ${darkBlue} 100%)`,
    },
    text: {
      body: '#404040',
      secondary: '#545454',
    },
    border: {
      input: '#C9C9C9',
    },
  },
  text: {
    fontSize: {
      s: '.75rem',
      m: '1.125rem',
      l: '1.25rem',
      xl: '2rem',
    },
  },
  border: {
    radius: '.5rem',
  },
  space: ['0.25rem', '0.5rem', '1rem', '2rem'],
}
