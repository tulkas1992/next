module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      colors: {
        primary100: '#EEE3FF',
        secundary: "#44281d",
        pink: "#e4a788",
        yellow: "#f0e14a",
        green: "#97ce4c"

      },
      backgroundColor:{
        primary: "#EEE3FF",
        secundary: "#44281d",
        pink: "#e4a788",
        yellow: "#f0e14a",
        green: "#97ce4c"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
