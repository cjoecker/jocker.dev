/** @type {import('tailwindcss').Config} */

const colors = require('./src/constants/colors.js');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      "light-grey": colors.lightGrey,
    },
    fontFamily: {
      body: ['"Quicksand"', 'Arial'],
    },
  },
  plugins: [],
};
