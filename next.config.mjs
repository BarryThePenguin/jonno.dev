import process from 'node:process';
import bundleAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import images from 'remark-images';
import externalLinks from 'remark-external-links';

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [externalLinks, images],
		providerImportSource: '@mdx-js/react',
	},
});

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
};

export default withBundleAnalyzer(withMDX(nextConfig));
