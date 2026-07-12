import { Phone, MapPin } from "lucide-react";
import { phone, location } from "../../../content/siteFacts";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--pnwb-sage-deep)] text-[var(--pnwb-white)]">
      <div className="grid grid-cols-2 divide-x divide-white/20">
        <a
          href={phone.tel}
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold hover:bg-[var(--pnwb-ink)] transition-colors"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold hover:bg-[var(--pnwb-ink)] transition-colors"
        >
          <MapPin size={16} />
          Directions
        </a>
      </div>
    </div>
  );
}
