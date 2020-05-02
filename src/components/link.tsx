import React, {FC, HTMLProps} from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Link as ThemeUILink} from 'theme-ui';

type LinkProps = HTMLProps<HTMLAnchorElement>;

const Link: FC<LinkProps> = ({href, ...props}) => {
	const isApi = href.startsWith('/api/');

	if (isApi || props.target === '_blank') {
		return <ThemeUILink href={href} {...props} />;
	}

	return (
		<NextLink passHref href={href}>
			<ThemeUILink {...props} />
		</NextLink>
	);
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	target: PropTypes.string
};

export default Link;
