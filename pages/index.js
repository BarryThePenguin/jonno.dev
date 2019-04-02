import React from 'react';
import Link from 'next/link';

function Index() {
	return (
		<>
			<h1 className="text-2xl md:text-5xl p-4 my-24 md:p-8 bg-white">
				Jonathan Haines
			</h1>
			<h2 className="text-2xl md:text-5xl p-4 my-24 md:p-8 bg-white">
				Frontend Developer
			</h2>
			<Link href="/resume">
				<a className="text-2xl md:text-4xl block p-4 md:p-8 bg-white link text-grey-dark underline hover:underline">
					See what I do
				</a>
			</Link>
		</>
	);
}

export default Index;
