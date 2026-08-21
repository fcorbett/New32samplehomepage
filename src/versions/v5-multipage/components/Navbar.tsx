import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { NavLink, Link } from "react-router";
import { NAV_ITEMS, type NavPage } from "../content/nav";
import { useVersionPath } from "../hooks/useVersionPath";

const logoSrc = `${import.meta.env.BASE_URL}new32-seattle-dentistry-logo.svg`;

const linkClassName =
  "pnw-nav-link whitespace-nowrap hover:text-[var(--pnw-clay)] transition-colors";
const activeClassName = "text-[var(--pnw-clay)]";

function NavItemLink({
  item,
  onNavigate,
}: {
  item: NavPage;
  onNavigate?: () => void;
}) {
  const to = useVersionPath(item.path);
  return (
    <NavLink
      to={to}
      end={item.id !== "about"}
      onClick={onNavigate}
      className={({ isActive }) =>
        `${linkClassName} ${isActive ? activeClassName : ""}`
      }
    >
      {item.label}
    </NavLink>
  );
}

function Links({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-7 items-start md:items-center font-medium text-[var(--pnw-moss)] text-sm tracking-wide">
      {NAV_ITEMS.map((item) => (
        <NavItemLink key={item.id} item={item} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeTo = useVersionPath();
  const menuId = useId();

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav className="relative w-full bg-[var(--pnw-white)] border-b border-[var(--pnw-border)] px-6 md:px-16">
      <div className="pnw-container flex items-center justify-between py-6 md:py-7">
        <Link
          to={homeTo}
          className="w-40 md:w-[280px] h-14 md:h-[76px] relative shrink-0"
          aria-label="new32 home"
        >
          <img
            src={logoSrc}
            alt="new32 Seattle dentistry logo"
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="hidden md:block">
          <Links />
        </div>

        <button
          type="button"
          className="md:hidden text-[var(--pnw-moss)] inline-flex items-center justify-center min-h-[44px] min-w-[44px]"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls={menuId}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id={menuId}
        className={
          mobileMenuOpen
            ? "md:hidden pb-6 bg-[var(--pnw-white)] border-t border-[var(--pnw-border)] pt-4"
            : "hidden"
        }
        hidden={!mobileMenuOpen}
      >
        <Links onNavigate={() => setMobileMenuOpen(false)} />
      </div>
    </nav>
  );
}
