import { seattleMetYears } from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

const badgeSrc = `${import.meta.env.BASE_URL}awards/seattle-met-top-dentist-2026.png`;

export function Awards() {
  return (
    <section
      className="w-full px-6 md:px-16 py-14 md:py-20 bg-[var(--pnwb-stone-deep)]"
      aria-label="Seattle Met Top Dentist awards"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-10">
        <ScrollReveal>
          <img
            src={badgeSrc}
            alt="Seattle Met Top Dentist 2026"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="w-full text-center">
          <p className="font-display italic text-[var(--pnwb-ink-soft)] text-lg md:text-xl mb-4">
            Seattle Met Top Dentist, every year since 2015
          </p>
          <p className="text-[var(--pnwb-ink)] text-sm md:text-base leading-relaxed">
            {seattleMetYears.map((year, i) => (
              <span key={year}>
                <span
                  className={
                    year === seattleMetYears[seattleMetYears.length - 1]
                      ? "font-semibold text-[var(--pnwb-sage-deep)]"
                      : ""
                  }
                >
                  {year}
                </span>
                {i < seattleMetYears.length - 1 && (
                  <span className="text-[var(--pnwb-warmgray)] mx-1">&middot;</span>
                )}
              </span>
            ))}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
