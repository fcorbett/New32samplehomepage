import { phone } from "../../../content/siteFacts";
import type { LegalPageContent, LegalSection } from "../content/legalTypes";
import { PageMeta } from "../components/PageMeta";
import { PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ScrollReveal } from "../components/ScrollReveal";
import { useVersionPath } from "../hooks/useVersionPath";

function ContactBlock() {
  return (
    <p>
      <span className="font-medium text-[var(--pnw-ink)]">
        new32 Cosmetic and Family Dentistry
      </span>
      <br />
      <a
        href={phone.tel}
        className="text-[var(--pnw-moss)] underline hover:text-[var(--pnw-clay)]"
      >
        {phone.display}
      </a>
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-[var(--pnw-ink-soft)] text-base md:text-lg leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3 items-start">
          <span
            className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-[var(--pnw-clay-accent)]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LegalSectionBlock({ section }: { section: LegalSection }) {
  const hasProseBeforeList =
    Boolean(section.intro) || Boolean(section.subsections?.length);

  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-4">
        {section.heading}
      </h2>
      {hasProseBeforeList ? (
        <Prose>
          {section.intro ? <p>{section.intro}</p> : null}
          {section.subsections?.map((sub) => (
            <div key={sub.title}>
              <p className="font-medium text-[var(--pnw-ink)] mb-1">
                {sub.title}
              </p>
              <p>{sub.body}</p>
            </div>
          ))}
        </Prose>
      ) : null}
      {section.items ? (
        <div className={hasProseBeforeList ? "mt-5" : undefined}>
          <BulletList items={section.items} />
        </div>
      ) : null}
      {section.paragraphs?.length ||
      section.contactBlock ||
      section.paragraphsAfterContact?.length ? (
        <Prose className={section.items || hasProseBeforeList ? "mt-5" : ""}>
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {section.contactBlock ? <ContactBlock /> : null}
          {section.paragraphsAfterContact?.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </Prose>
      ) : null}
    </section>
  );
}

export function LegalPage({ content }: { content: LegalPageContent }) {
  const homeTo = useVersionPath();

  return (
    <>
      <PageMeta title={content.seo.title} description={content.seo.description} />
      <Breadcrumbs
        items={[
          { name: "Home", to: homeTo },
          { name: content.breadcrumb },
        ]}
      />
      <PageHero
        eyebrow={
          content.effectiveDate
            ? `Effective Date: ${content.effectiveDate}`
            : undefined
        }
        title={content.h1}
        lead={content.lead}
      />
      <div className="w-full px-6 md:px-16 py-12 md:py-16">
        <div className="pnw-container max-w-[65ch]">
          <ScrollReveal>
            {content.sections.map((section) => (
              <LegalSectionBlock key={section.heading} section={section} />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
