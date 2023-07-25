import {Flex} from 'theme-ui';
import {NextSeo} from 'next-seo';
import Home from '../content/home.md';
import {Provider} from '../components/provider';

const heading = {
	fontSize: [4, 6],
	p: [4, 8],
	background: 'white',
	fontWeight: 'bold',
};

const theme = {
	styles: {
		h1: heading,
		h2: heading,
	},
};

const components = {
	wrapper({children}) {
		return (
			<Flex
				sx={{
					minHeight: '100%',
					py: [20, 24],
					mx: [-4, -8],
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				{children}
			</Flex>
		);
	},
};

function Index() {
	return (
		<>
			<NextSeo title="👋🏻" />
			<Provider theme={theme} components={components}>
				<Home />
			</Provider>
			<a
				// eslint-disable-next-line react/no-invalid-html-attribute
				rel="me"
				href="https://mastodon.social/@BarryThePenguin"
				title="Mastodon"
				style={{visibility: 'hidden'}}
			>
				Mastodon
			</a>
		</>
	);
}

export default Index;
