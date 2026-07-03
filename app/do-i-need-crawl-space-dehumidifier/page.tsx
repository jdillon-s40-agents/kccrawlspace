import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Do I Need a Crawl Space Dehumidifier? | Kansas City Guide' },
  description: 'Not sure if you need a crawl space dehumidifier? Learn the signs, what humidity level is too high & why it works best as part of a sealed crawl space system.',
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
    q: 'How do I know if my crawl space humidity is too high?',
    a: 'Check with a hygrometer — an inexpensive digital humidity sensor you can place in the crawl space. Readings consistently above 60% RH indicate humidity control is needed. Signs without measuring include musty odors, condensation on pipes, and mold on wood surfaces.',
  },
  {
    q: 'Can I put a regular dehumidifier in my crawl space?',
    a: 'Technically yes, but it is not designed for the task. Household units require manual emptying, lose efficiency at lower temperatures, and are not sized for crawl space moisture loads. They typically fail faster and often cannot achieve target humidity in a humid crawl space.',
  },
  {
    q: 'What size dehumidifier does a crawl space need?',
    a: 'Size depends on square footage and moisture conditions. We size the unit during the inspection. A properly sized commercial unit maintains below 60% RH by cycling on and off — if a unit runs continuously without reaching target humidity, it is undersized.',
  },
  {
    q: 'Does a dehumidifier help with musty crawl space smell?',
    a: 'Yes. Musty odors are produced by mold and bacteria that require humidity above 60% to thrive. Reducing crawl space humidity with a dehumidifier — combined with encapsulation and mold treatment — eliminates the conditions producing the odor.',
  },
  {
    q: 'How much electricity does a crawl space dehumidifier use?',
    a: 'Commercial crawl space dehumidifiers typically use 700–800 watts and run on 120V standard outlets. When properly sized for a sealed space, they cycle on and off rather than running continuously, keeping operating costs reasonable.',
  },
  {
    q: 'Does a crawl space dehumidifier need maintenance?',
    a: 'Yes — filters should be cleaned regularly (typically every 1–3 months depending on conditions) and the unit should be inspected annually. We service the units we install.',
  },
  {
    q: 'Is a dehumidifier enough without encapsulating?',
    a: 'A dehumidifier in an open, unencapsulated crawl space fights a constant battle against humid outdoor air entering through vents. Sealing the crawl space first dramatically reduces the moisture load, making the dehumidifier far more effective and efficient.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Crawl Space Vents', href: '/crawl-space-vents-open-or-closed/' },
  { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
];

export default function DoINeedCrawlSpaceDehumidifierPage() {
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
                    name: 'Do I Need a Crawl Space Dehumidifier',
                    item: 'https://crawlspacekc.com/do-i-need-crawl-space-dehumidifier/',
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
                '@type': 'FAQPage',
                mainEntity: faqItems.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
            Crawl Space Dehumidifier
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
            Do I Need a{' '}
            <span style={{ color: '#F5A623' }}>Crawl Space Dehumidifier?</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2.5vw,19px)',
              color: '#9CA3AF',
              margin: '0 0 36px',
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            A crawl space dehumidifier is not always the first step — but for most Kansas City homes with a sealed crawl space, it is the difference between a system that holds humidity in check and one that doesn't.
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
            <a
              href={PHONE_HREF}
              style={{
                color: '#fff',
                font: "600 16px 'Inter',sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            The Answer
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            Do I Need a Crawl Space Dehumidifier?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            You may need a crawl space dehumidifier if humidity remains high after the crawl space is sealed or if you notice musty odors, condensation, sweating pipes, damp insulation, mold concerns, or moisture-sensitive wood. A dehumidifier works best as part of a moisture-control system, not as a standalone fix for standing water.
          </p>
        </div>
      </section>

      {/* Signs You Need One */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
            Warning Signs
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Signs Your Crawl Space Needs a Dehumidifier
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Musty Smell in the Home',
                body: 'Persistent musty odor, especially in warm months, typically indicates elevated crawl space humidity.',
              },
              {
                title: 'Condensation on Pipes or Ductwork',
                body: 'Sweating pipes in the crawl space mean the air is warm and humid enough to condense on cooler surfaces.',
              },
              {
                title: 'Mold or White Growth on Joists',
                body: 'Mold requires humidity above 60% to grow; active mold means humidity is consistently too high.',
              },
              {
                title: 'Crawl Space Humidity Above 60%',
                body: 'A hygrometer reading above 60% RH consistently means humidity control is needed.',
              },
              {
                title: 'Wet or Sagging Insulation',
                body: 'Insulation that absorbs moisture from crawl space air and sags or falls is a humidity problem, not just a structural one.',
              },
              {
                title: 'Recently Sealed Crawl Space Without a Dehumidifier',
                body: 'Once vents are sealed and a vapor barrier is installed, ground moisture still evaporates; without active dehumidification, humidity in a sealed space can rise.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Humidity Level Is Too High */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Humidity Targets
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            What Humidity Level Should a Crawl Space Be?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            The target crawl space humidity is below 60% relative humidity (RH) year-round. At 60% or above, mold can begin to activate on organic material like wood. Above 70%, conditions are highly favorable for wood-decay fungi.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 20,
              marginBottom: 28,
            }}
          >
            {[
              {
                range: 'Below 60% RH',
                label: 'Ideal',
                body: 'Mold cannot grow, wood stays stable, no condensation risk.',
                borderColor: '#16A34A',
              },
              {
                range: '60–70% RH',
                label: 'Caution Zone',
                body: 'Mold risk begins; dehumidifier recommended.',
                borderColor: '#F5A623',
              },
              {
                range: 'Above 70% RH',
                label: 'Active Problem',
                body: 'Mold growth likely; wood decay risk; immediate action needed.',
                borderColor: '#DC2626',
              },
            ].map((card) => (
              <div
                key={card.range}
                style={{
                  background: '#111827',
                  border: `2px solid ${card.borderColor}`,
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    font: "800 20px 'Barlow Condensed',sans-serif",
                    textTransform: 'uppercase' as const,
                    color: card.borderColor,
                    margin: '0 0 4px',
                  }}
                >
                  {card.range}
                </p>
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    color: '#9CA3AF',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '.08em',
                    margin: '0 0 10px',
                  }}
                >
                  {card.label}
                </p>
                <p style={{ fontSize: 14, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 760 }}>
            Kansas City summer outdoor humidity regularly hits 85–90% RH. Without active control, open or inadequately sealed crawl spaces reach problem levels within hours of a humid day.
          </p>
        </div>
      </section>

      {/* Why Household Dehumidifiers Don't Work */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
            Wrong Tool for the Job
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Why a Household Dehumidifier Isn't Right for a Crawl Space
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Capacity',
                body: 'Household units are rated for conditioned living space; crawl space moisture loads are typically much higher than the unit was designed for, causing it to run continuously without reaching target humidity.',
              },
              {
                title: 'Manual Emptying',
                body: 'Household units require you to empty a reservoir; in a crawl space, this means crawling under the home repeatedly. Commercial units auto-drain through a condensate line.',
              },
              {
                title: 'Operating Temperature',
                body: 'Household dehumidifiers reduce efficiency significantly below 65°F and may stop working in colder crawl space conditions; commercial units maintain performance across a wider temperature range.',
              },
              {
                title: 'Durability',
                body: 'Household units are designed for intermittent use; crawl space dehumidifiers operate continuously and are built for that duty cycle.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dehumidifier After Encapsulation */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Complete System
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            Do You Need a Dehumidifier After Encapsulating?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Yes, in most Kansas City crawl spaces. Encapsulation removes the largest sources of humidity — open vents and exposed soil — but ground moisture still evaporates through the liner over time, and there is always some residual air exchange. A correctly sized dehumidifier maintains the crawl space below 60% RH without running constantly.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14, maxWidth: 680 }}>
            {[
              'Sealed crawl spaces are far more energy-efficient to dehumidify than open ones',
              'A correctly sized unit runs in cycles, not continuously',
              'The combination of sealed space + dehumidifier is the gold standard for Kansas City crawl spaces',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Check color="#16A34A" size={18} />
                <span style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drainage First If Standing Water */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
            Important Distinction
          </p>
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
            A Dehumidifier Cannot Fix Standing Water
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            A crawl space dehumidifier controls humidity in the air — it cannot remove standing water from the floor. If water pools in the crawl space after rain, a sump pump and drainage system are needed first. Attempting to dehumidify a crawl space with active water entry is ineffective and can damage the unit.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(220,38,38,.4)',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 19,
                  textTransform: 'uppercase' as const,
                  color: '#DC2626',
                  margin: '0 0 10px',
                }}
              >
                Standing Water Present?
              </h3>
              <p style={{ fontSize: 15, color: '#D1D5DB', margin: '0 0 16px', lineHeight: 1.6 }}>
                Start with drainage and sump pump before adding a dehumidifier.
              </p>
              <Link
                href="/crawl-space-drainage-sump-pump-kansas-city/"
                style={{
                  color: '#F5A623',
                  font: "600 14px 'Inter',sans-serif",
                  textDecoration: 'none',
                }}
              >
                Drainage & Sump Pump →
              </Link>
            </div>
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(22,163,74,.4)',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 19,
                  textTransform: 'uppercase' as const,
                  color: '#16A34A',
                  margin: '0 0 10px',
                }}
              >
                Humidity Only, No Standing Water?
              </h3>
              <p style={{ fontSize: 15, color: '#D1D5DB', margin: '0 0 16px', lineHeight: 1.6 }}>
                Encapsulation + dehumidifier is the right path.
              </p>
              <Link
                href="/crawl-space-encapsulation-kansas-city/"
                style={{
                  color: '#F5A623',
                  font: "600 14px 'Inter',sans-serif",
                  textDecoration: 'none',
                }}
              >
                Crawl Space Encapsulation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Sizing
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            How We Size a Crawl Space Dehumidifier
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Dehumidifier capacity is measured in pints of water removed per day. A crawl space dehumidifier must be matched to the square footage of the space and the typical moisture load. Undersized units run continuously without reaching target humidity. Oversized units cost more upfront but cycle off appropriately once the space is dry.
          </p>
          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 12,
              padding: '24px 28px',
              maxWidth: 680,
            }}
          >
            <p
              style={{
                font: "700 13px 'Inter',sans-serif",
                letterSpacing: '.1em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                margin: '0 0 16px',
              }}
            >
              We Assess During the Free Inspection:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Crawl space square footage',
                'Typical humidity readings',
                'Whether encapsulation is in place',
                'Ground moisture level',
                'Discharge routing availability',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Check color="#16A34A" size={16} />
                  <span style={{ fontSize: 15, color: '#D1D5DB', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* Related Services */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
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
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Learn More
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 16,
            }}
          >
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '18px 20px',
                  textDecoration: 'none',
                  display: 'block',
                  color: '#1B3A6B',
                  font: "600 15px 'Inter',sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Crawl Space Dehumidifier FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {faqItems.map((item) => (
              <div
                key={item.q}
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
                    fontWeight: 800,
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
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
