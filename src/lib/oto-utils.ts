/**
 * OTO (One Time Offer) utility functions for referrer validation and cookie management
 */

interface OTOCookie {
  visited: boolean;
  firstVisitTimestamp: number;
  expirationTimestamp: number;
  userAgent?: string;
}

const OTO_COOKIE_NAME = 'oto_session';
const OTO_DURATION_MS = 7 * 60 * 1000; // 7 minutes

/**
 * Check if the referrer is from an authorized source
 */
export function isAuthorizedReferrer(referrer: string = document.referrer): boolean {
  // Empty referrer (direct traffic or email)
  if (!referrer || referrer === '') return true;
  
  // siadlak.com and subdomains
  if (referrer.includes('siadlak.com')) return true;
  
  // Common email providers
  const emailDomains = [
    'gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 
    'apple.com', 'icloud.com', 'live.com', 'msn.com'
  ];
  if (emailDomains.some(domain => referrer.includes(domain))) return true;
  
  // Polish domains (any .pl domain)
  if (referrer.match(/\.pl($|\/)/)) return true;
  
  return false;
}

/**
 * Get OTO cookie data
 */
export function getOTOCookie(): OTOCookie | null {
  try {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${OTO_COOKIE_NAME}=`))
      ?.split('=')[1];
    
    if (!cookieValue) return null;
    
    return JSON.parse(decodeURIComponent(cookieValue));
  } catch {
    return null;
  }
}

/**
 * Set OTO cookie with visit data
 */
export function setOTOCookie(data: Partial<OTOCookie>): void {
  const now = Date.now();
  const cookieData: OTOCookie = {
    visited: true,
    firstVisitTimestamp: now,
    expirationTimestamp: now + OTO_DURATION_MS,
    userAgent: navigator.userAgent,
    ...data
  };
  
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
  const cookieString = `${OTO_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(cookieData))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  
  document.cookie = cookieString;
}

/**
 * Check if the offer has expired
 */
export function isOfferExpired(): boolean {
  const cookie = getOTOCookie();
  if (!cookie) return false;
  
  return Date.now() > cookie.expirationTimestamp;
}

/**
 * Get remaining time in milliseconds
 */
export function getRemainingTime(): number {
  const cookie = getOTOCookie();
  if (!cookie) return 0;
  
  const remaining = cookie.expirationTimestamp - Date.now();
  return Math.max(0, remaining);
}

/**
 * Format time in MM:SS format
 */
export function formatOTOTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}