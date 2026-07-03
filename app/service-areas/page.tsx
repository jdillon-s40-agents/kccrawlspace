import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Service Areas | Kansas City Metro' },
  description: 'KC Crawl Space Specialists serves 29 cities across the Kansas City metro. Find crawl space encapsulation, repair & waterproofing in your MO or KS city.',
};

const moCities = [
  { label: 'Kansas City, MO', href: '/crawl-space-encapsulation-kansas-city-mo/' },
  { label: "Lee's Summit, MO", href: '/crawl-space-encapsulation-lees-summit-mo/' },
  { label: 'Blue Springs, MO', href: '/crawl-space-encapsulation-blue-springs-mo/' },
  { label: 'Independence, MO', href: '/crawl-space-encapsulation-independence-mo/' },
  { label: 'Liberty, MO', href: '/crawl-space-encapsulation-liberty-mo/' },
  { label: 'Gladstone, MO', href: '/crawl-space-encapsulation-gladstone-mo/' },
  { label: 'Parkville, MO', href: '/crawl-space-encapsulation-parkville-mo/' },
  { label: 'Raytown, MO', href: '/crawl-space-encapsulation-raytown-mo/' },
  { label: 'Grandview, MO', href: '/crawl-space-encapsulation-grandview-mo/' },
  { label: 'Belton, MO', href: '/crawl-space-encapsulation-belton-mo/' },
  { label: 'Raymore, MO', href: '/crawl-space-encapsulation-raymore-mo/' },
  { label: 'Harrisonville, MO', href: '/crawl-space-encapsulation-harrisonville-mo/' },
  { label: 'Smithville, MO', href: '/crawl-space-encapsulation-smithville-mo/' },
  { label: 'Kearney, MO', href: '/crawl-space-encapsulation-kearney-mo/' },
  { label: 'Platte City, MO', href: '/crawl-space-encapsulation-platte-city-mo/' },
];

const ksCities = [
  { label: 'Kansas City, KS', href: '/crawl-space-encapsulation-kansas-city-ks/' },
  { label: 'Overland Park, KS', href: '/crawl-space-encapsulation-overland-park-ks/' },
  { label: 'Olathe, KS', href: '/crawl-space-encapsulation-olathe-ks/' },
  { label: 'Shawnee, KS', href: '/crawl-space-encapsulation-shawnee-ks/' },
  { label: 'Lenexa, KS', href: '/crawl-space-encapsulation-lenexa-ks/' },
  { label: 'Leawood, KS', href: '/crawl-space-encapsulation-leawood-ks/' },
  { label: 'Prairie Village, KS', href: '/crawl-space-encapsulation-prairie-village-ks/' },
  { label: 'Mission, KS', href: '/crawl-space-encapsulation-mission-ks/' },
  { label: 'Merriam, KS', href: '/crawl-space-encapsulation-merriam-ks/' },
  { label: 'Gardner, KS', href: '/crawl-space-encapsulation-gardner-ks/' },
  { label: 'Spring Hill, KS', href: '/crawl-space-encapsulation-spring-hill-ks/' },
  { label: 'Bonner Springs, KS', href: '/crawl-space-encapsulation-bonner-springs-ks/' },
  { label: 'Basehor, KS', href: '/crawl-space-encapsulation-basehor-ks/' },
  { label: 'De Soto, KS', href: '/crawl-space-encapsulation-de-soto-ks/' },
];

const coreServices = [
  { label: 'Crawl Space Encapsulation Kansas City', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Crawl Space Repair Kansas City', href: '/crawl-space-repair-kansas-city/' },
  { label: 'Crawl Space Vapor Barrier Kansas City', href: '/crawl-space-vapor-barrier-kansas-city/' },
  { label: 'Crawl Space Waterproofing Kansas City', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Crawl Space Dehumidifier Kansas City', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Crawl Space Drainage & Sump Pump Kansas City', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
  { label: 'Crawl Space Insulation Removal Kansas City', href: '/crawl-space-insulation-removal-kansas-city/' },
  { label: 'Crawl Space Encapsulation Cost Kansas City', href: '/crawl-space-encapsulation-cost-kansas-city/' },
];

function eyebrow(text: string, color: string) {
  return (
    <p
      style={{
        font: "600 13px 'Inter',sans-serif",
        letterSpacing: '.16em',
        textTransform: 'uppercase' as const,
        color,
        margin: '0 0 12px',
      }}
    >
      {text}
    </p>
  );
}

function CityGrid({ cities }: { cities: { label: string; href: string }[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: 14,
      }}
    >
      {cities.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          style={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 10,
            padding: '16px 18px',
            textDecoration: 'none',
            display: 'block',
            color: '#1B3A6B',
            font: "600 15px 'Inter',sans-serif",
          }}
        >
          {c.label} →
        </Link>
      ))}
    </div>
  );
}

export default function ServiceAreasPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://crawlspacekc.com/service-areas/' },
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
                areaServed: [...moCities, ...ksCities].map((c) => c.label),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {eyebrow('Service Areas', '#F5A623')}
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
            Crawl Space Services Across the{' '}
            <span style={{ color: '#F5A623' }}>Kansas City Metro</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#9CA3AF', margin: '0 0 36px', maxWidth: 680, lineHeight: 1.6 }}>
            We provide crawl space encapsulation, repair, and moisture control throughout the Missouri and Kansas sides of the metro. Find your city below or request a free inspection anywhere in our service area.
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

      {/* Missouri Cities */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {eyebrow('Missouri', '#1B3A6B')}
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Missouri Service Area
          </h2>
          <CityGrid cities={moCities} />
        </div>
      </section>

      {/* Kansas Cities */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {eyebrow('Kansas', '#F5A623')}
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 28px',
            }}
          >
            Kansas Service Area
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 14,
            }}
          >
            {ksCities.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 10,
                  padding: '16px 18px',
                  textDecoration: 'none',
                  display: 'block',
                  color: '#fff',
                  font: "600 15px 'Inter',sans-serif",
                }}
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {eyebrow('Services', '#F5A623')}
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 28px',
            }}
          >
            What We Do in Every City We Serve
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {coreServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: 10,
                  padding: '18px 20px',
                  textDecoration: 'none',
                  display: 'block',
                  color: '#fff',
                  font: "600 15px 'Inter',sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {s.label} →
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
              Don't See Your City?
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>
              We serve the full Kansas City metro. Request a free inspection and we'll confirm coverage for your address.
            </p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
