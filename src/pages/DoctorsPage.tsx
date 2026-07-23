import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { branches } from '../data/site';
import { specialties } from '../data/specialties';
import { Breadcrumbs, PageHero, SectionHeading } from '../components/ui';
import { pageTitle } from '../lib/seo';
import { cn } from '../lib/utils';

export default function DoctorsPage() {
  const [branch, setBranch] = useState('all');
  const [specialty, setSpecialty] = useState('all');
  const [day, setDay] = useState('all');

  useEffect(() => {
    document.title = pageTitle('Doctors');
  }, []);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      if (branch !== 'all' && !d.branchIds.includes(branch)) return false;
      if (specialty !== 'all' && !d.specialtyIds.includes(specialty)) return false;
      if (day !== 'all' && !d.availability.toLowerCase().includes(day.toLowerCase())) return false;
      return true;
    });
  }, [branch, specialty, day]);

  const directors = filtered.filter((d) => d.isDirector);
  const others = filtered.filter((d) => !d.isDirector);

  return (
    <div>
      <PageHero
        eyebrow="Clinical team"
        title="Doctors of Susrutha"
        description="Directors first — then the full roster. Filter by branch, speciality focus or clinic day language from published availability."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Doctors' }]} />

        <div className="grid gap-4 rounded-2xl border border-sus-green/10 bg-white p-4 sm:p-5 md:grid-cols-3">
          <div>
            <label htmlFor="filter-branch" className="text-xs uppercase tracking-wider text-sus-gold">Branch</label>
            <select id="filter-branch" className="mt-1 w-full rounded-xl border border-sus-green/15 bg-sus-cream/50 px-3 py-2.5" value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="all">All branches</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-spec" className="text-xs uppercase tracking-wider text-sus-gold">Speciality</label>
            <select id="filter-spec" className="mt-1 w-full rounded-xl border border-sus-green/15 bg-sus-cream/50 px-3 py-2.5" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="all">All specialities</option>
              {specialties.map((s) => (
                <option key={s.id} value={s.id}>{s.shortName}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-day" className="text-xs uppercase tracking-wider text-sus-gold">Day keyword</label>
            <select id="filter-day" className="mt-1 w-full rounded-xl border border-sus-green/15 bg-sus-cream/50 px-3 py-2.5" value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="all">Any day</option>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'appointment', '24'].map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <section className="mt-12">
          <SectionHeading eyebrow="Directors" title="Thought leadership & clinical direction" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {directors.length === 0 && <p className="text-sus-muted">No directors match these filters.</p>}
            {directors.map((d) => (
              <Link key={d.id} to={`/doctors/${d.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-sus-green/10 bg-white hover:border-sus-green/25 transition-all hover:-translate-y-1">
                <div className="aspect-[5/3] overflow-hidden bg-sus-sand">
                  <img src={d.image || '/images/doctor-portrait.jpg'} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-sus-gold">Director</p>
                  <h2 className="mt-1 font-display text-2xl text-sus-green-deep">{d.name}</h2>
                  <p className="text-sm text-sus-muted">{d.qual}</p>
                  <p className="mt-3 text-sm text-sus-muted line-clamp-2">{d.role}</p>
                  <p className="mt-3 text-xs text-sus-green">{d.availability}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.pillars.slice(0, 2).map((p) => (
                      <span key={p} className="rounded-full bg-sus-sand/70 px-2.5 py-1 text-[11px] text-sus-green-deep">{p}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="Roster" title="Consulting physicians & specialists" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {others.length === 0 && <p className="text-sus-muted">No roster doctors match these filters.</p>}
            {others.map((d) => (
              <Link key={d.id} to={`/doctors/${d.slug}`} className={cn('rounded-2xl border border-sus-green/10 bg-white p-5 hover:border-sus-green/25 transition-colors')}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl text-sus-green-deep">{d.name}</h2>
                    <p className="text-sm text-sus-muted mt-1">{d.qual}</p>
                    <p className="text-sm text-sus-ink/80 mt-2">{d.role}</p>
                  </div>
                  {d.eeat && <span className="shrink-0 rounded-full bg-sus-sand px-2.5 py-1 text-[10px] uppercase tracking-wide text-sus-green">{d.eeat.split('—')[0]}</span>}
                </div>
                <p className="mt-3 text-xs text-sus-green">{d.availability}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
