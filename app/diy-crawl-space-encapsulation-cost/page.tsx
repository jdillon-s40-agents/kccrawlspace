import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Encapsulation Cost | Full Project Breakdown' },
  description:
    'DIY crawl space encapsulation costs $1,200-$3,000 in materials vs. $5,000-$20,000 professionally installed nationwide. See the full project cost breakdown by component.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-encapsulation-cost/',
  },
};

const faqItems = [
  {
    q: 'How much does it cost to encapsulate a crawl space yourself?',
    a: 'A full DIY encapsulation — vapor barrier, seam tape, vent block-off, and basic sealing — typically runs $1,200 to $3,000 in materials for an average 1,000-1,500 sq ft crawlspace. Add a dehumidifier and that climbs another $500-$2,000 depending on size and brand.',
  },
  {
    q: 'How much does professional crawl space encapsulation cost by comparison?',
    a: 'Nationally, professional encapsulation runs $3,000-$15,000 for most homes, averaging around $5,500, with severe moisture, mold, or structural issues pushing costs toward $20,000+. Labor is typically 50-70% of that total.',
  },
  {
    q: 'What drives the cost up on a DIY project?',
    a: 'Prep work you didn\'t plan for: mold treatment, plumbing repairs, debris removal, and buying a dehumidifier separately from the vapor barrier kit. Guessing at material quantities is the other common cost driver — running short mid-project means a second trip and often overbuying "to be safe" the first time.',
  },
  {
    q: 'Is a DIY cost estimate accurate without seeing my actual crawlspace?',
    a: 'Rough ranges like the ones above are a starting point, not a quote. Your exact square footage, wall height, number of piers, existing moisture level, and whether prep work is needed all change the real number — which is what a proper evaluation is for.',
  },
  {
    q: 'Does this service work outside Kansas City?',
    a: 'Yes — the virtual DIY assessment works from anywhere in the US. You submit photos and measurements, and get back a written plan with exact materials and costs for your crawlspace. In-person assessments are currently limited to the Kansas City metro area.',
  },
];

const otherGuides = [
  { title: 'DIY vs. Professional Encapsulation', href: '/diy-vs-professional-crawl-space-encapsulation/' },
  { title: 'DIY Vapor Barrier Cost', href: '/diy-crawl-space-vapor-barrier-kansas-city/' },
  { title: 'Tools & Materials You Need', href: '/diy-crawl-space-encapsulation-tools-and-materials/' },
  { title: 'DIY Mold Treatment', href: '/diy-crawl-space-mold-treatment-kansas-city/' },
  { title: 'DIY Vent Sealing', href: '/diy-crawl-space-vent-sealing-kansas-city/' },
  { title: 'DIY Dehumidifier Installation', href: '/diy-crawl-space-dehumidifier-installation-kansas-city/' },
];

export default function DiyEncapsulationCostPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'DIY Crawl Space Encapsulation Cost', item: 'https://www.crawlspacekc.com/diy-crawl-space-encapsulation-cost/' },
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
            Full Project Cost Breakdown
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            DIY Crawl Space Encapsulation <span style={{ color: '#F5A623' }}>Cost</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            The real, component-by-component cost of encapsulating a crawlspace yourself — and how it stacks up
            against hiring it out.
          </p>
        </div>
      </section>

      {/* Cost by component */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 24px', textAlign: 'center' as const }}>
            DIY Cost By Component
          </h2>
          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14.5, minWidth: 480 }}>
              <tbody>
                {[
                  ['Vapor barrier (20-mil, floor + partial wall)', '$225–$400'],
                  ['Seam tape & fasteners', '$75–$125'],
                  ['Vent block-off plates', '$25–$75'],
                  ['Spray foam / sealant for gaps', '$40–$80'],
                  ['Safety gear (mask, gloves, coveralls)', '$75–$100'],
                  ['Dehumidifier (if needed)', '$500–$2,000'],
                  ['Mold treatment (if needed)', '$50–$150'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td style={{ padding: '12px 14px', color: '#111827', background: '#fff', borderBottom: '1px solid #E5E7EB' }}>{row[0]}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: '#166534', background: '#fff', borderBottom: '1px solid #E5E7EB', textAlign: 'right' as const }}>{row[1]}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: '14px', fontWeight: 800, color: '#1B3A6B', background: '#FEF3D7' }}>Typical total (no dehumidifier)</td>
                  <td style={{ padding: '14px', fontWeight: 800, color: '#1B3A6B', background: '#FEF3D7', textAlign: 'right' as const }}>$1,200–$3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: '#6b7280', textAlign: 'center' as const, marginTop: 18 }}>
            Compare to professional encapsulation nationally: $3,000–$15,000, averaging around $5,500.
          </p>
        </div>
      </section>

      {/* National reach note */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(40px,6vw,60px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 15.5, color: '#9CA3AF', lineHeight: 1.7 }}>
            The virtual DIY assessment works from anywhere in the US — you submit photos and measurements, and Jason
            builds a written plan with exact materials and costs for your specific crawlspace. In-person assessments
            are currently available in the Kansas City metro.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Get Your Exact Number
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            Skip the range — get a materials list and cost built for your specific crawlspace, wherever you are.
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
            Cost FAQ
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
