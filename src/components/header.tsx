import {type PropsWithChildren} from 'hono/jsx';

export async function Header({children}: PropsWithChildren) {
	return (
		<header className="banner">
			<h2 className="leading-loose font-normal print:border-none">
				{children}
			</h2>
		</header>
	);
}
