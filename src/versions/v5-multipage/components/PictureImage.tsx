import type { ImgHTMLAttributes } from "react";

export type PictureData = {
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
};

type PictureImageProps = {
  picture: PictureData;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  /** Lowercase for React 18 SSR compatibility */
  fetchpriority?: "high" | "low" | "auto";
  decoding?: ImgHTMLAttributes<HTMLImageElement>["decoding"];
};

const FORMAT_TYPE: Record<string, string> = {
  avif: "image/avif",
  webp: "image/webp",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
};

/** Prefer modern formats first; jpeg/png last as fallback. */
function orderedFormats(sources: Record<string, string>): string[] {
  const preferred = ["avif", "webp", "jpeg", "jpg", "png"];
  const keys = Object.keys(sources);
  return [
    ...preferred.filter((f) => keys.includes(f)),
    ...keys.filter((k) => !preferred.includes(k)),
  ];
}

export function PictureImage({
  picture,
  alt,
  sizes,
  className,
  imgClassName,
  loading = "lazy",
  fetchpriority,
  decoding = "async",
}: PictureImageProps) {
  return (
    <picture className={className}>
      {orderedFormats(picture.sources).map((format) => (
        <source
          key={format}
          type={FORMAT_TYPE[format] ?? `image/${format}`}
          srcSet={picture.sources[format]}
          sizes={sizes}
        />
      ))}
      <img
        src={picture.img.src}
        alt={alt}
        width={picture.img.w}
        height={picture.img.h}
        loading={loading}
        decoding={decoding}
        className={imgClassName}
        {...(fetchpriority ? { fetchpriority } : {})}
      />
    </picture>
  );
}
