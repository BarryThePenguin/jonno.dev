const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');

module.exports = {
	plugins: [
		require('postcss-easy-import'),
		require('postcss-url'),
		postcssPresetEnv({
			stage: 1,
			importFrom: ['css/variables.css']
		}),
		require('autoprefixer'),
		process.env.NODE_ENV === 'production' && cssnano({autoprefixer: false}),
		reporter()
	]
};
