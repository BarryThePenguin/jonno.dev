import {type PropsWithChildren} from 'react';
import type {MDXComponents} from 'mdx/types';
import {MDXProvider, useMDXComponents} from '@mdx-js/react';
import {useThemedStylesWithMdx} from '@theme-ui/mdx';
import {type Theme, ThemeProvider} from 'theme-ui';

type ProviderProps = PropsWithChildren<{
	components: MDXComponents;
	theme: Theme;
}>;

export function Provider({children, theme, components}: ProviderProps) {
	const componentsWithStyles = useThemedStylesWithMdx(
		useMDXComponents(components),
	);

	return (
		<ThemeProvider theme={theme}>
			<MDXProvider components={componentsWithStyles}>{children}</MDXProvider>
		</ThemeProvider>
	);
}
