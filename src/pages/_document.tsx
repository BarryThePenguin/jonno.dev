import Document, {
	Html,
	Head,
	Main,
	NextScript,
	type DocumentContext,
	type DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
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
					<link rel="preconnect" href="//www.googletagmanager.com" />
					<link rel="dns-prefetch" href="//www.googletagmanager.com" />
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
