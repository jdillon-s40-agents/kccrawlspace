# KC Crawl Space Specialists — Next.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full KC Crawl Space Specialists marketing website as a Next.js App Router site deployable to Vercel.

**Architecture:** Next.js 14 App Router + TypeScript + Tailwind CSS. Shared Header/Footer in root layout. InspectionForm as a shared client component. One API route at `/api/inspection`. All copy comes verbatim from the design references.

**Tech Stack:** Next.js 14, React, TypeScript, Tailwind CSS, next/font (Inter + Barlow Condensed), next/image, Tailwind CSS v3.

**Source files:** `C:\Users\jdill\Dropbox\PC (2)\Downloads\Mobile-friendly design approach\design_handoff_kc_crawlspace\design_references\`

---

### Task 1: Scaffold Next.js project + Tailwind

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.ts`
- Create: `app/globals.css`

- [ ] **Step 1: Create the project**

Run in `C:\Users\jdill\Dropbox\PC (2)\Documents\CrawlspaceKC`:
```
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --yes
```

- [ ] **Step 2: Verify dev server starts**

```
npm run dev
```
Expected: server on http://localhost:3000

- [ ] **Step 3: Update tailwind.config.ts** with brand tokens

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F5A623',
        'navy-black': '#0D0D0D',
        carbon: '#111827',
        'near-black': '#0a0a0a',
        'kc-navy': '#1B3A6B',
        'royal-blue': '#2563EB',
        concrete: '#9CA3AF',
        slate: '#cbd5e1',
        'off-white': '#F9FAFB',
        'danger-red': '#DC2626',
        'success-green': '#16A34A',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 4: Update app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: #0D0D0D;
  -webkit-font-smoothing: antialiased;
  font-family: 'Inter', sans-serif;
  color: #fff;
}
section { scroll-margin-top: 104px; }
input, textarea, select { font-family: inherit; }
input::placeholder, textarea::placeholder { color: #9CA3AF; }
input:focus, textarea:focus, select:focus {
  border-color: #F5A623 !important;
  background: rgba(255,255,255,.09) !important;
  outline: none;
}
details > summary { list-style: none; cursor: pointer; }
details > summary::-webkit-details-marker { display: none; }
.faq-plus { transition: transform .2s ease; }
details[open] summary .faq-plus { transform: rotate(45deg); }
details[open] summary .faq-q { color: #F5A623; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; }
}
```

- [ ] **Step 5: Commit**
```
git add -A && git commit -m "feat: scaffold Next.js + Tailwind with KC brand tokens"
```

---

### Task 2: Constants + fonts

**Files:**
- Create: `lib/constants.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create lib/constants.ts**

```ts
export const PHONE = '(816) 962-2111';
export const PHONE_HREF = 'tel:+18169622111';
export const EMAIL = 'info@kccrawlspacespecialists.com';
export const DOMAIN = 'KCCrawlSpaceSpecialists.com';

export const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'encapsulation', label: 'Encapsulation', href: '/encapsulation' },
  { key: 'mobile', label: 'Mobile Homes', href: '/mobile-homes' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const;

export type NavKey = typeof NAV_LINKS[number]['key'];
```

- [ ] **Step 2: Update app/layout.tsx with fonts + LocalBusiness JSON-LD**

```tsx
import type { Metadata } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'KC Crawl Space Specialists | Kansas City Crawlspace Encapsulation', template: '%s | KC Crawl Space Specialists' },
  description: 'Kansas City\'s only dedicated crawlspace specialist. Encapsulation, vapor barriers, and mobile home underbelly repair. Free inspection. Lifetime warranty.',
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KC Crawl Space Specialists LLC',
  telephone: '+18169622111',
  email: 'info@kccrawlspacespecialists.com',
  url: 'https://kccrawlspacespecialists.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
  areaServed: 'Kansas City Metro',
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Commit**
```
git add -A && git commit -m "feat: add constants, fonts, and layout shell"
```

---

### Task 3: Header component

**Files:**
- Create: `components/Header.tsx`

- [ ] **Step 1: Create components/Header.tsx**

```tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PHONE, PHONE_HREF, NAV_LINKS } from '@/lib/constants';

const CHECK_SVG = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PHONE_SVG = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function Header() {
  const pathname = usePathname();

  const activeKey = NAV_LINKS.find(l =>
    l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
  )?.key ?? 'home';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(13,13,13,.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,166,35,.28)',
    }}>
      {/* Top bar */}
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        gap: 12, height: 100, padding: '0 clamp(14px,4vw,24px)', position: 'relative',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flex: 'none', alignSelf: 'flex-start', position: 'relative', zIndex: 3, marginTop: 6 }}>
          <Image src="/logo.png" alt="KC Crawl Space Specialists logo" height={150} width={200} style={{ height: 'clamp(120px,17vw,150px)', width: 'auto', display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,.55))' }} priority />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none', alignSelf: 'center' }}>
          <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#F5A623', textDecoration: 'none', fontWeight: 800, fontSize: 15, padding: '9px 8px', minHeight: 44, whiteSpace: 'nowrap' }}>
            {PHONE_SVG}
            <span>{PHONE}</span>
          </a>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: '11px 16px', borderRadius: 8, minHeight: 44, whiteSpace: 'nowrap', boxShadow: '0 6px 18px -6px rgba(245,166,35,.6)' }}>
            Free Inspection
          </Link>
        </div>
      </div>

      {/* Nav bar */}
      <nav style={{ background: '#111827', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 2, padding: '0 clamp(8px,3vw,16px) 0 clamp(170px,37vw,350px)', overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {NAV_LINKS.map(link => {
            const isActive = link.key === activeKey;
            return (
              <Link key={link.key} href={link.href} style={{
                display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap',
                padding: '13px 14px', font: "700 14px 'Inter',sans-serif", letterSpacing: '.03em',
                textDecoration: 'none', borderBottom: isActive ? '2px solid #F5A623' : '2px solid transparent',
                color: isActive ? '#F5A623' : '#cbd5e1', flex: 'none',
              }}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Trust strip */}
      <div style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '7px clamp(14px,4vw,30px)', padding: '8px 14px' }}>
          {['Lifetime Warranty', 'Licensed & Insured', 'Same-Week Service', 'KC Owned & Operated'].map(item => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#d1d5db', fontSize: 12, fontWeight: 600, letterSpacing: '.03em' }}>
              {CHECK_SVG}{item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add sticky Header with nav, trust strip"
```

---

### Task 4: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/Footer.tsx**

```tsx
import Link from 'next/link';
import Image from 'next/image';
import { PHONE, PHONE_HREF, DOMAIN } from '@/lib/constants';

const CHECK_GREEN = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PHONE_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.08)', padding: 'clamp(40px,6vw,60px) clamp(16px,5vw,24px) 28px', fontFamily: "'Inter',sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32, marginBottom: 36 }}>
          <div>
            <Image src="/logo.png" alt="KC Crawl Space Specialists logo" height={84} width={160} style={{ height: 84, width: 'auto', display: 'block', marginBottom: 14 }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 16px', maxWidth: '30ch' }}>Kansas City's only dedicated crawlspace specialist. We only do one thing. We do it better.</p>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "800 18px 'Inter',sans-serif", textDecoration: 'none' }}>
              {PHONE_SVG}{PHONE}
            </a>
          </div>
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'Crawlspace Encapsulation', href: '/encapsulation' },
                { label: 'Mobile Home Underbelly', href: '/mobile-homes' },
                { label: 'Pricing & Financing', href: '/pricing' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: '#9CA3AF', fontSize: 14.5, textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Reviews', href: '/#proof' },
                { label: 'Free Inspection', href: '/contact' },
              ].map(l => (
                <Link key={l.label} href={l.href} style={{ color: '#9CA3AF', fontSize: 14.5, textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>Trust</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: '#9CA3AF' }}>
              {['Licensed & Insured', 'Lifetime Warranty', '4.9★ Google Verified', 'KC Owned & Operated'].map(t => (
                <span key={t} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{CHECK_GREEN}{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#6b7280' }}>© {year} KC Crawl Space Specialists LLC. All rights reserved.</span>
          <span style={{ fontSize: 12, color: '#4b5563' }}>{DOMAIN} · Missouri LLC</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add Footer component"
```

---

### Task 5: InspectionForm client component

**Files:**
- Create: `components/InspectionForm.tsx`

- [ ] **Step 1: Create components/InspectionForm.tsx**

```tsx
'use client';
import { useState, useRef, FormEvent } from 'react';

const SYMS = ['Musty smell','High humidity','Mold concern','Cold floors','High energy bills','Inspector flagged it','Pest / animal damage','Just want a checkup'];
const PROP_TYPES = ['Site-Built Home','Mobile Home','Both'];
const DAYS = ['Weekday','Saturday','Either'];
const HEAR_OPTIONS = ['Google Search','Google Maps','Facebook','Referral from friend / family','Saw your truck or yard sign','Other'];

function chip(selected: boolean): React.CSSProperties {
  return {
    padding: '13px 12px', borderRadius: 9, border: '1.5px solid',
    font: "700 14px 'Inter',sans-serif", cursor: 'pointer', minHeight: 48,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
    textAlign: 'center', transition: 'all .15s ease', userSelect: 'none', lineHeight: 1.25,
    background: selected ? '#F5A623' : 'rgba(255,255,255,.05)',
    borderColor: selected ? '#F5A623' : 'rgba(255,255,255,.18)',
    color: selected ? '#0D0D0D' : '#e5e7eb',
  };
}

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'rgba(255,255,255,.05)', border: '1.5px solid rgba(255,255,255,.18)',
  borderRadius: 9, padding: '13px 14px', color: '#fff', font: "500 16px 'Inter',sans-serif", outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block', font: "600 13px 'Inter',sans-serif", color: '#cbd5e1', marginBottom: 7, letterSpacing: '.02em',
};

const CHECK_SVG = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ARROW_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function InspectionForm() {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [propType, setPropType] = useState('');
  const [day, setDay] = useState('Either');
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  function toggleSymptom(label: string) {
    setSymptoms(s => s.includes(label) ? s.filter(x => x !== label) : [...s, label]);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData(formRef.current!);
    const fn = (fd.get('firstName') as string || '').trim() || 'there';
    setFirstName(fn);

    const body = {
      firstName: fn,
      lastName: fd.get('lastName'),
      phone: fd.get('phone'),
      email: fd.get('email'),
      address: fd.get('address'),
      city: fd.get('city'),
      propType,
      symptoms,
      day,
      hearAbout: fd.get('hearAbout'),
      notes: fd.get('notes'),
    };

    try {
      await fetch('/api/inspection', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    } catch (_) {}
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ background: 'rgba(22,163,74,.12)', border: '1.5px solid #16A34A', borderRadius: 16, padding: '34px', textAlign: 'center' }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style={{ font: "800 24px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>Thanks, {firstName}! Your request is in.</h3>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>We'll call to confirm your free inspection within 2 hours during business hours. Keep an eye on your phone — we move fast.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'block' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 16 }}>
        <div><label style={labelStyle}>First Name *</label><input name="firstName" required type="text" autoComplete="given-name" style={inputStyle} /></div>
        <div><label style={labelStyle}>Last Name *</label><input name="lastName" required type="text" autoComplete="family-name" style={inputStyle} /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 16 }}>
        <div><label style={labelStyle}>Phone *</label><input name="phone" required type="tel" autoComplete="tel" style={inputStyle} /></div>
        <div><label style={labelStyle}>Email *</label><input name="email" required type="email" autoComplete="email" style={inputStyle} /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 18 }}>
        <div><label style={labelStyle}>Street Address *</label><input name="address" required type="text" autoComplete="street-address" style={inputStyle} /></div>
        <div><label style={labelStyle}>City *</label><input name="city" required type="text" style={inputStyle} /></div>
      </div>

      <label style={labelStyle}>Property Type</label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))', gap: 9, marginBottom: 20 }}>
        {PROP_TYPES.map(l => (
          <button key={l} type="button" onClick={() => setPropType(l)} style={chip(propType === l)}>{l}</button>
        ))}
      </div>

      <label style={labelStyle}>What are you experiencing?</label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 9, marginBottom: 20 }}>
        {SYMS.map(l => {
          const on = symptoms.includes(l);
          return (
            <button key={l} type="button" onClick={() => toggleSymptom(l)} style={chip(on)}>
              {on && CHECK_SVG}{l}
            </button>
          );
        })}
      </div>

      <label style={labelStyle}>Preferred inspection day</label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9, marginBottom: 20 }}>
        {DAYS.map(l => (
          <button key={l} type="button" onClick={() => setDay(l)} style={chip(day === l)}>{l}</button>
        ))}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>How did you hear about us?</label>
        <select name="hearAbout" style={{ ...inputStyle }}>
          {HEAR_OPTIONS.map(o => <option key={o} style={{ color: '#000' }}>{o}</option>)}
        </select>
      </div>
      <div style={{ marginBottom: 22 }}>
        <label style={labelStyle}>Anything else we should know? <span style={{ color: '#6b7280', fontWeight: 500 }}>(optional)</span></label>
        <textarea name="notes" rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 17px 'Inter',sans-serif", border: 'none', cursor: 'pointer', padding: 17, borderRadius: 11, minHeight: 56, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>
        Book My Free Inspection {ARROW_SVG}
      </button>
      <p style={{ fontSize: 12.5, color: '#6b7280', margin: '14px 0 0', textAlign: 'center' }}>No obligation. No sales pressure. We inspect, document, and give you honest options — you decide.</p>
    </form>
  );
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add InspectionForm client component"
```

---

### Task 6: API route

**Files:**
- Create: `app/api/inspection/route.ts`

- [ ] **Step 1: Create app/api/inspection/route.ts**

```ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const required = ['firstName', 'lastName', 'phone', 'email', 'address', 'city'];
    const missing = required.filter(f => !body[f]?.toString().trim());
    if (missing.length) {
      return NextResponse.json({ error: `Missing: ${missing.join(', ')}` }, { status: 400 });
    }
    // TODO: wire to email/CRM (Resend, SendGrid, etc.)
    console.log('[inspection]', JSON.stringify(body));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add /api/inspection route handler"
```

---

### Task 7: Copy assets to public/

**Files:**
- Copy `design_references/assets/logo.png` → `public/logo.png`
- Copy `design_references/assets/before.jpg` → `public/before.jpg`
- Copy `design_references/assets/after.jpg` → `public/after.jpg`

- [ ] **Step 1: Copy assets**

In PowerShell from the project root:
```powershell
$src = "C:\Users\jdill\Dropbox\PC (2)\Downloads\Mobile-friendly design approach\design_handoff_kc_crawlspace\design_references\assets"
Copy-Item "$src\logo.png" "public\logo.png"
Copy-Item "$src\before.jpg" "public\before.jpg"
Copy-Item "$src\after.jpg" "public\after.jpg"
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add logo and before/after assets"
```

---

### Task 8: Home page

**Files:**
- Modify: `app/page.tsx`

The Home page has 10 sections. Build them exactly from Home.dc.html.

- [ ] **Step 1: Write app/page.tsx**

(Full content: Hero with stat row + before/after, Problem cards, Services cards, Guarantee cards, Financing section, Process steps, Reviews, Service Area, Final CTA, Booking form with InspectionForm + info column)

Key inline styles (copy exactly from Home.dc.html):
- Hero: `background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D'`
- H1: `font-family:'Barlow Condensed'; font-weight:800; font-size:clamp(42px,8.5vw,74px); line-height:.98; text-transform:uppercase`
- Gold CTA button: `background:#F5A623; color:#0D0D0D; font:800 16px Inter; padding:16px 26px; border-radius:10px; min-height:54px; box-shadow:0 12px 32px -10px rgba(245,166,35,.65)`

```tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import InspectionForm from '@/components/InspectionForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kansas City Crawlspace Encapsulation | KC Crawl Space Specialists',
  description: "Kansas City's only dedicated crawlspace specialist. Free inspection, lifetime warranty, same-week service.",
};

const STAR = <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const SMALL_STAR = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const CHECK_GREEN = <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none',marginTop:2}}><polyline points="20 6 9 17 4 12"/></svg>;
const CHECK_GOLD = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none',marginTop:1}}><polyline points="20 6 9 17 4 12"/></svg>;
const ARROW = <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const PHONE_ICON = <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const EMAIL_ICON = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none'}}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>;
const MAP_ICON = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

const reviews = [
  { text: '"A home inspector flagged our crawlspace during a sale. These guys were out the next day, gave us three options, and had it sealed in two days. The basement smell was gone within a week. Sale closed without a hitch."', name: 'Natalie F.', location: 'Raytown, MO' },
  { text: '"I called Groundworks first — three-week wait and a quote that felt way too high. KC Crawl Space Specialists came out in 48 hours, and their Better package was $1,400 less. Same warranty. Way better service."', name: 'Robert J.', location: 'Belton, MO' },
  { text: '"My wife has bad allergies and the house felt damp no matter what we did with the AC. Our crawlspace read 82%. They sealed it, put in a dehumidifier, and within two weeks she stopped waking up congested. Best home improvement we\'ve made."', name: 'Tony & Maria L.', location: 'Grandview, MO' },
];

export default function HomePage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section id="top" style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,84px) clamp(16px,5vw,24px) clamp(48px,8vw,88px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 18 }}>
              <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }}></span>Kansas City, MO & KS
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(42px,8.5vw,74px)', lineHeight: .98, letterSpacing: '.005em', textTransform: 'uppercase', margin: '0 0 20px', color: '#fff', textWrap: 'balance' as never }}>
              Kansas City's <span style={{ color: '#F5A623' }}>Only</span><br/>Crawlspace Specialist.
            </h1>
            <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '34ch', margin: '0 0 28px' }}>We don't do foundations. We don't do basements. We seal crawlspaces — and we do it better than anyone in KC.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(8px,2vw,18px)', marginBottom: 30, maxWidth: 520 }}>
              {[{val:'10+',lbl:'Years Exp.'},{val:'4.9★',lbl:'Google Rating'},{val:'Lifetime',lbl:'Warranty',small:true},{val:'48hr',lbl:'Service'}].map(s => (
                <div key={s.lbl}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: s.small ? 'clamp(22px,4vw,32px)' : 'clamp(28px,5vw,40px)', color: '#F5A623', lineHeight: 1, marginTop: s.small ? 4 : 0 }}>{s.val}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: '#9CA3AF', marginTop: 3 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>Book Your Free Inspection</Link>
              <Link href="#proof" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 54, border: '1.5px solid rgba(255,255,255,.35)' }}>See What We've Found {ARROW}</Link>
            </div>
          </div>
          <div>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', boxShadow: '0 36px 70px -24px rgba(0,0,0,.8)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,.12)' }}>
                <div style={{ position: 'relative', background: '#1a140c' }}>
                  <Image src="/before.jpg" alt="Crawlspace before encapsulation — damp and moldy" fill style={{ objectFit: 'cover', aspectRatio: '4/5' }} />
                  <span style={{ position: 'absolute', top: 10, left: 10, background: '#DC2626', color: '#fff', font: "700 11px 'Inter',sans-serif", letterSpacing: '.1em', padding: '4px 9px', borderRadius: 5 }}>BEFORE</span>
                </div>
                <div style={{ position: 'relative', background: '#0e1c2e' }}>
                  <Image src="/after.jpg" alt="Crawlspace after encapsulation — sealed and dry" fill style={{ objectFit: 'cover', aspectRatio: '4/5' }} />
                  <span style={{ position: 'absolute', top: 10, right: 10, background: '#16A34A', color: '#fff', font: "700 11px 'Inter',sans-serif", letterSpacing: '.1em', padding: '4px 9px', borderRadius: 5 }}>AFTER</span>
                </div>
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#6b7280', margin: '12px 0 0', letterSpacing: '.03em' }}>Real KC crawlspace — moldy & damp vs. sealed & dry</p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}><span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }}></span>The Hidden Problem</div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase', margin: '0 0 18px', color: '#fff', maxWidth: '18ch', textWrap: 'balance' as never }}>Is Your Home Breathing Crawlspace Air?</h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.65, color: '#c3d0e6', maxWidth: '62ch', margin: '0 0 36px' }}>Over <strong style={{ color: '#fff' }}>40% of the air</strong> on your home's first floor comes straight from the crawlspace. If it's damp, moldy, or unsealed — so is the air your family breathes. Kansas City's clay soil, 40 inches of annual rainfall, and brutal summer humidity create the perfect storm for moisture damage.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, title: 'Mold & Mildew Below', body: 'Spores spread into your living space through the stack effect — rising air pulls them up from the crawlspace into the rooms you breathe in.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z"/></svg>, title: 'Standing Moisture', body: 'Clay soil plus KC rainfall equals constant water intrusion and high humidity sitting under your home all year long.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>, title: 'Cold Floors & High Bills', body: 'Unsealed crawlspaces are the #1 cause of floor drafts and heating inefficiency — you pay to condition air that escapes below.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#0D0D0D', border: '1px solid rgba(220,38,38,.3)', borderRadius: 14, padding: 26 }}>
                <div style={{ width: 48, height: 48, borderRadius: 11, background: 'rgba(220,38,38,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, color: '#DC2626' }}>{c.icon}</div>
                <h3 style={{ font: "800 19px 'Inter',sans-serif", color: '#fff', margin: '0 0 8px' }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '62ch', margin: '0 auto 44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}>What We Do</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase', margin: '0 0 16px', color: '#0D0D0D', textWrap: 'balance' as never }}>One Company. One Specialty. Done Right.</h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.65, color: '#4b5563', margin: 0 }}>Every other crawlspace company in Kansas City is primarily a foundation business — encapsulation is their upsell. For us, it's everything.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
            {/* Card 1 */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(245,166,35,.3)', borderRadius: 18, padding: 'clamp(24px,4vw,34px)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 54, height: 54, borderRadius: 13, background: 'rgba(245,166,35,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#F5A623' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 6 }}>Site-Built Homes</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 28, textTransform: 'uppercase', color: '#fff', margin: '0 0 12px', lineHeight: 1.05 }}>Crawlspace Encapsulation</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 18px' }}>Full vapor barrier install, vent sealing, mold treatment, and dehumidifier installation for standard homes.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['20-mil reinforced vapor barrier','All vents sealed and blocked','Mold treatment of joists & framing','Commercial dehumidifier install','Written moisture report included','Lifetime transferable warranty'].map(i => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#e5e7eb', lineHeight: 1.45 }}>{CHECK_GREEN}{i}</li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}><span style={{ fontSize: 13, color: '#9CA3AF' }}>Starting from</span><span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#F5A623' }}>$2,800</span></div>
                <div style={{ fontSize: 12.5, color: '#6b7280', margin: '2px 0 18px' }}>Most homeowners invest $4,500–$6,500</div>
                <Link href="#book" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>Book Free Inspection {ARROW}</Link>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(245,166,35,.3)', borderRadius: 18, padding: 'clamp(24px,4vw,34px)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 54, height: 54, borderRadius: 13, background: 'rgba(37,99,235,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#2563EB' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 6 }}>Manufactured Homes</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 28, textTransform: 'uppercase', color: '#fff', margin: '0 0 12px', lineHeight: 1.05 }}>Mobile Home Underbelly</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 18px' }}>Complete underbelly insulation and vapor barrier replacement for manufactured and mobile homes across KC.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Full belly board replacement','Fiberglass insulation installation','Pipe and duct sealing','Ground vapor barrier','Pest damage repair','Transferable warranty'].map(i => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#e5e7eb', lineHeight: 1.45 }}>{CHECK_GREEN}{i}</li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}><span style={{ fontSize: 13, color: '#9CA3AF' }}>Starting from</span><span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#F5A623' }}>$1,500</span></div>
                <div style={{ fontSize: 12.5, color: '#6b7280', margin: '2px 0 18px' }}>Most homeowners invest $2,000–$3,500</div>
                <Link href="#book" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>Book Free Inspection {ARROW}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '60ch', margin: '0 auto 44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}>Our Warranty</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase', margin: '0 0 14px', color: '#fff', textWrap: 'balance' as never }}>The KC Dry Home Guarantee</h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>No other company in Kansas City offers what we do.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 20, marginBottom: 34 }}>
            {[
              { eyebrow: 'Lifetime Warranty', title: 'The Dry Crawlspace Promise', body: 'If humidity ever exceeds 60% for more than 48 hours after our install, we come back and fix it at zero cost. No questions. Forever.' },
              { eyebrow: 'Transfers at No Charge', title: 'Transferable Ownership', body: 'The warranty transfers to any future owner at no charge — just call and we update the paperwork. Adds documented value when you sell.' },
              { eyebrow: 'Or We Come Back Free', title: '30-Day Smell-Free', body: "If your home doesn't smell noticeably better within 30 days, we return for a full re-inspection and remediation at no charge." },
            ].map(c => (
              <div key={c.title} style={{ background: 'linear-gradient(180deg,rgba(245,166,35,.07),rgba(245,166,35,0))', border: '1px solid rgba(245,166,35,.4)', borderRadius: 16, padding: 28 }}>
                <div style={{ color: '#F5A623', marginBottom: 16 }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 4 }}>{c.eyebrow}</div>
                <h3 style={{ font: "800 20px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 'clamp(15px,2vw,17px)', lineHeight: 1.6, color: '#c3d0e6', maxWidth: '64ch', margin: '0 auto' }}><span style={{ color: '#fff', fontWeight: 600 }}>We offer these guarantees because we've done this long enough to know our installation works.</span> Every time. If it doesn't, we make it right.</p>
        </div>
      </section>

      {/* FINANCING */}
      <section id="financing" style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '58ch', margin: '0 auto 36px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}>Financing Available</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,6.5vw,56px)', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 14px', color: '#fff' }}>As Low As <span style={{ color: '#F5A623' }}>$165/Month</span></h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>60-second approval. No impact to your credit score to check.</p>
          </div>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 18, padding: 'clamp(26px,4vw,40px)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(20px,4vw,40px)', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ flex: '1 1 220px', minWidth: 200, textAlign: 'center' }}>
                <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 8 }}>Payments as low as</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(56px,11vw,84px)', color: '#F5A623', lineHeight: .9 }}>$165<span style={{ fontSize: '.32em', color: '#c3a05a', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>/mo</span></div>
                <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: '#F5A623', marginTop: 8 }}>0% APR Plans Available</div>
              </div>
              <div style={{ flex: '1 1 300px', minWidth: 260, textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {['Every job is priced for your crawlspace — your exact monthly payment depends on your home and the scope of work.','60-second approval. No impact to your credit score to check your options.','Multiple financing partners — almost every homeowner qualifies for something.'].map(t => (
                    <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>{CHECK_GOLD}<span style={{ fontSize: 15, lineHeight: 1.5, color: '#e7edf6' }}>{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <Link href="#book" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: 16, borderRadius: 10, minHeight: 54, marginTop: 30 }}>Apply for Financing — 60-Second Approval {ARROW}</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '62ch', margin: '0 auto 44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}>Our Process</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase', margin: 0, color: '#0D0D0D', textWrap: 'balance' as never }}>From First Call to Dry Crawlspace in 5 Days or Less</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {[
              { n: '01', title: 'Call or Click', body: 'We answer within 2 hours. Schedule your free inspection in under 2 minutes.' },
              { n: '02', title: 'Free Inspection', body: 'Same-week or next-day. We go under the house, document everything, and show you photos.' },
              { n: '03', title: 'Your Quote', body: 'Three honest options. No pressure, no upsells. A 50% deposit schedules your install.' },
              { n: '04', title: 'Installation', body: 'A 1–2 day install. The crew leaves your crawlspace clean, sealed, and dry.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: 26, boxShadow: '0 1px 3px rgba(0,0,0,.05)' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 46, color: '#F5A623', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
                <h3 style={{ font: "800 17px 'Inter',sans-serif", color: '#0D0D0D', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '.02em' }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#4b5563', margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="proof" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}>What KC Homeowners Say</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, color: '#F5A623', marginBottom: 8 }}>{[1,2,3,4,5].map(i=><span key={i}>{STAR}</span>)}</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase', margin: 0, color: '#fff' }}>Rated 4.9 on Google</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18, marginBottom: 36 }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: 26, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 2, color: '#F5A623', marginBottom: 14 }}>{[1,2,3,4,5].map(i=><span key={i}>{SMALL_STAR}</span>)}</div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: '#e5e7eb', margin: '0 0 18px', flex: 1 }}>{r.text}</p>
                <div style={{ font: "700 14px 'Inter',sans-serif", color: '#fff' }}>{r.name}<span style={{ color: '#9CA3AF', fontWeight: 500 }}> — {r.location}</span></div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 18px' }}>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 30, color: '#fff', lineHeight: 1 }}>4.9</span>
              <div>
                <div style={{ display: 'flex', gap: 1, color: '#F5A623' }}>{[1,2,3,4,5].map(i=><span key={i}><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>)}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF' }}>Based on Google Reviews</div>
              </div>
            </div>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "700 15px 'Inter',sans-serif", textDecoration: 'none' }}>See All Reviews on Google {ARROW}</a>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="area" style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase', margin: '0 0 14px', color: '#fff' }}>Serving the Kansas City Region</h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#c3d0e6', margin: 0, maxWidth: '50ch', marginLeft: 'auto', marginRight: 'auto' }}>If you're within about an hour of Kansas City, we've got you covered — both sides of the state line.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {[
              { label: 'Missouri Side', cities: ['Kansas City','Blue Springs','Independence','Belton','Lee\'s Summit','Raymore','Raytown','Liberty','Grandview','Parkville'] },
              { label: 'Kansas Side', cities: ['Overland Park','Prairie Village','Olathe','Mission','Lenexa','Merriam','Shawnee','Gardner','Leawood','Bonner Springs'] },
            ].map(side => (
              <div key={side.label} style={{ background: 'rgba(0,0,0,.25)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 26 }}>
                <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,.12)' }}>{side.label}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 14px', fontSize: 15, color: '#dbe4f3' }}>
                  {side.cities.map(c => <span key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final" style={{ background: '#F5A623', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,6.5vw,56px)', lineHeight: 1.02, textTransform: 'uppercase', margin: '0 0 16px', color: '#0D0D0D', textWrap: 'balance' as never }}>Your Crawlspace Is Costing You Money Right Now.</h2>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#3a2c08', margin: '0 0 30px', maxWidth: '56ch', marginLeft: 'auto', marginRight: 'auto' }}>Every month without encapsulation is another month of mold growth, moisture damage, and wasted energy. The inspection is free. The estimate is free. The decision takes 5 minutes.</p>
          <Link href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#0D0D0D', color: '#fff', font: "800 17px 'Inter',sans-serif", textDecoration: 'none', padding: '18px 32px', borderRadius: 11, minHeight: 58, boxShadow: '0 16px 40px -12px rgba(0,0,0,.5)' }}>Book Your Free Inspection — Available This Week</Link>
          <div style={{ marginTop: 22 }}><a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0D0D0D', font: "800 19px 'Inter',sans-serif", textDecoration: 'none' }}>{PHONE_ICON}{PHONE}</a></div>
          <p style={{ fontSize: 13.5, color: '#3a2c08', margin: '10px 0 0' }}>No obligation. No sales pressure. Just an honest look at what's under your home.</p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,4vw,48px)' }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,46px)', lineHeight: 1.02, textTransform: 'uppercase', margin: '0 0 10px', color: '#fff' }}>Book Your Free Inspection</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 28px' }}>Takes 2 minutes. We'll confirm within 2 hours. Same-week appointments available.</p>
            <InspectionForm />
          </div>
          <div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#F5A623', textDecoration: 'none', font: "800 22px 'Inter',sans-serif", marginBottom: 6 }}>{PHONE_ICON}{PHONE}</a>
              <div style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 16, paddingLeft: 33 }}>Mon–Sat 7am–7pm · Emergency line available</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15, marginBottom: 10 }}>{EMAIL_ICON}info@kccrawlspacespecialists.com</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15 }}>{MAP_ICON}Serving the KC region — within 1 hour of Kansas City</div>
            </div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <div style={{ font: "800 15px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>What Happens Next</div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['We call to confirm within 2 hours','Inspector arrives on your chosen day','We go under the house — full documentation','You get three honest options — no pressure','You decide. We schedule. Done.'].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                    <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'rgba(245,166,35,.15)', color: '#F5A623', font: "800 13px 'Inter',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i+1}</span>
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: '#c3d0e6' }}>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ border: '1.5px solid rgba(245,166,35,.4)', borderRadius: 16, padding: '22px 24px', background: 'rgba(245,166,35,.06)' }}>
              <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 8 }}>2-Hour Response Guarantee</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>Every inquiry gets a response within 2 hours during business hours. If we miss that window, your first inspection is on us. (It's always free — but we like the commitment.)</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: build complete Home page"
```

---

### Task 9: FAQ page

**Files:**
- Create: `app/faq/page.tsx`

- [ ] **Step 1: Create app/faq/page.tsx**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawlspace FAQ — Answers for Kansas City Homeowners',
  description: 'Common questions about crawlspace encapsulation cost, mold, moisture, and what encapsulation really does — answered straight.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // (paste all 22 Q&A entries from FAQ.dc.html JSON-LD block)
  ],
};

const costFaqs = [
  { q: "How much does crawl space encapsulation cost in Kansas City?", a: "Every crawl space is different, so the price depends on your specific situation — your home's size, the current condition, and which system fits. That's why we give you a firm written quote after a free inspection instead of a phone guess. Financing is available with payments as low as $165 per month." },
  { q: "Is crawl space encapsulation worth it?", a: "Yes. In Kansas City's humid climate, encapsulation typically pays back through 15–20% lower heating and cooling bills, healthier indoor air, protection from mold and wood rot, and higher resale value. Fixing moisture damage later — remediation, rotted joists, failed inspections — costs far more than preventing it." },
  { q: "Does crawl space encapsulation increase home value?", a: "It does. A sealed, dry, documented crawl space removes a common home-inspection red flag and reads as a permanent upgrade to buyers and inspectors. Our written report and transferable lifetime warranty travel with the home." },
  { q: "Do you offer financing?", a: "Yes. We work with multiple financing partners, with payments as low as $165 per month and 0% APR plans available. Approval takes about 60 seconds with no impact to your credit score to check your options. Your exact payment depends on your home and scope of work." },
  { q: "Is the inspection really free?", a: "Yes — the inspection and the written estimate are completely free, with no pressure and no obligation. It takes about 30 minutes and ends with an exact quote built around your home, not a guess." },
];

const processFaqs = [
  { q: "What is crawl space encapsulation?", a: "Encapsulation seals your crawl space from the ground up. We line the floor and walls with a heavy 20-mil vapor barrier, close and insulate the vents, treat any existing mold, and add a commercial dehumidifier that keeps humidity locked below 60%. The result is a clean, dry, conditioned space instead of a damp dirt cellar feeding moisture into your home." },
  { q: "What's the difference between a vapor barrier and full encapsulation?", a: "A vapor barrier is just plastic laid on the floor — vents stay open, walls stay exposed, and humidity is untouched. Full encapsulation seals the floor, walls, vents, and rim joists and adds active dehumidification. It's the difference between a band-aid and a cure." },
  { q: "How long does encapsulation take?", a: "Most Kansas City homes are completed in 1–2 days. Larger spaces or jobs that need mold remediation first may take up to 3 days. You don't need to leave your home while we work." },
  { q: "Do I need to leave my home during installation?", a: "No. Our crew works under the house, so you can go about your normal day. We'll let you know when we need access to entry points." },
  { q: "Can I do crawl space encapsulation myself?", a: "DIY vapor barriers almost always fail at the seams, walls, and vents — the places that matter most. Proper encapsulation needs commercial-grade 20-mil liner, correct seam-taping and termination, vent sealing, and a properly sized dehumidifier. A partial job traps moisture instead of stopping it, and professional installation is what makes the lifetime warranty possible." },
  { q: "How do I know if my crawl space needs encapsulation?", a: "Common signs: a musty smell in the home, cold or bouncy floors, high indoor humidity, visible mold or condensation, standing water or damp soil under the house, higher-than-normal energy bills, or a home inspector flagging moisture. A free inspection tells you for certain." },
];

const moldFaqs = [
  { q: "Why do Kansas City crawl spaces have moisture problems?", a: "Kansas City sits on dense clay soil that traps water against foundations, gets around 40 inches of rain a year, and reaches 90% summer humidity. Hot, humid air pours through open vents, hits the cooler ground, and condenses — feeding mold and rotting wood. It's a local condition, not a fluke." },
  { q: "Does encapsulation get rid of mold?", a: "Encapsulation removes the conditions mold needs by sealing out moisture and holding humidity below 60%. We treat any existing mold on the joists and framing during installation, and the sealed, dehumidified environment keeps it from returning." },
  { q: "Can mold come back after encapsulation?", a: "Not in a properly sealed and dehumidified crawl space. Mold needs moisture and humidity above roughly 60% to grow. Our system keeps humidity below that line permanently, which is why it's backed by our lifetime Dry Crawlspace Promise." },
  { q: "Does encapsulation get rid of musty smells?", a: "Yes. Musty odors in your home are usually crawl space air rising through the stack effect. Sealing and dehumidifying the space eliminates the source, and most homeowners notice the smell is gone within days." },
  { q: "Will encapsulation lower my energy bills?", a: "Yes — sealed crawl spaces improve efficiency by about 15–20% in most KC homes by eliminating the biggest source of uncontrolled air and moisture. Your floors are warmer in winter and your HVAC works less in summer." },
  { q: "What humidity level should a crawl space be?", a: "Below 60% relative humidity. Above that, mold and wood rot can take hold. Our commercial dehumidifiers are sized to keep your crawl space under 60% year-round — and our warranty guarantees it." },
  { q: "Does encapsulation help with pests and rodents?", a: "Yes. Sealing the vents, walls, and floor removes the damp, dark, open environment pests are drawn to and closes off their entry points. A dry, sealed crawl space is far less attractive to rodents and insects." },
];

const resultFaqs = [
  { q: "How long does crawl space encapsulation last?", a: "A properly installed system lasts 20–30 years. The 20-mil vapor barrier carries a 25-year manufacturer warranty, and our labor is backed by a transferable lifetime Dry Crawlspace Promise." },
  { q: "What is the Dry Crawlspace Promise?", a: "It's our lifetime guarantee: if moisture in your crawl space ever exceeds 60% relative humidity for more than 48 hours after our installation, we come back and fix it at zero cost. No questions, forever — and it transfers to the next owner." },
  { q: "Does homeowners insurance cover encapsulation?", a: "Usually not, because encapsulation is preventive. But if moisture has already caused structural damage, some policies may cover the remediation. We document everything with photos and a written report for your insurer." },
  { q: "What areas do you serve?", a: "We serve the greater Kansas City region — anywhere within about an hour of Kansas City, on both the Missouri and Kansas sides of the metro. Not sure if we cover you? Just call and ask." },
  { q: "How is your work different from a foundation company's?", a: "Crawl spaces are all we do. Our field team works exclusively on crawl space and underbelly installations — trained specifically for KC's clay soil, humidity, and housing stock — so you're not getting an upsell from a general contractor." },
];

function FaqGroup({ title, faqs, bg, textColor, dividerColor, detailBg, detailBorder, qColor, aColor, plusColor }: {
  title: string; faqs: {q:string;a:string}[];
  bg: string; textColor: string; dividerColor: string;
  detailBg: string; detailBorder: string; qColor: string; aColor: string; plusColor: string;
}) {
  return (
    <section style={{ background: bg, padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3.4vw,30px)', color: textColor, textTransform: 'uppercase', letterSpacing: '.01em' }}>{title}</span>
          <span style={{ flex: 1, height: 1, background: dividerColor }}></span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map(f => (
            <details key={f.q} style={{ background: detailBg, border: detailBorder, borderRadius: 12, padding: '0 22px' }}>
              <summary style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', minHeight: 44 }}>
                <span className="faq-q" style={{ flex: 1, font: "800 17px 'Inter',sans-serif", color: qColor, lineHeight: 1.4 }}>{f.q}</span>
                <span className="faq-plus" style={{ flex: 'none', display: 'inline-block', color: plusColor, fontSize: 26, fontWeight: 300, lineHeight: 1, width: 22, textAlign: 'center' }}>+</span>
              </summary>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: aColor, margin: '0 0 22px', paddingRight: 38 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const PHONE_SVG = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

export default function FaqPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 18 }}><span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }}></span>Answers, Straight Up</div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(38px,7.5vw,68px)', lineHeight: 1, letterSpacing: '.005em', textTransform: 'uppercase', margin: '0 0 18px', color: '#fff', textWrap: 'balance' as never }}>Crawl Space <span style={{ color: '#F5A623' }}>Questions</span>, Answered</h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: '0 auto 30px' }}>The questions Kansas City homeowners actually search for — about cost, mold, moisture, and what encapsulation really does. Clear answers, no jargon, no pressure.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>Book Your Free Inspection</Link>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 54, border: '1.5px solid rgba(255,255,255,.35)' }}>Call {PHONE}</a>
          </div>
        </div>
      </section>

      <FaqGroup title="Cost & Value" faqs={costFaqs} bg="#0D0D0D" textColor="#fff" dividerColor="rgba(245,166,35,.3)" detailBg="#111827" detailBorder="1px solid rgba(255,255,255,.1)" qColor="#fff" aColor="#9CA3AF" plusColor="#F5A623" />
      <FaqGroup title="How It Works" faqs={processFaqs} bg="#F9FAFB" textColor="#0D0D0D" dividerColor="rgba(27,58,107,.2)" detailBg="#fff" detailBorder="1px solid #e5e7eb" qColor="#0D0D0D" aColor="#4b5563" plusColor="#1B3A6B" />
      <FaqGroup title="Moisture, Mold & Air" faqs={moldFaqs} bg="#1B3A6B" textColor="#fff" dividerColor="rgba(245,166,35,.35)" detailBg="#0D0D0D" detailBorder="1px solid rgba(255,255,255,.1)" qColor="#fff" aColor="#c3d0e6" plusColor="#F5A623" />
      <FaqGroup title="Results, Warranty & Service" faqs={resultFaqs} bg="#0D0D0D" textColor="#fff" dividerColor="rgba(245,166,35,.3)" detailBg="#111827" detailBorder="1px solid rgba(255,255,255,.1)" qColor="#fff" aColor="#9CA3AF" plusColor="#F5A623" />

      {/* STILL HAVE QUESTIONS */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 14 }}><span style={{ width: 24, height: 2, background: '#1B3A6B', display: 'inline-block' }}></span>Didn't Find It?</div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5.5vw,46px)', lineHeight: 1.04, textTransform: 'uppercase', margin: '0 0 14px', color: '#0D0D0D' }}>Still Have a Question?</h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#4b5563', margin: '0 0 26px' }}>Ask a real person — no call center, no pressure. We'll tell you straight whether you even need us.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#0D0D0D', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54 }}>{PHONE_SVG}{PHONE}</a>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54 }}>Book a Free Inspection</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add FAQ page with accordion and JSON-LD schema"
```

---

### Task 10: Contact page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create app/contact/page.tsx**

```tsx
import type { Metadata } from 'next';
import InspectionForm from '@/components/InspectionForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Your Free Crawlspace Inspection',
  description: 'Schedule your free crawlspace inspection in Kansas City. Takes 2 minutes. We confirm within 2 hours. Same-week appointments available.',
};

export default function ContactPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>
      <section style={{ background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.16) 0%, rgba(37,99,235,0) 45%), #0D0D0D', padding: 'clamp(36px,6vw,64px) clamp(16px,5vw,24px) clamp(20px,4vw,32px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 16 }}><span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }}></span>Free Inspection</div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,62px)', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 14px', color: '#fff', textWrap: 'balance' as never }}>Book Your Free Inspection</h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,18px)', lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>Takes 2 minutes. We confirm within 2 hours. Same-week appointments available — no obligation, no pressure.</p>
        </div>
      </section>

      <section style={{ background: '#0D0D0D', padding: 'clamp(20px,4vw,40px) clamp(16px,5vw,24px) clamp(52px,8vw,88px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,4vw,48px)' }}>
          <div>
            <InspectionForm />
          </div>
          <div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#F5A623', textDecoration: 'none', font: "800 22px 'Inter',sans-serif", marginBottom: 6 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {PHONE}
              </a>
              <div style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 16, paddingLeft: 33 }}>Mon–Sat 7am–7pm · Emergency line available</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15, marginBottom: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
                info@kccrawlspacespecialists.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Serving the KC region — within 1 hour of Kansas City
              </div>
            </div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <div style={{ font: "800 15px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>What Happens Next</div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['We call to confirm within 2 hours','Inspector arrives on your chosen day','We go under the house — full documentation','You get three honest options — no pressure','You decide. We schedule. Done.'].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                    <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'rgba(245,166,35,.15)', color: '#F5A623', font: "800 13px 'Inter',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i+1}</span>
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: '#c3d0e6' }}>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ border: '1.5px solid rgba(245,166,35,.4)', borderRadius: 16, padding: '22px 24px', background: 'rgba(245,166,35,.06)' }}>
              <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 8 }}>2-Hour Response Guarantee</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>Every inquiry gets a response within 2 hours during business hours. If we miss that window, your first inspection is on us. (It's always free — but we like the commitment.)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add Contact page"
```

---

### Task 11: Encapsulation page

**Files:**
- Create: `app/encapsulation/page.tsx`

- [ ] **Step 1: Create app/encapsulation/page.tsx**

Port exactly from `Encapsulation.dc.html` — sections: Hero, What Is It, Why KC (4 stat cards), What's Included (6 checklist items), Pricing Tiers (3-tier), Before & After, FAQ (6 static items), CTA.

Key differences from reference:
- `<image-slot>` → `<Image src="/before.jpg" ...>` / `<Image src="/after.jpg" ...>`
- Links → `href="/contact"` and `href="/pricing"`
- `tel:` links use `PHONE_HREF` and `PHONE` from constants

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add Encapsulation page"
```

---

### Task 12: Mobile Homes, Pricing, About pages

**Files:**
- Create: `app/mobile-homes/page.tsx`
- Create: `app/pricing/page.tsx`
- Create: `app/about/page.tsx`

- [ ] **Step 1: Build each page from its `.dc.html` reference**

For each page:
- Port all sections, inline styles, copy, and SVG icons verbatim
- Replace `<dc-import name="Header">` / `<dc-import name="Footer">` — these come from layout.tsx automatically
- Replace `<image-slot>` with `<Image>` + appropriate `alt` text
- Replace `.dc.html` hrefs with clean Next.js paths (`/contact`, `/pricing`, etc.)
- Replace `{{ phone }}` / `{{ telHref }}` with `PHONE` / `PHONE_HREF` from constants

- [ ] **Step 2: Commit**
```
git add -A && git commit -m "feat: add Mobile Homes, Pricing, About pages"
```

---

### Task 13: Vercel deployment

**Files:**
- Create: `vercel.json` (optional — defaults are fine for Next.js)

- [ ] **Step 1: Initialize git if not done**
```
git init && git add -A && git commit -m "initial commit"
```

- [ ] **Step 2: Push to GitHub**
```
gh repo create kc-crawlspace --public --push --source .
```

- [ ] **Step 3: Deploy to Vercel**
```
npx vercel --prod
```
Follow prompts. Vercel auto-detects Next.js. No config needed.

- [ ] **Step 4: Verify live URL**

Open the Vercel URL, test: Home, FAQ, Contact form submit, Header nav active states, mobile layout.

---

## Spec Coverage Check

| Requirement | Task |
|---|---|
| Next.js App Router + TypeScript + Tailwind | Task 1 |
| Brand tokens (gold, navy, etc.) | Task 1 |
| Inter + Barlow Condensed fonts via next/font | Task 2 |
| LocalBusiness JSON-LD | Task 2 |
| Header (sticky, 3-bar, trust strip, active nav) | Task 3 |
| Footer (4-col grid, green checks) | Task 4 |
| InspectionForm (chips, multi-select, success state) | Task 5 |
| /api/inspection route | Task 6 |
| Assets (logo, before, after) | Task 7 |
| Home page (all 10 sections) | Task 8 |
| FAQ page + FAQPage JSON-LD | Task 9 |
| Contact page | Task 10 |
| Encapsulation page | Task 11 |
| Mobile Homes, Pricing, About | Task 12 |
| Vercel deploy | Task 13 |
| `section { scroll-margin-top: 104px }` | Task 1 (globals.css) |
| details/summary accordion (FAQ) | Task 9 |
| Reduced motion | Task 1 (globals.css) |
