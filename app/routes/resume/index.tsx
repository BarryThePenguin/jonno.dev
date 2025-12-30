/* eslint-disable react/no-invalid-html-attribute */

import { type JSX } from "hono/jsx";
import About from "./about.md";
import Skills from "./skills.md";
import Work from "./work.md";
import Education from "./education.md";
import Interests from "./interests.md";
import { Article } from "#islands/article";
import { Navigation } from "#islands/navigation";
import { BlueSky, GitHub, LinkedIn, Mastodon } from "#islands/icons";
import { Header } from "#islands/header";
import Print from "#islands/print-button";

const components = {
	h2: Header,
};

type SocialLinkProps = JSX.IntrinsicElements["a"];

async function SocialLink({ children, href, title }: SocialLinkProps) {
	return (
		<a rel="me" href={href} title={title}>
			{children}
		</a>
	);
}

export const title = "Resume";

async function Resume() {
	return (
		<>
			<div className="-m-4 p-5 sm:-m-8 sm:p-8">
				<div className="block rounded-4xl border-8 border-solid border-black bg-black-gray/40 lg:flex print:border-none">
					<Nav />
					<Main />
				</div>
			</div>

			<Navigation>
				<a href="/">Home</a>
				<Print />
			</Navigation>
		</>
	);
}

export default Resume;

async function Nav() {
	return (
		<nav className="w-full space-y-4 p-4 text-center text-3xl text-white lg:w-1/3 lg:space-y-8 lg:px-12 lg:text-5xl lg:inset-shadow-nav">
			<img
				className="inline-block rounded-full border-8 border-white print:hidden"
				src="/jonno.jpg"
				alt="profile image"
				width={285}
				height={285}
			/>
			<h1 className="leading-relaxed font-semibold">
				Jonathan Haines
				<small className="inline-block">Frontend Developer</small>
			</h1>

			<p className="space-x-2 print:hidden">
				<SocialLink href="https://bsky.app/profile/jonno.dev" title="BlueSky">
					<BlueSky />
				</SocialLink>
				<SocialLink
					href="https://mastodon.social/@BarryThePenguin"
					title="Mastodon"
				>
					<Mastodon />
				</SocialLink>
				<SocialLink href="https://github.com/BarryThePenguin" title="GitHub">
					<GitHub />
				</SocialLink>
				<SocialLink
					href="https://au.linkedin.com/in/jonnohaines"
					title="LinkedIn"
				>
					<LinkedIn />
				</SocialLink>
			</p>
			<p className="text-lg lg:text-xl">
				<a href="mailto:me@jonno.dev">me@jonno.dev</a>
			</p>
		</nav>
	);
}

async function Main() {
	return (
		<main
			role="main"
			className="w-full rounded-b-3xl bg-white p-4 pb-8 sm:px-8 lg:w-2/3 lg:rounded-l-none lg:rounded-r-3xl dark:bg-black-gray"
		>
			<Article>
				<About components={components} />
			</Article>
			<Article>
				<Skills components={components} />
			</Article>
			<Article>
				<Work components={components} />
			</Article>
			<Article>
				<Education components={components} />
			</Article>
			<Article>
				<Interests components={components} />
			</Article>
		</main>
	);
}
