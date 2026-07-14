import { lastUpdated, reviews } from "../../../content/siteFacts";
import { ScrollReveal } from "./ScrollReveal";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.825-.069-1.636-.212-2.415H12.24v4.542h6.545c-.27 1.488-1.114 2.766-2.35 3.597v2.964h3.811c2.23-2.053 3.504-5.077 3.504-8.688z"/>
    <path fill="#34A853" d="M12.24 24c3.24 0 5.954-1.077 7.935-2.915l-3.81-2.964c-1.076.724-2.454 1.154-4.125 1.154-3.172 0-5.856-2.14-6.814-5.022H1.492v3.06C3.472 21.238 7.558 24 12.24 24z"/>
    <path fill="#FBBC05" d="M5.426 14.253c-.244-.725-.386-1.503-.386-2.302s.142-1.577.386-2.302V6.59H1.492C.737 8.083.315 9.77.315 11.95c0 2.18.422 3.868 1.177 5.36l3.934-3.057z"/>
    <path fill="#EA4335" d="M12.24 4.747c1.764 0 3.344.606 4.59 1.796l3.447-3.447C18.188 1.076 15.474 0 12.24 0 7.558 0 3.472 2.76 1.492 6.59l3.934 3.058c.958-2.882 3.642-5.023 6.814-5.023z"/>
  </svg>
);

function Stars() {
  return (
    <div className="flex gap-[2px]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="13" height="13" fill="var(--pnw-clay)">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function RatingCard() {
  const { google } = reviews;

  return (
    <a
      href={google.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Google rating ${google.rating} out of 5, ${google.count} reviews`}
      className="flex flex-col gap-3 p-6 border border-[var(--pnw-border)] bg-[var(--pnw-white)] hover:border-[var(--pnw-moss)]/50 transition-colors w-full group"
    >
      <div className="flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
        <GoogleIcon />
        <span className="text-sm text-[var(--pnw-ink-soft)] font-medium">
          Google reviews
        </span>
      </div>
      <div className="flex items-end gap-3">
        <span className="text-3xl font-display text-[var(--pnw-ink)] leading-none">
          {google.rating.toFixed(1)}
        </span>
        <div className="pb-1">
          <Stars />
        </div>
      </div>
      <span className="text-sm text-[var(--pnw-ink-soft)] font-medium">
        {google.count} reviews
      </span>
      <span className="text-xs text-[var(--pnw-ink-soft)]/70 tracking-wide">
        Ratings as of {lastUpdated}
      </span>
    </a>
  );
}

export function Intro() {
  return (
    <div className="w-full px-6 md:px-16 py-16 md:py-24 lg:py-28">
      <div className="pnw-container">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-start">
            <div>
              <p className="font-semibold text-[var(--pnw-moss)] text-sm tracking-wide mb-6">
                Welcome to new32
              </p>
              <div className="font-display text-[var(--pnw-ink)] text-2xl md:text-3xl leading-[1.4] space-y-6">
                <p>
                  new32 was built to feel less like a dental office and more
                  like a trusted healthcare studio — warm, unhurried, and
                  genuinely yours.
                </p>
                <p>
                  We believe great dentistry starts with a real relationship:
                  getting to know you and your family, practicing thoughtful
                  prevention, and delivering care and outcomes you can feel
                  good about — right here in Seattle&apos;s University
                  Village.
                </p>
              </div>
            </div>

            <RatingCard />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
