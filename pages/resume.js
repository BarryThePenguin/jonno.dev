import React from 'react';
import Head from 'next/head';
import {css} from 'emotion';

function Resume() {
	return (
		<div className="garamond font-serif text-lg leading-normal text-grey-darkest">
			<Head>
				<title>Jonathan Haines - resume</title>
			</Head>
			<div className="m-4 border-solid border-grey-darkest border-8 bg-grey-darker dn-print-ba">
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
	box-shadow: 0 2px 4px var(--greyLight);

	@media (min-width: 60em) {
		width: 400px;
	}

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

		@media (min-width: 30em) {
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
					className="mx-auto my-8 block border-solid border-8 rounded-full border-grey-lightest dn-print"
					alt="profile image"
				/>
				<h1 className="text-3xl font-sans font-normal text-white my-8">
					Jonathan Haines
					<small className="inline-block">Web Technology Consultant</small>
				</h1>
				<p className="dn-print my-8">
					<a
						className={socialLink}
						href="https://twitter.com/BarryThePenguin"
						title="Twitter"
					>
						<svg width="40" height="40" viewBox="0 0 1792 1792">
							<path d="M1408 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5t-61.5 148.5q0 29 5 48-129-7-242-65t-192-155q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162 24.5-168.5q0-18-1-27 63-45 105-109zm256-194v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
						</svg>
					</a>
					<a
						className={socialLink}
						href="https://github.com/BarryThePenguin"
						title="GitHub"
					>
						<svg width="40" height="40" viewBox="0 0 1792 1792">
							<path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
						</svg>
					</a>
					<a
						className={socialLink}
						href="https://au.linkedin.com/in/jonnohaines"
						title="LinkedIn"
					>
						<svg width="40" height="40" viewBox="0 0 1792 1792">
							<path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
						</svg>
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
						className={`text-xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative ${mainHeader}`}
					>
						About
					</h2>
				</header>
				<p className="max-w-md">
					Passionate about building up new developers, improving experiences
					between people and technology, and open source projects and software.
				</p>
				<p className="max-w-md">
					Currently exploring web standards, functional programming and
					composable user interfaces.
				</p>
			</article>
			<article className="strengths">
				<header>
					<h2
						className={`text-xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative ${mainHeader}`}
					>
						Skills
					</h2>
				</header>
				<p className="max-w-md">
					Ongoing learning, testing and improvement is an important part of my
					approach to software development and professional development.
				</p>
				<div className="clearfix">
					<section className="float-left inline w-full md:w-1/2">
						<p>Programming</p>
						<ul>
							<li>Web Applications</li>
							<li>JavaScript</li>
							<li>.Net</li>
						</ul>
					</section>
					<section className="float-left inline w-full md:w-1/2">
						<p>People</p>
						<ul>
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
						className={`text-xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative ${mainHeader}`}
					>
						Work
					</h2>
				</header>
				<h3 className="font-sans font-normal">
					Domain - Front End Developer
					<small className="float-right">September 2016 — Present</small>
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
						className={`text-xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative ${mainHeader}`}
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
						className={`text-xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative ${mainHeader}`}
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
						className={`text-xl font-sans font-normal leading-loose -ml-8 md:-ml-16 pl-16 md:-pl-16 md:my-4 relative ${mainHeader}`}
					>
						Interests
					</h2>
				</header>
				<div className="clearfix">
					<section className="float-left inline w-full md:w-1/2">
						<p>Open Source Software</p>
						<ul>
							<li>SparkleShare</li>
							<li>angular-formly</li>
							<li>AVA</li>
							<li>eslint</li>
						</ul>
					</section>
					<section className="float-left inline w-full md:w-1/2">
						<p>Relaxing</p>
						<ul>
							<li>Cycling</li>
							<li>Guitar</li>
							<li>Board games</li>
						</ul>
					</section>
				</div>
				<div className="clearfix">
					<section className="float-left inline w-full md:w-1/2">
						<p>Thinking</p>
						<ul>
							<li>Theology</li>
							<li>Feminism</li>
							<li>Diversity in tech</li>
							<li>Business culture</li>
						</ul>
					</section>
					<section className="float-left inline w-full md:w-1/2">
						<p>Tasty Drinks</p>
						<ul>
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
