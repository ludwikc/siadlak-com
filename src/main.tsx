import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/700.css";
import App from "./App.tsx";
import { initAttribution } from "./lib/attribution";
import "./index.css";
import "./design-system/styles/global.css";

// Capture the landing URL's campaign params before first render.
initAttribution();

// A new deploy renames every content-hashed chunk. A tab opened before the
// deploy can 404 on a lazy chunk it tries to import; reload to pick up the
// fresh index.html and asset map.
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});

createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
