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
      pink: colors.pink,
      purple: colors.purple,
      turquoise: colors.turquoise,
      blue: colors.blue,
      green: colors.green,
      neutral: colors.neutral,
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
      lg: '26px',
      xl: '32px',
      '2xl': '64px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
