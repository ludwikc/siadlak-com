import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthorizedReferrer } from '@/lib/oto-utils';

interface ReferrerGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ReferrerGuard({ children, redirectTo = '/' }: ReferrerGuardProps) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check referrer authorization
    const authorized = isAuthorizedReferrer();

    // Preview/dev bypass options:
    // - ?preview=1 in URL
    // - same-origin navigation
    // - localhost/127.0.0.1 or lovable preview hosts
    let sameOrigin = false;
    try {
      if (document.referrer) {
        const refUrl = new URL(document.referrer);
        sameOrigin = refUrl.origin === window.location.origin;
      }
    } catch {
      sameOrigin = false;
    }

    const previewFlag = new URLSearchParams(window.location.search).get('preview') === '1';
    const devHost =
      window.location.hostname.includes('localhost') ||
      window.location.hostname.includes('127.0.0.1') ||
      window.location.hostname.includes('lovable');

    setIsAuthorized(authorized || previewFlag || sameOrigin || devHost);
  }, []);
  
  // Loading state
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Sprawdzanie dostępu...</p>
        </div>
      </div>
    );
  }
  
  // Unauthorized - redirect
  if (!isAuthorized) {
    return <Navigate to={redirectTo} replace />;
  }
  
  // Authorized - render children
  return <>{children}</>;
}