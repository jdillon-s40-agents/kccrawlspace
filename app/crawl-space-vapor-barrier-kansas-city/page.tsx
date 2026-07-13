import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Vapor Barrier Kansas City | 6, 10 & 20-Mil Options' },
  description: 'Control ground moisture, musty odors & humidity in your Kansas City crawl space. Vapor barrier installation with 6, 10 & 20-mil liner options. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-vapor-barrier-kansas-city/',
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
    question: 'What is a crawl space vapor barrier?',
    answer:
      'A vapor barrier is a plastic or reinforced liner installed on the crawl space floor to reduce moisture evaporation from exposed soil. It is one part of a complete moisture-control system.',
  },
  {
    question: 'Is 6-mil plastic enough for a crawl space?',
    answer:
      'Typically no. Six-mil plastic is thin and tears easily, especially in crawl spaces that need to be accessed for maintenance. A 20-mil reinforced liner provides far better long-term performance.',
  },
  {
    question: 'Should the crawl space walls be covered too?',
    answer:
      'Yes, in most cases. Covering walls in addition to the floor significantly improves moisture control and is required for full encapsulation. A floor-only barrier leaves a major moisture pathway uncovered.',
  },
  {
    question: 'Does a vapor barrier stop mold?',
    answer:
      'A vapor barrier reduces the ground moisture that contributes to mold growth, but it does not address humidity from outdoor air entering through vents. A complete system — sealed vents and a dehumidifier — is more effective for ongoing mold control.',
  },
  {
    question: 'How long does a vapor barrier last?',
    answer:
      'A 20-mil reinforced liner is designed to last 20–25 years under normal conditions. Thinner materials degrade more quickly, especially if damaged during crawl space access.',
  },
  {
    question: 'Can I install a vapor barrier myself?',
    answer:
      'Technically yes, but homeowners often underestimate the difficulty of properly sealing seams, covering walls, and sealing vents. An improperly installed barrier may leave gaps that allow moisture to continue entering.',
  },
  {
    question: 'What is the difference between a vapor barrier and encapsulation?',
    answer:
      'A vapor barrier usually covers just the floor. Full encapsulation covers the floor and walls, seals vents, and adds a dehumidifier to actively control humidity. Encapsulation is a more complete moisture-control system.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Vapor Barrier Kansas City',
          item: 'https://www.crawlspacekc.com/crawl-space-vapor-barrier-kansas-city/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://www.crawlspacekc.com',
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
      name: 'Crawl Space Vapor Barrier Installation',
      serviceType: 'Crawl Space Moisture Control',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Professional crawl space vapor barrier installation in Kansas City using 20-mil reinforced liner with wall coverage, seam taping, and vent sealing.',
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

export default function CrawlSpaceVaporBarrierPage() {
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
              Vapor Barrier Installation
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
              Crawl Space Vapor Barrier{' '}
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
              A properly installed crawl space vapor barrier controls ground moisture, reduces musty
              odors, and protects wood framing from damp soil. We install 20-mil reinforced liners
              with seam taping and wall coverage.
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
                href="/crawl-space-encapsulation-kansas-city/"
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
                See Full Encapsulation
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
              What It Does
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
              What Does a Crawl Space Vapor Barrier Do?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: '#4b5563',
                lineHeight: 1.7,
                margin: '0 0 36px',
                maxWidth: 820,
              }}
            >
              A crawl space vapor barrier covers the ground and helps reduce ground moisture from
              entering the crawl space air. A properly installed vapor barrier can help control
              humidity, musty odors, mold risk, and damp soil, but wet crawl spaces may also need
              drainage, sump pumps, air sealing, or a dehumidifier.
            </p>
            <div>
              <p
                style={{
                  font: "700 15px 'Inter',sans-serif",
                  color: '#0D0D0D',
                  margin: '0 0 18px',
                }}
              >
                Signs you may need a vapor barrier:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Damp or muddy crawl space floor',
                  'Musty smell in home or crawl space',
                  'High humidity in crawl space',
                  'Wet or sagging insulation',
                  'Mold concerns on joists',
                  'Inspection or home sale flagged crawl space moisture',
                ].map((item) => (
                  <li
                    key={item}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#4b5563' }}
                  >
                    <Check color="#1B3A6B" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* VAPOR BARRIER VS ENCAPSULATION */}
        <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#F5A623',
                marginBottom: 14,
              }}
            >
              Comparison
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
              Vapor Barrier vs Full Crawl Space Encapsulation
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
                gap: 24,
                marginBottom: 36,
              }}
            >
              {/* Vapor Barrier Only */}
              <div
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 14,
                  padding: '32px 28px',
                }}
              >
                <p
                  style={{
                    font: "700 14px 'Inter',sans-serif",
                    letterSpacing: '.08em',
                    textTransform: 'uppercase' as const,
                    color: '#9CA3AF',
                    margin: '0 0 20px',
                  }}
                >
                  Vapor Barrier Only
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Floor covered only',
                    'Walls exposed',
                    'Vents remain open',
                    'No dehumidifier',
                    'Basic moisture reduction',
                    'Lower initial cost',
                    'May not fully control humidity or odors',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#D1D5DB' }}
                    >
                      <Check color="#6B7280" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Encapsulation */}
              <div
                style={{
                  background: '#161616',
                  border: '2px solid #F5A623',
                  borderRadius: 14,
                  padding: '32px 28px',
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
                  Most Complete
                </span>
                <p
                  style={{
                    font: "700 14px 'Inter',sans-serif",
                    letterSpacing: '.08em',
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 20px',
                  }}
                >
                  Full Encapsulation
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Floor + walls covered',
                    'Vents sealed',
                    'Dehumidifier included',
                    'Active humidity control',
                    'Best for moisture, odors, mold',
                    'Lifetime warranty',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#D1D5DB' }}
                    >
                      <Check color="#F5A623" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p
              style={{
                fontSize: 15,
                color: '#9CA3AF',
                lineHeight: 1.65,
                marginBottom: 24,
                maxWidth: 740,
              }}
            >
              Most Kansas City homes with recurring moisture or musty odors benefit from full
              encapsulation rather than a floor-only liner.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link
                href="/crawl-space-encapsulation-kansas-city/"
                style={{
                  color: '#F5A623',
                  font: "700 15px 'Inter',sans-serif",
                  textDecoration: 'none',
                }}
              >
                Learn About Full Encapsulation →
              </Link>
              <Link
                href="/crawl-space-encapsulation-kansas-city/"
                style={{
                  color: '#9CA3AF',
                  font: "600 15px 'Inter',sans-serif",
                  textDecoration: 'none',
                }}
              >
                Encapsulation vs Vapor Barrier →
              </Link>
            </div>
          </div>
        </section>

        {/* MIL THICKNESS */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p
              style={{
                font: "600 13px 'Inter',sans-serif",
                letterSpacing: '.16em',
                textTransform: 'uppercase' as const,
                color: '#1B3A6B',
                marginBottom: 14,
              }}
            >
              Material Options
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
              Vapor Barrier Thickness: 6 mil vs 10 mil vs 20 mil
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
                gap: 20,
                marginBottom: 32,
              }}
            >
              {/* 6 mil */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '28px 24px',
                }}
              >
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    letterSpacing: '.08em',
                    textTransform: 'uppercase' as const,
                    color: '#6B7280',
                    margin: '0 0 10px',
                  }}
                >
                  6 Mil
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: '#0D0D0D',
                    margin: '0 0 14px',
                  }}
                >
                  6-mil Plastic
                </p>
                <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Thin and easily torn. Minimum code in some areas but not recommended for crawl
                  spaces that need to be entered for maintenance. Degrades quickly under real
                  conditions.
                </p>
              </div>

              {/* 10 mil */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '28px 24px',
                }}
              >
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    letterSpacing: '.08em',
                    textTransform: 'uppercase' as const,
                    color: '#6B7280',
                    margin: '0 0 10px',
                  }}
                >
                  10 Mil
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: '#0D0D0D',
                    margin: '0 0 14px',
                  }}
                >
                  10-mil Liner
                </p>
                <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Mid-grade. More durable than 6-mil and suitable for accessible crawl spaces with
                  minimal foot traffic, but still susceptible to puncture over time.
                </p>
              </div>

              {/* 20 mil */}
              <div
                style={{
                  background: '#fff',
                  border: '2px solid #F5A623',
                  borderRadius: 12,
                  padding: '28px 24px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#F5A623',
                    color: '#0D0D0D',
                    font: "700 11px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    padding: '4px 12px',
                    borderRadius: 20,
                    whiteSpace: 'nowrap',
                  }}
                >
                  What We Install
                </span>
                <p
                  style={{
                    font: "700 13px 'Inter',sans-serif",
                    letterSpacing: '.08em',
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  20 Mil Reinforced
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: '#0D0D0D',
                    margin: '0 0 14px',
                  }}
                >
                  20-mil Reinforced
                </p>
                <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Thick, puncture-resistant, designed for long-term performance and regular service
                  access. 25-year manufacturer warranty. The standard for professional crawl space
                  encapsulation.
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                color: '#6B7280',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              We only install 20-mil reinforced liner because it holds up to real-world crawl space
              conditions.
            </p>
          </div>
        </section>

        {/* INSTALLATION PROCESS */}
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
              Our Process
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
              How We Install a Crawl Space Vapor Barrier
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {[
                {
                  step: '01',
                  title: 'Free Inspection',
                  body: 'We check moisture levels, soil conditions, standing water, insulation condition, and access points before recommending a solution.',
                },
                {
                  step: '02',
                  title: 'Debris Removal',
                  body: 'Old insulation and debris are removed before liner installation. A clean surface is required for proper liner seating.',
                },
                {
                  step: '03',
                  title: 'Mold Treatment if Needed',
                  body: 'Joists and framing with visible mold are treated before the barrier goes in. We do not cover existing mold problems.',
                },
                {
                  step: '04',
                  title: '20-mil Liner Installation',
                  body: 'Floor and walls are lined. Seams are overlapped and taped. The liner is secured to walls with termination bar for a permanent seal.',
                },
                {
                  step: '05',
                  title: 'Vent Sealing',
                  body: 'Foundation vents are sealed to prevent humid outdoor air from entering. This step is critical to the liner actually working.',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  style={{
                    display: 'flex',
                    gap: 24,
                    alignItems: 'flex-start',
                    background: 'rgba(255,255,255,.07)',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderRadius: 12,
                    padding: '24px 26px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 28,
                      color: '#F5A623',
                      lineHeight: 1,
                      flex: 'none',
                      width: 44,
                    }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <p
                      style={{
                        font: "700 16px 'Inter',sans-serif",
                        color: '#fff',
                        margin: '0 0 8px',
                      }}
                    >
                      {s.title}
                    </p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.65, margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,.55)',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              When drainage or standing water is a concern, we address water control before
              installing the liner.
            </p>
          </div>
        </section>

        {/* COST */}
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
              Pricing
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
              Vapor Barrier Cost in Kansas City
            </h2>
            <div
              style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 14,
                padding: '32px 28px',
                marginBottom: 32,
                display: 'inline-block',
              }}
            >
              <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.1em', fontWeight: 600 }}>
                Typical Starting Range
              </p>
              <p
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 52,
                  color: '#0D0D0D',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                $2,800–$3,500
              </p>
              <p style={{ fontSize: 14, color: '#6B7280', margin: '8px 0 0' }}>
                for most Kansas City homes — basic vapor barrier installation
              </p>
            </div>
            <p
              style={{
                font: "700 15px 'Inter',sans-serif",
                color: '#0D0D0D',
                margin: '0 0 16px',
              }}
            >
              What affects your cost:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Crawl space size and square footage',
                'Access difficulty and clearance height',
                'Condition and moisture level at inspection',
                'Whether walls are included in coverage',
                'Insulation removal required',
                'Drainage or sump pump needed for water control',
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#4b5563' }}
                >
                  <Check color="#1B3A6B" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/crawl-space-encapsulation-cost-kansas-city/"
              style={{
                display: 'inline-block',
                color: '#1B3A6B',
                font: "700 15px 'Inter',sans-serif",
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              See full pricing breakdown for encapsulation packages →
            </Link>
          </div>
        </section>

        {/* FINANCING */}
        <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
              Financing Available
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
              Vapor Barrier FAQ
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

        {/* RELATED SERVICES */}
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
              Related Services
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
                  label: 'Waterproofing KC',
                  href: '/crawl-space-waterproofing-kansas-city/',
                },
                {
                  label: 'Encapsulation Cost KC',
                  href: '/crawl-space-encapsulation-cost-kansas-city/',
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
