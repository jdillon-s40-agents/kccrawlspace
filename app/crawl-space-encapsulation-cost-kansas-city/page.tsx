import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Cost Kansas City | Honest Pricing' },
  description: 'How much does crawl space encapsulation cost in Kansas City? See honest pricing by size, moisture level & liner type. Financing from $74/mo. Free estimate.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-cost-kansas-city/',
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

const faqData = [
  {
    question: 'Is crawl space encapsulation worth the money?',
    answer:
      'Yes, for most Kansas City homes. Encapsulation reduces moisture, musty odors, mold risk, pest entry, and energy loss. Homes with encapsulated crawl spaces typically report lower humidity indoors, better air quality, and lower heating and cooling costs.',
  },
  {
    question: 'How much does a crawl space vapor barrier cost?',
    answer:
      'A basic vapor barrier installation in Kansas City typically starts around $2,800–$3,500 for most homes. This includes material, seam taping, and vent sealing but not a dehumidifier or drainage system.',
  },
  {
    question: 'Does homeowners insurance cover crawl space encapsulation?',
    answer:
      'Typically no — encapsulation is considered preventive maintenance. If a sudden water event caused crawl space damage, some coverage may apply. We provide documentation to support insurance claims when relevant.',
  },
  {
    question: 'Can I finance crawl space encapsulation?',
    answer:
      'Yes. We offer financing options starting from $48/mo for qualified borrowers through our lending partners. Ask about current terms at your free inspection.',
  },
  {
    question: 'How much does a crawl space dehumidifier add to the cost?',
    answer:
      'A commercial crawl space dehumidifier typically adds $1,200–$1,800 to the project cost depending on the unit and drainage setup. It is included in our Complete and Full System packages.',
  },
  {
    question: 'How much does crawl space drainage or sump pump add?',
    answer:
      'Interior drainage systems and sump pump installation typically add $1,500–$3,000+ depending on linear footage and discharge needs. This is only needed when water actively collects under the home.',
  },
  {
    question: 'What is the cheapest way to fix a wet crawl space?',
    answer:
      'The right solution depends on why the crawl space is wet. Simple grading and downspout corrections may help at low cost. A vapor barrier addresses damp soil. Active water intrusion requires drainage and possibly a sump pump. We assess during the free inspection and recommend only what is needed.',
  },
  {
    question: 'Do you charge for the inspection?',
    answer:
      'No. Inspections are free with no obligation. We document the crawl space, explain what we find, and provide a written quote. You decide whether to proceed.',
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
          name: 'Crawl Space Encapsulation Cost Kansas City',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-cost-kansas-city/',
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
      name: 'Crawl Space Encapsulation',
      serviceType: 'Crawl Space Moisture Control',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Professional crawl space encapsulation services in Kansas City including vapor barrier installation, vent sealing, dehumidifier installation, and drainage systems.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export default function CrawlSpaceEncapsulationCostPage() {
  return (
    <main>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* HERO */}
        <section style={{ background: '#0D0D0D', padding: 'clamp(72px,10vw,108px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                marginBottom: 18,
              }}
            >
              Pricing &amp; Financing
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
              Crawl Space Encapsulation Cost{' '}
              <span style={{ color: '#F5A623' }}>in Kansas City</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(16px,2vw,19px)',
                color: '#9CA3AF',
                maxWidth: 680,
                margin: '0 0 36px',
                lineHeight: 1.65,
              }}
            >
              Honest pricing for Kansas City crawl space work. Cost depends on your crawl space&apos;s
              size, condition, and what problems need to be fixed — not a one-size price.
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
              <Link
                href="#financing"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  font: "700 16px 'Inter',sans-serif",
                  padding: '15px 26px',
                  borderRadius: 10,
                  border: '2px solid rgba(255,255,255,.2)',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                See Financing Options
              </Link>
              <a
                href={PHONE_HREF}
                style={{
                  color: '#F5A623',
                  font: "700 16px 'Inter',sans-serif",
                  textDecoration: 'none',
                }}
              >
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#1B3A6B',
                marginBottom: 14,
              }}
            >
              Cost Overview
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px,5vw,46px)',
                textTransform: 'uppercase' as const,
                color: '#0D0D0D',
                margin: '0 0 24px',
              }}
            >
              How Much Does Crawl Space Encapsulation Cost in Kansas City?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#4b5563',
                lineHeight: 1.7,
                margin: '0 0 32px',
                maxWidth: 820,
              }}
            >
              Crawl space encapsulation in Kansas City commonly varies based on crawl space size,
              condition, water issues, drainage needs, vapor barrier thickness, insulation removal,
              mold concerns, and whether a dehumidifier or sump pump is needed. A basic vapor barrier
              costs less, while a full moisture-control system costs more and requires an inspection
              for accurate pricing.
            </p>
            <div
              style={{
                border: '2px solid #F5A623',
                borderRadius: 12,
                padding: '24px 28px',
                background: '#fff',
                maxWidth: 720,
              }}
            >
              <p
                style={{
                  font: "600 13px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: '#F5A623',
                  margin: '0 0 10px',
                }}
              >
                Important Note
              </p>
              <p style={{ fontSize: 16, color: '#0D0D0D', lineHeight: 1.6, margin: 0 }}>
                We provide written, itemized quotes before any work begins. You will never be
                surprised by the final bill.
              </p>
            </div>
          </div>
        </section>

        {/* COST TIERS */}
        <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                marginBottom: 14,
                textAlign: 'center',
              }}
            >
              Price Ranges
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px,5vw,46px)',
                textTransform: 'uppercase' as const,
                color: '#fff',
                margin: '0 0 48px',
                textAlign: 'center',
              }}
            >
              Typical Crawl Space Encapsulation Price Ranges
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
                gap: 24,
                marginBottom: 36,
              }}
            >
              {/* Essential */}
              <div
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 14,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#9CA3AF',
                    margin: '0 0 12px',
                  }}
                >
                  Essential
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 42,
                    color: '#fff',
                    margin: '0 0 4px',
                    lineHeight: 1,
                  }}
                >
                  $2,800–$3,500
                </p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 28px' }}>
                  Most homes under 1,000 sq ft
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    '20-mil vapor barrier',
                    'Vent sealing & seam taping',
                    'Written moisture report',
                    'Lifetime warranty',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#D1D5DB' }}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: 13,
                    color: '#9CA3AF',
                    lineHeight: 1.5,
                    marginTop: 'auto',
                    padding: '16px 0 0',
                    borderTop: '1px solid rgba(255,255,255,.08)',
                  }}
                >
                  <strong style={{ color: '#fff' }}>Best for:</strong> crawl spaces with damp soil,
                  no standing water or mold.
                </p>
              </div>

              {/* Complete */}
              <div
                style={{
                  background: '#161616',
                  border: '2px solid #F5A623',
                  borderRadius: 14,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#F5A623',
                    color: '#0D0D0D',
                    font: "700 12px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    padding: '4px 14px',
                    borderRadius: 20,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </span>
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 12px',
                  }}
                >
                  Complete
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 42,
                    color: '#fff',
                    margin: '0 0 4px',
                    lineHeight: 1,
                  }}
                >
                  $4,500–$5,500
                </p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 28px' }}>
                  Financing from $68/mo
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Everything in Essential',
                    'Mold treatment of framing',
                    'Insulation removal if needed',
                    'Commercial dehumidifier',
                    'Financing from $68/mo',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#D1D5DB' }}>
                      <Check color="#F5A623" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: 13,
                    color: '#9CA3AF',
                    lineHeight: 1.5,
                    marginTop: 'auto',
                    padding: '16px 0 0',
                    borderTop: '1px solid rgba(255,255,255,.08)',
                  }}
                >
                  <strong style={{ color: '#fff' }}>Best for:</strong> most Kansas City homes with
                  humidity, musty smells, or falling insulation.
                </p>
              </div>

              {/* Full System */}
              <div
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 14,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#9CA3AF',
                    margin: '0 0 12px',
                  }}
                >
                  Full System
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 42,
                    color: '#fff',
                    margin: '0 0 4px',
                    lineHeight: 1,
                  }}
                >
                  $6,500–$9,000+
                </p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 28px' }}>
                  Active water intrusion present
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Everything in Complete',
                    'Interior drainage system',
                    'Sump pump installation',
                    'Drainage matting',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#D1D5DB' }}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: 13,
                    color: '#9CA3AF',
                    lineHeight: 1.5,
                    marginTop: 'auto',
                    padding: '16px 0 0',
                    borderTop: '1px solid rgba(255,255,255,.08)',
                  }}
                >
                  <strong style={{ color: '#fff' }}>Best for:</strong> crawl spaces with active
                  water intrusion after rain.
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                color: '#6B7280',
                textAlign: 'center',
                lineHeight: 1.6,
                maxWidth: 680,
                margin: '0 auto',
              }}
            >
              These are typical ranges. Your exact quote depends on square footage, access difficulty,
              and condition found during inspection.
            </p>
          </div>
        </section>

        {/* COST FACTORS */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#1B3A6B',
                marginBottom: 14,
              }}
            >
              Pricing Variables
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px,5vw,46px)',
                textTransform: 'uppercase' as const,
                color: '#0D0D0D',
                margin: '0 0 48px',
              }}
            >
              What Affects the Cost?
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
                  title: 'Crawl Space Size',
                  body: 'Larger spaces require more liner material and labor. Square footage is one of the biggest drivers of total project cost.',
                },
                {
                  title: 'Standing Water',
                  body: 'Active water intrusion requires drainage work before encapsulation can proceed. Water must be controlled first.',
                },
                {
                  title: 'Drainage System',
                  body: 'An interior drain channel and discharge pipe adds cost but is necessary when gravity alone cannot remove water.',
                },
                {
                  title: 'Sump Pump',
                  body: 'Sump basin and pump installation varies by complexity, number of discharge points, and how far water must be moved.',
                },
                {
                  title: 'Vapor Barrier Thickness',
                  body: '6-mil vs 10-mil vs 20-mil materials have significantly different costs and long-term durability under real conditions.',
                },
                {
                  title: 'Insulation Removal',
                  body: 'Wet, moldy, or fallen insulation must be removed and disposed of properly before the liner can be installed.',
                },
                {
                  title: 'Mold Treatment',
                  body: 'Joists and framing with visible mold require treatment before the liner is installed. Extent of mold affects cost.',
                },
                {
                  title: 'Dehumidifier',
                  body: 'Commercial crawl space dehumidifiers are sized to the space and include internal or external drainage connections.',
                },
              ].map((factor) => (
                <div
                  key={factor.title}
                  style={{
                    background: '#1a1a1a',
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
                    {factor.title}
                  </p>
                  <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                    {factor.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHEAP FAILS */}
        <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                marginBottom: 14,
              }}
            >
              Buyer Beware
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px,5vw,46px)',
                textTransform: 'uppercase' as const,
                color: '#fff',
                margin: '0 0 12px',
              }}
            >
              Why the Lowest Bid Is Often the Most Expensive Choice
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.7)', maxWidth: 680, margin: '0 0 40px', lineHeight: 1.65 }}>
              Low-price crawl space encapsulation frequently cuts corners that lead to failure within a few years.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
                gap: 20,
                marginBottom: 36,
              }}
            >
              {[
                {
                  title: 'Thin Plastic Tears',
                  body: 'Thin 6-mil plastic tears easily and allows moisture through seams. It degrades quickly and offers minimal long-term protection.',
                },
                {
                  title: 'Unsealed Walls & Vents',
                  body: 'Unsealed walls and vents let humid outdoor air continue entering the crawl space, making the liner nearly ineffective.',
                },
                {
                  title: 'No Dehumidifier',
                  body: 'No dehumidifier leaves humidity uncontrolled in a sealed space. Moisture has nowhere to go and can worsen mold conditions.',
                },
                {
                  title: 'No Written Warranty',
                  body: 'No written warranty means no protection if problems return. You have no recourse if the work fails in year two or three.',
                },
              ].map((warning) => (
                <div
                  key={warning.title}
                  style={{
                    background: 'rgba(255,255,255,.07)',
                    border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 12,
                    padding: '24px 22px',
                  }}
                >
                  <p
                    style={{
                      font: "700 15px 'Inter',sans-serif",
                      color: '#fff',
                      margin: '0 0 10px',
                    }}
                  >
                    {warning.title}
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, margin: 0 }}>
                    {warning.body}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,.6)',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              A properly installed system lasts 20–30 years. A cheap installation may need to be
              fully redone within 5 years.
            </p>
          </div>
        </section>

        {/* FINANCING */}
        <section
          id="financing"
          style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}
        >
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                marginBottom: 14,
                textAlign: 'center',
              }}
            >
              Payment Options
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px,5vw,44px)',
                textTransform: 'uppercase' as const,
                color: '#fff',
                margin: '0 0 36px',
                textAlign: 'center',
              }}
            >
              Financing Available — Payments From $68/mo
            </h2>
            <FinancingOptions />
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                marginBottom: 14,
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px,5vw,46px)',
                textTransform: 'uppercase' as const,
                color: '#fff',
                margin: '0 0 48px',
              }}
            >
              Crawl Space Encapsulation Cost FAQ
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqData.map((faq) => (
                <div
                  key={faq.question}
                  style={{
                    background: 'rgba(255,255,255,.07)',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderRadius: 12,
                    padding: '24px 26px',
                  }}
                >
                  <p
                    style={{
                      font: "700 17px 'Inter',sans-serif",
                      color: '#fff',
                      margin: '0 0 10px',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.7, margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED RESOURCES */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#1B3A6B',
                marginBottom: 14,
              }}
            >
              Explore More
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(26px,4vw,40px)',
                textTransform: 'uppercase' as const,
                color: '#0D0D0D',
                margin: '0 0 36px',
              }}
            >
              Related Resources
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
                gap: 16,
              }}
            >
              {[
                {
                  label: 'Crawl Space Encapsulation KC',
                  href: '/crawl-space-encapsulation-kansas-city/',
                },
                { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
                {
                  label: 'Vapor Barrier KC',
                  href: '/crawl-space-vapor-barrier-kansas-city/',
                },
                {
                  label: 'Waterproofing KC',
                  href: '/crawl-space-waterproofing-kansas-city/',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    background: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: 10,
                    padding: '20px 22px',
                    textDecoration: 'none',
                    color: '#1B3A6B',
                    font: "700 15px 'Inter',sans-serif",
                    lineHeight: 1.4,
                    boxShadow: '0 1px 4px rgba(0,0,0,.06)',
                    transition: 'box-shadow .2s',
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FORM */}
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
      </div>
    </main>
  );
}
