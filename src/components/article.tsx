import { type PropsWithChildren } from "hono/jsx";

export async function Article({ children }: PropsWithChildren) {
	return (
		<article className="prose dark:prose-invert prose-hr:border-t-2">
			{children}
		</article>
	);
}
