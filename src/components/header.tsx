/** @jsxImportSource theme-ui */
import {Heading} from 'theme-ui';
import PropTypes from 'prop-types';

function Header({children}) {
	return (
		<header>
			<Heading as="h2" variant="banner" className="dn-print-ba">
				{children}
			</Heading>
		</header>
	);
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Header;
