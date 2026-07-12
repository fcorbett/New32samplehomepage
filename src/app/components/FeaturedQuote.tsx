import { featuredQuotes } from "../../content/siteFacts";

export function FeaturedQuote() {
  return (
    <section
      className="w-full px-6 md:px-16 py-12 md:py-16 bg-white border-t border-[var(--brand-border)]"
      aria-label="Patient testimonials"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
        {featuredQuotes.map((quote) => (
          <blockquote key={quote.attribution} className="text-center">
            <p className="font-light text-xl md:text-2xl text-[var(--brand-ink)] leading-relaxed italic">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="mt-6 text-sm text-[var(--brand-brown)]">
              — {quote.attribution}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
