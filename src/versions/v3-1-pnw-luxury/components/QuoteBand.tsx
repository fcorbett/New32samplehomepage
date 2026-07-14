import { ScrollReveal } from "./ScrollReveal";

export function QuoteBand() {
  return (
    <div className="w-full bg-[var(--pnw-moss-deep)] px-6 md:px-16 py-16 md:py-24 lg:py-28">
      <div className="pnw-container">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[var(--pnw-white)] text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Dr. Beth Jacobsen and Dr. Beth Shaw are committed to providing
              patients with the highest standard of care in a warm,
              family-focused environment where education and prevention come
              first. They chose dentistry for its power to shape a
              person&apos;s health, confidence, and well-being.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="font-display text-[var(--pnw-white)]/85 text-xl md:text-2xl lg:text-3xl leading-relaxed mt-8">
              At new32, our practice philosophy centers on you — our
              neighbors, their families, and the relationships we build one
              visit at a time.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
