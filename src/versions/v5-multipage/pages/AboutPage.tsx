import { Link } from "react-router";
import { affiliations } from "../content/team";
import { aboutPage } from "../content/pages";
import { pages } from "../content/nav";
import { PageMeta } from "../components/PageMeta";
import { PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { CallBand } from "../components/CallBand";
import { TeamRoster } from "../components/TeamRoster";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ScrollReveal } from "../components/ScrollReveal";
import { PictureImage } from "../components/PictureImage";
import { useVersionPath } from "../hooks/useVersionPath";

export function AboutPage() {
  const homeTo = useVersionPath();
  const servicesTo = useVersionPath(pages.services.path);

  return (
    <>
      <PageMeta
        title={aboutPage.seo.title}
        description={aboutPage.seo.description}
      />
      <Breadcrumbs
        items={[{ name: "Home", to: homeTo }, { name: "About" }]}
      />
      <PageHero title={aboutPage.h1} lead={aboutPage.lead} />
      <div className="w-full px-6 md:px-16 py-12 md:py-16">
        <div className="pnw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <Prose className="max-w-[65ch]">
                {aboutPage.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </Prose>

              <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mt-12 mb-4">
                {aboutPage.affiliationsHeading}
              </h2>
              <ul className="space-y-3 text-[var(--pnw-ink-soft)] text-base leading-relaxed">
                {affiliations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="text-[var(--pnw-clay-accent)] mt-1.5 shrink-0"
                      aria-hidden
                    >
                      ·
                    </span>
                    {item.includes("Invisalign") ? (
                      <span>
                        Certified in{" "}
                        <Link
                          to={servicesTo}
                          className="text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)]"
                        >
                          Invisalign
                        </Link>
                      </span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {aboutPage.image && (
              <ScrollReveal delay={0.1}>
                <div className="relative aspect-square overflow-hidden bg-[var(--pnw-stone-deep)] border border-[var(--pnw-border)]">
                  <PictureImage
                    picture={aboutPage.image}
                    alt={aboutPage.imageAlt ?? ""}
                    sizes="320px"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    imgClassName="absolute inset-0 w-full h-full object-cover object-[55%_28%]"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>

          <TeamRoster />
        </div>
      </div>
      <CallBand />
    </>
  );
}
