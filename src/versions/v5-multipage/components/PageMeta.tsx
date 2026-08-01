import { useEffect } from "react";
import { useLocation } from "react-router";
import { canonicalUrl } from "../content/schema";

type PageMetaProps = {
  title: string;
  description: string;
};

/**
 * Client-side document head updates.
 * Production prerender/SSR would emit these in initial HTML for crawlers.
 */
export function PageMeta({ title, description }: PageMetaProps) {
  const { pathname } = useLocation();
  const canonical = canonicalUrl(pathname);

  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [title, description, canonical]);

  return null;
}
