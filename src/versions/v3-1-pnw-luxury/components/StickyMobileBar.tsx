import { MapPin, Phone } from "lucide-react";
import { location, phone } from "../../../content/siteFacts";

const actionClassName =
  "flex flex-1 items-center justify-center gap-2 py-4 text-[var(--pnw-white)] font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity";

export function StickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--pnw-moss)] shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <div className="flex">
        <a href={phone.tel} className={`${actionClassName} border-r border-white/20`}>
          <Phone size={20} aria-hidden="true" />
          Call
        </a>
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={actionClassName}
        >
          <MapPin size={20} aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
