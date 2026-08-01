import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead: ReactNode;
};

/** No ScrollReveal — H1/LCP text must paint immediately on interior pages. */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <div className="w-full bg-[var(--pnw-white)] border-b border-[var(--pnw-border)] px-6 md:px-16 py-12 md:py-16">
      <div className="pnw-container max-w-2xl">
        {eyebrow ? (
          <p className="font-semibold text-[var(--pnw-moss)] text-sm tracking-wide mb-4">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display font-normal text-[var(--pnw-ink)] text-4xl md:text-5xl leading-[1.1] mb-5">
          {title}
        </h1>
        <p className="text-[var(--pnw-ink-soft)] text-base md:text-lg leading-relaxed">
          {lead}
        </p>
      </div>
    </div>
  );
}
