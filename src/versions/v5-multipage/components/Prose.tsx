import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`text-[var(--pnw-ink-soft)] text-base md:text-lg leading-relaxed space-y-5 ${className}`}
    >
      {children}
    </div>
  );
}
