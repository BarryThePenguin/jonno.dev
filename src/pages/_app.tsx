import '../css/site.css';
import '../css/print.css';

import PropTypes from 'prop-types';
import {type AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import Layout from '../components/layout';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<Layout>
			<DefaultSeo
				titleTemplate="Jonathan Haines | %s"
				description="Jonathan Haines is software engineer who is passionate about building up new developers, improving experiences between people and technology, and web technologies."
				openGraph={{
					type: 'website',
					locale: 'en_AU',
					url: 'https://jonno.dev/',
					// eslint-disable-next-line @typescript-eslint/naming-convention
					site_name: 'Jonathan Haines',
				}}
				twitter={{
					handle: 'BarryThePenguin',
					site: 'https://twitter.com/BarryThePenguin',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any,
};

export default MyApp;
