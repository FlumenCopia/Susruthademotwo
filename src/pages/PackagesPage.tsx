import { useEffect } from 'react';
import { packages } from '../data/packages';
import { Breadcrumbs, Button, CardLink, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function PackagesPage() {
  useEffect(() => {
    document.title = pageTitle('Care Packages');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Packages"
        title="Twelve structured care programmes"
        description="From occupational Tekky care to 16-day hospital programmes and specialty ano-rectal pathways. Prices on enquiry — plans remain clinical."
      >
        <Button to="/package-enquiry">Enquire about a package</Button>
      </PageHero>
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Packages' }]} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <CardLink
              key={p.id}
              to={`/packages/${p.slug}`}
              title={p.name}
              description={p.summary}
              meta={p.durationLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
