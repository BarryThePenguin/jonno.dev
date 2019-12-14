import React from 'react';
import {ThemeProvider} from 'theme-ui';
import Layout from '../components/layout';
import Home from '../content/home.md';

const heading = {
	fontSize: [4, 6],
	p: [4, 8],
	my: [20, 24],
	background: 'white',
	fontWeight: 'bold'
};

const theme = {
	styles: {
		h1: heading,
		h2: heading
	}
};

const Index: React.FC = () => {
	return (
		<Layout>
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</Layout>
	);
};

export default Index;
