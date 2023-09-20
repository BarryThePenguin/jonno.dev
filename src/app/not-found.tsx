import {type Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Page not found',
};

function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="container bg-white p-4">
				<div className="grid columns-1 gap-3">
					<h1>404 - page not found</h1>
					<Link href="/">Back to main</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
