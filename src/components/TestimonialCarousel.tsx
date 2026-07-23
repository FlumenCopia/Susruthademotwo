import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Quote, X } from 'lucide-react';
import { patientStories } from '../data/enrichment';
import { Button } from './ui';
import { cn } from '../lib/utils';

export default function TestimonialCarousel() {
  const stories = patientStories;
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => {
      setOffset((o) => (o + 1) % stories.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, reduce, stories.length]);

  const visible = Array.from({ length: Math.min(3, stories.length) }, (_, i) => stories[(offset + i) % stories.length]);
  const active = stories.find((s) => s.id === openId) || null;

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
        }}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {visible.map((t, i) => (
            <motion.button
              key={`${t.id}-${offset}-${i}`}
              type="button"
              layout
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'group rounded-2xl border border-white/30 bg-white/55 p-6 text-left shadow-[0_8px_40px_-24px_rgba(18,53,36,0.35)] backdrop-blur-md',
                'hover:bg-white/75 hover:border-sus-gold/30 transition-colors',
              )}
              onClick={() => setOpenId(t.id)}
            >
              <Quote className="h-6 w-6 text-sus-gold" />
              <p className="mt-4 text-sus-ink leading-relaxed line-clamp-5">“{t.quote}”</p>
              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-sus-green-deep">{t.name}</p>
                  <p className="text-xs text-sus-muted">{t.context}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-sus-gold">{t.category}</span>
              </div>
              <p className="mt-3 text-xs text-sus-green opacity-0 group-hover:opacity-100 transition-opacity">Read full story</p>
            </motion.button>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-sus-muted">{paused || reduce ? 'Carousel paused' : 'Auto-scrolling · hover to pause'} · Illustrative composites pending verified consent</p>
          <div className="flex gap-1.5">
            {stories.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Show story ${i + 1}`}
                onClick={() => setOffset(i)}
                className={cn('h-2 rounded-full transition-all', i === offset ? 'w-6 bg-sus-gold' : 'w-2 bg-sus-green/20')}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button to="/testimonials" variant="secondary">
          Full testimonial archive
        </Button>
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
            aria-label="Full testimonial"
          >
            <motion.div
              initial={reduce ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 16, opacity: 0 }}
              className="relative max-w-lg w-full rounded-3xl border border-white/20 bg-sus-cream/95 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-sus-green/10"
                onClick={() => setOpenId(null)}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <Quote className="h-7 w-7 text-sus-gold" />
              <p className="mt-4 text-lg text-sus-ink leading-relaxed">“{active.full}”</p>
              <p className="mt-6 font-medium text-sus-green-deep">{active.name}</p>
              <p className="text-sm text-sus-muted">{active.context} · {active.location}</p>
              <p className="mt-4 text-xs text-sus-gold">Illustrative composite — pending verified patient consent before marketing use.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
