import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTreatmentBySlug } from '../data/treatments';
import { doctors } from '../data/doctors';
import { packages } from '../data/packages';
import { AiSummary, Breadcrumbs, Button, FaqList, PageHero } from '../components/ui';
import { pageTitle, faqSchema } from '../lib/seo';

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const treatment = getTreatmentBySlug(slug || '');

  useEffect(() => {
    if (!treatment) return;
    document.title = pageTitle(treatment.name);
    document.getElementById('schema-faq-tx')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-faq-tx';
    el.text = JSON.stringify(faqSchema(treatment.faqs));
    document.head.appendChild(el);

    document.getElementById('schema-therapy')?.remove();
    const th = document.createElement('script');
    th.type = 'application/ld+json';
    th.id = 'schema-therapy';
    th.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalTherapy',
      name: treatment.name,
      description: treatment.aiSummary,
    });
    document.head.appendChild(th);
  }, [treatment]);

  if (!treatment) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Treatment not found</h1>
        <Button to="/treatments" className="mt-6">All treatments</Button>
      </div>
    );
  }

  const docs = doctors.filter((d) => treatment.doctorIds.includes(d.id));
  const pkgs = packages.filter((p) => treatment.relatedPackageIds.includes(p.id));

  return (
    <div>
      <PageHero eyebrow={treatment.category} title={treatment.name} description={treatment.malayalam ? `${treatment.malayalam} · Physician-directed therapy` : 'Physician-directed therapy'}>
        <Button to="/book">Book consultation</Button>
      </PageHero>
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Treatments', to: '/treatments' }, { label: treatment.name }]} />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <AiSummary text={treatment.aiSummary} reviewedBy={docs[0]?.name} />
            <section className="prose-sus">
              <h2 className="font-display text-3xl text-sus-green-deep">What it is</h2>
              <p>{treatment.overview}</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">Procedure</h2>
              <ol className="grid gap-3 sm:grid-cols-2">
                {treatment.procedure.map((step, i) => (
                  <li key={step.step} className="rounded-2xl border border-sus-green/10 bg-white p-5">
                    <span className="text-xs text-sus-gold uppercase tracking-wider">Step {i + 1}</span>
                    <h3 className="mt-1 text-lg text-sus-green-deep">{step.step}</h3>
                    <p className="mt-2 text-sm text-sus-muted">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="font-display text-2xl text-sus-green-deep">Benefits (educational)</h2>
                <ul className="mt-3 space-y-2 text-sm text-sus-muted list-disc pl-5">
                  {treatment.benefits.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl text-sus-green-deep">Who may need it</h2>
                <ul className="mt-3 space-y-2 text-sm text-sus-muted list-disc pl-5">
                  {treatment.whoNeeds.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </section>

            <section className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-sus-green/10 p-5">
                <h3 className="text-lg text-sus-green-deep">Preparation</h3>
                <ul className="mt-2 space-y-1 text-sm text-sus-muted list-disc pl-5">
                  {treatment.preparation.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-sus-green/10 p-5">
                <h3 className="text-lg text-sus-green-deep">Recovery / aftercare</h3>
                <ul className="mt-2 space-y-1 text-sm text-sus-muted list-disc pl-5">
                  {treatment.aftercare.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-sus-terracotta/20 bg-sus-cream p-5">
              <h2 className="font-display text-2xl text-sus-green-deep">Safety & who should avoid</h2>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm text-sus-muted">
                <div>
                  <p className="text-xs uppercase tracking-wider text-sus-gold mb-2">Safety notes</p>
                  <ul className="space-y-1 list-disc pl-5">{treatment.safety.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-sus-gold mb-2">Use caution / avoid without advice</p>
                  <ul className="space-y-1 list-disc pl-5">{treatment.avoid.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">FAQ</h2>
              <FaqList items={treatment.faqs} />
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Duration</p>
              <p className="mt-2 text-sm text-sus-ink leading-relaxed">{treatment.duration}</p>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Conditions often discussed</p>
              <ul className="mt-2 space-y-1 text-sm text-sus-muted">
                {treatment.conditions.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Doctors</p>
              <ul className="mt-2 space-y-2">
                {docs.map((d) => (
                  <li key={d.id}>
                    <Link to={`/doctors/${d.slug}`} className="text-sm font-medium text-sus-green hover:underline">{d.name}</Link>
                    <span className="block text-xs text-sus-muted">{d.qual}</span>
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
            <Button to="/book" className="w-full">Book consultation</Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
