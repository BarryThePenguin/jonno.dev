import '../css/site.css';
import '../css/print.css';

import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import Layout from '../components/layout';

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
	return (
		<Layout>
			<DefaultSeo
				titleTemplate="Jonathan Haines | %s"
				description="Jonathan Haines is software engineer who is passionate about building up new developers, improving experiences between people and technology, and web technologies."
				openGraph={{
					type: 'website',
					locale: 'en_AU',
					url: 'https://jonno.dev/',
					site_name: 'Jonathan Haines'
				}}
				twitter={{
					handle: 'BarryThePenguin',
					site: 'https://twitter.com/BarryThePenguin',
					cardType: 'summary_large_image'
				}}
			/>
			<Component {...pageProps} />
		</Layout>
	);
};

MyApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any
};

export default MyApp;
