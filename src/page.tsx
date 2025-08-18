/* eslint-disable react/no-invalid-html-attribute */

import { Navigation } from "./components/navigation.tsx";

async function Page() {
	return (
		<>
			<div className="-m-4 flex min-h-dvh place-items-center sm:-m-8">
				<main className="m-8 prose prose-xl max-w-none rounded-xl bg-white/40 px-8 py-10 shadow-2xl shadow-black-gray/50 sm:mx-auto sm:prose-2xl sm:p-20 dark:bg-black-gray/40 dark:prose-invert">
					<h1>Jonathan Haines</h1>

					<h2>Frontend Developer</h2>

					<a
						rel="me"
						href="https://mastodon.social/@BarryThePenguin"
						title="Mastodon"
						className="hidden"
					/>
				</main>
			</div>

			<Navigation>
				<a href="/resume">Resume</a>
			</Navigation>
		</>
	);
}

export default Page;
