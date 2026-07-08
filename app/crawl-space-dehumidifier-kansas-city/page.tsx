import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Dehumidifier Kansas City | Stop Humidity & Mold' },
  description: 'Stop humidity, condensation & mold in your Kansas City crawl space. Commercial-grade dehumidifier for sealed crawl spaces. Same-week installation. Free estimate.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-dehumidifier-kansas-city/',
  }};

function Check({ color = '#16A34A', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const faqItems = [
  {
    q: 'What humidity level should a crawl space be?',
    a: 'The target is below 60% relative humidity year-round. Above 60%, mold can begin to grow on organic materials. Above 70%, conditions become favorable for wood decay. Kansas City summers push outdoor humidity into the 85–90% range, making a dehumidifier especially important.',
  },
  {
    q: 'How much does a crawl space dehumidifier cost?',
    a: 'Commercial crawl space dehumidifiers typically cost $1,200–$1,800 installed, depending on the unit size and drainage setup. When included as part of a full encapsulation system, the cost is part of the total package.',
  },
  {
    q: 'How long do crawl space dehumidifiers last?',
    a: 'Commercial units are typically rated for 5–10 years with regular filter cleaning. Most manufacturers offer multi-year warranties. We service the units we install.',
  },
  {
    q: 'Do I need to empty a crawl space dehumidifier?',
    a: 'No. Commercial crawl space dehumidifiers include a drain line that automatically routes condensation to a floor drain, sump, or exterior discharge. No manual emptying is needed.',
  },
  {
    q: 'Can I use a regular dehumidifier in my crawl space?',
    a: 'You can, but it is not designed for the task. Household dehumidifiers require manual emptying, operate less efficiently at crawl space temperatures, and are not sized for the moisture loads found in crawl spaces. They typically fail faster and work less effectively.',
  },
  {
    q: 'Does the crawl space need to be sealed before installing a dehumidifier?',
    a: 'Sealing the crawl space first is strongly recommended. A dehumidifier in an open, unencapsulated crawl space constantly fights incoming outdoor air, runs continuously, and may never reach target humidity levels. Sealing first makes the system far more effective.',
  },
  {
    q: 'Will a dehumidifier fix my musty crawl space smell?',
    a: 'A dehumidifier controls the humidity that allows mold and musty odors to develop. Combined with mold treatment and encapsulation, it prevents new growth. If mold is already present, treatment before installation is recommended.',
  },
  {
    q: 'Where does the water from the dehumidifier go?',
    a: 'Commercial crawl space dehumidifiers drain via a condensate line to a sump pump, floor drain, or exterior discharge point. We route the drain line during installation.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Dehumidifier Kansas City',
          item: 'https://crawlspacekc.com/crawl-space-dehumidifier-kansas-city/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
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
      areaServed: [
        'Kansas City MO',
        'Kansas City KS',
        "Lee's Summit MO",
        'Overland Park KS',
        'Olathe KS',
        'Blue Springs MO',
        'Independence MO',
        'Shawnee KS',
        'Lenexa KS',
        'Liberty MO',
      ],
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Dehumidifier Installation',
      serviceType: 'Crawl Space Humidity Control',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Commercial crawl space dehumidifier installation in Kansas City to control humidity, prevent mold, and protect encapsulated crawl spaces year-round.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CrawlSpaceDehumidifierKansasCity() {
  return (
    <main style={{ fontFamily: "'Inter',sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── 1. HERO ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 16px',
            }}
          >
            Humidity Control
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
            Crawl Space Dehumidifiers{' '}
            <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#D1D5DB', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.6 }}>
            High crawl space humidity causes mold, musty odors, condensation, and wood decay — even without visible water. A properly sized commercial dehumidifier keeps humidity below 60% year-round.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
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
            <a
              href={PHONE_HREF}
              style={{
                color: '#fff',
                font: "600 16px 'Inter',sans-serif",
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,.3)',
                paddingBottom: 2,
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK ANSWER ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Do I Need a Dehumidifier in My Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            A crawl space dehumidifier may be needed when humidity stays high after moisture sources are controlled. Dehumidifiers are commonly recommended for sealed or encapsulated crawl spaces with musty odors, condensation, sweating pipes, mold concerns, or humidity levels that remain above a healthy range.
          </p>
          <div
            style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '28px 32px',
              maxWidth: 620,
            }}
          >
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#1B3A6B',
                margin: '0 0 16px',
              }}
            >
              Signs You May Need One
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Musty smell in home or crawl space',
                'Condensation on pipes or ductwork',
                'Mold or white growth on joists',
                'Humidity above 60% consistently',
                'Pest activity in crawl space',
                'Recent encapsulation without a dehumidifier',
              ].map((sign) => (
                <li key={sign} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Check size={16} />
                  <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. WHY IT MATTERS ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 40px',
            }}
          >
            What High Crawl Space Humidity Does to Your Home
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {[
              {
                stat: '60%+',
                label: 'Humidity Activates Mold',
                body: 'Humidity above 60% allows mold spores to activate and begin growing on wood surfaces, insulation, and organic debris.',
              },
              {
                stat: '>19%',
                label: 'Wood Moisture Enables Rot',
                body: 'Wood moisture content above 19% enables wood-rotting fungi to establish in joists and subfloor framing.',
              },
              {
                stat: '40%',
                label: 'Stack Effect Air Movement',
                body: "The stack effect pulls crawl space air upward through about 40% of first-floor air movement — spreading humidity and odors throughout your home.",
              },
              {
                stat: '85–90%',
                label: 'KC Summer Humidity',
                body: 'Summer air in Kansas City regularly reaches 85–90% relative humidity, making open crawl space vents a primary moisture source.',
              },
            ].map((card) => (
              <div
                key={card.stat}
                style={{
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '28px 24px',
                }}
              >
                <p
                  style={{
                    font: "800 32px 'Barlow Condensed',sans-serif",
                    color: '#F5A623',
                    margin: '0 0 6px',
                    lineHeight: 1,
                  }}
                >
                  {card.stat}
                </p>
                <p style={{ font: "700 14px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>{card.label}</p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY NOT HOUSEHOLD DEHUMIDIFIERS ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 40px',
            }}
          >
            Why Household Dehumidifiers Don't Work in Crawl Spaces
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                category: 'Capacity',
                household: 'Rated for heated living space, not the high moisture loads found in crawl spaces.',
                commercial: 'Sized specifically for crawl space conditions — handles far greater moisture volumes.',
              },
              {
                category: 'Auto-Drain',
                household: 'Requires manual emptying of a reservoir — impractical for a crawl space you rarely access.',
                commercial: 'Drains automatically through a dedicated condensate line to a sump, floor drain, or exterior.',
              },
              {
                category: 'Operating Temperature',
                household: 'Performance drops significantly at lower temperatures common in crawl spaces, especially winter.',
                commercial: 'Maintains effective operation across a wider temperature range found in crawl environments.',
              },
              {
                category: 'Warranty',
                household: 'Consumer warranties are designed for occasional residential use — not continuous operation.',
                commercial: 'Multi-year warranties designed for continuous duty in demanding crawl space conditions.',
              },
            ].map((card) => (
              <div
                key={card.category}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '24px',
                  overflow: 'hidden',
                }}
              >
                <p
                  style={{
                    font: "600 13px 'Inter',sans-serif",
                    letterSpacing: '.14em',
                    textTransform: 'uppercase' as const,
                    color: '#1B3A6B',
                    margin: '0 0 14px',
                  }}
                >
                  {card.category}
                </p>
                <div style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #F3F4F6' }}>
                  <p style={{ font: "600 12px 'Inter',sans-serif", color: '#DC2626', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.1em' }}>Household</p>
                  <p style={{ fontSize: 13, color: '#4B5563', margin: 0, lineHeight: 1.55 }}>{card.household}</p>
                </div>
                <div>
                  <p style={{ font: "600 12px 'Inter',sans-serif", color: '#16A34A', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.1em' }}>Commercial</p>
                  <p style={{ fontSize: 13, color: '#4B5563', margin: 0, lineHeight: 1.55 }}>{card.commercial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS WITH ENCAPSULATION ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 24px',
            }}
          >
            Dehumidifier + Encapsulation: The Complete System
          </h2>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 760 }}>
            A sealed crawl space is more energy-efficient to dehumidify because humid outdoor air can't keep entering. The dehumidifier handles residual humidity from the ground and any remaining air exchange. Together, they maintain humidity below 60% year-round — the threshold where mold cannot grow.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
              alignItems: 'stretch',
              marginBottom: 32,
            }}
          >
            {[
              { step: '1', label: 'Seal Vents', desc: 'Block outdoor air entry with rigid foam vent covers' },
              { step: '2', label: 'Install 20-mil Liner', desc: 'Full floor-and-wall encapsulation to stop ground moisture' },
              { step: '3', label: 'Add Dehumidifier', desc: 'Commercial unit manages residual humidity year-round' },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  flex: '1 1 180px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.04)',
                  padding: '28px 22px',
                  borderRadius: i === 0 ? '12px 0 0 12px' : i === 2 ? '0 12px 12px 0' : '0',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    background: '#F5A623',
                    color: '#0D0D0D',
                    font: "800 14px 'Inter',sans-serif",
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                  }}
                >
                  {item.step}
                </span>
                <p style={{ font: "700 15px 'Inter',sans-serif", color: '#fff', margin: '0 0 8px' }}>{item.label}</p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 14,
              color: '#94A3B8',
              fontStyle: 'italic',
              margin: 0,
              background: 'rgba(0,0,0,.25)',
              padding: '14px 18px',
              borderRadius: 8,
              lineHeight: 1.6,
            }}
          >
            A dehumidifier alone in an unsealed crawl space fights an endless battle against incoming outdoor air.
          </p>
        </div>
      </section>

      {/* ── 6. COST ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            Crawl Space Dehumidifier Cost in Kansas City
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
            {[
              { label: 'Standalone dehumidifier installation', range: '$1,200–$1,800 depending on unit and drainage' },
              { label: 'Included in Complete package', range: 'Part of $4,500–$5,500 encapsulation system' },
              { label: 'Included in Full System package', range: 'Part of $6,500–$9,000+ encapsulation system' },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 8,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '18px 22px',
                }}
              >
                <span style={{ fontSize: 15, color: '#374151', fontWeight: 600 }}>{row.label}</span>
                <span style={{ fontSize: 15, color: '#1B3A6B', fontWeight: 700 }}>{row.range}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '24px 28px',
              marginBottom: 24,
            }}
          >
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.14em',
                textTransform: 'uppercase' as const,
                color: '#1B3A6B',
                margin: '0 0 14px',
              }}
            >
              What Affects Cost
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Crawl space size and square footage',
                'Existing drainage availability',
                'Discharge line routing distance',
                'Unit brand, capacity, and features',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} />
                  <span style={{ fontSize: 14, color: '#4B5563' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', fontStyle: 'italic', margin: '0 0 20px', lineHeight: 1.6 }}>
            We size the dehumidifier to your crawl space during inspection. Undersized units run constantly without achieving target humidity.
          </p>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{ color: '#1B3A6B', fontSize: 15, fontWeight: 600, textDecoration: 'underline' }}
          >
            See full crawl space encapsulation cost breakdown →
          </Link>
        </div>
      </section>

      {/* ── 7. FINANCING ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 40px',
            }}
          >
            Crawl Space Dehumidifier FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqItems.map((item) => (
              <div
                key={item.q}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: '22px 24px',
                }}
              >
                <p style={{ font: "700 16px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>{item.q}</p>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. RELATED SERVICES ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            Related Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
            {[
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier KC', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Waterproofing KC', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
              { label: 'Encapsulation Cost', href: '/crawl-space-encapsulation-cost-kansas-city/' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '18px 20px',
                  color: '#1B3A6B',
                  font: "600 15px 'Inter',sans-serif",
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA FORM ── */}
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
              Get a Free Crawl Space Estimate
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>
              No obligation. Same-week appointments available in Kansas City.
            </p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
