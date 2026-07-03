import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Waterproofing Kansas City | Fix a Wet Crawl Space' },
  description: 'Fix a wet crawl space in Kansas City: interior drainage, sump pump & encapsulation. We handle standing water, foundation seepage & water after rain. Free inspection.',
};

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

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DC2626"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const faqItems = [
  {
    q: 'Can encapsulation alone fix standing water?',
    a: 'No. Encapsulation controls moisture from the ground and air, but it cannot stop active water intrusion through walls or floor. Drainage and sump pump work is needed first for crawl spaces with standing water.',
  },
  {
    q: 'Why does my crawl space flood after rain?',
    a: 'Most commonly because surface water near the foundation has nowhere to drain, or because hydrostatic pressure forces water through foundation walls or the floor. Clogged gutters and improper grading are frequent causes in Kansas City.',
  },
  {
    q: 'Do I need a sump pump in my crawl space?',
    a: 'If water collects at any point — even seasonally — a sump pump is typically the most reliable solution. We assess during the free inspection whether a pump is needed.',
  },
  {
    q: 'How long does crawl space waterproofing take?',
    a: 'Exterior drainage corrections can often be done in a day. Interior drainage and sump pump installation typically takes 1–2 days. Encapsulation after water control adds 1–2 more days depending on size.',
  },
  {
    q: 'Will waterproofing hurt the resale value of my home?',
    a: 'No — it significantly helps it. A dry crawl space is a positive inspection finding. Documented waterproofing and a written warranty are selling points.',
  },
  {
    q: 'How much does crawl space waterproofing cost in Kansas City?',
    a: 'Costs depend heavily on the water source and volume. Exterior drainage fixes may cost $200–$1,000. Interior drainage and sump pump systems typically run $2,000–$4,500. Full encapsulation after water control adds $2,800–$5,500. Written quotes are provided at inspection.',
  },
  {
    q: 'What is the difference between waterproofing and encapsulation?',
    a: 'Waterproofing focuses on stopping water entry — drainage, sump pumps, and exterior corrections. Encapsulation seals the crawl space from ground moisture and air after water is controlled. Most complete jobs include both.',
  },
  {
    q: 'Can crawl space water damage the structure of my home?',
    a: 'Yes. Persistent moisture causes wood rot in joists and subfloor, attracts pests, and can compromise pier stability over time. Addressing water problems early prevents more costly repairs later.',
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
          name: 'Crawl Space Waterproofing Kansas City',
          item: 'https://crawlspacekc.com/crawl-space-waterproofing-kansas-city/',
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
      name: 'Crawl Space Waterproofing',
      serviceType: 'Wet Crawl Space Repair',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Interior drainage systems, sump pump installation, exterior drainage corrections, and encapsulation to fix wet crawl spaces in Kansas City.',
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

export default function CrawlSpaceWaterproofingKansasCity() {
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
            Crawl Space Waterproofing
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
            Crawl Space Waterproofing{' '}
            <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#D1D5DB', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.6 }}>
            Water in a crawl space doesn't fix itself. We diagnose why your crawl space is wet and install the right solution — drainage, sump pump, vapor barrier, or full encapsulation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginBottom: 28 }}>
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
          <p style={{ fontSize: 14, color: '#6B7280', fontStyle: 'italic', margin: 0 }}>
            Important: encapsulation alone cannot fix standing water. We address water control first.
          </p>
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
            How Do You Fix Water in a Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Water in a crawl space is usually fixed by identifying where the water enters, correcting exterior drainage when possible, installing interior drainage if needed, adding a sump pump, and then sealing the crawl space with a vapor barrier or encapsulation system. Standing water should be corrected before relying on encapsulation alone.
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
                color: '#DC2626',
                margin: '0 0 16px',
              }}
            >
              Signs of a Wet Crawl Space
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Standing water after heavy rain',
                'Damp or muddy soil',
                'Efflorescence (white mineral deposits) on foundation walls',
                'Water stains on piers or walls',
                'High humidity or condensation',
                'Musty smell in home',
              ].map((sign) => (
                <li key={sign} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <XIcon size={16} />
                  <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CRAWL SPACES GET WET ── */}
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
            Why Kansas City Crawl Spaces Get Wet
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Poor Exterior Drainage',
                body: 'Gutters overflowing, downspouts discharging near the foundation, grading that slopes toward the home — all direct surface water toward the crawl space.',
              },
              {
                title: 'Hydrostatic Pressure',
                body: "Kansas City's heavy clay soil holds water against foundation walls. That pressure forces moisture through even intact concrete block and mortar joints.",
              },
              {
                title: 'Foundation Seepage',
                body: 'Water seeps through concrete block walls or foundation cracks during and after rain events, often appearing hours after a storm passes.',
              },
              {
                title: 'High Water Table',
                body: 'Some low-lying KC properties have a water table that rises seasonally, pushing moisture up through the crawl space floor regardless of exterior conditions.',
              },
              {
                title: 'Condensation',
                body: 'Humid summer air entering through open vents condenses on cool surfaces — joists, ducts, pipes — creating significant moisture without any rain event.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '24px 22px',
                }}
              >
                <p
                  style={{
                    font: "700 15px 'Inter',sans-serif",
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </p>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTIONS ── */}
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
            Crawl Space Waterproofing Solutions We Install
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Exterior Drainage Corrections',
                body: 'Downspout extensions, gutter improvements, and grading corrections that stop water from reaching the foundation. Often the most cost-effective first step.',
              },
              {
                title: 'Interior Drainage System',
                body: 'A perimeter channel installed at the footing level that captures seeping water and routes it to a sump pit. Works even when exterior corrections are not possible.',
              },
              {
                title: 'Sump Pump Installation',
                body: 'A submersible pump in a basin that automatically discharges water away from the home. Required when water collects at the lowest point.',
              },
              {
                title: 'Vapor Barrier & Encapsulation',
                body: 'After water is controlled, a 20-mil liner seals the floor and walls. Encapsulation is the final layer of moisture protection, not the first.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  borderRadius: 12,
                  padding: '28px 24px',
                }}
              >
                <p
                  style={{
                    font: "700 15px 'Inter',sans-serif",
                    color: '#F5A623',
                    margin: '0 0 12px',
                  }}
                >
                  {card.title}
                </p>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ── */}
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
            How We Fix a Wet Crawl Space in Kansas City
          </h2>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                n: 1,
                label: 'Free Inspection',
                body: 'We assess where water enters, how much, and when — rain-driven vs. constant. No charge, no obligation.',
              },
              {
                n: 2,
                label: 'Written Estimate',
                body: 'Clear scope and pricing delivered before any work begins. You approve everything first.',
              },
              {
                n: 3,
                label: 'Exterior Drainage First When Possible',
                body: 'Downspout extensions and grading corrections if accessible — often the most affordable fix and done before interior work.',
              },
              {
                n: 4,
                label: 'Interior Drainage & Sump Pump',
                body: 'Perimeter channel and pump installed if water persists after exterior corrections or when exterior work is not feasible.',
              },
              {
                n: 5,
                label: 'Encapsulation',
                body: '20-mil vapor barrier, vent sealing, and dehumidifier installed after water control is fully in place.',
              },
            ].map((step) => (
              <li
                key={step.n}
                style={{
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,.07)',
                  border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: 12,
                  padding: '22px 24px',
                }}
              >
                <span
                  style={{
                    background: '#F5A623',
                    color: '#0D0D0D',
                    font: "800 15px 'Inter',sans-serif",
                    borderRadius: '50%',
                    width: 34,
                    height: 34,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 'none',
                    marginTop: 2,
                  }}
                >
                  {step.n}
                </span>
                <div>
                  <p style={{ font: "700 15px 'Inter',sans-serif", color: '#fff', margin: '0 0 6px' }}>{step.label}</p>
                  <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 6. WARNING SIGNS ── */}
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
            Warning Signs Your Crawl Space Needs Waterproofing
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {[
              'Water or mud after rain',
              'White chalky deposits on walls',
              'Rusting metal supports or straps',
              'Wood rot or soft joists',
              'Mold on framing or subfloor',
              'Persistent musty smell',
            ].map((sign) => (
              <div
                key={sign}
                style={{
                  background: '#111827',
                  borderRadius: 10,
                  padding: '22px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <XIcon size={18} />
                <span style={{ fontSize: 15, color: '#fff', fontWeight: 600 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. COST ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Crawl Space Waterproofing Cost in Kansas City
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
            {[
              { label: 'Exterior drainage corrections', range: '$200–$1,000 for basic downspout and grading work' },
              { label: 'Interior drainage system', range: '$1,500–$3,500+ depending on linear footage' },
              { label: 'Sump pump installation', range: '$500–$1,200 depending on pit and discharge complexity' },
              { label: 'Vapor barrier after water control', range: '$2,800–$5,500+ depending on scope' },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 8,
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 10,
                  padding: '18px 22px',
                }}
              >
                <span style={{ fontSize: 15, color: '#D1D5DB', fontWeight: 600 }}>{row.label}</span>
                <span style={{ fontSize: 15, color: '#F5A623', fontWeight: 700 }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', fontStyle: 'italic', margin: '0 0 20px', lineHeight: 1.6 }}>
            Exact pricing requires inspection. We provide written quotes. No work begins until you approve the scope.
          </p>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{ color: '#F5A623', fontSize: 15, fontWeight: 600, textDecoration: 'underline' }}
          >
            See full crawl space encapsulation cost breakdown →
          </Link>
        </div>
      </section>

      {/* ── 8. FINANCING ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Wet Crawl Space FAQ
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

      {/* ── 10. RELATED SERVICES ── */}
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
              { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
              { label: 'Drainage & Sump Pump', href: '/crawl-space-repair-kansas-city/' },
              { label: 'Crawl Space Dehumidifier', href: '/crawl-space-dehumidifier-kansas-city/' },
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
                  transition: 'border-color .2s',
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CTA FORM ── */}
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
