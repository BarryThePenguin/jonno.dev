const autoprefixer = require('autoprefixer');
const lost = require('lost');
const pxtorem = require('postcss-pxtorem');
const lh = require('postcss-lh');
const typography = require('postcss-typography');

module.exports = {
	plugins: [
		typography({
			googleFonts: [{
				name: 'EB Garamond',
				styles: [
					'400'
				]
			}, {
				name: 'Open Sans',
				styles: [
					'400'
				]
			}],
			headerFontFamily: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
			bodyFontFamily: ['EB Garamond', 'Georgia', 'Times New Roman', 'Times', 'serif'],
			baseFontSize: '20px',
			headerWeight: 'normal',
			bodyWeight: 'normal',
			scaleRatio: 2.35
		}),
		lh(),
		lost(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
		pxtorem()
	]
};
