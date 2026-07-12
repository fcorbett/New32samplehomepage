import { officeHours, location, phone, fax } from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

export function OfficeHours() {
  return (
    <section id="office" className="w-full px-6 md:px-16 py-16 md:py-24 bg-[var(--pnwb-white)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-semibold text-[var(--pnwb-sage)] text-sm tracking-wide mb-3">
            Visit us
          </p>
          <h2 className="font-display text-[var(--pnwb-ink)] text-2xl md:text-3xl mb-12">
            Hours &amp; location
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <table className="w-full text-sm">
                <tbody>
                  {officeHours.map((row) => (
                    <tr
                      key={row.day}
                      className="border-b border-[var(--pnwb-border)] last:border-0"
                    >
                      <td className="py-3 font-medium text-[var(--pnwb-ink)]">
                        {row.day}
                      </td>
                      <td className="py-3 text-right text-[var(--pnwb-ink-soft)]">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={phone.tel}
                  className="text-[var(--pnwb-ink)] font-medium hover:text-[var(--pnwb-sage-deep)] transition-colors"
                >
                  {phone.display}
                </a>
                <span className="text-[var(--pnwb-ink-soft)]">Fax: {fax}</span>
                <p className="text-[var(--pnwb-ink-soft)] mt-2 max-w-[50ch]">
                  {location.parkingNote}
                </p>
              </div>

              <a
                href={phone.tel}
                className="inline-block w-fit px-6 py-3 bg-[var(--pnwb-sage-deep)] text-[var(--pnwb-white)] text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-[var(--pnwb-ink)] transition-colors"
              >
                Call to schedule
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative w-full h-72 md:h-full min-h-[280px] rounded-sm overflow-hidden bg-[var(--pnwb-stone)] border border-[var(--pnwb-border)]">
              <iframe
                title="Map to new32 Cosmetic and Family Dentistry"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.847!2d-122.3012!3d47.6654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490145d0e2e8f0b%3A0x0!2s4915%2025th%20Ave%20NE%20%23107%2C%20Seattle%2C%20WA%2098105!5e0!3m2!1sen!2sus!4v1"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
