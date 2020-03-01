const borderWidths = {
	px: '1px',
	'0': '0',
	'2': '2px',
	'4': '4px',
	'8': '8px'
};

const heading = {
	fontFamily: 'heading',
	lineHeight: 'heading',
	fontWeight: 'heading'
};

// https://gka.github.io/palettes/
const baseColours = {
	white: '#fff',
	// Blue hsl(210, 100%, 67%)
	blue: [
		null,
		'#d0e8ff',
		'#a1d0ff',
		'#70b7ff',
		'#3c9eff',
		'#0080ff',
		'#006ad3',
		'#0054a9',
		'#003f7f',
		'#002d59',
		'#001a35'
	],

	// Pink hsl(330, 100%, 67%)
	pink: [
		null,
		'#ffdbed',
		'#ffb6db',
		'#ff8fc7',
		'#ff5eaf',
		'#fd007f',
		'#d30069',
		'#aa0055',
		'#820041',
		'#5d002f',
		'#3a001d'
	],

	// Green hsl(90, 100%, 67%)
	green: [
		null,
		'#a9ff52',
		'#76ec00',
		'#69d300',
		'#5dba00',
		'#51a200',
		'#458b00',
		'#3a7400',
		'#2f5e00',
		'#254900',
		'#1a3500'
	],

	gray: [
		null,
		'#f7fafc',
		'#edf2f7',
		'#e2e8f0',
		'#cbd5e0',
		'#a0aec0',
		'#718096',
		'#4a5568',
		'#2d3748',
		'#1a202c'
	]
};

const sizes = {
	px: '1px',
	'0': '0',
	'1': '0.25rem',
	'2': '0.5rem',
	'3': '0.75rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'8': '2rem',
	'10': '2.5rem',
	'12': '3rem',
	'16': '4rem',
	'20': '5rem',
	'24': '6rem',
	'32': '8rem',
	'40': '10rem',
	'48': '12rem',
	'56': '14rem',
	'64': '16rem',
	xs: '20rem',
	sm: '24rem',
	md: '28rem',
	lg: '32rem',
	xl: '36rem',
	'2xl': '42rem',
	'3xl': '48rem',
	'4xl': '56rem',
	'5xl': '64rem',
	'6xl': '72rem',
	'1/2': '50%',
	'1/3': '33.333333%',
	'2/3': '66.666667%',
	'1/4': '25%',
	'2/4': '50%',
	'3/4': '75%',
	'1/5': '20%',
	'2/5': '40%',
	'3/5': '60%',
	'4/5': '80%',
	'1/6': '16.666667%',
	'2/6': '33.333333%',
	'3/6': '50%',
	'4/6': '66.666667%',
	'5/6': '83.333333%',
	'1/12': '8.333333%',
	'2/12': '16.666667%',
	'3/12': '25%',
	'4/12': '33.333333%',
	'5/12': '41.666667%',
	'6/12': '50%',
	'7/12': '58.333333%',
	'8/12': '66.666667%',
	'9/12': '75%',
	'10/12': '83.333333%',
	'11/12': '91.666667%',
	full: '100%',
	screenHeight: '100vh',
	screenWidth: '100vw',
	container: '50%'
};

export default {
	borderWidths,
	breakpoints: ['40em', '52em', '64em'],
	space: {
		0: 0,
		px: '1px',
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		8: '2rem',
		10: '2.5rem',
		12: '3rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
		32: '8rem',
		40: '10rem',
		48: '12rem',
		56: '14rem',
		64: '16rem'
	},
	fonts: {
		body: '"EB Garamond", serif',
		heading:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		monospace: 'Menlo, monospace'
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fontWeights: {
		body: 400,
		heading: 400,
		bold: 700
	},
	lineHeights: {
		body: 1.5,
		heading: 2
	},
	colors: {
		...baseColours,
		text: baseColours.gray[8],
		background: `#fff`,
		primary: baseColours.blue[4],
		primaryHover: baseColours.blue[5],
		secondary: baseColours.gray[6],
		headingDark: baseColours.blue[7]
	},
	sizes,
	images: {
		avatar: {
			mx: 'auto',
			my: '8',
			border: 'solid',
			borderWidth: 8,
			borderRadius: 99999,
			borderColor: baseColours.gray[1]
		}
	},
	text: {
		hero: {
			my: 8,
			fontSize: 6,
			color: 'white',
			fontFamily: 'heading',
			fontWeight: 'body'
		},
		banner: {
			position: 'relative',
			my: [3, 4],
			ml: [-8, -16],
			pl: [8, 16],
			fontSize: 4,
			width: ['full', '3/5'],
			bg: 'primary',
			boxShadow: '0 2px 4px #718096',

			'&:after': {
				content: '" "',
				position: 'absolute',
				width: 0,
				height: 0,
				left: 0,
				top: '100%',
				borderStyle: 'solid',
				borderColor: `${baseColours.blue[7]} ${baseColours.blue[7]} transparent transparent`,
				borderWidth: ['0.25rem 0.5rem', '0.5rem 1rem']
			}
		}
	},
	links: {
		social: {
			color: 'inherit',
			textDecoration: 'none',
			'&:active': {
				color: 'green.2',
				textDecoration: 'none'
			},
			'&:focus': {
				color: 'green.2',
				textDecoration: 'none'
			},
			'&:hover': {
				color: 'green.2',
				textDecoration: 'none'
			}
		}
	},
	styles: {
		root: {
			margin: 0,
			fontSize: 3,
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			backgroundImage: `repeating-linear-gradient(
				45deg,
				${baseColours.pink[4]},
				${baseColours.pink[4]} 10px,
				${baseColours.white} 10px,
				${baseColours.white} 20px
			)`
		},
		a: {
			color: 'secondary',
			transition: 'color .15s ease-in',
			':hover': {
				color: 'primaryHover'
			}
		},
		h1: {
			...heading,
			fontSize: 5
		},
		h2: {
			...heading,
			fontSize: 4
		},
		h3: {
			...heading,
			fontSize: 3
		},
		h4: {
			...heading,
			fontSize: 2
		},
		h5: {
			...heading,
			fontSize: 1
		},
		h6: {
			...heading,
			fontSize: 0
		},
		hr: {
			my: 6
		},
		pre: {
			fontFamily: 'monospace',
			overflowX: 'auto',
			code: {
				color: 'inherit'
			}
		},
		code: {
			fontFamily: 'monospace',
			fontSize: 'inherit'
		},
		table: {
			width: '100%',
			borderCollapse: 'separate',
			borderSpacing: 0
		},
		th: {
			textAlign: 'left',
			borderBottomStyle: 'solid'
		},
		td: {
			textAlign: 'left',
			borderBottomStyle: 'solid'
		}
	}
};
