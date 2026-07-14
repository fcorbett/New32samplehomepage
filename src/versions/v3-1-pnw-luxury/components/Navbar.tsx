import { Menu, X } from "lucide-react";
import { useState } from "react";
import imgLogo from "../../../imports/Variation1EditorialSplitV2/076566151a847a70ed0da5d0025b82e9e671fbba.png";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#office", label: "Our office" },
  { href: "#fees", label: "Fees & insurance" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Family services" },
  { href: "#info", label: "Patient info" },
  { href: "#contact", label: "Contact" },
] as const;

function Links() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-7 items-start md:items-center font-medium text-[var(--pnw-moss)] text-sm tracking-wide">
      {NAV_LINKS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="whitespace-nowrap hover:text-[var(--pnw-clay)] transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[var(--pnw-white)] border-b border-[var(--pnw-border)] px-6 md:px-16">
      <div className="pnw-container flex items-center justify-between py-6 md:py-7">
        <div className="w-28 md:w-36 h-10 md:h-[52px] relative shrink-0">
          <img
            src={imgLogo}
            alt="new32 logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="hidden md:block">
          <Links />
        </div>

        <button
          className="md:hidden text-[var(--pnw-moss)] p-2"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pb-6 bg-[var(--pnw-white)] border-t border-[var(--pnw-border)]">
          <Links />
        </div>
      )}
    </nav>
  );
}
