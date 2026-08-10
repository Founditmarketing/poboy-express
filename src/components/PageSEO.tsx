const SITE_NAME = 'Poboy Express';
const SITE_URL = 'https://www.po-boyexpress.com';
const DEFAULT_IMAGE = `${SITE_URL}/poboyexpresslogo.png`;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export const PageSEO = ({ title, description, path, image = DEFAULT_IMAGE }: PageSEOProps) => {
  const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
    </>
  );
};
