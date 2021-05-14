/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Flex, ThemeProvider} from 'theme-ui';
import {Fragment, FC} from 'react';
import {NextSeo} from 'next-seo';
import Home from '../content/home.md';

const heading = {
	fontSize: [4, 6],
	p: [4, 8],
	background: 'white',
	fontWeight: 'bold'
};

const theme = {
	styles: {
		h1: heading,
		h2: heading
	}
};

const Index: FC = () => {
	return (
		<Fragment>
			<NextSeo title="👋🏻" />
			<ThemeProvider theme={theme}>
				<Flex
					sx={{
						minHeight: '100%',
						py: [20, 24],
						mx: [-4, -8],
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
				>
					<Home />
				</Flex>
			</ThemeProvider>
		</Fragment>
	);
};

export default Index;
