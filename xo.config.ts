import {type FlatXoConfig} from 'xo';

const xoConfig: FlatXoConfig = [
	{
		prettier: 'compat',
		react: true,
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
		},
		settings: {react: {jsxPragma: null}},
	},
];

export default xoConfig;
