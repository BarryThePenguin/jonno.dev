/** @jsx jsx */
import {jsx, Flex, ThemeProvider} from 'theme-ui';
import {FC} from 'react';
import Head from 'next/head';
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
		<>
			<Head>
				<title>Jonathan Haines</title>
			</Head>
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
		</>
	);
};

export default Index;
