import chrome from 'chrome-aws-lambda';

export type ImageType = 'png' | 'jpeg';

const FIVE_SECONDS = 5 * 1000;

async function getScreenshot(url: string, type: ImageType) {
	const browser = await chrome.puppeteer.launch({
		args: chrome.args,
		defaultViewport: {
			...chrome.defaultViewport,
			width: 1200,
			height: 860
		},
		executablePath: await chrome.executablePath,
		headless: true || chrome.headless,
		timeout: FIVE_SECONDS
	});

	const page = await browser.newPage();
	await page.goto(url, {timeout: FIVE_SECONDS});
	const file = await page.screenshot({type});
	await browser.close();
	return file;
}

export default getScreenshot;
