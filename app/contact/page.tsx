import type { Metadata } from 'next';
import InspectionForm from '@/components/InspectionForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Your Free Crawlspace Inspection',
  description:
    'Schedule your free crawlspace inspection in Kansas City. Takes 2 minutes. We confirm within 2 hours. Same-week appointments available.',
};

export default function ContactPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>
      {/* HERO */}
      <section style={{ background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.16) 0%, rgba(37,99,235,0) 45%), #0D0D0D', padding: 'clamp(36px,6vw,64px) clamp(16px,5vw,24px) clamp(20px,4vw,32px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 16 }}>
            <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />Free Inspection
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,62px)', lineHeight: 1, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#fff' }}>
            Book Your Free Inspection
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,18px)', lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>
            Takes 2 minutes. We confirm within 2 hours. Same-week appointments available — no obligation, no pressure.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(20px,4vw,40px) clamp(16px,5vw,24px) clamp(52px,8vw,88px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,4vw,48px)' }}>
          <div>
            <InspectionForm />
          </div>
          <div>
            <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 'clamp(22px,4vw,30px)', marginBottom: 18 }}>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#F5A623', textDecoration: 'none', font: "800 22px 'Inter',sans-serif", marginBottom: 6 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE}
              </a>
              <div style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 16, paddingLeft: 33 }}>
                Mon–Sat 7am–7pm · Emergency line available
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15, marginBottom: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
                </svg>
                info@kccrawlspacespecialists.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#9CA3AF', fontSize: 15 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
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
              <div style={{ font: "800 14px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 8 }}>
                2-Hour Response Guarantee
              </div>
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
