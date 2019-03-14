import '../css/site.css';
import '../css/print.css';

import React from 'react';
import Head from 'next/head';
import App, {Container} from 'next/app';
import Analytics from '../components/analytics';

class MyApp extends App {
	static async getInitialProps({Component, ctx}) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {pageProps};
	}

	render() {
		const {Component, pageProps} = this.props;

		return (
			<Container>
				<Head>
					<title>Jonathan Haines</title>
				</Head>
				<Component {...pageProps} />
				<Analytics />
			</Container>
		);
	}
}

export default MyApp;
