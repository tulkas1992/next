module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      colors: {
        primary100: '#EEE3FF',
      },
      backgroundColor:{
        primary: "#EEE3FF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
