import { ScrollReveal } from "./ScrollReveal";

const SERVICES = [
  {
    index: "01",
    title: "preventive",
    description: "Foundational care for lifelong health and a confident smile.",
  },
  {
    index: "02",
    title: "cosmetic",
    description: "Invisalign, porcelain veneers, and whitening tailored to you.",
  },
  {
    index: "03",
    title: "restorative",
    description: "Implants and precision care to rebuild and protect your smile.",
  },
  {
    index: "04",
    title: "family",
    description: "Exceptional care for every age, all under one roof.",
  },
] as const;

export function Services() {
  return (
    <div
      id="services"
      className="w-full px-6 md:px-16 py-16 md:py-20 bg-[var(--pnw-stone)]"
    >
      <div className="pnw-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {SERVICES.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.08}>
            <div className="flex flex-col gap-4">
              <span className="font-display text-[var(--pnw-clay)] text-lg">
                {service.index}
              </span>
              <h3 className="font-display text-[var(--pnw-ink)] text-xl md:text-2xl">
                {service.title}
              </h3>
              <p className="font-normal text-[var(--pnw-ink-soft)] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
