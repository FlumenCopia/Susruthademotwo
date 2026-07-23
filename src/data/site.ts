export const brand = {
  legalName: 'Susrutha Institute of Ayurvedic Sciences (Research) and Panchakarma Hospital',
  commonName: 'Susrutha Ayurveda',
  shortName: 'Susrutha',
  positioning:
    'Authentic Kerala Ayurveda, backed by research, lineage and modern hospital infrastructure.',
  legacyFraming:
    'A family Ayurveda lineage since 1970, and Susrutha as an institution since 1986 — nearly 55 years of family practice and about 40 years as Susrutha.',
  bedStrength: '40-bed hospital',
  vision:
    'Deliver high-quality medicines and affordable treatment for everyone, realizing the dream of a healthier tomorrow.',
  mission:
    'Grow Susrutha into a global Ayurvedic brand and spread authentic Kerala health practices around the world.',
  contact: {
    mobile: '+91 96566 56736',
    mobileTel: '+919656656736',
    landline: '0471-2291027',
    landlineTel: '+914712291027',
    emergency: ['+91 9656656736', '+91 9446583803', '+91 9447892399'],
    email: 'info@susruthaayurveda.com',
    facebook: 'https://www.facebook.com/susruthaayurvedatvm',
    instagram: 'https://www.instagram.com/susruthaayurvedatvm/',
    googleReview: 'https://g.page/r/CZQZsDKfvtExEB0/review',
    whatsapp: 'https://wa.me/919656656736',
  },
  hours: {
    hospital: '24×7',
    op: '9:00 AM–7:00 PM',
    customerCare: '8:00 AM–7:00 PM',
    pharmacy: '8:00 AM–7:00 PM',
    treatment: '8:00 AM–6:00 PM',
  },
};

export const branches = [
  {
    id: 'kattakada',
    name: 'Kattakada Hospital',
    slug: 'kattakada',
    type: 'Main Hospital',
    city: 'Thiruvananthapuram, Kerala',
    address: 'Kattakada (Kattakkada), Thiruvananthapuram, Kerala, India',
    description:
      'Our flagship 40-bed Panchakarma hospital and research institute — full inpatient care, operation theatre, physiotherapy, yoga hall, and dedicated therapy suites.',
    features: [
      '40-bed inpatient hospital',
      'Panchakarma rooms (separate male/female)',
      'Operation Theatre',
      'Physiotherapy Unit',
      'Yoga Hall',
      'Pharmacy & diagnostics access',
    ],
    hours: {
      hospital: '24×7',
      op: '9:00 AM–7:00 PM',
      treatment: '8:00 AM–6:00 PM',
      pharmacy: '8:00 AM–7:00 PM',
    },
    mapQuery: 'Kattakada+Thiruvananthapuram+Kerala',
    image: '/images/hospital-room.jpg',
  },
  {
    id: 'kowdiar',
    name: 'Kowdiar Centre',
    slug: 'kowdiar',
    type: 'OP Outlet',
    city: 'Trivandrum, Kerala',
    address: 'Kowdiar, Thiruvananthapuram, Kerala, India',
    description:
      'Satellite outpatient centre in Trivandrum city, open since June 2022 — convenient consultations with visiting senior physicians and specialist clinics.',
    features: [
      'Outpatient consultations',
      'Senior physician clinics',
      'Specialist OP days',
      'City-centre access',
    ],
    hours: {
      op: 'As per doctor schedule',
      note: 'See doctor availability for specific clinic days',
    },
    mapQuery: 'Kowdiar+Thiruvananthapuram+Kerala',
    image: '/images/herbs-mortar.jpg',
    since: 'June 2022',
  },
] as const;

export const ayurVillage = {
  name: 'Susrutha Ayurveda Gramam',
  slug: 'ayur-village',
  distance: '~20 km from Trivandrum International Airport',
  cottages: 4,
  description:
    'Four traditional Kerala cottages with private treatment rooms — a quiet healing retreat for rejuvenation programmes, international guests, and those seeking privacy beyond the hospital ward.',
  idealFor: [
    'Rejuvenation & Rasayana stays',
    'International patients',
    'Couples and private recovery',
    'Extended therapy programmes',
  ],
  features: [
    'Traditional Kerala architecture',
    'Private treatment rooms',
    'Airport proximity',
    'Calm natural setting',
  ],
  image: '/images/ayur-village.jpg',
};

export const timeline = [
  { year: '1970', event: 'Original clinic founded — family Ayurveda roots begin' },
  { year: '1986', event: 'Susrutha clinic & pharmacy established at Kattakada' },
  { year: '2002', event: 'Registered 30-bedded Panchakarma hospital & institute' },
  { year: '2008', event: 'GMP-certified Ayurvedic Pharma manufacturing' },
  { year: '2010', event: 'Ayurveda Village (Gramam) opened' },
  { year: '2012', event: 'Registered as partnership firm' },
  { year: '2013', event: 'Advanced Ayurveda Nursing School founded' },
  { year: '2015', event: 'Susrutha Medi Tech Lab established' },
  { year: '2016', event: 'Susrutha Charitable Medical Trust launched' },
  { year: '2019', event: 'Susrutha CAN cancer-awareness movement' },
  { year: '2020', event: 'Proctology unit, postnatal care & post-stroke palliative care' },
  { year: '2022', event: 'Life Care Pvt Ltd (Apr); Kowdiar satellite OPD (Jun)' },
];

export const verticals = [
  {
    name: 'Susrutha Ayurveda Pharma',
    detail: 'GMP-certified pharmacy & manufacturing (2008)',
    url: 'https://susruthaayurvedapharma.com/',
    year: '2008',
  },
  {
    name: 'Susrutha Charitable Medical Trust',
    detail: 'Cancer awareness & early detection (2016)',
    url: 'http://susruthacmt.com/',
    year: '2016',
  },
  {
    name: 'Susrutha Medi Tech Lab',
    detail: 'Diagnostics; home sampling within 5 km (2015)',
    year: '2015',
  },
  {
    name: 'Susrutha Advanced Ayurveda Nursing School',
    detail: 'Ayurveda nursing education (2013)',
    year: '2013',
  },
  {
    name: 'Susrutha Life Care Pvt Ltd',
    detail: 'Registered 2022',
    year: '2022',
  },
  {
    name: 'Online & Home Consultation',
    detail: 'Scheduled online consults; home visits for bedridden patients within 30 km',
  },
];

export const facilities = [
  {
    title: 'Patient Rooms',
    detail: 'Economic to luxury options with TV, AC/Non-AC, WiFi on demand, hot water, attached bath, in-room food & medical service.',
  },
  {
    title: 'Panchakarma Suites',
    detail: 'Separate male and female therapy rooms with dedicated therapists trained in classical Kerala protocols.',
  },
  {
    title: 'Operation Theatre',
    detail: 'On-site OT supporting procedures including Kshara Sutra and related minor surgical Ayurveda care.',
  },
  {
    title: 'Physiotherapy Unit',
    detail: 'Integrated rehabilitation support alongside Ayurvedic therapies for spine, joint and neurological recovery.',
  },
  {
    title: 'Yoga Hall',
    detail: 'Naturally lit space for guided movement, breathwork and recovery-supportive practices.',
  },
  {
    title: 'Ayur Village',
    detail: 'Four traditional cottages with private treatment rooms, ~20 km from Trivandrum airport.',
  },
];

export const legacyFigures = {
  founders: [
    'Sri P. Krishna Pillai (Late) — Ayurvedic Physician, founding visionary (1970)',
    'Sri P.K. Pillai (Late)',
  ],
  patriarch: {
    name: 'Prof. Dr. Krishnankutty Nair (Late)',
    role: 'Former Chairman & MD; HOD/Superintendent, Dept. of Panchakarma, Govt. Ayurveda Panchakarma Hospital, Trivandrum; Professor (Agada Tantra, Roga Nidana, Kayachikitsa, Panchakarma)',
    experience: '40+ years',
    focus: ['spine care', 'paediatrics', 'cancer care', 'communicable disease', 'dermatology'],
    awardsClaimed: ['Pride of India', 'Indira Gandhi Sadbhavana', 'Bharath Jyothi', 'Rashtreeya Rattan'],
    roleInStory:
      "The leading light of Susrutha's modern era — anchoring the heritage narrative that today's three directors continue.",
  },
};

export const principles = [
  {
    title: 'Classical fidelity',
    text: 'Therapies rooted in authentic Kerala Ayurveda protocols, not diluted wellness trends.',
  },
  {
    title: 'Research mindset',
    text: 'Hospital practice informed by observation, documentation and continuous clinical learning.',
  },
  {
    title: 'Honest counsel',
    text: 'Educational guidance without cure promises — consultation first, personalised care always.',
  },
  {
    title: 'Accessible care',
    text: 'Quality medicines and treatment framed for real families, not only luxury tourism.',
  },
];
