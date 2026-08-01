import {
  location,
  officeHours,
  phone,
  reviews,
} from "../../../content/siteFacts";
import { reviewsV1 } from "../../../content/reviewsV1";

export const SITE_ORIGIN = "https://new32dental.com";

/** Canonical absolute URL (no trailing slash except home). */
export function canonicalUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized.replace(/\/$/, "")}`;
}

export function dentistSchema(pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "new32 Cosmetic and Family Dentistry",
    telephone: phone.display,
    url: pageUrl ?? `${SITE_ORIGIN}/`,
    image: `${SITE_ORIGIN}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4915 25th Ave NE, Suite 107",
      addressLocality: "Seattle",
      addressRegion: "WA",
      postalCode: "98105",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.6654,
      longitude: -122.3012,
    },
    openingHoursSpecification: officeHours
      .filter((h) => h.hours !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "07:00",
        closes: "15:00",
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.google.rating,
      reviewCount: reviews.google.count,
    },
    sameAs: [
      reviews.google.url,
      reviewsV1.yelp.url,
      reviewsV1.facebook.url,
      location.googlePlacesUrl,
    ],
  };
}

export function personSchema(member: {
  name: string;
  slug?: string;
  image: string;
  shortBlurb: string;
  personSchema?: { jobTitle: string; alumniOf?: string[] };
}) {
  if (!member.personSchema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.personSchema.jobTitle,
    description: member.shortBlurb,
    image: member.image,
    ...(member.slug
      ? { url: canonicalUrl(`/about/${member.slug}`) }
      : {}),
    worksFor: {
      "@type": "Dentist",
      name: "new32 Cosmetic and Family Dentistry",
    },
    ...(member.personSchema.alumniOf
      ? {
          alumniOf: member.personSchema.alumniOf.map((org) => ({
            "@type": "CollegeOrUniversity",
            name: org,
          })),
        }
      : {}),
  };
}
