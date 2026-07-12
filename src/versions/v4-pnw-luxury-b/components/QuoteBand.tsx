import { ScrollReveal } from "./ScrollReveal";

export function QuoteBand() {
  return (
    <section className="w-full bg-[var(--pnwb-sage-deep)] px-6 md:px-16 py-16 md:py-24 lg:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-display font-normal text-[var(--pnwb-white)] text-lg md:text-xl lg:text-2xl leading-relaxed">
            Dr. Beth Jacobsen and Dr. Beth Shaw are committed to providing
            patients with the highest standard of care in a warm,
            family-focused environment where education and prevention come
            first.
          </p>
        </ScrollReveal>

        <div className="w-12 h-px bg-white/20 mx-auto my-8" aria-hidden="true" />

        <ScrollReveal delay={0.12}>
          <p className="font-display font-normal text-[var(--pnwb-white)]/85 text-lg md:text-xl lg:text-2xl leading-relaxed">
            At new32, our practice philosophy centers on you — our
            neighbors, their families, and the relationships we build one
            visit at a time.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
