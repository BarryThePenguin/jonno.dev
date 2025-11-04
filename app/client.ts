import { createClient } from "honox/client";
import { PrintButton } from "./components/print-button.ts";

customElements.define("print-button", PrintButton);

void createClient();
