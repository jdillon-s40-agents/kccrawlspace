# Crawl Space Assessment Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new paid "Crawl Space Assessment" page (`/crawl-space-assessment-kansas-city/`) offering Virtual ($97) and In-Person ($197) assessment tiers, with a conditional intake form that emails submissions via Formspree.

**Architecture:** One new server-component page + one new client-component form, following the exact conventions already used across the site's 57 existing pages and `components/InspectionForm.tsx`. No new dependencies, no backend, no payment processing — Formspree emails the submission, Jason invoices manually.

**Tech Stack:** Next.js 16 App Router, TypeScript, inline style objects (no Tailwind/CSS modules — matches existing pages), Formspree for form delivery.

**Spec:** See `docs/superpowers/specs/2026-07-07-diy-assessment-design.md` for full design rationale.

---

### Task 1: Add nav link

**Files:**
- Modify: `lib/constants.ts:6-14`

- [ ] **Step 1: Add the new nav entry**

Current `NAV_LINKS` array:

```ts
export const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'encapsulation', label: 'Encapsulation', href: '/encapsulation' },
  { key: 'mobile', label: 'Mobile Homes', href: '/mobile-homes' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const;
```

Change to (new entry inserted after `pricing`, before `about`):

```ts
export const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'encapsulation', label: 'Encapsulation', href: '/encapsulation' },
  { key: 'mobile', label: 'Mobile Homes', href: '/mobile-homes' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'assessment', label: 'Assessments', href: '/crawl-space-assessment-kansas-city/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const;
```

- [ ] **Step 2: Verify no type errors**

Run: `npx tsc --noEmit`
Expected: no output (pass). `Header.tsx` derives `activeKey` from `NAV_LINKS` and matches by `pathname.startsWith(l.href)`, so the new route will highlight correctly once the page exists.

- [ ] **Step 3: Commit**

```bash
git add lib/constants.ts
git commit -m "feat: add Assessments nav link"
```

---

### Task 2: Build the AssessmentForm client component

**Files:**
- Create: `components/AssessmentForm.tsx`

- [ ] **Step 1: Write the full component**

```tsx
'use client';
import { useState, useRef, FormEvent } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdvvlkp';

const PROP_TYPES = ['Site-Built Home', 'Mobile Home', 'Other'];
const SIZE_OPTIONS = [
  'Under 500 sq ft', '500–1,000 sq ft', '1,000–1,500 sq ft',
  '1,500–2,000 sq ft', 'Over 2,000 sq ft', 'Not sure',
];
const SYMPTOMS = [
  'Musty smell in the home', 'Cold floors in winter', 'High energy bills',
  'Mold concern', 'Home inspector flagged it', 'High humidity / moisture readings',
  'Pest or animal evidence', 'Standing water or wet soil',
  'Preparing to sell the home', 'Just want to know what’s there',
];
const MOISTURE_METER_OPTIONS = ['Yes', 'No', 'I can get one'];
const ACCESS_OPTIONS = [
  'Yes — no problem', 'Yes — tight but doable', 'Not sure', 'No — very limited access',
];
const PREFERRED_DAYS = ['Monday–Friday daytime', 'Saturday morning', 'Saturday afternoon', 'Flexible — just call me'];
const PREFERRED_CONTACT = ['Phone call', 'Text message', 'Either'];
const HEAR_OPTIONS = [
  'Nextdoor', 'Facebook', 'Google', 'Referral from neighbor or friend',
  'Home inspector referral', 'Realtor referral', 'Other',
];

function chipStyle(selected: boolean): React.CSSProperties {
  return {
    padding: '13px 12px',
    borderRadius: 9,
    border: '1.5px solid',
    font: "700 14px 'Inter',sans-serif",
    cursor: 'pointer',
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    textAlign: 'center' as const,
    transition: 'all .15s ease',
    userSelect: 'none' as const,
    lineHeight: 1.25,
    background: selected ? '#F5A623' : 'rgba(255,255,255,.05)',
    borderColor: selected ? '#F5A623' : 'rgba(255,255,255,.18)',
    color: selected ? '#0D0D0D' : '#e5e7eb',
  };
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,.05)',
  border: '1.5px solid rgba(255,255,255,.18)',
  borderRadius: 9,
  padding: '13px 14px',
  color: '#fff',
  font: "500 16px 'Inter',sans-serif",
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  font: "600 13px 'Inter',sans-serif",
  color: '#cbd5e1',
  marginBottom: 7,
  letterSpacing: '.02em',
};

const sectionLabelStyle: React.CSSProperties = {
  ...labelStyle,
  fontSize: 15,
  color: '#fff',
  marginBottom: 12,
};

function ServiceCard({
  selected, onClick, title, price, blurb,
}: { selected: boolean; onClick: () => void; title: string; price: string; blurb: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left' as const,
        border: '2px solid',
        borderColor: selected ? '#F5A623' : 'rgba(255,255,255,.18)',
        background: selected ? 'rgba(245,166,35,.1)' : 'rgba(255,255,255,.03)',
        borderRadius: 14,
        padding: '20px 22px',
        cursor: 'pointer',
        transition: 'all .15s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ font: "800 18px 'Inter',sans-serif", color: '#fff' }}>{title}</span>
        <span style={{ font: "800 22px 'Inter',sans-serif", color: '#F5A623' }}>{price}</span>
      </div>
      <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>{blurb}</p>
    </button>
  );
}

export default function AssessmentForm() {
  const [serviceType, setServiceType] = useState<'virtual' | 'in-person' | ''>('');
  const [propType, setPropType] = useState('');
  const [size, setSize] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [moistureMeter, setMoistureMeter] = useState('');
  const [access, setAccess] = useState('');
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [preferredContact, setPreferredContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  function toggleSymptom(label: string) {
    setSymptoms((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));
  }
  function toggleDay(label: string) {
    setPreferredDays((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!serviceType) {
      setError('Please choose Virtual or In-Person assessment above.');
      return;
    }
    setLoading(true);
    setError('');

    const fd = new FormData(formRef.current!);
    const fn = ((fd.get('firstName') as string) || '').trim() || 'there';
    setFirstName(fn);

    const body: Record<string, string> = {
      _subject: `New Crawlspace Assessment Request — ${serviceType === 'virtual' ? 'Virtual $97' : 'In-Person $197'}`,
      service_type: serviceType === 'virtual' ? 'Virtual Assessment ($97)' : 'In-Person Assessment ($197)',
      firstName: fn,
      lastName: (fd.get('lastName') as string) || '',
      email: (fd.get('email') as string) || '',
      phone: (fd.get('phone') as string) || '',
      property_address: (fd.get('address') as string) || '',
      city: (fd.get('city') as string) || '',
      zip_code: (fd.get('zip') as string) || '',
      property_type: propType || 'Not selected',
      crawlspace_size: size || 'Not selected',
      symptoms: symptoms.length ? symptoms.join(', ') : 'None selected',
      description: (fd.get('description') as string) || '',
      referral_source: (fd.get('hearAbout') as string) || '',
    };

    if (serviceType === 'virtual') {
      body.has_moisture_meter = moistureMeter || 'Not answered';
      body.can_access_crawlspace = access || 'Not answered';
    } else {
      body.preferred_days = preferredDays.length ? preferredDays.join(', ') : 'Not selected';
      body.preferred_contact = preferredContact || 'Not selected';
      body.access_notes = (fd.get('accessNotes') as string) || '';
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error || 'Something went wrong. Please call or text Jason directly.');
      }
    } catch (_) {
      setError('Network error — please try again or call/text Jason directly.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const isVirtual = serviceType === 'virtual';
    return (
      <div
        style={{
          background: 'rgba(22,163,74,.12)',
          border: '1.5px solid #16A34A',
          borderRadius: 16,
          padding: 34,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 60, height: 60, borderRadius: '50%', background: '#16A34A',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ font: "800 24px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>
          Got it, {firstName}!
        </h3>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#c3d0e6', margin: '0 0 14px' }}>
          Jason will review your submission and send an invoice to your email within a few hours.
          {isVirtual
            ? ' Once you pay, he’ll send your photo submission guide and moisture meter info to get started.'
            : ' Once you pay, he’ll text or call to schedule your visit.'}
        </p>
        <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0 }}>
          Questions in the meantime? Text Jason directly: <strong style={{ color: '#F5A623' }}>816-962-2111</strong>
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ marginBottom: 24 }}>
        <label style={sectionLabelStyle}>Choose your service *</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
          <ServiceCard
            selected={serviceType === 'virtual'}
            onClick={() => setServiceType('virtual')}
            title="Virtual Assessment"
            price="$97"
            blurb="Submit photos & measurements. Receive your written game plan within 48 hours."
          />
          <ServiceCard
            selected={serviceType === 'in-person'}
            onClick={() => setServiceType('in-person')}
            title="In-Person Assessment"
            price="$197"
            blurb="Jason visits your property. Credited toward installation if you book within 90 days."
          />
        </div>
      </div>

      {serviceType && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>First Name *</label>
              <input name="firstName" required type="text" autoComplete="given-name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name *</label>
              <input name="lastName" required type="text" autoComplete="family-name" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Email * <span style={{ color: '#6b7280', fontWeight: 500 }}>(your invoice goes here)</span></label>
              <input name="email" required type="email" autoComplete="email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone *</label>
              <input name="phone" required type="tel" autoComplete="tel" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 14, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Property Address *</label>
              <input name="address" required type="text" autoComplete="street-address" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>City *</label>
              <input name="city" required type="text" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Zip Code *</label>
              <input name="zip" required type="text" inputMode="numeric" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Property Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 9 }}>
              {PROP_TYPES.map((l) => (
                <button key={l} type="button" onClick={() => setPropType(l)} style={chipStyle(propType === l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Crawlspace size estimate</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 9 }}>
              {SIZE_OPTIONS.map((l) => (
                <button key={l} type="button" onClick={() => setSize(l)} style={chipStyle(size === l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>What are you experiencing? (check all that apply)</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 9 }}>
              {SYMPTOMS.map((l) => {
                const on = symptoms.includes(l);
                return (
                  <button key={l} type="button" onClick={() => toggleSymptom(l)} style={chipStyle(on)}>
                    {on && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                    {l}
                  </button>
                );
              })}
            </div>
          </div>

          {serviceType === 'virtual' && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Do you have a moisture meter?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9 }}>
                  {MOISTURE_METER_OPTIONS.map((l) => (
                    <button key={l} type="button" onClick={() => setMoistureMeter(l)} style={chipStyle(moistureMeter === l)}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Can you access your crawlspace yourself?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 9 }}>
                  {ACCESS_OPTIONS.map((l) => (
                    <button key={l} type="button" onClick={() => setAccess(l)} style={chipStyle(access === l)}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {serviceType === 'in-person' && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Best days for your appointment (check all that apply)</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 9 }}>
                  {PREFERRED_DAYS.map((l) => {
                    const on = preferredDays.includes(l);
                    return (
                      <button key={l} type="button" onClick={() => toggleDay(l)} style={chipStyle(on)}>
                        {on && (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                        {l}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Preferred contact method for scheduling</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9 }}>
                  {PREFERRED_CONTACT.map((l) => (
                    <button key={l} type="button" onClick={() => setPreferredContact(l)} style={chipStyle(preferredContact === l)}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Any gate codes or access notes <span style={{ color: '#6b7280', fontWeight: 500 }}>(optional)</span></label>
                <input name="accessNotes" type="text" style={inputStyle} />
              </div>
            </>
          )}

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>
              Describe your crawlspace situation in your own words <span style={{ color: '#6b7280', fontWeight: 500 }}>(optional)</span>
            </label>
            <textarea
              name="description"
              rows={3}
              placeholder="e.g., We noticed a musty smell about 6 months ago. An inspector mentioned moisture but didn't give details. We got a $6,000 quote from a foundation company and wanted a second opinion before committing."
              style={{ ...inputStyle, resize: 'vertical' as const }}
            />
          </div>

          <div style={{ marginBottom: 22 }}>
            <label style={labelStyle}>How did you hear about us?</label>
            <select name="hearAbout" style={{ ...inputStyle, appearance: 'none' as const }}>
              {HEAR_OPTIONS.map((o) => (
                <option key={o} style={{ color: '#000', background: '#fff' }}>{o}</option>
              ))}
            </select>
          </div>

          {error && (
            <div style={{ background: 'rgba(220,38,38,.12)', border: '1.5px solid #DC2626', borderRadius: 10, padding: '12px 16px', marginBottom: 16, fontSize: 14, color: '#fca5a5' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 9,
              background: loading ? 'rgba(245,166,35,.6)' : '#F5A623',
              color: '#0D0D0D',
              font: "800 17px 'Inter',sans-serif",
              border: 'none',
              cursor: loading ? 'default' : 'pointer',
              padding: 17,
              borderRadius: 11,
              minHeight: 56,
              boxShadow: loading ? 'none' : '0 12px 32px -10px rgba(245,166,35,.65)',
              transition: 'all .15s ease',
            }}
          >
            {loading ? 'Submitting…' : `Book My Assessment — ${serviceType === 'virtual' ? '$97' : '$197'}`}
            {!loading && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
          </button>

          <p style={{ fontSize: 12.5, color: '#6b7280', margin: '14px 0 0', textAlign: 'center' }}>
            After submitting, Jason will email you an invoice within a few hours. Once paid, he&apos;ll send everything you need to get started.
            Questions? Text Jason: 816-962-2111
          </p>
        </>
      )}
    </form>
  );
}
```

Note on the error-clearing UX: if a user submits without picking a service type, `setError` fires but the form fields never render (since they're gated on `serviceType`) — the error message itself renders above the button only once `serviceType` is set, so also render the top-level error inline near the service cards for the no-selection case:

- [ ] **Step 2: Fix the no-selection error display**

The `error` state can be set before `serviceType` is chosen (see the guard clause at the top of `handleSubmit`), but the `{error && (...)}` block only renders inside the `{serviceType && (...)}` block, so that specific error would never be visible. Add a second error render right after the service-card grid:

Find this block (the closing of the service-card selection div):
```tsx
        </div>
      </div>

      {serviceType && (
```

Replace with:
```tsx
        </div>
        {error && !serviceType && (
          <div style={{ background: 'rgba(220,38,38,.12)', border: '1.5px solid #DC2626', borderRadius: 10, padding: '12px 16px', marginTop: 14, fontSize: 14, color: '#fca5a5' }}>
            {error}
          </div>
        )}
      </div>

      {serviceType && (
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/AssessmentForm.tsx
git commit -m "feat: add AssessmentForm component with virtual/in-person conditional fields"
```

---

### Task 3: Build the assessment page

**Files:**
- Create: `app/crawl-space-assessment-kansas-city/page.tsx`

- [ ] **Step 1: Write the full page**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import AssessmentForm from '@/components/AssessmentForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Assessment Kansas City | KC Crawl Space Specialists' },
  description:
    'Get an honest professional crawlspace assessment from $97 — virtual or in-person. Written game plan, moisture readings, no sales pressure. KC’s only crawlspace-only specialist.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'What’s the difference between virtual and in-person?',
    a: 'Virtual means you submit your own photos and measurements, and Jason reviews everything remotely. In-person means Jason comes to your property and does the inspection himself. In-person costs $197 but is credited toward any installation job booked within 90 days.',
  },
  {
    q: 'What if I don’t have a moisture meter?',
    a: 'No problem — Jason will include a link to an inexpensive one ($15–25 on Amazon) with your invoice. You’ll want one on hand before submitting your photos.',
  },
  {
    q: 'How long does the virtual photo submission take?',
    a: 'About 30 minutes. Jason sends a photo guide with your invoice showing exactly what shots to capture.',
  },
  {
    q: 'What if the game plan says I need a professional?',
    a: 'Jason will tell you honestly, and explain exactly why and what scope is needed — so you can evaluate any quotes you get. KC Crawl Space Specialists is available for the job if you’d like, with no pressure either way.',
  },
  {
    q: 'Do you serve the whole KC metro?',
    a: 'Virtual assessments cover the full metro and honestly anywhere in the US. In-person assessments cover both the Missouri and Kansas sides within about 40 miles of Kansas City.',
  },
  {
    q: 'How do I pay?',
    a: 'After you submit the form below, Jason sends you a secure invoice link by email. You pay online — it takes about 2 minutes.',
  },
  {
    q: 'What if I’m not satisfied with my game plan?',
    a: 'Text Jason at 816-962-2111. He stands behind his work and will make it right.',
  },
];

const steps = [
  {
    n: '1', title: 'Fill Out The Form',
    body: 'Takes 5 minutes. Tell us about your crawlspace and what you’re experiencing.',
  },
  {
    n: '2', title: 'Jason Sends An Invoice',
    body: 'Pay securely via the invoice link sent to your email. Virtual: then submit your photos. In-person: Jason schedules your visit.',
  },
  {
    n: '3', title: 'Receive Your Game Plan',
    body: 'Get your written assessment and game plan within 48 hours (virtual) or 24 hours (in-person).',
  },
];

export default function CrawlSpaceAssessmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Crawl Space Assessment',
                    item: 'https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/',
                  },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                url: 'https://www.crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Kansas City',
                  addressRegion: 'MO',
                  addressCountry: 'US',
                },
                areaServed: [
                  'Kansas City MO', 'Kansas City KS', "Lee's Summit MO", 'Overland Park KS',
                  'Olathe KS', 'Blue Springs MO', 'Independence MO', 'Shawnee KS', 'Lenexa KS', 'Liberty MO',
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            Crawl Space Assessments
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Know What&apos;s Under Your Home <span style={{ color: '#F5A623' }}>Before You Spend A Dime</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '52ch', margin: '0 auto 32px' }}>
            Get Jason’s professional eyes on your crawlspace — virtually or in person — for a fraction of what a full contractor visit costs.
            Honest assessment. Clear game plan. Zero sales pressure.
          </p>
          <Link
            href="#assessment-form"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
              background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif",
              textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 54,
              boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)',
            }}
          >
            See Assessment Options ↓
          </Link>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 }}>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 10 }}>
              Virtual Assessment
            </div>
            <div style={{ font: "800 40px 'Barlow Condensed',sans-serif", color: '#fff', marginBottom: 18 }}>$97</div>
            <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 18 }}>
              You submit photos, measurements, and moisture readings. Jason reviews everything and sends back:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Written condition assessment',
                'Step-by-step game plan for your specific space',
                'Complete materials list with quantities',
                'Honest opinion — do you need a contractor or not?',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: '#e5e7eb' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
              Delivered within 48 hours of photo submission. Perfect for DIYers and homeowners who want a second opinion before hiring anyone.
            </p>
            <Link
              href="#assessment-form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: '14px 20px', borderRadius: 10, minHeight: 50 }}
            >
              Book Virtual Assessment — $97
            </Link>
          </div>

          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 }}>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 10 }}>
              In-Person Assessment
            </div>
            <div style={{ font: "800 40px 'Barlow Condensed',sans-serif", color: '#fff', marginBottom: 18 }}>$197</div>
            <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 18 }}>
              Jason comes to your KC property, goes under your home, documents everything, and delivers:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Professional in-person inspection',
                'Moisture readings at 6+ locations',
                'Photo documentation of all conditions',
                'Written game plan same day or within 24 hours',
                '$197 credited toward full installation*',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: '#e5e7eb' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
              Most appointments scheduled within 3 days of booking.
              <br />
              *Credit applies to KC Crawl Space Specialists installation jobs booked within 90 days.
            </p>
            <Link
              href="#assessment-form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: '14px 20px', borderRadius: 10, minHeight: 50 }}
            >
              Book In-Person Assessment — $197
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 40px' }}>
            Simple Process — No Runaround
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 28, textAlign: 'left' as const }}>
            {steps.map((s) => (
              <div key={s.n}>
                <div style={{ font: "800 34px 'Barlow Condensed',sans-serif", color: '#F5A623', marginBottom: 8 }}>{s.n}</div>
                <div style={{ font: "800 15px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase' as const, color: '#fff', marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 14.5, color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="assessment-form" style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', textAlign: 'center' as const, margin: '0 0 32px' }}>
            Book Your Crawlspace Assessment
          </h2>
          <AssessmentForm />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px', textAlign: 'center' as const }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 36px', textAlign: 'center' as const }}>
            Assessment FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {faqItems.map((item) => (
              <div key={item.q} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 19, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 10px' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(52px,8vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 16px' }}>
            Stop Guessing. Start Knowing.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 28px' }}>
            For less than most contractor inspection fees, you&apos;ll know exactly what&apos;s under your home — and exactly what to do about it.
          </p>
          <Link
            href="#assessment-form"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 54, marginBottom: 18 }}
          >
            Book Your Assessment ↓
          </Link>
          <p style={{ fontSize: 15, color: '#1B3A6B', margin: 0 }}>
            Or text Jason directly: <a href={PHONE_HREF} style={{ color: '#1B3A6B', fontWeight: 800 }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add "app/crawl-space-assessment-kansas-city/page.tsx"
git commit -m "feat: add crawl space assessment landing page"
```

---

### Task 4: Add footer link

**Files:**
- Modify: `components/Footer.tsx:64-85` (Services column)

- [ ] **Step 1: Add the assessment link to the Services list**

Find this array inside the Services column:

```tsx
              {[
                { label: 'Crawlspace Encapsulation', href: '/encapsulation' },
                { label: 'Crawl Space Repair', href: '/crawl-space-repair-kansas-city/' },
                { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
                { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
                { label: 'Crawl Space Dehumidifiers', href: '/crawl-space-dehumidifier-kansas-city/' },
                { label: 'Pest & Rodent Sealing', href: '/crawl-space-pest-control-kansas-city/' },
                { label: 'Mobile Home Underbelly', href: '/mobile-homes' },
                { label: 'Pricing & Financing', href: '/pricing' },
              ].map((l) => (
```

Replace with (new entry inserted first, since it's the newest/highest-margin offer):

```tsx
              {[
                { label: 'Crawlspace Assessment ($97+)', href: '/crawl-space-assessment-kansas-city/' },
                { label: 'Crawlspace Encapsulation', href: '/encapsulation' },
                { label: 'Crawl Space Repair', href: '/crawl-space-repair-kansas-city/' },
                { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
                { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
                { label: 'Crawl Space Dehumidifiers', href: '/crawl-space-dehumidifier-kansas-city/' },
                { label: 'Pest & Rodent Sealing', href: '/crawl-space-pest-control-kansas-city/' },
                { label: 'Mobile Home Underbelly', href: '/mobile-homes' },
                { label: 'Pricing & Financing', href: '/pricing' },
              ].map((l) => (
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: link crawlspace assessment page from footer"
```

---

### Task 5: Add to sitemap.xml

**Files:**
- Modify: `public/sitemap.xml`

- [ ] **Step 1: Add a new `<url>` entry**

Add this block near the other core service page entries (after the homepage entry, alongside `crawl-space-encapsulation-kansas-city`):

```xml
  <url>
    <loc>https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/</loc>
    <lastmod>2026-07-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
```

- [ ] **Step 2: Verify well-formed XML**

Run: `python3 -c "import xml.etree.ElementTree as ET; ET.parse('public/sitemap.xml'); print('OK')"`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add public/sitemap.xml
git commit -m "feat: add assessment page to sitemap"
```

---

### Task 6: Build, verify, and deploy

**Files:** none (verification only)

- [ ] **Step 1: Type-check and build**

Run: `npx tsc --noEmit && npx next build`
Expected: build completes with `/crawl-space-assessment-kansas-city` listed as a static (`○`) route, no errors.

- [ ] **Step 2: Manual verification in dev server**

Run: `npx next dev`

In a browser at `http://localhost:3000/crawl-space-assessment-kansas-city/`:
1. Confirm hero, both service cards, how-it-works, form, FAQ, and bottom CTA all render.
2. Click the Virtual card — confirm the shared fields appear, plus the moisture-meter/access questions, and the in-person-only fields do NOT appear.
3. Click the In-Person card — confirm the shared fields appear, plus preferred-days/contact/access-notes, and the virtual-only fields do NOT appear.
4. Fill out all required fields and submit — confirm the loading spinner shows, then the green thank-you panel replaces the form.
5. Temporarily break the Formspree endpoint (e.g. add a trailing character) in a scratch edit, resubmit, confirm the red error banner shows, then revert the scratch edit.
6. Confirm the "Assessments" link appears in both the desktop nav bar and the mobile hamburger menu, and highlights gold when on the assessment page.
7. Confirm the footer "Crawlspace Assessment ($97+)" link works.

- [ ] **Step 3: Deploy to production**

```bash
npx vercel --prod --scope jason-dillons-projects-8ebbe632
```

- [ ] **Step 4: Verify canonical and metadata on the live page**

Run:
```bash
curl -s "https://www.crawlspacekc.com/crawl-space-assessment-kansas-city" | python3 -c "import sys; html=sys.stdin.read(); idx=html.find('canonical'); print(html[max(0,idx-10):idx+120] if idx>=0 else 'NOT FOUND')"
```
Expected: `link rel="canonical" href="https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/"`

- [ ] **Step 5: Request indexing in GSC**

Use GSC URL Inspection on `https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/`, run "Test Live URL," then "Request Indexing" (manual user action, not automatable).
