import imgWaitingRoom from "../../../imports/Variation1EditorialSplitV2/6e710aeee4ee940f7ca90e74bd956b48af76288f.png";
import imgHallway from "../../../imports/Variation1EditorialSplitV2/4eea9f3c49af300361a5255f380ef56944927452.png";
import imgFamily from "../../../imports/Variation1EditorialSplitV2/cde4fe2d8a2336157a774459ccad20bdd2f69f4b.png";
import { ScrollReveal } from "./ScrollReveal";

const PHOTOS = [
  { src: imgWaitingRoom, alt: "Warm, naturally lit waiting area at new32" },
  { src: imgHallway, alt: "Natural stone and wood accents in the new32 studio" },
  { src: imgFamily, alt: "Three generations of a new32 family smiling together" },
] as const;

export function PhotoGallery() {
  return (
    <section id="gallery" className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1fr]">
      {PHOTOS.map((photo, index) => (
        <ScrollReveal
          key={photo.src}
          delay={index * 0.12}
          scale
          className="relative h-72 md:h-[440px] lg:h-[560px] overflow-hidden"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ScrollReveal>
      ))}
    </section>
  );
}
