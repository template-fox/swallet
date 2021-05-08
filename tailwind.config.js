module.exports = {
  purge: ['./*.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        background: "#eaeaf6",
        primary: '#f4f4fc',
        icon: '#141220',
        secondary: '#ee7f3f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
