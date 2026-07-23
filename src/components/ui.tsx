import { Link } from 'react-router-dom';
import { type ReactNode, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, useReducedMotion } from 'framer-motion';

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className,
  disabled,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}) {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sus-gold disabled:opacity-50',
    variant === 'primary' && 'bg-sus-green text-sus-cream hover:bg-sus-green-deep shadow-sm',
    variant === 'secondary' && 'bg-sus-cream text-sus-green-deep border border-sus-green/20 hover:border-sus-green/40',
    variant === 'ghost' && 'bg-transparent text-sus-green-deep hover:bg-sus-sand/60',
    variant === 'gold' && 'bg-sus-gold text-white hover:bg-sus-gold/90',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto max-w-3xl')}>
      {eyebrow && (
        <p
          className={cn(
            'text-xs uppercase tracking-[0.22em] font-medium mb-3',
            light ? 'text-sus-gold-soft' : 'text-sus-gold',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-[2.75rem] text-balance',
          light ? 'text-sus-cream' : 'text-sus-green-deep',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base sm:text-lg leading-relaxed', light ? 'text-sus-sand/90' : 'text-sus-muted')}>
          {description}
        </p>
      )}
    </div>
  );
}

export function AiSummary({ text, reviewedBy }: { text: string; reviewedBy?: string }) {
  return (
    <aside className="rounded-2xl border border-sus-green/15 bg-white/70 p-5 sm:p-6 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.18em] text-sus-gold font-medium mb-2">At a glance</p>
      <p className="text-sus-ink leading-relaxed">{text}</p>
      {reviewedBy && (
        <p className="mt-3 text-sm text-sus-muted">Medically reviewed framing · {reviewedBy}</p>
      )}
    </aside>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-sus-muted">
        <li>
          <Link to="/" className="hover:text-sus-green transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-sus-sand">
              /
            </span>
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="hover:text-sus-green transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-sus-ink" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="rounded-2xl border border-sus-green/10 bg-white overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium text-sus-green-deep">{item.q}</span>
              <ChevronDown
                className={cn('h-5 w-5 shrink-0 text-sus-gold transition-transform', isOpen && 'rotate-180')}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sus-muted leading-relaxed border-t border-sus-sand/80 pt-3">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function CardLink({
  to,
  title,
  description,
  meta,
  image,
}: {
  to: string;
  title: string;
  description: string;
  meta?: string;
  image?: string;
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sus-green/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sus-green/25 hover:shadow-[0_12px_40px_-20px_rgba(18,53,36,0.35)]"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-sus-sand">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {meta && <p className="text-xs uppercase tracking-[0.16em] text-sus-gold mb-2">{meta}</p>}
        <h3 className="text-xl sm:text-2xl text-sus-green-deep group-hover:text-sus-green transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-sus-muted leading-relaxed flex-1">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sus-green">
          Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-sus-green-deep text-sus-cream">
      <div className="absolute inset-0 botanical-pattern opacity-40" aria-hidden="true" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-sus-gold/10 blur-3xl" aria-hidden="true" />
      <div className="container-wide section-pad relative py-16 sm:py-20 lg:py-24">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-sus-gold-soft mb-4">{eyebrow}</p>
        )}
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl text-sus-cream text-balance">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-sus-sand/90 leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function Disclaimer() {
  return (
    <p className="text-xs leading-relaxed text-sus-muted/90">
      Educational information only. Susrutha Ayurveda does not provide diagnosis via this website and does not promise
      cures. Always consult a qualified physician. In emergencies, use local emergency services and our emergency
      contact numbers.
    </p>
  );
}

export function ConfirmSlot({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-sus-gold/40 bg-sus-sand/40 px-4 py-3 text-sm text-sus-muted">
      Content pending verification: {label}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-3xl sm:text-4xl text-sus-green-deep">{value}</div>
      <div className="mt-1 text-sm text-sus-muted">{label}</div>
    </div>
  );
}

export function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-sus-green-deep">
      {children}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-sm text-sus-terracotta" role="alert">
      {message}
    </p>
  );
}

export const inputClass =
  'w-full rounded-xl border border-sus-green/15 bg-white px-4 py-3 text-sus-ink placeholder:text-sus-muted/60 focus:border-sus-green-soft focus:outline-none focus:ring-2 focus:ring-sus-green/20 transition';
