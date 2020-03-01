/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Heading, Box} from '@theme-ui/components';
import {TypeScale, TypeStyle, ColorPalette} from '@theme-ui/style-guide';
import Layout from '../components/layout';

const Index: React.FC = () => {
	return (
		<Layout>
			<Box
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
			</Box>
		</Layout>
	);
};

export default Index;
