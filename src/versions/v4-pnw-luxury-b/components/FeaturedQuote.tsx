import { featuredQuotes } from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedQuote() {
  return (
    <section className="w-full bg-[var(--pnwb-stone-deep)] px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {featuredQuotes.map((quote, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <blockquote className="text-center">
              <p className="font-display font-normal italic text-[var(--pnwb-ink)] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-[55ch] mx-auto">
                &ldquo;{quote.text}&rdquo;
              </p>
              <cite className="block mt-4 text-sm text-[var(--pnwb-ink-soft)] not-italic font-medium">
                — {quote.attribution}
              </cite>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
