import { Link } from "react-router";
import { JsonLd } from "./JsonLd";
import { canonicalUrl } from "../content/schema";

export type Crumb = {
  name: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.to
        ? {
            item: item.to.startsWith("http")
              ? item.to
              : canonicalUrl(item.to),
          }
        : {}),
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full px-6 md:px-16 pt-6 text-sm text-[var(--pnw-ink-soft)]"
    >
      <JsonLd data={schema} />
      <ol className="pnw-container flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.to ? (
              <Link
                to={item.to}
                className="pnw-text-link underline hover:text-[var(--pnw-moss)] transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-[var(--pnw-ink)]">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
