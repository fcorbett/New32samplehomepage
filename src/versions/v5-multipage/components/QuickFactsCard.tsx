import { phone, officeHours } from "../../../content/siteFacts";
import { patientInfoPage } from "../content/pages";

const buttonClassName =
  "inline-flex items-center justify-center w-full px-5 py-2.5 min-h-[44px] border border-[var(--pnw-moss)] text-[var(--pnw-moss)] text-sm font-semibold hover:bg-[var(--pnw-moss)] hover:text-[var(--pnw-white)] transition-colors text-center";

export function QuickFactsCard() {
  return (
    <aside
      className="border border-[var(--pnw-border)] bg-[var(--pnw-white)] p-6"
      aria-labelledby="quick-facts-heading"
    >
      <h2
        id="quick-facts-heading"
        className="font-display text-[var(--pnw-ink)] text-xl mb-5"
      >
        Quick facts
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[var(--pnw-moss)] uppercase mb-2">
            Call
          </p>
          <a href={phone.tel} className={buttonClassName}>
            {phone.display}
          </a>
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

        <div>
          <p className="text-xs font-semibold tracking-wide text-[var(--pnw-moss)] uppercase mb-2">
            Insurance
          </p>
          <p className="text-sm text-[var(--pnw-ink-soft)] leading-relaxed">
            {patientInfoPage.insuranceNote}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-[var(--pnw-moss)] uppercase mb-2">
            Bill pay
          </p>
          <a
            href={patientInfoPage.billPayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName}
          >
            {patientInfoPage.billPayCtaLabel}
          </a>
        </div>
      </div>
    </aside>
  );
}
