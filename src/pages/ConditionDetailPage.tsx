import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSpecialtyBySlug } from '../data/specialties';
import { doctors } from '../data/doctors';
import { packages } from '../data/packages';
import { getTreatmentById } from '../data/treatments';
import { AiSummary, Breadcrumbs, Button, FaqList, PageHero } from '../components/ui';
import { pageTitle, faqSchema } from '../lib/seo';

export default function ConditionDetailPage() {
  const { slug } = useParams();
  const condition = getSpecialtyBySlug(slug || '');

  useEffect(() => {
    if (!condition) return;
    document.title = pageTitle(condition.name);
    document.getElementById('schema-faq-cond')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-faq-cond';
    el.text = JSON.stringify(faqSchema(condition.faqs));
    document.head.appendChild(el);

    document.getElementById('schema-condition')?.remove();
    const c = document.createElement('script');
    c.type = 'application/ld+json';
    c.id = 'schema-condition';
    c.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: condition.name,
      description: condition.aiSummary,
    });
    document.head.appendChild(c);
  }, [condition]);

  if (!condition) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Condition page not found</h1>
        <Button to="/conditions" className="mt-6">All conditions</Button>
      </div>
    );
  }

  const docs = doctors.filter((d) => condition.leadDoctorIds.includes(d.id));
  const pkgs = packages.filter((p) => condition.relatedPackageIds.includes(p.id));
  const txs = condition.relatedTreatmentIds.map((id) => getTreatmentById(id)).filter(Boolean);

  return (
    <div>
      <PageHero eyebrow="Condition pathway" title={condition.name} description={condition.tagline}>
        <Button to="/book">Consult a physician</Button>
      </PageHero>
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Conditions', to: '/conditions' }, { label: condition.shortName }]} />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <AiSummary text={condition.aiSummary} reviewedBy={docs[0]?.name} />
            <section className="prose-sus">
              <h2 className="font-display text-3xl text-sus-green-deep">Overview</h2>
              <p>{condition.overview}</p>
              <h2 className="font-display text-3xl text-sus-green-deep">Ayurvedic understanding</h2>
              <p>{condition.ayurvedicView}</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Symptoms often discussed</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {condition.symptoms.map((s) => (
                  <li key={s} className="rounded-xl bg-white border border-sus-green/10 px-4 py-3 text-sm text-sus-muted">{s}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">How Susrutha approaches it</h2>
              <ol className="mt-4 space-y-3">
                {condition.approach.map((a, i) => (
                  <li key={a} className="flex gap-3 text-sus-muted">
                    <span className="font-display text-xl text-sus-gold">{String(i + 1).padStart(2, '0')}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">Related treatments</h2>
              <div className="flex flex-wrap gap-2">
                {txs.map((t) => t && (
                  <Link key={t.id} to={`/treatments/${t.slug}`} className="rounded-full border border-sus-green/15 px-3 py-1.5 text-sm text-sus-green hover:bg-white">
                    {t.name}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">FAQ</h2>
              <FaqList items={condition.faqs} />
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Who often seeks care</p>
              <ul className="mt-2 space-y-2 text-sm text-sus-muted list-disc pl-5">
                {condition.whoNeeds.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Relevant doctors</p>
              <ul className="mt-2 space-y-2">
                {docs.map((d) => (
                  <li key={d.id}>
                    <Link to={`/doctors/${d.slug}`} className="text-sm font-medium text-sus-green hover:underline">{d.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {pkgs.length > 0 && (
              <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
                <p className="text-xs uppercase tracking-wider text-sus-gold">Related packages</p>
                <ul className="mt-2 space-y-2">
                  {pkgs.map((p) => (
                    <li key={p.id}>
                      <Link to={`/packages/${p.slug}`} className="text-sm font-medium text-sus-green hover:underline">{p.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button to="/book" className="w-full">Request consultation</Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
