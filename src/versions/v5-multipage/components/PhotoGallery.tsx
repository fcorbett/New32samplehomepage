import imgOffice1 from "../../../imports/our-office/062207-14-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice2 from "../../../imports/our-office/july-07-10b-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice3 from "../../../imports/our-office/july-07-11-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import { ScrollReveal } from "./ScrollReveal";
import { PictureImage, type PictureData } from "./PictureImage";

const PHOTOS: { picture: PictureData; alt: string }[] = [
  { picture: imgOffice1, alt: "new32 office interior at Northcut Landing" },
  { picture: imgOffice2, alt: "Treatment room at the new32 dental office" },
  { picture: imgOffice3, alt: "Reception and seating area at new32" },
];

export function PhotoGallery() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3">
      {PHOTOS.map((photo, index) => (
        <ScrollReveal
          key={photo.alt}
          delay={index * 0.12}
          scale
          className="relative h-72 md:h-[420px] lg:h-[520px] overflow-hidden"
        >
          <PictureImage
            picture={photo.picture}
            alt={photo.alt}
            sizes="(min-width: 768px) 33vw, 100vw"
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            imgClassName="absolute inset-0 w-full h-full object-cover"
          />
        </ScrollReveal>
      ))}
    </div>
  );
}
