import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ecosystemVerticals } from '../data/enrichment';
import { Breadcrumbs, PageHero, SectionHeading } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function EcosystemPage() {
  useEffect(() => {
    document.title = pageTitle('Ecosystem');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Ecosystem"
        title="Verticals beyond a single hospital door"
        description="Pharma, diagnostics, nursing education, charitable work, corporate structure and remote consultation — each with its own page."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Ecosystem' }]} />
        <SectionHeading
          title="Explore each vertical"
          description="Dedicated pages include services, FAQs, maps, galleries and enquiry forms for answer-engine clarity."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ecosystemVerticals.map((v) => (
            <Link
              key={v.id}
              to={`/ecosystem/${v.slug}`}
              className="group flex h-full flex-col rounded-[1.5rem] border border-sus-green/10 bg-white p-6 hover:border-sus-green/30 hover:-translate-y-1 transition-all"
            >
              {v.year && <p className="text-xs uppercase tracking-[0.16em] text-sus-gold">Since {v.year}</p>}
              <h2 className="mt-2 font-display text-2xl text-sus-green-deep">{v.shortName}</h2>
              <p className="mt-2 text-sm text-sus-muted flex-1 leading-relaxed">{v.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sus-green">
                Open page <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
