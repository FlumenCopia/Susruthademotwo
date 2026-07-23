import { FormEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVerticalBySlug, ecosystemVerticals } from '../data/enrichment';
import { brand } from '../data/site';
import {
  AiSummary,
  Breadcrumbs,
  Button,
  FaqList,
  FieldError,
  inputClass,
  Label,
  PageHero,
  SectionHeading,
} from '../components/ui';
import { pageTitle, faqSchema } from '../lib/seo';

export default function VerticalDetailPage() {
  const { slug } = useParams();
  const vertical = getVerticalBySlug(slug || '');
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!vertical) return;
    document.title = pageTitle(vertical.name);
    document.getElementById('schema-vertical-faq')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-vertical-faq';
    el.text = JSON.stringify(faqSchema(vertical.faqs));
    document.head.appendChild(el);

    document.getElementById('schema-vertical')?.remove();
    const org = document.createElement('script');
    org.type = 'application/ld+json';
    org.id = 'schema-vertical';
    org.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      name: vertical.name,
      description: vertical.aiSummary,
      parentOrganization: brand.commonName,
      url: `/ecosystem/${vertical.slug}`,
    });
    document.head.appendChild(org);
  }, [vertical]);

  if (!vertical) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Vertical not found</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {ecosystemVerticals.map((v) => (
            <Link key={v.id} to={`/ecosystem/${v.slug}`} className="rounded-xl border border-sus-green/10 bg-white p-4">
              {v.shortName}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = 'Name required';
    if (!form.phone.trim()) err.phone = 'Phone required';
    if (!form.message.trim()) err.message = 'Message required';
    setErrors(err);
    if (Object.keys(err).length) return;
    try {
      const prev = JSON.parse(localStorage.getItem('susrutha_vertical_enquiries') || '[]');
      prev.push({ ...form, vertical: vertical!.slug, at: new Date().toISOString() });
      localStorage.setItem('susrutha_vertical_enquiries', JSON.stringify(prev));
    } catch {
      /* */
    }
    setSent(true);
  }

  return (
    <div>
      <PageHero
        eyebrow={vertical.year ? `Ecosystem · since ${vertical.year}` : 'Ecosystem'}
        title={vertical.name}
        description={vertical.tagline}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquiry">Enquire</Button>
          {vertical.externalUrl && (
            <Button href={vertical.externalUrl} variant="secondary">
              Official site
            </Button>
          )}
        </div>
      </PageHero>

      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Ecosystem', to: '/ecosystem' }, { label: vertical.shortName }]} />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <AiSummary text={vertical.aiSummary} />
            <section className="prose-sus">
              <h2 className="font-display text-3xl text-sus-green-deep">Overview</h2>
              {vertical.description.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Services</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {vertical.services.map((s) => (
                  <li key={s} className="rounded-xl border border-sus-green/10 bg-white px-4 py-3 text-sm text-sus-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep">Who it serves</h2>
              <ul className="mt-3 list-disc pl-5 text-sus-muted space-y-1">
                {vertical.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>

            <section>
              <SectionHeading eyebrow="Gallery" title="Visual context" />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {vertical.gallery.map((src) => (
                  <img key={src} src={src} alt="" className="rounded-2xl aspect-[4/3] object-cover w-full" loading="lazy" />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-sus-green-deep mb-4">FAQ</h2>
              <FaqList items={vertical.faqs} />
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-sus-green/10 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-sus-gold">Contact</p>
              <p className="mt-2 text-sm text-sus-muted leading-relaxed">{vertical.contactNote}</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-sus-green hover:underline" href={`tel:${brand.contact.mobileTel}`}>
                    {brand.contact.mobile}
                  </a>
                </li>
                <li>
                  <a className="text-sus-green hover:underline" href={`mailto:${brand.contact.email}`}>
                    {brand.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-sus-green/10 aspect-video bg-sus-sand">
              <iframe
                title={`Map for ${vertical.name}`}
                className="h-full w-full"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${vertical.mapQuery}&z=12&output=embed`}
              />
            </div>

            <div id="enquiry" className="rounded-2xl border border-sus-green/10 bg-white p-5 scroll-mt-28">
              <h3 className="font-display text-xl text-sus-green-deep">Enquiry form</h3>
              {sent ? (
                <p className="mt-3 text-sm text-sus-muted">Thank you. We will respond shortly regarding {vertical.shortName}.</p>
              ) : (
                <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
                  <div>
                    <Label htmlFor="vname">Name</Label>
                    <input id="vname" className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <FieldError message={errors.name} />
                  </div>
                  <div>
                    <Label htmlFor="vphone">Phone</Label>
                    <input id="vphone" className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <FieldError message={errors.phone} />
                  </div>
                  <div>
                    <Label htmlFor="vmsg">Message</Label>
                    <textarea id="vmsg" rows={4} className={inputClass} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    <FieldError message={errors.message} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send enquiry
                  </Button>
                </form>
              )}
            </div>

            <Button to="/book" variant="secondary" className="w-full">
              Book hospital appointment
            </Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
