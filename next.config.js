const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	exportTrailingSlash: true,
	experimental: {publicDirectory: true}
});
