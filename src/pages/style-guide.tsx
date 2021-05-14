import {Heading, Grid} from 'theme-ui';
import type {FC} from 'react';
import {TypeScale, TypeStyle, ColorPalette} from '@theme-ui/style-guide';

const Index: FC = () => {
	return (
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
	);
};

export default Index;
