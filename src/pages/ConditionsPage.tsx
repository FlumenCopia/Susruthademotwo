import { useEffect } from 'react';
import { specialties } from '../data/specialties';
import { Breadcrumbs, CardLink, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function ConditionsPage() {
  useEffect(() => {
    document.title = pageTitle('Conditions & Specialities');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Conditions"
        title="How Susrutha approaches key clinical clusters"
        description="Eight speciality pathways with Ayurvedic understanding, symptoms, doctors and packages — educational, consultation-first."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Conditions' }]} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <CardLink key={s.id} to={`/conditions/${s.slug}`} title={s.name} description={s.tagline} meta="Speciality pathway" />
          ))}
        </div>
      </div>
    </div>
  );
}
