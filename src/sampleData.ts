export const data = [
  {
    id: 1,
    name: {
      first: 'Isahella',
      last: 'Malling',
    },
    email: 'imalling0@wikimedia.org',
    last_access: {
      ip_address: '215.92.40.52',
      ip_address_v6: 'f71d:3b86:a504:dfd2:cca:b9a8:3c59:15d5',
    },
    locale: {
      country: 'PL',
      currency: 'Zloty',
      timezone: 'Europe/Warsaw',
    },
    company: 'Brekke-Bogisich',
    profile_color: '#4747ef',
    username: 'imalling0',
  },
  {
    id: 2,
    name: {
      first: 'Othelia',
      last: 'Karchewski',
    },
    email: 'okarchewski1@cam.ac.uk',
    last_access: {
      ip_address: '180.139.251.0',
      ip_address_v6: '3b7e:1952:93ed:1f01:cfc9:63d2:40ec:284',
    },
    locale: {
      country: 'TH',
      currency: 'Baht',
      timezone: 'Asia/Bangkok',
    },
    company: 'Gaylord, Adams and Nolan',
    profile_color: '#8e8761',
    username: 'okarchewski1',
  },
];

export type SampleDataType = typeof data;
