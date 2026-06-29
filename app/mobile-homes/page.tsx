import type { Metadata } from 'next';
import Link from 'next/link';
import AcornBanner from '@/components/AcornBanner';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mobile Home Underbelly Repair Kansas City | Belly Board & Insulation',
  description:
    'KC Crawl Space Specialists replaces torn belly board, blown insulation, and damaged vapor barriers in manufactured homes across the KC metro. Most jobs done in a single day.',
};

function Check({ color = '#16A34A', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function MobileHomesPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.2) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#2563EB', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 18 }}>
            <span style={{ width: 24, height: 2, background: '#2563EB', display: 'inline-block' }} />Manufactured &amp; Mobile Homes
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,62px)', lineHeight: 1.02, letterSpacing: '.005em', textTransform: 'uppercase' as const, margin: '0 0 18px', color: '#fff' }}>
            Mobile Home Underbelly Repair <span style={{ color: '#2563EB' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '60ch', margin: '0 auto 30px' }}>
            Torn belly board, cold floors, frozen pipes, critters nesting underneath? We replace underbelly insulation and vapor barriers for manufactured homes across the KC metro — most in a single day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>
              Book Your Free Inspection
            </Link>
            <a href="#park" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 54, border: '1.5px solid rgba(255,255,255,.35)' }}>
              Park Managers →
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>The Basics</div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5.5vw,46px)', lineHeight: 1.04, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#0D0D0D' }}>What Is Underbelly Repair?</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4b5563', margin: '0 0 14px' }}>
            The "underbelly" is the protective barrier — a belly board plus insulation — stretched beneath your manufactured home. It keeps the floor warm, protects your pipes and ductwork, and blocks moisture and pests from getting underneath.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#4b5563', margin: 0 }}>
            Over time it sags, tears, or gets ripped open by animals. When that happens, insulation falls out, pipes freeze, energy bills climb, and the damage spreads. We replace the whole system — belly board, insulation, and a fresh vapor barrier.
          </p>
        </div>
      </section>

      {/* SIGNS */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '54ch', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Warning Signs</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Signs You Need It</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
            {[
              { icon: '❄', title: 'Cold floors in winter', body: 'Missing insulation lets the cold come straight up through the floor.' },
              { icon: '💧', title: 'Frozen or burst pipes', body: 'Exposed plumbing under a torn belly freezes fast in a KC cold snap.' },
              { icon: '↓', title: 'Sagging or torn belly', body: 'Visible drooping or holes mean insulation is already falling out.' },
              { icon: '🐾', title: 'Animal or pest damage', body: 'Raccoons, opossums, and rodents tear belly board to nest inside.' },
              { icon: '📈', title: 'Rising energy bills', body: 'A failed underbelly is one of the biggest heat-loss culprits in a mobile home.' },
              { icon: '🤧', title: 'Damp or musty smell', body: 'Ground moisture with no vapor barrier means odor and mold underneath.' },
            ].map((s) => (
              <div key={s.title} style={{ background: 'rgba(0,0,0,.25)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(245,166,35,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, color: '#F5A623', fontSize: 20 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div style={{ font: "700 16px 'Inter',sans-serif", color: '#fff', marginBottom: 6 }}>{s.title}</div>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Our Process</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>What&apos;s Included</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {[
              { title: 'Full belly board replacement', body: 'Old torn material removed; new heavy-duty board installed.' },
              { title: 'Fiberglass insulation', body: 'Fresh, full-depth insulation for warm floors and lower bills.' },
              { title: 'Pipe & duct sealing', body: 'Plumbing and HVAC protected against freezing and leaks.' },
              { title: 'Ground vapor barrier', body: 'Blocks rising soil moisture from re-soaking the new insulation.' },
              { title: 'Pest damage repair', body: 'Entry points sealed so critters stay out for good.' },
              { title: 'Transferable warranty', body: 'Documented, transferable coverage that adds resale value.' },
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
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#0D0D0D' }}>Mobile Home Pricing</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18, alignItems: 'stretch' }}>
            {/* Patch */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 8 }}>Patch Repair</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$400–$800</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 18 }}>From $22/mo · spot fixes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#e5e7eb' }}>
                {['Belly board repair', 'Partial insulation', 'Pipe & duct sealing'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9 }}><Check />{i}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1.5px solid rgba(255,255,255,.3)', color: '#fff', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 48 }}>
                Get This Quote
              </Link>
            </div>
            {/* Full Replacement */}
            <div style={{ background: '#0D0D0D', border: '2px solid #F5A623', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 50px -20px rgba(245,166,35,.4)' }}>
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#F5A623', color: '#0D0D0D', font: "800 11px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Popular</div>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 8 }}>Full Replacement</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$1,500–$2,500</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 18 }}>From $83/mo · most homes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#e5e7eb' }}>
                {['Full belly replacement', 'Full new insulation', 'Pest repair included'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9 }}><Check />{i}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 48 }}>
                Get This Quote
              </Link>
            </div>
            {/* Full + Vapor Barrier */}
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ font: "600 12px 'Inter',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 8 }}>Full + Vapor Barrier</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 34, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$2,000–$3,500</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 18 }}>From $111/mo · best value</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#e5e7eb' }}>
                {['Everything in Full Replacement', 'Ground vapor barrier', 'Maximum moisture defense'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9 }}><Check />{i}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1.5px solid rgba(255,255,255,.3)', color: '#fff', font: "800 14px 'Inter',sans-serif", textDecoration: 'none', padding: 13, borderRadius: 9, minHeight: 48 }}>
                Get This Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARK MANAGERS */}
      <section id="park" style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ border: '1.5px solid rgba(245,166,35,.5)', borderRadius: 20, padding: 'clamp(26px,5vw,44px)', background: 'linear-gradient(180deg,rgba(245,166,35,.08),rgba(245,166,35,0))' }}>
            <div style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.14em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 12 }}>Attention Park Managers &amp; Property Owners</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', lineHeight: 1.05, textTransform: 'uppercase' as const, margin: '0 0 16px', color: '#fff' }}>Volume Pricing for Communities</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#c3d0e6', margin: '0 0 22px', maxWidth: '60ch' }}>Whether you manage 10 homes or 200, we&apos;ll arrange a park-wide inspection day and competitive bulk pricing. One call gets you:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
              {[
                'Free assessment of your entire park\'s needs',
                'Volume pricing — more homes, lower per-unit cost',
                'Priority scheduling around your residents',
                'Documentation package for each completed home',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, fontSize: 15, color: '#e5e7eb', lineHeight: 1.45 }}>
                  <Check size={18} />
                  {item}
                </div>
              ))}
            </div>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '15px 26px', borderRadius: 10, minHeight: 52 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Call Us About Park Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FINANCING BANNER */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(28px,5vw,44px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <AcornBanner />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 38px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Questions</div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: 0, color: '#fff' }}>Mobile Home FAQ</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { q: 'How do I know if my underbelly needs repair?', a: 'Common signs: cold floors in winter, visible sagging or tears, frozen pipes, pest evidence, or a jump in heating bills.' },
              { q: 'Can animals really damage it?', a: 'Yes — raccoons, opossums, and rodents tear through belly board to nest, which ruins insulation and can damage wiring and ductwork.' },
              { q: 'How long does replacement take?', a: 'Most full replacements are done in a single day. Partial repairs take 2–4 hours depending on the damage.' },
              { q: 'Does this work on older mobile homes?', a: 'Yes — we work on manufactured homes of all ages and configurations. Pre-1980 homes may need a little extra prep.' },
              { q: 'Do you service homes in parks?', a: 'Absolutely — across the entire KC metro. We offer volume pricing for park managers with multiple homes.' },
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
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.02, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#0D0D0D' }}>Warm Floors Start Here.</h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#3a2c08', margin: '0 0 28px' }}>
            Free inspection, honest quote, most jobs done in a day. Let&apos;s get your underbelly sealed before the next KC cold snap.
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
