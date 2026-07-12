import type { ReactNode } from "react";
import { lastUpdated, reviews } from "../../content/siteFacts";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
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
        <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="#F5C518">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  href,
  ariaLabel,
  icon,
  metric,
  stars,
  subtext,
}: {
  href: string;
  ariaLabel: string;
  icon: ReactNode;
  metric: string;
  stars?: boolean;
  subtext: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex flex-col p-5 md:p-6 border border-[var(--brand-border)] rounded-sm bg-white hover:border-[var(--brand-green)]/40 hover:shadow-sm transition-all min-w-0 max-w-sm w-full mx-auto group"
    >
      <div className="h-6 mb-4 flex items-center justify-start opacity-90 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <div className="flex items-end gap-3 mb-1">
        <span className="text-3xl font-light tracking-tight text-[var(--brand-ink)] leading-none">
          {metric}
        </span>
        {stars && (
          <div className="pb-1">
            <Stars />
          </div>
        )}
      </div>
      <span className="text-sm text-[var(--brand-brown)] font-medium tracking-wide">
        {subtext}
      </span>
    </a>
  );
}

export function TrustStrip() {
  const { google } = reviews;

  return (
    <section
      className="w-full px-6 md:px-16 py-10 md:py-12 bg-[var(--brand-cream)] border-y border-[var(--brand-border)]"
      aria-label="Patient reviews"
    >
      <div className="flex justify-center">
        <ReviewCard
          href={google.url}
          ariaLabel={`Google rating ${google.rating} out of 5, ${google.count} reviews`}
          icon={<GoogleIcon />}
          metric={google.rating.toFixed(1)}
          stars={true}
          subtext={`${google.count} reviews`}
        />
      </div>

      <p className="text-center text-xs text-[var(--brand-brown)]/60 mt-8 font-medium">
        RATINGS AS OF {lastUpdated.toUpperCase()}
      </p>
    </section>
  );
}
