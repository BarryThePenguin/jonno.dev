import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="Description" content="Jonathan Haines is software engineer who is passionate about building up new developers, improving experiences between people and technology, and web technologies." />
					<link
						type="text/plain"
						rel="author"
						href="//barrythepenguin.github.io/humans.txt"
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html:
								'window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;'
						}}
					/>
					<script async src="https://www.google-analytics.com/analytics.js" />
				</Head>
				<body className="sans-serif">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
