import React from 'react';
import Head from 'next/head';

function Error() {
	return (
		<>
			<Head>
				<title>Jonathan Haines - page not found</title>
			</Head>
			<h1 className="f-headline p-4 md:p-8">404 - route not found</h1>
			<a href="/" className="link gray-900 underline">
				Back to main
			</a>
		</>
	);
}

export default Error;
