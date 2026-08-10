export const JsonLd = ({ data }: { data: Record<string, unknown>; key?: string }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
