import React, { useState, useEffect, useRef } from 'react';
import { getOptimalImageUrl, OptimizedImageProps, generateSrcSet, isInViewport } from '@/utils/imageOptimization';

/**
 * OptimizedImage component
 * 
 * A React component that automatically selects the optimal image format (AVIF, WebP, or original)
 * based on browser support and implements lazy loading for better performance.
 * 
 * Features:
 * - Automatic format selection (AVIF > WebP > original)
 * - Native lazy loading with fetchPriority
 * - Responsive images with srcset
 * - Accessibility attributes
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes = '100vw',
}) => {
  const [optimizedSrc, setOptimizedSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Get the optimal image format based on browser support
  useEffect(() => {
    const optimizeImage = async () => {
      const optimalSrc = await getOptimalImageUrl(src);
      setOptimizedSrc(optimalSrc);
    };

    optimizeImage();
  }, [src]);

  // Generate srcset for responsive images
  const getSrcSet = () => {
    // Skip srcset for SVGs and GIFs
    if (src.endsWith('.svg') || src.endsWith('.gif')) {
      return undefined;
    }

    // Extract base URL without extension
    const baseUrl = src.replace(/\.(jpe?g|png|webp|avif)$/i, '');
    
    // Extract format from optimizedSrc
    const format = optimizedSrc.match(/\.(jpe?g|png|webp|avif)$/i)?.[0] || '';
    
    return generateSrcSet(baseUrl, format);
  };

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Determine if the image should be loaded eagerly
  const shouldLoadEagerly = loading === 'eager' || fetchPriority === 'high';

  return (
    <img
      ref={imageRef}
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      loading={shouldLoadEagerly ? 'eager' : 'lazy'}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={getSrcSet()}
      onLoad={handleLoad}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transition: 'opacity 0.3s ease-in-out',
      }}
      aria-hidden={alt === ''}
    />
  );
};

export default OptimizedImage;
