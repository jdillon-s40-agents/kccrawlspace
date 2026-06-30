import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Raymore MO | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Raymore, MO. Serving new and established neighborhoods in Cass County. Free inspection. Same-week service available.',
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
          name: 'Crawl Space Encapsulation Raymore MO',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-raymore-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://crawlspacekc.com',
      telephone: '+18169622111',
      areaServed: { '@type': 'City', name: 'Raymore', containedInPlace: { '@type': 'State', name: 'Missouri' } },
      address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Raymore MO',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: 'Raymore, MO',
      serviceType: 'Crawl Space Encapsulation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Raymore, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Raymore and the surrounding Cass County area. Primary ZIP code: 64083. We also serve homes in the Belton-Raymore corridor.',
          },
        },
        {
          '@type': 'Question',
          name: 'My newer Raymore home has a musty smell — can that be the crawl space?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Newer homes are not immune to crawl space moisture. Clay soil moisture evaporates into the crawl space regardless of how old the house is, and if vents are open, summer humidity adds to the problem. Musty odors in a newer home often indicate the crawl space needs attention.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Cass County clay soil cause crawl space moisture problems in Raymore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Cass County clay is moisture-retaining and creates consistent crawl space humidity year-round. A 20-mil liner, vent sealing, and a dehumidifier address this at the source.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Raymore crawl space has standing water after it rains — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Water after rain means drainage is the first priority. We assess grading, downspouts, and whether interior drainage and a sump pump are needed before encapsulation. Encapsulation alone cannot remove standing water.',
          },
        },
        {
          '@type': 'Question',
          name: 'How soon can you inspect my Raymore crawl space?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We typically offer same-week appointments in Raymore. Call (816) 962-2111 or fill out the form below.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Raymore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Raymore homes run $2,800–$5,500 for a complete system with liner and dehumidifier. Drainage issues add cost, which is assessed during the free inspection.',
          },
        },
      ],
    },
  ],
};

export default function RaymorePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ background: '#0D0D0D', ...sectionPad }}>
        <div style={{ ...maxW960, textAlign: 'center' }}>
          <span style={overlineDark}>Raymore, MO</span>
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
            <span style={{ color: '#F5A623' }}>Raymore</span>
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
            Raymore has grown rapidly over the past two decades, adding subdivisions on Cass County clay soil that creates crawl space moisture challenges from day one. Whether your Raymore home is newly built or 20 years old, crawl space humidity is a year-round consideration.
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
            Crawl Space Encapsulation in Raymore, MO
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Raymore seals the crawl space with a 20-mil reinforced liner, vent sealing, and a dehumidifier to control moisture from Cass County clay soil. Raymore&rsquo;s growing residential base — predominantly homes built in the 1990s–2010s — can develop crawl space humidity, musty odors, and insulation problems as the homes age and surrounding development affects drainage.
          </p>
        </div>
      </section>

      {/* 3. Why Raymore Homes Have Problems */}
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
            Why Raymore Homes Have Crawl Space Problems
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
                Cass County Clay Soil
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Raymore&rsquo;s rapid residential growth has been built on Cass County clay soil. Clay retains moisture near foundations year-round and expands when wet, creating consistent crawl space humidity conditions even without heavy rainfall.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                Newer Construction Is Not Immune
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Raymore is known for newer subdivisions, but newer construction on clay soil can still develop crawl space moisture problems. As new roads, rooftops, and pavement change how rainwater moves through a neighborhood, some homes see increased moisture under the crawl space years after construction.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                Flat to Gently Rolling Terrain
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Raymore&rsquo;s topography includes areas where water can pond near foundations after rain. Combined with clay soil that drains slowly, this means some Raymore crawl spaces see standing water or persistently damp conditions that require interior drainage before encapsulation.
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
            Services We Offer in Raymore
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
            Areas We Serve in Raymore
          </h2>
          <p style={{ fontSize: 16, color: '#93C5FD', marginBottom: 24, lineHeight: 1.6 }}>
            Downtown Raymore &bull; Foxwood area &bull; Shadow Valley area &bull; Stonegate area &bull; Creekmoor area (border) &bull; Belton-Raymore corridor &bull; 58 Highway area &bull; 71 Highway corridor
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['64083'].map((zip) => (
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
                body: 'We inspect your Raymore crawl space, check for standing water and drainage issues, assess moisture levels, and identify any mold or insulation damage before recommending a solution.',
              },
              {
                step: '02',
                title: 'Written Estimate',
                body: 'You receive a clear, itemized written estimate before any work begins. If drainage is needed first, we explain why and what it costs — no surprises.',
              },
              {
                step: '03',
                title: 'Same-Week Installation',
                body: 'Most Raymore encapsulation projects complete in a single day. Drainage work or larger crawl spaces may require two days. Your space is protected before we leave.',
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
            Frequently Asked Questions — Raymore
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Raymore, MO?',
                a: 'Yes. All of Raymore and the surrounding Cass County area. Primary ZIP code: 64083. We also serve homes in the Belton-Raymore corridor.',
              },
              {
                q: 'My newer Raymore home has a musty smell — can that be the crawl space?',
                a: "Yes. Newer homes are not immune to crawl space moisture. Clay soil moisture evaporates into the crawl space regardless of how old the house is, and if vents are open, summer humidity adds to the problem. Musty odors in a newer home often indicate the crawl space needs attention.",
              },
              {
                q: 'Does Cass County clay soil cause crawl space moisture problems in Raymore?',
                a: 'Yes. Cass County clay is moisture-retaining and creates consistent crawl space humidity year-round. A 20-mil liner, vent sealing, and a dehumidifier address this at the source.',
              },
              {
                q: 'My Raymore crawl space has standing water after it rains — what should I do?',
                a: 'Water after rain means drainage is the first priority. We assess grading, downspouts, and whether interior drainage and a sump pump are needed before encapsulation. Encapsulation alone cannot remove standing water.',
              },
              {
                q: 'How soon can you inspect my Raymore crawl space?',
                a: 'We typically offer same-week appointments in Raymore. Call (816) 962-2111 or fill out the form below.',
              },
              {
                q: 'What does crawl space encapsulation cost in Raymore?',
                a: 'Most Raymore homes run $2,800–$5,500 for a complete system with liner and dehumidifier. Drainage issues add cost, which is assessed during the free inspection.',
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
              Get a Free Estimate in Raymore
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
