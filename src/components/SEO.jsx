import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://airportautoelectrics.ie';
const DEFAULT_IMAGE = `${SITE_URL}/social-share.jpg`;

function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  jsonLd,
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Airport Auto Electrics" />
      <meta property="og:locale" content="en_IE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;
export { SITE_URL };
