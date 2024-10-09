import App from "@/App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RecoilRoot } from "recoil";

createRoot(
	document.getElementById("root") || document.createElement("div"),
).render(
	<StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</StrictMode>,
);
