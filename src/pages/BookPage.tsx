import { useEffect } from 'react';
import AppointmentHub from '../components/AppointmentHub';
import { Breadcrumbs, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';
import { brand } from '../data/site';

export default function BookPage() {
  useEffect(() => {
    document.title = pageTitle('Book Appointment');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Care desk"
        title="Book, enquire, contact or share feedback"
        description={`One hub for appointments, packages and messages · ${brand.contact.mobile}`}
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Book appointment' }]} />
        <AppointmentHub />
      </div>
    </div>
  );
}
