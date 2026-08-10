export const SITE_URL = 'https://www.po-boyexpress.com';
export const LOGO_URL = `${SITE_URL}/poboyexpresslogo.png`;

export const SOCIAL_PROFILES = [
  'https://www.facebook.com/Poboyexpress2/',
  'https://www.instagram.com/poboy_express_cenla/',
];

// Mon-Sat 10am-8pm, closed Sunday — see Footer/ContactPage.
export const OPENING_HOURS = [
  {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
  },
];

export const LOCATIONS = [
  {
    id: 'alexandria',
    name: 'Poboy Express - Alexandria',
    streetAddress: '1305 Windsor Pl',
    addressLocality: 'Alexandria',
    addressRegion: 'LA',
    postalCode: '71303',
    telephone: '+13187046424',
  },
  {
    id: 'pineville',
    name: 'Poboy Express - Pineville',
    streetAddress: '1323 Military Hwy',
    addressLocality: 'Pineville',
    addressRegion: 'LA',
    postalCode: '71360',
    telephone: '+13184420818',
  },
];
