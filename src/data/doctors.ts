export type Doctor = {
  id: string;
  slug: string;
  name: string;
  qual: string;
  role: string;
  isDirector: boolean;
  lineage?: string;
  availability: string;
  branchIds: string[];
  specialtyIds: string[];
  pillars: string[];
  aiSummary: string;
  philosophy: string;
  approach: string;
  specializations: string[];
  signatureTreatments: string[];
  education: string[];
  eeat?: string;
  image?: string;
  confirmSlots?: string[];
};

export const doctors: Doctor[] = [
  {
    id: 'dr-krishnakumar',
    slug: 'dr-krishnakumar-k',
    name: 'Dr. Krishnakumar K.',
    qual: 'MD (Ayur)',
    role: 'Director / Chief Physician — leads the Research Institute & hospital',
    isDirector: true,
    lineage: 'Son of Prof. Dr. Krishnankutty Nair',
    availability: 'On appointment',
    branchIds: ['kattakada'],
    specialtyIds: ['neck-back-joint', 'rheumatology', 'stroke-neurology', 'preventive-medicine', 'general-medicine'],
    pillars: [
      'Research-driven Ayurveda',
      'Panchakarma authority',
      'Classical Ayurveda + modern hospital practice',
    ],
    aiSummary:
      'Dr. Krishnakumar K., MD (Ayur), is Director and Chief Physician at Susrutha Ayurveda, leading the research institute and hospital with a focus on classical Panchakarma integrated into contemporary inpatient care.',
    philosophy:
      'Authentic Ayurveda earns trust when classical discipline meets modern hospital responsibility — careful assessment, measured therapy, and honest expectations.',
    approach:
      'Clinical decisions begin with thorough assessment of constitution, disease stage and lifestyle context. Panchakarma and internal medicines are sequenced for safety and sustainability, with rehabilitation support where neurological or musculoskeletal recovery demands it.',
    specializations: [
      'Panchakarma hospital protocols',
      'Chronic musculoskeletal conditions',
      'Integrative inpatient Ayurveda',
      'Research-oriented clinical practice',
    ],
    signatureTreatments: ['panchakarma', 'abhyanga', 'kizhi', 'vasti'],
    education: ['MD (Ayur)', 'Lineage training under Prof. Dr. Krishnankutty Nair'],
    image: '/images/doctor-portrait.jpg',
    confirmSlots: ['years of experience', 'publications/research', 'awards', 'signature video'],
  },
  {
    id: 'dr-sreeja',
    slug: 'dr-sreeja-krishna-s',
    name: 'Dr. Sreeja Krishna S.',
    qual: 'BAMS, MBA (Hospital Management)',
    role: 'Director — clinical practice + hospital administration',
    isDirector: true,
    lineage: 'Daughter of Prof. Dr. Krishnankutty Nair',
    availability: 'Kattakada Tue/Thu/Sat 9:00 AM–4:00 PM; Kowdiar Wed 9:00 AM–5:00 PM',
    branchIds: ['kattakada', 'kowdiar'],
    specialtyIds: ['womens-health', 'preventive-medicine', 'general-medicine'],
    pillars: [
      'Patient-first hospital experience',
      'Women & family wellness',
      'Modernizing authentic Ayurveda',
    ],
    aiSummary:
      'Dr. Sreeja Krishna S., BAMS, MBA (Hospital Management), is a Director at Susrutha Ayurveda guiding clinical practice and hospital administration with emphasis on patient experience and family wellness.',
    philosophy:
      'Healing environments matter as much as prescriptions. Authentic Ayurveda should feel organised, humane and clear — especially for families navigating chronic illness.',
    approach:
      'Combines clinical Ayurveda with hospital-systems thinking: smoother pathways from consultation to therapy, attentive inpatient experience, and accessible guidance for women and multi-generational families.',
    specializations: [
      'Hospital administration & care pathways',
      'Women and family wellness',
      'Patient experience design',
      'Preventive Ayurveda counselling',
    ],
    signatureTreatments: ['rejuvenation', 'abhyanga', 'shirodhara'],
    education: ['BAMS', 'MBA (Hospital Management)'],
    image: '/images/doctor-portrait.jpg',
    confirmSlots: ['years of experience', 'focus areas detail', 'awards', 'signature video'],
  },
  {
    id: 'dr-priyanka',
    slug: 'dr-priyanka-r',
    name: 'Dr. Priyanka R.',
    qual: 'BAMS, MS (Ayur) — Ayurvedic Gynaecologist & Obstetrician',
    role: 'Specialist Director — Women\'s Health, Fertility, Prasuti Tantra & Stree Roga',
    isDirector: true,
    availability: 'Kattakada Sun/Mon/Wed/Fri 9:00 AM–5:00 PM; Kowdiar Tue 9:00 AM–5:00 PM',
    branchIds: ['kattakada', 'kowdiar'],
    specialtyIds: ['womens-health', 'developmental-paediatrics'],
    pillars: [
      'Ayurvedic women\'s health & fertility',
      'Postnatal (Sutika) care',
      'Menstrual & hormonal wellness',
    ],
    aiSummary:
      'Dr. Priyanka R., BAMS, MS (Ayur), is Specialist Director for Women\'s Health at Susrutha Ayurveda, focusing on fertility support, Prasuti Tantra, Stree Roga and postnatal Sutika care.',
    philosophy:
      'Women\'s health in Ayurveda is not a side clinic — it is a full continuum from menstrual balance and fertility preparation through pregnancy support and postnatal recovery.',
    approach:
      'Care plans respect reproductive life-stage, Agni and mental wellbeing. Therapies and counselling are educational and staged; complex cases are guided toward appropriate medical collaboration when needed.',
    specializations: [
      'Prasuti Tantra & Stree Roga',
      'Fertility-supportive Ayurveda',
      'Postnatal (Sutika) care',
      'Menstrual and hormonal wellness',
    ],
    signatureTreatments: ['postnatal-care', 'rejuvenation', 'panchakarma'],
    education: ['BAMS', 'MS (Ayur) — Ayurvedic Gynaecology & Obstetrics'],
    image: '/images/doctor-portrait.jpg',
    confirmSlots: ['years of experience', 'signature treatments detail', 'awards', 'signature video'],
  },
  {
    id: 'dr-sasidharan',
    slug: 'dr-m-k-sasidharan',
    name: 'Dr. M. K. Sasidharan',
    qual: 'Retd. Professor, Govt. Ayurveda College, Trivandrum',
    role: 'Senior Consulting Physician',
    isDirector: false,
    availability: 'Kowdiar — Sat 9:00 AM–1:00 PM',
    branchIds: ['kowdiar'],
    specialtyIds: ['general-medicine', 'neck-back-joint', 'preventive-medicine'],
    pillars: ['Government-college clinical pedigree', 'Senior consultative care'],
    aiSummary:
      'Dr. M. K. Sasidharan is a retired Professor from Govt. Ayurveda College, Trivandrum and former Head of Panchakarma Hospital, Poojappura, consulting at Susrutha\'s Kowdiar centre on Saturdays.',
    philosophy: 'Decades of government-college teaching and hospital leadership inform a careful, classical consultative style.',
    approach: 'Senior outpatient assessment with emphasis on long-view chronic care and Panchakarma readiness.',
    specializations: ['General Ayurvedic medicine', 'Panchakarma guidance', 'Chronic disease counselling'],
    signatureTreatments: ['panchakarma'],
    education: [
      'Retd. Professor, Govt. Ayurveda College, Trivandrum',
      'Former Head, Panchakarma Hospital, Poojappura',
    ],
    eeat: 'High — government-college pedigree',
  },
  {
    id: 'dr-vinaya',
    slug: 'dr-vinaya-babu-b',
    name: 'Dr. Vinaya Babu B.',
    qual: 'BSc, BAMS; Chief Medical Officer (Rtd), Govt. of Kerala',
    role: 'Senior Consulting Physician',
    isDirector: false,
    availability: 'Kowdiar — Mon, Thu 9:00 AM–1:00 PM',
    branchIds: ['kowdiar'],
    specialtyIds: ['general-medicine', 'preventive-medicine'],
    pillars: ['Government CMO credibility', 'Public-health informed practice'],
    aiSummary:
      'Dr. Vinaya Babu B., BSc, BAMS, retired Chief Medical Officer with the Government of Kerala, offers senior consultations at Susrutha Kowdiar on Mondays and Thursdays.',
    philosophy: 'Public-service medicine teaches clarity, restraint and respect for the patient\'s full social context.',
    approach: 'Structured outpatient evaluation with practical lifestyle and medicine guidance.',
    specializations: ['General medicine', 'Preventive counselling'],
    signatureTreatments: ['rejuvenation'],
    education: ['BSc', 'BAMS', 'Chief Medical Officer (Rtd), Govt. of Kerala'],
    eeat: 'Government CMO credibility',
  },
  {
    id: 'dr-dipu',
    slug: 'dr-dipu-sukumar',
    name: 'Dr. Dipu Sukumar',
    qual: 'BAMS; Ayurveda Proctologist (Piles & Fistula — Kshara Sutra)',
    role: 'Ayurveda Proctologist',
    isDirector: false,
    availability: 'On appointment',
    branchIds: ['kattakada'],
    specialtyIds: ['anorectal'],
    pillars: ['Kshara Sutra expertise', 'Ano-rectal specialty care'],
    aiSummary:
      'Dr. Dipu Sukumar, BAMS, is Susrutha\'s Ayurveda proctologist focusing on piles and fistula care through Kshara Sutra and related ano-rectal protocols, available on appointment.',
    philosophy: 'Ano-rectal suffering is common and often delayed. Precise diagnosis and staged Kshara Sutra care can restore dignity and comfort.',
    approach: 'Specialty assessment of piles, fistula and related conditions with procedure counselling, aftercare and realistic recovery timelines.',
    specializations: ['Piles (Arsha)', 'Fistula (Bhagandara)', 'Kshara Sutra'],
    signatureTreatments: ['kshara-sutra'],
    education: ['BAMS', 'Specialised practice in Ayurvedic proctology'],
    eeat: 'Owns ano-rectal / piles-fistula clinical cluster',
  },
  {
    id: 'dr-roopasree',
    slug: 'dr-roopasree',
    name: 'Dr. Roopasree',
    qual: 'BAMS; Resident Medical Officer',
    role: 'Resident Medical Officer',
    isDirector: false,
    availability: 'Kattakada — 24×7 RMO',
    branchIds: ['kattakada'],
    specialtyIds: ['general-medicine'],
    pillars: ['Round-the-clock inpatient trust', 'Continuous clinical presence'],
    aiSummary:
      'Dr. Roopasree, BAMS, serves as Resident Medical Officer at Susrutha Kattakada, providing round-the-clock medical presence for inpatients and hospital coordination.',
    philosophy: 'A hospital is trusted when someone competent is always present.',
    approach: 'Continuous inpatient oversight, escalation pathways and day-to-day clinical coordination.',
    specializations: ['Inpatient medical cover', 'Emergency coordination support'],
    signatureTreatments: [],
    education: ['BAMS'],
    eeat: 'Round-the-clock trust signal',
  },
  {
    id: 'dr-kaveri',
    slug: 'dr-k-kaveri',
    name: 'Dr. K. Kaveri',
    qual: 'BAMS',
    role: 'Consulting Physician',
    isDirector: false,
    availability: 'Schedule to be confirmed',
    branchIds: ['kattakada'],
    specialtyIds: ['general-medicine'],
    pillars: ['Clinical roster depth'],
    aiSummary: 'Dr. K. Kaveri, BAMS, is part of the Susrutha clinical roster. Clinic seat details are pending confirmation.',
    philosophy: 'Careful outpatient Ayurveda grounded in classical fundamentals.',
    approach: 'General Ayurvedic consultation and care coordination.',
    specializations: ['General Ayurvedic medicine'],
    signatureTreatments: [],
    education: ['BAMS'],
    eeat: 'Roster depth',
    confirmSlots: ['clinic seat / branch schedule'],
  },
  {
    id: 'dr-nithya',
    slug: 'dr-nithya-p',
    name: 'Dr. Nithya P.',
    qual: 'BAMS',
    role: 'Consulting Physician',
    isDirector: false,
    availability: 'Kowdiar — Sat 9:00 AM–3:00 PM',
    branchIds: ['kowdiar'],
    specialtyIds: ['general-medicine'],
    pillars: ['Outpatient clinical support'],
    aiSummary: 'Dr. Nithya P., BAMS, consults at Susrutha Kowdiar on Saturdays, supporting the outpatient clinical roster.',
    philosophy: 'Accessible outpatient Ayurveda with clear next steps for each patient.',
    approach: 'Saturday OP consultations with referral into hospital programmes when indicated.',
    specializations: ['General Ayurvedic medicine'],
    signatureTreatments: [],
    education: ['BAMS'],
    eeat: 'Roster depth',
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export function getDirectors() {
  return doctors.filter((d) => d.isDirector);
}

export function getDoctorsByBranch(branchId: string) {
  return doctors.filter((d) => d.branchIds.includes(branchId));
}

export function getDoctorsBySpecialty(specialtyId: string) {
  return doctors.filter((d) => d.specialtyIds.includes(specialtyId));
}
