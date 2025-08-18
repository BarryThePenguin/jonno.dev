import { type PropsWithChildren } from "hono/jsx";

export async function Navigation({ children }: PropsWithChildren) {
	return (
		<div className="fixed inset-x-0 bottom-4 flex w-full justify-center">
			<div className="prose space-x-4 rounded-full bg-white/20 px-6 py-3 shadow-2xl shadow-black-gray/50 outline-1 outline-pink backdrop-blur-md dark:bg-black-gray/20 dark:prose-invert print:hidden">
				{children}
			</div>
		</div>
	);
}
