import { brand } from './site';

export const timelineMilestones = [
  {
    year: '1970',
    title: 'Family Clinic',
    short: 'Family clinic roots begin',
    detail:
      'Original family clinic founded under the vision of Sri P. Krishna Pillai (Late), establishing the Ayurvedic roots that would later become Susrutha.',
    highlights: ['Founding vision', 'Community care beginnings', 'Classical practice lineage'],
  },
  {
    year: '1986',
    title: 'Susrutha Clinic',
    short: 'Clinic & pharmacy at Kattakada',
    detail:
      'Susrutha takes institutional form at Kattakada with clinic and pharmacy — the name and location that anchor the hospital today.',
    highlights: ['Kattakada establishment', 'Pharmacy integration', 'Institutional identity'],
  },
  {
    year: '2002',
    title: 'Panchakarma Hospital',
    short: 'Registered hospital & institute',
    detail:
      'Registered as a 30-bedded Panchakarma hospital and institute — moving from clinic scale to supervised inpatient classical care.',
    highlights: ['Inpatient capacity', 'Research institute framing', 'Hospital protocols'],
  },
  {
    year: '2008',
    title: 'GMP Pharma',
    short: 'GMP-certified manufacturing',
    detail:
      'Susrutha Ayurveda Pharma begins GMP-certified manufacturing, extending clinical care into quality-controlled medicine production.',
    highlights: ['GMP certification', 'Medicine quality', 'Vertical integration'],
  },
  {
    year: '2010',
    title: 'Ayurveda Village',
    short: 'Gramam cottages opened',
    detail:
      'Susrutha Ayurveda Gramam opens with traditional Kerala cottages and private treatment rooms — privacy-focused stays near the airport corridor.',
    highlights: ['4 traditional cottages', 'Private therapy rooms', 'Medical-travel readiness'],
  },
  {
    year: '2012',
    title: 'Partnership',
    short: 'Registered partnership firm',
    detail:
      'Formal registration as a partnership firm strengthens governance as the organisation expands clinical and allied verticals.',
    highlights: ['Governance clarity', 'Institutional growth'],
  },
  {
    year: '2013',
    title: 'Nursing School',
    short: 'Ayurveda nursing education',
    detail:
      'Advanced Ayurveda Nursing School founded to train caregivers in authentic therapy support and hospital-grade nursing practice.',
    highlights: ['Workforce development', 'Therapy-support training'],
  },
  {
    year: '2015',
    title: 'Medi Tech Lab',
    short: 'Diagnostics & home sampling',
    detail:
      'Susrutha Medi Tech Lab established for diagnostics, including home sampling within approximately 5 km — bridging lab data and Ayurvedic assessment.',
    highlights: ['Diagnostics access', 'Home sampling radius'],
  },
  {
    year: '2016',
    title: 'Charitable Trust',
    short: 'Cancer awareness trust',
    detail:
      'Susrutha Charitable Medical Trust launches with a focus on cancer awareness and early detection — community health beyond fee-for-service care.',
    highlights: ['Awareness programmes', 'Early detection emphasis'],
  },
  {
    year: '2019',
    title: 'CAN Movement',
    short: 'Cancer-awareness movement',
    detail:
      'Susrutha CAN expands cancer-awareness work as a public-facing movement. Educational framing only — not a treatment or cure claim.',
    highlights: ['Public education', 'Community outreach'],
  },
  {
    year: '2020',
    title: 'Specialty Units',
    short: 'Proctology · Postnatal · Palliative',
    detail:
      'Dedicated clinical units strengthen for proctology (including Kshara Sutra pathways), postnatal Sutika care, and post-stroke palliative support.',
    highlights: ['Ano-rectal specialty', 'Women’s postnatal care', 'Neuro supportive care'],
  },
  {
    year: '2022',
    title: 'Life Care + Kowdiar OP',
    short: 'Corporate arm & city OP',
    detail:
      'Susrutha Life Care Pvt Ltd registers in April; Kowdiar satellite OPD opens in June — city access for consultations while Kattakada remains the inpatient hub.',
    highlights: ['Life Care Pvt Ltd', 'Kowdiar OP since June 2022', 'Two-location access'],
  },
];

export const facilityShowcase = [
  {
    id: 'rooms',
    title: 'Patient Rooms',
    detail:
      'Economic to luxury options with TV, AC/Non-AC, WiFi on demand, hot water, attached bath, in-room food and medical service.',
    image: '/images/hospital-room.jpg',
    points: ['AC & Non-AC categories', 'In-room food service', 'Attached bath & hot water'],
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma Suites',
    detail:
      'Separate male and female therapy rooms with dedicated therapists trained in classical Kerala protocols.',
    image: '/images/panchakarma.jpg',
    points: ['Gender-separate suites', 'Trained therapists', 'Supervised sequencing'],
  },
  {
    id: 'ot',
    title: 'Operation Theatre',
    detail:
      'On-site OT supporting procedures including Kshara Sutra and related minor surgical Ayurveda care.',
    image: '/images/hospital-room.jpg',
    points: ['Procedural readiness', 'Kshara Sutra support', 'Hospital sterile context'],
  },
  {
    id: 'physio',
    title: 'Physiotherapy',
    detail:
      'Integrated rehabilitation support alongside Ayurvedic therapies for spine, joint and neurological recovery.',
    image: '/images/yoga-hall.jpg',
    points: ['Spine & joint rehab', 'Neuro support', 'Paired with Ayurveda plans'],
  },
  {
    id: 'yoga',
    title: 'Yoga Hall',
    detail: 'Naturally lit space for guided movement, breathwork and recovery-supportive practices.',
    image: '/images/yoga-hall.jpg',
    points: ['Natural light', 'Guided practice', 'Recovery-friendly pacing'],
  },
  {
    id: 'village',
    title: 'Ayur Village',
    detail:
      'Four traditional cottages with private treatment rooms, approximately 20 km from Trivandrum International Airport.',
    image: '/images/ayur-village.jpg',
    points: ['4 Kerala cottages', 'Private treatment rooms', 'Airport corridor access'],
  },
];

export type EcosystemVertical = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  year?: string;
  tagline: string;
  aiSummary: string;
  description: string[];
  services: string[];
  audience: string[];
  externalUrl?: string;
  mapQuery: string;
  gallery: string[];
  contactNote: string;
  faqs: { q: string; a: string }[];
};

export const ecosystemVerticals: EcosystemVertical[] = [
  {
    id: 'pharma',
    slug: 'ayurveda-pharma',
    name: 'Susrutha Ayurveda Pharma',
    shortName: 'Ayurveda Pharma',
    year: '2008',
    tagline: 'GMP-certified pharmacy and manufacturing serving clinical quality standards.',
    aiSummary:
      'Susrutha Ayurveda Pharma is the GMP-certified manufacturing and pharmacy vertical of Susrutha, established in 2008 to support quality Ayurvedic medicines aligned with hospital practice in Thiruvananthapuram.',
    description: [
      'Quality medicines are part of authentic hospital Ayurveda. Since 2008, Susrutha Ayurveda Pharma has operated as a GMP-certified manufacturing and pharmacy vertical — connecting prescription intent with controlled production discipline.',
      'Patients and practitioners seeking classical formulations benefit when manufacturing is not an afterthought. This vertical exists to reduce the gap between ward protocols and medicine reliability.',
    ],
    services: [
      'GMP-oriented manufacturing discipline',
      'Hospital-linked pharmacy access',
      'Classical formulation support for clinical programmes',
      'Quality-focused production culture',
    ],
    audience: ['Inpatients on prescribed plans', 'OP pharmacy needs', 'Practitioners seeking quality-linked supply'],
    externalUrl: 'https://susruthaayurvedapharma.com/',
    mapQuery: 'Kattakada+Thiruvananthapuram+Kerala',
    gallery: ['/images/herbs-mortar.jpg', '/images/hero-ayurveda.jpg', '/images/hospital-room.jpg'],
    contactNote: `Pharmacy hours ${brand.hours.pharmacy}. Reach ${brand.contact.mobile} or ${brand.contact.email}.`,
    faqs: [
      {
        q: 'Is the pharma unit open to walk-in retail only?',
        a: 'Pharmacy access supports hospital and OP care pathways. Specific product availability is confirmed at the counter or via enquiry.',
      },
      {
        q: 'Does GMP mean every product suits every patient?',
        a: 'No. Manufacturing quality and clinical suitability are different questions. Medicines should follow physician advice.',
      },
    ],
  },
  {
    id: 'trust',
    slug: 'charitable-medical-trust',
    name: 'Susrutha Charitable Medical Trust',
    shortName: 'Charitable Medical Trust',
    year: '2016',
    tagline: 'Cancer awareness and early detection — community health beyond the ward.',
    aiSummary:
      'Susrutha Charitable Medical Trust, launched in 2016, focuses on cancer awareness and early detection education in the Susrutha ecosystem. It is not a cure programme.',
    description: [
      'In 2016 Susrutha formalised charitable medical outreach through a dedicated trust. The emphasis is awareness and early detection education — especially around cancer — so families act sooner with appropriate medical pathways.',
      'This vertical is deliberately separated from cure marketing. Awareness is a public good; treatment decisions remain clinical and individual.',
    ],
    services: [
      'Cancer awareness initiatives',
      'Early detection education',
      'Community outreach programmes',
      'Susrutha CAN movement linkage (from 2019)',
    ],
    audience: ['Community groups', 'Families seeking education', 'Partners in awareness campaigns'],
    externalUrl: 'http://susruthacmt.com/',
    mapQuery: 'Kattakada+Thiruvananthapuram+Kerala',
    gallery: ['/images/kerala-nature.jpg', '/images/doctor-portrait.jpg', '/images/hero-ayurveda.jpg'],
    contactNote: `For trust-related enquiries: ${brand.contact.email} · ${brand.contact.mobile}`,
    faqs: [
      {
        q: 'Does the trust treat cancer with Ayurveda cures?',
        a: 'No. The trust’s public framing is awareness and early detection. We do not promise cancer cures.',
      },
    ],
  },
  {
    id: 'lab',
    slug: 'medi-tech-lab',
    name: 'Susrutha Medi Tech Lab',
    shortName: 'Medi Tech Lab',
    year: '2015',
    tagline: 'Diagnostics with home sampling within about 5 km.',
    aiSummary:
      'Susrutha Medi Tech Lab (2015) provides diagnostics support for clinical decision-making, including home sampling within approximately 5 km of the service area.',
    description: [
      'Lab data sharpens responsible Ayurvedic and integrative care. Medi Tech Lab, established in 2015, supports investigations that physicians may recommend during assessment and follow-up.',
      'Home sampling within roughly 5 km reduces friction for patients who cannot easily travel — especially useful for elderly or mobility-limited households.',
    ],
    services: [
      'Clinical diagnostics support',
      'Home sampling within ~5 km',
      'Reports for physician review',
      'Coordination with hospital/OP pathways',
    ],
    audience: ['Inpatients & OP patients', 'Homebound patients in sampling radius', 'Package guests needing labs'],
    mapQuery: 'Kattakada+Thiruvananthapuram+Kerala',
    gallery: ['/images/hospital-room.jpg', '/images/herbs-mortar.jpg', '/images/doctor-portrait.jpg'],
    contactNote: `Book lab coordination via ${brand.contact.mobile} or the contact form.`,
    faqs: [
      {
        q: 'Can I walk in without a doctor note?',
        a: 'Some tests may be available on request; many are best ordered after clinical consultation. Call ahead for clarity.',
      },
    ],
  },
  {
    id: 'nursing',
    slug: 'ayurveda-nursing-school',
    name: 'Susrutha Advanced Ayurveda Nursing School',
    shortName: 'Ayurveda Nursing School',
    year: '2013',
    tagline: 'Training caregivers for authentic therapy support and hospital practice.',
    aiSummary:
      'Founded in 2013, Susrutha Advanced Ayurveda Nursing School trains Ayurveda nursing professionals to support therapy delivery and hospital-grade patient care.',
    description: [
      'Therapies are only as consistent as the hands that deliver them. The nursing school (2013) invests in people — training for therapy support, inpatient care routines and professional discipline.',
      'Education here is aligned with the realities of a Panchakarma hospital, not purely classroom abstraction.',
    ],
    services: [
      'Ayurveda nursing education',
      'Therapy-support skill development',
      'Hospital-oriented training culture',
      'Career pathway into care teams',
    ],
    audience: ['Aspiring Ayurveda nurses', 'Healthcare students', 'Institutions seeking trained aides'],
    mapQuery: 'Kattakada+Thiruvananthapuram+Kerala',
    gallery: ['/images/yoga-hall.jpg', '/images/panchakarma.jpg', '/images/hospital-room.jpg'],
    contactNote: `Admissions and course enquiries: ${brand.contact.email}`,
    faqs: [
      {
        q: 'Are course calendars listed online?',
        a: 'Batch timings and eligibility are confirmed on enquiry so published details stay accurate.',
      },
    ],
  },
  {
    id: 'lifecare',
    slug: 'life-care',
    name: 'Susrutha Life Care Pvt Ltd',
    shortName: 'Life Care Pvt Ltd',
    year: '2022',
    tagline: 'Corporate arm registered in 2022 to support the expanding care ecosystem.',
    aiSummary:
      'Susrutha Life Care Pvt Ltd, registered in 2022, is the corporate vehicle supporting Susrutha’s expanding healthcare and allied services ecosystem in Kerala.',
    description: [
      'As Susrutha’s clinical and allied footprint grew, Life Care Pvt Ltd (April 2022) provided a corporate structure for organised expansion while clinical identity remained hospital-led.',
      'Patients primarily experience Susrutha through doctors, wards and therapies; Life Care is the institutional backbone behind sustainable operations.',
    ],
    services: [
      'Corporate operational support',
      'Ecosystem coordination',
      'Service expansion framework',
      'Institutional partnerships (as applicable)',
    ],
    audience: ['Institutional partners', 'Vendors & collaborators', 'Patients via hospital services'],
    mapQuery: 'Kattakada+Thiruvananthapuram+Kerala',
    gallery: ['/images/hero-ayurveda.jpg', '/images/kerala-nature.jpg', '/images/hospital-room.jpg'],
    contactNote: `Business and partnership notes: ${brand.contact.email}`,
    faqs: [
      {
        q: 'Do I book treatment through Life Care or the hospital?',
        a: 'Clinical bookings go through Susrutha hospital appointment and package channels. Life Care is organisational infrastructure.',
      },
    ],
  },
  {
    id: 'home-consult',
    slug: 'online-home-consultation',
    name: 'Online & Home Consultation',
    shortName: 'Online & Home Consults',
    tagline: 'Scheduled online consults and home visits for bedridden patients within 30 km.',
    aiSummary:
      'Susrutha offers scheduled online consultations and home consultations for bedridden patients within approximately 30 km, extending physician access beyond the hospital campus.',
    description: [
      'Not every patient can reach Kattakada or Kowdiar easily. Online consultations provide structured physician time by appointment, while home visits prioritise bedridden patients within about 30 km.',
      'These pathways are scheduled — not ad-hoc chat medicine — so clinical quality and documentation remain intact.',
    ],
    services: [
      'Scheduled online consultations',
      'Home consults for bedridden patients (~30 km)',
      'Follow-up planning with hospital programmes',
      'Coordination for reports and caregivers',
    ],
    audience: ['Remote follow-up patients', 'Caregivers of bedridden adults', 'NRI families coordinating local care'],
    mapQuery: 'Thiruvananthapuram+Kerala',
    gallery: ['/images/doctor-portrait.jpg', '/images/hospital-room.jpg', '/images/kerala-nature.jpg'],
    contactNote: `Request scheduling via ${brand.contact.mobile}, WhatsApp, or the appointment form.`,
    faqs: [
      {
        q: 'Is home consultation available city-wide?',
        a: 'Home visits focus on bedridden patients within roughly 30 km. Eligibility and timing are confirmed at booking.',
      },
      {
        q: 'Are online consults a substitute for emergency care?',
        a: 'No. Emergencies require local emergency services and hospital emergency contacts.',
      },
    ],
  },
];

export function getVerticalBySlug(slug: string) {
  return ecosystemVerticals.find((v) => v.slug === slug);
}

export const patientStories = [
  {
    id: 't1',
    quote:
      'What stood out was the seriousness of assessment. Therapies felt prescribed, not packaged. The hospital rhythm helped me actually rest.',
    full: 'What stood out was the seriousness of assessment. Therapies felt prescribed, not packaged. The hospital rhythm helped me actually rest. I came for chronic back discomfort after years of desk work. Nobody rushed me into a “detox special.” The plan changed slightly mid-stay when my sleep improved — that flexibility felt clinical, not commercial.',
    name: 'Ananya R.',
    context: 'Low back pain care · 7-day programme',
    category: 'Spine & joints',
    location: 'Bengaluru',
    verified: false,
  },
  {
    id: 't2',
    quote:
      'As a new mother, I needed clarity more than luxury. The postnatal guidance was practical and respectful of my obstetric follow-up.',
    full: 'As a new mother, I needed clarity more than luxury. The postnatal guidance was practical and respectful of my obstetric follow-up. Diet notes were simple enough to continue at home, and the team never dismissed my hospital discharge summary. That respect mattered.',
    name: 'Meera S.',
    context: 'Postnatal (Sutika) care',
    category: 'Women’s health',
    location: 'Thiruvananthapuram',
    verified: false,
  },
  {
    id: 't3',
    quote:
      'We travelled for authentic Kerala Panchakarma and found doctors who explained what would not suit me — that honesty built trust.',
    full: 'We travelled for authentic Kerala Panchakarma and found doctors who explained what would not suit me — that honesty built trust. Coming from abroad, I expected a brochure list of five procedures. Instead I received a paced plan and clear rest rules. Ayur Village privacy helped my spouse stay nearby without ward noise.',
    name: 'Daniel K.',
    context: 'International guest · rejuvenation',
    category: 'International',
    location: 'United Kingdom',
    verified: false,
  },
  {
    id: 't4',
    quote:
      'Kshara Sutra was explained without drama. I knew the visit rhythm before we started — that reduced fear more than any slogan.',
    full: 'Kshara Sutra was explained without drama. I knew the visit rhythm before we started — that reduced fear more than any slogan. Aftercare instructions were specific. I still had uncomfortable days, and the team expected that instead of pretending recovery is linear.',
    name: 'Suresh P.',
    context: 'Ano-rectal care',
    category: 'Proctology',
    location: 'Kollam',
    verified: false,
  },
  {
    id: 't5',
    quote:
      'Tekky care treated my neck pain like an occupational pattern, not a random ache. Ergonomic homework was part of discharge.',
    full: 'Tekky care treated my neck pain like an occupational pattern, not a random ache. Ergonomic homework was part of discharge. Local therapies helped in the week; the lasting value was how clearly they connected screens, sleep and stiffness.',
    name: 'Nisha V.',
    context: 'Tekky occupational care',
    category: 'Spine & joints',
    location: 'Kochi',
    verified: false,
  },
  {
    id: 't6',
    quote:
      'Father’s post-stroke stay was slow and human. Goals were modest and honest — comfort, routine, caregiver teaching.',
    full: 'Father’s post-stroke stay was slow and human. Goals were modest and honest — comfort, routine, caregiver teaching. Nobody promised he would walk as before. Physiotherapy and external therapies shared a timetable we could understand as a family.',
    name: 'Family of R. Nair',
    context: 'Stroke supportive care',
    category: 'Neuro rehab',
    location: 'Trivandrum',
    verified: false,
  },
  {
    id: 't7',
    quote:
      'Stress-care week forced digital quiet I would not have chosen myself. Shirodhara was calm; the schedule was the real medicine.',
    full: 'Stress-care week forced digital quiet I would not have chosen myself. Shirodhara was calm; the schedule was the real medicine. I left with sleep rules that survived the first hectic Monday — mostly.',
    name: 'Arjun M.',
    context: 'Stress care package',
    category: 'Rejuvenation',
    location: 'Chennai',
    verified: false,
  },
  {
    id: 't8',
    quote:
      'Kowdiar OP made senior consult access easier for my mother without always travelling to Kattakada first.',
    full: 'Kowdiar OP made senior consult access easier for my mother without always travelling to Kattakada first. When admission was needed later, the handoff felt continuous rather than starting from zero.',
    name: 'Lakshmi T.',
    context: 'Kowdiar OP · general medicine',
    category: 'General care',
    location: 'Trivandrum city',
    verified: false,
  },
];

export const videoGallery = [
  {
    id: 'v1',
    title: 'Authentic Kerala Ayurveda — hospital care ethos',
    category: 'Hospital',
    youtubeId: 'Fq8V5exgi4A',
    description: 'Editorial placeholder embed illustrating calm therapy environments. Replace with Susrutha-owned channel videos when available.',
  },
  {
    id: 'v2',
    title: 'Panchakarma preparation explained',
    category: 'Therapies',
    youtubeId: 'YQHsXMglC9A',
    description: 'Educational framing for sequenced care. Swap to physician-approved Susrutha explainer when filmed.',
  },
  {
    id: 'v3',
    title: 'Kerala landscape & healing geography',
    category: 'Kerala',
    youtubeId: 'BHACKCNDMW8',
    description: 'Sense-of-place visual for international guests researching medical travel to Kerala.',
  },
  {
    id: 'v4',
    title: 'Yoga and recovery movement',
    category: 'Wellness',
    youtubeId: 'v7AYKMP6rOE',
    description: 'Movement and breath as recovery support — not a substitute for medical advice.',
  },
  {
    id: 'v5',
    title: 'Herbal traditions & pharmacy craft',
    category: 'Pharma',
    youtubeId: 'inpok4MKVLM',
    description: 'Atmospheric craft visuals. Pair with GMP pharma page for accurate institutional facts.',
  },
  {
    id: 'v6',
    title: 'Mindful rest for stress care',
    category: 'Wellness',
    youtubeId: 'inpok4MKVLM',
    description: 'Quiet pacing reference for stress-care package education.',
  },
  {
    id: 'v7',
    title: 'Medical travel planning mindset',
    category: 'International',
    youtubeId: 'BHACKCNDMW8',
    description: 'Travel-planning mood film for the international patients pathway.',
  },
  {
    id: 'v8',
    title: 'Inpatient rhythm & rest architecture',
    category: 'Hospital',
    youtubeId: 'Fq8V5exgi4A',
    description: 'Why hospital rhythm differs from resort leisure — visual companion piece.',
  },
];

export const videoCategories = ['All', 'Hospital', 'Therapies', 'Kerala', 'Wellness', 'Pharma', 'International'];
