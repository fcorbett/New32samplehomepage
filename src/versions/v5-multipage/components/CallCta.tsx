import { phone } from "../../../content/siteFacts";

type CallCtaVariant = "filled" | "onDark" | "outline" | "mobileOnly";

type CallCtaProps = {
  variant?: CallCtaVariant;
  className?: string;
};

/**
 * Phone CTA that stays on tel: everywhere.
 * Below md: button chrome. At md+: text link (or hidden for mobileOnly).
 */
export function CallCta({ variant = "filled", className = "" }: CallCtaProps) {
  if (variant === "mobileOnly") {
    return (
      <a
        href={phone.tel}
        className={`inline-block px-6 py-3 bg-[var(--pnw-moss)] text-[var(--pnw-white)] text-sm font-semibold uppercase tracking-wide hover:bg-[var(--pnw-moss-deep)] transition-colors w-fit md:hidden ${className}`}
      >
        Call to schedule
      </a>
    );
  }

  if (variant === "onDark") {
    return (
      <a
        href={phone.tel}
        className={`inline-block w-fit px-6 py-3 bg-[var(--pnw-white)] text-[var(--pnw-moss-deep)] text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity md:bg-transparent md:px-0 md:py-0 md:normal-case md:tracking-normal md:font-normal md:text-[var(--pnw-white)] md:underline md:hover:opacity-70 ${className}`}
      >
        <span className="md:hidden">{phone.display}</span>
        <span className="hidden md:inline">Call {phone.display}</span>
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={phone.tel}
        className={`inline-flex items-center justify-center w-full px-5 py-2.5 min-h-[44px] border border-[var(--pnw-moss)] text-[var(--pnw-moss)] text-sm font-semibold hover:bg-[var(--pnw-moss)] hover:text-[var(--pnw-white)] transition-colors text-center md:inline md:w-auto md:min-h-0 md:border-0 md:px-0 md:py-0 md:font-normal md:underline md:hover:bg-transparent md:hover:text-[var(--pnw-clay)] ${className}`}
      >
        {phone.display}
      </a>
    );
  }

  // filled
  return (
    <a
      href={phone.tel}
      className={`inline-block px-6 py-3 bg-[var(--pnw-moss)] text-[var(--pnw-white)] text-sm font-semibold uppercase tracking-wide hover:bg-[var(--pnw-moss-deep)] transition-colors md:bg-transparent md:px-0 md:py-0 md:normal-case md:tracking-normal md:font-normal md:text-[var(--pnw-moss)] md:underline md:hover:bg-transparent md:hover:text-[var(--pnw-clay)] ${className}`}
    >
      <span className="md:hidden">Call to schedule</span>
      <span className="hidden md:inline">Call {phone.display}</span>
    </a>
  );
}
