export class PrintButton extends HTMLElement {
	connectedCallback() {
		const button = document.createElement("a");
		this.replaceChildren(button);
		button.href = "#";
		button.textContent = "Print";

		button.addEventListener("click", (event) => {
			event.preventDefault();
			globalThis.window.print();
		});
	}
}
