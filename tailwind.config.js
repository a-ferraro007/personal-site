module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Baloo 2"', 'cursive'],
      secondary: ['"Fira Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-light': '#F7F7F7',
        'primary-text': '#1D1934'
      },
      borderRadius: {
        img: '150px'
      },
      fontSize: {
        64: '64px'
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
