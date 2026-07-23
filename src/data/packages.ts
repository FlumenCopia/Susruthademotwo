export type CarePackage = {
  id: string;
  slug: string;
  name: string;
  durationLabel: string;
  summary: string;
  whoFor: string[];
  included: string[];
  dayFlow: string[];
  focus: string;
  addOns: string[];
  priceNote: string;
  relatedSpecialtyIds: string[];
  relatedTreatmentIds: string[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const packages: CarePackage[] = [
  {
    id: 'anorectal-care',
    slug: 'ano-rectal-care-piles-fistula',
    name: 'Ano-Rectal Care (Piles & Fistula)',
    durationLabel: 'Assessment-led · procedure course as advised',
    summary:
      'Specialty pathway for piles and fistula care, including Kshara Sutra evaluation where appropriate, led with hospital procedural support.',
    whoFor: [
      'Adults with piles or fistula symptoms',
      'Patients seeking Ayurvedic proctology opinion in Kerala',
    ],
    included: [
      'Specialty consultation',
      'Procedure counselling',
      'Kshara Sutra pathway when indicated',
      'Aftercare guidance',
    ],
    dayFlow: [
      'Consult & examination',
      'Investigations if advised',
      'Procedure scheduling',
      'Follow-up thread care / wound review',
    ],
    focus: 'Ano-rectal specialty care with honest timelines',
    addOns: ['Inpatient stay if required', 'Medi Tech Lab tests'],
    priceNote: 'Enquire for current package guidance — final plan is clinical.',
    relatedSpecialtyIds: ['anorectal'],
    relatedTreatmentIds: ['kshara-sutra'],
    featured: true,
    faqs: [
      {
        q: 'How long before I can return to work?',
        a: 'It depends on the procedure and your role. Your specialist will give personalised guidance after assessment — we avoid one-number promises.',
      },
    ],
  },
  {
    id: 'rejuvenation',
    slug: 'rejuvenation',
    name: 'Rejuvenation',
    durationLabel: 'Flexible multi-day',
    summary:
      'Physician-guided restoration combining therapies, dietetics and rest — available with hospital stay or Ayur Village privacy.',
    whoFor: ['Burned-out professionals', 'International wellness travellers seeking authenticity', 'Adults after prolonged stress'],
    included: ['Physician assessment', 'Daily therapy sessions as prescribed', 'Diet guidance', 'Rest-oriented schedule'],
    dayFlow: ['Morning therapy block', 'Rest & light meals', 'Evening calm routine', 'Physician review points'],
    focus: 'Rasayana-oriented restoration without spa clichés',
    addOns: ['Ayur Village cottage', 'Lab panel', 'Extended day count'],
    priceNote: 'Enquire — tariff depends on room category and duration.',
    relatedSpecialtyIds: ['preventive-medicine'],
    relatedTreatmentIds: ['rejuvenation-therapy', 'abhyanga', 'shirodhara'],
    featured: true,
    faqs: [
      {
        q: 'Is this suitable year-round?',
        a: 'Yes, with seasonal adjustments to diet and therapy intensity under Ritucharya thinking.',
      },
    ],
  },
  {
    id: 'postnatal',
    slug: 'post-natal-care',
    name: 'Post-Natal Care (OP/IP)',
    durationLabel: 'OP or IP · staged for Sutika period',
    summary:
      'Structured postnatal (Sutika) support spanning outpatient and inpatient options, aligned with Dr. Priyanka R.’s women’s health leadership.',
    whoFor: ['New mothers seeking Ayurvedic postnatal recovery', 'Families wanting supervised rest and therapy'],
    included: ['Specialist consult', 'Gentle therapies as appropriate', 'Dietetics for recovery', 'OP or IP pathway'],
    dayFlow: ['Assessment of recovery stage', 'Therapy & rest', 'Lactation-aware diet notes', 'Home-care teaching'],
    focus: 'Sutika care with medical responsibility',
    addOns: ['Inpatient room upgrade', 'Extended family stay coordination'],
    priceNote: 'Enquire for OP vs IP options.',
    relatedSpecialtyIds: ['womens-health'],
    relatedTreatmentIds: ['abhyanga', 'rejuvenation-therapy'],
    featured: true,
    faqs: [
      {
        q: 'How soon after delivery can I start?',
        a: 'Timing depends on delivery type, complications and treating obstetric advice. Always bring your discharge summary; we individualise start dates.',
      },
    ],
  },
  {
    id: 'low-back-pain',
    slug: 'low-back-pain-care',
    name: 'Low Back Pain Care',
    durationLabel: 'Multi-day focused programme',
    summary: 'Targeted Ayurvedic and rehab-informed care for chronic and sub-acute low-back patterns.',
    whoFor: ['Chronic low-back pain', 'Postural and degenerative presentations'],
    included: ['Physician assessment', 'Local therapies (e.g. Kati Basti, Kizhi as indicated)', 'Internal medicines', 'Movement guidance'],
    dayFlow: ['Assessment', 'Therapy sessions', 'Rest between procedures', 'Education on posture triggers'],
    focus: 'Spine-focused external care + routine repair',
    addOns: ['Physiotherapy', 'Extended Panchakarma if advised'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['neck-back-joint'],
    relatedTreatmentIds: ['kati-basti', 'kizhi', 'abhyanga'],
    faqs: [
      {
        q: 'Do you treat disc prolapse?',
        a: 'We assess many degenerative and disc-related pain patterns for supportive care. Neurological emergencies and surgical indications need appropriate conventional pathways first.',
      },
    ],
  },
  {
    id: 'neck-pain',
    slug: 'neck-pain-care',
    name: 'Neck Pain Care',
    durationLabel: 'Multi-day focused programme',
    summary: 'Cervical stiffness and pain care for occupational and degenerative patterns, including Greeva-focused therapies.',
    whoFor: ['Desk professionals', 'Chronic cervical spondylotic discomfort patterns'],
    included: ['Consult', 'Greeva-oriented local therapies', 'Ergonomic counselling'],
    dayFlow: ['Assessment', 'Local therapy', 'Rest', 'Home ergonomics plan'],
    focus: 'Cervical care with occupational insight',
    addOns: ['Tekky programme extension', 'Physiotherapy'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['neck-back-joint'],
    relatedTreatmentIds: ['kati-basti', 'abhyanga', 'kizhi'],
    faqs: [
      {
        q: 'Can I continue working on a laptop during treatment?',
        a: 'We usually recommend reducing screen strain during intensive therapy days. Your physician will set practical boundaries.',
      },
    ],
  },
  {
    id: '3-day',
    slug: '3-day-ayurveda',
    name: '3-Day Ayurveda',
    durationLabel: '3 days',
    summary: 'A short, supervised introduction to authentic hospital Ayurveda — ideal when time is limited but quality matters.',
    whoFor: ['First-time guests', 'Short-stay travellers', 'Preventive reset seekers'],
    included: ['Initial consult', 'Daily therapies', 'Diet guidance', 'Discharge notes'],
    dayFlow: ['Day 1 assessment & start', 'Day 2 core therapies', 'Day 3 consolidation & advice'],
    focus: 'Short-format authentic care',
    addOns: ['Airport transfer coordination enquiry', 'Lab tests'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['preventive-medicine'],
    relatedTreatmentIds: ['abhyanga', 'shirodhara'],
    faqs: [{ q: 'Is 3 days enough for Panchakarma?', a: 'Full classical Panchakarma usually needs longer. A 3-day plan is introductory or focused — not a complete eliminative sequence for most people.' }],
  },
  {
    id: '5-day',
    slug: '5-day-ayurveda',
    name: '5-Day Ayurveda',
    durationLabel: '5 days',
    summary: 'A balanced short programme allowing deeper therapy rhythm than a weekend, with room for rest.',
    whoFor: ['Short medical leave', 'Rejuvenation starters', 'Stress-care guests'],
    included: ['Physician reviews', 'Therapy sequence', 'Meals guidance', 'Rest schedule'],
    dayFlow: ['Arrival assessment', 'Building therapy days', 'Mid review', 'Discharge planning'],
    focus: 'Compact yet clinically serious stay',
    addOns: ['Ayur Village', 'Extension to 7 days'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['preventive-medicine', 'general-medicine'],
    relatedTreatmentIds: ['abhyanga', 'shirodhara', 'kizhi'],
    faqs: [{ q: 'Hospital or Ayur Village?', a: 'Both can work. Village suits privacy-focused rejuvenation; hospital suits closer inpatient medical infrastructure.' }],
  },
  {
    id: '7-day',
    slug: '7-day-ayurveda-care',
    name: '7-Day Ayurveda Care',
    durationLabel: '7 days',
    summary: 'A one-week supervised programme commonly chosen for musculoskeletal, stress and general systemic care.',
    whoFor: ['Chronic pain patterns', 'Stress recovery', 'Pre-deeper Panchakarma staging'],
    included: ['Full week therapy plan', 'Inpatient or structured day care options', 'Medicines as prescribed', 'Reviews'],
    dayFlow: ['Assessment', 'Purvakarma-oriented days', 'Peak therapy window', 'Stabilisation', 'Discharge education'],
    focus: 'The workhorse authentic care week',
    addOns: ['Physiotherapy', 'Village stay', 'Family attendant arrangements'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['neck-back-joint', 'rheumatology', 'general-medicine'],
    relatedTreatmentIds: ['panchakarma', 'abhyanga', 'vasti', 'kizhi'],
    featured: true,
    faqs: [{ q: 'Do medicines cost extra?', a: 'Internal medicines and some consumables may be billed separately depending on prescription. We clarify at admission counselling.' }],
  },
  {
    id: '16-day',
    slug: '16-day-ayurveda-care',
    name: '16-Day Ayurveda Care',
    durationLabel: '16 days',
    summary: 'Extended hospital-grade care for deeper sequencing — often chosen when chronicity or neurological rehab goals need time.',
    whoFor: ['Long-standing chronic illness patterns', 'Post-stroke supportive rehab', 'Guests cleared for fuller Panchakarma arcs'],
    included: ['Extended physician oversight', 'Full therapy arc', 'Inpatient infrastructure', 'Family communication points'],
    dayFlow: ['Detailed intake', 'Preparatory phase', 'Core procedures as fit', 'Paschat stabilisation', 'Home programme'],
    focus: 'Time-respecting classical care',
    addOns: ['Ayur Village step-down stay', 'Lab monitoring', 'Physiotherapy intensity'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['stroke-neurology', 'rheumatology', 'neck-back-joint'],
    relatedTreatmentIds: ['panchakarma', 'vasti', 'abhyanga'],
    featured: true,
    faqs: [{ q: 'Can family stay with the patient?', a: 'Attendant policies depend on room category. Share needs at booking so we can advise honestly.' }],
  },
  {
    id: 'psoriasis-skin',
    slug: 'psoriasis-skin-disease-care',
    name: 'Psoriasis & Skin Disease Care',
    durationLabel: 'Multi-day · stage dependent',
    summary: 'Educational, staged Ayurvedic care for psoriasis and selected skin presentations — focused on triggers, routine and supervised therapies.',
    whoFor: ['People with psoriasis seeking Ayurvedic hospital care', 'Chronic skin patterns after dermatology workups'],
    included: ['Clinical skin assessment', 'Internal and external plan', 'Diet trigger counselling'],
    dayFlow: ['History & skin mapping', 'Therapy start', 'Response observation', 'Home skin-care routine'],
    focus: 'Dermatology-aware Ayurveda without cure hype',
    addOns: ['Extended stay', 'Lab work'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['general-medicine'],
    relatedTreatmentIds: ['panchakarma', 'abhyanga'],
    faqs: [{ q: 'Will psoriasis disappear permanently?', a: 'Psoriasis is often relapsing. We aim to support comfort, extent and triggers — we do not guarantee permanent clearance.' }],
  },
  {
    id: 'stress-care',
    slug: 'stress-care',
    name: 'Stress Care',
    durationLabel: 'Multi-day',
    summary: 'A calm, clinically held programme for mental fatigue, sleep disruption and stress-linked bodily symptoms.',
    whoFor: ['High-pressure professionals', 'Sleep-disturbed adults', 'Caregivers under strain'],
    included: ['Consult', 'Shirodhara/Abhyanga as fit', 'Sleep hygiene coaching', 'Quiet schedule design'],
    dayFlow: ['Digital-quiet mornings', 'Therapy', 'Rest', 'Light evening routine'],
    focus: 'Nervous system rest with medical framing',
    addOns: ['Ayur Village', 'Extended rejuvenation'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['preventive-medicine', 'general-medicine'],
    relatedTreatmentIds: ['shirodhara', 'abhyanga', 'rejuvenation-therapy'],
    faqs: [{ q: 'Is this psychiatric care?', a: 'No. We provide Ayurvedic stress-supportive care. Acute psychiatric emergencies need appropriate mental-health services.' }],
  },
  {
    id: 'tekky',
    slug: 'tekky-occupational-disorder-care',
    name: 'Tekky (Occupational Disorder Care)',
    durationLabel: 'Multi-day',
    summary: 'Designed for desk and IT professionals — cervical-lumbar strain, eye-neck tension cycles and lifestyle repair.',
    whoFor: ['IT and desk workers', 'Hybrid employees with posture fatigue', 'Young professionals with early degenerative symptoms'],
    included: ['Occupational history mapping', 'Neck/back local therapies', 'Ergonomic coaching', 'Stress components as needed'],
    dayFlow: ['Work-pattern interview', 'Therapy blocks', 'Micro-break skill teaching', 'Return-to-desk plan'],
    focus: 'Ayurveda for the modern workplace body',
    addOns: ['5–7 day extensions', 'Stress care add-on'],
    priceNote: 'Enquire',
    relatedSpecialtyIds: ['neck-back-joint'],
    relatedTreatmentIds: ['kati-basti', 'kizhi', 'abhyanga', 'shirodhara'],
    featured: true,
    faqs: [{ q: 'Why the name Tekky?', a: 'It signals care built around technology-worker occupational patterns — posture, screens, deadlines — not a gadget gimmick.' }],
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}
