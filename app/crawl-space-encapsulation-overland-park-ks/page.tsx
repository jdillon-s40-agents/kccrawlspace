import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Overland Park KS | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Overland Park, KS. Serving Corinth, Blue Valley, Indian Creek, Nall Hills, and all of Johnson County. Free inspection. Same-week service.',
};

function Check({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16A34A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const services = [
  { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
  { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Dehumidifier Installation', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
  { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
];

const faqs = [
  {
    q: 'Do you serve Overland Park, KS?',
    a: 'Yes. We serve all of Overland Park and Johnson County, KS, including neighborhoods from Corinth in north Overland Park to the Blue Valley area and south along Metcalf and Quivira. We serve all Overland Park ZIP codes.',
  },
  {
    q: 'My 1970s Overland Park ranch has a musty smell — is that the crawl space?',
    a: 'Very likely. Older Overland Park ranch homes frequently have open vents, inadequate old liners, or no liner at all. Summer humidity moves from the crawl space into the living area through the "stack effect," and musty odors are a primary symptom.',
  },
  {
    q: 'Does Overland Park have clay soil problems with crawl spaces?',
    a: 'Yes. Johnson County clay soil is expansive and holds moisture near foundations year-round. Even without rain, the soil under an Overland Park crawl space can maintain humidity conditions that damage wood framing and insulation over time.',
  },
  {
    q: 'How long does crawl space encapsulation take in Overland Park?',
    a: 'Most Overland Park encapsulation projects are completed in one day. Older north-side homes with larger crawl spaces or drainage issues may take two days.',
  },
  {
    q: 'Do you do crawl space work in south Overland Park near 135th or 151st?',
    a: 'Yes. We serve all of Overland Park, including the Blue Valley area, the 135th Street corridor, and the newer neighborhoods south of 151st Street.',
  },
  {
    q: 'What does crawl space encapsulation cost in Overland Park?',
    a: 'Most Overland Park homes run $2,800–$5,500 for encapsulation with a liner and dehumidifier. We provide free inspections with written estimates before any work begins.',
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
          name: 'Crawl Space Encapsulation Overland Park KS',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-overland-park-ks/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      '@id': 'https://crawlspacekc.com/#business',
      url: 'https://crawlspacekc.com',
      telephone: '+18169622111',
      priceRange: '$$-$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Overland Park',
        addressRegion: 'KS',
        addressCountry: 'US',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Overland Park',
          containedInPlace: { '@type': 'State', name: 'Kansas' },
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Overland Park',
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Overland Park' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, vent sealing, and commercial dehumidifier for Overland Park, KS homeowners.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function OverlandParkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 14px',
            }}
          >
            Overland Park, KS
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
            Crawl Space Encapsulation in{' '}
            <span style={{ color: '#F5A623' }}>Overland Park</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,18px)',
              color: '#9CA3AF',
              maxWidth: 680,
              margin: '0 0 36px',
              lineHeight: 1.65,
            }}
          >
            Overland Park&apos;s older north-side neighborhoods and 1970s–90s ranch homes sit on
            Johnson County clay soil that holds moisture year-round. We help homeowners across all
            of Overland Park — from Corinth to Blue Valley — keep crawl spaces dry and protected.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#inspection-form"
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
            </a>
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
        </div>
      </section>

      {/* ── 2. QUICK ANSWER ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
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
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Encapsulation in Overland Park, KS
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Overland Park seals the crawl space against moisture from
            Johnson County clay soil and summer humidity. Older homes in north Overland Park and
            1970s–80s ranch-style properties are particularly prone to humidity buildup, musty
            odors, falling insulation, and mold on wood framing without a sealed, dehumidified
            crawl space.
          </p>
        </div>
      </section>

      {/* ── 3. WHY OVERLAND PARK HOMES HAVE PROBLEMS ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Local Context
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Why Overland Park Crawl Spaces Develop Moisture Problems
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
                title: 'Johnson County Clay Soil',
                body: 'Overland Park and all of Johnson County sit on expansive clay soil. This clay holds moisture near the foundation and causes consistent humidity conditions in the crawl space regardless of rainfall — even in dry summers.',
              },
              {
                title: 'Older North-Side Ranch Homes',
                body: 'Many Overland Park homes north of I-435 were built in the 1960s–1980s with open foundation vents and minimal vapor barriers. These homes often have outdated 6-mil plastic or no liner at all, inadequate for Kansas City\'s humid summers.',
              },
              {
                title: 'Humid Kansas City Summers',
                body: 'Johnson County summers regularly reach 85–90% relative humidity. Open vents in older Overland Park homes allow this air into the crawl space, raising humidity above the mold threshold rapidly. A sealed crawl space with a commercial dehumidifier maintains safe humidity year-round.',
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
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            What We Do
          </p>
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
            Services We Offer in Overland Park
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 16,
            }}
          >
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '20px 22px',
                  textDecoration: 'none',
                  borderLeft: '4px solid #e5e7eb',
                  transition: 'border-left-color .2s',
                }}
              >
                <span
                  style={{
                    font: "700 15px 'Inter',sans-serif",
                    color: '#0D0D0D',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  {svc.label}
                </span>
                <span
                  style={{
                    font: "500 13px 'Inter',sans-serif",
                    color: '#1B3A6B',
                  }}
                >
                  View service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AREAS WE SERVE ── */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Coverage Area
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 16px',
            }}
          >
            Areas We Serve in Overland Park
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.75)', margin: '0 0 28px', lineHeight: 1.65 }}>
            We serve homeowners throughout all of Overland Park and Johnson County — from the
            established north-side neighborhoods to the newer south Overland Park developments.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Corinth',
              'Blue Valley',
              'Indian Creek',
              'Nall Hills',
              'Roe Avenue Corridor',
              'Quivira Area',
              'College Blvd Corridor',
              'Metcalf Corridor',
              '135th Street Area',
              '151st Street Area',
            ].map((area) => (
              <span
                key={area}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 8,
                  padding: '8px 14px',
                  font: "500 14px 'Inter',sans-serif",
                  color: '#fff',
                }}
              >
                {area}
              </span>
            ))}
          </div>
          <p style={{ font: "600 14px 'Inter',sans-serif", color: 'rgba(255,255,255,.6)', margin: 0 }}>
            ZIP Codes Served:{' '}
            <span style={{ color: '#F5A623' }}>
              66204 &bull; 66207 &bull; 66210 &bull; 66212 &bull; 66213 &bull; 66214 &bull; 66221
              &bull; 66223 &bull; 66251
            </span>
          </p>
        </div>
      </section>

      {/* ── 6. OUR PROCESS ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Our Process
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
                step: '01',
                title: 'Free Inspection',
                body: 'We visit your Overland Park home, assess crawl space conditions, measure humidity, inspect the liner and wood framing, and provide a written estimate with no obligation.',
              },
              {
                step: '02',
                title: 'Custom Solution',
                body: 'We design a moisture control plan for your specific home — encapsulation only, or a full system with drainage and dehumidifier if drainage issues are present.',
              },
              {
                step: '03',
                title: 'Expert Installation',
                body: 'Most Overland Park jobs are completed in a single day. We clean up fully and walk you through the installed system before leaving.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    font: "800 36px 'Barlow Condensed',sans-serif",
                    color: '#F5A623',
                    marginBottom: 10,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
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
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINANCING ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
              textAlign: 'center',
            }}
          >
            Flexible Payment
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
              textAlign: 'center',
            }}
          >
            Financing Options Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
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
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Common Questions from Overland Park Homeowners
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
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
                    fontSize: 18,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA FORM ── */}
      <section
        id="inspection-form"
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
              Get a Free Crawl Space Estimate in Overland Park
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>
              No obligation. Same-week inspections available.
            </p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
