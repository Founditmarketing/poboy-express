import { JsonLd } from './JsonLd';
import { SITE_URL, LOGO_URL, SOCIAL_PROFILES, LOCATIONS, OPENING_HOURS } from '../data/business';

const ORG_ID = `${SITE_URL}/#organization`;

export const OrganizationSchema = () => (
  <JsonLd
    data={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Poboy Express',
      url: SITE_URL,
      logo: LOGO_URL,
      sameAs: SOCIAL_PROFILES,
    }}
  />
);

export const LocalBusinessSchema = () => (
  <>
    {LOCATIONS.map((loc) => (
      <JsonLd
        key={loc.id}
        data={{
          '@context': 'https://schema.org',
          '@type': 'Restaurant',
          '@id': `${SITE_URL}/#${loc.id}`,
          name: loc.name,
          image: LOGO_URL,
          url: `${SITE_URL}/contact`,
          telephone: loc.telephone,
          servesCuisine: 'Cajun',
          parentOrganization: { '@id': ORG_ID },
          address: {
            '@type': 'PostalAddress',
            streetAddress: loc.streetAddress,
            addressLocality: loc.addressLocality,
            addressRegion: loc.addressRegion,
            postalCode: loc.postalCode,
            addressCountry: 'US',
          },
          openingHoursSpecification: OPENING_HOURS.map((hours) => ({
            '@type': 'OpeningHoursSpecification',
            ...hours,
          })),
        }}
      />
    ))}
  </>
);

interface ReviewInput {
  name: string;
  text: string;
  rating: number;
}

export const ReviewsSchema = ({ reviews }: { reviews: ReviewInput[] }) => {
  const ratingValue = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Poboy Express',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue,
          reviewCount: reviews.length,
        },
        review: reviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.text,
        })),
      }}
    />
  );
};
