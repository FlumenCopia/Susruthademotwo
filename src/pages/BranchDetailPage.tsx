import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { branches, brand } from '../data/site';
import { getDoctorsByBranch } from '../data/doctors';
import { Breadcrumbs, Button, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function BranchDetailPage() {
  const { slug } = useParams();
  const branch = branches.find((b) => b.slug === slug);

  useEffect(() => {
    if (!branch) return;
    document.title = pageTitle(branch.name);
    document.getElementById('schema-branch')?.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-branch';
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: `${brand.commonName} — ${branch.name}`,
      description: branch.description,
      address: branch.address,
      telephone: brand.contact.mobile,
      url: `/branches/${branch.slug}`,
    });
    document.head.appendChild(el);
  }, [branch]);

  if (!branch) {
    return (
      <div className="container-wide section-pad py-20">
        <h1 className="font-display text-3xl">Branch not found</h1>
        <Button to="/branches" className="mt-6">All branches</Button>
      </div>
    );
  }

  const docs = getDoctorsByBranch(branch.id);

  return (
    <div>
      <PageHero eyebrow={branch.type} title={branch.name} description={branch.address}>
        <div className="flex flex-wrap gap-3">
          <Button to="/book">Book at this branch</Button>
          <Button href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery}`} variant="secondary">
            Open map
          </Button>
        </div>
      </PageHero>
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Branches', to: '/branches' }, { label: branch.name }]} />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img src={branch.image} alt="" className="rounded-[1.5rem] w-full aspect-[16/11] object-cover" />
            <p className="mt-6 text-sus-muted leading-relaxed">{branch.description}</p>
            <h2 className="mt-8 font-display text-2xl text-sus-green-deep">Facilities & focus</h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {branch.features.map((f) => (
                <li key={f} className="rounded-xl border border-sus-green/10 bg-white px-4 py-3 text-sm">{f}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-sus-green/10 bg-white p-6">
              <h2 className="font-display text-2xl text-sus-green-deep">Hours</h2>
              <dl className="mt-4 space-y-2 text-sm">
                {Object.entries(branch.hours).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-sus-sand pb-2">
                    <dt className="capitalize text-sus-muted">{k.replace(/([A-Z])/g, ' $1')}</dt>
                    <dd className="text-sus-ink text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-6">
              <h2 className="font-display text-2xl text-sus-green-deep">Contact</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="text-sus-green hover:underline" href={`tel:${brand.contact.mobileTel}`}>{brand.contact.mobile}</a></li>
                <li><a className="text-sus-green hover:underline" href={`tel:${brand.contact.landlineTel}`}>{brand.contact.landline}</a></li>
                <li><a className="text-sus-green hover:underline" href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-sus-green/10 bg-white p-6">
              <h2 className="font-display text-2xl text-sus-green-deep">Doctors & days</h2>
              <ul className="mt-4 space-y-3">
                {docs.map((d) => (
                  <li key={d.id} className="border-b border-sus-sand pb-3">
                    <Link to={`/doctors/${d.slug}`} className="font-medium text-sus-green-deep hover:text-sus-green">{d.name}</Link>
                    <p className="text-xs text-sus-muted mt-1">{d.availability}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-sus-green/10 bg-sus-sand/30 aspect-video">
              <iframe
                title={`Map of ${branch.name}`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${branch.mapQuery}&z=13&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
