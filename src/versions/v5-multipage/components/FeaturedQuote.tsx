import { featuredQuotes } from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedQuote() {
  return (
    <section
      className="w-full px-6 md:px-16 py-16 md:py-20 bg-[var(--pnw-stone)]"
      aria-label="Patient testimonials"
    >
      <div className="pnw-container">
        <div className="max-w-2xl mx-auto flex flex-col gap-14 md:gap-16">
          {featuredQuotes.map((quote, index) => (
            <ScrollReveal key={quote.attribution} delay={index * 0.08}>
              <blockquote className="text-center">
                <p className="font-display italic text-[var(--pnw-ink)] text-2xl md:text-3xl leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-[var(--pnw-moss)] tracking-wide">
                  — {quote.attribution}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
