import { location, phone, reviews } from "../../../content/siteFacts";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.825-.069-1.636-.212-2.415H12.24v4.542h6.545c-.27 1.488-1.114 2.766-2.35 3.597v2.964h3.811c2.23-2.053 3.504-5.077 3.504-8.688z"/>
    <path fill="#34A853" d="M12.24 24c3.24 0 5.954-1.077 7.935-2.915l-3.81-2.964c-1.076.724-2.454 1.154-4.125 1.154-3.172 0-5.856-2.14-6.814-5.022H1.492v3.06C3.472 21.238 7.558 24 12.24 24z"/>
    <path fill="#FBBC05" d="M5.426 14.253c-.244-.725-.386-1.503-.386-2.302s.142-1.577.386-2.302V6.59H1.492C.737 8.083.315 9.77.315 11.95c0 2.18.422 3.868 1.177 5.36l3.934-3.057z"/>
    <path fill="#EA4335" d="M12.24 4.747c1.764 0 3.344.606 4.59 1.796l3.447-3.447C18.188 1.076 15.474 0 12.24 0 7.558 0 3.472 2.76 1.492 6.59l3.934 3.058c.958-2.882 3.642-5.023 6.814-5.023z"/>
  </svg>
);

export function Footer() {
  const { google } = reviews;

  return (
    <footer
      id="contact"
      className="w-full bg-[var(--pnwb-ink)] text-[var(--pnwb-white)] px-6 md:px-16 py-10 md:py-12 pb-24 md:pb-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start w-full gap-8 md:gap-4 text-left text-sm">
        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-semibold tracking-wide opacity-70 text-xs">
            Address
          </p>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            {location.addressDisplay}
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-semibold tracking-wide opacity-70 text-xs">
            Reviews
          </p>
          <a
            href={google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity w-fit"
            aria-label="View our Google reviews"
          >
            <GoogleIcon />
            <span className="underline">Google reviews</span>
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-semibold tracking-wide opacity-70 text-xs">
            Phone
          </p>
          <a
            href={phone.tel}
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            {phone.display}
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-semibold tracking-wide opacity-70 text-xs">
            new32
          </p>
          <a
            href="#about"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            about
          </a>
        </div>
      </div>
    </footer>
  );
}
