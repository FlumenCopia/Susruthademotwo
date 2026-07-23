import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPackageBySlug } from '../data/packages';
import { specialties } from '../data/specialties';
import { getTreatmentById } from '../data/treatments';
import { AiSummary, Breadcrumbs, Button, FaqList, PageHero } from '../components/ui';
import { pageTitle, faqSchema } from '../lib/seo';

export default function PackageDetailPage() {
  const { slug } = useParams();
  const pkg = getPackageBySlug(slug || '');

  useEffect(() => {
    if (!pkg) return;
    document.title = pageTitle(pkg.name);
    document.getElementById('schema-faq-pkg')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-faq-pkg';
    el.text = JSON.stringify(faqSchema(pkg.faqs));
    document.head.appendChild(el);
  }, [pkg]);

  if (!pkg) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Package not found</h1>
        <Button to="/packages" className="mt-6">All packages</Button>
      </div>
    );
  }

  const specs = specialties.filter((s) => pkg.relatedSpecialtyIds.includes(s.id));
  const txs = pkg.relatedTreatmentIds.map((id) => getTreatmentById(id)).filter(Boolean);

  return (
    <div>
      <PageHero eyebrow="Care package" title={pkg.name} description={pkg.durationLabel}>
        <Button to={`/package-enquiry?package=${pkg.slug}`}>Enquire now</Button>
      </PageHero>
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Packages', to: '/packages' }, { label: pkg.name }]} />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <AiSummary text={pkg.summary} />
            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Who it is for</h2>
              <ul className="mt-4 space-y-2 text-sus-muted list-disc pl-5">
                {pkg.whoFor.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">What is included</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {pkg.included.map((i) => (
                  <li key={i} className="rounded-xl border border-sus-green/10 bg-white px-4 py-3 text-sm text-sus-ink">{i}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Typical flow</h2>
              <ol className="mt-4 space-y-3">
                {pkg.dayFlow.map((d, i) => (
                  <li key={d} className="flex gap-3">
                    <span className="font-display text-xl text-sus-gold">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sus-muted">{d}</span>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Educational focus</h2>
              <p className="mt-3 text-sus-muted leading-relaxed">{pkg.focus}</p>
            </section>
            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">FAQ</h2>
              <FaqList items={pkg.faqs} />
            </section>
          </div>
          <aside className="space-y-5">
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Investment</p>
              <p className="mt-2 text-sus-ink">{pkg.priceNote}</p>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Add-ons</p>
              <ul className="mt-2 space-y-1 text-sm text-sus-muted list-disc pl-5">
                {pkg.addOns.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            {specs.length > 0 && (
              <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
                <p className="text-xs uppercase tracking-wider text-sus-gold">Related conditions</p>
                <ul className="mt-2 space-y-1">
                  {specs.map((s) => (
                    <li key={s.id}><Link to={`/conditions/${s.slug}`} className="text-sm text-sus-green hover:underline">{s.shortName}</Link></li>
                  ))}
                </ul>
              </div>
            )}
            {txs.length > 0 && (
              <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
                <p className="text-xs uppercase tracking-wider text-sus-gold">Therapies often involved</p>
                <ul className="mt-2 space-y-1">
                  {txs.map((t) => t && (
                    <li key={t.id}><Link to={`/treatments/${t.slug}`} className="text-sm text-sus-green hover:underline">{t.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
            <Button to={`/package-enquiry?package=${pkg.slug}`} className="w-full">Send enquiry</Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
