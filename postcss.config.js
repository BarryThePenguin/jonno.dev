const atImport = require('postcss-import');
const url = require('postcss-url');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');

const customProperties = {
	'--pink': 'rgba(255, 85, 170, 100)',
	'--green': 'rgba(170, 255, 85, 100)',
	'--blue': 'rgba(85, 170, 255, 100)',
	'--white': 'rgba(249, 249, 249, 100)',
	'--black': 'rgba(5, 5, 5, 100)',
	'--greyDarker': 'color(var(--black) tint(13.5%))',
	'--greyDark': 'color(var(--black) tint(20%))',
	'--grey': 'color(var(--black) tint(33.5%))',
	'--greyLight': 'color(var(--black) tint(46.7%))',
	'--greyLighter': 'color(var(--black) tint(93.5%))',

	'--heading': 'var(--blue)',
	'--headingDark': 'color(var(--heading) shade(33%))'
};

module.exports = {
	plugins: [
		atImport(),
		url(),
		postcssPresetEnv({
			stage: 1,
			importFrom: ['css/variables.css']
		}),
		process.env.NODE_ENV === 'production' && cssnano({autoprefixer: false}),
		reporter()
	]
};
