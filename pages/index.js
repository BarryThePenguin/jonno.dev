import React from 'react';
import Link from 'next/link';

function Index() {
	return (
		<>
			<h1 className="f1 f-headline-ns pa3 pa4-ns bg-white">Jonathan Haines</h1>
			<h2 className="f1 f-headline-ns pa3 pa4-ns bg-white">
				Frontend Developer
			</h2>
			<Link href="/resume">
				<a className="f1 f-subheadline-ns db pa3 pa4-ns bg-white link gray underline">
					See what I do
				</a>
			</Link>
		</>
	);
}

export default Index;
