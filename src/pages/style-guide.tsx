/** @jsx jsx */
import {jsx, Heading, Grid} from 'theme-ui';
import {TypeScale, TypeStyle, ColorPalette} from '@theme-ui/style-guide';
import Layout from '../components/layout';

const Index: React.FC = () => {
	return (
		<Layout>
			<Grid
				columns={1}
				gap={3}
				sx={{
					bg: 'white',
					m: 8,
					p: 3
				}}
			>
				<Heading as="h1">Style Guide</Heading>
				<ColorPalette />
				<TypeScale />
				<TypeStyle
					fontFamily="heading"
					fontWeight="heading"
					lineHeight="heading"
				/>
				<TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
			</Grid>
		</Layout>
	);
};

export default Index;
