import React from 'react';
import Head from 'next/head';
import {css} from 'emotion';
import {Twitter, GitHub, LinkedIn} from '../components/icons';

function Resume() {
	return (
		<div className="garamond font-serif text-lg leading-normal text-gray-800">
			<Head>
				<title>Jonathan Haines - resume</title>
			</Head>
			<div className="m-4 border-solid border-gray-800 border-8 bg-gray-600 dn-print-ba">
				<div className="clearfix">
					<Nav />
					<Main />
				</div>
			</div>
		</div>
	);
}

const socialLink = css`
	&:active,
	&:focus,
	&:hover {
		color: var(--green);
	}
`;

const mainHeader = css`
	background: var(--heading);
	box-shadow: 0 2px 4px var(--grayLight);

	&:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		left: 0;
		top: 100%;
		border-width: 0.25rem 0.5rem;
		border-style: solid;
		border-color: var(--headingDark) var(--headingDark) transparent transparent;

		@media (min-width: 768px) {
			border-width: 0.5rem 1rem;
		}

		@media print {
			border: none;
		}
	}
`;

function Nav() {
	return (
		<div className="h-full float-left inline px-4 md:px-8 text-center lg:w-1/3">
			<nav>
				<img
					src="https://s.gravatar.com/avatar/c7cda18594e6e6c554f8f9872dd9acbb?s=300"
					className="mx-auto my-8 block border-solid border-8 rounded-full border-gray-100 dn-print"
					alt="profile image"
				/>
				<h1 className="text-5xl font-sans font-normal text-white my-8">
					Jonathan Haines
					<small className="inline-block">Web Technology Consultant</small>
				</h1>
				<p className="dn-print my-8">
					<a
						className={socialLink}
						href="https://twitter.com/BarryThePenguin"
						title="Twitter"
					>
						<Twitter />
					</a>
					<a
						className={socialLink}
						href="https://github.com/BarryThePenguin"
						title="GitHub"
					>
						<GitHub />
					</a>
					<a
						className={socialLink}
						href="https://au.linkedin.com/in/jonnohaines"
						title="LinkedIn"
					>
						<LinkedIn />
					</a>
				</p>
				<p>
					<a href="mailto:jonno.haines@gmail.com">jonno.haines@gmail.com</a>
				</p>
			</nav>
		</div>
	);
}

function Main() {
	return (
		<main
			role="main"
			className="bg-white float-left inline px-4 md:px-8 lg:w-2/3"
		>
			<article className="career">
				<header>
					<h2
						className={`text-2xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative md:w-3/5 ${mainHeader}`}
					>
						About
					</h2>
				</header>
				<p className="max-w-2xl">
					Passionate about building up new developers, improving experiences
					between people and technology, and open source projects and software.
				</p>
				<p className="max-w-2xl">
					Currently exploring web standards, functional programming and
					composable user interfaces.
				</p>
			</article>
			<article className="strengths">
				<header>
					<h2
						className={`text-2xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative md:w-3/5 ${mainHeader}`}
					>
						Skills
					</h2>
				</header>
				<p className="max-w-2xl">
					Ongoing learning, testing and improvement is an important part of my
					approach to software development and professional development.
				</p>
				<div className="clearfix">
					<section className="float-left inline w-full md:w-1/2">
						<p>Programming</p>
						<ul className="list-disc list-inside">
							<li>Web Applications</li>
							<li>JavaScript</li>
							<li>.Net</li>
						</ul>
					</section>
					<section className="float-left inline w-full md:w-1/2">
						<p>People</p>
						<ul className="list-disc list-inside">
							<li>Collaborating</li>
							<li>Mentoring</li>
							<li>Enabling</li>
						</ul>
					</section>
				</div>
			</article>
			<article className="employment">
				<header>
					<h2
						className={`text-2xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative md:w-3/5 ${mainHeader}`}
					>
						Work
					</h2>
				</header>
				<h3 className="font-sans font-normal">
					Blake eLearning - Senior Software Engineer
					<small className="float-right">June 2018 — Present</small>
				</h3>
				<p>
					<strong>Key Technologies:</strong> npm, Ember, SCSS
				</p>
				<h3 className="font-sans font-normal">
					Domain - Front End Developer
					<small className="float-right">September 2016 — June 2018</small>
				</h3>
				<p>
					<strong>Key Technologies:</strong> npm, React, SCSS, Mocha, Chai
				</p>
				<h3 className="font-sans font-normal">
					RXP Services - Consultant
					<small className="float-right">July 2012 — September 2016</small>
				</h3>
				<p>
					<strong>Key Technologies:</strong> npm, Angular, Bootstrap, Karma,
					Jasmine, ASP.NET MVC and Web API, Entity Framework, OData, Unity
					Application Block, xUnit
				</p>
				<h3 className="font-sans font-normal">
					Insight4 - Developer{' '}
					<small className="float-right">July 2012 — June 2014</small>
				</h3>
				<p>
					<strong>Key Technologies:</strong> ASP.NET MVC and Web API, Entity
					Framework, xUnit, Kenod UI, Angular, Bootstrap
				</p>
				<h3 className="font-sans font-normal">
					Insight4 - Junior Developer
					<small className="float-right">Summer of 2010 and 2011</small>
				</h3>
				<p>
					<strong>Key Technologies:</strong> ASP.NET MVC, NHibernate, HTML5,
					JavaScript, CSS
				</p>
			</article>
			<article className="volunteer">
				<header>
					<h2
						className={`text-2xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative md:w-3/5 ${mainHeader}`}
					>
						Volunteer
					</h2>
				</header>
				<h3 className="font-sans font-normal">
					Vision 100 IT{' '}
					<small className="float-right">July 2010 — Present</small>
				</h3>
				<p>
					Vision 100 IT exists to help churches - particularly church IT
					volunteers and ministry staff - to use IT better.
				</p>
			</article>
			<article className="education">
				<header>
					<h2
						className={`text-2xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative md:w-3/5 ${mainHeader}`}
					>
						Education
					</h2>
				</header>
				<h3 className="font-sans font-normal">
					University of Tasmania{' '}
					<small className="float-right">2008 — 2014</small>
				</h3>
				<p>Bachelor of Engineering, Computer Systems</p>
			</article>
			<article className="interests">
				<header>
					<h2
						className={`text-2xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative md:w-3/5 ${mainHeader}`}
					>
						Interests
					</h2>
				</header>
				<div className="clearfix">
					<section className="float-left inline w-full md:w-1/2">
						<p>Open Source Software</p>
						<ul className="list-disc list-inside">
							<li>remark</li>
							<li>KeystoneJS</li>
							<li>AVA</li>
							<li>eslint</li>
						</ul>
					</section>
					<section className="float-left inline w-full md:w-1/2">
						<p>Relaxing</p>
						<ul className="list-disc list-inside">
							<li>Cycling</li>
							<li>Guitar</li>
							<li>Board games</li>
						</ul>
					</section>
				</div>
				<div className="clearfix">
					<section className="float-left inline w-full md:w-1/2">
						<p>Thinking</p>
						<ul className="list-disc list-inside">
							<li>Theology</li>
							<li>Feminism</li>
							<li>Diversity in tech</li>
							<li>Business culture</li>
						</ul>
					</section>
					<section className="float-left inline w-full md:w-1/2">
						<p>Tasty Drinks</p>
						<ul className="list-disc list-inside">
							<li>Coffee</li>
							<li>Beer</li>
							<li>Whisky</li>
						</ul>
					</section>
				</div>
			</article>
		</main>
	);
}

export default Resume;
