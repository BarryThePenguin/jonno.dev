import { Hono } from "hono";
import Page from "./page.mdx";
import Resume from "./resume/page.tsx";
import { renderer } from "./layout.tsx";
import NotFound from "./not-found.tsx";

declare module "hono" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface ContextRenderer {
		// eslint-disable-next-line @typescript-eslint/prefer-function-type
		(
			content: string | Promise<string>,
			head: {
				description?: string;
				openGraph?: {
					type: string;
					locale: string;
					url: string;
					siteName: string;
				};
				title: string;
				twitter?: {
					site: string;
				};
				viewport?: {
					themeColor?: string;
					width?: string;
					initialScale?: number;
				};
			},
		): Response | Promise<Response>;
	}
}

function title(text: string): string {
	return `${text} | Jonathan Haines`;
}

const app = new Hono()
	.use(renderer)
	.get("/", async (c) => c.render(<Page />, { title: title("👋🏻") }))
	.get("/resume", async (c) => c.render(<Resume />, { title: title("Resume") }))
	.notFound(async (c) =>
		c.render(<NotFound />, { title: title("Page not found") }),
	);

export default app;
