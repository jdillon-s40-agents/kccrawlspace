import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Lenexa KS | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Lenexa, KS. Serving Shawnee Mission area, 87th Street Parkway, and all of Johnson County. Free inspection. Same-week appointments.',
};

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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Encapsulation Lenexa KS',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-lenexa-ks/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://crawlspacekc.com',
      telephone: '+18169622111',
      areaServed: { '@type': 'City', name: 'Lenexa', containedInPlace: { '@type': 'State', name: 'Kansas' } },
      address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Lenexa KS',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: 'Lenexa, KS',
      serviceType: 'Crawl Space Encapsulation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Lenexa, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Lenexa, including neighborhoods along 87th Street Pkwy, Prairie Star Pkwy, and the K-10 corridor. ZIP codes 66215, 66219, 66220, and 66285.',
          },
        },
        {
          '@type': 'Question',
          name: 'My older Lenexa home near the Shawnee Mission area has a musty crawl space — what\'s causing it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Older Lenexa homes in the eastern areas near Shawnee Mission were built with open vents and original thin liners. Kansas City summer humidity enters through open vents, raises crawl space humidity above 60%, and produces the musty odors you\'re smelling in the living area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Lenexa clay soil cause crawl space moisture issues?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Johnson County clay throughout Lenexa holds moisture near the foundation year-round. Even in dry weather, the soil maintains conditions that push humidity into the crawl space air constantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you serve the newer Lenexa areas near K-10?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all Lenexa ZIP codes including newer developments along K-10 and Prairie Star Pkwy.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Lenexa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Drainage issues or larger crawl spaces may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Lenexa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lenexa homes run $2,800–$5,500 for a complete system. Free inspection and written estimate before any work.',
          },
        },
      ],
    },
  ],
};

export default function LenexaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ background: '#0D0D0D', ...sectionPad }}>
        <div style={{ ...maxW960, textAlign: 'center' }}>
          <span style={overlineDark}>Lenexa, KS</span>
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
            <span style={{ color: '#F5A623' }}>Lenexa</span>
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
            Lenexa&rsquo;s residential neighborhoods span decades of development on Johnson County clay soil. Whether your home is a 1970s ranch near the Shawnee Mission border or a newer build near Prairie Star Parkway, crawl space humidity is a year-round challenge in Lenexa.
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
        <div style={{ ...maxW960 }}>
          <span style={overlineLight}>Quick Answer</span>
          <h2
            style={{
              ...headingStyle,
              fontSize: 'clamp(26px,5vw,42px)',
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Encapsulation in Lenexa, KS
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Lenexa seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier to control Johnson County clay soil moisture. Lenexa homes — from established neighborhoods near the Shawnee Mission border to newer developments in the southwest — benefit from year-round moisture control that open vents and thin liners cannot provide.
          </p>
        </div>
      </section>

      {/* 3. Why Lenexa Homes Have Problems */}
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
            Why Lenexa Homes Have Crawl Space Problems
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            <div style={cardStyle}>
              <h3
                style={{
                  ...headingStyle,
                  fontSize: 20,
                  color: '#F5A623',
                  margin: '0 0 10px',
                }}
              >
                Johnson County Clay Soil
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Lenexa sits on the same Johnson County clay that affects crawl spaces throughout the Kansas City KS metro. Clay soil holds moisture against the foundation year-round, creating a persistent humidity source in crawl spaces regardless of rainfall or season.
              </p>
            </div>
            <div style={cardStyle}>
              <h3
                style={{
                  ...headingStyle,
                  fontSize: 20,
                  color: '#F5A623',
                  margin: '0 0 10px',
                }}
              >
                Mixed Housing Eras
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Lenexa has both established 1970s–1980s neighborhoods in the eastern areas and newer construction along Prairie Star Parkway and K-10. Older homes often have original open vents and inadequate liners; newer homes in developing areas can see drainage changes as surrounding land is graded.
              </p>
            </div>
            <div style={cardStyle}>
              <h3
                style={{
                  ...headingStyle,
                  fontSize: 20,
                  color: '#F5A623',
                  margin: '0 0 10px',
                }}
              >
                Adjacent to Corporate &amp; Industrial Areas
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Unlike purely residential suburbs, Lenexa has large corporate campuses and business parks. Residential areas adjacent to recent commercial development sometimes experience altered surface water drainage patterns, which can affect crawl space moisture conditions.
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
            Services We Offer in Lenexa
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
                  transition: 'border-color .2s',
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
            Areas We Serve in Lenexa
          </h2>
          <p style={{ fontSize: 16, color: '#93C5FD', marginBottom: 24, lineHeight: 1.6 }}>
            Shawnee Mission area border &bull; 87th Street Pkwy corridor &bull; Prairie Star Pkwy &bull; K-10 corridor &bull; Renner Blvd area &bull; Rosehill Road area &bull; College Blvd area &bull; Lenexa Rd area
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['66215', '66219', '66220', '66285'].map((zip) => (
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
                body: 'We inspect your Lenexa crawl space, assess moisture levels, check for mold or damaged insulation, and identify any drainage issues before recommending a solution.',
              },
              {
                step: '02',
                title: 'Written Estimate',
                body: 'You receive a clear, itemized written estimate before any work begins. No surprises, no pressure. We explain exactly what we recommend and why.',
              },
              {
                step: '03',
                title: 'Same-Week Installation',
                body: 'Most Lenexa encapsulation projects complete in a single day. We install the liner, seal the vents, and commission the dehumidifier — leaving your crawl space dry and protected.',
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
                <h3
                  style={{
                    ...headingStyle,
                    fontSize: 20,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
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
            Frequently Asked Questions — Lenexa
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Lenexa, KS?',
                a: 'Yes. All of Lenexa, including neighborhoods along 87th Street Pkwy, Prairie Star Pkwy, and the K-10 corridor. ZIP codes 66215, 66219, 66220, and 66285.',
              },
              {
                q: "My older Lenexa home near the Shawnee Mission area has a musty crawl space — what's causing it?",
                a: "Older Lenexa homes in the eastern areas near Shawnee Mission were built with open vents and original thin liners. Kansas City summer humidity enters through open vents, raises crawl space humidity above 60%, and produces the musty odors you're smelling in the living area.",
              },
              {
                q: 'Does Lenexa clay soil cause crawl space moisture issues?',
                a: 'Yes. Johnson County clay throughout Lenexa holds moisture near the foundation year-round. Even in dry weather, the soil maintains conditions that push humidity into the crawl space air constantly.',
              },
              {
                q: 'Do you serve the newer Lenexa areas near K-10?',
                a: 'Yes. We serve all Lenexa ZIP codes including newer developments along K-10 and Prairie Star Pkwy.',
              },
              {
                q: 'How long does crawl space encapsulation take in Lenexa?',
                a: 'Most projects complete in one day. Drainage issues or larger crawl spaces may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Lenexa?',
                a: 'Most Lenexa homes run $2,800–$5,500 for a complete system. Free inspection and written estimate before any work.',
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
              Get a Free Estimate in Lenexa
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
