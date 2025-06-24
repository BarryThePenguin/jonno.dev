/* eslint-disable react/no-invalid-html-attribute */

import {type HTMLProps} from 'react';
import {type Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/header.tsx';
import {BlueSky, GitHub, LinkedIn, Mastodon} from '../../components/icons.tsx';
import About from './about.md';
import Skills from './skills.md';
import Work from './work.md';
import Volunteer from './volunteer.md';
import Education from './education.md';
import Interests from './interests.md';

export const metadata: Metadata = {
	title: 'Resume',
};

const components = {
	h2: Header,
};

type SocialLinkProps = HTMLProps<HTMLAnchorElement>;

function SocialLink({children, href, title}: SocialLinkProps) {
	return (
		<a
			className="no-underline transition-colors active:text-green-500 focus:text-green-500 hover:text-green-500"
			rel="me"
			href={href}
			title={title}
		>
			{children}
		</a>
	);
}

function Page() {
	return (
		<div className="bg-home -m-4 sm:-m-8 p-5 sm:p-8">
			<div className="bg-gray-600 border-solid border-8 border-gray-800 block lg:flex dn-print-ba">
				<Nav />
				<Main />
			</div>
		</div>
	);
}

function Nav() {
	return (
		<div className="px-4 lg:px-12 w-full lg:w-1/3 text-center shadow-nav">
			<nav className="text-white">
				<div className="inline-block overflow-hidden mx-auto my-8 border-solid border-8 rounded-full border-gray-100 dn-print">
					<Image
						priority
						src="/jonno.jpg"
						alt="profile image"
						width={285}
						height={285}
					/>
				</div>
				<h1 className="my-8 text-5xl font-sans leading-relaxed">
					Jonathan Haines
					<small className="block">Web Technology Consultant</small>
				</h1>
				<p className="my-4 text-5xl space-x-2 dn-print">
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
					<Link
						className="transition-colors active:text-blue-500 focus:text-blue-500 hover:text-blue-500"
						href="mailto:jonno.haines@gmail.com"
					>
						jonno.haines@gmail.com
					</Link>
				</p>
			</nav>
		</div>
	);
}

function Main() {
	return (
		<main role="main" className="py-2 px-4 sm:px-8 bg-white w-full lg:w-2/3">
			<article className="prose career">
				<About components={components} />
			</article>
			<article className="prose strengths">
				<Skills components={components} />
			</article>
			<article className="prose employment">
				<Work components={components} />
			</article>
			<article className="prose volunteer">
				<Volunteer components={components} />
			</article>
			<article className="prose education">
				<Education components={components} />
			</article>
			<article className="prose interests">
				<Interests components={components} />
			</article>
		</main>
	);
}

export default Page;
