import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import ssg from "@hono/vite-ssg";
import { cloudflare } from "@cloudflare/vite-plugin";
import build from "@hono/vite-build/cloudflare-workers";
import devServer from "@hono/vite-dev-server";
import tailwindcss from "@tailwindcss/vite";
import images from "remark-images";
import externalLinks from "rehype-external-links";

const entry = "src/index.tsx";

export default defineConfig({
	build: {
		cssMinify: "lightningcss",
	},
	css: {
		transformer: "lightningcss",
	},
	environments: {
		client: {
			build: {
				rollupOptions: {
					input: ["./src/client.tsx", "./src/site.css", "./src/print.css"],
					output: {
						entryFileNames: "assets/[name].js",
						assetFileNames: "assets/[name].[ext]",
					},
				},
			},
		},
		worker: {
			build: {
				assetsInlineLimit: 0,
			},
		},
	},
	plugins: [
		mdx({
			jsxImportSource: "hono/jsx",
			remarkPlugins: [images],
			rehypePlugins: [externalLinks],
		}),
		build({ entry }),
		devServer({ entry }),
		cloudflare(),
		tailwindcss(),
		ssg({ entry }),
	],
});
