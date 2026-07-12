import { ScrollReveal } from "./ScrollReveal";

const SERVICES = [
  {
    title: "Preventive",
    description: "Foundational care for lifelong health and a confident smile.",
  },
  {
    title: "Cosmetic",
    description: "Invisalign, porcelain veneers, and whitening tailored to you.",
  },
  {
    title: "Restorative",
    description: "Implants and precision care to rebuild and protect your smile.",
  },
  {
    title: "Family",
    description: "Exceptional care for every age, all under one roof.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="w-full px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-semibold text-[var(--pnwb-sage)] text-sm tracking-wide mb-3">
            Our services
          </p>
          <h2 className="font-display text-[var(--pnwb-ink)] text-2xl md:text-3xl mb-12">
            Comprehensive care, thoughtfully delivered
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="border border-[var(--pnwb-border)] bg-[var(--pnwb-white)] p-7 md:p-8 rounded-sm hover:border-[var(--pnwb-sage)]/50 transition-colors">
                <h3 className="font-display text-[var(--pnwb-ink)] text-xl md:text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--pnwb-ink-soft)] text-sm md:text-base leading-relaxed max-w-[45ch]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
