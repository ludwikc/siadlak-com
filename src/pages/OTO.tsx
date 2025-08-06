import { useState, useEffect } from 'react';
import { ReferrerGuard } from '@/components/oto/ReferrerGuard';
import { OTOProductDisplay } from '@/components/oto/OTOProductDisplay';
import { getOTOCookie, setOTOCookie, isOfferExpired } from '@/lib/oto-utils';

enum OTOState {
  LOADING = 'loading',
  ACTIVE = 'active',
  EXPIRED = 'expired'
}

function OTOContent() {
  const [state, setState] = useState<OTOState>(OTOState.LOADING);
  
  useEffect(() => {
    const checkOTOStatus = () => {
      const existingCookie = getOTOCookie();
      
      if (existingCookie) {
        // User has visited before or offer expired
        if (isOfferExpired()) {
          setState(OTOState.EXPIRED);
        } else {
          // Still within time limit, but user has already seen it
          setState(OTOState.EXPIRED);
        }
      } else {
        // First-time visitor - set cookie and start timer
        setOTOCookie({});
        setState(OTOState.ACTIVE);
      }
    };
    
    // Small delay to prevent flash
    const timer = setTimeout(checkOTOStatus, 100);
    return () => clearTimeout(timer);
  }, []);
  
  const handleExpired = () => {
    setState(OTOState.EXPIRED);
  };
  
  // Loading state
  if (state === OTOState.LOADING) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Ładowanie oferty...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <OTOProductDisplay onExpired={handleExpired} />
    </div>
  );
}

export default function OTO() {
  return (
    <ReferrerGuard>
      <OTOContent />
    </ReferrerGuard>
  );
}