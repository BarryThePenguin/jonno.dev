/** @jsx jsx */
import {jsx, Flex, Grid, Heading, Container} from 'theme-ui';
import Head from 'next/head';
import Link from '../components/link';

const Error: React.FC = () => {
	return (
		<>
			<Head>
				<title>Jonathan Haines - page not found</title>
			</Head>
			<Flex
				sx={{
					flexDirection: 'column',
					justifyItems: 'center',
					alignContent: 'center'
				}}
			>
				<Container bg="white" p={4}>
					<Grid columns={1} gap={3}>
						<Heading as="h1">404 - page not found</Heading>
						<Link href="/">Back to main</Link>
					</Grid>
				</Container>
			</Flex>
		</>
	);
};

export default Error;
