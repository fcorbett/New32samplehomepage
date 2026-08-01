import { createRoot, hydrateRoot } from "react-dom/client";
import ProductionApp from "./app/ProductionApp.tsx";
import "./styles/index.css";

const rootEl = document.getElementById("root")!;

// hydrateRoot when the home route was prerendered into #root; otherwise client-render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <ProductionApp />);
} else {
  createRoot(rootEl).render(<ProductionApp />);
}
