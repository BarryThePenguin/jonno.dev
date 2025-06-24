import {type Viewport, type Metadata} from 'next';
import Script from 'next/script';
import {EB_Garamond} from 'next/font/google';
import {type PropsWithChildren} from 'react';
import '../css/site.css';
import '../css/print.css';

export const metadata: Metadata = {
	metadataBase: new URL('https://jonno.dev'),

	description:
		'Jonathan Haines is software engineer who is passionate about building up new developers, improving experiences between people and technology, and web technologies.',
	openGraph: {
		type: 'website',
		locale: 'en_AU',
		url: 'https://jonno.dev/',
		siteName: 'Jonathan Haines',
	},
	title: {
		default: 'Jonathan Haines',
		template: '%s | Jonathan Haines',
	},
	twitter: {
		site: '@BarryThePenguin',
		card: 'summary_large_image',
	},
};

export const viewport: Viewport = {
	themeColor: '#3c9eff',
	width: 'device-width',
	initialScale: 1,
};

// eslint-disable-next-line new-cap
const ebGaramond = EB_Garamond({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-eb-garamond',
});

/* <link
	type="text/plain"
	rel="author"
	href="//barrythepenguin.github.io/humans.txt"
/>

<link rel="manifest" href="/manifest.json" />
<link rel="preconnect" href="//www.googletagmanager.com" />
<link rel="dns-prefetch" href="//www.googletagmanager.com" /> */

function Layout({children}: PropsWithChildren) {
	return (
		<html lang="en" className={ebGaramond.variable}>
			<head>
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-KMG51516QN"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-KMG51516QN');
				`}
				</Script>
			</head>
			<body>
				<div className="p-4 sm:p-8 min-h-screen">{children}</div>
			</body>
		</html>
	);
}

export default Layout;
