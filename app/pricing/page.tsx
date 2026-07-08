import type { Metadata } from 'next';
import Link from 'next/link';
import FinancingCalculator from '@/components/FinancingCalculator';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawlspace Encapsulation Pricing Kansas City | No Hidden Fees' },
  description: "See how KC Crawl Space Specialists prices crawlspace encapsulation and mobile home repair. 3 honest tiers, financing from $74/mo, no hidden fees.",
  alternates: {
    canonical: 'https://www.crawlspacekc.com/pricing/',
  }};

function Yes() {
  return <span style={{ color: '#16A34A', fontWeight: 900, fontSize: 17 }}>✓</span>;
}
function No() {
  return <span style={{ color: '#cbd5e1', fontSize: 17 }}>—</span>;
}
function Txt({ children }: { children: string }) {
  return <span style={{ fontSize: 13, color: '#9CA3AF' }}>{children}</span>;
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function DashIcon() {
  return <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 15, lineHeight: 1, flex: 'none' }}>—</span>;
}

const encapRows = [
  { label: 'Best for', c0: <Txt>Basic control</Txt>, c1: <Txt>Most KC homes</Txt>, c2: <Txt>Max protection</Txt> },
  { label: '20-mil vapor barrier', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Vent sealing', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Seam taping', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Termination bar', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Mold treatment', c0: <No />, c1: <Yes />, c2: <Yes /> },
  { label: 'Commercial dehumidifier', c0: <No />, c1: <No />, c2: <Yes /> },
  { label: 'Drainage matting', c0: <No />, c1: <No />, c2: <Yes /> },
  { label: 'Lifetime warranty', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Financing from', c0: <Txt>$74/mo</Txt>, c1: <Txt>$250/mo</Txt>, c2: <Txt>$361/mo</Txt> },
];

const mobileRows = [
  { label: 'Belly board repair', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Insulation', c0: <Txt>Partial</Txt>, c1: <Txt>Full</Txt>, c2: <Txt>Full</Txt> },
  { label: 'Pipe & duct sealing', c0: <Yes />, c1: <Yes />, c2: <Yes /> },
  { label: 'Ground vapor barrier', c0: <No />, c1: <No />, c2: <Yes /> },
  { label: 'Financing from', c0: <Txt>$22/mo</Txt>, c1: <Txt>$83/mo</Txt>, c2: <Txt>$111/mo</Txt> },
];

// Data for mobile card views
const encapTiers = [
  {
    name: 'Essential', price: '$2,800+', financing: '$74/mo',
    popular: false,
    features: [
      { label: '20-mil vapor barrier', yes: true },
      { label: 'Vent sealing', yes: true },
      { label: 'Seam taping', yes: true },
      { label: 'Termination bar', yes: true },
      { label: 'Mold treatment', yes: false },
      { label: 'Commercial dehumidifier', yes: false },
      { label: 'Drainage matting', yes: false },
      { label: 'Lifetime warranty', yes: true },
    ],
  },
  {
    name: 'Complete', price: '$4,500+', financing: '$250/mo',
    popular: true,
    features: [
      { label: '20-mil vapor barrier', yes: true },
      { label: 'Vent sealing', yes: true },
      { label: 'Seam taping', yes: true },
      { label: 'Termination bar', yes: true },
      { label: 'Mold treatment', yes: true },
      { label: 'Commercial dehumidifier', yes: false },
      { label: 'Drainage matting', yes: false },
      { label: 'Lifetime warranty', yes: true },
    ],
  },
  {
    name: 'Premium', price: '$6,500+', financing: '$361/mo',
    popular: false,
    features: [
      { label: '20-mil vapor barrier', yes: true },
      { label: 'Vent sealing', yes: true },
      { label: 'Seam taping', yes: true },
      { label: 'Termination bar', yes: true },
      { label: 'Mold treatment', yes: true },
      { label: 'Commercial dehumidifier', yes: true },
      { label: 'Drainage matting', yes: true },
      { label: 'Lifetime warranty', yes: true },
    ],
  },
];

const mobileTiers = [
  {
    name: 'Patch', price: '$400+', financing: '$22/mo', popular: false,
    features: [
      { label: 'Belly board repair', yes: true },
      { label: 'Full insulation', yes: false, note: 'Partial' },
      { label: 'Pipe & duct sealing', yes: true },
      { label: 'Ground vapor barrier', yes: false },
    ],
  },
  {
    name: 'Full Replacement', price: '$1,500+', financing: '$83/mo', popular: true,
    features: [
      { label: 'Belly board repair', yes: true },
      { label: 'Full insulation', yes: true },
      { label: 'Pipe & duct sealing', yes: true },
      { label: 'Ground vapor barrier', yes: false },
    ],
  },
  {
    name: 'Full + Vapor Barrier', price: '$2,000+', financing: '$111/mo', popular: false,
    features: [
      { label: 'Belly board repair', yes: true },
      { label: 'Full insulation', yes: true },
      { label: 'Pipe & duct sealing', yes: true },
      { label: 'Ground vapor barrier', yes: true },
    ],
  },
];

function TierCard({ name, price, financing, popular, features, dark = false }: {
  name: string; price: string; financing: string; popular: boolean;
  features: { label: string; yes: boolean; note?: string }[];
  dark?: boolean;
}) {
  return (
    <div style={{
      background: dark ? '#0D0D0D' : '#fff',
      border: popular ? '2px solid #F5A623' : `1px solid ${dark ? 'rgba(255,255,255,.12)' : '#e5e7eb'}`,
      borderRadius: 16,
      padding: 22,
      position: 'relative',
      boxShadow: popular ? '0 16px 40px -16px rgba(245,166,35,.4)' : 'none',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {popular && (
        <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#F5A623', color: '#0D0D0D', font: "800 11px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>
          Most Popular
        </div>
      )}
      <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase', color: popular ? '#F5A623' : (dark ? '#9CA3AF' : '#6b7280'), marginBottom: 4 }}>{name}</div>
      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 30, color: dark ? '#fff' : '#0D0D0D', lineHeight: 1, marginBottom: 2 }}>{price}</div>
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 16 }}>From {financing}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18, flex: 1 }}>
        {features.map((f) => (
          <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: dark ? (f.yes ? '#e5e7eb' : '#6b7280') : (f.yes ? '#1f2937' : '#9CA3AF') }}>
            {f.yes ? <CheckIcon /> : <DashIcon />}
            <span>{f.note ? `${f.label} (${f.note})` : f.label}</span>
          </div>
        ))}
      </div>
      <Link href="/contact" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: popular ? '#F5A623' : 'transparent',
        border: popular ? 'none' : `1.5px solid ${dark ? 'rgba(255,255,255,.25)' : '#d1d5db'}`,
        color: popular ? '#0D0D0D' : (dark ? '#fff' : '#1f2937'),
        font: "800 14px 'Inter',sans-serif",
        textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 46,
      }}>
        Get This Quote
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>
      <style>{`
        .kc-table-view { display: block; }
        .kc-card-view  { display: none;  }
        @media (max-width: 767px) {
          .kc-table-view { display: none;  }
          .kc-card-view  { display: grid; grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 18 }}>
            <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />Transparent Pricing
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,66px)', lineHeight: 1, letterSpacing: '.005em', textTransform: 'uppercase' as const, margin: '0 0 18px', color: '#fff' }}>
            Honest Pricing. <span style={{ color: '#F5A623' }}>No Surprises.</span> No Pressure.
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '58ch', margin: '0 auto 30px' }}>
            Most companies hide their pricing. We don&apos;t. Here&apos;s exactly how we price our work in Kansas City — before we ever set foot in your home.
          </p>
          <a href="#calculator" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>
            Estimate My Monthly Payment
          </a>
        </div>
      </section>

      {/* ENCAPSULATION COMPARISON */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '54ch', margin: '0 auto 38px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Encapsulation Packages</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#0D0D0D' }}>Compare Your Three Options</h2>
          </div>

          {/* Desktop table */}
          <div className="kc-table-view" style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #e5e7eb', background: '#fff', boxShadow: '0 8px 30px -12px rgba(0,0,0,.12)' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 580, fontSize: 14.5 }}>
              <thead>
                <tr style={{ background: '#0D0D0D', color: '#fff' }}>
                  <th style={{ textAlign: 'left', padding: '18px 18px', font: "700 13px 'Inter',sans-serif", letterSpacing: '.04em', width: '34%' }}>Feature</th>
                  <th style={{ padding: '18px 12px' }}>
                    <div style={{ font: "600 11px 'Inter',sans-serif", color: '#9CA3AF', letterSpacing: '.08em', textTransform: 'uppercase' as const }}>Essential</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#fff', marginTop: 2 }}>$2,800+</div>
                  </th>
                  <th style={{ padding: '18px 12px', background: '#F5A623' }}>
                    <div style={{ font: "700 11px 'Inter',sans-serif", color: '#3a2c08', letterSpacing: '.08em', textTransform: 'uppercase' as const }}>Complete · Popular</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#0D0D0D', marginTop: 2 }}>$4,500+</div>
                  </th>
                  <th style={{ padding: '18px 12px' }}>
                    <div style={{ font: "600 11px 'Inter',sans-serif", color: '#9CA3AF', letterSpacing: '.08em', textTransform: 'uppercase' as const }}>Premium</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#fff', marginTop: 2 }}>$6,500+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {encapRows.map((r, i) => (
                  <tr key={r.label} style={{ borderBottom: '1px solid #eef1f4', background: i % 2 ? '#fbfcfd' : '#fff' }}>
                    <td style={{ padding: '13px 18px', color: '#1f2937', fontWeight: 600 }}>{r.label}</td>
                    <td style={{ padding: '13px 12px', textAlign: 'center' }}>{r.c0}</td>
                    <td style={{ padding: '13px 12px', textAlign: 'center', background: 'rgba(245,166,35,.08)' }}>{r.c1}</td>
                    <td style={{ padding: '13px 12px', textAlign: 'center' }}>{r.c2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="kc-card-view">
            {encapTiers.map((t) => (
              <TierCard key={t.name} {...t} />
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12, marginTop: 18 }}>
            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1B3A6B', color: '#fff', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>Quote Essential</Link>
            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>Quote Complete</Link>
            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1B3A6B', color: '#fff', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>Quote Premium</Link>
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '54ch', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>No Hidden Fees</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>What Affects Your Price</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {[
              { n: 1, title: 'Crawlspace size', body: 'More material and labor for bigger spaces. Most KC homes run 800–2,000 sq ft.' },
              { n: 2, title: 'Current condition', body: 'Mold, standing water, or debris needs remediation before we install.' },
              { n: 3, title: 'Ceiling height', body: 'Spaces under 24" are tight and slower. We never surprise you with the cost.' },
              { n: 4, title: 'Number of vents', body: 'Each vent needs a cover and seal. The average KC home has 6–12.' },
              { n: 5, title: 'Add-ons', body: 'Dehumidifiers, drainage matting, and mold treatment are priced separately — always optional.' },
            ].map((f) => (
              <div key={f.n} style={{ display: 'flex', gap: 16, background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: 22 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 32, color: '#F5A623', lineHeight: 1, flex: 'none' }}>{f.n}</div>
                <div>
                  <div style={{ font: "700 16px 'Inter',sans-serif", color: '#fff', marginBottom: 5 }}>{f.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: '#9CA3AF', margin: 0 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE HOME PRICING */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '54ch', margin: '0 auto 38px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Manufactured Homes</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Mobile Home Pricing</h2>
          </div>

          {/* Desktop table */}
          <div className="kc-table-view" style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,.12)' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 520, fontSize: 14.5, background: '#0D0D0D' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,.12)' }}>
                  <th style={{ textAlign: 'left', padding: '16px 18px', font: "700 13px 'Inter',sans-serif", color: '#9CA3AF', letterSpacing: '.04em', width: '34%' }}>Feature</th>
                  <th style={{ padding: '16px 12px', color: '#fff' }}>
                    <div style={{ font: "600 11px 'Inter',sans-serif", color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase' as const }}>Patch</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20 }}>$400+</div>
                  </th>
                  <th style={{ padding: '16px 12px', color: '#F5A623' }}>
                    <div style={{ font: "700 11px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase' as const }}>Full · Popular</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20 }}>$1,500+</div>
                  </th>
                  <th style={{ padding: '16px 12px', color: '#fff' }}>
                    <div style={{ font: "600 11px 'Inter',sans-serif", color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase' as const }}>Full + VB</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20 }}>$2,000+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mobileRows.map((r) => (
                  <tr key={r.label} style={{ borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    <td style={{ padding: '13px 18px', color: '#e5e7eb', fontWeight: 600 }}>{r.label}</td>
                    <td style={{ padding: '13px 12px', textAlign: 'center', color: '#fff' }}>{r.c0}</td>
                    <td style={{ padding: '13px 12px', textAlign: 'center', color: '#fff', background: 'rgba(245,166,35,.08)' }}>{r.c1}</td>
                    <td style={{ padding: '13px 12px', textAlign: 'center', color: '#fff' }}>{r.c2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="kc-card-view">
            {mobileTiers.map((t) => (
              <TierCard key={t.name} {...t} dark />
            ))}
          </div>
        </div>
      </section>

      {/* FINANCING CALCULATOR */}
      <section id="calculator" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '54ch', margin: '0 auto 34px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Financing Calculator</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 12px', color: '#fff' }}>As Low As $74/Month</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>60-second approval. Checking your rate never affects your credit score.</p>
          </div>
          <FinancingCalculator />
        </div>
      </section>

      {/* COMPETITOR COMPARISON */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ border: '1.5px solid #F5A623', borderRadius: 20, padding: 'clamp(26px,5vw,44px)', background: '#fff', boxShadow: '0 16px 40px -18px rgba(245,166,35,.35)' }}>
            <div style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase' as const, color: '#1B3A6B', marginBottom: 10 }}>The Math</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', lineHeight: 1.04, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#0D0D0D' }}>Why Our Pricing Makes Sense</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4b5563', margin: '0 0 14px' }}>
              The big chains — Groundworks, Thrasher — typically quote <strong style={{ color: '#0D0D0D' }}>$1,500–$3,000 more</strong> than us for comparable work. They carry corporate overhead, franchise fees, and national ad budgets. You pay for their ads. We&apos;re KC-owned, our overhead is lean, and our lifetime warranty is something no chain will match.
            </p>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: 20, margin: '20px 0' }}>
              <div style={{ font: "800 14px 'Inter',sans-serif", color: '#DC2626', marginBottom: 12, textTransform: 'uppercase' as const, letterSpacing: '.04em' }}>The cost of waiting</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: '#1f2937' }}>
                {[
                  { label: 'Mold remediation after the fact', cost: '$8,000–$25,000' },
                  { label: 'Wood rot structural repair', cost: '$10,000–$40,000' },
                  { label: 'Home value lost to moisture docs', cost: '$15,000–$30,000' },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <span>{row.label}</span>
                    <strong style={{ color: '#DC2626' }}>{row.cost}</strong>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#1f2937', margin: 0, fontWeight: 600 }}>
              Our installation at $4,500 is the cheapest insurance policy you&apos;ll ever buy for your home.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#0D0D0D' }}>Ready for Your Exact Quote?</h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#3a2c08', margin: '0 0 28px' }}>
            Every crawlspace is different. Your free inspection takes 30 minutes and gives you an exact number — not a range, not a guess.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#0D0D0D', color: '#fff', font: "800 17px 'Inter',sans-serif", textDecoration: 'none', padding: '18px 32px', borderRadius: 11, minHeight: 58, boxShadow: '0 16px 40px -12px rgba(0,0,0,.5)' }}>
            Book Your Free Inspection
          </Link>
          <div style={{ marginTop: 20 }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0D0D0D', font: "800 19px 'Inter',sans-serif", textDecoration: 'none' }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
