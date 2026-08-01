import { Link } from "react-router";
import type { ReactNode } from "react";
import { servicesPage } from "../content/pages";
import { pages } from "../content/nav";
import { servicesFaqs } from "../content/faqs";
import { PageMeta } from "../components/PageMeta";
import { PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { CallBand } from "../components/CallBand";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqBlock } from "../components/FaqBlock";
import { ScrollReveal } from "../components/ScrollReveal";
import { PictureImage } from "../components/PictureImage";
import { ServicesFactsCard } from "../components/ServicesFactsCard";
import { useVersionPath } from "../hooks/useVersionPath";

function linkPhrase(text: string, phrase: string, to: string): ReactNode {
  const idx = text.indexOf(phrase);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <Link
        to={to}
        className="text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)]"
      >
        {phrase}
      </Link>
      {text.slice(idx + phrase.length)}
    </>
  );
}

export function ServicesPage() {
  const homeTo = useVersionPath();
  const contactTo = useVersionPath(pages.contact.path);

  return (
    <>
      <PageMeta
        title={servicesPage.seo.title}
        description={servicesPage.seo.description}
      />
      <Breadcrumbs
        items={[{ name: "Home", to: homeTo }, { name: "Services" }]}
      />
      <PageHero title={servicesPage.h1} lead={servicesPage.lead} />
      <div className="w-full px-6 md:px-16 py-12 md:py-16">
        <div className="pnw-container flex flex-col lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 lg:items-start">
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start mb-10 lg:mb-0">
            <ServicesFactsCard />
          </div>

          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="max-w-[65ch]">
                <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-4">
                  {servicesPage.cosmeticHeading}
                </h2>
                <Prose>
                  <p>{servicesPage.cosmeticIntro}</p>
                </Prose>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[var(--pnw-ink)] text-base md:text-lg">
                {servicesPage.cosmeticList.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-[var(--pnw-border)] pb-3"
                  >
                    <span className="text-[var(--pnw-clay-accent)]" aria-hidden>
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="max-w-[65ch]">
                <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mt-14 mb-4">
                  {servicesPage.familyHeading}
                </h2>
                <Prose>
                  <p>
                    {linkPhrase(
                      servicesPage.familyIntro,
                      "please contact our office",
                      contactTo,
                    )}
                  </p>
                </Prose>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {servicesPage.familyFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="border border-[var(--pnw-border)] bg-[var(--pnw-white)] p-5"
                  >
                    <h3 className="font-display text-[var(--pnw-ink)] text-xl md:text-2xl mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--pnw-ink-soft)] text-base leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="max-w-[65ch]">
                <p className="font-display text-[var(--pnw-ink)] text-xl mt-10">
                  {servicesPage.familyClosing}
                </p>
              </div>
              {servicesPage.image && (
                <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-[var(--pnw-stone-deep)]">
                  <PictureImage
                    picture={servicesPage.image}
                    alt={servicesPage.imageAlt ?? ""}
                    sizes="(min-width: 768px) 65ch, 100vw"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    imgClassName="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
            </ScrollReveal>

            <div className="max-w-[65ch]">
              <FaqBlock items={servicesFaqs} />
            </div>
          </div>
        </div>
      </div>
      <CallBand />
    </>
  );
}
