/** @jsx jsx */
import {jsx, Flex, Grid, Heading, Container} from 'theme-ui';
import Layout from '../components/layout';
import Link from '../components/link';

const Error: React.FC = () => {
	return (
		<Layout title="Jonathan Haines - page not found">
			<Flex
				sx={{height: '100%', alignItems: 'center', justifyContent: 'center'}}
			>
				<Container bg="white" p={4}>
					<Grid columns={1} gap={3}>
						<Heading as="h1">404 - page not found</Heading>
						<Link href="/">Back to main</Link>
					</Grid>
				</Container>
			</Flex>
		</Layout>
	);
};

export default Error;
