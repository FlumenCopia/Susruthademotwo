import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CalendarHeart,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareHeart,
  Package,
  Phone,
  Star,
} from 'lucide-react';
import { branches, brand } from '../data/site';
import { doctors } from '../data/doctors';
import { specialties } from '../data/specialties';
import { packages } from '../data/packages';
import { Button, FieldError, inputClass, Label } from './ui';
import { cn } from '../lib/utils';

type Tab = 'appointment' | 'package' | 'contact' | 'feedback';

const tabs: { id: Tab; label: string; icon: typeof CalendarHeart }[] = [
  { id: 'appointment', label: 'Book Appointment', icon: CalendarHeart },
  { id: 'package', label: 'Package Enquiry', icon: Package },
  { id: 'contact', label: 'Contact Us', icon: Mail },
  { id: 'feedback', label: 'Feedback', icon: MessageSquareHeart },
];

export default function AppointmentHub({ defaultTab = 'appointment' as Tab }: { defaultTab?: Tab }) {
  const [params] = useSearchParams();
  const [tab, setTab] = useState<Tab>(defaultTab);
  const [done, setDone] = useState<string | null>(null);

  const [appt, setAppt] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'kattakada',
    doctor: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [pkg, setPkg] = useState({
    name: '',
    phone: '',
    packageId: '',
    dates: '',
    people: '1',
    international: 'no',
    message: '',
  });
  const [contact, setContact] = useState({ name: '', phone: '', email: '', message: '' });
  const [feedback, setFeedback] = useState({ name: '', phone: '', rating: '5', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const t = params.get('tab') as Tab | null;
    if (t && tabs.some((x) => x.id === t)) setTab(t);
    const docSlug = params.get('doctor');
    if (docSlug) {
      const d = doctors.find((x) => x.slug === docSlug);
      if (d) setAppt((a) => ({ ...a, doctor: d.id, branch: d.branchIds[0] || a.branch }));
    }
    const packageSlug = params.get('package');
    if (packageSlug) {
      const p = packages.find((x) => x.slug === packageSlug);
      if (p) {
        setTab('package');
        setPkg((x) => ({ ...x, packageId: p.id }));
      }
    }
  }, [params]);

  const availableDoctors = useMemo(
    () => doctors.filter((d) => d.branchIds.includes(appt.branch)),
    [appt.branch],
  );

  function store(key: string, payload: unknown) {
    try {
      const prev = JSON.parse(localStorage.getItem(key) || '[]');
      prev.push({ ...payload as object, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev));
    } catch {
      /* optional */
    }
  }

  function submitAppointment(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!appt.name.trim()) err.name = 'Please enter your full name.';
    if (!/^[\d\s+]{8,15}$/.test(appt.phone.trim())) err.phone = 'Enter a valid phone number.';
    if (appt.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appt.email)) err.email = 'Enter a valid email or leave blank.';
    if (!appt.service) err.service = 'Select a specialty/service.';
    if (!appt.date) err.date = 'Choose a preferred date.';
    if (!appt.time) err.time = 'Choose a preferred time.';
    setErrors(err);
    if (Object.keys(err).length) return;
    store('susrutha_appointments', appt);
    setDone('appointment');
  }

  function submitPackage(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!pkg.name.trim()) err.pname = 'Name is required.';
    if (!/^[\d\s+]{8,15}$/.test(pkg.phone.trim())) err.pphone = 'Valid phone required.';
    if (!pkg.packageId) err.packageId = 'Select a package.';
    if (!pkg.dates.trim()) err.dates = 'Share preferred dates.';
    setErrors(err);
    if (Object.keys(err).length) return;
    store('susrutha_enquiries', pkg);
    setDone('package');
  }

  function submitContact(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!contact.name.trim()) err.cname = 'Name required';
    if (!contact.phone.trim()) err.cphone = 'Phone required';
    if (!contact.message.trim()) err.cmessage = 'Message required';
    setErrors(err);
    if (Object.keys(err).length) return;
    store('susrutha_contact', { ...contact, topic: 'general' });
    setDone('contact');
  }

  function submitFeedback(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!feedback.name.trim()) err.fname = 'Name required';
    if (!feedback.message.trim()) err.fmessage = 'Feedback required';
    setErrors(err);
    if (Object.keys(err).length) return;
    store('susrutha_feedback', feedback);
    setDone('feedback');
  }

  if (done) {
    const copy =
      done === 'appointment'
        ? 'Your appointment request has been recorded for confirmation against doctor availability.'
        : done === 'package'
          ? 'Your package enquiry is with our care coordination team.'
          : done === 'contact'
            ? 'Your message has been received. We will respond using your phone or email.'
            : 'Thank you for your feedback. It is queued for internal review.';
    return (
      <div className="rounded-[1.5rem] border border-sus-green/10 bg-white p-8 text-center">
        <h3 className="font-display text-3xl text-sus-green-deep">Request received</h3>
        <p className="mt-3 text-sus-muted max-w-lg mx-auto">{copy}</p>
        <p className="mt-4 text-sm text-sus-muted">
          Call {brand.contact.mobile} · Emergency {brand.contact.emergency[0]}
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setDone(null);
            setErrors({});
          }}
        >
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 xl:grid-cols-12">
      <div className="xl:col-span-7 space-y-5">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-sus-green/10 bg-white p-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setTab(t.id);
                  setErrors({});
                }}
                className={cn(
                  'inline-flex flex-1 min-w-[9rem] items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition-colors',
                  active ? 'bg-sus-green text-sus-cream' : 'text-sus-green-deep hover:bg-sus-cream',
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-[1.5rem] border border-sus-green/10 bg-white p-6 sm:p-8">
          {tab === 'appointment' && (
            <form onSubmit={submitAppointment} className="space-y-5" noValidate>
              <div>
                <h2 className="font-display text-2xl text-sus-green-deep">Book Appointment</h2>
                <p className="mt-1 text-sm text-sus-muted">Requests are confirmed against live roster before you travel.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="full-name">Full Name</Label>
                  <input id="full-name" className={inputClass} value={appt.name} onChange={(e) => setAppt({ ...appt, name: e.target.value })} autoComplete="name" />
                  <FieldError message={errors.name} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <input id="phone" className={inputClass} value={appt.phone} onChange={(e) => setAppt({ ...appt, phone: e.target.value })} autoComplete="tel" />
                  <FieldError message={errors.phone} />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <input id="email" type="email" className={inputClass} value={appt.email} onChange={(e) => setAppt({ ...appt, email: e.target.value })} />
                <FieldError message={errors.email} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <select id="branch" className={inputClass} value={appt.branch} onChange={(e) => setAppt({ ...appt, branch: e.target.value, doctor: '' })}>
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="doctor">Doctor (Optional)</Label>
                  <select id="doctor" className={inputClass} value={appt.doctor} onChange={(e) => setAppt({ ...appt, doctor: e.target.value })}>
                    <option value="">First available / advise me</option>
                    {availableDoctors.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="service">Specialty / Service</Label>
                <select id="service" className={inputClass} value={appt.service} onChange={(e) => setAppt({ ...appt, service: e.target.value })}>
                  <option value="">Select…</option>
                  {specialties.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                  <option value="general-consult">General consultation</option>
                  <option value="package-planning">Package planning</option>
                </select>
                <FieldError message={errors.service} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <input id="date" type="date" className={inputClass} value={appt.date} onChange={(e) => setAppt({ ...appt, date: e.target.value })} />
                  <FieldError message={errors.date} />
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <select id="time" className={inputClass} value={appt.time} onChange={(e) => setAppt({ ...appt, time: e.target.value })}>
                    <option value="">Select…</option>
                    <option>9:00 AM – 11:00 AM</option>
                    <option>11:00 AM – 1:00 PM</option>
                    <option>2:00 PM – 4:00 PM</option>
                    <option>4:00 PM – 6:00 PM</option>
                  </select>
                  <FieldError message={errors.time} />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea id="message" rows={4} className={inputClass} value={appt.message} onChange={(e) => setAppt({ ...appt, message: e.target.value })} placeholder="Symptoms, reports, travel plans…" />
              </div>
              <Button type="submit">Request Appointment</Button>
            </form>
          )}

          {tab === 'package' && (
            <form onSubmit={submitPackage} className="space-y-5" noValidate>
              <div>
                <h2 className="font-display text-2xl text-sus-green-deep">Package Enquiry</h2>
                <p className="mt-1 text-sm text-sus-muted">All twelve programmes — tariffs confirmed after clinical review.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="pname">Full Name</Label>
                  <input id="pname" className={inputClass} value={pkg.name} onChange={(e) => setPkg({ ...pkg, name: e.target.value })} />
                  <FieldError message={errors.pname} />
                </div>
                <div>
                  <Label htmlFor="pphone">Phone</Label>
                  <input id="pphone" className={inputClass} value={pkg.phone} onChange={(e) => setPkg({ ...pkg, phone: e.target.value })} />
                  <FieldError message={errors.pphone} />
                </div>
              </div>
              <div>
                <Label htmlFor="packageId">Package</Label>
                <select id="packageId" className={inputClass} value={pkg.packageId} onChange={(e) => setPkg({ ...pkg, packageId: e.target.value })}>
                  <option value="">Select package…</option>
                  {packages.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
                <FieldError message={errors.packageId} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="dates">Preferred dates</Label>
                  <input id="dates" className={inputClass} value={pkg.dates} onChange={(e) => setPkg({ ...pkg, dates: e.target.value })} placeholder="e.g. 12–20 Aug" />
                  <FieldError message={errors.dates} />
                </div>
                <div>
                  <Label htmlFor="people">No. of people</Label>
                  <input id="people" type="number" min={1} max={12} className={inputClass} value={pkg.people} onChange={(e) => setPkg({ ...pkg, people: e.target.value })} />
                </div>
              </div>
              <div>
                <Label htmlFor="intl">International patient?</Label>
                <select id="intl" className={inputClass} value={pkg.international} onChange={(e) => setPkg({ ...pkg, international: e.target.value })}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <Label htmlFor="pmsg">Message</Label>
                <textarea id="pmsg" rows={4} className={inputClass} value={pkg.message} onChange={(e) => setPkg({ ...pkg, message: e.target.value })} />
              </div>
              <Button type="submit">Send Package Enquiry</Button>
            </form>
          )}

          {tab === 'contact' && (
            <form onSubmit={submitContact} className="space-y-5" noValidate>
              <div>
                <h2 className="font-display text-2xl text-sus-green-deep">Contact Us</h2>
                <p className="mt-1 text-sm text-sus-muted">General questions, coordination and media notes.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="cname">Full Name</Label>
                  <input id="cname" className={inputClass} value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                  <FieldError message={errors.cname} />
                </div>
                <div>
                  <Label htmlFor="cphone">Phone</Label>
                  <input id="cphone" className={inputClass} value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                  <FieldError message={errors.cphone} />
                </div>
              </div>
              <div>
                <Label htmlFor="cemail">Email (Optional)</Label>
                <input id="cemail" type="email" className={inputClass} value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="cmsg">Message</Label>
                <textarea id="cmsg" rows={5} className={inputClass} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} />
                <FieldError message={errors.cmessage} />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          )}

          {tab === 'feedback' && (
            <form onSubmit={submitFeedback} className="space-y-5" noValidate>
              <div>
                <h2 className="font-display text-2xl text-sus-green-deep">Feedback</h2>
                <p className="mt-1 text-sm text-sus-muted">Help us improve hospital experience. Not published automatically.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="fname">Full Name</Label>
                  <input id="fname" className={inputClass} value={feedback.name} onChange={(e) => setFeedback({ ...feedback, name: e.target.value })} />
                  <FieldError message={errors.fname} />
                </div>
                <div>
                  <Label htmlFor="fphone">Phone (Optional)</Label>
                  <input id="fphone" className={inputClass} value={feedback.phone} onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <Label htmlFor="rating">Experience rating</Label>
                <select id="rating" className={inputClass} value={feedback.rating} onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}>
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>{n} / 5</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="fmsg">Your feedback</Label>
                <textarea id="fmsg" rows={5} className={inputClass} value={feedback.message} onChange={(e) => setFeedback({ ...feedback, message: e.target.value })} />
                <FieldError message={errors.fmessage} />
              </div>
              <Button type="submit">Submit Feedback</Button>
            </form>
          )}
        </div>
      </div>

      <aside className="xl:col-span-5 space-y-5">
        <h3 className="font-display text-2xl text-sus-green-deep">Branches & quick actions</h3>
        {branches.map((b) => (
          <div key={b.id} className="rounded-[1.5rem] border border-sus-green/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-sus-gold">{b.type}</p>
            <h4 className="mt-1 font-display text-2xl text-sus-green-deep">{b.name}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-sus-muted">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-sus-green mt-0.5" /><span>{b.address}</span></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-sus-green mt-0.5" /><a className="hover:text-sus-green" href={`tel:${brand.contact.mobileTel}`}>{brand.contact.mobile}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-sus-green mt-0.5" /><a className="hover:text-sus-green" href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a></li>
              <li><span className="text-sus-ink font-medium">OP timing:</span> {'op' in b.hours ? b.hours.op : brand.hours.op}</li>
              <li><span className="text-sus-ink font-medium">Hospital timing:</span> {'hospital' in b.hours ? b.hours.hospital : b.id === 'kattakada' ? brand.hours.hospital : 'OP centre — see doctor schedule'}</li>
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href={`tel:${brand.contact.mobileTel}`} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sus-green/15 px-3 py-2 text-xs font-medium text-sus-green-deep hover:bg-sus-cream">
                <Phone className="h-3.5 w-3.5" /> Call
              </a>
              <a href={brand.contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sus-green/15 px-3 py-2 text-xs font-medium text-sus-green-deep hover:bg-sus-cream">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${b.mapQuery}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sus-green/15 px-3 py-2 text-xs font-medium text-sus-green-deep hover:bg-sus-cream">
                <MapPin className="h-3.5 w-3.5" /> Directions
              </a>
              <a href={brand.contact.googleReview} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sus-green/15 px-3 py-2 text-xs font-medium text-sus-green-deep hover:bg-sus-cream">
                <Star className="h-3.5 w-3.5" /> Leave Review
              </a>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
