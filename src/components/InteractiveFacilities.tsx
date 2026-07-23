import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { facilityShowcase } from '../data/enrichment';
import { cn } from '../lib/utils';
import { Button } from './ui';

export default function InteractiveFacilities({ showCta = true }: { showCta?: boolean }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = facilityShowcase[active];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
      <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-sus-green-deep">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="absolute inset-0 h-full w-full object-cover"
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.45 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-sus-green-deep via-sus-green-deep/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-sus-gold-soft">Facility focus</p>
          <h3 className="mt-2 font-display text-3xl text-sus-cream">{current.title}</h3>
          <p className="mt-2 max-w-lg text-sm text-sus-sand/90 leading-relaxed">{current.detail}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {current.points.map((p) => (
              <li key={p} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-sus-cream">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <ul className="space-y-3">
          {facilityShowcase.map((f, i) => {
            const isActive = i === active;
            return (
              <li key={f.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    'w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300',
                    isActive
                      ? 'border-sus-gold/40 bg-white shadow-[0_12px_36px_-20px_rgba(18,53,36,0.4)] scale-[1.01]'
                      : 'border-sus-green/10 bg-white/70 hover:border-sus-green/25',
                  )}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className={cn('text-lg', isActive ? 'text-sus-green' : 'text-sus-green-deep')}>{f.title}</h3>
                      <p className="mt-1 text-sm text-sus-muted leading-relaxed line-clamp-2">{f.detail}</p>
                    </div>
                    <span
                      className={cn(
                        'mt-1 h-2.5 w-2.5 shrink-0 rounded-full',
                        isActive ? 'bg-sus-gold' : 'bg-sus-sand',
                      )}
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
        {showCta && (
          <div className="mt-6">
            <Button to="/facilities" variant="secondary">
              Full facilities guide
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
