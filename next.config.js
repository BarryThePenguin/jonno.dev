const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});

module.exports = withCSS(
	withMDX({
		webpack(config) {
			config.module.rules.push({
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]'
					}
				}
			});
			return config;
		}
	})
);
