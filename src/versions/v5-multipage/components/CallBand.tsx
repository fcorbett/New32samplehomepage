import { CallCta } from "./CallCta";

export function CallBand() {
  return (
    <div className="w-full bg-[var(--pnw-moss)] px-6 md:px-16 py-10 md:py-12" data-pnw-on-dark>
      <div className="pnw-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-display text-[var(--pnw-white)] text-2xl md:text-3xl leading-snug">
          Call to schedule
        </p>
        <CallCta variant="onDark" />
      </div>
    </div>
  );
}
