import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation De Soto, KS | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in De Soto, KS. Southwest Johnson County near K-10 corridor. Older and newer homes. Lifetime warranty. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-de-soto-ks/',
  }};

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

export default function DeSotoPage() {
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Crawl Space Encapsulation De Soto KS',
                    item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-de-soto-ks/',
                  },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                '@id': 'https://www.crawlspacekc.com/#business',
                url: 'https://www.crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'De Soto',
                  addressRegion: 'KS',
                  addressCountry: 'US',
                },
                areaServed: [
                  {
                    '@type': 'City',
                    name: 'De Soto',
                    containedInPlace: { '@type': 'State', name: 'Kansas' },
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Crawl Space Encapsulation in De Soto',
                provider: { '@id': 'https://www.crawlspacekc.com/#business' },
                areaServed: { '@type': 'City', name: 'De Soto' },
                description:
                  'Full crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for De Soto, KS homeowners — serving both historic downtown and K-10 corridor developments in southwest Johnson County.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you serve De Soto, KS?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We serve all of De Soto, including Historic Downtown De Soto, the K-10 corridor, Lexington Ave area, and communities near the Gardner and Eudora borders. ZIP code: 66018.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do older downtown De Soto homes have specific crawl space issues?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Yes. De Soto's older homes near the historic town center typically have original crawl space conditions — open foundation vents and minimal or deteriorated vapor barriers that predate modern moisture management standards. These homes benefit from a full encapsulation update.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do newer K-10 corridor homes in De Soto need crawl space encapsulation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Newer homes along K-10 are built on Johnson County clay soil and subject to the same Kansas City summer humidity as older homes. As surrounding development alters drainage patterns, newer De Soto homes can see crawl space moisture develop even within a few years of construction.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Johnson County clay in De Soto the same as elsewhere in the county?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Yes. De Soto sits on Johnson County clay soil that holds moisture near foundations year-round. Like all of Johnson County, De Soto crawl spaces face persistent ground moisture evaporation that makes active humidity control — not just a floor liner — the right solution.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does crawl space encapsulation take in De Soto?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most De Soto homes are completed in one day. Larger crawl spaces or those requiring insulation removal may take two days. We provide a clear timeline in the written estimate.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What does crawl space encapsulation cost in De Soto?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most De Soto homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate before any work.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* 1. HERO */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 16px',
            }}
          >
            De Soto, KS
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
            <span style={{ color: '#F5A623' }}>De Soto</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#9CA3AF', maxWidth: 640, margin: '0 0 36px', lineHeight: 1.6 }}>
            De Soto is a southwest Johnson County community along K-10 with a mix of older hometown properties and newer development on clay soil. We help De Soto homeowners control crawl space moisture year-round.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
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
              Get a Free Inspection
            </a>
            <a
              href={PHONE_HREF}
              style={{
                color: '#fff',
                font: "600 16px 'Inter',sans-serif",
                textDecoration: 'none',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            The Short Answer
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Encapsulation in De Soto, KS
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, maxWidth: 720, margin: 0 }}>
            Crawl space encapsulation in De Soto seals the crawl space against Johnson County clay soil moisture and Kansas City summer humidity. De Soto's older downtown homes and newer K-10 corridor developments both experience crawl space moisture, musty odors, and humidity challenges that a sealed and dehumidified crawl space resolves.
          </p>
        </div>
      </section>

      {/* 3. WHY DE SOTO HOMES HAVE PROBLEMS */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Root Causes
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Why De Soto Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Southwest Johnson County Clay',
                body: 'De Soto sits on Johnson County clay soil that holds moisture near foundations year-round. Like all of Johnson County, De Soto crawl spaces face persistent ground moisture evaporation that makes active humidity control — not just a floor liner — the right solution.',
              },
              {
                title: 'Mix of Home Ages',
                body: 'De Soto has older homes near the historic town center and newer construction along K-10. Older homes need original crawl space conditions updated; newer homes need protection as drainage patterns around them settle with continuing development.',
              },
              {
                title: 'K-10 Corridor Growth',
                body: 'The K-10 corridor through De Soto continues to attract development. As new construction alters surface drainage, established De Soto homes can see changed moisture conditions in their crawl spaces over time.',
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
                <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <Check size={18} />
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 36px',
            }}
          >
            Services We Offer in De Soto
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {[
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Dehumidifier', href: '/crawl-space-dehumidifier-kansas-city/' },
              { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
              { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '20px 22px',
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Check size={16} />
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 17,
                      textTransform: 'uppercase' as const,
                      color: '#1B3A6B',
                    }}
                  >
                    {svc.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 28px',
            }}
          >
            Areas We Serve in De Soto
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Historic Downtown De Soto',
              'K-10 Corridor',
              'Lexington Ave Area',
              'Gardner Border',
              'Kill Creek Area',
              'Eudora Border',
            ].map((n) => (
              <span
                key={n}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 100,
                  padding: '6px 16px',
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: "'Inter',sans-serif",
                }}
              >
                {n}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', margin: 0 }}>
            <strong style={{ color: '#fff' }}>ZIP Codes Served:</strong> 66018
          </p>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {[
              {
                step: '01',
                title: 'Inspection',
                body: 'We inspect your De Soto crawl space at no charge — assessing moisture levels, liner condition, insulation, vent status, and whether K-10 corridor development has changed drainage conditions near your foundation.',
              },
              {
                step: '02',
                title: 'Solution',
                body: 'We provide a written estimate with a clear scope. Older downtown De Soto homes typically need full vent sealing and liner installation; newer homes may need drainage attention as development continues nearby. We explain every recommendation.',
              },
              {
                step: '03',
                title: 'Installation',
                body: 'Our crew installs the 20-mil liner, seals vents and walls, removes wet insulation if needed, and sets up the commercial dehumidifier — typically completed in one day.',
              },
            ].map((step) => (
              <div
                key={step.step}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 36,
                    color: '#F5A623',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {step.step}
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
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Payment Options
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Financing Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* 8. FAQ */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {[
              {
                q: 'Do you serve De Soto, KS?',
                a: 'Yes. We serve all of De Soto, including Historic Downtown De Soto, the K-10 corridor, Lexington Ave area, and communities near the Gardner and Eudora borders. ZIP code: 66018.',
              },
              {
                q: 'Do older downtown De Soto homes have specific crawl space issues?',
                a: "Yes. De Soto's older homes near the historic town center typically have original crawl space conditions — open foundation vents and minimal or deteriorated vapor barriers that predate modern moisture management standards. These homes benefit from a full encapsulation update.",
              },
              {
                q: 'Do newer K-10 corridor homes in De Soto need crawl space encapsulation?',
                a: 'Yes. Newer homes along K-10 are built on Johnson County clay soil and subject to the same Kansas City summer humidity as older homes. As surrounding development alters drainage patterns, newer De Soto homes can see crawl space moisture develop even within a few years of construction.',
              },
              {
                q: 'Is Johnson County clay in De Soto the same as elsewhere in the county?',
                a: "Yes. De Soto sits on Johnson County clay soil that holds moisture near foundations year-round. Like all of Johnson County, De Soto crawl spaces face persistent ground moisture evaporation that makes active humidity control — not just a floor liner — the right solution.",
              },
              {
                q: 'How long does crawl space encapsulation take in De Soto?',
                a: 'Most De Soto homes are completed in one day. Larger crawl spaces or those requiring insulation removal may take two days. We provide a clear timeline in the written estimate.',
              },
              {
                q: 'What does crawl space encapsulation cost in De Soto?',
                a: 'Most De Soto homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate before any work.',
              },
            ].map((faq) => (
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
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FORM */}
      <section id="inspection-form" style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
              Get a Free Estimate in De Soto
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week inspections available.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
