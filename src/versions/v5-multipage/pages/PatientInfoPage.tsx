import type { ReactNode } from "react";
import { patientInfoPage } from "../content/pages";
import { patientInfoFaqs } from "../content/faqs";
import { PageMeta } from "../components/PageMeta";
import { PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { CallBand } from "../components/CallBand";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqBlock } from "../components/FaqBlock";
import { ScrollReveal } from "../components/ScrollReveal";
import { PictureImage } from "../components/PictureImage";
import { QuickFactsCard } from "../components/QuickFactsCard";
import { phone } from "../../../content/siteFacts";
import { useVersionPath } from "../hooks/useVersionPath";

const billPayButtonClassName =
  "inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] border border-[var(--pnw-moss)] text-[var(--pnw-moss)] text-sm font-semibold hover:bg-[var(--pnw-moss)] hover:text-[var(--pnw-white)] transition-colors mt-6";

function linkTel(text: string, phrase: string): ReactNode {
  const idx = text.indexOf(phrase);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <a
        href={phone.tel}
        className="text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)]"
      >
        {phrase}
      </a>
      {text.slice(idx + phrase.length)}
    </>
  );
}

export function PatientInfoPage() {
  const homeTo = useVersionPath();

  return (
    <>
      <PageMeta
        title={patientInfoPage.seo.title}
        description={patientInfoPage.seo.description}
      />
      <Breadcrumbs
        items={[{ name: "Home", to: homeTo }, { name: "Patient info" }]}
      />
      <PageHero title={patientInfoPage.h1} lead={patientInfoPage.lead} />
      <div className="w-full px-6 md:px-16 py-12 md:py-16">
        <div className="pnw-container flex flex-col lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 lg:items-start">
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start mb-10 lg:mb-0">
            <QuickFactsCard />
          </div>

          <div className="order-2 lg:order-1">
            <div className="max-w-[65ch]">
              <ScrollReveal>
                <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-4">
                  {patientInfoPage.comfortHeading}
                </h2>
                <Prose>
                  <p>{patientInfoPage.comfortIntro}</p>
                </Prose>
                <ul className="mt-5 space-y-3 text-[var(--pnw-ink-soft)] text-base md:text-lg leading-relaxed">
                  {patientInfoPage.comfortAmenities.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span
                        className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-[var(--pnw-clay-accent)]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {patientInfoPage.image && (
              <ScrollReveal delay={0.04}>
                <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-[var(--pnw-stone-deep)]">
                  <PictureImage
                    picture={patientInfoPage.image}
                    alt={patientInfoPage.imageAlt ?? ""}
                    sizes="(min-width: 768px) 65ch, 100vw"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    imgClassName="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            )}

            <div className="max-w-[65ch]">
              <ScrollReveal delay={0.08}>
                <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mt-14 mb-4">
                  {patientInfoPage.feesHeading}
                </h2>
                <Prose>
                  {patientInfoPage.feesParagraphs.map((p) => (
                    <p key={p.slice(0, 40)}>
                      {linkTel(p, "give us a call")}
                    </p>
                  ))}
                </Prose>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mt-14 mb-4">
                  {patientInfoPage.billPayHeading}
                </h2>
                <Prose>
                  {patientInfoPage.billPayParagraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </Prose>
                <a
                  href={patientInfoPage.billPayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={billPayButtonClassName}
                >
                  {patientInfoPage.billPayCtaLabel}
                </a>
              </ScrollReveal>

              <FaqBlock items={patientInfoFaqs} />

              {patientInfoPage.seo.dateModified && (
                <p className="mt-10 text-xs text-[var(--pnw-ink-soft)]/70 tracking-wide">
                  Updated {patientInfoPage.seo.dateModified}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <CallBand />
    </>
  );
}
