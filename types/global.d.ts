import {SystemStyleObject} from '@styled-system/css';

export type SxStyleProp = SystemStyleObject;

export interface SxProps {
	/**
	 * The sx prop lets you style elements inline, using values from your
	 * theme. To use the sx prop, add the custom pragma as a comment to the
	 * top of your module and import the jsx function.
	 *
	 * ```ts
	 * // @jsx jsx
	 *
	 * import { jsx } from 'theme-ui'
	 * ```
	 */
	sx?: SxStyleProp;
}

declare module 'react' {
	interface DOMAttributes<T> extends SxProps {}
}

declare global {
	namespace JSX {
		interface IntrinsicAttributes extends SxProps {}
	}
}
