/** @jsxImportSource theme-ui */
import NextImage from 'next/image';
import {useThemeUI, Box, Text, Link, ThemeProvider} from 'theme-ui';
import {FC} from 'react';
import {NextSeo} from 'next-seo';
import Header from '../components/header';
import {Twitter, GitHub, LinkedIn} from '../components/icons';
import About from '../content/about.md';
import Skills from '../content/skills.md';
import Work from '../content/work.md';
import Volunteer from '../content/volunteer.md';
import Education from '../content/education.md';
import Interests from '../content/interests.md';
import jonnoPic from '../../public/jonno.jpg';

const components = {
	h2: Header
};

const Resume: FC = () => {
	const {theme} = useThemeUI();

	return (
		<>
			<NextSeo title="Resume" />
			<ThemeProvider theme={theme} components={components}>
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
			</ThemeProvider>
		</>
	);
};

const Nav: FC = () => {
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
				<div
					sx={{
						display: 'inline-block',
						variant: 'images.avatar',
						overflow: 'hidden',
						width: '300px',
						height: '300px'
					}}
					className="dn-print"
				>
					<NextImage src={jonnoPic} alt="profile image" />
				</div>
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

const Main: FC = () => {
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
