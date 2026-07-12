import { seattleMetYears } from "../../content/siteFacts";

const badgeSrc = `${import.meta.env.BASE_URL}awards/seattle-met-top-dentist-2026.png`;

export function SeattleMetAwards() {
  return (
    <section
      className="w-full px-6 md:px-16 py-10 md:py-12 bg-[var(--brand-cream)] border-t border-[var(--brand-border)]"
      aria-label="Seattle Met Top Dentist awards"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        <img
          src={badgeSrc}
          alt="Seattle Met Top Dentist 2026"
          className="h-14 md:h-16 w-auto object-contain"
        />
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {seattleMetYears.map((year) => (
            <span
              key={year}
              className="px-3 py-1 text-xs md:text-sm font-medium tracking-wide text-[var(--brand-brown)] border border-[var(--brand-border)] rounded-sm bg-white"
            >
              {year}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
