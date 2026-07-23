# Susrutha Ayurveda — Premium Hospital Website

Production-ready Vite + React + TypeScript + Tailwind site for **Susrutha Institute of Ayurvedic Sciences (Research) and Panchakarma Hospital** (Susrutha Ayurveda), Kattakada & Kowdiar, Thiruvananthapuram.

Built from the Design Arena content brief with seed JSON data, brand tokens, dynamic templates, working forms, search, and SAG·EO-oriented page structure.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (brand tokens in `src/index.css`)
- React Router
- Framer Motion (respects `prefers-reduced-motion`)
- Lucide icons

## Brand tokens

| Token | Hex |
|-------|-----|
| `--sus-green-deep` | `#123524` |
| `--sus-green` | `#1E5631` |
| `--sus-green-soft` | `#3E7C59` |
| `--sus-gold` | `#B8860B` |
| `--sus-gold-soft` | `#D4AF6A` |
| `--sus-cream` | `#F6F1E7` |
| `--sus-sand` | `#E9DFC9` |
| `--sus-terracotta` | `#B4532A` |
| `--sus-ink` | `#1C1B17` |
| `--sus-muted` | `#6B6659` |

Typography: **Cormorant Garamond** (display) + **DM Sans** (body).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home documentary layout |
| `/about` | Heritage, timeline, vision/mission |
| `/doctors`, `/doctors/:slug` | Roster + cinematic profiles |
| `/treatments`, `/treatments/:slug` | Therapy templates |
| `/conditions`, `/conditions/:slug` | Speciality/condition templates |
| `/packages`, `/packages/:slug` | 12 care packages |
| `/package-enquiry` | Package enquiry form |
| `/branches`, `/branches/:slug` | Kattakada & Kowdiar |
| `/ayur-village` | Gramam stay |
| `/international-patients` | Medical travel |
| `/knowledge`, `/knowledge/:slug` | Articles |
| `/facilities`, `/media`, `/testimonials`, `/affiliations`, `/faq` | Trust & content |
| `/book` | Appointment booking |
| `/contact` | NAP, emergency, forms |

## Content model (seed data)

Edit these files to add CMS-like content (ready to swap for Django/MySQL API later):

- `src/data/site.ts` — brand, branches, timeline, facilities, verticals
- `src/data/doctors.ts` — directors + roster
- `src/data/specialties.ts` — condition pages
- `src/data/treatments.ts` — therapy pages
- `src/data/packages.ts` — packages
- `src/data/content.ts` — articles, FAQs, testimonials

### Add a doctor

1. Append an object to `doctors` in `src/data/doctors.ts` with unique `id` + `slug`.
2. Set `branchIds`, `specialtyIds`, `signatureTreatments` to existing IDs.
3. Profile route is automatic: `/doctors/your-slug`.

### Add a treatment

1. Append to `treatments` in `src/data/treatments.ts`.
2. Link from doctors via `signatureTreatments` and specialties via `relatedTreatmentIds`.

### Add a package

1. Append to `packages` in `src/data/packages.ts`.
2. It appears in index, enquiry dropdown, and search automatically.

## Working features

- Predictive header search (treatments, conditions, doctors, packages, articles, FAQ, pages)
- Appointment booking with validation, branch→doctor filter, confirmation screen, `localStorage` record
- Package enquiry (all 12 packages)
- Contact / feedback form
- Moderated testimonial submission
- Mobile quick actions: Book, Call, WhatsApp, Emergency, Directions
- JSON-LD for Organization, Physician, FAQ, Article, MedicalCondition/Therapy, LocalBusiness-style branches

## Guardrails

- No fabricated ratings, awards stats, or cure claims
- `<<CONFIRM>>` items render as visible “pending verification” slots
- YMYL educational framing throughout

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Note on stack

The brief requested Next.js; this Design Arena runtime is Vite/React. IA, tokens, templates, SEO patterns and forms match the brief and can be ported to App Router with the same data modules.
