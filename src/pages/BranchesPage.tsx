import { useEffect } from 'react';
import { branches } from '../data/site';
import { getDoctorsByBranch } from '../data/doctors';
import { Breadcrumbs, Button, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function BranchesPage() {
  useEffect(() => {
    document.title = pageTitle('Branches');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Locations"
        title="Kattakada hospital & Kowdiar OP"
        description="Two access points in Thiruvananthapuram — full inpatient infrastructure at Kattakada, city outpatient convenience at Kowdiar since June 2022."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Branches' }]} />
        <div className="grid gap-8 lg:grid-cols-2">
          {branches.map((b) => {
            const docs = getDoctorsByBranch(b.id);
            return (
              <article key={b.id} className="overflow-hidden rounded-[1.75rem] border border-sus-green/10 bg-white">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={b.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-sus-gold">{b.type}</p>
                  <h2 className="mt-2 font-display text-3xl text-sus-green-deep">{b.name}</h2>
                  <p className="mt-2 text-sm text-sus-muted">{b.address}</p>
                  <p className="mt-4 text-sus-muted leading-relaxed">{b.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {b.features.map((f) => (
                      <li key={f} className="rounded-full bg-sus-sand/70 px-3 py-1 text-xs text-sus-green-deep">{f}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-sus-ink">{docs.length} doctors listed with this branch</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button to={`/branches/${b.slug}`}>Branch details</Button>
                    <Button
                      href={`https://www.google.com/maps/search/?api=1&query=${b.mapQuery}`}
                      variant="secondary"
                    >
                      Directions
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-sus-green/10 bg-sus-sand/40 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-sus-green-deep">Looking for cottage stays?</h3>
            <p className="text-sm text-sus-muted mt-1">Susrutha Ayurveda Gramam — private cottages near the airport corridor.</p>
          </div>
          <Button to="/ayur-village" variant="secondary">Ayur Village</Button>
        </div>
      </div>
    </div>
  );
}
