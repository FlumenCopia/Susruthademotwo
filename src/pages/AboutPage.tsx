import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { brand, legacyFigures, principles } from '../data/site';
import { ecosystemVerticals } from '../data/enrichment';
import { getDirectors } from '../data/doctors';
import { Breadcrumbs, Button, ConfirmSlot, PageHero, SectionHeading } from '../components/ui';
import InteractiveTimeline from '../components/InteractiveTimeline';
import { pageTitle } from '../lib/seo';

export default function AboutPage() {
  const directors = getDirectors();

  useEffect(() => {
    document.title = pageTitle('About & Heritage');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="About Susrutha"
        title="A lineage of care, institutionalised with restraint."
        description={brand.legacyFraming}
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'About' }]} />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="prose-sus">
            <h2 className="font-display text-3xl text-sus-green-deep">Heritage narrative</h2>
            <p>
              The story begins in 1970 with family clinic roots under founding visionaries including Sri P. Krishna Pillai
              (Late), an Ayurvedic physician. In 1986, Susrutha took institutional form at Kattakada with clinic and
              pharmacy — the name under which the work continues today.
            </p>
            <p>
              Prof. Dr. Krishnankutty Nair (Late) became the leading light of the modern era: former Chairman & MD,
              with distinguished government service as HOD/Superintendent in Panchakarma at the Govt. Ayurveda
              Panchakarma Hospital, Trivandrum, and professorial roles across Agada Tantra, Roga Nidana, Kayachikitsa
              and Panchakarma.
            </p>
            <p>
              Today the institute is guided by three directors — Dr. Krishnakumar K., Dr. Sreeja Krishna S., and Dr.
              Priyanka R. — carrying clinical, administrative and women’s-health leadership forward inside a 40-bed
              hospital framework.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-sus-green/10 bg-white p-6">
              <h3 className="font-display text-2xl text-sus-green-deep">Founders</h3>
              <ul className="mt-3 space-y-2 text-sm text-sus-muted">
                {legacyFigures.founders.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-6">
              <h3 className="font-display text-2xl text-sus-green-deep">{legacyFigures.patriarch.name}</h3>
              <p className="mt-2 text-sm text-sus-muted leading-relaxed">{legacyFigures.patriarch.role}</p>
              <p className="mt-3 text-sm text-sus-ink">{legacyFigures.patriarch.roleInStory}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-sus-gold">Focus areas noted in legacy records</p>
              <p className="mt-1 text-sm text-sus-muted">{legacyFigures.patriarch.focus.join(' · ')}</p>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-sus-gold mb-2">Awards as historically associated</p>
                <div className="flex flex-wrap gap-2">
                  {legacyFigures.patriarch.awardsClaimed.map((a) => (
                    <span key={a} className="rounded-full bg-sus-sand/80 px-3 py-1 text-xs text-sus-green-deep">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-xs text-sus-muted">Presented as legacy claims from institutional memory — re-verify certificates before external award marketing.</p>
              </div>
            </div>
          </div>
        </div>

        <section id="timeline" className="mt-20 scroll-mt-28">
          <SectionHeading eyebrow="Milestones" title="Interactive timeline" description="Horizontal scroll, expandable cards and progress from 1970 to today." />
          <div className="mt-10">
            <InteractiveTimeline />
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-sus-green-deep text-sus-cream p-8">
            <h2 className="font-display text-3xl">Vision</h2>
            <p className="mt-4 text-sus-sand/90 leading-relaxed">{brand.vision}</p>
          </div>
          <div className="rounded-[1.75rem] bg-white border border-sus-green/10 p-8">
            <h2 className="font-display text-3xl text-sus-green-deep">Mission</h2>
            <p className="mt-4 text-sus-muted leading-relaxed">{brand.mission}</p>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="Principles" title="How we choose to practise" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-sus-green/10 bg-white p-6">
                <h3 className="text-xl text-sus-green-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-sus-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Leadership" title="Directors continuing the work" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {directors.map((d) => (
              <Link key={d.id} to={`/doctors/${d.slug}`} className="rounded-2xl border border-sus-green/10 bg-white p-6 hover:border-sus-green/30 transition-colors">
                <h3 className="font-display text-2xl text-sus-green-deep">{d.name}</h3>
                <p className="text-sm text-sus-gold mt-1">{d.qual}</p>
                <p className="mt-3 text-sm text-sus-muted">{d.role}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Research & verticals" title="Institute beyond the ward" description="GMP pharma, diagnostics, nursing education, charitable work and home consultation extend the clinical mission." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ecosystemVerticals.map((v) => (
              <Link key={v.id} to={`/ecosystem/${v.slug}`} className="rounded-2xl border border-sus-green/10 bg-white p-5 hover:border-sus-green/30 transition-colors">
                <h3 className="text-lg text-sus-green-deep">{v.name}</h3>
                <p className="mt-1 text-sm text-sus-muted">{v.tagline}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="Recognition" title="Affiliations & credentials" />
          <div className="mt-6 space-y-3">
            <ConfirmSlot label="Institutional affiliations and memberships for public listing" />
            <ConfirmSlot label="Current regulatory / hospital registration display copy" />
            <Button to="/affiliations" variant="secondary" className="mt-2">
              Affiliations page
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
