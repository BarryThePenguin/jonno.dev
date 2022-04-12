/** @jsxImportSource theme-ui */
import {Flex, Grid, Heading, Container} from 'theme-ui';
import {NextSeo} from 'next-seo';
import Link from '../components/link';

function Error() {
	return (
		<>
			<NextSeo title="Page not found" />
			<Flex
				sx={{
					flexDirection: 'column',
					justifyItems: 'center',
					alignContent: 'center',
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
}

export default Error;
