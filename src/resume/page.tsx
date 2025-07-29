/* eslint-disable react/no-invalid-html-attribute */

import {type JSX} from 'hono/jsx';
import {Header} from '../components/header.tsx';
import {BlueSky, GitHub, LinkedIn, Mastodon} from '../components/icons.tsx';
import About from './about.md';
import Skills from './skills.md';
import Work from './work.md';
import Education from './education.md';
import Interests from './interests.md';

const components = {
	h2: Header,
};

type SocialLinkProps = JSX.IntrinsicElements['a'];

async function SocialLink({children, href, title}: SocialLinkProps) {
	return (
		<a
			className="no-underline hover:text-lime-500 focus:text-lime-500 active:text-lime-500"
			rel="me"
			href={href}
			title={title}
		>
			{children}
		</a>
	);
}

async function Page() {
	return (
		<div className="-m-4 bg-home p-5 sm:-m-8 sm:p-8">
			<div className="block border-8 border-solid border-gray-800 bg-gray-600 lg:flex print:border-none">
				<Nav />
				<Main />
			</div>
		</div>
	);
}

async function Nav() {
	return (
		<div className="w-full px-4 text-center inset-shadow-nav lg:w-1/3 lg:px-12">
			<nav className="text-white">
				<div className="mx-auto my-8 inline-block overflow-hidden rounded-full border-8 border-solid border-gray-100 print:hidden">
					<img src="/jonno.jpg" alt="profile image" width={285} height={285} />
				</div>
				<h1 className="my-8 font-sans text-5xl leading-relaxed">
					Jonathan Haines
					<small className="block">Web Technology Consultant</small>
				</h1>
				<p className="my-4 space-x-2 text-5xl print:hidden">
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
				<p className="my-4">
					<a
						className="hover:text-sky-500 focus:text-sky-500 active:text-sky-500"
						href="mailto:me@jonno.dev"
					>
						me@jonno.dev
					</a>
				</p>
			</nav>
		</div>
	);
}

async function Main() {
	return (
		<main role="main" className="w-full bg-white px-4 py-2 sm:px-8 lg:w-2/3">
			<article className="career prose">
				<About components={components} />
			</article>
			<article className="strengths prose">
				<Skills components={components} />
			</article>
			<article className="employment prose">
				<Work components={components} />
			</article>
			<article className="education prose">
				<Education components={components} />
			</article>
			<article className="interests prose">
				<Interests components={components} />
			</article>
		</main>
	);
}

export default Page;
