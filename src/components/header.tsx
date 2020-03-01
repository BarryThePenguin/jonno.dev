/** @jsx jsx */
import {jsx, Heading} from 'theme-ui';
import PropTypes from 'prop-types';

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
