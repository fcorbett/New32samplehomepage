import imgHero from "../../../imports/hero-team/nicole-goddard-team-hero.jpg?w=480;800;1024&format=avif;webp;jpg&as=picture";
import { CallCta } from "./CallCta";
import { PictureImage } from "./PictureImage";

/**
 * Hero text is static (no opacity:0 entrance) so LCP text paints immediately
 * in prerendered HTML and on first client paint.
 */
export function Hero() {
  return (
    <div className="pnw-hero-row grid grid-cols-1 lg:grid-cols-2 w-full min-w-0">
      <div className="pnw-hero-pad flex items-center bg-[var(--pnw-stone)] px-6 md:px-16 py-16 md:py-20 lg:py-0 lg:min-h-[620px]">
        <div className="max-w-lg">
          <p className="font-semibold text-[var(--pnw-moss)] text-base md:text-lg tracking-wide mb-6">
            Modern family dentistry, rooted in Seattle
          </p>
          <h1 className="font-display font-normal text-[var(--pnw-ink)] text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-6">
            Beautiful smiles.
            <br />
            Lifelong care.
          </h1>
          <p className="text-[var(--pnw-ink-soft)] text-base md:text-lg leading-relaxed mb-8">
            A trusted dental studio built on genuine relationships, clinical
            excellence, and thoughtful prevention — for every generation of
            your family.
          </p>
          <CallCta variant="filled" />
        </div>
      </div>

      {/* No opacity/scale on the LCP image — paint immediately */}
      <div className="relative lg:min-h-[620px] min-h-[360px] w-full overflow-hidden">
        <PictureImage
          picture={imgHero}
          alt="The new32 dentists smiling together outdoors in Seattle"
          sizes="(min-width: 1024px) 50vw, 100vw"
          loading="eager"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full"
          imgClassName="pnw-hero-photo absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
