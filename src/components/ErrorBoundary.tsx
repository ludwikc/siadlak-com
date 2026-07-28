import { Component, type ReactNode } from "react";
import { CTAButton } from "@/design-system/components/cta-button";
import { claimAutoReload, isChunkLoadError } from "@/lib/recovery";

type Props = { children: ReactNode };
type State = { failed: boolean };

/**
 * Root safety net: without it any uncaught render error unmounts the whole
 * tree and the visitor sees a dead white page. Chunk-load failures (stale tab
 * after a deploy) self-heal with one guarded reload; everything else gets a
 * human fallback. Deliberately router-free — the router may be part of the
 * crashed subtree, so navigation uses plain anchors.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    if (isChunkLoadError(error) && claimAutoReload(Date.now(), sessionStorage)) {
      window.location.reload();
    }
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <div className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-void px-6 text-center">
        <h1 className="text-3xl font-bold text-locked-white md:text-4xl">
          Coś poszło nie tak
        </h1>
        <p className="max-w-md text-base text-dim">
          Ta wersja strony mogła się zdezaktualizować. Odśwież — to zwykle
          wystarcza.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton
            variant="primary"
            onClick={() => window.location.reload()}
            showArrow={false}
            data-cta="error-boundary:reload"
          >
            Odśwież stronę
          </CTAButton>
          <CTAButton variant="tertiary" href="/" data-cta="error-boundary:home">
            Wróć na stronę główną
          </CTAButton>
        </div>
      </div>
    );
  }
}
