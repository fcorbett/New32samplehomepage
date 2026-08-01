import { phone } from "../../../content/siteFacts";

export function CallBand() {
  return (
    <div className="w-full bg-[var(--pnw-moss)] px-6 md:px-16 py-10 md:py-12" data-pnw-on-dark>
      <div className="pnw-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-display text-[var(--pnw-white)] text-2xl md:text-3xl leading-snug">
          Call to schedule
        </p>
        <a
          href={phone.tel}
          className="inline-block px-6 py-3 bg-[var(--pnw-white)] text-[var(--pnw-moss-deep)] text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity w-fit"
        >
          {phone.display}
        </a>
      </div>
    </div>
  );
}
