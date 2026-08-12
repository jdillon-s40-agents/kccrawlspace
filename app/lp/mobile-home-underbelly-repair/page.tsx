import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Mobile Home Underbelly Repair Kansas City | Most Jobs Done in a Day' },
  description:
    'Torn belly board, cold floors, crushed ductwork, damaged skirting — we repair mobile home underbellies across the KC metro. Free inspection this week.',
};

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const commonFixes = [
  {
    title: 'Torn or Sagging Belly Board',
    body: 'Old, torn belly material removed and replaced with new heavy-duty board — the core of every underbelly repair.',
  },
  {
    title: 'Missing or Wet Insulation',
    body: 'Fresh, full-depth fiberglass insulation replaces anything that\'s fallen, soaked, or been torn out by pests.',
  },
  {
    title: 'Crushed or Disconnected Ductwork',
    body: 'Flex duct gets crushed or knocked loose when the belly board fails above it — repaired or fully replaced while the underbelly is already open.',
  },
  {
    title: 'Frozen or Exposed Pipes',
    body: 'A failed underbelly leaves plumbing exposed to the cold. We rebuild the insulation envelope so pipes stay protected through a KC winter.',
  },
  {
    title: 'Damaged Skirting',
    body: 'New or repaired skirting, with insulated skirting options for an extra layer of energy efficiency and pipe protection.',
  },
  {
    title: 'Pest Entry Points',
    body: 'Openings, gaps, and torn belly board that let raccoons, opossums, and rodents in — sealed shut for good.',
  },
];

export default function MobileHomeUnderbellyLandingPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.2) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px) clamp(36px,6vw,64px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,.14)', border: '1px solid rgba(37,99,235,.4)', borderRadius: 30, padding: '7px 16px', marginBottom: 24 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="2.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            <span style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase', color: '#5b8def' }}>Manufactured &amp; Mobile Homes</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,8vw,64px)', lineHeight: 1.02, textTransform: 'uppercase', color: '#fff', margin: '0 0 22px' }}>
            Mobile Home Underbelly Repair{' '}
            <span style={{ color: '#5b8def' }}>Done Right, Done Fast</span>
          </h1>
          <p style={{ fontSize: 'clamp(17px,2.4vw,20px)', lineHeight: 1.65, color: '#c3d0e6', margin: '0 auto 32px', maxWidth: '60ch' }}>
            Torn belly board, cold floors, crushed ductwork, damaged skirting — we fix the whole underbelly system, not just one piece of it. Most jobs done in a single day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="#inspection" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 17px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 56, boxShadow: '0 12px 32px -10px rgba(245,166,35,.6)' }}>
              Get My Free Inspection
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,.07)', border: '1.5px solid rgba(255,255,255,.2)', color: '#fff', font: "800 17px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 56 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {PHONE}
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: 32 }}>
            {['Transferable Warranty', 'Licensed & Insured', 'Most Jobs in One Day'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#e5e7eb', fontSize: 13, fontWeight: 700 }}>
                <Check />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON FIXES GRID */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#5b8def', marginBottom: 14 }}>Common Underbelly Problems</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,6vw,48px)', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.05 }}>
              What We Fix Under Your Home
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {commonFixes.map((fix, i) => (
              <div key={fix.title} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 'clamp(20px,3vw,26px)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(91,141,239,.15)', color: '#5b8def', font: "800 16px 'Barlow Condensed',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ font: "800 17px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>{fix.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#9CA3AF', margin: 0 }}>{fix.body}</p>
              </div>
            ))}
            <Link
              href="#inspection"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: 10,
                background: 'rgba(245,166,35,.1)',
                border: '1.5px dashed rgba(245,166,35,.4)',
                borderRadius: 14,
                padding: 'clamp(20px,3vw,26px)',
                textDecoration: 'none',
              }}
            >
              <div style={{ font: "800 16px 'Inter',sans-serif", color: '#F5A623' }}>Not sure what&apos;s wrong?</div>
              <div style={{ fontSize: 14, color: '#e5e7eb' }}>We&apos;ll diagnose it during your free inspection →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(44px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <svg width="36" height="28" viewBox="0 0 36 28" fill="rgba(245,166,35,.4)" style={{ marginBottom: 20 }}>
            <path d="M0 28V17.5C0 7.833 5.167 2.167 15.5 0L17 3C12.333 4.333 9.667 7 9 11H15V28H0ZM21 28V17.5C21 7.833 26.167 2.167 36.5 0L38 3C33.333 4.333 30.667 7 30 11H36V28H21Z" />
          </svg>
          <blockquote style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,3.5vw,28px)', color: '#fff', lineHeight: 1.35, margin: '0 0 24px', fontStyle: 'normal' }}>
            We treat underbelly repair like encapsulating a crawl space, not a quick patch job — belly board, insulation, ductwork, and skirting, all handled as one complete system.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(245,166,35,.2)', border: '2px solid rgba(245,166,35,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "800 18px 'Barlow Condensed',sans-serif", color: '#F5A623' }}>JD</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ font: "700 15px 'Inter',sans-serif", color: '#fff' }}>Jason Dillon</div>
              <div style={{ fontSize: 13, color: '#93b4d4' }}>Owner, KC Crawl Space Specialists LLC</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,6vw,48px)', textTransform: 'uppercase', color: '#fff', margin: '0 0 36px', textAlign: 'center', lineHeight: 1.05 }}>
            How It Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {[
              { n: '01', title: 'Free Inspection', body: 'We assess the belly board, insulation, ductwork, and skirting, and give you a written estimate — no pressure.' },
              { n: '02', title: 'You Choose the Fix', body: 'Full underbelly restoration or targeted repairs — you decide what fits your home and budget.' },
              { n: '03', title: 'Install & Warranty', body: 'Most jobs completed in a single day, with a transferable warranty on the work.' },
            ].map((step) => (
              <div key={step.n} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: 24 }}>
                <div style={{ color: '#F5A623', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, marginBottom: 12 }}>{step.n}</div>
                <h3 style={{ font: "800 17px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>{step.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#9CA3AF', margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="inspection" style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 14 }}>Free This Week</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', textTransform: 'uppercase', color: '#fff', margin: '0 0 14px' }}>
              Book Your Free Underbelly Inspection
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', maxWidth: '50ch', margin: '0 auto' }}>
              Cold floors, torn belly board, damaged ductwork, or skirting issues — tell us what&apos;s going on and we&apos;ll give you honest options.
            </p>
          </div>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 18, padding: 'clamp(24px,4vw,40px)', marginBottom: 24 }}>
            <InspectionForm />
          </div>
          <FinancingOptions />
          <p style={{ textAlign: 'center', fontSize: 14, color: '#4b5563', marginTop: 20 }}>
            Or call us directly: <a href={PHONE_HREF} style={{ color: '#F5A623', textDecoration: 'none', fontWeight: 700 }}>{PHONE}</a> · <a href="https://www.crawlspacekc.com" style={{ color: '#6b7280', textDecoration: 'none' }}>CrawlspaceKC.com</a>
          </p>
        </div>
      </section>

    </div>
  );
}
