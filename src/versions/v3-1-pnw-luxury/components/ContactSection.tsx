import { ContactForm } from "../../../app/components/ContactForm";
import { ScrollReveal } from "./ScrollReveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-6 md:px-16 py-16 md:py-20 bg-[var(--pnw-stone)]"
      aria-labelledby="contact-heading"
    >
      <div className="pnw-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <ScrollReveal className="lg:col-span-5">
            <h2
              id="contact-heading"
              className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-3"
            >
              Get in touch
            </h2>
            <p className="text-[var(--pnw-ink-soft)] text-sm md:text-base leading-relaxed mb-4">
              Prefer to send a note? Tell us a little about yourself and how
              you’d like to be reached — we’ll follow up from the office.
            </p>
            <p className="text-[var(--pnw-ink-soft)] text-sm leading-relaxed">
              Or call us anytime during office hours. We’re glad you’re here.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-2xl border border-[var(--pnw-border)] bg-[var(--pnw-white)] px-5 py-6 md:px-8 md:py-8 shadow-[0_1px_0_rgba(35,32,25,0.04)]">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
