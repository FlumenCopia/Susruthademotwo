import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug } from '../data/content';
import { doctors } from '../data/doctors';
import { getTreatmentById } from '../data/treatments';
import { AiSummary, Breadcrumbs, Button, FaqList, PageHero } from '../components/ui';
import { pageTitle, faqSchema } from '../lib/seo';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || '');
  const author = doctors.find((d) => d.id === article?.authorId);

  useEffect(() => {
    if (!article) return;
    document.title = pageTitle(article.title);
    document.getElementById('schema-article')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-article';
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      datePublished: article.date,
      author: author ? { '@type': 'Person', name: author.name } : undefined,
      description: article.aiSummary,
    });
    document.head.appendChild(el);
    document.getElementById('schema-faq-article')?.remove();
    const f = document.createElement('script');
    f.type = 'application/ld+json';
    f.id = 'schema-faq-article';
    f.text = JSON.stringify(faqSchema(article.faqs));
    document.head.appendChild(f);
  }, [article, author]);

  if (!article) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Article not found</h1>
        <Button to="/knowledge" className="mt-6">Knowledge Centre</Button>
      </div>
    );
  }

  return (
    <div>
      <PageHero eyebrow="Knowledge Centre" title={article.title} description={`${article.readTime} read · ${article.date}`}>
        {author && (
          <p className="text-sus-sand/90">
            By{' '}
            <Link to={`/doctors/${author.slug}`} className="text-sus-gold-soft underline-offset-2 hover:underline">
              {author.name}
            </Link>
            {author.isDirector ? ' · Medically framed director essay' : ''}
          </p>
        )}
      </PageHero>
      <div className="container-wide section-pad py-12 max-w-3xl">
        <Breadcrumbs items={[{ label: 'Knowledge Centre', to: '/knowledge' }, { label: article.title }]} />
        <AiSummary text={article.aiSummary} reviewedBy={author?.name} />

        <div className="mt-8 rounded-2xl border border-sus-green/10 bg-white p-6">
          <h2 className="text-xs uppercase tracking-[0.18em] text-sus-gold">Key takeaways</h2>
          <ul className="mt-3 space-y-2 text-sus-ink">
            {article.takeaways.map((t) => (
              <li key={t} className="flex gap-2"><span className="text-sus-gold">·</span>{t}</li>
            ))}
          </ul>
        </div>

        <div className="prose-sus mt-10">
          {article.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        {article.treatmentIds.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-2xl text-sus-green-deep">Related treatments</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.treatmentIds.map((id) => {
                const t = getTreatmentById(id);
                return t ? (
                  <Link key={id} to={`/treatments/${t.slug}`} className="rounded-full border border-sus-green/15 px-3 py-1.5 text-sm text-sus-green hover:bg-white">
                    {t.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="font-display text-3xl text-sus-green-deep mb-4">FAQ</h2>
          <FaqList items={article.faqs} />
        </div>

        <div className="mt-12 rounded-2xl bg-sus-green-deep text-sus-cream p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-display text-2xl">Discuss this with a physician</p>
          <Button to="/book" variant="secondary">Book appointment</Button>
        </div>
      </div>
    </div>
  );
}
