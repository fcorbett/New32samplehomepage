import { seattleMetYears } from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

const badgeSrc = `${import.meta.env.BASE_URL}awards/seattle-met-top-dentist-2026.png`;

export function Awards() {
  return (
    <section
      className="w-full px-6 md:px-16 py-14 md:py-16 bg-[var(--pnw-stone-deep)] border-y border-[var(--pnw-border)]"
      aria-label="Seattle Met Top Dentist awards"
    >
      <div className="pnw-container flex flex-col items-center gap-8 md:gap-10">
        <ScrollReveal>
          <img
            src={badgeSrc}
            alt="Seattle Met Top Dentist 2026"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="w-full">
          <p className="text-center font-display italic text-[var(--pnw-ink-soft)] text-lg md:text-xl mb-6">
            Seattle Met Top Dentist, every year since 2015
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
            {seattleMetYears.map((year, i) => (
              <span key={year} className="flex items-center gap-x-5">
                <span className="font-display text-[var(--pnw-ink)] text-lg md:text-xl tracking-wide">
                  {year}
                </span>
                {i < seattleMetYears.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="w-1 h-1 rounded-full bg-[var(--pnw-clay)]"
                  />
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
