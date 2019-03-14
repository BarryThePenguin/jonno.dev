import React from 'react';
import Head from 'next/head';

function Error() {
	return (
		<>
			<Head>
				<title>Jonathan Haines - page not found</title>
			</Head>
			<h1 className="f-headline pa3 pa4-ns">404 - route not found</h1>
			<a href="/" className="link black underline">
				Back to main
			</a>
		</>
	);
}

export default Error;
