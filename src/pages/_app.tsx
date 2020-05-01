/* eslint-disable import/no-unassigned-import */
import '../css/site.css';
import '../css/print.css';
/* eslint-enable import/no-unassigned-import */
import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {AppProps} from 'next/app';

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
	return <Component {...pageProps} />;
};

MyApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any
};

export default MyApp;