export type Treatment = {
  id: string;
  slug: string;
  name: string;
  malayalam?: string;
  category: string;
  aiSummary: string;
  overview: string;
  conditions: string[];
  whoNeeds: string[];
  benefits: string[];
  procedure: { step: string; detail: string }[];
  duration: string;
  preparation: string[];
  aftercare: string[];
  safety: string[];
  avoid: string[];
  doctorIds: string[];
  relatedPackageIds: string[];
  faqs: { q: string; a: string }[];
  image?: string;
};

export const treatments: Treatment[] = [
  {
    id: 'panchakarma',
    slug: 'panchakarma',
    name: 'Panchakarma',
    malayalam: 'പഞ്ചകർമ്മം',
    category: 'Core Hospital Therapy',
    aiSummary:
      'Panchakarma at Susrutha is a physician-directed sequence of preparatory, eliminative and rejuvenative therapies delivered in a hospital setting with separate male and female therapy suites.',
    overview:
      'Panchakarma is not a spa menu. It is a classical framework of bio-purificatory care — carefully paced preparatory oleation and fomentation, selected elimination procedures, and structured aftercare. At Susrutha, protocols are supervised inside a 40-bed hospital with dedicated therapists.',
    conditions: [
      'Chronic musculoskeletal patterns',
      'Selected neurological rehab contexts',
      'Skin conditions as clinically staged',
      'Stress-linked systemic imbalance',
      'Pre-rejuvenation preparation',
    ],
    whoNeeds: [
      'Patients advised multi-day supervised therapy',
      'Those with chronic patterns unresponsive to OP care alone',
      'Guests planning authentic Kerala Panchakarma with medical oversight',
    ],
    benefits: [
      'Structured, supervised classical care pathway',
      'Opportunity to reset routine, diet and sleep under guidance',
      'Integration with physiotherapy and inpatient monitoring where needed',
      'Educational understanding of constitution and triggers',
    ],
    procedure: [
      { step: 'Assessment', detail: 'Physician evaluation of constitution, disease stage, Agni and fitness for procedures.' },
      { step: 'Purvakarma', detail: 'Preparatory oleation (Snehana) and fomentation (Swedana) as indicated.' },
      { step: 'Pradhana karma', detail: 'Selected primary procedures (e.g. Vasti, Virechana, Nasya) based on prescription — not a fixed tourist package.' },
      { step: 'Paschat karma', detail: 'Graduated diet, rest and Rasayana support to stabilise results.' },
      { step: 'Follow-up', detail: 'Discharge guidance and review planning.' },
    ],
    duration: 'Typically several days to multi-week programmes (e.g. 7–16 day care packages); exact length is prescription-based.',
    preparation: [
      'Share full medication and medical history',
      'Arrive with realistic time for rest — this is not sightseeing-first care',
      'Follow pre-admission diet notes from your physician',
    ],
    aftercare: [
      'Gradual return to routine and exercise',
      'Prescribed diet window after elimination therapies',
      'Scheduled review rather than one-off discharge',
    ],
    safety: [
      'Hospital monitoring for inpatient procedures',
      'Therapists trained for classical Kerala protocols',
      'Separate male/female Panchakarma rooms',
    ],
    avoid: [
      'Unsupervised aggressive “detox” expectations',
      'Concealing pregnancy, acute infection or unstable medical conditions',
      'Self-directing procedure selection from marketing lists',
    ],
    doctorIds: ['dr-krishnakumar', 'dr-sreeja', 'dr-sasidharan'],
    relatedPackageIds: ['7-day', '16-day', '5-day', 'rejuvenation'],
    image: '/images/panchakarma.jpg',
    faqs: [
      {
        q: 'Is every guest given all five procedures?',
        a: 'No. “Pancha” names a classical set of therapeutic possibilities. Your physician selects what is appropriate — sometimes the most important decision is what not to do.',
      },
      {
        q: 'Can Panchakarma cure chronic disease?',
        a: 'We do not promise cures. Panchakarma may support symptom burden, routine and systemic balance as part of a broader plan. Outcomes vary by condition, stage and adherence.',
      },
    ],
  },
  {
    id: 'abhyanga',
    slug: 'abhyanga',
    name: 'Abhyanga',
    malayalam: 'അഭ്യംഗം',
    category: 'External Therapy',
    aiSummary:
      'Abhyanga is a warm herbal-oil massage therapy used at Susrutha for Vata pacification, tissue nourishment and as preparation within broader treatment plans.',
    overview:
      'Abhyanga uses warm medicated oils applied in rhythmic strokes. Beyond relaxation, it is a clinical external therapy prescribed for specific indications and oil choices matched to the patient.',
    conditions: ['Vata-predominant stiffness', 'Stress-linked tension', 'Rejuvenation programmes', 'Neurological supportive care'],
    whoNeeds: ['Patients prescribed oleation', 'Guests on multi-day care packages', 'Those with dry, stiff Vata patterns'],
    benefits: ['Supports relaxation and sleep quality', 'Prepares body for further therapies', 'Nourishes skin and peripheral tissues educationally framed'],
    procedure: [
      { step: 'Oil selection', detail: 'Physician-directed medicated oil choice.' },
      { step: 'Application', detail: 'Warm oil massage by trained therapists in dedicated rooms.' },
      { step: 'Rest', detail: 'Post-therapy rest; may be followed by Swedana or bath as advised.' },
    ],
    duration: 'Session-based; often repeated across a care programme.',
    preparation: ['Inform therapists of skin sensitivity', 'Avoid heavy meal immediately before'],
    aftercare: ['Rest; avoid cold exposure', 'Follow bath and diet notes'],
    safety: ['Performed by trained therapists', 'Oil temperature and pressure adjusted'],
    avoid: ['Certain acute fevers or skin infections — physician decides'],
    doctorIds: ['dr-krishnakumar', 'dr-sreeja', 'dr-priyanka'],
    relatedPackageIds: ['3-day', '5-day', '7-day', 'rejuvenation', 'stress-care'],
    image: '/images/panchakarma.jpg',
    faqs: [
      {
        q: 'Is Abhyanga the same as spa massage?',
        a: 'The sensory experience may feel calming, but clinical Abhyanga is prescription-led: oil, duration and sequence differ from generic spa massage.',
      },
    ],
  },
  {
    id: 'shirodhara',
    slug: 'shirodhara',
    name: 'Shirodhara',
    category: 'External Therapy',
    aiSummary:
      'Shirodhara is a continuous stream of warm oil or liquid over the forehead, used at Susrutha in selected stress, sleep and neurological-support contexts under physician guidance.',
    overview:
      'Shirodhara is a signature Kerala therapy often indicated for mental fatigue, sleep disturbance and selected Vata-linked head-neck patterns. It is scheduled as part of a plan, not as entertainment.',
    conditions: ['Stress care', 'Sleep disturbance', 'Selected headache patterns', 'Supportive neuro programmes'],
    whoNeeds: ['Patients with stress-linked complaints', 'Guests on rejuvenation or stress packages'],
    benefits: ['Deep rest opportunity', 'Supports nervous system calm in traditional framing', 'Complements counselling and routine repair'],
    procedure: [
      { step: 'Positioning', detail: 'Comfortable supine positioning with forehead exposed.' },
      { step: 'Dhara', detail: 'Steady stream of prescribed liquid for a set duration.' },
      { step: 'Rest', detail: 'Quiet rest afterwards; avoid sudden stimulation.' },
    ],
    duration: 'Session-based within multi-day programmes.',
    preparation: ['Arrive mentally unrushed', 'Share blood-pressure and medication history'],
    aftercare: ['Protect head from wind/cold as advised', 'Light routine for the remainder of day'],
    safety: ['Vital context reviewed by clinical team'],
    avoid: ['Certain acute ear/eye/scalp conditions — case by case'],
    doctorIds: ['dr-sreeja', 'dr-krishnakumar', 'dr-priyanka'],
    relatedPackageIds: ['stress-care', 'rejuvenation', '5-day', '7-day'],
    image: '/images/herbs-mortar.jpg',
    faqs: [
      {
        q: 'Will one Shirodhara session fix chronic insomnia?',
        a: 'Unlikely as a standalone event. Sleep patterns usually need routine, medicine and multi-session care where indicated.',
      },
    ],
  },
  {
    id: 'kizhi',
    slug: 'kizhi',
    name: 'Kizhi (Herbal Bolus Fomentation)',
    category: 'External Therapy',
    aiSummary:
      'Kizhi uses warm herbal boluses for local fomentation, commonly prescribed at Susrutha for joint and spine-related stiffness patterns.',
    overview:
      'Medicated powders or leaves tied in cloth boluses are warmed and applied rhythmically. Different Kizhi types suit different stages — inflammatory vs degenerative presentations are not treated identically.',
    conditions: ['Neck and back stiffness', 'Joint pain patterns', 'Occupational musculoskeletal strain'],
    whoNeeds: ['Spine and joint patients', 'Tekky/occupational care guests'],
    benefits: ['Local warmth and circulation support', 'Complements Abhyanga and Basti therapies', 'Part of structured pain-care packages'],
    procedure: [
      { step: 'Type selection', detail: 'Physician chooses bolus type and medium.' },
      { step: 'Fomentation', detail: 'Rhythmic application to target regions.' },
      { step: 'Aftercare', detail: 'Rest and possible oil application.' },
    ],
    duration: 'Session-based across care days.',
    preparation: ['Report acute inflammation or skin breaks'],
    aftercare: ['Avoid immediate cold exposure to treated areas'],
    safety: ['Temperature carefully managed by therapists'],
    avoid: ['Unsupervised heat on acute hot inflammation without advice'],
    doctorIds: ['dr-krishnakumar'],
    relatedPackageIds: ['low-back-pain', 'neck-pain', 'tekky', '7-day'],
    image: '/images/herbs-mortar.jpg',
    faqs: [
      {
        q: 'Does Kizhi replace imaging or orthopaedic advice?',
        a: 'No. Red-flag neurological deficits and traumatic injuries need appropriate conventional evaluation. Kizhi is a supportive therapy within a clinical plan.',
      },
    ],
  },
  {
    id: 'kati-basti',
    slug: 'kati-basti',
    name: 'Kati Basti / Greeva Basti',
    category: 'Localised Therapy',
    aiSummary:
      'Kati Basti and Greeva Basti hold warm medicated oil over the lower back or neck in a dough reservoir — targeted care for regional spine complaints at Susrutha.',
    overview:
      'A ring of dough seals warm oil over cervical or lumbar regions. This localised oleation is frequently paired with broader musculoskeletal programmes for desk professionals and degenerative spine patterns.',
    conditions: ['Chronic low-back discomfort', 'Cervical stiffness', 'Occupational spine strain'],
    whoNeeds: ['Patients in neck or low-back care packages', 'IT/desk professionals on Tekky programmes'],
    benefits: ['Focused local therapy', 'Complements posture rehab', 'Comfort-oriented sessions within a medical plan'],
    procedure: [
      { step: 'Reservoir', detail: 'Dough ring placed over target spine region.' },
      { step: 'Oil hold', detail: 'Warm medicated oil retained for prescribed time.' },
      { step: 'Close', detail: 'Oil removed; gentle local care as advised.' },
    ],
    duration: 'Repeated sessions across a package.',
    preparation: ['Wear comfortable clothing', 'Share surgical/spine history'],
    aftercare: ['Mindful movement; avoid sudden heavy lifting'],
    safety: ['Performed on therapy tables by trained staff'],
    avoid: ['Open wounds at application site'],
    doctorIds: ['dr-krishnakumar'],
    relatedPackageIds: ['low-back-pain', 'neck-pain', 'tekky'],
    image: '/images/panchakarma.jpg',
    faqs: [
      {
        q: 'Is this a substitute for surgery?',
        a: 'No therapy here is marketed as a universal surgery alternative. Suitability and expectations are set in consultation based on your clinical picture.',
      },
    ],
  },
  {
    id: 'vasti',
    slug: 'vasti',
    name: 'Vasti (Medicated Enema Therapy)',
    category: 'Panchakarma Procedure',
    aiSummary:
      'Vasti is a cornerstone Panchakarma procedure using medicated decoctions or oils rectally, prescribed at Susrutha for selected Vata-predominant systemic and musculoskeletal patterns.',
    overview:
      'In classical practice, Vasti is among the most important therapies for Vata. It is never a casual add-on; preparation, type (oil vs decoction), dose and aftercare are physician-controlled.',
    conditions: ['Selected Vata disorders', 'Chronic musculoskeletal patterns', 'Certain neurological support contexts'],
    whoNeeds: ['Patients cleared for Pradhana karma after assessment'],
    benefits: ['Central procedure within authentic Panchakarma', 'Systemic Vata-oriented care in classical framing'],
    procedure: [
      { step: 'Preparation', detail: 'Purvakarma as required; bowel and diet readiness.' },
      { step: 'Administration', detail: 'Medicated oil or decoction Vasti per prescription.' },
      { step: 'Observation', detail: 'Post-procedure monitoring and diet.' },
    ],
    duration: 'Embedded in multi-day inpatient or supervised programmes.',
    preparation: ['Full disclosure of anorectal and medical history', 'Strict diet compliance pre-procedure'],
    aftercare: ['Paschat karma diet', 'Rest; graded activity only'],
    safety: ['Hospital setting; clinician oversight'],
    avoid: ['Self-administration; contraindicated acute states'],
    doctorIds: ['dr-krishnakumar', 'dr-sasidharan'],
    relatedPackageIds: ['7-day', '16-day', 'panchakarma-linked'],
    image: '/images/hospital-room.jpg',
    faqs: [
      {
        q: 'Is Vasti uncomfortable?',
        a: 'Sensations vary. Our team explains the process beforehand. Discomfort should be reported immediately — communication is part of safe care.',
      },
    ],
  },
  {
    id: 'kshara-sutra',
    slug: 'kshara-sutra',
    name: 'Kshara Sutra',
    category: 'Para-surgical Care',
    aiSummary:
      'Kshara Sutra is an Ayurvedic para-surgical thread technique used at Susrutha for selected fistula-in-ano cases after specialty proctology assessment by Dr. Dipu Sukumar.',
    overview:
      'Kshara Sutra involves a medicated thread used in the management of certain fistulous tracts. It requires proper examination, sterile procedure conditions and committed aftercare visits.',
    conditions: ['Selected fistula-in-ano (Bhagandara)', 'Related ano-rectal indications as assessed'],
    whoNeeds: ['Patients evaluated as suitable candidates after proctology consult'],
    benefits: ['Classical specialty option for indicated fistula cases', 'Hospital OT-backed procedural setting', 'Structured follow-up culture'],
    procedure: [
      { step: 'Assessment', detail: 'Specialty examination and counselling on options.' },
      { step: 'Procedure', detail: 'Thread placement under appropriate clinical conditions.' },
      { step: 'Changes & healing', detail: 'Scheduled thread changes and wound care as protocol demands.' },
      { step: 'Recovery', detail: 'Diet, hygiene and activity guidance until healing.' },
    ],
    duration: 'Multi-visit course; total duration depends on tract and healing response.',
    preparation: ['Pre-procedure investigations as advised', 'Plan time off for recovery visits'],
    aftercare: ['Wound hygiene', 'Fibre-rich diet and bowel regulation', 'Keep all follow-ups'],
    safety: ['Performed in hospital procedural context', 'Infection vigilance'],
    avoid: ['Delaying care for progressive infection', 'Ignoring fever or escalating pain after procedure'],
    doctorIds: ['dr-dipu'],
    relatedPackageIds: ['anorectal-care'],
    image: '/images/hospital-room.jpg',
    faqs: [
      {
        q: 'Is every piles case treated with Kshara Sutra?',
        a: 'No. Piles (Arsha) and fistula have different pathways. Many piles presentations are managed without Kshara Sutra. Specialty assessment decides.',
      },
    ],
  },
  {
    id: 'rejuvenation-therapy',
    slug: 'rejuvenation-rasayana-therapies',
    name: 'Rejuvenation & Rasayana Therapies',
    category: 'Preventive & Restorative',
    aiSummary:
      'Rejuvenation programmes at Susrutha combine physician-guided therapies, rest and dietetics oriented toward Rasayana principles — distinct from generic spa holidays.',
    overview:
      'True Rasayana begins when digestion and routine can support nourishment. Our rejuvenation offerings pair external therapies with rest architecture — hospital rooms or Ayur Village cottages — under clinical direction.',
    conditions: ['Burnout and preventive reset', 'Post-illness recovery support', 'Seasonal rejuvenation goals'],
    whoNeeds: ['Professionals needing structured restoration', 'International guests seeking authentic care', 'Postnatal mothers on appropriate timelines'],
    benefits: ['Medical oversight rather than pure hospitality', 'Custom pace and therapy mix', 'Optional Ayur Village privacy'],
    procedure: [
      { step: 'Consult', detail: 'Goals, constitution and contraindications mapped.' },
      { step: 'Therapy plan', detail: 'Abhyanga, Shirodhara and other therapies as fit.' },
      { step: 'Diet & sleep', detail: 'Simple, warm, digestible meals and rest hygiene.' },
      { step: 'Discharge plan', detail: 'Home routine to retain gains.' },
    ],
    duration: '3 to 16+ days depending on package and prescription.',
    preparation: ['Block genuine recovery time', 'Share burnout medications and sleep aids used'],
    aftercare: ['Protect sleep schedule', 'Avoid immediately stacking intense travel or work sprints'],
    safety: ['Screened for fitness before intensive therapies'],
    avoid: ['Treating rejuvenation as nightlife-friendly tourism'],
    doctorIds: ['dr-sreeja', 'dr-krishnakumar', 'dr-priyanka'],
    relatedPackageIds: ['rejuvenation', '3-day', '5-day', '7-day'],
    image: '/images/ayur-village.jpg',
    faqs: [
      {
        q: 'Can I combine sightseeing with rejuvenation?',
        a: 'Light cultural exposure may be fine later in a stay, but effective rejuvenation needs protected rest hours. We advise against therapy-plus-exhausting tourism schedules.',
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentById(id: string) {
  return treatments.find((t) => t.id === id);
}
