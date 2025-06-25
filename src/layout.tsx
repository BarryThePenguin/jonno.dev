import {html} from 'hono/html';
import {jsxRenderer} from 'hono/jsx-renderer';

export const renderer = jsxRenderer(
	async ({
		children,
		description = 'Jonathan Haines is software engineer who is passionate about building up new developers, improving experiences between people and technology, and web technologies.',
		openGraph = {
			locale: 'en_AU',
			type: 'website',
			url: 'https://jonno.dev/',
			siteName: 'Jonathan Haines',
		},
		twitter = {site: '@BarryThePenguin'},
		viewport = {width: 'device-width', initialScale: 1, themeColor: '#3c9eff'},
		title,
	}) => (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`}
				/>
				<link
					href={import.meta.env.PROD ? `/assets/site.css` : `/src/site.css`}
					rel="stylesheet"
				/>
				<link
					href={import.meta.env.PROD ? `/assets/print.css` : `/src/print.css`}
					media="print"
					rel="stylesheet"
				/>
				<link
					rel="preload"
					href="https://www.googletagmanager.com/gtag/js?id=G-KMG51516QN"
					as="script"
				/>
				<meta name="theme-color" content={viewport.themeColor} />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={openGraph.url} />
				<meta property="og:site_name" content={openGraph.siteName} />
				<meta property="og:locale" content={openGraph.locale} />
				<meta property="og:type" content={openGraph.type} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content={twitter.site} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<link
					rel="icon"
					href="/favicon.ico"
					type="image/x-icon"
					sizes="16x16"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-icon.png"
					type="image/png"
					sizes="180x180"
				/>
			</head>
			<body className="font-sans">
				<div className="min-h-screen p-4 sm:p-8">{children}</div>

				<script src="https://www.googletagmanager.com/gtag/js?id=G-KMG51516QN" />
				{html`
					<script id="google-analytics">
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-KMG51516QN');
					</script>
				`}
			</body>
		</html>
	),
);
