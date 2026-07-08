import Link from 'next/link';
import type { Metadata } from 'next';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Kansas City Crawlspace Encapsulation | KC Crawl Space Specialists' },
  description: "Fix moisture, mold & musty odors under your Kansas City home. KC's only dedicated crawlspace specialist. Free inspection · lifetime warranty · same-week service.",
  alternates: {
    canonical: 'https://www.crawlspacekc.com/',
  }};

const reviews = [
  {
    text: '"A home inspector flagged our crawlspace during a sale. These guys were out the next day, gave us three options, and had it sealed in two days. The basement smell was gone within a week. Sale closed without a hitch."',
    name: 'Natalie F.',
    location: 'Raytown, MO',
  },
  {
    text: '"I called Groundworks first — three-week wait and a quote that felt way too high. KC Crawl Space Specialists came out in 48 hours, and their Better package was $1,400 less. Same warranty. Way better service."',
    name: 'Robert J.',
    location: 'Belton, MO',
  },
  {
    text: '"My wife has bad allergies and the house felt damp no matter what we did with the AC. Our crawlspace read 82%. They sealed it, put in a dehumidifier, and within two weeks she stopped waking up congested. Best home improvement we\'ve made."',
    name: 'Tony & Maria L.',
    location: 'Grandview, MO',
  },
];

function Star({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Check({ color = '#16A34A', size = 17 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PhoneIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const EYEBROW_BAR = <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />;

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: dark ? '#1B3A6B' : '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>
      {EYEBROW_BAR}{children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section id="top" style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,84px) clamp(16px,5vw,24px) clamp(48px,8vw,88px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }}>
          <div>
            <Eyebrow>Kansas City, MO &amp; KS</Eyebrow>
            <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(42px,8.5vw,74px)', lineHeight: .98, letterSpacing: '.005em', textTransform: 'uppercase' as const, margin: '0 0 20px', color: '#fff' }}>
              Kansas City's <span style={{ color: '#F5A623' }}>Only</span><br />Crawlspace Specialist.
            </h1>
            <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '34ch', margin: '0 0 28px' }}>
              We don&apos;t do foundations. We don&apos;t do basements. We seal crawlspaces — and we do it better than anyone in KC.
            </p>
            {/* Mobile-only video — above trust stats, above the fold */}
            <div className="hero-video-mobile" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', boxShadow: '0 24px 50px -16px rgba(0,0,0,.8)', marginBottom: 28 }}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src="/hero.mp4"
                poster="/hero-poster.png"
                controls
                playsInline
                preload="metadata"
                style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(8px,2vw,18px)', marginBottom: 30, maxWidth: 520 }}>
              {[{ val: '10+', lbl: 'Years Exp.' }, { val: '4.9★', lbl: 'Google Rating' }, { val: 'Lifetime', lbl: 'Warranty', small: true }, { val: '48hr', lbl: 'Service' }].map((s) => (
                <div key={s.lbl}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: s.small ? 'clamp(22px,4vw,32px)' : 'clamp(28px,5vw,40px)', color: '#F5A623', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginTop: 3 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>
                Book Your Free Inspection
              </Link>
              <Link href="#proof" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 54, border: '1.5px solid rgba(255,255,255,.35)' }}>
                See What We&apos;ve Found <Arrow />
              </Link>
            </div>
          </div>

          <div className="hero-video-desktop">
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', boxShadow: '0 36px 70px -24px rgba(0,0,0,.8)' }}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src="/hero.mp4"
                poster="/hero-poster.png"
                controls
                playsInline
                preload="metadata"
                style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#6b7280', margin: '12px 0 0', letterSpacing: '.03em' }}>
              Real crawlspace encapsulation — Kansas City homes sealed by our team
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Eyebrow>The Hidden Problem</Eyebrow>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 18px', color: '#fff', maxWidth: '18ch' }}>
            Is Your Home Breathing Crawlspace Air?
          </h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.65, color: '#c3d0e6', maxWidth: '62ch', margin: '0 0 36px' }}>
            Over <strong style={{ color: '#fff' }}>40% of the air</strong> on your home&apos;s first floor comes straight from the crawlspace. If it&apos;s damp, moldy, or unsealed — so is the air your family breathes. Kansas City&apos;s clay soil, 40 inches of annual rainfall, and brutal summer humidity create the perfect storm for moisture damage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
            {[
              { icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />, title: 'Mold & Mildew Below', body: 'Spores spread into your living space through the stack effect — rising air pulls them up from the crawlspace into the rooms you breathe in.' },
              { icon: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z" />, title: 'Standing Moisture', body: 'Clay soil plus KC rainfall equals constant water intrusion and high humidity sitting under your home all year long.' },
              { icon: <><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></>, title: 'Cold Floors & High Bills', body: 'Unsealed crawlspaces are the #1 cause of floor drafts and heating inefficiency — you pay to condition air that escapes below.' },
            ].map((c) => (
              <div key={c.title} style={{ background: '#0D0D0D', border: '1px solid rgba(220,38,38,.3)', borderRadius: 14, padding: 26 }}>
                <div style={{ width: 48, height: 48, borderRadius: 11, background: 'rgba(220,38,38,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, color: '#DC2626' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </div>
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
            <Eyebrow dark>What We Do</Eyebrow>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#0D0D0D' }}>
              One Company. One Specialty. Done Right.
            </h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.65, color: '#4b5563', margin: 0 }}>
              Every other crawlspace company in Kansas City is primarily a foundation business — encapsulation is their upsell. For us, it&apos;s everything.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
            {/* Site-Built Card */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(245,166,35,.3)', borderRadius: 18, padding: 'clamp(24px,4vw,34px)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 54, height: 54, borderRadius: 13, background: 'rgba(245,166,35,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#F5A623' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 6 }}>Site-Built Homes</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 28, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 12px', lineHeight: 1.05 }}>Crawlspace Encapsulation</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 18px' }}>Full vapor barrier install, vent sealing, mold treatment, and dehumidifier installation for standard homes.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['20-mil reinforced vapor barrier', 'All vents sealed and blocked', 'Mold treatment of joists & framing', 'Commercial dehumidifier install', 'Written moisture report included', 'Lifetime transferable warranty'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#e5e7eb', lineHeight: 1.45 }}>
                    <Check />{i}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 13, color: '#9CA3AF' }}>Starting from</span>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#F5A623' }}>$2,800</span>
                </div>
                <div style={{ fontSize: 12.5, color: '#6b7280', margin: '2px 0 18px' }}>Most homeowners invest $4,500–$6,500</div>
                <Link href="#book" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>
                  Book Free Inspection <Arrow />
                </Link>
              </div>
            </div>

            {/* Mobile Home Card */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(37,99,235,.3)', borderRadius: 18, padding: 'clamp(24px,4vw,34px)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 54, height: 54, borderRadius: 13, background: 'rgba(37,99,235,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#2563EB' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
              </div>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase' as const, color: '#2563EB', marginBottom: 6 }}>Manufactured Homes</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 28, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 12px', lineHeight: 1.05 }}>Mobile Home Underbelly</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 18px' }}>Complete underbelly insulation and vapor barrier replacement for manufactured and mobile homes across KC.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Full belly board replacement', 'Fiberglass insulation installation', 'Pipe and duct sealing', 'Ground vapor barrier', 'Pest damage repair', 'Transferable warranty'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#e5e7eb', lineHeight: 1.45 }}>
                    <Check />{i}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 13, color: '#9CA3AF' }}>Starting from</span>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#F5A623' }}>$1,500</span>
                </div>
                <div style={{ fontSize: 12.5, color: '#6b7280', margin: '2px 0 18px' }}>Most homeowners invest $2,000–$3,500</div>
                <Link href="#book" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: 14, borderRadius: 9, minHeight: 50 }}>
                  Book Free Inspection <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '60ch', margin: '0 auto 44px' }}>
            <Eyebrow>Our Warranty</Eyebrow>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#fff' }}>
              The KC Dry Home Guarantee
            </h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>No other company in Kansas City offers what we do.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 20, marginBottom: 34 }}>
            {[
              { eyebrow: 'Lifetime Warranty', title: 'The Dry Crawlspace Promise', body: 'If humidity ever exceeds 60% for more than 48 hours after our install, we come back and fix it at zero cost. No questions. Forever.' },
              { eyebrow: 'Transfers at No Charge', title: 'Transferable Ownership', body: 'The warranty transfers to any future owner at no charge — just call and we update the paperwork. Adds documented value when you sell.' },
              { eyebrow: 'Or We Come Back Free', title: '30-Day Smell-Free', body: "If your home doesn't smell noticeably better within 30 days, we return for a full re-inspection and remediation at no charge." },
            ].map((c) => (
              <div key={c.title} style={{ background: 'linear-gradient(180deg,rgba(245,166,35,.07),rgba(245,166,35,0))', border: '1px solid rgba(245,166,35,.4)', borderRadius: 16, padding: 28 }}>
                <div style={{ color: '#F5A623', marginBottom: 16 }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 4 }}>{c.eyebrow}</div>
                <h3 style={{ font: "800 20px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 'clamp(15px,2vw,17px)', lineHeight: 1.6, color: '#c3d0e6', maxWidth: '64ch', margin: '0 auto' }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>We offer these guarantees because we&apos;ve done this long enough to know our installation works.</span> Every time. If it doesn&apos;t, we make it right.
          </p>
        </div>
      </section>

      {/* FINANCING */}
      <section id="financing" style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '58ch', margin: '0 auto 36px' }}>
            <Eyebrow>Financing Available</Eyebrow>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,6.5vw,56px)', lineHeight: 1, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#fff' }}>
              As Low As <span style={{ color: '#F5A623' }}>$74/Month</span>
            </h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>
              60-second approval. No impact to your credit score to check.
            </p>
          </div>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 18, padding: 'clamp(26px,4vw,40px)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(20px,4vw,40px)', justifyContent: 'center' }}>
              <div style={{ flex: '1 1 220px', minWidth: 200, textAlign: 'center' }}>
                <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 8 }}>Payments as low as</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(56px,11vw,84px)', color: '#F5A623', lineHeight: .9 }}>
                  $74<span style={{ fontSize: '.32em', color: '#c3a05a', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>/mo</span>
                </div>
                <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase' as const, color: '#F5A623', marginTop: 8 }}>Flexible Payment Plans</div>
              </div>
              <div style={{ flex: '1 1 300px', minWidth: 260 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'Every job is priced for your crawlspace — your exact monthly payment depends on your home and the scope of work.',
                    '60-second approval. No impact to your credit score to check your options.',
                    'Multiple financing partners — almost every homeowner qualifies for something.',
                  ].map((t) => (
                    <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontSize: 15, lineHeight: 1.5, color: '#e7edf6' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <FinancingOptions style={{ marginTop: 30 }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '62ch', margin: '0 auto 44px' }}>
            <Eyebrow dark>Our Process</Eyebrow>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#0D0D0D' }}>
              From First Call to Dry Crawlspace in 5 Days or Less
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {[
              { n: '01', title: 'Call or Click', body: 'We answer within 2 hours. Schedule your free inspection in under 2 minutes.' },
              { n: '02', title: 'Free Inspection', body: 'Same-week or next-day. We go under the house, document everything, and show you photos.' },
              { n: '03', title: 'Your Quote', body: 'Three honest options. No pressure, no upsells. A 50% deposit schedules your install.' },
              { n: '04', title: 'Installation', body: 'A 1–2 day install. The crew leaves your crawlspace clean, sealed, and dry.' },
            ].map((s) => (
              <div key={s.n} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: 26, boxShadow: '0 1px 3px rgba(0,0,0,.05)' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 46, color: '#F5A623', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
                <h3 style={{ font: "800 17px 'Inter',sans-serif", color: '#0D0D0D', margin: '0 0 8px', textTransform: 'uppercase' as const, letterSpacing: '.02em' }}>{s.title}</h3>
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
            <Eyebrow>What KC Homeowners Say</Eyebrow>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, color: '#F5A623', marginBottom: 8 }}>
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} />)}
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>
              Rated 4.9 on Google
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18, marginBottom: 36 }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: 26, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 2, color: '#F5A623', marginBottom: 14 }}>
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} />)}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: '#e5e7eb', margin: '0 0 18px', flex: 1 }}>{r.text}</p>
                <div style={{ font: "700 14px 'Inter',sans-serif", color: '#fff' }}>
                  {r.name}<span style={{ color: '#9CA3AF', fontWeight: 500 }}> — {r.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 18px' }}>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 30, color: '#fff', lineHeight: 1 }}>4.9</span>
              <div>
                <div style={{ display: 'flex', gap: 1, color: '#F5A623' }}>{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={13} />)}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF' }}>Based on Google Reviews</div>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/KC+Crawl+Space+Specialists" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "700 15px 'Inter',sans-serif", textDecoration: 'none' }}>
              See All Reviews on Google <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="area" style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#fff' }}>
              Serving the Kansas City Region
            </h2>
            <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#c3d0e6', margin: '0 auto', maxWidth: '50ch' }}>
              If you&apos;re within about an hour of Kansas City, we&apos;ve got you covered — both sides of the state line.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {[
              { label: 'Missouri Side', cities: ['Kansas City', 'Blue Springs', 'Independence', 'Belton', "Lee's Summit", 'Raymore', 'Raytown', 'Liberty', 'Grandview', 'Parkville'] },
              { label: 'Kansas Side', cities: ['Overland Park', 'Prairie Village', 'Olathe', 'Mission', 'Lenexa', 'Merriam', 'Shawnee', 'Gardner', 'Leawood', 'Bonner Springs'] },
            ].map((side) => (
              <div key={side.label} style={{ background: 'rgba(0,0,0,.25)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 26 }}>
                <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
                  {side.label}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 14px', fontSize: 15, color: '#dbe4f3' }}>
                  {side.cities.map((c) => <span key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final" style={{ background: '#F5A623', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,6.5vw,56px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#0D0D0D' }}>
            Your Crawlspace Is Costing You Money Right Now.
          </h2>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#3a2c08', margin: '0 auto 30px', maxWidth: '56ch' }}>
            Every month without encapsulation is another month of mold growth, moisture damage, and wasted energy. The inspection is free. The estimate is free. The decision takes 5 minutes.
          </p>
          <Link href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#0D0D0D', color: '#fff', font: "800 17px 'Inter',sans-serif", textDecoration: 'none', padding: '18px 32px', borderRadius: 11, minHeight: 58, boxShadow: '0 16px 40px -12px rgba(0,0,0,.5)' }}>
            Book Your Free Inspection — Available This Week
          </Link>
          <div style={{ marginTop: 22 }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0D0D0D', font: "800 19px 'Inter',sans-serif", textDecoration: 'none' }}>
              <PhoneIcon />{PHONE}
            </a>
          </div>
          <p style={{ fontSize: 13.5, color: '#3a2c08', margin: '10px 0 0' }}>No obligation. No sales pressure. Just an honest look at what&apos;s under your home.</p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,92px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,4vw,48px)' }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,46px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 10px', color: '#fff' }}>
              Book Your Free Inspection
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#9CA3AF', margin: '0 0 28px' }}>
              Takes 2 minutes. We&apos;ll confirm within 2 hours. Same-week appointments available.
            </p>
            <InspectionForm />
          </div>
          <div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#F5A623', textDecoration: 'none', font: "800 22px 'Inter',sans-serif", marginBottom: 6 }}>
                <PhoneIcon size={22} />{PHONE}
              </a>
              <div style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 16, paddingLeft: 33 }}>Mon–Sat 7am–7pm · Emergency line available</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15, marginBottom: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
                info@kccrawlspacespecialists.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Serving the KC region — within 1 hour of Kansas City
              </div>
            </div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <div style={{ font: "800 15px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase' as const, color: '#fff', marginBottom: 18 }}>What Happens Next</div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['We call to confirm within 2 hours', 'Inspector arrives on your chosen day', 'We go under the house — full documentation', 'You get three honest options — no pressure', 'You decide. We schedule. Done.'].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                    <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'rgba(245,166,35,.15)', color: '#F5A623', font: "800 13px 'Inter',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: '#c3d0e6' }}>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ border: '1.5px solid rgba(245,166,35,.4)', borderRadius: 16, padding: '22px 24px', background: 'rgba(245,166,35,.06)' }}>
              <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 8 }}>2-Hour Response Guarantee</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>
                Every inquiry gets a response within 2 hours during business hours. If we miss that window, your first inspection is on us. (It&apos;s always free — but we like the commitment.)
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
