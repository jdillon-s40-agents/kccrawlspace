import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Liberty, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Liberty, MO. Serving Historic Liberty, Shoal Creek area, and all of Clay County. Older and newer homes. Free inspection · same-week service.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-liberty-mo/',
  }};

const cardStyle = {
  background: '#111827',
  border: '1px solid rgba(255,255,255,.08)',
  borderRadius: 12,
  padding: 20,
} as const;

const faqCardStyle = {
  background: '#0D0D0D',
  border: '1px solid rgba(255,255,255,.1)',
  borderRadius: 12,
  padding: '22px 24px',
} as const;

const overlineDark = {
  font: "600 13px 'Inter',sans-serif",
  letterSpacing: '.16em',
  textTransform: 'uppercase' as const,
  color: '#F5A623',
  display: 'block',
  marginBottom: 12,
} as const;

const overlineLight = {
  font: "600 13px 'Inter',sans-serif",
  letterSpacing: '.16em',
  textTransform: 'uppercase' as const,
  color: '#1B3A6B',
  display: 'block',
  marginBottom: 12,
} as const;

const headingStyle = {
  fontFamily: "'Barlow Condensed',sans-serif",
  fontWeight: 800,
  textTransform: 'uppercase' as const,
} as const;

const goldBtn = {
  display: 'inline-block',
  background: '#F5A623',
  color: '#0D0D0D',
  font: "800 16px 'Inter',sans-serif",
  padding: '16px 26px',
  borderRadius: 10,
  boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)',
  textDecoration: 'none',
} as const;

const sectionPad = {
  padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
} as const;

const maxW960 = {
  maxWidth: 960,
  margin: '0 auto',
} as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Encapsulation Liberty MO',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-liberty-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://www.crawlspacekc.com',
      telephone: '+18169622111',
      areaServed: { '@type': 'City', name: 'Liberty', containedInPlace: { '@type': 'State', name: 'Missouri' } },
      address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Liberty MO',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: 'Liberty, MO',
      serviceType: 'Crawl Space Encapsulation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Liberty, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Liberty, including Historic Downtown, the Shoal Creek area, and newer developments north of the city. Primary ZIP code: 64068.',
          },
        },
        {
          '@type': 'Question',
          name: 'My historic Liberty home near Downtown has crawl space moisture problems — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Older homes near Downtown Liberty frequently have original crawl spaces with no liner and open vents. A free inspection tells you exactly what\'s there and what the right solution is for the specific conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Clay County soil cause crawl space problems in Liberty?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Clay soil throughout Liberty and Clay County holds moisture near the foundation year-round, making crawl space humidity a persistent issue regardless of rainfall. Encapsulation with a dehumidifier addresses the ongoing soil moisture source directly.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Liberty crawl space has mold on the joists — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mold on joists means crawl space humidity has been consistently above 60% long enough for mold to establish. We treat the affected framing and address the moisture source through encapsulation and dehumidification to prevent recurrence.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Liberty?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Liberty projects complete in one day. Older homes or those with drainage needs may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Liberty?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Liberty homes run $2,800–$5,500 for a complete encapsulation system. Free inspection and written estimate provided at no cost.',
          },
        },
      ],
    },
  ],
};

export default function LibertyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ background: '#0D0D0D', ...sectionPad }}>
        <div style={{ ...maxW960, textAlign: 'center' }}>
          <span style={overlineDark}>Liberty, MO</span>
          <h1
            style={{
              ...headingStyle,
              fontSize: 'clamp(36px,7vw,72px)',
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Crawl Space Encapsulation in{' '}
            <span style={{ color: '#F5A623' }}>Liberty</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(15px,2vw,18px)',
              color: '#9CA3AF',
              maxWidth: 640,
              margin: '0 auto 32px',
              lineHeight: 1.65,
            }}
          >
            Liberty&rsquo;s historic neighborhoods and newer northern Clay County developments both face crawl space moisture challenges — Clay County soil holds moisture, and Liberty summers are as humid as anywhere in the KC metro. We provide complete crawl space moisture control for Liberty homeowners.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#inspection-form" style={goldBtn}>Get a Free Estimate</a>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#fff',
                font: "800 16px 'Inter',sans-serif",
                padding: '16px 26px',
                borderRadius: 10,
                border: '2px solid rgba(255,255,255,.25)',
                textDecoration: 'none',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Quick Answer */}
      <section style={{ background: '#F9FAFB', ...sectionPad }}>
        <div style={maxW960}>
          <span style={overlineLight}>Quick Answer</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Encapsulation in Liberty, MO
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Liberty, MO seals the crawl space floor, walls, and vents with a 20-mil reinforced liner and commercial dehumidifier. Liberty has a mix of older historic homes near Downtown and newer construction in the northern areas, all on Clay County soil that holds moisture year-round and promotes crawl space humidity, musty odors, and wood damage.
          </p>
        </div>
      </section>

      {/* 3. Why Liberty Homes Have Problems */}
      <section style={{ background: '#0D0D0D', ...sectionPad }}>
        <div style={maxW960}>
          <span style={overlineDark}>Local Conditions</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Why Liberty Homes Have Crawl Space Problems
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                Clay County Soil
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Liberty sits in Clay County on soil with significant clay content that holds moisture year-round. Like Jackson and Johnson County soil, Clay County clay maintains damp conditions under crawl spaces between rain events, creating a persistent humidity source that requires active management.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                Historic Homes Near Downtown
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Liberty&rsquo;s downtown area and established neighborhoods contain a mix of older homes — some from the early 1900s — with original crawl spaces that predate modern moisture control standards. These homes often have no vapor barrier, open vents, and aged wood framing that can be particularly vulnerable to moisture.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                Northern Growth &amp; New Development
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Liberty has seen significant residential growth north of the historic core. Newer homes in these areas benefit from better construction, but grading and drainage issues in developing areas, combined with Clay County soil, can still lead to crawl space moisture problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ background: '#F9FAFB', ...sectionPad }}>
        <div style={maxW960}>
          <span style={overlineLight}>What We Do</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            Services We Offer in Liberty
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 16,
            }}
          >
            {[
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Crawl Space Dehumidifier', href: '/crawl-space-dehumidifier-kansas-city/' },
              { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
              { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '20px 22px',
                  textDecoration: 'none',
                  color: '#0D0D0D',
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                <span style={{ color: '#F5A623', marginRight: 8 }}>→</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Areas We Serve */}
      <section style={{ background: '#1B3A6B', ...sectionPad }}>
        <div style={maxW960}>
          <span style={overlineDark}>Coverage</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Areas We Serve in Liberty
          </h2>
          <p style={{ fontSize: 16, color: '#93C5FD', marginBottom: 24, lineHeight: 1.6 }}>
            Historic Downtown Liberty &bull; Shoal Creek area &bull; Springdale area &bull; Claywoods area &bull; Ridgecrest area &bull; Mill Creek area &bull; Hampton area &bull; Oakmont area
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['64068'].map((zip) => (
              <span
                key={zip}
                style={{
                  background: 'rgba(255,255,255,.12)',
                  color: '#fff',
                  borderRadius: 20,
                  padding: '6px 16px',
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: '.04em',
                }}
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Process */}
      <section style={{ background: '#0D0D0D', ...sectionPad }}>
        <div style={maxW960}>
          <span style={overlineDark}>How It Works</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#fff',
              margin: '0 0 32px',
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
                body: 'We inspect your Liberty crawl space, assess moisture levels, look for mold or damaged insulation, and identify drainage needs before recommending a solution.',
              },
              {
                step: '02',
                title: 'Written Estimate',
                body: 'You receive a clear, itemized written estimate before any work begins. No surprises, no pressure — just a straightforward plan for your specific crawl space conditions.',
              },
              {
                step: '03',
                title: 'Same-Week Installation',
                body: 'Most Liberty encapsulation projects complete in a single day. We install the liner, seal the vents, and commission the dehumidifier — fully protected before we leave.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} style={cardStyle}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 42,
                    color: '#F5A623',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {step}
                </div>
                <h3 style={{ ...headingStyle, fontSize: 20, color: '#fff', margin: '0 0 10px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Financing */}
      <section style={{ background: '#F9FAFB', ...sectionPad }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <span style={overlineLight}>Financing</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            Financing Options
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* 8. FAQ */}
      <section style={{ background: '#1B3A6B', ...sectionPad }}>
        <div style={maxW960}>
          <span style={overlineDark}>FAQ</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Frequently Asked Questions — Liberty
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Liberty, MO?',
                a: 'Yes. All of Liberty, including Historic Downtown, the Shoal Creek area, and newer developments north of the city. Primary ZIP code: 64068.',
              },
              {
                q: 'My historic Liberty home near Downtown has crawl space moisture problems — what should I do?',
                a: "Older homes near Downtown Liberty frequently have original crawl spaces with no liner and open vents. A free inspection tells you exactly what's there and what the right solution is for the specific conditions.",
              },
              {
                q: 'Does Clay County soil cause crawl space problems in Liberty?',
                a: 'Yes. Clay soil throughout Liberty and Clay County holds moisture near the foundation year-round, making crawl space humidity a persistent issue regardless of rainfall. Encapsulation with a dehumidifier addresses the ongoing soil moisture source directly.',
              },
              {
                q: 'My Liberty crawl space has mold on the joists — what should I do?',
                a: 'Mold on joists means crawl space humidity has been consistently above 60% long enough for mold to establish. We treat the affected framing and address the moisture source through encapsulation and dehumidification to prevent recurrence.',
              },
              {
                q: 'How long does crawl space encapsulation take in Liberty?',
                a: 'Most Liberty projects complete in one day. Older homes or those with drainage needs may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Liberty?',
                a: 'Most Liberty homes run $2,800–$5,500 for a complete encapsulation system. Free inspection and written estimate provided at no cost.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={faqCardStyle}>
                <h3
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#fff',
                    margin: '0 0 8px',
                  }}
                >
                  {q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Form */}
      <section id="inspection-form" style={{ background: '#111827', ...sectionPad }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2
              style={{
                ...headingStyle,
                fontSize: 'clamp(30px,6vw,50px)',
                color: '#fff',
                margin: '0 0 12px',
              }}
            >
              Get a Free Estimate in Liberty
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
