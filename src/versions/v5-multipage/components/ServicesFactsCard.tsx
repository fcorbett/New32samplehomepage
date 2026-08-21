import { officeHours } from "../../../content/siteFacts";
import { CallCta } from "./CallCta";

export function ServicesFactsCard() {
  return (
    <aside
      className="border border-[var(--pnw-border)] bg-[var(--pnw-white)] p-6"
      aria-labelledby="services-facts-heading"
    >
      <h2
        id="services-facts-heading"
        className="font-display text-[var(--pnw-ink)] text-xl mb-5"
      >
        Ready to get started?
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[var(--pnw-moss)] uppercase mb-2">
            Call
          </p>
          <CallCta variant="outline" />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-[var(--pnw-moss)] uppercase mb-2">
            Hours
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--pnw-ink-soft)] leading-relaxed">
            {officeHours.map(({ day, hours }) => (
              <li key={day} className="flex justify-between gap-3">
                <span className="font-medium text-[var(--pnw-ink)]">{day}</span>
                <span className="text-right">{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
