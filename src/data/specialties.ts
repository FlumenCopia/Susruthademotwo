export type Specialty = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  aiSummary: string;
  overview: string;
  ayurvedicView: string;
  symptoms: string[];
  approach: string[];
  whoNeeds: string[];
  relatedTreatmentIds: string[];
  relatedPackageIds: string[];
  leadDoctorIds: string[];
  faqs: { q: string; a: string }[];
};

export const specialties: Specialty[] = [
  {
    id: 'neck-back-joint',
    slug: 'neck-back-joint-problems',
    name: 'Neck, Back & Joint Problems',
    shortName: 'Spine & Joints',
    tagline: 'Degeneration shaped by diet, lifestyle, stress and posture — addressed with classical therapy and rehab support.',
    aiSummary:
      'Susrutha Ayurveda treats neck, back and joint problems through Ayurvedic assessment, local therapies, Panchakarma where indicated, and physiotherapy support for posture- and lifestyle-related degeneration.',
    overview:
      'Chronic neck pain, low-back pain and joint stiffness are among the most common reasons patients seek Kerala Ayurveda. At Susrutha, care begins with understanding whether the picture is Vata-dominant degeneration, inflammatory aggravation, occupational strain, or post-injury residue — then matching therapies accordingly.',
    ayurvedicView:
      'Ayurveda often frames these conditions through Vata imbalance affecting Asthi (bone), Majja (marrow/nervous tissue) and Sandhi (joints), frequently worsened by irregular routine, excess sitting, cold exposure and depleted tissues. Treatment aims to reduce local Ama where present, nourish depleted structures, and restore movement without aggressive force.',
    symptoms: [
      'Persistent neck or low-back stiffness',
      'Radiating pain to arms or legs',
      'Joint crepitus, swelling or reduced range',
      'Postural fatigue in desk professionals',
      'Sleep disruption due to musculoskeletal pain',
    ],
    approach: [
      'Detailed musculoskeletal and lifestyle assessment',
      'Local external therapies (Abhyanga, Kizhi, Kati/Greeva Basti as indicated)',
      'Internal medicines tailored to stage and Agni',
      'Panchakarma sequencing when systemic clearing is appropriate',
      'Physiotherapy and posture education',
    ],
    whoNeeds: [
      'Desk and IT professionals with occupational strain',
      'People with chronic degenerative joint or spine complaints',
      'Patients seeking non-surgical supportive care pathways',
      'Those recovering from flare-ups needing structured rehab',
    ],
    relatedTreatmentIds: ['abhyanga', 'kizhi', 'kati-basti', 'panchakarma', 'vasti'],
    relatedPackageIds: ['low-back-pain', 'neck-pain', 'tekky', '7-day', '16-day'],
    leadDoctorIds: ['dr-krishnakumar', 'dr-sasidharan'],
    faqs: [
      {
        q: 'Is Ayurveda only for chronic back pain, or also acute flare-ups?',
        a: 'Both may be assessed. Acute inflammatory or red-flag presentations need careful triage; some cases require conventional evaluation first. Chronic and sub-acute patterns are common in our programmes.',
      },
      {
        q: 'Will I need inpatient admission?',
        a: 'Not always. Mild occupational strain may be managed as OP care. Multi-day therapy sequences and Panchakarma often benefit from inpatient or Ayur Village stay for consistency and rest.',
      },
    ],
  },
  {
    id: 'stroke-neurology',
    slug: 'stroke-developmental-neurology',
    name: 'Stroke & Developmental Neurology',
    shortName: 'Neuro Rehab',
    tagline: 'Post-stroke rehabilitation and palliative support — unit active since 2020.',
    aiSummary:
      'Since 2020, Susrutha Ayurveda has offered a dedicated unit for post-stroke rehabilitation and palliative neurological support, combining Ayurvedic therapies with physiotherapy-oriented recovery goals.',
    overview:
      'Neurological recovery is slow, personal and multi-dimensional. Susrutha\'s stroke and developmental neurology focus supports families seeking structured Ayurvedic rehabilitation and palliative comfort after cerebrovascular events, and developmental support pathways where appropriate.',
    ayurvedicView:
      'Classical frameworks discuss Vatavyadhi patterns affecting movement, speech and sensation. Care emphasises stabilizing Vata, protecting depleted tissues, improving local circulation through external therapies, and supporting digestion and sleep — always as complementary, staged care rather than a promised reversal of established damage.',
    symptoms: [
      'Post-stroke weakness or spasticity',
      'Speech and swallowing difficulty (as part of multi-disciplinary plans)',
      'Balance and coordination challenges',
      'Caregiver burden and palliative comfort needs',
    ],
    approach: [
      'Family-inclusive goal setting',
      'External neurological therapies as clinically appropriate',
      'Internal supportive medicines',
      'Physiotherapy collaboration',
      'Palliative comfort-focused pathways when recovery plateaus',
    ],
    whoNeeds: [
      'Families seeking post-stroke rehab support',
      'Patients needing structured inpatient neurological care routines',
      'Those exploring Ayurvedic adjuncts alongside existing medical care',
    ],
    relatedTreatmentIds: ['abhyanga', 'panchakarma', 'shirodhara', 'vasti'],
    relatedPackageIds: ['16-day', '7-day', 'rejuvenation'],
    leadDoctorIds: ['dr-krishnakumar'],
    faqs: [
      {
        q: 'Does Ayurveda replace emergency stroke care?',
        a: 'No. Acute stroke is a medical emergency. Our unit focuses on post-event rehabilitation and supportive care after stabilisation under appropriate medical services.',
      },
    ],
  },
  {
    id: 'rheumatology',
    slug: 'rheumatology-autoimmune',
    name: 'Rheumatology',
    shortName: 'Rheumatology',
    tagline: 'Auto-immune and connective-tissue patterns approached with staged, educational Ayurvedic care.',
    aiSummary:
      'Susrutha addresses rheumatological and auto-immune connective-tissue concerns through staged Ayurvedic assessment, Ama-focused care where relevant, and carefully paced external and internal therapies.',
    overview:
      'Joint swelling, stiffness and systemic fatigue in auto-immune spectra require humility and pacing. We educate patients on Ayurvedic understanding, reduce aggravating factors, and build sustainable routines — without claiming disease cure.',
    ayurvedicView:
      'Many inflammatory joint patterns are discussed in relation to Ama, impaired Agni and aggravated Vata-Pitta dynamics. Therapy often begins with deepana-pachana logic before heavier oleation or elimination, depending on presentation.',
    symptoms: [
      'Morning stiffness',
      'Migratory or persistent joint pain',
      'Fatigue with inflammatory flares',
      'Reduced grip or mobility',
    ],
    approach: [
      'Stage-sensitive assessment (Ama vs depletion)',
      'Diet and routine counselling',
      'Local therapies when inflammation allows',
      'Supervised Panchakarma only when appropriate',
      'Coordination with ongoing rheumatology care when present',
    ],
    whoNeeds: [
      'People with chronic inflammatory joint complaints',
      'Patients seeking lifestyle-integrated supportive care',
    ],
    relatedTreatmentIds: ['panchakarma', 'abhyanga', 'kizhi', 'vasti'],
    relatedPackageIds: ['7-day', '16-day', 'rejuvenation'],
    leadDoctorIds: ['dr-krishnakumar'],
    faqs: [
      {
        q: 'Can I continue my allopathic medicines?',
        a: 'Do not stop prescribed medicines without your treating physician\'s advice. We design supportive plans that respect your existing medical care.',
      },
    ],
  },
  {
    id: 'womens-health',
    slug: 'womens-health-fertility',
    name: "Women's Health & Fertility",
    shortName: "Women's Health",
    tagline: 'Prasuti Tantra & Stree Roga led by Dr. Priyanka R. — menstrual, fertility and postnatal continuum.',
    aiSummary:
      "Led by Specialist Director Dr. Priyanka R., Susrutha's women's health programme covers menstrual and hormonal wellness, fertility-supportive Ayurveda, and postnatal Sutika care.",
    overview:
      "Women's health at Susrutha is a dedicated clinical vertical — not an afterthought. From irregular cycles and preconception care to postnatal recovery, protocols are life-stage aware and privacy-respecting.",
    ayurvedicView:
      'Classical Stree Roga and Prasuti Tantra emphasise Artava, Garbhashaya health, Agni and mental composure. Sutika (postnatal) care traditionally protects depleted tissues and supports lactation and recovery through diet, rest and gentle therapies.',
    symptoms: [
      'Irregular or painful menstruation',
      'Fertility-related concerns seeking supportive care',
      'Postnatal exhaustion and recovery needs',
      'Hormonal wellness concerns in educational framing',
    ],
    approach: [
      'Confidential specialist consultation',
      'Cycle and constitution-informed plans',
      'Postnatal OP/IP packages',
      'Supportive therapies and dietetics',
      'Referral awareness for conditions needing conventional obstetrics/gynaecology',
    ],
    whoNeeds: [
      'Women seeking Ayurvedic gynaecology consultation in Trivandrum',
      'Postnatal mothers wanting structured Sutika support',
      'Couples exploring fertility-supportive lifestyle and Ayurveda care',
    ],
    relatedTreatmentIds: ['panchakarma', 'abhyanga', 'shirodhara', 'rejuvenation-therapy'],
    relatedPackageIds: ['postnatal', 'rejuvenation', '7-day', '5-day'],
    leadDoctorIds: ['dr-priyanka', 'dr-sreeja'],
    faqs: [
      {
        q: 'Do you provide emergency obstetric care?',
        a: 'Susrutha is an Ayurveda hospital. Emergency obstetric situations require appropriate conventional emergency services. Our focus is Ayurvedic women\'s health, fertility support and postnatal recovery pathways.',
      },
    ],
  },
  {
    id: 'developmental-paediatrics',
    slug: 'developmental-paediatrics',
    name: 'Developmental Paediatrics',
    shortName: 'Paediatrics',
    tagline: 'Gentle, family-centred Ayurvedic support for developmental concerns — always in responsible clinical bounds.',
    aiSummary:
      'Susrutha offers developmental paediatrics support within Ayurvedic clinical frameworks, emphasising family education, gentle therapies and collaboration with broader paediatric care when needed.',
    overview:
      'Children\'s care demands extra caution. We focus on supportive Ayurvedic approaches, parental guidance and age-appropriate therapies — never replacing essential paediatric medical care.',
    ayurvedicView:
      'Kaumarabhritya traditions stress digestion, immunity (Vyadhikshamatva), routine and nourishment. Interventions are lighter, shorter and closely observed.',
    symptoms: [
      'Developmental support needs as advised by clinicians',
      'Recurrent mild constitutional complaints',
      'Parental guidance for routine and diet',
    ],
    approach: [
      'Family interview and gentle assessment',
      'Age-appropriate external therapies when indicated',
      'Diet and routine coaching',
      'Clear boundaries with conventional paediatrics',
    ],
    whoNeeds: ['Families referred for supportive Ayurvedic paediatric input'],
    relatedTreatmentIds: ['abhyanga', 'rejuvenation-therapy'],
    relatedPackageIds: ['3-day', '5-day'],
    leadDoctorIds: ['dr-priyanka', 'dr-krishnakumar'],
    faqs: [
      {
        q: 'Are Panchakarma procedures used in children?',
        a: 'Paediatric protocols differ substantially from adult Panchakarma. Any therapy is age-adjusted, conservative and clinician-directed after assessment.',
      },
    ],
  },
  {
    id: 'preventive-medicine',
    slug: 'preventive-medicine-rasayana',
    name: 'Preventive Medicine (Rasayana / Ritucharya)',
    shortName: 'Preventive Care',
    tagline: 'Seasonal living, tissue nourishment and sustainable vitality — prevention as a clinical discipline.',
    aiSummary:
      'Susrutha\'s preventive medicine vertical applies Rasayana and Ritucharya principles for seasonal alignment, tissue nourishment and long-term vitality under physician guidance.',
    overview:
      'Prevention in Ayurveda is not generic wellness. It is physician-guided alignment of diet, sleep, seasonal conduct and selective rejuvenation therapies based on constitution and life stage.',
    ayurvedicView:
      'Ritucharya adapts routine to seasons; Rasayana aims to nourish tissues and resilience. Both require adequate Agni and individualisation — not one-size detox marketing.',
    symptoms: [
      'Seasonal fatigue or recurrent low immunity patterns',
      'Burnout in high-stress professionals',
      'Interest in structured rejuvenation rather than spa packages',
    ],
    approach: [
      'Constitution and lifestyle mapping',
      'Seasonal dietetics',
      'Selective Rasayana therapies',
      'Short and extended care packages',
    ],
    whoNeeds: [
      'Professionals seeking structured reset',
      'Adults wanting preventive Ayurveda with medical oversight',
    ],
    relatedTreatmentIds: ['rejuvenation-therapy', 'abhyanga', 'shirodhara', 'panchakarma'],
    relatedPackageIds: ['rejuvenation', '3-day', '5-day', '7-day'],
    leadDoctorIds: ['dr-krishnakumar', 'dr-sreeja'],
    faqs: [
      {
        q: 'Is Rasayana the same as a detox package?',
        a: 'No. Popular “detox” language often oversimplifies. Rasayana is tissue-nourishing and may follow proper preparatory care; it is not automatically a cleanse.',
      },
    ],
  },
  {
    id: 'general-medicine',
    slug: 'general-medicine-chronic-disease',
    name: 'General Medicine (Chronic Disease)',
    shortName: 'General Medicine',
    tagline: 'Long-view care for chronic patterns — digestion, metabolism, energy and daily function.',
    aiSummary:
      'Susrutha\'s general medicine practice supports chronic disease patterns through Ayurvedic assessment of Agni, tissues and routine, with educational plans and hospital-backed therapy options.',
    overview:
      'Many patients arrive with multi-year stories: fluctuating energy, digestive irregularity, metabolic concerns and medication fatigue. We offer structured Ayurvedic evaluation and supportive programmes alongside — not against — necessary conventional care.',
    ayurvedicView:
      'Chronic disease is often read through Agni, Ama, dhatu status and dosha chronology. Plans prioritise digestive stability and gradual systemic care over aggressive one-week transformations.',
    symptoms: [
      'Long-standing digestive irregularity',
      'Metabolic lifestyle concerns',
      'Low energy and poor recovery',
      'Multiple overlapping chronic complaints',
    ],
    approach: [
      'Comprehensive OP assessment',
      'Medicine and diet planning',
      'IP therapy when intensity requires supervision',
      'Follow-up oriented care',
    ],
    whoNeeds: ['Adults with chronic, non-emergency patterns seeking Ayurvedic hospital care'],
    relatedTreatmentIds: ['panchakarma', 'vasti', 'abhyanga', 'rejuvenation-therapy'],
    relatedPackageIds: ['7-day', '16-day', '5-day'],
    leadDoctorIds: ['dr-krishnakumar', 'dr-sreeja', 'dr-vinaya'],
    faqs: [
      {
        q: 'Do you diagnose medical conditions here?',
        a: 'Our physicians provide Ayurvedic clinical assessment. We may recommend lab work via our diagnostics vertical and urge conventional evaluation when signs warrant it. We do not replace your primary medical physician for emergency or specialist allopathic needs.',
      },
    ],
  },
  {
    id: 'anorectal',
    slug: 'anorectal-proctology',
    name: 'Ano-Rectal / Proctology (Piles & Fistula)',
    shortName: 'Proctology',
    tagline: 'Kshara Sutra and ano-rectal care led by Dr. Dipu Sukumar.',
    aiSummary:
      'Susrutha\'s proctology unit, associated with Dr. Dipu Sukumar, focuses on piles and fistula care including Kshara Sutra, with procedure counselling and structured aftercare.',
    overview:
      'Piles and fistula affect comfort, work and dignity. Our ano-rectal unit provides specialty assessment, Kshara Sutra pathways where indicated, and clear recovery guidance inside a hospital setting with OT support.',
    ayurvedicView:
      'Arsha (piles) and Bhagandara (fistula) are classical surgical domains of Ayurveda. Kshara Sutra is a time-honoured para-surgical approach for certain fistulous tracts, chosen after proper examination.',
    symptoms: [
      'Bleeding or pain during bowel movements',
      'Perianal swelling or discomfort',
      'Recurrent fistula-related discharge',
      'Chronic constipation contributing to ano-rectal strain',
    ],
    approach: [
      'Specialty proctology consultation',
      'Procedure counselling with realistic timelines',
      'Kshara Sutra where clinically appropriate',
      'Diet and bowel-habit rehabilitation',
      'Aftercare and follow-up',
    ],
    whoNeeds: [
      'Patients with piles or fistula seeking Ayurvedic specialty care',
      'Those counselled for Kshara Sutra evaluation',
    ],
    relatedTreatmentIds: ['kshara-sutra'],
    relatedPackageIds: ['anorectal-care'],
    leadDoctorIds: ['dr-dipu'],
    faqs: [
      {
        q: 'Is Kshara Sutra suitable for every fistula?',
        a: 'No. Suitability depends on tract anatomy, infection status and overall health. Assessment comes first; alternatives are discussed when Kshara Sutra is not appropriate.',
      },
    ],
  },
];

export function getSpecialtyBySlug(slug: string) {
  return specialties.find((s) => s.slug === slug);
}
