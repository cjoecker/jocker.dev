const colors = require('./app/constants/colors.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
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
			grey: colors.grey,
			'neutral-dark': colors['neutral-dark'],
		},
		fontFamily: {
			body: ['"raleway"', 'Arial'],
		},
		fontWeight: {
			normal: 400,
			semibold: 600,
			bold: 800,
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			md: '1.3rem',
			lg: '1.5rem',
			xl: '2rem',
			'2xl': '4rem',
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
		},
	},
	plugins: [],
};
