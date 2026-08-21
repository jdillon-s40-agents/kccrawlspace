import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Mobile Home Skirting Kansas City | Most Jobs Done in a Day' },
  description:
    'Cracked, missing, or storm-damaged mobile home skirting? Standard and insulated options installed across the KC metro. Free inspection this week.',
};

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" style={{ flex: 'none', marginTop: 2 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const warningSigns = [
  'Cracked, bowed, or missing panels',
  'Cold drafts along the floor near exterior walls',
  'Visible gaps at the ground line',
  'No insulation in the current skirting',
  'Pests getting in through damaged sections',
  'Frozen pipes in past winters',
];

export default function MobileHomeSkirtingLandingPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* OFFER BANNER */}
      <div style={{ background: '#F5A623', padding: '10px 16px', textAlign: 'center' }}>
        <Link href="#inspection" style={{ textDecoration: 'none' }}>
          <p style={{ margin: 0, font: "800 14px 'Inter',sans-serif", color: '#0D0D0D', lineHeight: 1.4 }}>
            🎁 LIMITED OFFER — The next 10 people to fill out the form and schedule skirting get a FREE ground vapor barrier
          </p>
        </Link>
      </div>

      {/* HERO */}
      <section style={{ background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.2) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px) clamp(36px,6vw,64px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,.14)', border: '1px solid rgba(37,99,235,.4)', borderRadius: 30, padding: '7px 16px', marginBottom: 24 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="2.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            <span style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase', color: '#5b8def' }}>Manufactured &amp; Mobile Homes</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,8vw,64px)', lineHeight: 1.02, textTransform: 'uppercase', color: '#fff', margin: '0 0 22px' }}>
            Mobile Home Skirting{' '}
            <span style={{ color: '#5b8def' }}>Installed in a Day</span>
          </h1>
          <p style={{ fontSize: 'clamp(17px,2.4vw,20px)', lineHeight: 1.65, color: '#c3d0e6', margin: '0 auto 32px', maxWidth: '60ch' }}>
            Cracked, missing, or storm-damaged skirting? We install full standard or insulated skirting kits — new panels, J-channel, corner posts, and vents — most jobs done in a single day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="#inspection" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 17px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 56, boxShadow: '0 12px 32px -10px rgba(245,166,35,.6)' }}>
              Get My Free Skirting Quote
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

      {/* WARNING SIGNS */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#5b8def', marginBottom: 14 }}>Is It Time?</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,6vw,48px)', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.05 }}>
              Signs Your Skirting Needs Replacing
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
            {warningSigns.map((sign) => (
              <div key={sign} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '14px 16px' }}>
                <XMark />
                <span style={{ fontSize: 14.5, color: '#e5e7eb', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARD VS INSULATED */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 14 }}>Choosing the Right Skirting</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,6vw,48px)', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.05 }}>
              Standard vs. Insulated
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 'clamp(22px,4vw,30px)' }}>
              <h3 style={{ font: "800 18px 'Inter',sans-serif", color: '#fff', margin: '0 0 12px' }}>Standard Skirting</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#9CA3AF', margin: '0 0 16px' }}>
                Durable vinyl panels installed around the full perimeter. Blocks pests, hides the underbelly, and holds up to KC weather.
              </p>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 26, color: '#F5A623' }}>$1,000–$4,000</div>
              <div style={{ fontSize: 12.5, color: '#6b7280' }}>Single-wide to double-wide, installed</div>
            </div>
            <div style={{ background: '#111827', border: '1.5px solid #F5A623', borderRadius: 14, padding: 'clamp(22px,4vw,30px)' }}>
              <div style={{ display: 'inline-block', background: '#F5A623', color: '#0D0D0D', font: "800 10px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>Recommended</div>
              <h3 style={{ font: "800 18px 'Inter',sans-serif", color: '#fff', margin: '0 0 12px' }}>Insulated Skirting</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#e5e7eb', margin: '0 0 16px' }}>
                Everything standard skirting does, plus an added layer of insulation — warmer floors, better protected pipes, lower winter heating bills.
              </p>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 26, color: '#F5A623' }}>+20–40%</div>
              <div style={{ fontSize: 12.5, color: '#6b7280' }}>On top of standard pricing</div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#9CA3AF', marginTop: 24, maxWidth: '60ch', margin: '24px auto 0' }}>
            Already having belly board or insulation repaired? Skirting is worth doing at the same visit — it saves a second trip and a second labor charge.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(44px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <svg width="36" height="28" viewBox="0 0 36 28" fill="rgba(245,166,35,.4)" style={{ marginBottom: 20 }}>
            <path d="M0 28V17.5C0 7.833 5.167 2.167 15.5 0L17 3C12.333 4.333 9.667 7 9 11H15V28H0ZM21 28V17.5C21 7.833 26.167 2.167 36.5 0L38 3C33.333 4.333 30.667 7 30 11H36V28H21Z" />
          </svg>
          <blockquote style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,3.5vw,28px)', color: '#fff', lineHeight: 1.35, margin: '0 0 24px', fontStyle: 'normal' }}>
            We install skirting as part of a complete underbelly system, not as a standalone cosmetic fix — so if there&apos;s insulation or belly board damage behind it, we catch it while we&apos;re already there.
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
              { n: '01', title: 'Free Inspection', body: 'We measure the perimeter, check for underlying damage, and give you a written estimate — no pressure.' },
              { n: '02', title: 'You Choose', body: 'Standard or insulated skirting — you decide what fits your home and budget.' },
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
              Book Your Free Skirting Inspection
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', maxWidth: '50ch', margin: '0 auto' }}>
              Standard or insulated, single-wide or double-wide — tell us about your home and we&apos;ll give you honest options.
            </p>
          </div>
          <div style={{ background: 'rgba(245,166,35,.1)', border: '1.5px solid rgba(245,166,35,.4)', borderRadius: 14, padding: '16px 22px', marginBottom: 24, textAlign: 'center' }}>
            <p style={{ margin: 0, font: "800 15px 'Inter',sans-serif", color: '#F5A623', lineHeight: 1.5 }}>
              🎁 The next 10 people to fill out this form and schedule skirting get a FREE ground vapor barrier included.
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
