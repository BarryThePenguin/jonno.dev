import { type PropsWithChildren } from "hono/jsx";

export async function Header({ children }: PropsWithChildren) {
	return (
		<header className="underline decoration-purple decoration-2">
			<h2 className="leading-loose font-normal print:border-none">
				{children}
			</h2>
		</header>
	);
}
