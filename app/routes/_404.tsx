async function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="container bg-white p-4">
				<div className="grid columns-1 gap-3">
					<h1>404 - page not found</h1>
					<a href="/">Back to main</a>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
