import { type PropsWithChildren } from "hono/jsx";

export async function Header({ children }: PropsWithChildren) {
	return (
		<header className="underline decoration-purple decoration-2 print:no-underline">
			<h2>{children}</h2>
		</header>
	);
}
