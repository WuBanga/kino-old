module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      brightness: {
        30: '0.3',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      brightness: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
