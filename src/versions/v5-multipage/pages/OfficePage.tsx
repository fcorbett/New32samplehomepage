import { Link } from "react-router";
import { location, phone, fax, officeHours } from "../../../content/siteFacts";
import { officePage } from "../content/pages";
import { pages } from "../content/nav";
import { PageMeta } from "../components/PageMeta";
import { PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { CallBand } from "../components/CallBand";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ScrollReveal } from "../components/ScrollReveal";
import { PictureImage } from "../components/PictureImage";
import { useVersionPath } from "../hooks/useVersionPath";

export function OfficePage() {
  const homeTo = useVersionPath();
  const contactTo = useVersionPath(pages.contact.path);

  return (
    <>
      <PageMeta
        title={officePage.seo.title}
        description={officePage.seo.description}
      />
      <Breadcrumbs
        items={[{ name: "Home", to: homeTo }, { name: "Our office" }]}
      />
      <PageHero title={officePage.h1} lead={officePage.lead} />
      <div className="w-full px-6 md:px-16 py-12 md:py-16">
        <div className="pnw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <Prose>
                {officePage.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                <p>{location.parkingNote}</p>
                <p>
                  <Link
                    to={contactTo}
                    className="text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)]"
                  >
                    contact us
                  </Link>
                </p>
              </Prose>
            </ScrollReveal>
            {officePage.image && (
              <ScrollReveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--pnw-stone-deep)]">
                  <PictureImage
                    picture={officePage.image}
                    alt={officePage.imageAlt ?? ""}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    imgClassName="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>

          <section className="mt-14 md:mt-16" aria-labelledby="tour-heading">
            <ScrollReveal>
              <h2
                id="tour-heading"
                className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-4"
              >
                {officePage.virtualTourHeading}
              </h2>
              <div className="relative min-h-[280px] md:min-h-[400px] bg-[var(--pnw-stone)] border border-[var(--pnw-border)] overflow-hidden">
                <iframe
                  title="Google tour of new32 Cosmetic and Family Dentistry"
                  src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1459471198100!6m8!1m7!1sUwaWuMVeCTEAAAQvOrJnSQ!2m2!1d47.66500167722582!2d-122.3019163687778!3f182!4f0!5f0.7820865974627469"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 flex flex-col gap-2 text-sm md:text-base text-[var(--pnw-ink-soft)]">
                <a
                  href={location.googlePlacesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pnw-text-link text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)] w-fit"
                >
                  {location.addressDisplay}
                </a>
                <p>
                  Phone:{" "}
                  <a href={phone.tel} className="underline">
                    {phone.display}
                  </a>
                  {" · "}Fax: {fax}
                </p>
                <ul className="mt-2 space-y-1">
                  {officeHours.map(({ day, hours }) => (
                    <li key={day}>
                      <span className="font-medium text-[var(--pnw-ink)]">
                        {day}:
                      </span>{" "}
                      {hours}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </div>
      <CallBand />
    </>
  );
}
