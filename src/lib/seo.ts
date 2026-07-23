import { brand } from '../data/site';

export function pageTitle(title?: string) {
  return title ? `${title} | ${brand.commonName}` : `${brand.commonName} — Authentic Kerala Ayurveda Hospital`;
}

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalClinic', 'Hospital'],
    name: brand.commonName,
    legalName: brand.legalName,
    url: 'https://susruthaayurveda.com',
    email: brand.contact.email,
    telephone: brand.contact.mobile,
    sameAs: [brand.contact.facebook, brand.contact.instagram],
    medicalSpecialty: 'Ayurvedic',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kattakada',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function physicianSchema(doc: {
  name: string;
  qual: string;
  role: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    name: doc.name,
    description: `${doc.qual} — ${doc.role}`,
    medicalSpecialty: 'Ayurvedic',
    url: `/doctors/${doc.slug}`,
    worksFor: { '@type': 'MedicalClinic', name: brand.commonName },
  };
}
