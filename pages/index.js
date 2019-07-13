import React from 'react';
import Link from 'next/link';

function Index() {
	return (
		<>
			<h1 className="text-3xl md:text-6xl font-bold p-4 my-24 md:p-8 bg-white">
				Jonathan Haines
			</h1>
			<h2 className="text-3xl md:text-6xl font-bold p-4 my-24 md:p-8 bg-white">
				Frontend Developer
			</h2>
			<Link href="/resume">
				<a className="text-3xl md:text-5xl font-bold block p-4 md:p-8 bg-white link text-gray-600 underline hover:underline">
					See what I do
				</a>
			</Link>
		</>
	);
}

export default Index;
