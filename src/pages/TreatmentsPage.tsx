import { useEffect } from 'react';
import { treatments } from '../data/treatments';
import { Breadcrumbs, CardLink, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function TreatmentsPage() {
  useEffect(() => {
    document.title = pageTitle('Treatments & Therapies');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Therapies"
        title="Treatments with clinical pages — not collapsed blurbs."
        description="Each therapy explains what it is, who it may suit, procedure steps, safety notes and related packages. Educational framing only."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Treatments' }]} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <CardLink
              key={t.id}
              to={`/treatments/${t.slug}`}
              title={t.name}
              description={t.aiSummary}
              meta={t.category}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
