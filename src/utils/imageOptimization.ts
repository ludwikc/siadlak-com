/**
 * Image optimization utilities
 * Provides functions for optimizing images with modern formats (WebP/AVIF)
 * and implementing lazy loading for better performance
 */

/**
 * Checks if the browser supports a specific image format
 * @param format The image format to check (webp, avif)
 * @returns Promise that resolves to true if the format is supported, false otherwise
 */
export const isFormatSupported = async (format: 'webp' | 'avif'): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  
  // Create a test image
  const img = new Image();
  
  // Create a promise that resolves when the image loads or fails
  const checkPromise = new Promise<boolean>((resolve) => {
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
  
  // Set the source to a data URL of the format to test
  if (format === 'webp') {
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  } else if (format === 'avif') {
    img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  }
  
  // Return the result
  return checkPromise;
};

/**
 * Gets the optimal image format based on browser support
 * @returns The optimal image format extension (.avif, .webp, or original)
 */
export const getOptimalImageFormat = async (): Promise<string> => {
  // Check AVIF support first as it's generally better than WebP
  if (await isFormatSupported('avif')) {
    return '.avif';
  }
  
  // Fall back to WebP if supported
  if (await isFormatSupported('webp')) {
    return '.webp';
  }
  
  // Fall back to original format
  return '';
};

/**
 * Generates the optimal image URL based on the original URL and browser support
 * @param originalUrl The original image URL
 * @returns Promise that resolves to the optimal image URL
 */
export const getOptimalImageUrl = async (originalUrl: string): Promise<string> => {
  // Skip optimization for SVGs and GIFs
  if (originalUrl.endsWith('.svg') || originalUrl.endsWith('.gif')) {
    return originalUrl;
  }
  
  const optimalFormat = await getOptimalImageFormat();
  
  // If no modern format is supported, return the original URL
  if (!optimalFormat) {
    return originalUrl;
  }
  
  // Remove existing extension if present
  const baseUrl = originalUrl.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  
  // Return the URL with the optimal format
  return `${baseUrl}${optimalFormat}`;
};

/**
 * Optimized image component props
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

/**
 * Generates a srcset for responsive images
 * @param baseUrl The base URL of the image without extension
 * @param format The image format extension (.webp, .avif, etc.)
 * @param widths Array of widths to include in the srcset
 * @returns The srcset string
 */
export const generateSrcSet = (
  baseUrl: string,
  format: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920, 2048]
): string => {
  return widths
    .map((width) => `${baseUrl}-${width}w${format} ${width}w`)
    .join(', ');
};

/**
 * Utility to determine if an element is in the viewport
 * Used for implementing custom lazy loading
 * @param element The DOM element to check
 * @param rootMargin Optional root margin to expand/contract the viewport
 * @returns True if the element is in the viewport, false otherwise
 */
export const isInViewport = (
  element: HTMLElement,
  rootMargin: string = '0px'
): boolean => {
  if (typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  
  // Parse rootMargin
  const margins = rootMargin.split(' ').map((margin) => parseInt(margin));
  const topMargin = margins[0] || 0;
  const rightMargin = margins[1] || topMargin;
  const bottomMargin = margins[2] || topMargin;
  const leftMargin = margins[3] || rightMargin;
  
  return (
    rect.top - bottomMargin <= windowHeight &&
    rect.left - rightMargin <= windowWidth &&
    rect.bottom + topMargin >= 0 &&
    rect.right + leftMargin >= 0
  );
};
