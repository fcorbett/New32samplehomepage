import {
  fax,
  location,
  officeHours,
  phone,
} from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

export function OfficeHours() {
  return (
    <section
      id="office"
      className="w-full px-6 md:px-16 py-16 md:py-20 bg-[var(--pnw-white)]"
      aria-labelledby="hours-heading"
    >
      <div className="pnw-container">
        <ScrollReveal>
          <h2
            id="hours-heading"
            className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl mb-2"
          >
            Hours &amp; location
          </h2>
          <p className="text-[var(--pnw-ink-soft)] text-sm md:text-base mb-8 leading-relaxed">
            {location.parkingNote}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <ScrollReveal delay={0.08}>
            <table className="w-full text-sm md:text-base text-[var(--pnw-ink)]">
              <caption className="sr-only">Office hours</caption>
              <tbody>
                {officeHours.map(({ day, hours }) => (
                  <tr
                    key={day}
                    className="border-b border-[var(--pnw-border)] last:border-0"
                  >
                    <th
                      scope="row"
                      className="py-3 pr-6 text-left font-medium text-[var(--pnw-ink-soft)] w-32"
                    >
                      {day}
                    </th>
                    <td className="py-3 font-normal">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 flex flex-col gap-3 text-sm md:text-base">
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--pnw-ink)] underline hover:text-[var(--pnw-moss)] transition-colors"
              >
                {location.address}
              </a>
              <p className="text-[var(--pnw-ink-soft)]">
                <span className="font-medium text-[var(--pnw-ink)]">
                  Phone:
                </span>{" "}
                <a
                  href={phone.tel}
                  className="underline hover:text-[var(--pnw-moss)] transition-colors"
                >
                  {phone.display}
                </a>
              </p>
              <p className="text-[var(--pnw-ink-soft)]">
                <span className="font-medium text-[var(--pnw-ink)]">
                  Fax:
                </span>{" "}
                {fax}
              </p>
            </div>

            <a
              href={phone.tel}
              className="inline-block mt-8 px-6 py-3 bg-[var(--pnw-moss)] text-[var(--pnw-white)] text-sm font-semibold uppercase tracking-wide hover:bg-[var(--pnw-moss-deep)] transition-colors"
            >
              Call to schedule
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="relative min-h-[220px] md:min-h-[280px] h-full bg-[var(--pnw-stone)] border border-[var(--pnw-border)] overflow-hidden">
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
