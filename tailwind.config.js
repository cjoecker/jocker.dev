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
      'neutral': colors.neutral,
    },
    fontFamily: {
      body: ['"raleway"', 'Arial'],
    },
    fontWeight:{
      normal:400,
      semibold:600,
      bold:800
    },
    fontSize: {
      sm: '14px',
      base: '18px',
      lg: '32px',
      xl: '44px',
      '2xl': '96px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
