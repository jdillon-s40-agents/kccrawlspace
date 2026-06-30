import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Crawl Space Encapsulation Lee's Summit MO | KC Crawl Space Specialists",
  description:
    "Crawl space encapsulation in Lee's Summit, MO. We serve Lakewood, Legacy, Downtown Lee's Summit, and all Jackson County neighborhoods. Free inspection. Same-week service.",
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
    q: "Do you serve Lee's Summit, MO?",
    a: "Yes. We serve all of Lee's Summit and the surrounding Jackson County area, including Lakewood, Legacy Park, Downtown Lee's Summit, and ZIP codes 64063, 64064, 64081, and 64082.",
  },
  {
    q: "Why does my Lee's Summit crawl space smell musty in summer?",
    a: "Jackson County clay soil and high summer humidity are the primary causes. When open vents allow 85–90% relative humidity summer air into the crawl space, conditions exceed the 60% RH mold threshold quickly. Encapsulation with a dehumidifier addresses this at the source.",
  },
  {
    q: 'My home near Lakewood has a wet crawl space after rain — what do I do?',
    a: 'Water pooling in the crawl space after rain typically means drainage, grading, or downspout issues are directing water toward the foundation. We assess whether interior drainage or a sump pump is needed before encapsulation work begins.',
  },
  {
    q: "How long does crawl space encapsulation take in Lee's Summit?",
    a: "Most Lee's Summit crawl space encapsulation projects are completed in one day. Larger crawl spaces, drainage system installation, or mold treatment may extend to two days.",
  },
  {
    q: "Does encapsulation help with cold floors in Lee's Summit?",
    a: "Yes. Sealing the crawl space and insulating the rim joist reduces cold air movement under the floor. Many Lee's Summit homeowners report improved floor comfort and lower heating bills after encapsulation.",
  },
  {
    q: "What does crawl space encapsulation cost in Lee's Summit?",
    a: "Most Lee's Summit homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Drainage or standing water situations add cost. We provide free inspections and written estimates.",
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
          name: "Crawl Space Encapsulation Lee's Summit MO",
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-lees-summit-mo/',
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
        addressLocality: "Lee's Summit",
        addressRegion: 'MO',
        addressCountry: 'US',
      },
      areaServed: [
        {
          '@type': 'City',
          name: "Lee's Summit",
          containedInPlace: { '@type': 'State', name: 'Missouri' },
        },
      ],
    },
    {
      '@type': 'Service',
      name: "Crawl Space Encapsulation in Lee's Summit",
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: "Lee's Summit" },
      description:
        "Complete crawl space encapsulation with 20-mil reinforced liner, vent sealing, and commercial dehumidifier for Lee's Summit, MO homeowners.",
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

export default function LeeSummitPage() {
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
            Lee&apos;s Summit, MO
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
            <span style={{ color: '#F5A623' }}>Lee&apos;s Summit</span>
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
            Lee&apos;s Summit homes sit on Jackson County clay soil that holds moisture year-round.
            Whether you&apos;re in Lakewood, the Legacy area, or near Downtown, our crawl space
            encapsulation keeps humidity, odors, and moisture under control.
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
            Crawl Space Encapsulation in Lee&apos;s Summit, MO
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Lee&apos;s Summit seals the crawl space floor, walls, and
            vents with a 20-mil reinforced liner, vent sealing, and a commercial dehumidifier.
            Jackson County clay soil holds moisture year-round, and Lee&apos;s Summit&apos;s mix of
            older and newer homes can develop humidity, musty odors, mold, and falling insulation
            without proper moisture control.
          </p>
        </div>
      </section>

      {/* ── 3. WHY LEE'S SUMMIT HOMES HAVE PROBLEMS ── */}
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
            Why Lee&apos;s Summit Crawl Spaces Need Moisture Control
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
                title: 'Jackson County Clay Soil',
                body: "Clay soil throughout Lee's Summit expands when wet and holds moisture close to the foundation. Unlike sandy soil that drains quickly, clay creates consistently damp conditions under the crawl space all year.",
              },
              {
                title: 'Mix of Older and Newer Homes',
                body: "Lee's Summit has housing stock ranging from 1950s brick ranches near Downtown to 1990s–2000s subdivisions in Lakewood and Legacy. Older homes often have unsealed vents and inadequate liners; newer homes in floodplain-adjacent areas may have unexpected drainage issues.",
              },
              {
                title: 'Missouri Summers',
                body: 'Kansas City metro summers regularly push 85–90% outdoor relative humidity. Open foundation vents in Lee\'s Summit homes allow this humid air into the crawl space, raising humidity above the 60% mold threshold within hours.',
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
            Services We Offer in Lee&apos;s Summit
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
            Areas We Serve in Lee&apos;s Summit
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.75)', margin: '0 0 28px', lineHeight: 1.65 }}>
            We serve homeowners throughout all of Lee&apos;s Summit and the surrounding Jackson
            County area, including established neighborhoods and newer developments.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Lakewood',
              'Legacy Park',
              "Downtown Lee's Summit",
              'Pryor Road Area',
              'M-291 Corridor',
              'Blue Parkway Area',
              'Ward Road',
              'Strother Road Area',
              'Adams Dairy Parkway Corridor',
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
            <span style={{ color: '#F5A623' }}>64063 &bull; 64064 &bull; 64081 &bull; 64082</span>
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
                body: "We visit your Lee's Summit home, assess crawl space conditions, measure humidity, inspect the liner, drainage, and wood framing — and provide a written estimate.",
              },
              {
                step: '02',
                title: 'Custom Solution',
                body: 'We design a moisture control plan specific to your home — whether that means encapsulation only, drainage additions, or a full system with dehumidifier and sump pump.',
              },
              {
                step: '03',
                title: 'Expert Installation',
                body: 'Our crew completes most Lee\'s Summit jobs in a single day. We clean up completely and walk you through the finished system before we leave.',
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
            Common Questions from Lee&apos;s Summit Homeowners
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
              Get a Free Crawl Space Estimate in Lee&apos;s Summit
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
