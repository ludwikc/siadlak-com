import type { CSSProperties } from "react";
import type { Picture } from "vite-imagetools";

type OptimizedImageProps = {
  src: string | Picture;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  style?: CSSProperties;
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
  style,
}: OptimizedImageProps) {
  const loading = priority ? "eager" : "lazy";
  // React 18.3 warns on the camelCase `fetchPriority` prop; the DOM attribute is
  // lowercase, so pass it through as a plain attribute only when prioritising.
  const priorityAttr = (priority ? { fetchpriority: "high" } : {}) as Record<string, string>;

  if (typeof src === "string") {
    if (import.meta.env.DEV && (width === undefined || height === undefined)) {
      console.warn(
        `[OptimizedImage] string src "${src}" is missing width/height — set both to avoid layout shift (CLS), or import via the imagetools \`?...&as=picture\` query so dimensions are inferred.`,
      );
    }
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
          {...priorityAttr}
          className={className}
          style={style}
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
        {...priorityAttr}
        className={className}
        style={style}
        decoding="async"
      />
    </picture>
  );
}
