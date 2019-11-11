/** @jsx jsx */
import {jsx} from 'theme-ui';
import PropTypes from 'prop-types';

function SocialLink({children, href, title}) {
	const green = {
		color: 'green.2'
	};

	return (
		<a
			sx={{
				'&:active': green,
				'&:focus': green,
				'&:hover': green
			}}
			href={href}
			title={title}
		>
			{children}
		</a>
	);
}

SocialLink.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default SocialLink;
