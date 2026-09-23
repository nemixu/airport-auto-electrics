import { SITE_URL } from './components/SEO';

export const BUSINESS_NAME = 'Airport Auto Electrics';
export const BUSINESS_PHONE = '+353872309097';
export const BUSINESS_PHONE_DISPLAY = '087 230 90 97';
export const BUSINESS_EMAIL = 'airportautoelec@gmail.com';
export const BUSINESS_ADDRESS = {
  streetAddress: 'Unit 17, Collinstown Cross Industrial Estate, Old Airport Rd, Cloghran',
  addressLocality: 'Dublin',
  addressRegion: 'Dublin',
  postalCode: '',
  addressCountry: 'IE',
};
export const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps?cid=16022040228269042277';

export const OPENING_HOURS_SPECIFICATION = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
];

// Base LocalBusiness/AutomotiveBusiness schema, shared across pages so Google
// can associate every page with the same NAP (name/address/phone) entity.
export const localBusinessSchema = (path = '/') => ({
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  image: `${SITE_URL}/social-share.jpg`,
  url: `${SITE_URL}${path}`,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS_ADDRESS,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.416948977121336,
    longitude: -6.240260384007048,
  },
  hasMap: GOOGLE_BUSINESS_URL,
  openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
  areaServed: [
    'Dublin Airport',
    'Cloghran',
    'Swords',
    'Santry',
    'North Dublin',
    'Dublin',
  ],
});

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
});

export const serviceSchema = ({ name, description, path, image }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name: `${name} | ${BUSINESS_NAME}`,
  description,
  image: image ? `${SITE_URL}${image}` : undefined,
  url: `${SITE_URL}${path}`,
  provider: {
    '@type': 'AutomotiveBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
  },
  areaServed: [
    'Dublin Airport',
    'Cloghran',
    'Swords',
    'Santry',
    'North Dublin',
    'Dublin',
  ],
});
