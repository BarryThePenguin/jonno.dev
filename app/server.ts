import { createApp } from "honox/server";
import { showRoutes } from "hono/dev";

type Head = {
	description?: string;
	openGraph?: {
		type: string;
		locale: string;
		url: string;
		siteName: string;
	};
	title?: string;
	twitter?: {
		site: string;
	};
	viewport?: {
		themeColor?: string;
		width?: string;
		initialScale?: number;
	};
};

declare module "hono" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface ContextRenderer {
		// eslint-disable-next-line @typescript-eslint/prefer-function-type
		(
			content: string | Promise<string>,
			head?: Head,
		): Response | Promise<Response>;
	}
}

const app = createApp();

showRoutes(app);

export default app;
