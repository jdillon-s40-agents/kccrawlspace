import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Raytown, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Raytown, MO. Serving mid-century neighborhoods south of Kansas City. Jackson County clay soil specialist. Free inspection · same-week service.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-raytown-mo/',
  }};

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
          name: 'Raytown MO Crawl Space Encapsulation',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-raytown-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.crawlspacekc.com/#business',
      name: 'KC Crawl Space Specialists',
      telephone: '+18169622111',
      url: 'https://www.crawlspacekc.com',
      areaServed: { '@type': 'City', name: 'Raytown', containedInPlace: { '@type': 'State', name: 'Missouri' } },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Raytown, MO',
      provider: { '@id': 'https://www.crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Raytown', containedInPlace: { '@type': 'State', name: 'Missouri' } },
      description:
        'Complete crawl space encapsulation for Raytown MO homes including 20-mil liner, vent sealing, and commercial dehumidifier installation.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Raytown, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Raytown including the 350 Highway corridor, Blue Ridge area, and the south KC border. ZIP codes 64133 and 64138.',
          },
        },
        {
          '@type': 'Question',
          name: 'My 1960s Raytown home has a musty crawl space — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call for a free inspection. Older Raytown homes frequently have original open vents, deteriorated liner, and wet fiberglass insulation. We assess all of it and provide a written estimate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Jackson County clay soil cause crawl space problems in Raytown?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Clay soil throughout Raytown maintains damp conditions under the crawl space year-round. This persistent moisture source is why encapsulation with a dehumidifier (not just a floor liner) is typically the right solution in Raytown.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Raytown crawl space has mold on the wood framing — what now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mold on framing means crawl space humidity has been above 60% consistently. We treat the mold and address the moisture source through encapsulation and dehumidification to prevent it from returning.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Raytown?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Raytown projects complete in one day. Older homes with more deterioration or drainage issues may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Raytown?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Raytown homes run $2,800–$5,500 for a complete system with liner and dehumidifier. Free inspection and written estimate before any work.',
          },
        },
      ],
    },
  ],
};

export default function RaytownEncapsulationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 16,
            }}
          >
            Raytown, MO
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(36px,6vw,64px)',
              color: '#F9FAFB',
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Crawl Space Encapsulation in{' '}
            <span style={{ color: '#F5A623' }}>Raytown, MO</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 680 }}>
            Raytown is one of the Kansas City metro&apos;s most established suburbs — and its 1950s-1970s homes are among the most likely to have crawl space moisture, mold, and humidity problems. We help Raytown homeowners modernize their crawl space moisture control for good.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Link
              href="/contact"
              style={{
                background: '#F5A623',
                color: '#0D0D0D',
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                textTransform: 'uppercase' as const,
                fontSize: 17,
                letterSpacing: '.06em',
                padding: '14px 32px',
                borderRadius: 6,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get a Free Inspection
            </Link>
            <a
              href={PHONE_HREF}
              style={{
                color: '#F9FAFB',
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: 20,
                textDecoration: 'none',
                letterSpacing: '.02em',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#0D0D0D',
              marginBottom: 20,
            }}
          >
            Crawl Space Encapsulation in Raytown, MO
          </h2>
          <p style={{ color: '#4b5563', fontSize: 18, lineHeight: 1.75 }}>
            Crawl space encapsulation in Raytown seals the crawl space floor, walls, and vents with a 20-mil reinforced liner and commercial dehumidifier. Raytown&apos;s high concentration of mid-century homes with original open vents and inadequate vapor barriers, combined with Jackson County clay soil, makes crawl space moisture one of the most common home maintenance issues in the area.
          </p>
        </div>
      </section>

      {/* 3. WHY RAYTOWN HOMES HAVE CRAWL SPACE PROBLEMS */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Local Conditions
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 40,
            }}
          >
            Why Raytown Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Mid-Century Housing Stock',
                body: "Raytown was developed heavily between 1950 and 1975, when open vents and minimal vapor barriers were standard. Today, these original crawl space conditions are inadequate for Kansas City's humid climate. As homes age, original 6-mil liners deteriorate and moisture problems worsen.",
              },
              {
                title: 'Jackson County Clay Soil',
                body: "Raytown's soil is Jackson County clay — the same moisture-retaining soil that affects crawl spaces throughout the east KC metro. Clay holds moisture near the foundation year-round, creating a consistent humidity source that a floor liner alone is often not enough to control.",
              },
              {
                title: 'South KC Metro Location',
                body: "Raytown's position south of Kansas City proper puts it in the full Kansas City humidity zone. Summer outdoor humidity of 85-90% enters through open vents and raises crawl space humidity above the mold threshold quickly in older Raytown homes.",
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
                    textTransform: 'uppercase' as const,
                    fontSize: 20,
                    color: '#F5A623',
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              marginBottom: 12,
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#0D0D0D',
              marginBottom: 40,
            }}
          >
            Our Crawl Space Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {[
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Crawl Space Dehumidifier', href: '/crawl-space-dehumidifier-kansas-city/' },
              { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
              { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                  textDecoration: 'none',
                  color: '#F9FAFB',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '.03em',
                }}
              >
                {svc.label}
                <span style={{ display: 'block', color: '#F5A623', fontSize: 14, marginTop: 6 }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Service Area
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 20,
            }}
          >
            Areas We Serve in Raytown
          </h2>
          <p style={{ color: '#d1d5db', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
            We serve all of Raytown including the 350 Highway corridor, Blue Ridge Blvd area, Gregory Blvd area, Sterling area, Raytown Road corridor, South Kansas City border, and Lee&apos;s Summit Road area.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['64133', '64138'].map((zip) => (
              <span
                key={zip}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 6,
                  padding: '6px 16px',
                  color: '#F9FAFB',
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

      {/* 6. OUR PROCESS */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 40,
            }}
          >
            Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                step: '01',
                title: 'Free Inspection',
                body: 'We assess humidity levels, liner condition, vent status, wood health, and drainage. You get a written estimate before any work begins — no pressure, no surprises.',
              },
              {
                step: '02',
                title: 'Same-Week Installation',
                body: 'Our crew installs the 20-mil reinforced liner, seals all foundation vents, and installs a commercial-grade dehumidifier. Most Raytown homes complete in one day.',
              },
              {
                step: '03',
                title: 'Dry Crawl Space, Guaranteed',
                body: 'Once sealed and dehumidified, your crawl space stays below 50% RH year-round. Musty odors, falling insulation, and mold conditions are eliminated at the source.',
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
                    fontSize: 48,
                    color: '#F5A623',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    textTransform: 'uppercase' as const,
                    fontSize: 20,
                    color: '#F9FAFB',
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
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
              marginBottom: 12,
            }}
          >
            Payment Options
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#0D0D0D',
              marginBottom: 32,
            }}
          >
            Financing Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* 8. FAQ */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 36,
            }}
          >
            Raytown FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Raytown, MO?',
                a: 'Yes. All of Raytown including the 350 Highway corridor, Blue Ridge area, and the south KC border. ZIP codes 64133 and 64138.',
              },
              {
                q: 'My 1960s Raytown home has a musty crawl space — what should I do?',
                a: 'Call for a free inspection. Older Raytown homes frequently have original open vents, deteriorated liner, and wet fiberglass insulation. We assess all of it and provide a written estimate.',
              },
              {
                q: 'Does Jackson County clay soil cause crawl space problems in Raytown?',
                a: 'Yes. Clay soil throughout Raytown maintains damp conditions under the crawl space year-round. This persistent moisture source is why encapsulation with a dehumidifier (not just a floor liner) is typically the right solution in Raytown.',
              },
              {
                q: 'My Raytown crawl space has mold on the wood framing — what now?',
                a: 'Mold on framing means crawl space humidity has been above 60% consistently. We treat the mold and address the moisture source through encapsulation and dehumidification to prevent it from returning.',
              },
              {
                q: 'How long does crawl space encapsulation take in Raytown?',
                a: 'Most Raytown projects complete in one day. Older homes with more deterioration or drainage issues may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Raytown?',
                a: 'Most Raytown homes run $2,800–$5,500 for a complete system with liner and dehumidifier. Free inspection and written estimate before any work.',
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
                    textTransform: 'uppercase' as const,
                    fontSize: 17,
                    color: '#F9FAFB',
                    marginBottom: 10,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section
        style={{
          background: '#111827',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 32,
            }}
          >
            Get a Free Estimate in Raytown
          </h2>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
