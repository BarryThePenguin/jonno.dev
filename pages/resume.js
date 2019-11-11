/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Box, Image, Text} from '@theme-ui/components';
import Layout from '../components/layout';
import Header from '../components/header';
import SocialLink from '../components/social-link';
import {Twitter, GitHub, LinkedIn} from '../components/icons';
import About from '../content/about.md';
import Skills from '../content/skills.md';
import Work from '../content/work.md';
import Volunteer from '../content/volunteer.md';
import Education from '../content/education.md';
import Interests from '../content/interests.md';

const components = {
	h2: Header
};

function Resume() {
	return (
		<Layout components={components} title="Jonathan Haines - resume">
			<div
				sx={{
					fontSize: 3,
					lineHeight: 'body',
					color: 'gray.8'
				}}
			>
				<Box
					m={[4, 8]}
					bg="gray.7"
					sx={{
						border: 'solid',
						borderWidth: 8,
						borderColor: 'gray.8',
						display: ['block', 'block', 'block', 'flex']
					}}
					className="dn-print-ba"
				>
					<Nav />
					<Main />
				</Box>
			</div>
		</Layout>
	);
}

function Nav() {
	return (
		<Box
			px={[4, 12]}
			sx={{
				width: ['full', 'full', 'full', '1/3'],
				textAlign: 'center',
				boxShadow: ['', '', '', 'inset -10px 0px 5px -5px rgba(0,0,0,0.75)']
			}}
		>
			<nav>
				<Image
					src="https://s.gravatar.com/avatar/c7cda18594e6e6c554f8f9872dd9acbb?s=300"
					alt="profile image"
					variant="avatar"
					className="dn-print"
				/>
				<Text as="h1" variant="hero">
					Jonathan Haines
					<small
						sx={{
							display: 'block'
						}}
					>
						Web Technology Consultant
					</small>
				</Text>
				<Text as="p" my="4" className="dn-print">
					<SocialLink
						href="https://twitter.com/BarryThePenguin"
						title="Twitter"
					>
						<Twitter />
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
				</Text>
				<Text as="p" my="4">
					<a href="mailto:jonno.haines@gmail.com">jonno.haines@gmail.com</a>
				</Text>
			</nav>
		</Box>
	);
}

function Main() {
	return (
		<Box
			as="main"
			role="main"
			py="2"
			px={[4, 8]}
			backgroundColor="white"
			sx={{
				width: ['full', 'full', 'full', '2/3']
			}}
		>
			<article className="career">
				<About />
			</article>
			<article className="strengths">
				<Skills />
			</article>
			<article className="employment">
				<Work />
			</article>
			<article className="volunteer">
				<Volunteer />
			</article>
			<article className="education">
				<Education />
			</article>
			<article className="interests">
				<Interests />
			</article>
		</Box>
	);
}

export default Resume;
