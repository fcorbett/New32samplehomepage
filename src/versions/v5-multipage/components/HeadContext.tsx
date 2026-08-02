import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  canonicalUrl,
} from "../content/schema";

export type HeadState = {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  ogImageAlt: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogType: string;
  ogSiteName: string;
  ogLocale: string;
  twitterCard: string;
};

export function defaultHeadState(pathname = "/"): HeadState {
  const canonical = canonicalUrl(pathname);
  return {
    title: SITE_NAME,
    description: "",
    canonical,
    ogTitle: SITE_NAME,
    ogDescription: "",
    ogUrl: canonical,
    ogImage: OG_IMAGE_URL,
    ogImageAlt: OG_IMAGE_ALT,
    ogImageWidth: OG_IMAGE_WIDTH,
    ogImageHeight: OG_IMAGE_HEIGHT,
    ogType: "website",
    ogSiteName: SITE_NAME,
    ogLocale: "en_US",
    twitterCard: "summary_large_image",
  };
}

type HeadContextValue = {
  head: HeadState;
  setHead: (partial: Partial<HeadState>) => void;
};

const HeadContext = createContext<HeadContextValue | null>(null);

/** Mutable bag used during SSR; also drives client updates via PageMeta. */
export function createHeadBag(initial?: HeadState): HeadState {
  return initial ?? defaultHeadState();
}

export function HeadProvider({
  head,
  children,
}: {
  head: HeadState;
  children: ReactNode;
}) {
  const value = useMemo<HeadContextValue>(
    () => ({
      head,
      setHead(partial) {
        Object.assign(head, partial);
      },
    }),
    [head],
  );

  return <HeadContext.Provider value={value}>{children}</HeadContext.Provider>;
}

export function useHead(): HeadContextValue {
  const ctx = useContext(HeadContext);
  if (!ctx) {
    throw new Error("useHead must be used within HeadProvider");
  }
  return ctx;
}

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Apply head state to the live document (client navigations). */
export function applyHeadToDocument(head: HeadState) {
  document.title = head.title;
  upsertMeta("name", "description", head.description);
  if (head.robots) {
    upsertMeta("name", "robots", head.robots);
  } else {
    document.head.querySelector('meta[name="robots"]')?.remove();
  }
  upsertLink("canonical", head.canonical);

  upsertMeta("property", "og:type", head.ogType);
  upsertMeta("property", "og:site_name", head.ogSiteName);
  upsertMeta("property", "og:locale", head.ogLocale);
  upsertMeta("property", "og:title", head.ogTitle);
  upsertMeta("property", "og:description", head.ogDescription);
  upsertMeta("property", "og:url", head.ogUrl);
  upsertMeta("property", "og:image", head.ogImage);
  upsertMeta("property", "og:image:alt", head.ogImageAlt);
  upsertMeta("property", "og:image:width", String(head.ogImageWidth));
  upsertMeta("property", "og:image:height", String(head.ogImageHeight));

  upsertMeta("name", "twitter:card", head.twitterCard);
  upsertMeta("name", "twitter:title", head.ogTitle);
  upsertMeta("name", "twitter:description", head.ogDescription);
  upsertMeta("name", "twitter:image", head.ogImage);
  upsertMeta("name", "twitter:image:alt", head.ogImageAlt);
}

/** Serialize head tags for prerender injection into <head>. */
export function serializeHeadTags(head: HeadState): string {
  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");

  const lines = [
    `<title>${escape(head.title)}</title>`,
    `<meta name="description" content="${escape(head.description)}" />`,
  ];
  if (head.robots) {
    lines.push(`<meta name="robots" content="${escape(head.robots)}" />`);
  }
  lines.push(
    `<link rel="canonical" href="${escape(head.canonical)}" />`,
    `<meta property="og:type" content="${escape(head.ogType)}" />`,
    `<meta property="og:site_name" content="${escape(head.ogSiteName)}" />`,
    `<meta property="og:locale" content="${escape(head.ogLocale)}" />`,
    `<meta property="og:title" content="${escape(head.ogTitle)}" />`,
    `<meta property="og:description" content="${escape(head.ogDescription)}" />`,
    `<meta property="og:url" content="${escape(head.ogUrl)}" />`,
    `<meta property="og:image" content="${escape(head.ogImage)}" />`,
    `<meta property="og:image:alt" content="${escape(head.ogImageAlt)}" />`,
    `<meta property="og:image:width" content="${head.ogImageWidth}" />`,
    `<meta property="og:image:height" content="${head.ogImageHeight}" />`,
    `<meta name="twitter:card" content="${escape(head.twitterCard)}" />`,
    `<meta name="twitter:title" content="${escape(head.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escape(head.ogDescription)}" />`,
    `<meta name="twitter:image" content="${escape(head.ogImage)}" />`,
    `<meta name="twitter:image:alt" content="${escape(head.ogImageAlt)}" />`,
  );
  return lines.join("\n    ");
}
