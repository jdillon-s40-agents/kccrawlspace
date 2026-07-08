import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'About KC Crawl Space Specialists | Only Crawlspace Specialists' },
  description: 'Not a foundation company or generalist. The only KC company focused solely on crawlspace encapsulation and mobile home repair. 4.9★ rated in Kansas City.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/about/',
  }};

function Check({ color = '#16A34A', size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 18 }}>
            <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />About Us
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,62px)', lineHeight: 1.02, letterSpacing: '.005em', textTransform: 'uppercase' as const, margin: '0 0 22px', color: '#fff' }}>
            The Only Crawlspace Specialist in Kansas City.
          </h1>
          <p style={{ fontSize: 'clamp(17px,2.4vw,20px)', lineHeight: 1.5, color: '#cbd5e1', maxWidth: '48ch', margin: '0 auto', fontWeight: 500 }}>
            Not a foundation company. Not a basement waterproofer. Not a generalist who does a little of everything. We built this company to do <span style={{ color: '#F5A623' }}>one thing</span> — and to do it better than anyone in this market.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,5vw,52px)', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Our Story</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.04, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#0D0D0D' }}>
              Focus Changes Everything
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4b5563', margin: '0 0 13px' }}>
              We started KC Crawl Space Specialists after watching KC homeowners get overcharged by national chains for crawlspace work that generalist crews treated as an afterthought.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4b5563', margin: '0 0 13px' }}>
              Every competitor here is a foundation repair company that added encapsulation to their menu. For them it&apos;s an upsell. For us, it&apos;s everything. That focus changes the quality of the work — our crew does this every single day and knows every crawlspace configuration and KC soil condition cold.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#0D0D0D', margin: 0, fontWeight: 600 }}>
              We&apos;re not the biggest company in KC. We&apos;re the most focused. And in this business, focus is everything.
            </p>
          </div>
          <div style={{ order: 1 }}>
            <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', background: '#1B3A6B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.3)', font: "600 14px 'Inter',sans-serif", textAlign: 'center', padding: 24, boxShadow: '0 24px 50px -20px rgba(0,0,0,.3)' }}>
              Owner photo
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIST VS GENERALIST */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '50ch', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>The Difference</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Why Specialist Matters</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 28 }}>
              <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                The Generalist
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13, fontSize: 14.5, color: '#9CA3AF' }}>
                {['Foundation company first', 'Encapsulation as an upsell', 'Rotating crews, variable quality', '2–3 week booking window', 'Corporate pricing structure', 'Standard 1-year labor warranty', 'National chain, out-of-state HQ'].map((s) => (
                  <div key={s}>{s}</div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(180deg,rgba(245,166,35,.08),rgba(245,166,35,0))', border: '1.5px solid rgba(245,166,35,.5)', borderRadius: 16, padding: 28 }}>
              <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                The Specialist (Us)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13, fontSize: 14.5, color: '#fff', fontWeight: 500 }}>
                {['Crawlspace only', 'Every job is a crawlspace', 'Dedicated crew, consistent results', 'Same-week availability', 'Lean overhead, fair pricing', 'Lifetime Dry Home Guarantee', 'Kansas City owned & operated'].map((s) => (
                  <div key={s}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,5vw,52px)', alignItems: 'center' }}>
          <div>
            <div style={{ width: '100%', aspectRatio: '3/2', borderRadius: 16, overflow: 'hidden', background: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.25)', font: "600 14px 'Inter',sans-serif", textAlign: 'center', padding: 24, boxShadow: '0 24px 50px -20px rgba(0,0,0,.5)' }}>
              Crew photo
            </div>
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>The Team</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.04, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#fff' }}>
              Trained for KC, Nothing Else
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#c3d0e6', margin: '0 0 13px' }}>
              Our field team works exclusively on crawlspace and underbelly installations — nothing else. They&apos;re trained specifically for KC&apos;s clay soil, humidity patterns, and housing stock.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#fff', margin: 0, fontWeight: 600 }}>
              Every crew member earns bonuses tied to quality, not speed. No cutting corners to finish fast — your install is done right the first time, or we come back and fix it free.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 16 }}>Our Community</div>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(24px,4.5vw,38px)', lineHeight: 1.15, color: '#fff', margin: 0 }}>
            We live here. We work here. When we seal a crawlspace in Raytown or Grandview, we&apos;re protecting a <span style={{ color: '#F5A623' }}>KC family&apos;s home</span> — and we take that seriously.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 38px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Credentials</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#0D0D0D' }}>Licensed, Insured &amp; Verified</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {[
              'Licensed & Insured',
              'Google Verified Business',
              '4.9★ Five-Star Reviews',
              'General Liability + Workers Comp',
              'Financing Partner On-Site',
              'Missouri LLC — Registered & Active',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: 11, alignItems: 'center', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '18px 20px', fontSize: 15, color: '#1f2937', fontWeight: 600 }}>
                <Check />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#0D0D0D' }}>Let&apos;s Protect Your Home.</h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#3a2c08', margin: '0 0 28px' }}>
            The inspection is free. The estimate is free. And you&apos;ll be working with the only crew in KC that does nothing but this.
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
