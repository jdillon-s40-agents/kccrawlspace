import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawlspace Encapsulation Kansas City | KC Crawl Space Specialists' },
  description: "Kansas City crawlspace encapsulation: 20-mil vapor barrier, vent sealing, mold treatment & commercial dehumidifier. Lifetime transferable warranty. Free inspection.",
};

function Check({ color = '#16A34A', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function EncapsulationPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 18 }}>
            <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />Site-Built Homes
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(38px,7.5vw,68px)', lineHeight: 1, letterSpacing: '.005em', textTransform: 'uppercase' as const, margin: '0 0 18px', color: '#fff' }}>
            Crawlspace Encapsulation <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '60ch', margin: '0 auto 30px' }}>
            A permanently sealed, dry crawlspace — healthier air, warmer floors, lower bills, and a lifetime transferable warranty no foundation company will match. We do this every single day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>
              Book Your Free Inspection
            </Link>
            <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 54, border: '1.5px solid rgba(255,255,255,.35)' }}>
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,5vw,52px)', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>The Basics</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5.5vw,46px)', lineHeight: 1.04, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#0D0D0D' }}>
              What Is Crawlspace Encapsulation?
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4b5563', margin: '0 0 14px' }}>
              Encapsulation seals your crawlspace from the ground up. We line the floor and walls with a heavy 20-mil vapor barrier, close and insulate the vents, treat any mold, and add a commercial dehumidifier that keeps humidity locked below 60% — for good.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4b5563', margin: 0 }}>
              The result is a clean, dry, conditioned space instead of a damp dirt cellar feeding moisture into your home. It&apos;s the difference between a band-aid and a cure.
            </p>
          </div>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(245,166,35,.25)', borderRadius: 18, padding: 30 }}>
            <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 18 }}>Vapor Barrier vs. Full Encapsulation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                <div>
                  <div style={{ font: "700 15px 'Inter',sans-serif", color: '#fff' }}>Plastic on the floor</div>
                  <div style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.5 }}>A loose vapor barrier alone — vents stay open, walls exposed, humidity untouched.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <Check size={20} />
                <div>
                  <div style={{ font: "700 15px 'Inter',sans-serif", color: '#fff' }}>Full encapsulation</div>
                  <div style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.5 }}>Floor, walls, vents, and rim joists sealed — plus active dehumidification. A complete system.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KC */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '60ch', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Local Conditions</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>
              Why Kansas City Homes Need It
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
            {[
              { val: '40"', label: 'Annual Rainfall', body: "All that water hits our clay soil and has nowhere to go but under your home." },
              { val: '90%', label: 'Summer Humidity', body: "Hot, humid air pours through open vents, hits cool ground, and condenses into moisture." },
              { val: 'Clay', label: 'Soil', body: "KC's dense clay traps water against your foundation instead of draining it away." },
              { val: '40%', label: 'Of Your Air', body: "The stack effect pulls crawlspace air up — nearly half your first-floor air starts down there." },
            ].map((s) => (
              <div key={s.val} style={{ background: 'rgba(0,0,0,.25)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 24 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 40, color: '#F5A623', lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
                <div style={{ font: "700 16px 'Inter',sans-serif", color: '#fff', marginBottom: 6 }}>{s.label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#c3d0e6', margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>The Full System</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Every Step We Take</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {[
              { title: 'Inspection & moisture reading', body: 'We document everything with photos before we touch a thing.' },
              { title: 'Debris removal & mold treatment', body: 'Joists and framing treated to kill existing growth.' },
              { title: '20-mil reinforced vapor barrier', body: 'Floor and walls fully lined and seam-taped.' },
              { title: 'Vent sealing & termination bar', body: 'Every vent blocked; barrier locked to the wall.' },
              { title: 'Commercial dehumidifier', body: 'Sized to your space; keeps humidity below 60%.' },
              { title: 'Written report & lifetime warranty', body: 'Documentation for your records and any future sale.' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: 13, background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: '18px 20px' }}>
                <Check size={20} />
                <div>
                  <div style={{ font: "700 15.5px 'Inter',sans-serif", color: '#fff', marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.5 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '56ch', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Honest Pricing</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 12px', color: '#0D0D0D' }}>Three Honest Options</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4b5563', margin: 0 }}>No pressure, no upsells. Pick the level of protection that fits your home and budget.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18, alignItems: 'stretch' }}>
            {/* Essential */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 8 }}>Essential</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$2,800–$3,500</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 18 }}>Basic moisture control</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#e5e7eb' }}>
                {['20-mil vapor barrier', 'Vent sealing & seam taping', 'Written moisture report', 'Lifetime warranty'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9 }}><Check />{i}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1.5px solid rgba(255,255,255,.3)', color: '#fff', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 48 }}>
                Get This Quote
              </Link>
            </div>
            {/* Complete */}
            <div style={{ background: '#0D0D0D', border: '2px solid #F5A623', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 50px -20px rgba(245,166,35,.4)' }}>
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#F5A623', color: '#0D0D0D', font: "800 11px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Popular</div>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 8 }}>Complete</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$4,500–$5,500</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 18 }}>Right for most KC homes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#e5e7eb' }}>
                {['Everything in Essential', 'Mold treatment of framing', 'Termination bar finish', 'From $250/mo financing'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9 }}><Check />{i}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 48 }}>
                Get This Quote
              </Link>
            </div>
            {/* Premium */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 8 }}>Premium</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$6,500–$9,000</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 18 }}>Maximum protection</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#e5e7eb' }}>
                {['Everything in Complete', 'Commercial dehumidifier', 'Drainage matting', 'From $361/mo financing'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9 }}><Check />{i}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1.5px solid rgba(255,255,255,.3)', color: '#fff', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 48 }}>
                Get This Quote
              </Link>
            </div>
          </div>
          <p style={{ textAlign: 'center', margin: '26px 0 0' }}>
            <Link href="/pricing" style={{ color: '#1B3A6B', font: "700 15px 'Inter',sans-serif", textDecoration: 'none', borderBottom: '2px solid #F5A623', paddingBottom: 2 }}>
              See the full pricing breakdown &amp; financing calculator →
            </Link>
          </p>
        </div>
      </section>

      {/* FINANCING BANNER */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(28px,5vw,44px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 36px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>The Difference</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Before &amp; After</h2>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', boxShadow: '0 36px 70px -24px rgba(0,0,0,.8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,.12)' }}>
              <div style={{ position: 'relative', background: '#1a140c', aspectRatio: '3/2' }}>
                <Image src="/before.jpg" alt="Crawlspace before encapsulation — damp and moldy" fill style={{ objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 10, left: 10, background: '#DC2626', color: '#fff', font: "700 11px 'Inter',sans-serif", letterSpacing: '.1em', padding: '4px 9px', borderRadius: 5 }}>BEFORE</span>
              </div>
              <div style={{ position: 'relative', background: '#0e1c2e', aspectRatio: '3/2' }}>
                <Image src="/after.jpg" alt="Crawlspace after encapsulation — sealed and dry" fill style={{ objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 10, right: 10, background: '#16A34A', color: '#fff', font: "700 11px 'Inter',sans-serif", letterSpacing: '.1em', padding: '4px 9px', borderRadius: 5 }}>AFTER</span>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#6b7280', margin: '12px 0 0' }}>A damp, moldy dirt crawlspace transformed into a bright, sealed, dry space.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 38px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Questions</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Encapsulation FAQ</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { q: 'How long does encapsulation take?', a: 'Most KC homes are done in 1–2 days. Larger spaces or jobs needing mold remediation may take up to 3 days.' },
              { q: 'Do I need to leave my home?', a: "No. Our crew works under the house — you can go about your normal day. We'll let you know when we need access to entry points." },
              { q: 'How long does it last?', a: "A properly installed system lasts 20–30 years. The vapor barrier carries a 25-year manufacturer warranty, and our labor is backed by the lifetime Dry Crawlspace Promise." },
              { q: "Does homeowner's insurance cover it?", a: "Usually no — it's preventive. But if moisture has already caused structural damage, some policies may cover remediation. We document everything for your insurer." },
              { q: 'Vapor barrier vs. full encapsulation?', a: 'A vapor barrier is just plastic on the floor. Full encapsulation seals the floor, walls, vents, and rim joists and adds active dehumidification. Band-aid vs. cure.' },
              { q: 'Will this lower my energy bills?', a: 'Yes — sealed crawlspaces improve efficiency 15–20% in most KC homes by eliminating the biggest source of uncontrolled air and moisture.' },
            ].map((f) => (
              <div key={f.q} style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '22px 24px' }}>
                <div style={{ font: "800 17px 'Inter',sans-serif", color: '#fff', marginBottom: 8 }}>{f.q}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#0D0D0D' }}>Ready for a Dry Crawlspace?</h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#3a2c08', margin: '0 0 28px' }}>
            Your free inspection takes 30 minutes and ends with an exact quote — not a guess. Same-week appointments available.
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
