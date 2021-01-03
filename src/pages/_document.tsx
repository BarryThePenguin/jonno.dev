import React from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<link
						type="text/plain"
						rel="author"
						href="//barrythepenguin.github.io/humans.txt"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="preconnect" href="//www.google-analytics.com" />
					<link rel="dns-prefetch" href="//www.google-analytics.com" />
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html:
								'window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;'
						}}
					/>
					<script async src="https://www.google-analytics.com/analytics.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
