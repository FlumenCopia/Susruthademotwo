import { useEffect } from 'react';
import { articles } from '../data/content';
import { doctors } from '../data/doctors';
import { Breadcrumbs, CardLink, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function KnowledgePage() {
  useEffect(() => {
    document.title = pageTitle('Knowledge Centre');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Clinical writing with accountable bylines"
        description="Pillar articles for patients and answer engines — AI summaries, takeaways, FAQs and doctor attribution."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Knowledge Centre' }]} />
        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((a) => {
            const author = doctors.find((d) => d.id === a.authorId);
            return (
              <CardLink
                key={a.id}
                to={`/knowledge/${a.slug}`}
                title={a.title}
                description={a.excerpt}
                meta={`${a.readTime} · ${author?.name || 'Susrutha team'}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
