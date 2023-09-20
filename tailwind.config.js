import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./mdx-components.tsx', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
	theme: {
		extend: {
			boxShadow: {
				nav: 'inset -10px 0px 5px -5px rgba(0,0,0,0.75)',
			},
			backgroundImage: {
				home: 'repeating-linear-gradient(45deg, #ff5eaf, #ff5eaf 10px, white 10px, white 20px)',
			},
			colors: {
				green: {
					50: 'hsl(83, 100%, 95%)',
					100: 'hsl(86, 100%, 89%)',
					200: 'hsl(88, 100%, 79%)',
					300: 'hsl(90, 100%, 67%)',
					400: 'hsl(91, 92%, 55%)',
					500: 'hsl(92, 96%, 44%)',
					600: 'hsl(93, 100%, 35%)',
					700: 'hsl(94, 93%, 27%)',
					800: 'hsl(94, 81%, 23%)',
					900: 'hsl(96, 73%, 20%)',
					950: 'hsl(98, 96%, 10%)',
				},

				blue: {
					50: 'hsl(208, 100%, 97%)',
					100: 'hsl(211, 100%, 93%)',
					200: 'hsl(210, 100%, 87%)',
					300: 'hsl(208, 100%, 78%)',
					400: 'hsl(210, 100%, 67%)',
					500: 'hsl(214, 97%, 60%)',
					600: 'hsl(218, 88%, 53%)',
					700: 'hsl(221, 81%, 48%)',
					800: 'hsl(223, 76%, 40%)',
					900: 'hsl(221, 69%, 33%)',
					950: 'hsl(223, 61%, 21%)',
				},

				pink: {
					50: 'hsl(328, 87%, 97%)',
					100: 'hsl(329, 93%, 95%)',
					200: 'hsl(327, 100%, 90%)',
					300: 'hsl(328, 100%, 82%)',
					400: 'hsl(330, 100%, 67%)',
					500: 'hsl(332, 95%, 60%)',
					600: 'hsl(335, 83%, 51%)',
					700: 'hsl(336, 91%, 42%)',
					800: 'hsl(337, 87%, 35%)',
					900: 'hsl(337, 81%, 30%)',
					950: 'hsl(337, 98%, 17%)',
				},
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.gray.500'),
							transition: 'color .15s ease-in',
							'&:hover': {
								color: theme('colors.blue.400'),
							},
						},
					},
				},
			}),
		},
	},
	plugins: [
		typography,
		plugin(({addUtilities, theme}) => {
			addUtilities({
				'.banner': {
					position: 'relative',
					background: theme('colors.blue.500'),
					boxShadow: '0 2px 4px #718096',
					'&:after': {
						content: '" "',
						position: 'absolute',
						width: 0,
						height: 0,
						left: 0,
						top: '100%',
						borderStyle: 'solid',
						borderColor: `${theme('colors.blue.700')} ${theme(
							'colors.blue.700',
						)} transparent transparent`,
						borderWidth: '0.25rem 0.5rem',
						[`@media (min-width: ${theme('screens.sm')})`]: {
							borderWidth: '0.5rem 1rem',
						},
					},
				},
			});
		}),
	],
};

export default config;
