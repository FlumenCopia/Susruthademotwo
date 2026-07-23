import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDoctorBySlug } from '../data/doctors';
import { specialties } from '../data/specialties';
import { treatments } from '../data/treatments';
import { articles } from '../data/content';
import { branches } from '../data/site';
import { AiSummary, Breadcrumbs, Button, ConfirmSlot, FaqList, PageHero } from '../components/ui';
import { pageTitle, physicianSchema, faqSchema } from '../lib/seo';

export default function DoctorProfilePage() {
  const { slug } = useParams();
  const doctor = getDoctorBySlug(slug || '');

  useEffect(() => {
    if (!doctor) return;
    document.title = pageTitle(`${doctor.name} — ${doctor.qual}`);
    const scripts = [
      { id: 'schema-physician', data: physicianSchema(doctor) },
      {
        id: 'schema-faq-doc',
        data: faqSchema([
          {
            q: `How do I book ${doctor.name}?`,
            a: `Availability: ${doctor.availability}. Use the appointment form and select this doctor where listed. Bookings are confirmed against the roster before travel.`,
          },
          {
            q: `What does ${doctor.name} focus on?`,
            a: doctor.specializations.join('; ') || doctor.pillars.join('; '),
          },
        ]),
      },
    ];
    scripts.forEach(({ id, data }) => {
      document.getElementById(id)?.remove();
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = id;
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
    });
  }, [doctor]);

  if (!doctor) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Doctor not found</h1>
        <Button to="/doctors" className="mt-6">Back to doctors</Button>
      </div>
    );
  }

  const specs = specialties.filter((s) => doctor.specialtyIds.includes(s.id));
  const txs = treatments.filter((t) => doctor.signatureTreatments.includes(t.id));
  const docsArticles = articles.filter((a) => a.authorId === doctor.id);
  const docsBranches = branches.filter((b) => doctor.branchIds.includes(b.id));

  return (
    <div>
      <PageHero eyebrow={doctor.isDirector ? 'Director profile' : 'Physician profile'} title={doctor.name} description={`${doctor.qual} · ${doctor.role}`}>
        <div className="flex flex-wrap gap-3">
          <Button to={`/book?doctor=${doctor.slug}`}>Book with this doctor</Button>
          <Button href={`tel:+919656656736`} variant="secondary">Call hospital</Button>
        </div>
      </PageHero>

      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Doctors', to: '/doctors' }, { label: doctor.name }]} />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-sus-sand">
              <img src={doctor.image || '/images/doctor-portrait.jpg'} alt={`Portrait placeholder for ${doctor.name}`} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5 space-y-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-sus-gold">Availability</p>
                <p className="mt-1 text-sus-ink">{doctor.availability}</p>
              </div>
              {doctor.lineage && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-sus-gold">Lineage</p>
                  <p className="mt-1 text-sus-ink">{doctor.lineage}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-wider text-sus-gold">Branches</p>
                <ul className="mt-1 space-y-1">
                  {docsBranches.map((b) => (
                    <li key={b.id}><Link className="text-sus-green hover:underline" to={`/branches/${b.slug}`}>{b.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            {doctor.confirmSlots?.map((c) => (
              <ConfirmSlot key={c} label={c} />
            ))}
          </div>

          <div className="lg:col-span-8 space-y-10">
            <AiSummary text={doctor.aiSummary} reviewedBy={doctor.name} />

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Philosophy</h2>
              <blockquote className="mt-4 border-l-2 border-sus-gold pl-5 font-display text-2xl text-sus-green-deep leading-snug">
                “{doctor.philosophy}”
              </blockquote>
              <p className="mt-4 text-sus-muted leading-relaxed">{doctor.approach}</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Education & standing</h2>
              <ul className="mt-4 space-y-2">
                {doctor.education.map((e) => (
                  <li key={e} className="rounded-xl bg-white border border-sus-green/10 px-4 py-3 text-sm text-sus-ink">{e}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Specialisations</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {doctor.specializations.map((s) => (
                  <span key={s} className="rounded-full bg-sus-sand px-3 py-1.5 text-sm text-sus-green-deep">{s}</span>
                ))}
              </div>
              {doctor.pillars.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm uppercase tracking-wider text-sus-gold">Pillars</h3>
                  <ul className="mt-2 list-disc pl-5 text-sus-muted space-y-1">
                    {doctor.pillars.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              )}
            </section>

            {txs.length > 0 && (
              <section>
                <h2 className="font-display text-3xl text-sus-green-deep">Signature treatments</h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {txs.map((t) => (
                    <Link key={t.id} to={`/treatments/${t.slug}`} className="rounded-xl border border-sus-green/10 bg-white px-4 py-3 hover:border-sus-green/30">
                      <span className="font-medium text-sus-green-deep">{t.name}</span>
                      <span className="block text-xs text-sus-muted mt-1">{t.category}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {specs.length > 0 && (
              <section>
                <h2 className="font-display text-3xl text-sus-green-deep">Conditions & pathways led</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {specs.map((s) => (
                    <Link key={s.id} to={`/conditions/${s.slug}`} className="rounded-full border border-sus-green/15 px-3 py-1.5 text-sm text-sus-green hover:bg-sus-sand">
                      {s.shortName}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {docsArticles.length > 0 && (
              <section>
                <h2 className="font-display text-3xl text-sus-green-deep">Articles</h2>
                <ul className="mt-4 space-y-3">
                  {docsArticles.map((a) => (
                    <li key={a.id}>
                      <Link to={`/knowledge/${a.slug}`} className="text-sus-green-deep hover:text-sus-green font-medium">
                        {a.title}
                      </Link>
                      <p className="text-sm text-sus-muted">{a.excerpt}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">FAQ</h2>
              <FaqList
                items={[
                  {
                    q: 'How is availability confirmed?',
                    a: `${doctor.availability}. Online requests are confirmed by the hospital team against the live roster before you travel.`,
                  },
                  {
                    q: 'Can I request this doctor for a package stay?',
                    a: 'Yes — mention the doctor on the package enquiry form. Assignment depends on clinical fit and schedule.',
                  },
                ]}
              />
            </section>

            <div className="rounded-2xl bg-sus-green-deep text-sus-cream p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl">Request a consultation</h2>
                <p className="text-sm text-sus-sand/80 mt-1">Respect published availability · confirmation required</p>
              </div>
              <Button to={`/book?doctor=${doctor.slug}`} variant="secondary">Book appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
