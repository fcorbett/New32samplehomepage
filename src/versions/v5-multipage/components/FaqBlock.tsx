import { JsonLd } from "./JsonLd";
import type { FaqItem } from "../content/faqs";

type FaqBlockProps = {
  items: FaqItem[];
  heading?: string;
};

export function FaqBlock({ items, heading = "Questions" }: FaqBlockProps) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-14 md:mt-16" aria-labelledby="faq-heading">
      <JsonLd data={schema} />
      <h2
        id="faq-heading"
        className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-6"
      >
        {heading}
      </h2>
      <dl className="space-y-6">
        {items.map((item) => (
          <div
            key={item.question}
            className="border-b border-[var(--pnw-border)] pb-6 last:border-0"
          >
            <dt className="font-semibold text-[var(--pnw-ink)] text-base md:text-lg mb-2">
              {item.question}
            </dt>
            <dd className="text-[var(--pnw-ink-soft)] text-sm md:text-base leading-relaxed">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
