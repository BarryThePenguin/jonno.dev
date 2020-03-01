/* eslint-disable import/no-unassigned-import */
import '../css/site.css';
import '../css/print.css';
/* eslint-enable import/no-unassigned-import */

import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Global} from '@emotion/core';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {Styled, ThemeProvider} from 'theme-ui';
import {fontFace} from 'polished';
import theme from '../theme';
import Link from './link';

const Analytics = dynamic(async () => import('./analytics'), {
	ssr: false
});

const Reset: FC = () => (
	<Global
		styles={{
			'html, body': {
				minHeight: '100%'
			},
			svg: {
				fill: 'currentColor'
			},
			body: {
				margin: 0,
				backgroundImage: `repeating-linear-gradient(
					45deg,
					${theme.colors.pink[4]},
					${theme.colors.pink[4]} 10px,
					${theme.colors.white} 10px,
					${theme.colors.white} 20px
				)`
			}
		}}
	/>
);

const Fonts: FC = () => (
	<>
		<Global
			styles={fontFace({
				fontDisplay: 'swap',
				fontFamily: 'EB Garamond',
				fontFilePath: '/static/fonts/eb-garamond-latin-400',
				fileFormats: ['woff', 'woff2'],
				fontWeight: 'regular'
			})}
		/>
		<Global
			styles={fontFace({
				fontDisplay: 'swap',
				fontFamily: 'EB Garamond',
				fontFilePath: '/static/fonts/eb-garamond-latin-700',
				fileFormats: ['woff', 'woff2'],
				fontWeight: 'bold'
			})}
		/>
	</>
);

const baseComponents = {
	a: Link
};

type LayoutProps = {
	components?: Record<string, unknown>;
	children?: React.ReactNode;
	title?: string;
};

const Layout: React.FC<LayoutProps> = ({components, children, title}) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="theme-color" content={theme.colors.primary} />
		</Head>
		<Reset />
		<Fonts />
		<ThemeProvider
			theme={theme}
			// @ts-ignore components needs to be added to types
			components={{...baseComponents, ...components}}
		>
			<Styled.root>{children}</Styled.root>
		</ThemeProvider>
		<Analytics />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	// @ts-ignore components needs to be added to types
	components: PropTypes.object,
	title: PropTypes.string
};

Layout.defaultProps = {
	components: undefined,
	title: 'Jonathan Haines'
};

export default Layout;
