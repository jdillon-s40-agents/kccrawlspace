import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: "Your Air Purifier Isn't the Problem | KC Crawl Space Specialists" },
  description:
    "KC homeowners spend thousands on air purifiers and allergy meds — most have a crawlspace moisture problem. Free inspection this week.",
};

function Stat({ number, label, danger }: { number: string; label: string; danger?: boolean }) {
  return (
    <div style={{ textAlign: 'center', padding: '28px 20px', background: danger ? 'rgba(220,38,38,.08)' : 'rgba(255,255,255,.04)', border: `1.5px solid ${danger ? 'rgba(220,38,38,.4)' : 'rgba(255,255,255,.1)'}`, borderRadius: 14 }}>
      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(52px,10vw,72px)', lineHeight: 1, color: danger ? '#ef4444' : '#F5A623' }}>{number}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: danger ? '#fca5a5' : '#9CA3AF', marginTop: 8, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

function XCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ background: 'rgba(220,38,38,.06)', border: '1.5px solid rgba(220,38,38,.25)', borderRadius: 14, padding: 'clamp(20px,3vw,28px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(220,38,38,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </div>
        <div style={{ font: "800 17px 'Inter',sans-serif", color: '#fff' }}>{title}</div>
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF' }}>{body}</div>
    </div>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function AirQualityLandingPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ background: 'radial-gradient(110% 80% at 50% 0%, rgba(220,38,38,.14) 0%, rgba(220,38,38,0) 55%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px) clamp(36px,6vw,64px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(220,38,38,.12)', border: '1px solid rgba(220,38,38,.35)', borderRadius: 30, padding: '7px 16px', marginBottom: 24 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            <span style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase', color: '#ef4444' }}>Kansas City Homeowners</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,8vw,72px)', lineHeight: 1.0, textTransform: 'uppercase', color: '#fff', margin: '0 0 22px' }}>
            You're Treating the Symptoms.<br />
            <span style={{ color: '#ef4444' }}>Not the Source.</span>
          </h1>
          <p style={{ fontSize: 'clamp(17px,2.4vw,20px)', lineHeight: 1.65, color: '#c3d0e6', margin: '0 auto 32px', maxWidth: '60ch' }}>
            Every year KC homeowners spend thousands on air purifiers, HVAC upgrades, and allergy medication. Most of them have a crawlspace problem — and they don't know it.
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
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#111827', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', font: "700 13px 'Inter',sans-serif", letterSpacing: '.12em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 28 }}>The numbers under your home</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
            <Stat number="60%" label="Relative humidity where mold begins to grow" danger />
            <Stat number="75–90%" label="Typical humidity in an unencapsulated KC crawlspace" danger />
            <Stat number="50–70%" label="Of first-floor air that originates in your crawlspace" />
            <Stat number="24/7" label="How often the stack effect pulls that air into your home" />
          </div>
          <p style={{ textAlign: 'center', fontSize: 15, color: '#6b7280', marginTop: 20, lineHeight: 1.6 }}>
            Kansas City's clay soil and summer humidity create moisture levels under homes that would fail any air quality test.
          </p>
        </div>
      </section>

      {/* WHAT DOESN'T WORK */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,6vw,50px)', textTransform: 'uppercase', color: '#fff', margin: '0 0 14px' }}>
              Three Things That <span style={{ color: '#ef4444' }}>Won't Fix It</span>
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', maxWidth: '52ch', margin: '0 auto' }}>
              These aren't bad products. They're just aimed at the wrong problem.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginBottom: 32 }}>
            <XCard
              title="Air Purifiers"
              body="Filters particles after they've already entered your living space. Can't reach the moisture source two floors below."
            />
            <XCard
              title="HVAC Upgrades"
              body="Conditions air after it's been contaminated by crawlspace mold spores. No HVAC filter stops what comes up through your subfloor."
            />
            <XCard
              title="Allergy Medication"
              body="Treats your body's reaction to the problem. Does nothing about the mold spores you're breathing before they reach your lungs."
            />
          </div>
          <div style={{ background: 'rgba(245,166,35,.08)', border: '1px solid rgba(245,166,35,.25)', borderRadius: 12, padding: '18px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: '#e5e7eb', margin: 0, lineHeight: 1.6 }}>
              None of these address moisture at the source — which is <strong style={{ color: '#F5A623' }}>the only fix that actually works.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* STACK EFFECT */}
      <section style={{ background: '#0a1628', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(32px,6vw,60px)', alignItems: 'center' }}>
            <div>
              <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 14 }}>The Stack Effect</div>
              <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,46px)', textTransform: 'uppercase', color: '#fff', margin: '0 0 18px', lineHeight: 1.05 }}>
                Your Home Breathes From the Bottom Up
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Warm air rises through your home and exits at the top.',
                  'That rising air creates negative pressure that pulls crawlspace air up through your subfloor.',
                  'Mold spores, humidity, and odors from below become the air you breathe on your first floor.',
                  'This happens continuously — winter and summer — regardless of how good your HVAC system is.',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(245,166,35,.15)', color: '#F5A623', font: "800 13px 'Inter',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 1 }}>{i + 1}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual diagram */}
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 28, textAlign: 'center' }}>
              {[
                { label: 'Your Living Space', bg: 'rgba(37,99,235,.15)', border: 'rgba(37,99,235,.35)', arrow: true },
                { label: 'Subfloor', bg: 'rgba(255,255,255,.04)', border: 'rgba(255,255,255,.15)', arrow: true },
                { label: 'Crawlspace — 75–90% Humidity', bg: 'rgba(220,38,38,.12)', border: 'rgba(220,38,38,.35)', arrow: false },
              ].map((row, i) => (
                <div key={i}>
                  <div style={{ background: row.bg, border: `1.5px solid ${row.border}`, borderRadius: 10, padding: '14px 18px', fontSize: 14, fontWeight: 700, color: i === 2 ? '#fca5a5' : '#e5e7eb' }}>
                    {row.label}
                  </div>
                  {row.arrow && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '8px 0', color: '#ef4444', fontSize: 12, fontWeight: 700, letterSpacing: '.06em' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                      MOLD SPORES RISING
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                    </div>
                  )}
                </div>
              ))}
              <p style={{ fontSize: 13, color: '#6b7280', marginTop: 18, lineHeight: 1.5 }}>
                The stack effect runs 24 hours a day, 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE ONE FIX */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 16 }}>There Is One Fix</div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,7vw,60px)', textTransform: 'uppercase', color: '#fff', margin: '0 0 16px', lineHeight: 1.0 }}>
            Crawlspace Encapsulation — <span style={{ color: '#F5A623' }}>Done Right</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.65, color: '#c3d0e6', maxWidth: '58ch', margin: '0 auto 36px' }}>
            A properly encapsulated crawlspace seals moisture at the source — before it enters your home's air supply. No filter needed when there's nothing to filter.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, textAlign: 'left', marginBottom: 36 }}>
            {[
              ['Humidity drops below 50%', 'Below the threshold where mold can survive'],
              ['Mold spores stop reproducing', 'Existing mold dies without moisture to feed on'],
              ['Stack effect pulls clean air', 'Your crawlspace becomes an asset, not a liability'],
              ['Energy bills drop', 'Conditioned air stays conditioned — HVAC works less'],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: 20 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                  <Check />
                  <div style={{ font: "700 15px 'Inter',sans-serif", color: '#fff' }}>{title}</div>
                </div>
                <div style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.5, paddingLeft: 28 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
            {['Lifetime Warranty', 'Licensed & Insured', 'KC\'s Only Crawlspace Specialist', 'Same-Week Inspection'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#e5e7eb', fontSize: 14, fontWeight: 700 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JASON QUOTE */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(44px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <svg width="36" height="28" viewBox="0 0 36 28" fill="rgba(245,166,35,.4)" style={{ marginBottom: 20 }}>
            <path d="M0 28V17.5C0 7.833 5.167 2.167 15.5 0L17 3C12.333 4.333 9.667 7 9 11H15V28H0ZM21 28V17.5C21 7.833 26.167 2.167 36.5 0L38 3C33.333 4.333 30.667 7 30 11H36V28H21Z" />
          </svg>
          <blockquote style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,3.5vw,28px)', color: '#fff', lineHeight: 1.35, margin: '0 0 24px', fontStyle: 'normal' }}>
            We are the only company in Kansas City that does crawlspace work exclusively. That's not a marketing line — it's why we're better at it than anyone else in the metro.
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

      {/* FORM */}
      <section id="inspection" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ font: "700 12px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 14 }}>Free This Week</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,52px)', textTransform: 'uppercase', color: '#fff', margin: '0 0 14px' }}>
              Book Your Free Crawlspace Inspection
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', maxWidth: '50ch', margin: '0 auto' }}>
              We go under your home, document everything we find, and give you honest options. No sales pressure. You decide.
            </p>
          </div>
          <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 18, padding: 'clamp(24px,4vw,40px)', marginBottom: 24 }}>
            <InspectionForm />
          </div>
          <FinancingOptions />
          <p style={{ textAlign: 'center', fontSize: 14, color: '#4b5563', marginTop: 20 }}>
            Or call us directly: <a href={PHONE_HREF} style={{ color: '#F5A623', textDecoration: 'none', fontWeight: 700 }}>{PHONE}</a> · <a href="https://crawlspacekc.com" style={{ color: '#6b7280', textDecoration: 'none' }}>CrawlspaceKC.com</a>
          </p>
        </div>
      </section>

    </div>
  );
}
