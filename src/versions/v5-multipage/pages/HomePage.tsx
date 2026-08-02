import { Link } from "react-router";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { FeaturedQuote } from "../components/FeaturedQuote";
import { PhotoGallery } from "../components/PhotoGallery";
import { Services } from "../components/Services";
import { QuoteBand } from "../components/QuoteBand";
import { OfficeHours } from "../components/OfficeHours";
import { Awards } from "../components/Awards";
import { PageMeta } from "../components/PageMeta";
import { JsonLd } from "../components/JsonLd";
import { homeSeo } from "../content/homeSeo";
import { pages } from "../content/nav";
import { dentistSchema, canonicalUrl, websiteSchema } from "../content/schema";
import { useVersionPath } from "../hooks/useVersionPath";

export function HomePage() {
  const galleryTo = useVersionPath(pages.gallery.path);
  const servicesTo = useVersionPath(pages.services.path);
  const officeTo = useVersionPath(pages["our-office"].path);

  return (
    <>
      <PageMeta title={homeSeo.title} description={homeSeo.description} />
      <JsonLd
        data={[dentistSchema(canonicalUrl("/")), websiteSchema()]}
      />
      <Hero />
      <Intro />
      <FeaturedQuote />
      <PhotoGallery />
      <div className="w-full px-6 md:px-16 pb-2 -mt-2">
        <div className="pnw-container">
          <Link
            to={galleryTo}
            className="pnw-text-link text-sm font-semibold text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)] transition-colors"
          >
            See full gallery
          </Link>
        </div>
      </div>
      <Services />
      <div className="w-full px-6 md:px-16 pb-10 -mt-6 md:-mt-8">
        <div className="pnw-container">
          <Link
            to={servicesTo}
            className="pnw-text-link text-sm font-semibold text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)] transition-colors"
          >
            See all services
          </Link>
        </div>
      </div>
      <QuoteBand />
      <OfficeHours />
      <div className="w-full px-6 md:px-16 pb-10 -mt-6 md:-mt-8 bg-[var(--pnw-white)]">
        <div className="pnw-container">
          <Link
            to={officeTo}
            className="pnw-text-link text-sm font-semibold text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)] transition-colors"
          >
            More about our office
          </Link>
        </div>
      </div>
      <Awards />
    </>
  );
}
