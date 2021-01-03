const bundleAnalyzer = require('@next/bundle-analyzer');
const withOffline = require('next-offline');
const nextMDX = require('@next/mdx');
const images = require('remark-images');
const externalLinks = require('remark-external-links');

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [externalLinks, images]
	}
});

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
	images: {
		domains: ['s.gravatar.com']
	},
	target: 'serverless',
	transformManifest: (manifest) => ['/'].concat(manifest), // Add the homepage to the cache
	// Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
	// turn on the SW in dev mode so that we can actually test it
	generateInDevMode: true,
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	}
};

module.exports = withBundleAnalyzer(withMDX(withOffline(nextConfig)));
