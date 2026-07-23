import { useEffect } from 'react';
import { ayurVillage } from '../data/site';
import { Breadcrumbs, Button, PageHero, SectionHeading } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function AyurVillagePage() {
  useEffect(() => {
    document.title = pageTitle(ayurVillage.name);
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Stay & heal"
        title={ayurVillage.name}
        description={`${ayurVillage.cottages} traditional Kerala cottages with private treatment rooms — ${ayurVillage.distance}.`}
      >
        <Button to="/package-enquiry">Enquire for a stay</Button>
      </PageHero>
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Ayur Village' }]} />
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <img src={ayurVillage.image} alt="Traditional Kerala cottage in green setting" className="rounded-[1.75rem] aspect-[4/3] object-cover w-full" />
          <div>
            <SectionHeading title="An experience of privacy, not performance" description={ayurVillage.description} />
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {ayurVillage.features.map((f) => (
                <li key={f} className="rounded-xl border border-sus-green/10 bg-white px-4 py-3 text-sm text-sus-ink">{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-16">
          <SectionHeading eyebrow="Ideal for" title="Who thrives at the Gramam" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ayurVillage.idealFor.map((item) => (
              <div key={item} className="rounded-2xl bg-sus-green-deep text-sus-cream p-6">
                <p className="font-display text-xl leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[1.75rem] border border-sus-green/10 bg-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-sus-green-deep">Plan cottage-based care</h2>
            <p className="mt-2 text-sus-muted max-w-xl">Pair Ayur Village privacy with hospital clinical oversight. Package duration and therapy mix are physician-directed.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/package-enquiry">Send enquiry</Button>
            <Button to="/international-patients" variant="secondary">International guidance</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
