import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Guides & FAQ | Kansas City Homeowners' },
  description: 'Answers to the most common crawl space questions — moisture, mold, vapor barriers, vents, insulation, and more — from Kansas City crawl space specialists.',
};

const guides = [
  {
    title: 'Wet Crawl Space After Rain',
    href: '/wet-crawl-space-after-rain/',
    answer:
      'A crawl space that gets wet after rain may have poor exterior drainage, foundation seepage, low spots under the home, clogged gutters, grading problems, or hydrostatic pressure.',
  },
  {
    title: 'Standing Water in Crawl Space',
    href: '/standing-water-in-crawl-space/',
    answer:
      'Standing water is an urgent issue usually caused by poor drainage or a high water table, and should be removed and addressed before any vapor barrier or encapsulation work.',
  },
  {
    title: 'Crawl Space Smells Musty',
    href: '/crawl-space-smells-musty/',
    answer:
      'A musty crawl space smell usually means there is excess moisture, damp soil, mold growth, wet insulation, poor air sealing, or high humidity under the home.',
  },
  {
    title: 'Crawl Space Mold Warning Signs',
    href: '/crawl-space-mold-warning-signs/',
    answer:
      'Common warning signs include musty odors, visible white or dark growth on wood, high humidity, damp insulation, condensation, and wood staining.',
  },
  {
    title: 'Falling Insulation in Crawl Space',
    href: '/falling-insulation-in-crawl-space/',
    answer:
      'Insulation falls when it absorbs moisture from high humidity or water intrusion — a moisture symptom, not just an installation problem.',
  },
  {
    title: 'Cold Floors Above Crawl Space',
    href: '/cold-floors-above-crawl-space/',
    answer:
      'Cold floors are usually caused by missing or wet insulation, air leaks, and an unsealed crawl space letting outside air contact the subfloor.',
  },
  {
    title: 'Crawl Space Vents: Open or Closed?',
    href: '/crawl-space-vents-open-or-closed/',
    answer:
      'Open vents let humid outdoor air into the crawl space during warm months. In a sealed crawl space, vents are usually closed and sealed.',
  },
  {
    title: 'Crawl Space Vapor Barrier Thickness',
    href: '/crawl-space-vapor-barrier-thickness/',
    answer:
      'Vapor barriers commonly come in 6 mil, 10 mil, 12 mil, and 20 mil thicknesses — thicker reinforced barriers hold up better over time.',
  },
  {
    title: 'Encapsulation vs Vapor Barrier',
    href: '/encapsulation-vs-vapor-barrier/',
    answer:
      'A vapor barrier covers the ground; full encapsulation also seals walls and vents, adds air sealing, drainage, and often a dehumidifier.',
  },
  {
    title: 'Do I Need a Crawl Space Dehumidifier?',
    href: '/do-i-need-crawl-space-dehumidifier/',
    answer:
      'You may need one if humidity stays high after sealing, or if you notice musty odors, condensation, sweating pipes, or damp insulation.',
  },
];

export default function GuidesPage() {
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
                  { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://crawlspacekc.com/guides/' },
                ],
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://crawlspacekc.com/#business',
                name: 'KC Crawl Space Specialists LLC',
                url: 'https://crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Kansas City',
                  addressRegion: 'MO',
                  addressCountry: 'US',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            Guides &amp; FAQ
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px,7vw,68px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Crawl Space <span style={{ color: '#F5A623' }}>Guides</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#9CA3AF', margin: '0 0 36px', maxWidth: 680, lineHeight: 1.6 }}>
            Straight answers to the questions Kansas City homeowners ask most about crawl space moisture, mold, insulation, and vapor barriers.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, alignItems: 'center' }}>
            <Link
              href="/contact"
              style={{
                background: '#F5A623',
                color: '#0D0D0D',
                font: "800 16px 'Inter',sans-serif",
                padding: '16px 26px',
                borderRadius: 10,
                boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get a Free Estimate
            </Link>
            <a href={PHONE_HREF} style={{ color: '#fff', font: "600 16px 'Inter',sans-serif", textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 24,
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 21,
                    textTransform: 'uppercase' as const,
                    color: '#1B3A6B',
                    margin: '0 0 10px',
                  }}
                >
                  {g.title}
                </h2>
                <p style={{ fontSize: 14.5, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{g.answer}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(30px,6vw,50px)',
                textTransform: 'uppercase' as const,
                margin: '0 0 12px',
                color: '#fff',
              }}
            >
              Still Have Questions?
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>
              Get a free, no-pressure crawl space inspection from a Kansas City specialist.
            </p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
