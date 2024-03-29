import {type PropsWithChildren} from 'react';
import PropTypes from 'prop-types';

function Header({children}: PropsWithChildren) {
	return (
		<header>
			<h2 className="banner font-normal leading-loose sm:my-4 -ml-9 sm:-ml-16 pl-8 sm:pl-16 dn-print-ba">
				{children}
			</h2>
		</header>
	);
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Header;
