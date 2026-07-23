import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { videoCategories, videoGallery } from '../data/enrichment';
import { Breadcrumbs, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';
import { cn } from '../lib/utils';

export default function VideoGalleryPage() {
  const [category, setCategory] = useState('All');
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (category === 'All' ? videoGallery : videoGallery.filter((v) => v.category === category)),
    [category],
  );
  const active = videoGallery.find((v) => v.id === activeId) || null;

  useEffect(() => {
    document.title = pageTitle('Video Gallery');
    document.getElementById('schema-videogallery')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-videogallery';
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Susrutha Ayurveda Video Gallery',
      description: 'Curated educational and atmospheric videos related to Kerala Ayurveda hospital care.',
      hasPart: videoGallery.map((v) => ({
        '@type': 'VideoObject',
        name: v.title,
        description: v.description,
        embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
        thumbnailUrl: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
      })),
    });
    document.head.appendChild(el);
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Media"
        title="Video gallery"
        description="Premium YouTube embeds for performance — educational and atmospheric pieces. Replace placeholders with Susrutha-owned films when ready."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Video gallery' }]} />

        <div className="flex flex-wrap gap-2 mb-8">
          {videoCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                category === c ? 'bg-sus-green text-sus-cream' : 'bg-white border border-sus-green/10 text-sus-green-deep hover:bg-sus-sand/50',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((v, i) => (
            <motion.button
              key={v.id}
              type="button"
              onClick={() => setActiveId(v.id)}
              className={cn(
                'group relative w-full break-inside-avoid overflow-hidden rounded-2xl border border-sus-green/10 bg-white text-left',
                i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-video' : 'aspect-[5/4]',
              )}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <img
                src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sus-green-deep/90 via-sus-green-deep/25 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-sus-green-deep shadow-lg transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-sus-gold-soft">{v.category}</p>
                <h2 className="mt-1 font-display text-xl text-sus-cream leading-snug">{v.title}</h2>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-sus-green-deep/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
                onClick={() => setActiveId(null)}
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  title={active.title}
                  src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-sus-green-deep px-5 py-4 text-sus-cream">
                <h3 className="font-display text-xl">{active.title}</h3>
                <p className="mt-1 text-sm text-sus-sand/85">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
