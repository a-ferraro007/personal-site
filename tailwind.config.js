module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Baloo 2"', 'cursive'],
      secondary: ['"Fira Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-light': '#F7F7F7',
        'primary-text': '#1D1934',
        'primary-dark-mode': '#1D3E53',
        'dark-mode-text': '#77ABB7',
        'primary-border': '#ad8fdb',
        'dark-mode-cta': '#254B62',
        'ice-white': '#EEEEEE'
      },
      borderRadius: {
        img: '150px',
        'img-container': '160px'
      },
      fontSize: {
        64: '64px'
      },
      inset: {
        12: '12px',
        20: '20px',
        25: '25px',
        70: '70px'
      },
      margin: {
        25: '25px',
        175: '75px'
      },
      width: {},
      maxWidth: {
        528: '528px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
