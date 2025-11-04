import { type FlatXoConfig } from "xo";
import { version } from "hono/jsx";

const xoConfig: FlatXoConfig = [
	{
		prettier: "compat",
		react: true,
		rules: {
			"react/react-in-jsx-scope": "off",
		},
		settings: { react: { jsxPragma: null, version } },
	},
];

export default xoConfig;
