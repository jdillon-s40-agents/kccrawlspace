import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Encapsulation: Tools & Materials List' },
  description:
    'Everything you need for DIY crawl space encapsulation — vapor barrier, tape, fasteners, safety gear, and the tools to install them. Full checklist.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-encapsulation-tools-and-materials/',
  },
};

const faqItems = [
  {
    q: 'Do I need special tools I don\'t already own?',
    a: 'Most homeowners already have a utility knife, tape measure, and a drill. The one tool worth renting rather than buying is a powder-actuated fastening gun for driving anchors into masonry — most home improvement stores rent these by the day.',
  },
  {
    q: 'What thickness vapor barrier should I buy?',
    a: '10-mil is a reasonable floor-only minimum. 20-mil reinforced poly is more durable and better suited to Kansas City\'s clay soil and moisture levels, especially anywhere with piers, debris, or foot traffic.',
  },
  {
    q: 'Do I need a respirator for this project?',
    a: 'Yes — a proper N95 or better respirator is essential, not optional. Crawlspaces can have dust, insulation fibers, and in some cases mold spores. A moisture-resistant flashlight and gloves round out the minimum safety gear.',
  },
  {
    q: 'How do I know exactly how much material to buy for my crawlspace?',
    a: 'That depends on your exact square footage, wall height, and how many piers and penetrations you need to work around — which is what a proper evaluation calculates. Buying based on rough guesses usually means a mid-project supply run or a pile of leftover barrier.',
  },
];

const otherGuides = [
  { title: 'DIY Encapsulation Cost Breakdown', href: '/diy-crawl-space-encapsulation-cost/' },
  { title: 'DIY Vapor Barrier Cost', href: '/diy-crawl-space-vapor-barrier-kansas-city/' },
  { title: 'DIY vs. Professional Encapsulation', href: '/diy-vs-professional-crawl-space-encapsulation/' },
  { title: 'DIY Mold Treatment', href: '/diy-crawl-space-mold-treatment-kansas-city/' },
  { title: 'DIY Vent Sealing', href: '/diy-crawl-space-vent-sealing-kansas-city/' },
  { title: 'DIY Dehumidifier Installation', href: '/diy-crawl-space-dehumidifier-installation-kansas-city/' },
];

function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function DiyToolsAndMaterialsPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'DIY Tools & Materials', item: 'https://www.crawlspacekc.com/diy-crawl-space-encapsulation-tools-and-materials/' },
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
            DIY Prep Checklist
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Tools &amp; Materials <span style={{ color: '#F5A623' }}>You Actually Need</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            The full checklist for a DIY crawl space encapsulation — nothing you don&apos;t need, nothing missing.
          </p>
        </div>
      </section>

      {/* Tools + Materials grid */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 16px' }}>Tools</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {[
                'Utility knife and extra blades',
                'Tape measure',
                'Drill (for fasteners into masonry)',
                'Powder-actuated fastening gun (rent, not buy)',
                'Portable work lights',
                'Short-handled shovel or box cutter for debris',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#374151' }}><Check />{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 16px' }}>Materials</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {[
                '10–20 mil vapor barrier (thicker for durability)',
                'Vapor barrier seam tape',
                'Double-sided construction tape (for wall attachment)',
                'Termination bar and masonry fasteners',
                'Spray foam or caulk for gaps and penetrations',
                'Foam block-off plates for vents',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#374151' }}><Check />{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28, gridColumn: '1 / -1' }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 16px' }}>Safety Gear (Not Optional)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
              {['N95 respirator or better', 'Work gloves', 'Eye protection', 'Tyvek coveralls', 'Moisture-resistant flashlight'].map((t) => (
                <div key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#374151' }}><Check />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Skip The Generic List
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            Get exact quantities and product links sized to your specific crawlspace — not a rough estimate.
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
            Tools &amp; Materials FAQ
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
