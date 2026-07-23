import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Quote, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand, verticals } from '../data/site';
import { faqsGlobal } from '../data/content';
import { patientStories } from '../data/enrichment';
import InteractiveFacilities from '../components/InteractiveFacilities';
import { Breadcrumbs, Button, ConfirmSlot, FaqList, FieldError, inputClass, Label, PageHero, SectionHeading } from '../components/ui';
import { pageTitle, faqSchema } from '../lib/seo';
import { cn } from '../lib/utils';

export function FacilitiesPage() {
  useEffect(() => {
    document.title = pageTitle('Facilities');
  }, []);
  return (
    <div>
      <PageHero
        eyebrow="Infrastructure"
        title="Facilities that support classical care"
        description="Interactive showcase — hover or click a facility to change the large image and highlight the active card."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Facilities' }]} />
        <InteractiveFacilities showCta={false} />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <img src="/images/hospital-room.jpg" alt="Patient room" className="rounded-2xl aspect-[4/3] object-cover w-full" />
          <img src="/images/yoga-hall.jpg" alt="Yoga practice space" className="rounded-2xl aspect-[4/3] object-cover w-full" />
          <img src="/images/panchakarma.jpg" alt="Therapy setting" className="rounded-2xl aspect-[4/3] object-cover w-full" />
        </div>
      </div>
    </div>
  );
}

export function FaqPage() {
  useEffect(() => {
    document.title = pageTitle('FAQ');
    document.getElementById('schema-faq-global')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-faq-global';
    el.text = JSON.stringify(faqSchema(faqsGlobal));
    document.head.appendChild(el);
  }, []);
  return (
    <div>
      <PageHero eyebrow="FAQ" title="Practical questions, Ayurveda-specific answers" description="No dental-template leftovers — only questions patients actually ask about Susrutha." />
      <div className="container-wide section-pad py-12 max-w-3xl">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
        <FaqList items={faqsGlobal} />
        <Button to="/contact" className="mt-8">Still need help?</Button>
      </div>
    </div>
  );
}

const storyCategories = ['All', ...Array.from(new Set(patientStories.map((s) => s.category)))];

export function TestimonialsPage() {
  const [form, setForm] = useState({ name: '', contact: '', story: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [filter, setFilter] = useState('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (filter === 'All' ? patientStories : patientStories.filter((s) => s.category === filter)),
    [filter],
  );
  const active = patientStories.find((s) => s.id === openId) || null;

  useEffect(() => {
    document.title = pageTitle('Testimonials');
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = 'Name required';
    if (!form.contact.trim()) err.contact = 'Contact required';
    if (form.story.trim().length < 20) err.story = 'Please share a bit more detail.';
    if (!form.consent) err.consent = 'Consent is required for moderation.';
    setErrors(err);
    if (Object.keys(err).length) return;
    try {
      const prev = JSON.parse(localStorage.getItem('susrutha_stories') || '[]');
      prev.push({ ...form, at: new Date().toISOString(), status: 'pending-moderation' });
      localStorage.setItem('susrutha_stories', JSON.stringify(prev));
    } catch { /* */ }
    setSent(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="Stories"
        title="Patient voices — archive & filters"
        description="Complete illustrative archive with treatment-category filters. Stories publish publicly only after verified consent."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Testimonials' }]} />

        <div className="flex flex-wrap gap-2 mb-8">
          {storyCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                filter === c ? 'bg-sus-green text-sus-cream' : 'bg-white border border-sus-green/10 text-sus-green-deep',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setOpenId(t.id)}
              className="rounded-2xl border border-white/40 bg-white/60 p-6 text-left shadow-sm backdrop-blur-md hover:bg-white/80 transition-colors"
            >
              <Quote className="h-6 w-6 text-sus-gold" />
              <blockquote className="mt-4 text-sus-ink leading-relaxed line-clamp-5">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-sus-muted">
                {t.name} · {t.context}
              </figcaption>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-sus-gold">{t.category}</p>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <a href={brand.contact.googleReview} target="_blank" rel="noreferrer" className="text-sus-green font-medium hover:underline">
            Leave a Google review
          </a>
        </div>

        <section className="mt-16 max-w-2xl">
          <SectionHeading title="Submit a story for moderation" description="Stories publish only after consent verification. Nothing goes live automatically." />
          {sent ? (
            <p className="mt-6 rounded-2xl border border-sus-green/10 bg-white p-6 text-sus-muted">Thank you. Your story is queued for moderation and consent checks.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 rounded-2xl border border-sus-green/10 bg-white p-6 space-y-4" noValidate>
              <div>
                <Label htmlFor="tname">Name</Label>
                <input id="tname" className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <FieldError message={errors.name} />
              </div>
              <div>
                <Label htmlFor="tcontact">Phone or email</Label>
                <input id="tcontact" className={inputClass} value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
                <FieldError message={errors.contact} />
              </div>
              <div>
                <Label htmlFor="tstory">Your experience</Label>
                <textarea id="tstory" rows={5} className={inputClass} value={form.story} onChange={(e) => setForm({ ...form, story: e.target.value })} />
                <FieldError message={errors.story} />
              </div>
              <label className="flex items-start gap-2 text-sm text-sus-muted">
                <input type="checkbox" className="mt-1" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
                I consent to Susrutha contacting me to verify and, if approved, publish this story (with agreed attribution).
              </label>
              <FieldError message={errors.consent} />
              <Button type="submit">Submit for moderation</Button>
            </form>
          )}
        </section>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-sus-green-deep/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={reduce ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 12, opacity: 0 }}
              className="relative max-w-lg w-full rounded-3xl bg-sus-cream p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white border border-sus-green/10 inline-flex items-center justify-center" onClick={() => setOpenId(null)} aria-label="Close">
                <X className="h-4 w-4" />
              </button>
              <p className="text-lg text-sus-ink leading-relaxed">“{active.full}”</p>
              <p className="mt-6 font-medium text-sus-green-deep">{active.name}</p>
              <p className="text-sm text-sus-muted">{active.context} · {active.location}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MediaPage() {
  useEffect(() => {
    document.title = pageTitle('Media');
  }, []);
  const gallery = [
    { src: '/images/hero-ayurveda.jpg', alt: 'Care atmosphere' },
    { src: '/images/panchakarma.jpg', alt: 'Therapy' },
    { src: '/images/hospital-room.jpg', alt: 'Inpatient room' },
    { src: '/images/ayur-village.jpg', alt: 'Ayur Village' },
    { src: '/images/yoga-hall.jpg', alt: 'Movement space' },
    { src: '/images/herbs-mortar.jpg', alt: 'Herbal preparations' },
    { src: '/images/kerala-nature.jpg', alt: 'Kerala setting' },
    { src: '/images/doctor-portrait.jpg', alt: 'Clinical presence' },
  ];
  return (
    <div>
      <PageHero eyebrow="Media" title="Photos & institutional presence" description="Still gallery plus a dedicated video gallery with YouTube embeds and lightbox playback." />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Media' }]} />
        <div className="mb-8">
          <Button to="/videos">Open video gallery</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-2xl bg-sus-sand">
              <img src={g.src} alt={g.alt} className="aspect-square w-full object-cover" loading="lazy" />
              <figcaption className="px-3 py-2 text-xs text-sus-muted">{g.alt}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 space-y-3">
          <ConfirmSlot label="Official video embeds and YouTube/channel URLs" />
          <ConfirmSlot label="Publication PDFs and press mentions for listing" />
        </div>
      </div>
    </div>
  );
}

export function AffiliationsPage() {
  useEffect(() => {
    document.title = pageTitle('Affiliations');
  }, []);
  return (
    <div>
      <PageHero eyebrow="Trust" title="Affiliations & recognition" description="We list only what can be evidenced. Slots below await client-confirmed certificates and memberships." />
      <div className="container-wide section-pad py-12 max-w-3xl space-y-4">
        <Breadcrumbs items={[{ label: 'Affiliations' }]} />
        <div className="rounded-2xl border border-sus-green/10 bg-white p-6">
          <h2 className="font-display text-2xl text-sus-green-deep">Currently publishable</h2>
          <ul className="mt-3 space-y-2 text-sus-muted text-sm">
            <li>GMP-certified Ayurvedic Pharma manufacturing vertical (2008) — see Susrutha Ayurveda Pharma.</li>
            <li>Multi-vertical ecosystem: nursing school, medi-tech lab, charitable trust (years as institutional timeline).</li>
            <li>Government-college affiliated senior consultants on roster (individual credentials on doctor pages).</li>
          </ul>
        </div>
        <ConfirmSlot label="Hospital registration / council display text" />
        <ConfirmSlot label="Professional memberships" />
        <ConfirmSlot label="Awards for institutional marketing use" />
        <SectionHeading title="Related verticals" />
        <ul className="mt-4 space-y-2">
          {verticals.map((v) => (
            <li key={v.name} className="text-sm text-sus-muted">
              <span className="text-sus-green-deep font-medium">{v.name}</span> — {v.detail}
            </li>
          ))}
        </ul>
        <Button to="/ecosystem" variant="secondary">Ecosystem pages</Button>
      </div>
    </div>
  );
}

export function NotFoundPage() {
  useEffect(() => {
    document.title = pageTitle('Page not found');
  }, []);
  return (
    <div className="container-wide section-pad py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-sus-gold">404</p>
      <h1 className="mt-3 font-display text-4xl text-sus-green-deep">This page is not in the care map</h1>
      <p className="mt-4 text-sus-muted">Try search from the header, or return home.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button to="/">Home</Button>
        <Button to="/contact" variant="secondary">Contact</Button>
      </div>
    </div>
  );
}

