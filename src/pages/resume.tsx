/** @jsx jsx */
import {jsx, useThemeUI, Box, Image, Text, Link, ThemeProvider} from 'theme-ui';
import {MDXProvider} from '@mdx-js/react';
import {NextSeo} from 'next-seo';
import Header from '../components/header';
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

const Resume: React.FC = () => {
	const {theme} = useThemeUI();

	return (
		<>
			<NextSeo title="Resume" />
			<ThemeProvider theme={theme}>
				<MDXProvider components={components}>
					<Box
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
				</MDXProvider>
			</ThemeProvider>
		</>
	);
};

const Nav: React.FC = () => {
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
				<Text as="p" my="4" color="white" className="dn-print">
					<Link
						variant="social"
						href="https://twitter.com/BarryThePenguin"
						title="Twitter"
					>
						<Twitter />
					</Link>
					<Link
						variant="social"
						href="https://github.com/BarryThePenguin"
						title="GitHub"
					>
						<GitHub />
					</Link>
					<Link
						variant="social"
						href="https://au.linkedin.com/in/jonnohaines"
						title="LinkedIn"
					>
						<LinkedIn />
					</Link>
				</Text>
				<Text as="p" my="4">
					<Link href="mailto:jonno.haines@gmail.com" color="white">
						jonno.haines@gmail.com
					</Link>
				</Text>
			</nav>
		</Box>
	);
};

const Main: React.FC = () => {
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
};

export default Resume;
