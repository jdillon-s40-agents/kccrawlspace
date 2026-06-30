import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Drainage & Sump Pump Kansas City | Fix Standing Water',
  description:
    'Crawl space drainage systems and sump pump installation in Kansas City. Fix standing water, foundation seepage, and wet crawl spaces before encapsulation. Free estimate.',
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

function XMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DC2626"
      strokeWidth="2.5"
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
    question: 'Do I need a sump pump in my crawl space?',
    answer:
      'If water collects under your home at any point during the year, a sump pump is typically the most reliable solution. We assess during the free inspection whether passive drainage or an active pump system is appropriate for your crawl space.',
  },
  {
    question: 'What is an interior crawl space drainage system?',
    answer:
      'An interior drainage system is a perimeter channel installed at the footing level inside the crawl space that captures water seeping through foundation walls or the floor and routes it to a sump pit. It works in cases where exterior drainage corrections are not practical or sufficient.',
  },
  {
    question: 'How long does drainage installation take?',
    answer:
      'Interior drainage and sump pump installation typically takes 1–2 days depending on crawl space size and access. Encapsulation can follow once drainage is in place.',
  },
  {
    question: 'What happens if I just encapsulate without fixing the water?',
    answer:
      'The liner will buckle, float, or allow moisture to accumulate underneath. Encapsulation is a vapor and humidity control system — not a water management system. Active water entry must be addressed first.',
  },
  {
    question: 'Does a sump pump need electricity?',
    answer:
      'Yes. The primary pump requires power. We offer battery backup options for homes that lose power during storms — which is when pumps are needed most.',
  },
  {
    question: 'How much does a crawl space sump pump cost in Kansas City?',
    answer:
      'Sump pump and basin installation typically runs $500–$1,200 depending on pit depth, pump size, and discharge routing. An interior drainage channel adds $1,500–$3,000+ depending on perimeter footage.',
  },
  {
    question: 'Can water in the crawl space damage the structure?',
    answer:
      'Yes. Persistent water under the home causes wood rot in joists and subfloor, rusting of metal hardware and straps, pier degradation, and creates ideal conditions for pest entry. Addressing water problems early prevents much more costly structural repairs.',
  },
  {
    question: 'What is the discharge from a sump pump?',
    answer:
      'The sump pump discharges collected crawl space water through a pipe to an exterior daylight point, a buried emitter, or in some cases a storm drain connection. The discharge point must be far enough from the foundation to prevent water from cycling back in.',
  },
];

export default function CrawlSpaceDrainageSumpPumpPage() {
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
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Crawl Space Drainage & Sump Pump Kansas City',
                    item: 'https://crawlspacekc.com/crawl-space-drainage-sump-pump-kansas-city/',
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
                name: 'Crawl Space Drainage System Installation',
                serviceType: 'Crawl Space Sump Pump',
                provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
                areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
                description:
                  'Interior crawl space drainage systems and sump pump installation in Kansas City. Resolves standing water, foundation seepage, and persistently wet crawl spaces before encapsulation.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* ── 1. Hero ── */}
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
            Crawl Space Drainage &amp; Sump Pumps
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px,7vw,64px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Crawl Space Drainage{' '}
            <span style={{ color: '#F5A623' }}>&amp; Sump Pumps</span>{' '}
            in Kansas City
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>
            When water collects under your home, a drainage system and sump pump move it out before it causes damage. We install
            interior drainage and sump systems sized for Kansas City&apos;s clay soil and rainfall.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
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
                background: 'transparent',
                color: '#fff',
                font: "700 16px 'Inter',sans-serif",
                padding: '16px 26px',
                borderRadius: 10,
                border: '2px solid rgba(255,255,255,.25)',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {PHONE}
            </a>
          </div>
          <div
            style={{
              border: '2px solid #F5A623',
              borderRadius: 10,
              padding: '14px 20px',
              maxWidth: 520,
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 20 }}>⚠</span>
            <p style={{ fontSize: 15, color: '#F5A623', fontWeight: 700, margin: 0 }}>
              Encapsulation alone cannot fix standing water. Drainage comes first.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Quick Answer ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            When Does a Crawl Space Need a Drainage System or Sump Pump?
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            A crawl space may need a drainage system or sump pump when water collects under the home after rain, seeps through
            foundation walls, pools on the ground, or keeps the soil damp. Drainage and sump systems move water out before
            encapsulation or vapor barrier work is completed.
          </p>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 16px',
            }}
          >
            Warning Signs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {[
              'Standing water after rain',
              'Damp or muddy soil consistently',
              'Water seeping through foundation walls',
              'Efflorescence (white mineral staining) on walls',
              'Rust on metal piers or straps',
              'Vapor barrier lifting from ground',
            ].map((sign) => (
              <div
                key={sign}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <XMark size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Signs Drainage Is Needed ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Common Scenarios
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Signs Your Crawl Space Needs a Drainage System
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
            {[
              {
                title: 'Water After Every Rain',
                body: 'If the crawl space floor stays wet or muddy after rain events, exterior grading corrections alone are unlikely to be enough. An interior system is typically needed.',
              },
              {
                title: 'Seepage Through Walls',
                body: 'If water visibly enters through foundation wall joints or cracks rather than through the floor, a perimeter drain channel captures it before it spreads.',
              },
              {
                title: 'Persistently Damp Soil',
                body: 'Some Kansas City lots have high water tables or poor natural drainage. Even without visible standing water, constantly wet soil means encapsulation alone will not maintain a dry space.',
              },
              {
                title: 'Vapor Barrier Failure',
                body: 'If a previously installed liner is buckling, floating, or has moisture underneath it, active water management is needed before re-encapsulating.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  borderRadius: 12,
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Interior Drainage Systems ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            How Interior Crawl Space Drainage Systems Work
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            An interior perimeter drain channel is installed at or near the footing level around the inside perimeter of the
            crawl space. The channel is graded to route water to a sump pit at the lowest point. The sump pit holds a submersible
            pump that activates automatically when water rises and discharges water away from the home through a buried or surface
            discharge line.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 14 }}>
            {[
              'Captures seepage before it spreads across the floor',
              'Works regardless of exterior grading or lot conditions',
              'Can be installed in Kansas City crawl spaces with limited clearance',
            ].map((benefit) => (
              <div
                key={benefit}
                style={{
                  background: '#0D0D0D',
                  borderRadius: 12,
                  padding: '20px 22px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <Check size={18} color="#F5A623" />
                <span style={{ fontSize: 15, color: '#D1D5DB', lineHeight: 1.6 }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Sump Pump Installation ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Sump Pump Systems
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Sump Pump Installation for Kansas City Crawl Spaces
          </h2>
          <p style={{ fontSize: 16, color: '#CBD5E1', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            A sump pump is installed in a basin (pit) dug at the lowest point in the crawl space. The submersible pump activates
            when water reaches a trigger level and discharges through a pipe routed to daylight, a dry well, or a municipal storm
            drain depending on local code and lot conditions. Battery backup sump pumps are available for homes that lose power
            during storms.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Primary submersible pump with float switch',
              'Battery backup option for power outage protection',
              'Discharge routed to exterior daylight or storm system',
              'Basin with sealed lid to prevent debris entry and reduce humidity contribution',
            ].map((spec) => (
              <div
                key={spec}
                style={{
                  background: 'rgba(255,255,255,.07)',
                  borderRadius: 10,
                  padding: '16px 20px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  border: '1px solid rgba(255,255,255,.12)',
                }}
              >
                <Check size={16} color="#F5A623" />
                <span style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.5 }}>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Discharge Line Considerations ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            Sump Pump Discharge in Kansas City
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
            {[
              {
                title: 'Daylight Discharge',
                body: 'Pipe runs to an exterior point where water exits above grade. Most common. Must terminate away from the foundation and downhill from the home.',
              },
              {
                title: 'Buried Discharge',
                body: 'Pipe buried below grade to a pop-up emitter or drywell. Keeps the exterior clean. Requires adequate grading to prevent freeze damage in Kansas City winters.',
              },
              {
                title: 'Storm Drain Connection',
                body: 'Where code permits, discharge can connect to the municipal storm system. Requires permitting in some jurisdictions.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#0D0D0D',
                  borderRadius: 12,
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. After Drainage: Encapsulation ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Complete System
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Encapsulation After Water Control
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.75, margin: '0 0 36px', maxWidth: 760 }}>
            After drainage and a sump pump are in place, the crawl space is ready for a 20-mil vapor barrier installation. The
            liner seals the ground and walls, the vents are closed, and a dehumidifier manages ongoing humidity. The complete
            system — drainage + barrier + dehumidifier — addresses both active water and ambient humidity.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, alignItems: 'center' }}>
            {[
              { step: 'Water Control', desc: 'Drainage channel + sump pump remove active water' },
              { step: 'Vapor Barrier & Vent Sealing', desc: '20-mil liner + sealed vents lock out humidity' },
              { step: 'Dehumidifier', desc: 'Maintains target humidity year-round' },
            ].map((item, i) => (
              <div key={item.step} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0 }}>
                <div
                  style={{
                    background: '#111827',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderRadius: 12,
                    padding: '20px 24px',
                    minWidth: 180,
                  }}
                >
                  <div
                    style={{
                      background: '#F5A623',
                      color: '#0D0D0D',
                      font: "800 13px 'Inter',sans-serif",
                      padding: '4px 10px',
                      borderRadius: 6,
                      display: 'inline-block',
                      marginBottom: 10,
                    }}
                  >
                    Step {i + 1}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: '0 0 6px',
                    }}
                  >
                    {item.step}
                  </p>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
                {i < 2 && (
                  <span style={{ color: '#F5A623', fontSize: 22, fontWeight: 800, padding: '0 12px' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Cost ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Crawl Space Drainage &amp; Sump Pump Cost in Kansas City
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14, marginBottom: 28 }}>
            {[
              { label: 'Interior drainage channel', range: '$1,500–$3,000+', note: 'Depending on linear footage' },
              { label: 'Sump pump and basin', range: '$500–$1,200', note: 'Pit depth, pump size, discharge' },
              { label: 'Discharge line', range: '$200–$600', note: 'Depending on routing' },
              { label: 'Encapsulation after drainage', range: '$2,800–$5,500', note: 'Full system after water control' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: '#0D0D0D',
                  borderRadius: 12,
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,.07)',
                }}
              >
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.08em', fontWeight: 600 }}>
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: '#F5A623',
                    margin: '0 0 4px',
                  }}
                >
                  {item.range}
                </p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px' }}>
            Total project cost depends on crawl space size, water volume, soil conditions, and discharge routing. Written quotes
            provided at inspection.
          </p>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{ color: '#1B3A6B', fontWeight: 700, fontSize: 15, textDecoration: 'underline' }}
          >
            See full encapsulation cost breakdown →
          </Link>
        </div>
      </section>

      {/* ── 9. Financing ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 10. Related Services ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Related Services
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px,4vw,36px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            More Crawl Space Solutions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
            {[
              { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Wet Crawl Space After Rain', href: '/wet-crawl-space-after-rain/' },
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Encapsulation Cost', href: '/crawl-space-encapsulation-cost-kansas-city/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '18px 20px',
                  color: '#1B3A6B',
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Crawl Space Drainage FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqItems.map((item) => (
              <div
                key={item.question}
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: '22px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#fff',
                    margin: '0 0 8px',
                  }}
                >
                  {item.question}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA Form ── */}
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
