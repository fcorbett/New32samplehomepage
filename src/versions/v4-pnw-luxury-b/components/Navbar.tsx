import { useState } from "react";
import { Menu, X } from "lucide-react";
import imgLogo from "../../../imports/Variation1EditorialSplitV2/076566151a847a70ed0da5d0025b82e9e671fbba.png";

const LINKS = [
  { label: "about", href: "#about" },
  { label: "our office", href: "#office" },
  { label: "gallery", href: "#gallery" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-[var(--pnwb-white)]/90 backdrop-blur-md">
      <div className="pnwb-container flex items-center justify-between px-6 md:px-16 py-5">
        <a href="#" className="w-28 md:w-36 h-10 md:h-[48px] relative shrink-0">
          <img src={imgLogo} alt="new32 logo" className="w-full h-full object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--pnwb-ink-soft)] text-sm font-medium hover:text-[var(--pnwb-sage-deep)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[var(--pnwb-ink)]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--pnwb-border)] bg-[var(--pnwb-white)] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[var(--pnwb-ink-soft)] text-sm font-medium hover:text-[var(--pnwb-sage-deep)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
