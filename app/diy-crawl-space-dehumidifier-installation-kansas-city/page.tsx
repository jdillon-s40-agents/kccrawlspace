import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Dehumidifier Installation Kansas City' },
  description:
    'How to install a crawl space dehumidifier yourself — placement, drainage, electrical, and sizing. Plus why it won\'t work without encapsulation first.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-dehumidifier-installation-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'Can I install a crawl space dehumidifier myself?',
    a: 'Yes — placement and setup are straightforward for most homeowners. Set it on a sturdy, level platform at least 6 inches off the ground, near the center of the space, with clearance on all sides for airflow. The drain hose and electrical connection are the two parts worth double-checking.',
  },
  {
    q: 'Do I need an electrician for this?',
    a: 'The dehumidifier should be on a GFCI-protected outlet or a dedicated circuit. If you already have a suitable outlet in the crawlspace, you likely don\'t need an electrician. If you need new wiring run, that\'s worth hiring out.',
  },
  {
    q: 'Will a dehumidifier work without a vapor barrier?',
    a: 'Not well. Without encapsulation, there\'s too much moisture infiltration from open vents and exposed ground for a dehumidifier to keep up — it\'ll run constantly and still leave humidity high. Vapor barrier and sealed vents come first; the dehumidifier is what maintains the result.',
  },
  {
    q: 'What size dehumidifier do I need?',
    a: 'It depends on your square footage and how much moisture load you\'re dealing with. Too small and it can\'t keep up; too large and you\'re paying more upfront and in energy costs than you need to. Sizing it correctly for your specific space is one of the things a proper evaluation solves.',
  },
];

const otherGuides = [
  { title: 'DIY Encapsulation Cost Breakdown', href: '/diy-crawl-space-encapsulation-cost/' },
  { title: 'DIY Vapor Barrier Cost', href: '/diy-crawl-space-vapor-barrier-kansas-city/' },
  { title: 'DIY vs. Professional Encapsulation', href: '/diy-vs-professional-crawl-space-encapsulation/' },
  { title: 'Tools & Materials You Need', href: '/diy-crawl-space-encapsulation-tools-and-materials/' },
  { title: 'DIY Mold Treatment', href: '/diy-crawl-space-mold-treatment-kansas-city/' },
  { title: 'DIY Vent Sealing', href: '/diy-crawl-space-vent-sealing-kansas-city/' },
];

export default function DiyDehumidifierPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'DIY Dehumidifier Installation', item: 'https://www.crawlspacekc.com/diy-crawl-space-dehumidifier-installation-kansas-city/' },
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
            DIY Dehumidifier Install
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            DIY Crawl Space Dehumidifier <span style={{ color: '#F5A623' }}>Installation</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            Placement, drainage, and electrical — what installing your own crawlspace dehumidifier actually involves,
            and why it needs a sealed crawlspace to work.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 24px', textAlign: 'center' as const }}>
            Installation Basics
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
            {[
              { t: 'Placement', b: 'Near the center of the crawlspace, on a sturdy, level platform at least 6 inches off the ground. Leave clearance on all sides for airflow — never set it directly on dirt.' },
              { t: 'Drainage', b: 'Most units use a gravity drain. Drill through the rim joist, angle the hose slightly downward, and run it to the exterior. Check for wires or plumbing before drilling.' },
              { t: 'Electrical', b: 'Plug into a GFCI-protected outlet, or a dedicated circuit if the load requires it. If you need new wiring run to the crawlspace, that part is worth hiring an electrician for.' },
              { t: 'Sizing', b: 'Match the unit to your actual square footage and moisture load. Undersized units run constantly and still can\'t keep up; oversized units cost more upfront and in energy use.' },
            ].map((item) => (
              <div key={item.t} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ font: "700 15.5px 'Inter',sans-serif", color: '#0D0D0D', marginBottom: 4 }}>{item.t}</div>
                <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6 }}>{item.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning callout */}
      <section style={{ background: '#111827', padding: 'clamp(32px,6vw,48px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', background: 'rgba(220,38,38,.1)', border: '1px solid rgba(220,38,38,.4)', borderRadius: 14, padding: '22px 26px' }}>
          <p style={{ fontSize: 15, color: '#fca5a5', lineHeight: 1.6, margin: 0 }}>
            <strong>A dehumidifier alone won&apos;t fix an unsealed crawlspace.</strong> Without a vapor barrier and sealed
            vents, moisture infiltration is too high for a dehumidifier to keep up — it&apos;ll run nonstop and humidity
            will still stay elevated. Encapsulate first, then add dehumidification to maintain it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Get The Right Size For Your Space
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            A full game plan tells you whether you need one at all, and exactly which size and model fits your crawlspace.
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
            Dehumidifier Installation FAQ
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
