import 'typeface-eb-garamond';
import '../css/site.css';
import '../css/print.css';

import React from 'react';
import PropTypes from 'prop-types';
import {Global} from '@emotion/core';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {Styled, ThemeProvider} from 'theme-ui';
import theme from '../theme';

const Analytics = dynamic(() => import('./analytics'), {ssr: false});

function Reset() {
	return (
		<Global
			styles={{
				body: {
					margin: 0
				}
			}}
		/>
	);
}

const baseComponents = {
	a({children, href, className}) {
		return (
			<Link href={href}>
				<a className={className}>{children} </a>
			</Link>
		);
	}
};

baseComponents.a.propTypes = {
	href: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

const Layout = ({components, children, title}) => (
	<>
		<Head>
			<title>{title}</title>
			<meta
				name="Description"
				content="Jonathan Haines is software engineer who is passionate about building up new developers, improving experiences between people and technology, and web technologies."
			/>
			<link
				type="text/plain"
				rel="author"
				href="//barrythepenguin.github.io/humans.txt"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<script
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{
					__html:
						'window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;'
				}}
			/>
			<script async src="https://www.google-analytics.com/analytics.js" />
		</Head>
		<ThemeProvider
			theme={theme}
			components={{...baseComponents, ...components}}
		>
			<Reset />
			<Styled.root>{children}</Styled.root>
		</ThemeProvider>
		<Analytics />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	components: PropTypes.object,
	title: PropTypes.string
};

Layout.defaultProps = {
	components: undefined,
	title: 'Jonathan Haines'
};

export default Layout;
