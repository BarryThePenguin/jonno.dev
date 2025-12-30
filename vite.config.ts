import { defineConfig } from "vite";
import adapter from "@hono/vite-dev-server/cloudflare";
import build from "@hono/vite-build/cloudflare-workers";
import externalLinks from "rehype-external-links";
import honox from "honox/vite";
import images from "remark-images";
import mdx from "@mdx-js/rollup";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	build: {
		cssMinify: "lightningcss",
	},
	css: {
		transformer: "lightningcss",
	},
	plugins: [
		tailwindcss(),
		honox({
			client: {
				input: ["/app/client.ts", "/app/site.css", "/app/print.css"],
			},
			devServer: { adapter },
		}),
		build(),
		ssg({ entry: "app/server.ts" }),
		mdx({
			jsxImportSource: "hono/jsx",
			remarkPlugins: [images],
			rehypePlugins: [externalLinks],
		}),
	],
	resolve: {
		builtins: [/^node:/],
	}
});
