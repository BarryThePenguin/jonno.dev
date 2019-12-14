/** @jsx jsx */
import {jsx} from 'theme-ui';
import PropTypes from 'prop-types';
import {Heading} from '@theme-ui/components';

const Header: React.FC = ({children}) => (
	<header>
		<Heading
			as="h2"
			sx={{
				position: 'relative',
				my: [3, 4],
				ml: [-8, -16],
				pl: [8, 16],
				fontSize: 4,
				width: ['full', '3/5'],
				backgroundColor: 'primary',
				boxShadow: '0 2px 4px #718096',

				'&:after': {
					content: '" "',
					position: 'absolute',
					width: 0,
					height: 0,
					left: 0,
					top: '100%',
					borderStyle: 'solid',
					borderColor:
						'var(--headingDark) var(--headingDark) transparent transparent',
					borderWidth: ['0.25rem 0.5rem', '0.5rem 1rem']
				}
			}}
			className="dn-print-ba"
		>
			{children}
		</Heading>
	</header>
);

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
