import { Link } from "react-router";
import { phone, officeHours } from "../../../content/siteFacts";
import { pages } from "../content/nav";
import { useVersionPath } from "../hooks/useVersionPath";

const buttonClassName =
  "inline-flex items-center justify-center w-full px-5 py-2.5 min-h-[44px] border border-[var(--pnw-moss)] text-[var(--pnw-moss)] text-sm font-semibold hover:bg-[var(--pnw-moss)] hover:text-[var(--pnw-white)] transition-colors text-center";

export function ServicesFactsCard() {
  const contactTo = useVersionPath(pages.contact.path);

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
          <Link to={contactTo} className={buttonClassName}>
            Schedule a consultation
          </Link>
        </div>

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
      </div>
    </aside>
  );
}
