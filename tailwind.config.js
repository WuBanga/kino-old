module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      brightness: {
        30: '0.3',
      },
      gridTemplateRows: {
        mysize: 'auto 1fr',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
