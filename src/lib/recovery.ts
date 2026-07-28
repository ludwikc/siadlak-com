/**
 * Self-healing for the two ways a deployed SPA goes blank:
 *
 *  - A new deploy renames every content-hashed chunk, so a tab opened before
 *    the deploy 404s when it lazy-imports a route. One reload fetches the
 *    fresh index.html and asset map.
 *  - Any uncaught render error unmounts the React root. The ErrorBoundary
 *    shows a fallback instead, and auto-reloads once for chunk failures.
 *
 * The reload is claimed through storage so a persistent failure (broken cache,
 * offline) degrades to the fallback UI instead of a reload loop.
 */

const RELOAD_KEY = "recovery:auto-reload-at";
const RELOAD_WINDOW_MS = 60_000;

type KVStore = Pick<Storage, "getItem" | "setItem">;

export function claimAutoReload(
  now: number,
  store: KVStore,
  windowMs: number = RELOAD_WINDOW_MS,
): boolean {
  try {
    const last = Number(store.getItem(RELOAD_KEY) ?? 0);
    if (now - last < windowMs) return false;
    store.setItem(RELOAD_KEY, String(now));
    return true;
  } catch {
    // Can't record the claim => can't bound the loop => never auto-reload.
    return false;
  }
}

const CHUNK_ERROR_RE =
  /dynamically imported module|importing a module script failed|unable to preload css/i;

export function isChunkLoadError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error ?? "");
  return CHUNK_ERROR_RE.test(message);
}
