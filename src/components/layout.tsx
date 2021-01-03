/** @jsx jsx */
import {jsx, Box, ThemeProvider} from 'theme-ui';
import {MDXProvider} from '@mdx-js/react';
import {FC} from 'react';
import PropTypes from 'prop-types';
import {Global} from '@emotion/core';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {fontFace} from 'polished';
import theme from '../theme';
import Link from './link';

const Analytics = dynamic(async () => import('./analytics'), {
	ssr: false
});

const Reset: FC = () => (
	<Global
		styles={{
			'html, body, #__next': {
				height: '100%'
			},
			svg: {
				fill: 'currentColor'
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

type WrapperProps = {
	background?: string;
};

const Wrapper: FC<WrapperProps> = ({background, ...props}) => {
	if (background) {
		return (
			<Box
				bg={background}
				p={8}
				sx={{
					border: 'solid',
					borderWidth: 8,
					borderColor: 'gray.8'
				}}
				{...props}
			/>
		);
	}

	return <Box {...props} />;
};

Wrapper.propTypes = {
	background: PropTypes.string
};

const components = {
	a: Link,
	wrapper: Wrapper
};

const Layout: React.FC = ({children}) => (
	<>
		<Head>
			<meta name="theme-color" content={theme.colors.primary} />
		</Head>
		<Reset />
		<Fonts />
		<ThemeProvider theme={theme}>
			<MDXProvider components={components}>
				<Box
					p={[4, 8]}
					sx={{
						minHeight: '100%',
						backgroundImage: `repeating-linear-gradient(
				45deg,
				${theme.colors.pink[4]},
				${theme.colors.pink[4]} 10px,
				${theme.colors.white} 10px,
				${theme.colors.white} 20px
			)`
					}}
				>
					{children}
				</Box>
			</MDXProvider>
		</ThemeProvider>
		<Analytics />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
