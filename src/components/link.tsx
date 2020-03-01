import React, {FC} from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Link as ThemeUILink} from 'theme-ui';

type LinkProps = {
	href: string;
	children: React.ReactNode;
};

const Link: FC<LinkProps> = ({href, children}) => (
	<NextLink passHref href={href}>
		<ThemeUILink>{children}</ThemeUILink>
	</NextLink>
);

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default Link;
