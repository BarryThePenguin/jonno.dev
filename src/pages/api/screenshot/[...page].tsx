import {NextApiRequest, NextApiResponse} from 'next';
import microCors from 'micro-cors';
import getScreenshot, {ImageType} from './_get-screenshot';

const THIRTY_ONE_DAYS = 31 * 24 * 60 * 60;
const cacheControl = `s-maxage=${THIRTY_ONE_DAYS}, stale-while-revalidate`;

const cors = microCors({
	origin: '*'
});

type Result = {
	url: string;
	type: ImageType;
};

function parseUrl(input: URL): Result {
	const {pathname = '/', searchParams} = input;
	let queryType = searchParams.get('type') || 'png';
	let type: ImageType = 'png';

	queryType = queryType.replace('.', '');

	if (queryType === 'png' || queryType === 'jpeg') {
		type = queryType;
	}

	let url = pathname.replace('/api/screenshot/', '');
	if (!url.startsWith('http')) {
		url = 'https://' + url; // Add protocol if missing
	}

	return {
		url,
		type
	};
}

const whitelist = [
	'domain.com.au',
	'domain.com.au/home-loans',
	'service.nsw.gov.au',
	'gillyreads.com',
	'pwad.org.au'
];

async function handler(request: NextApiRequest, response: NextApiResponse) {
	try {
		const base = process.env.VERCEL_URL || `http://${request.headers.host}`
		const {url, type} = parseUrl(new URL(request.url, base));

		if (!whitelist.some((value) => url.endsWith(value))) {
			throw new Error(`${url}, not allowed`);
		}

		const file = await getScreenshot(url, type);
		response.setHeader('Content-Type', `image/${type}`);
		response.setHeader('Cache-Control', cacheControl);
		response.status(200).send(file);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

export default cors(handler);
