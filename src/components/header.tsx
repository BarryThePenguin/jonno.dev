/** @jsx jsx */
import {jsx} from 'theme-ui';
import PropTypes from 'prop-types';
import {Heading} from '@theme-ui/components';

const Header: React.FC = ({children}) => (
	<header>
		<Heading as="h2" variant="banner" className="dn-print-ba">
			{children}
		</Heading>
	</header>
);

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
