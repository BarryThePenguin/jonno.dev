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
			<meta name="theme-color" content={theme.colors.primary} />
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
