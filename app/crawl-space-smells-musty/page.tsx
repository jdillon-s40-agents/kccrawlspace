import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Smells Musty | Causes & Fix for Kansas City Homes' },
  description: 'Musty crawl space smell means excess moisture, mold or wet insulation. Learn the causes and how Kansas City homeowners get rid of the odor for good.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-smells-musty/',
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
    question: "Why does my house smell musty but I can't find mold?",
    answer:
      'The source may be in the crawl space. Musty-smelling air can travel from the crawl space into the living area through gaps in the subfloor. You may not see mold or moisture in the living area even if the source is significant.',
  },
  {
    question: 'Will a musty crawl space smell go away on its own?',
    answer:
      'Rarely. Musty odors are caused by ongoing moisture conditions. Without fixing the moisture source, the smell tends to worsen in warm, humid months when crawl space humidity is highest.',
  },
  {
    question: 'Can a dehumidifier get rid of musty crawl space smell?',
    answer:
      'A dehumidifier helps by reducing the humidity that allows mold and bacteria to grow. It is most effective after the crawl space is sealed and after any existing mold or wet insulation is addressed.',
  },
  {
    question: 'Is a musty crawl space smell dangerous?',
    answer:
      'We do not make medical claims. A persistent musty smell is a reliable sign of a moisture or mold problem that should be corrected. We recommend a crawl space inspection to identify the source.',
  },
  {
    question: 'How do I know if musty smell is coming from the crawl space?',
    answer:
      'Open the crawl space access and check for standing water, wet soil, fallen insulation, or visible mold on joists. If the smell is noticeably stronger at floor level or near the access panel, the crawl space is likely the source.',
  },
  {
    question: 'What does musty crawl space smell like?',
    answer:
      'Most people describe it as earthy, damp, or like an old basement. The smell tends to be more noticeable in warm, humid weather when moisture is actively evaporating.',
  },
  {
    question: 'How much does it cost to fix a musty crawl space in Kansas City?',
    answer:
      'Cost depends on the cause. Basic encapsulation starts around $2,800–$3,500. A complete system with mold treatment and dehumidifier typically runs $4,500–$5,500. An inspection is needed for exact pricing.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Smells Musty',
          item: 'https://crawlspacekc.com/crawl-space-smells-musty/',
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
      name: 'Crawl Space Moisture Control',
      serviceType: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Crawl space moisture control and encapsulation services for Kansas City homes with musty odors, wet insulation, mold, or high humidity.',
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
};

export default function CrawlSpaceSmellsMustyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            Musty Crawl Space Odor
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
            Your Crawl Space{' '}
            <span style={{ color: '#F5A623' }}>Smells Musty</span> — Here&rsquo;s Why
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,19px)',
              color: '#9CA3AF',
              margin: '0 0 32px',
              maxWidth: 620,
              lineHeight: 1.65,
            }}
          >
            A musty smell from the crawl space is a moisture signal. It means damp soil, wet
            insulation, mold, or high humidity is present — and because of how air moves in homes,
            that smell is coming upstairs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
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
                border: '2px solid rgba(255,255,255,.2)',
                color: '#fff',
                font: "700 16px 'Inter',sans-serif",
                padding: '14px 26px',
                borderRadius: 10,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
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
            Quick Answer
          </p>
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
            Why Does a Crawl Space Smell Musty?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#4b5563',
              margin: '0 0 32px',
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            A musty crawl space smell usually means there is excess moisture, damp soil, mold
            growth, wet insulation, poor air sealing, or high humidity under the home. Because
            crawl space air can move into the living area, the smell should be investigated and
            corrected at the moisture source.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
              gap: 14,
            }}
          >
            {[
              'Damp or wet soil under the home',
              'Wet or falling insulation holding moisture',
              'Mold or mildew growth on wood framing',
              'High humidity from open crawl space vents',
              'Standing water or poor drainage',
              'Old, deteriorated vapor barrier',
            ].map((cause) => (
              <div
                key={cause}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <XMark size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{cause}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Stack Effect */}
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
            Stack Effect
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
            Why Your Crawl Space Air Comes Into Your Home
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#9CA3AF',
              margin: '0 0 32px',
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            In most homes, warm air rises and escapes through the attic and upper floors. This
            creates negative pressure at the bottom of the house that draws crawl space air upward
            through gaps in the subfloor, around pipes, and through poorly sealed areas. Studies
            suggest that up to 40–50% of first-floor air in a home with a vented crawl space
            originates in the crawl space. When that air carries moisture, mold spores, or odor, it
            moves into the living area.
          </p>

          {/* Flow diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexWrap: 'wrap' as const,
              marginBottom: 32,
            }}
          >
            {['CRAWL SPACE', 'gaps in subfloor', 'FIRST FLOOR', 'UPPER FLOORS'].map(
              (label, i, arr) => (
                <div
                  key={label}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div
                    style={{
                      background: i === 0 ? '#111827' : i === arr.length - 1 ? '#1B3A6B' : '#1a1a2e',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(245,166,35,.4)' : 'rgba(255,255,255,.12)'}`,
                      borderRadius: 8,
                      padding: '10px 16px',
                      color: i % 2 === 0 ? '#F5A623' : '#9CA3AF',
                      font: `${i % 2 === 0 ? '700' : '500'} 13px 'Inter',sans-serif`,
                      textTransform: i % 2 === 0 ? ('uppercase' as const) : ('none' as const),
                      letterSpacing: i % 2 === 0 ? '.08em' : 'normal',
                      whiteSpace: 'nowrap' as const,
                    }}
                  >
                    {label}
                  </div>
                  {i < arr.length - 1 && (
                    <span style={{ color: '#F5A623', fontSize: 20, fontWeight: 700 }}>→</span>
                  )}
                </div>
              )
            )}
          </div>

          <div
            style={{
              border: '1px solid rgba(245,166,35,.3)',
              background: 'rgba(245,166,35,.08)',
              borderRadius: 10,
              padding: '14px 18px',
              maxWidth: 560,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#F5A623',
                font: "600 14px 'Inter',sans-serif",
                lineHeight: 1.5,
              }}
            >
              Air fresheners and fans address the symptom. Moisture control addresses the cause.
            </p>
          </div>
        </div>
      </section>

      {/* Wet Insulation */}
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
            Common Cause
          </p>
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
            Wet Insulation Is a Major Source of Musty Crawl Space Odor
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#4b5563',
              margin: '0 0 28px',
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            Fiberglass batt insulation installed between floor joists absorbs and holds moisture
            when crawl space humidity is high or when water enters. Wet insulation loses its
            R-value, stays damp for long periods, and becomes a growing medium for mold and
            bacteria. As the insulation decays, it creates persistent musty odors that travel
            upward into the home.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: 12,
              marginBottom: 28,
            }}
          >
            {[
              'Insulation sagging or hanging down from joists',
              'Discolored or stained batt material',
              'Persistent musty smell even in dry weather',
            ].map((sign) => (
              <div
                key={sign}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <Check color="#16A34A" size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: '#FEF9C3',
              border: '1px solid #FDE047',
              borderRadius: 10,
              padding: '14px 18px',
              marginBottom: 20,
              maxWidth: 620,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#713F12',
                font: "600 14px 'Inter',sans-serif",
                lineHeight: 1.5,
              }}
            >
              Wet or fallen insulation is typically removed before encapsulation. Installing a vapor
              barrier over wet insulation does not fix the problem.
            </p>
          </div>
          <Link
            href="/crawl-space-insulation-removal-kansas-city/"
            style={{ color: '#1B3A6B', fontSize: 15, fontWeight: 600, textDecoration: 'underline' }}
          >
            Learn about crawl space insulation removal →
          </Link>
        </div>
      </section>

      {/* Mold Concerns */}
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
            Mold & Odor
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Mold and Musty Odors in Kansas City Crawl Spaces
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#CBD5E1',
              margin: '0 0 20px',
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            Musty odors are often the first sign of mold growth in a crawl space. Common locations
            include the bottom of floor joists, the subfloor, wood blocking, and sill plates near
            the foundation wall. White mold (often Aspergillus or Penicillium species) and dark
            mold both produce musty-smelling compounds called microbial volatile organic compounds
            (MVOCs) as they grow.
          </p>
          <div
            style={{
              background: '#0D0D0D',
              border: '1px solid rgba(255,255,255,.1)',
              borderRadius: 12,
              padding: '18px 22px',
              marginBottom: 28,
              maxWidth: 680,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#9CA3AF',
                fontSize: 14,
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}
            >
              Mold in a crawl space may contribute to indoor air quality concerns and musty odors in
              the living area. We recommend inspection and moisture control as the appropriate
              response.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: 12,
              marginBottom: 28,
            }}
          >
            {[
              'Mold requires moisture, oxygen, and an organic food source (wood) — crawl spaces provide all three',
              'Treating mold without fixing moisture will result in recurrence',
              'Encapsulation and dehumidification address the conditions that allow mold to grow',
            ].map((point) => (
              <div
                key={point}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  background: 'rgba(0,0,0,.25)',
                  borderRadius: 10,
                  padding: '12px 16px',
                }}
              >
                <Check color="#F5A623" size={16} />
                <span style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.5 }}>{point}</span>
              </div>
            ))}
          </div>
          <Link
            href="/crawl-space-mold-kansas-city/"
            style={{ color: '#F5A623', fontSize: 15, fontWeight: 600, textDecoration: 'underline' }}
          >
            Learn more about crawl space mold in Kansas City →
          </Link>
        </div>
      </section>

      {/* Solutions */}
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
            The Fix
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 36px',
            }}
          >
            How to Get Rid of Musty Crawl Space Smell
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
              gap: 16,
            }}
          >
            {[
              {
                num: '01',
                title: 'Crawl space inspection',
                body: 'Identify the moisture source: damp soil, water entry, wet insulation, mold, or humidity from open vents.',
              },
              {
                num: '02',
                title: 'Water control if needed',
                body: 'Drainage corrections or sump pump before sealing the space.',
              },
              {
                num: '03',
                title: 'Insulation removal and mold treatment',
                body: 'Wet insulation removed; visible mold on framing treated before liner installation.',
              },
              {
                num: '04',
                title: 'Encapsulation + dehumidifier',
                body: '20-mil vapor barrier seals ground moisture; dehumidifier controls ongoing humidity below 60%; sealed vents stop humid outdoor air from entering.',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p
                  style={{
                    font: "800 36px 'Barlow Condensed',sans-serif",
                    color: 'rgba(245,166,35,.3)',
                    margin: '0 0 8px',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </p>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>
                  {step.body}
                </p>
              </div>
            ))}
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
            More Services
          </p>
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
            Related Services
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
              gap: 14,
            }}
          >
            {[
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Crawl Space Mold KC', href: '/crawl-space-mold-kansas-city/' },
              { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
              { label: 'Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
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
              margin: '0 0 32px',
            }}
          >
            Musty Crawl Space FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
            {faqItems.map((faq) => (
              <div
                key={faq.question}
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
                  {faq.question}
                </h3>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section
        style={{
          background: '#111827',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
    </div>
  );
}
