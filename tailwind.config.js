/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		extend: {
			colors:
			{
				'my-dark': '#191728',
				'my-accent-dark': '#382F67',
				'my-accent-light': '#6270B7',
				'my-light': '#8594BE',
				'my-white': '#EBEDF1',
				'my-rgb-dark': 'rgb(25, 23, 40, 100)',
				'my-rgb-accent-dark': 'rgb(56, 47, 103)',
				'my-rgb-accent-light': 'rgb(98, 112, 183)',
				'my-rgb-light': 'rgb(133, 148, 190)',
				'my-rgb-white': 'rgb(235, 237, 241)',
			},
			screens: {
				'min-mobile': '480px',
			},
		},
	},
	plugins: [[require("tw-elements/dist/plugin.cjs")]],
	darkMode: 'class'
}