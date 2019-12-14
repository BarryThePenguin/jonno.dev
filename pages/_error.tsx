import React from 'react';
import Link from 'next/link';
import {Heading} from '@theme-ui/components';
import Layout from '../components/layout';

const Error: React.FC = () => {
	return (
		<Layout title="Jonathan Haines - page not found">
			<Heading as="h1" className="f-headline p-4 md:p-8">
				404 - route not found
			</Heading>
			<Link href="/">
				<a className="link gray-900 underline">Back to main</a>
			</Link>
		</Layout>
	);
};

export default Error;
