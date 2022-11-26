import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Link as ThemeUILink, type LinkProps} from 'theme-ui';

function Link({href, ...props}: LinkProps) {
	const isApi = href.startsWith('/api/');

	if (isApi || props.target === '_blank') {
		return <ThemeUILink href={href} {...props} />;
	}

	return (
		<NextLink passHref href={href}>
			<ThemeUILink {...props} />
		</NextLink>
	);
}

Link.propTypes = {
	href: PropTypes.string.isRequired,
	target: PropTypes.string,
};

export default Link;
