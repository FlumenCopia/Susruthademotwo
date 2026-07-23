import { useEffect } from 'react';
import AppointmentHub from '../components/AppointmentHub';
import { Breadcrumbs, PageHero } from '../components/ui';
import { pageTitle } from '../lib/seo';

export default function PackageEnquiryPage() {
  useEffect(() => {
    document.title = pageTitle('Package Enquiry');
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Packages"
        title="Package enquiry"
        description="Tell us which programme you are considering. International guests welcome."
      />
      <div className="container-wide section-pad py-12">
        <Breadcrumbs items={[{ label: 'Packages', to: '/packages' }, { label: 'Enquiry' }]} />
        <AppointmentHub defaultTab="package" />
      </div>
    </div>
  );
}
