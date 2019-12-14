/* eslint-disable import/no-unassigned-import */
import '../css/site.css';
import '../css/print.css';
/* eslint-enable import/no-unassigned-import */

import React from 'react';
import PropTypes from 'prop-types';
import {Global} from '@emotion/core';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {Styled, ThemeProvider} from 'theme-ui';
import theme from '../theme';

const Analytics = dynamic(async () => import('./analytics'), {
	ssr: false
});

const Reset: React.FC = () => (
	<Global
		styles={{
			body: {
				margin: 0
			}
		}}
	/>
);

type aProps = {
	href: string;
	className: string;
	children: React.ReactNode;
};

const a: React.FC<aProps> = ({href, className, children}) => (
	<Link href={href}>
		<a className={className}>{children} </a>
	</Link>
);

a.propTypes = {
	href: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

const baseComponents = {
	a
};

type LayoutProps = {
	components?: {};
	children?: React.ReactNode;
	title?: string;
};

const Layout: React.FC<LayoutProps> = ({components, children, title}) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="theme-color" content={theme.colors.primary} />
		</Head>
		<ThemeProvider
			theme={theme}
			// @ts-ignore components needs to be added to types
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
