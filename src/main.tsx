import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/700.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import { initAttribution } from "./lib/attribution";
import { claimAutoReload } from "./lib/recovery";
import { reportWebVitals } from "./lib/web-vitals";
import "./index.css";
import "./design-system/styles/global.css";

// Capture the landing URL's campaign params before first render.
initAttribution();

// A new deploy renames every content-hashed chunk. A tab opened before the
// deploy can 404 on a lazy chunk it tries to import; reload to pick up the
// fresh index.html and asset map. Claimed through recovery so a persistent
// failure falls through to the ErrorBoundary instead of a reload loop.
window.addEventListener("vite:preloadError", () => {
  if (claimAutoReload(Date.now(), sessionStorage)) window.location.reload();
});

const container = document.getElementById("app")!;
const app = (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Prerendered HTML (dist/<route>/index.html) is hydrated; the plain SPA shell
// (empty #app in dev / non-prerendered routes) is mounted fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

reportWebVitals();
