import process from 'node:process';
import bundleAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import images from 'remark-images';
import externalLinks from 'remark-external-links';

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [externalLinks, images],
	},
});

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	experimental: {
		mdxRs: true,
	},
};

export default withBundleAnalyzer(withMDX(nextConfig));
