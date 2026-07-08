import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Vapor Barrier Cost Kansas City | Materials vs. Pro' },
  description:
    'DIY crawl space vapor barrier materials run $375-$525 for 1,500 sq ft vs. $1,200-$4,000 professionally installed. See the real cost breakdown for Kansas City homes.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-vapor-barrier-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'How thick should a DIY crawl space vapor barrier be?',
    a: '10-mil is a reasonable minimum for a floor-only barrier; 20-mil reinforced poly holds up far better against foot traffic, piers, and debris and is what most Kansas City crawlspaces need given our clay soil and moisture levels. Thin 6-mil plastic tears easily and often needs replacing within a couple years.',
  },
  {
    q: 'Is a vapor barrier the same as full encapsulation?',
    a: 'No. A vapor barrier covers the ground only. Full encapsulation also seals the walls, closes and insulates vents, seals penetrations, and typically adds a dehumidifier. A floor-only barrier helps but leaves humid outside air free to enter through open vents.',
  },
  {
    q: 'Can I install a vapor barrier myself in a weekend?',
    a: 'For an average Kansas City crawlspace (1,000-1,500 sq ft), plan on 8-10 hours for two people if the space has decent clearance. Tight, low crawlspaces or ones needing prep work (debris removal, mold treatment, plumbing fixes first) take longer.',
  },
  {
    q: 'What size vapor barrier do I need for my crawlspace?',
    a: 'It depends on your exact square footage, wall height, and number of piers and penetrations to work around — which is exactly what a proper evaluation figures out. Guessing on rolls often means running short mid-install or overbuying by a lot.',
  },
];

const otherGuides = [
  { title: 'DIY Encapsulation Cost Breakdown', href: '/diy-crawl-space-encapsulation-cost/' },
  { title: 'DIY vs. Professional Encapsulation', href: '/diy-vs-professional-crawl-space-encapsulation/' },
  { title: 'Tools & Materials You Need', href: '/diy-crawl-space-encapsulation-tools-and-materials/' },
  { title: 'DIY Mold Treatment', href: '/diy-crawl-space-mold-treatment-kansas-city/' },
  { title: 'DIY Vent Sealing', href: '/diy-crawl-space-vent-sealing-kansas-city/' },
  { title: 'DIY Dehumidifier Installation', href: '/diy-crawl-space-dehumidifier-installation-kansas-city/' },
];

export default function DiyVaporBarrierPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'DIY Crawl Space Vapor Barrier Cost', item: 'https://www.crawlspacekc.com/diy-crawl-space-vapor-barrier-kansas-city/' },
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
            DIY Crawl Space Vapor Barrier
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            DIY Vapor Barrier Cost <span style={{ color: '#F5A623' }}>In Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            Materials for a DIY crawlspace vapor barrier run a fraction of professional installation — but the cost gap
            comes with real tradeoffs. Here&apos;s exactly what a Kansas City homeowner should expect to spend and do.
          </p>
        </div>
      </section>

      {/* Cost breakdown */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 28px', textAlign: 'center' as const }}>
            DIY vs. Professional Cost
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            <div style={{ background: '#0D0D0D', border: '2px solid #16A34A', borderRadius: 16, padding: 28 }}>
              <div style={{ font: "700 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#4ADE80', marginBottom: 10 }}>DIY — Materials Only</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 38, color: '#fff', marginBottom: 16 }}>$375–$525</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8, fontSize: 14, color: '#e5e7eb' }}>
                <li>20-mil poly vapor barrier — $225–$300</li>
                <li>Seam tape — $50–$75</li>
                <li>Stakes &amp; fasteners — $25–$50</li>
                <li>Safety gear (mask, gloves, light) — $75–$100</li>
              </ul>
              <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16, marginBottom: 0 }}>For a 1,500 sq ft crawlspace, ground barrier only.</p>
            </div>
            <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16, padding: 28 }}>
              <div style={{ font: "700 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: 10 }}>Professional Install</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 38, color: '#fff', marginBottom: 16 }}>$1,200–$4,000</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8, fontSize: 14, color: '#e5e7eb' }}>
                <li>Labor (crew, 1 day typical)</li>
                <li>Higher-grade reinforced barrier</li>
                <li>Warranty on materials and labor</li>
                <li>Full wall + floor coverage, not floor-only</li>
              </ul>
              <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16, marginBottom: 0 }}>Ground-only install. Full encapsulation runs $5,000+.</p>
            </div>
          </div>
          <p style={{ fontSize: 14.5, color: '#4b5563', lineHeight: 1.7, maxWidth: 720, margin: '28px auto 0', textAlign: 'center' as const }}>
            The DIY numbers above assume a floor-only barrier with average clearance and no prep work needed. Add mold treatment,
            plumbing repairs, wall barrier, or vent sealing and material costs climb — but usually still land well under
            professional pricing.
          </p>
        </div>
      </section>

      {/* What's involved */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 24px' }}>
            What The Install Actually Involves
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              { t: 'Seal vertical surfaces first', b: 'Foundation walls are the starting point — the wall liner ties into the ground barrier with roughly a 6-inch overlap.' },
              { t: 'Tape to masonry with double-sided construction tape', b: 'Applied firmly and evenly around the full perimeter before the barrier goes up.' },
              { t: 'Overlap every seam by at least 12 inches', b: 'Sheet-to-sheet and wall-to-floor — gaps here are the most common cause of a barrier failing early.' },
              { t: 'Budget 8-10 hours for two people, 1,000 sq ft', b: 'Tighter crawlspaces with less clearance take longer and are physically harder on your back and knees.' },
            ].map((item) => (
              <div key={item.t} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ font: "700 15.5px 'Inter',sans-serif", color: '#fff', marginBottom: 4 }}>{item.t}</div>
                <div style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.6 }}>{item.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to product */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Skip The Guesswork On Sizing
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            Get an exact materials list and quantities for your specific crawlspace — not a generic estimate — plus
            step-by-step install instructions.
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
            Vapor Barrier FAQ
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
