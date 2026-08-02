type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Injects JSON-LD for SEO/AEO (included in prerendered HTML). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
