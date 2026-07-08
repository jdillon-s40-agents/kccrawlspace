import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Vent Sealing Kansas City | Step-By-Step' },
  description:
    'How to seal crawl space vents yourself — materials, steps, and the one mistake that makes things worse: sealing vents before addressing moisture.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-vent-sealing-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'Should I seal my crawl space vents myself?',
    a: 'Vent sealing is one of the easier DIY steps — foam block-off plates or rigid foam board cut to fit are straightforward to install. The bigger question isn\'t how, it\'s when: sealing vents before addressing existing moisture or adding a dehumidifier can trap humidity that was previously venting out.',
  },
  {
    q: 'What order should I do this in?',
    a: 'Fix any active moisture source first (leaks, standing water), then install the vapor barrier, then seal the vents, then add a dehumidifier if humidity stays elevated. Sealing vents as the first step, before the barrier and dehumidification are in place, is the most common DIY mistake.',
  },
  {
    q: 'What materials work best for sealing vents?',
    a: 'Foam insulation blocks that press-fit into the vent opening work well for standard sizes. Rigid XPS or EPS foam board cut to fit handles irregular openings. Spray foam sealant fills any remaining gaps around the edges for a fully airtight seal.',
  },
  {
    q: 'Is it ever a bad idea to seal all the vents?',
    a: 'Yes — if you seal every vent without any humidity control (no dehumidifier, no barrier), you can trap moisture that has nowhere to go, which can be worse than leaving vents open. Sealed vents are meant to be paired with a controlled, dehumidified crawlspace, not a standalone fix.',
  },
];

const otherGuides = [
  { title: 'DIY Vapor Barrier Cost', href: '/diy-crawl-space-vapor-barrier-kansas-city/' },
  { title: 'DIY vs. Professional Encapsulation', href: '/diy-vs-professional-crawl-space-encapsulation/' },
  { title: 'Tools & Materials You Need', href: '/diy-crawl-space-encapsulation-tools-and-materials/' },
  { title: 'DIY Mold Treatment', href: '/diy-crawl-space-mold-treatment-kansas-city/' },
  { title: 'DIY Dehumidifier Installation', href: '/diy-crawl-space-dehumidifier-installation-kansas-city/' },
];

export default function DiyVentSealingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com' },
                  { '@type': 'ListItem', position: 2, name: 'DIY Crawl Space Vent Sealing', item: 'https://www.crawlspacekc.com/diy-crawl-space-vent-sealing-kansas-city/' },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                url: 'https://www.crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            DIY Vent Sealing
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            DIY Crawl Space Vent Sealing <span style={{ color: '#F5A623' }}>— Done In The Right Order</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            Sealing vents yourself is simple. Sealing them at the wrong time can make your crawlspace worse.
            Here&apos;s how to do it right.
          </p>
        </div>
      </section>

      {/* Warning callout */}
      <section style={{ background: '#111827', padding: 'clamp(32px,6vw,48px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', background: 'rgba(220,38,38,.1)', border: '1px solid rgba(220,38,38,.4)', borderRadius: 14, padding: '22px 26px' }}>
          <p style={{ fontSize: 15, color: '#fca5a5', lineHeight: 1.6, margin: 0 }}>
            <strong>Do this in order:</strong> fix active moisture first → install the vapor barrier → seal the vents → add a
            dehumidifier if needed. Sealing vents before the barrier and dehumidification are in place can trap humidity
            that used to vent out, making conditions worse, not better.
          </p>
        </div>
      </section>

      {/* Materials + steps */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 14px' }}>Materials</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.6 }}>
              <li>• Foam block-off plates (standard vent sizes)</li>
              <li>• Rigid XPS or EPS foam board (irregular openings)</li>
              <li>• Spray foam sealant for gaps</li>
              <li>• Silicone caulk for edges</li>
            </ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 14px' }}>Steps</h2>
            <ol style={{ padding: '0 0 0 20px', margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.6 }}>
              <li>Clean debris from around each vent opening</li>
              <li>Measure each opening — sizes often vary vent to vent</li>
              <li>Cut foam block or board for a snug, friction-fit</li>
              <li>Seal all four edges with caulk or spray foam</li>
              <li>Photograph each sealed vent for your records</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Get The Full Sequence For Your Space
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            Vent sealing is one piece — a full game plan tells you exactly what order to do everything in for your
            specific crawlspace.
          </p>
          <Link
            href="/diy-crawl-space-kansas-city/#assessment-form"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '15px 26px', borderRadius: 10, minHeight: 52 }}
          >
            Get My DIY Game Plan ↓
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 28px', textAlign: 'center' as const }}>
            Vent Sealing FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {faqItems.map((item) => (
              <div key={item.q} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 19, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 10px' }}>{item.q}</h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More guides */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,4.5vw,36px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', textAlign: 'center' as const }}>
            More DIY Crawl Space Guides
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
            {otherGuides.map((g) => (
              <Link key={g.href} href={g.href} style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '16px 18px', color: '#e5e7eb', textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                {g.title} →
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center' as const, marginTop: 20, fontSize: 14, color: '#9CA3AF' }}>
            Questions? Text Jason: <a href={PHONE_HREF} style={{ color: '#F5A623', fontWeight: 700, textDecoration: 'none' }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
