import { articles, faqsGlobal, type SearchItem } from '../data/content';
import { doctors } from '../data/doctors';
import { packages } from '../data/packages';
import { brand } from '../data/site';
import { specialties } from '../data/specialties';
import { treatments } from '../data/treatments';
import { ecosystemVerticals, videoGallery } from '../data/enrichment';

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [
    {
      type: 'Page',
      title: 'Home',
      description: brand.positioning,
      path: '/',
      keywords: ['susrutha', 'ayurveda', 'hospital', 'kerala', 'trivandrum'],
    },
    {
      type: 'Page',
      title: 'About Susrutha',
      description: brand.legacyFraming,
      path: '/about',
      keywords: ['heritage', 'history', 'lineage', '1970', '1986', 'mission', 'vision'],
    },
    {
      type: 'Page',
      title: 'Book Appointment',
      description: 'Request an appointment at Kattakada or Kowdiar',
      path: '/book',
      keywords: ['book', 'appointment', 'consult', 'booking'],
    },
    {
      type: 'Page',
      title: 'Contact',
      description: 'Phones, email, branches and emergency contacts',
      path: '/contact',
      keywords: ['contact', 'phone', 'emergency', 'email', 'map'],
    },
    {
      type: 'Page',
      title: 'Ayur Village',
      description: 'Traditional cottages with private treatment rooms',
      path: '/ayur-village',
      keywords: ['gramam', 'cottage', 'airport', 'stay'],
    },
    {
      type: 'Page',
      title: 'International Patients',
      description: 'Medical travel support for authentic Kerala Ayurveda',
      path: '/international-patients',
      keywords: ['international', 'medical tourism', 'visa', 'travel'],
    },
    {
      type: 'Page',
      title: 'Branches',
      description: 'Kattakada hospital and Kowdiar OP centre',
      path: '/branches',
      keywords: ['kattakada', 'kowdiar', 'branch', 'location'],
    },
    {
      type: 'Page',
      title: 'Ecosystem',
      description: 'Pharma, lab, nursing school, trust and home consultation verticals',
      path: '/ecosystem',
      keywords: ['pharma', 'lab', 'nursing', 'trust', 'ecosystem'],
    },
    {
      type: 'Page',
      title: 'Video Gallery',
      description: 'YouTube-embedded video gallery with categories',
      path: '/videos',
      keywords: ['video', 'gallery', 'youtube', 'media'],
    },
  ];

  for (const v of ecosystemVerticals) {
    items.push({
      type: 'Page',
      title: v.name,
      description: v.aiSummary,
      path: `/ecosystem/${v.slug}`,
      keywords: [v.name, v.shortName, ...v.services],
    });
  }

  for (const v of videoGallery) {
    items.push({
      type: 'Page',
      title: v.title,
      description: v.description,
      path: '/videos',
      keywords: [v.title, v.category, 'video'],
    });
  }

  for (const t of treatments) {
    items.push({
      type: 'Treatment',
      title: t.name,
      description: t.aiSummary,
      path: `/treatments/${t.slug}`,
      keywords: [t.name, t.category, t.malayalam || '', ...t.conditions].map(String),
    });
  }

  for (const s of specialties) {
    items.push({
      type: 'Condition',
      title: s.name,
      description: s.aiSummary,
      path: `/conditions/${s.slug}`,
      keywords: [s.name, s.shortName, ...s.symptoms],
    });
  }

  for (const d of doctors) {
    items.push({
      type: 'Doctor',
      title: d.name,
      description: `${d.qual} · ${d.role}`,
      path: `/doctors/${d.slug}`,
      keywords: [d.name, d.qual, d.role, ...d.specializations, d.availability],
    });
  }

  for (const p of packages) {
    items.push({
      type: 'Package',
      title: p.name,
      description: p.summary,
      path: `/packages/${p.slug}`,
      keywords: [p.name, p.focus, p.durationLabel],
    });
  }

  for (const a of articles) {
    items.push({
      type: 'Article',
      title: a.title,
      description: a.excerpt,
      path: `/knowledge/${a.slug}`,
      keywords: [a.title, a.excerpt],
    });
  }

  for (const f of faqsGlobal) {
    items.push({
      type: 'FAQ',
      title: f.q,
      description: f.a,
      path: '/faq',
      keywords: [f.q, f.a],
    });
  }

  return items;
}

export function searchSite(query: string, limit = 8): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const index = buildSearchIndex();
  const scored = index
    .map((item) => {
      const hay = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
      let score = 0;
      if (item.title.toLowerCase().includes(q)) score += 10;
      if (hay.includes(q)) score += 5;
      const parts = q.split(/\s+/);
      for (const p of parts) {
        if (hay.includes(p)) score += 1;
      }
      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item);
  return scored;
}
