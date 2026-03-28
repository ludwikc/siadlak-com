import type { Picture } from "vite-imagetools";

type OptimizedImageProps = {
  src: string | Picture;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

function deriveSiblingPath(src: string, ext: string): string {
  return src.replace(/\.[^./?#]+($|\?)/, `${ext}$1`);
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "100vw",
}: OptimizedImageProps) {
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : undefined;

  if (typeof src === "string") {
    const webpSrc = deriveSiblingPath(src, ".webp");
    const avifSrc = deriveSiblingPath(src, ".avif");

    return (
      <picture>
        <source type="image/avif" srcSet={avifSrc} sizes={sizes} />
        <source type="image/webp" srcSet={webpSrc} sizes={sizes} />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          className={className}
          decoding="async"
        />
      </picture>
    );
  }

  const { sources, img } = src;

  return (
    <picture>
      {Object.entries(sources).map(([type, srcset]) => (
        <source key={type} type={type} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={img.src}
        alt={alt}
        width={width ?? img.w}
        height={height ?? img.h}
        loading={loading}
        fetchPriority={fetchPriority}
        className={className}
        decoding="async"
      />
    </picture>
  );
}
