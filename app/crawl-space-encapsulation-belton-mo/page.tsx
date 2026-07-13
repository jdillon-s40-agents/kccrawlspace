import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Belton, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Belton, MO. Serving established Cass County neighborhoods. Older homes especially. Free inspection. Same-week service.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-belton-mo/',
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
          name: 'Crawl Space Encapsulation Belton MO',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-belton-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://www.crawlspacekc.com',
      telephone: '+18169622111',
      areaServed: { '@type': 'City', name: 'Belton', containedInPlace: { '@type': 'State', name: 'Missouri' } },
      address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Belton MO',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: 'Belton, MO',
      serviceType: 'Crawl Space Encapsulation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Belton, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Belton, including Downtown Belton, the 58 Highway corridor, and the Raymore-Belton border area. Primary ZIP code: 64012.',
          },
        },
        {
          '@type': 'Question',
          name: 'My 1960s Belton home has a musty crawl space — what should I do first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Schedule a free inspection. Older Belton homes from the 1950s–1960s frequently have deteriorated original vapor barriers, open vents, and aged insulation. An inspection tells you exactly what\'s there and what the right solution is.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do older Belton homes have more crawl space problems than newer ones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally yes. Homes built before 1980 were often built with minimal vapor barriers and open vents — the standard of the era, but not adequate for today\'s moisture management needs. As these homes age, original materials deteriorate and moisture problems typically worsen.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Belton crawl space has wet or fallen insulation — what does that mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wet or fallen insulation means crawl space humidity has been consistently above 60% long enough to saturate the fiberglass batts. The insulation cannot be dried in place effectively and should be removed. Encapsulation addresses the underlying moisture condition.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Belton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Belton projects complete in one day. Older homes with more deterioration or drainage issues may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Belton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Belton homes run $2,800–$5,500 for a complete system. Older homes occasionally need additional mold treatment or drainage work, assessed during the free inspection.',
          },
        },
      ],
    },
  ],
};

export default function BeltonPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ background: '#0D0D0D', ...sectionPad }}>
        <div style={{ ...maxW960, textAlign: 'center' }}>
          <span style={overlineDark}>Belton, MO</span>
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
            <span style={{ color: '#F5A623' }}>Belton</span>
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
            Belton&rsquo;s established south metro neighborhoods include many mid-century homes with original crawl spaces that were never designed for today&rsquo;s moisture standards. We help Belton homeowners modernize their crawl space moisture control and stop humidity, mold, and odor problems.
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
            Crawl Space Encapsulation in Belton, MO
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Belton, MO seals the crawl space floor, walls, and vents with a 20-mil liner and dehumidifier to control moisture from Cass County clay soil and summer humidity. Belton&rsquo;s housing stock includes many homes from the 1950s–1980s with original vapor barriers and open vents that no longer meet modern moisture control standards.
          </p>
        </div>
      </section>

      {/* 3. Why Belton Homes Have Problems */}
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
            Why Belton Homes Have Crawl Space Problems
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
                Mid-Century Housing Stock
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Belton has a high proportion of homes built between 1950 and 1985 — an era when open foundation vents were standard and vapor barriers were minimal or absent. These original crawl space conditions create persistent moisture problems as homes age and original materials deteriorate.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                Cass County Clay Soil
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Belton sits on Cass County clay soil that retains moisture against the foundation year-round. Original vapor barriers in older Belton homes — often 6-mil plastic or less — are inadequate for managing the consistent moisture this soil creates.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ ...headingStyle, fontSize: 20, color: '#F5A623', margin: '0 0 10px' }}>
                South Metro Location
              </h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                Belton&rsquo;s south metro position means it gets the full force of Missouri and Kansas summer humidity. Open vents in Belton homes allow this summer air directly into crawl spaces, and the combination of soil moisture and outdoor humidity pushes crawl space conditions well above the mold threshold in warm months.
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
            Services We Offer in Belton
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
            Areas We Serve in Belton
          </h2>
          <p style={{ fontSize: 16, color: '#93C5FD', marginBottom: 24, lineHeight: 1.6 }}>
            Downtown Belton &bull; Raymore-Belton border area &bull; 58 Highway corridor &bull; Peculiar Road area &bull; 71 Highway corridor &bull; Belton Square area &bull; Odd Fellows area &bull; Bray Road area
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['64012'].map((zip) => (
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
                body: 'We inspect your Belton crawl space, check for deteriorated original materials, assess moisture levels, identify any mold on framing, and flag drainage issues before recommending a solution.',
              },
              {
                step: '02',
                title: 'Written Estimate',
                body: 'You receive a clear, itemized written estimate before any work begins. Older Belton homes sometimes need insulation removal or mold treatment — we explain exactly what is needed and why.',
              },
              {
                step: '03',
                title: 'Same-Week Installation',
                body: 'Most Belton encapsulation projects complete in a single day. We install the 20-mil liner, seal the vents, and commission the dehumidifier — leaving your crawl space modernized and moisture-controlled.',
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
            Frequently Asked Questions — Belton
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Belton, MO?',
                a: 'Yes. All of Belton, including Downtown Belton, the 58 Highway corridor, and the Raymore-Belton border area. Primary ZIP code: 64012.',
              },
              {
                q: 'My 1960s Belton home has a musty crawl space — what should I do first?',
                a: "Schedule a free inspection. Older Belton homes from the 1950s–1960s frequently have deteriorated original vapor barriers, open vents, and aged insulation. An inspection tells you exactly what's there and what the right solution is.",
              },
              {
                q: 'Do older Belton homes have more crawl space problems than newer ones?',
                a: "Generally yes. Homes built before 1980 were often built with minimal vapor barriers and open vents — the standard of the era, but not adequate for today's moisture management needs. As these homes age, original materials deteriorate and moisture problems typically worsen.",
              },
              {
                q: 'My Belton crawl space has wet or fallen insulation — what does that mean?',
                a: 'Wet or fallen insulation means crawl space humidity has been consistently above 60% long enough to saturate the fiberglass batts. The insulation cannot be dried in place effectively and should be removed. Encapsulation addresses the underlying moisture condition.',
              },
              {
                q: 'How long does crawl space encapsulation take in Belton?',
                a: 'Most Belton projects complete in one day. Older homes with more deterioration or drainage issues may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Belton?',
                a: 'Most Belton homes run $2,800–$5,500 for a complete system. Older homes occasionally need additional mold treatment or drainage work, assessed during the free inspection.',
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
              Get a Free Estimate in Belton
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
