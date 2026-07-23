import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Search,
  ChevronDown,
  MapPin,
  MessageCircle,
  AlertTriangle,
  CalendarHeart,
  Facebook,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { brand, branches, verticals } from '../data/site';
import { specialties } from '../data/specialties';
import { treatments } from '../data/treatments';
import { getDirectors } from '../data/doctors';
import { searchSite } from '../lib/search';
import { cn } from '../lib/utils';
import { Disclaimer } from './ui';

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Susrutha Ayurveda home">
      <span
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-full border',
          light ? 'border-sus-gold-soft/50 bg-sus-green text-sus-gold-soft' : 'border-sus-gold/30 bg-sus-green-deep text-sus-gold-soft',
        )}
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
          <path
            d="M20 6c-1.2 5-5 8.8-10 10 5 1.2 8.8 5 10 10 1.2-5 5-8.8 10-10-5-1.2-8.8-5-10-10z"
            fill="currentColor"
            opacity="0.95"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={cn('block font-display text-xl sm:text-2xl tracking-wide', light ? 'text-sus-cream' : 'text-sus-green-deep')}>
          Susrutha
        </span>
        <span className={cn('block text-[10px] uppercase tracking-[0.2em]', light ? 'text-sus-sand/80' : 'text-sus-muted')}>
          Ayurveda · Since 1986
        </span>
      </span>
    </Link>
  );
}

function SearchBox({ onNavigate }: { onNavigate?: () => void }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const results = useMemo(() => searchSite(q), [q]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-xs">
      <label htmlFor="site-search" className="sr-only">
        Search the site
      </label>
      <div className="flex items-center gap-2 rounded-full border border-sus-green/15 bg-white/90 px-3 py-2">
        <Search className="h-4 w-4 text-sus-muted" aria-hidden="true" />
        <input
          id="site-search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search treatments, doctors…"
          className="w-full bg-transparent text-sm text-sus-ink placeholder:text-sus-muted/70 focus:outline-none"
          autoComplete="off"
        />
      </div>
      {open && q.trim().length >= 2 && (
        <div className="absolute right-0 z-50 mt-2 w-[min(100vw-2rem,22rem)] overflow-hidden rounded-2xl border border-sus-green/10 bg-white shadow-xl">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-sus-muted">No matches. Try Panchakarma, fertility, Kowdiar…</p>
          ) : (
            <ul className="max-h-80 overflow-auto py-2">
              {results.map((r) => (
                <li key={r.path + r.title}>
                  <Link
                    to={r.path}
                    onClick={() => {
                      setOpen(false);
                      setQ('');
                      onNavigate?.();
                    }}
                    className="block px-4 py-2.5 hover:bg-sus-cream"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-sus-gold">{r.type}</span>
                    <span className="block text-sm font-medium text-sus-green-deep">{r.title}</span>
                    <span className="block text-xs text-sus-muted line-clamp-1">{r.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function DesktopMega() {
  const directors = getDirectors();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus = [
    {
      key: 'treatments',
      label: 'Treatments',
      to: '/treatments',
      cols: treatments.slice(0, 8).map((t) => ({ label: t.name, to: `/treatments/${t.slug}` })),
    },
    {
      key: 'conditions',
      label: 'Conditions',
      to: '/conditions',
      cols: specialties.map((s) => ({ label: s.shortName, to: `/conditions/${s.slug}` })),
    },
    {
      key: 'doctors',
      label: 'Doctors',
      to: '/doctors',
      cols: [
        ...directors.map((d) => ({ label: d.name, to: `/doctors/${d.slug}` })),
        { label: 'Full roster', to: '/doctors' },
      ],
    },
    {
      key: 'explore',
      label: 'Explore',
      to: '/about',
      cols: [
        { label: 'About & legacy', to: '/about' },
        { label: 'Branches', to: '/branches' },
        { label: 'Ayur Village', to: '/ayur-village' },
        { label: 'Packages', to: '/packages' },
        { label: 'Knowledge Centre', to: '/knowledge' },
        { label: 'International patients', to: '/international-patients' },
        { label: 'Ecosystem', to: '/ecosystem' },
        { label: 'Facilities', to: '/facilities' },
        { label: 'Video gallery', to: '/videos' },
        { label: 'Media', to: '/media' },
      ],
    },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
      {menus.map((menu) => (
        <div
          key={menu.key}
          className="relative"
          onMouseEnter={() => setOpenMenu(menu.key)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <NavLink
            to={menu.to}
            className={({ isActive }) =>
              cn(
                'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors',
                isActive ? 'text-sus-green' : 'text-sus-ink/80 hover:text-sus-green',
              )
            }
          >
            {menu.label}
            <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </NavLink>
          {openMenu === menu.key && (
            <div className="absolute left-0 top-full z-50 pt-2">
              <div className="min-w-[16rem] rounded-2xl border border-sus-green/10 bg-white p-3 shadow-xl">
                <ul className="space-y-0.5">
                  {menu.cols.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block rounded-xl px-3 py-2 text-sm text-sus-ink hover:bg-sus-cream hover:text-sus-green"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cn('rounded-full px-3 py-2 text-sm font-medium', isActive ? 'text-sus-green' : 'text-sus-ink/80 hover:text-sus-green')
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="bg-sus-green-deep text-sus-sand/90">
        <div className="container-wide section-pad flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
          <p className="hidden sm:block">{brand.legacyFraming}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${brand.contact.mobileTel}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {brand.contact.mobile}
            </a>
            <span className="hidden md:inline text-sus-sand/60">OP {brand.hours.op}</span>
            <span className="text-sus-gold-soft">Hospital {brand.hours.hospital}</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-sus-green/10 bg-sus-cream/90 backdrop-blur-md">
        <div className="container-wide section-pad flex items-center justify-between gap-4 py-3">
          <Logo />
          <DesktopMega />
          <div className="hidden md:block">
            <SearchBox />
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/book"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sus-green px-4 py-2.5 text-sm font-medium text-sus-cream hover:bg-sus-green-deep transition-colors"
            >
              <CalendarHeart className="h-4 w-4" /> Book
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-sus-green/15 bg-white"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-sus-green/10 bg-sus-cream">
            <div className="section-pad space-y-4 py-4">
              <SearchBox onNavigate={() => setMobileOpen(false)} />
              <div className="grid gap-1">
                {[
                  ['Treatments', '/treatments'],
                  ['Conditions', '/conditions'],
                  ['Doctors', '/doctors'],
                  ['Packages', '/packages'],
                  ['Branches', '/branches'],
                  ['Ayur Village', '/ayur-village'],
                  ['Knowledge', '/knowledge'],
                  ['About', '/about'],
                  ['International', '/international-patients'],
                  ['Ecosystem', '/ecosystem'],
                  ['Videos', '/videos'],
                  ['Contact', '/contact'],
                  ['Book appointment', '/book'],
                ].map(([label, to]) => (
                  <Link key={to} to={to} className="rounded-xl px-3 py-3 text-sus-green-deep hover:bg-white font-medium">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-sus-green-deep text-sus-sand">
      <div className="container-wide section-pad py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <Logo light />
            <p className="text-sm leading-relaxed text-sus-sand/80 max-w-sm">{brand.positioning}</p>
            <p className="text-sm text-sus-sand/70">{brand.legalName}</p>
            <div className="flex gap-3">
              <a
                href={brand.contact.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={brand.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xl text-sus-cream mb-4">Branches</h3>
            <ul className="space-y-4 text-sm">
              {branches.map((b) => (
                <li key={b.id}>
                  <Link to={`/branches/${b.slug}`} className="font-medium text-sus-cream hover:text-sus-gold-soft">
                    {b.name}
                  </Link>
                  <p className="text-sus-sand/70 mt-1">{b.address}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xl text-sus-cream mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Doctors', '/doctors'],
                ['Treatments', '/treatments'],
                ['Packages', '/packages'],
                ['Knowledge Centre', '/knowledge'],
                ['Ecosystem', '/ecosystem'],
                ['Video gallery', '/videos'],
                ['Testimonials', '/testimonials'],
                ['International', '/international-patients'],
                ['FAQ', '/faq'],
                ['Media', '/media'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sus-gold-soft">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xl text-sus-cream mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${brand.contact.mobileTel}`} className="hover:text-sus-gold-soft">
                  {brand.contact.mobile}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.contact.landlineTel}`} className="hover:text-sus-gold-soft">
                  {brand.contact.landline}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.contact.email}`} className="hover:text-sus-gold-soft">
                  {brand.contact.email}
                </a>
              </li>
              <li className="text-sus-sand/70">OP {brand.hours.op}</li>
              <li className="text-sus-sand/70">Pharmacy {brand.hours.pharmacy}</li>
              <li>
                <a
                  href={brand.contact.googleReview}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sus-gold-soft hover:text-white"
                >
                  Google reviews <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <div key={v.name} className="text-sm">
              {v.url ? (
                <a href={v.url} target="_blank" rel="noreferrer" className="text-sus-cream hover:text-sus-gold-soft inline-flex items-center gap-1">
                  {v.name} <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="text-sus-cream">{v.name}</span>
              )}
              <p className="text-sus-sand/65 mt-1">{v.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Disclaimer />
          <p className="text-xs text-sus-sand/50 shrink-0">© {new Date().getFullYear()} {brand.commonName}</p>
        </div>
      </div>
    </footer>
  );
}

function MobileQuickActions() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-sus-green/10 bg-sus-cream/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-5 text-[10px]">
        <Link to="/book" className="flex flex-col items-center gap-1 py-2.5 text-sus-green-deep">
          <CalendarHeart className="h-5 w-5" /> Book
        </Link>
        <a href={`tel:${brand.contact.mobileTel}`} className="flex flex-col items-center gap-1 py-2.5 text-sus-green-deep">
          <Phone className="h-5 w-5" /> Call
        </a>
        <a
          href={brand.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-sus-green-deep"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <a href={`tel:${brand.contact.emergency[0].replace(/\s/g, '')}`} className="flex flex-col items-center gap-1 py-2.5 text-sus-terracotta">
          <AlertTriangle className="h-5 w-5" /> Emergency
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${branches[0].mapQuery}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-sus-green-deep"
        >
          <MapPin className="h-5 w-5" /> Directions
        </a>
      </div>
    </div>
  );
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
}
