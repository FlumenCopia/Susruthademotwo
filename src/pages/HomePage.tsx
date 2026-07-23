import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  FlaskConical,
  BedDouble,
  MapPin,
  Plane,
  Globe2,
} from 'lucide-react';
import { brand, ayurVillage } from '../data/site';
import { ecosystemVerticals } from '../data/enrichment';
import { getDirectors } from '../data/doctors';
import { specialties } from '../data/specialties';
import { packages } from '../data/packages';
import { treatments } from '../data/treatments';
import { articles } from '../data/content';
import { AiSummary, Button, CardLink, FadeIn, SectionHeading, Stat } from '../components/ui';
import InteractiveTimeline from '../components/InteractiveTimeline';
import InteractiveFacilities from '../components/InteractiveFacilities';
import TestimonialCarousel from '../components/TestimonialCarousel';
import AppointmentHub from '../components/AppointmentHub';
import { orgSchema } from '../lib/seo';

function useCountUp(target: number, enabled: boolean) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!enabled) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled, reduce]);
  return value;
}

function TrustCounters() {
  const [visible, setVisible] = useState(false);
  const yearsLineage = useCountUp(55, visible);
  const yearsInstitution = useCountUp(40, visible);
  const beds = useCountUp(40, visible);
  const branchesCount = useCountUp(2, visible);

  return (
    <div
      ref={(el) => {
        if (!el || visible) return;
        const io = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
        io.observe(el);
      }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      <Stat value={`~${yearsLineage}`} label="Years family Ayurveda lineage (since 1970)" />
      <Stat value={`~${yearsInstitution}`} label="Years as Susrutha (since 1986)" />
      <Stat value={`${beds}`} label="Bed hospital strength" />
      <Stat value={`${branchesCount}`} label="Care locations + Ayur Village" />
    </div>
  );
}

function BotanicalHeroArt() {
  const reduce = useReducedMotion();
  return (
    <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[5/6] overflow-hidden rounded-[2rem] bg-sus-green shadow-2xl shadow-sus-green-deep/30">
      <img
        src="/images/hero-ayurveda.jpg"
        alt="Calm Ayurvedic care setting with natural elements"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-sus-green-deep/80 via-sus-green-deep/20 to-transparent" />
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-6 top-10 h-28 w-28 rounded-full border border-sus-gold-soft/30"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-8 top-16 h-16 w-16 rounded-full bg-sus-gold/20 blur-xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <p className="font-display text-2xl text-sus-cream">Kerala lineage. Hospital discipline.</p>
        <p className="mt-2 text-sm text-sus-sand/85">Research-backed inpatient Ayurveda at Kattakada, with city OP at Kowdiar.</p>
      </div>
    </div>
  );
}

function PanchakarmaSteps() {
  const steps = treatments.find((t) => t.id === 'panchakarma')?.procedure || [];
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, i) => (
        <FadeIn key={step.step} delay={i * 0.05}>
          <li className="relative h-full rounded-2xl border border-sus-green/10 bg-white p-5">
            <span className="font-display text-3xl text-sus-gold/80">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 text-lg text-sus-green-deep">{step.step}</h3>
            <p className="mt-2 text-sm text-sus-muted leading-relaxed">{step.detail}</p>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

export default function HomePage() {
  const directors = getDirectors();
  const featuredPackages = packages.filter((p) => p.featured).slice(0, 4);

  useEffect(() => {
    document.title = `${brand.commonName} — Authentic Kerala Ayurveda Hospital · Trivandrum`;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(orgSchema());
    script.id = 'schema-org';
    document.getElementById('schema-org')?.remove();
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden bg-sus-cream">
        <div className="absolute inset-0 botanical-pattern" aria-hidden="true" />
        <div className="container-wide section-pad relative grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sus-gold font-medium">Susrutha Ayurveda · Kattakada & Kowdiar</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-sus-green-deep text-balance leading-[1.08]">
              Authentic Kerala Ayurveda, held to hospital standards.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-sus-muted leading-relaxed">
              {brand.positioning} A family lineage since 1970; Susrutha as an institution since 1986 — {brand.bedStrength}, Panchakarma suites, and specialist directors you can actually meet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book">Book appointment</Button>
              <Button to="/about" variant="secondary">
                Our legacy
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-sus-muted">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sus-green" /> Physician-directed care</span>
              <span className="inline-flex items-center gap-2"><BedDouble className="h-4 w-4 text-sus-green" /> 40-bed hospital</span>
              <span className="inline-flex items-center gap-2"><FlaskConical className="h-4 w-4 text-sus-green" /> Research institute</span>
            </div>
          </div>
          <BotanicalHeroArt />
        </div>
      </section>

      <section className="border-y border-sus-green/10 bg-white">
        <div className="container-wide section-pad py-12">
          <TrustCounters />
          <p className="mt-6 text-sm text-sus-muted max-w-3xl">
            Honest framing: we lead with family lineage and institutional age separately — we do not collapse them into a single inflated “50+ years hospital” claim. Review ratings pending verified publication.
          </p>
        </div>
      </section>

      <section className="container-wide section-pad py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Why Susrutha"
            title="Heritage without theatre. Modern care without losing the plot."
            description="Mayo-level seriousness about clinical trust, expressed through Kerala’s living Ayurveda — research posture, inpatient infrastructure, and directors who carry a documented family lineage."
          />
          <div className="space-y-4">
            <AiSummary text="Susrutha Ayurveda is a Panchakarma hospital and research institute in Thiruvananthapuram district, offering authentic Kerala therapies with specialist clinics for spine and joints, women’s health, proctology, neurology support and preventive Rasayana care." />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Leaf, t: 'Classical fidelity', d: 'Kerala protocols, not diluted wellness menus.' },
                { icon: FlaskConical, t: 'Research mindset', d: 'Institute framing with clinical documentation culture.' },
                { icon: BedDouble, t: 'Hospital backbone', d: 'Beds, OT, physiotherapy, yoga and pharmacy hours.' },
                { icon: MapPin, t: 'Two access points', d: 'Kattakada inpatient hub + Kowdiar city OP.' },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-sus-green/10 bg-white p-5">
                  <item.icon className="h-5 w-5 text-sus-gold" />
                  <h3 className="mt-3 text-lg text-sus-green-deep">{item.t}</h3>
                  <p className="mt-1 text-sm text-sus-muted">{item.d}</p>
                </div>
              ))}
            </div>
            <Button to="/about" variant="ghost" className="!px-0">
              Read the heritage narrative <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-sus-green-deep text-sus-cream">
        <div className="container-wide section-pad py-20">
          <SectionHeading
            light
            eyebrow="Leadership"
            title="Three directors. One continuing lineage."
            description="Thought-leadership profiles for the physicians guiding research, hospital experience and women’s health — the present chapter after Prof. Dr. Krishnankutty Nair."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {directors.map((d, i) => (
              <FadeIn key={d.id} delay={i * 0.08}>
                <Link
                  to={`/doctors/${d.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-sus-green">
                    <img
                      src={d.image || '/images/doctor-portrait.jpg'}
                      alt=""
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-sus-gold-soft">Director</p>
                    <h3 className="mt-2 font-display text-2xl text-sus-cream">{d.name}</h3>
                    <p className="text-sm text-sus-sand/80">{d.qual}</p>
                    <p className="mt-3 text-sm text-sus-sand/75 flex-1">{d.role}</p>
                    <p className="mt-4 text-sm italic text-sus-gold-soft/90 line-clamp-3">“{d.philosophy}”</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm text-sus-cream">
                      View profile <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/doctors" variant="secondary">
              Full doctor roster
            </Button>
          </div>
        </div>
      </section>

      <section className="container-wide section-pad py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
          <SectionHeading
            eyebrow="Clinical focus"
            title="Eight speciality pathways"
            description="Each condition cluster has its own page — symptoms, Ayurvedic understanding, doctors and related packages."
          />
          <Button to="/conditions" variant="secondary">
            All conditions
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((s) => (
            <CardLink
              key={s.id}
              to={`/conditions/${s.slug}`}
              title={s.shortName}
              description={s.tagline}
              meta="Speciality"
            />
          ))}
        </div>
      </section>

      <section className="bg-sus-sand/50 botanical-pattern">
        <div className="container-wide section-pad py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-12">
            <div>
              <SectionHeading
                eyebrow="Signature therapies"
                title="Panchakarma, explained without the brochure fog."
                description="A supervised sequence — assessment, preparation, selected procedures, aftercare — delivered in dedicated male and female therapy suites."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/treatments/panchakarma">Panchakarma guide</Button>
                <Button to="/treatments" variant="secondary">
                  All therapies
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img src="/images/panchakarma.jpg" alt="Traditional Ayurvedic therapy in progress" className="w-full h-full object-cover aspect-[16/11]" loading="lazy" />
            </div>
          </div>
          <PanchakarmaSteps />
        </div>
      </section>

      <section className="container-wide section-pad py-20">
        <SectionHeading
          eyebrow="Legacy"
          title="1970 → today"
          description="Interactive milestones — scroll, expand and follow the institutional arc without myth-making."
        />
        <div className="mt-10">
          <InteractiveTimeline compact />
        </div>
        <Button to="/about#timeline" variant="ghost" className="mt-6 !px-0">
          Full heritage narrative <ArrowRight className="h-4 w-4" />
        </Button>
      </section>

      <section className="bg-white border-y border-sus-green/10">
        <div className="container-wide section-pad py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
            <SectionHeading
              eyebrow="Care packages"
              title="Structured programmes with clear intent"
              description="Twelve real packages — from Tekky occupational care to 16-day hospital programmes. Tariffs on enquiry."
            />
            <Button to="/packages" variant="secondary">
              View all packages
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredPackages.map((p) => (
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
      </section>

      <section className="container-wide section-pad py-20">
        <SectionHeading
          eyebrow="Facilities"
          title="Infrastructure that lets classical care breathe."
          description="Hover or select a facility — the showcase image and details update with a calm transition."
        />
        <div className="mt-10">
          <InteractiveFacilities />
        </div>
      </section>

      <section className="bg-sus-green text-sus-cream">
        <div className="container-wide section-pad py-16">
          <SectionHeading
            light
            eyebrow="Ecosystem"
            title="More than a single hospital door"
            description="Each vertical opens a dedicated page with services, map, gallery and enquiry."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemVerticals.map((v) => (
              <Link
                key={v.id}
                to={`/ecosystem/${v.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-display text-xl text-sus-cream">{v.shortName}</h3>
                <p className="mt-2 text-sm text-sus-sand/80">{v.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-sus-gold-soft">
                  Open vertical <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/ecosystem" variant="secondary">
              Ecosystem index
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/kerala-nature.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-sus-green-deep/88" />
        </div>
        <div className="container-wide section-pad relative py-20 text-sus-cream">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sus-gold-soft inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4" /> International patients
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl text-balance leading-tight">
                Kerala medical travel, planned with hospital honesty.
              </h2>
              <p className="mt-5 text-sus-sand/90 leading-relaxed max-w-xl">
                Airport-aware logistics, Ayur Village privacy ~20 km from Trivandrum International Airport, visa and interpreter coordination on enquiry, and packages directed by physicians — not spa scripts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/international-patients" variant="secondary">
                  Open luxury travel guide
                </Button>
                <Button to="/package-enquiry" variant="ghost" className="!text-sus-cream hover:!bg-white/10">
                  Package enquiry
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Plane, t: 'Airport assistance', d: 'Realistic arrival-to-admission timing' },
                { icon: BedDouble, t: 'Ayur Village stay', d: `${ayurVillage.cottages} private cottages` },
                { icon: ShieldCheck, t: 'Visa guidance', d: 'Case-by-case documentation support' },
                { icon: Leaf, t: 'Package planning', d: '5 to 16-day clinical programmes' },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                  <item.icon className="h-5 w-5 text-sus-gold-soft" />
                  <h3 className="mt-3 font-display text-xl">{item.t}</h3>
                  <p className="mt-1 text-sm text-sus-sand/80">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide section-pad py-20">
        <SectionHeading
          eyebrow="Patient voices"
          title="Stories in motion"
          description="Glass cards, auto-scroll carousel, pause on hover — click any story for the full narrative. Illustrative composites until verified consent."
        />
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="bg-sus-sand/40">
        <div className="container-wide section-pad py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
            <SectionHeading
              eyebrow="Knowledge Centre"
              title="Clinical writing with named authors"
              description="Articles carry doctor bylines, AI-extractable summaries and FAQs — built for humans and answer engines."
            />
            <Button to="/knowledge" variant="secondary">
              Browse articles
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {articles.map((a) => (
              <CardLink key={a.id} to={`/knowledge/${a.slug}`} title={a.title} description={a.excerpt} meta={a.readTime} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sus-green/10 bg-sus-cream">
        <div className="container-wide section-pad py-20">
          <SectionHeading
            eyebrow="Care desk"
            title="Book appointment · package enquiry · contact · feedback"
            description="Option B interaction model, held in Susrutha’s visual language — with branch cards and quick actions beneath the form."
          />
          <div className="mt-10">
            <AppointmentHub />
          </div>
        </div>
      </section>
    </div>
  );
}
